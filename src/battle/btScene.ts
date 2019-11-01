class BtScene extends egret.DisplayObjectContainer {
    private _sandTable: SandTable;
    private _btType: number = 0; // 0经典模式,1骰子模式
    private _clsView: ClassicView = null
    private _diceView: DiceView = null

    constructor(type:number) {
        super()
        this._btType = type;

        Net.regMsgProc("net_latency_res", this.netLatencyResponse, this)
        Net.regMsgProc("pb.ExchangeOptData", this.syncOptData, this)

        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event: egret.Event) {
        this.showSandTable();

        fairygui.UIPackage.addPackage("battle");
        this.addChild(fairygui.GRoot.inst.displayObject);

        if (this._btType == 0) {
            this.openClassicView();
        } else if (this._btType == 1) {
            this.openDiceView()
        }
    }
    public onExit() {
        Net.delMsgTarget(this);
        this._sandTable.clear();
        Battle.inst.start = false;

        if (this._clsView) {
            this._clsView.destroy()
            this._clsView = null
        } else if (this._diceView) {
            this._diceView.destroy()
            this._diceView = null
        }

        this.removeChild(fairygui.GRoot.inst.displayObject);
        // fairygui.UIPackage.removePackage("battle");

        this.parent.removeChild(this);
    }

    private showSandTable() {
        let stageW = this.stage.stageWidth;
        let stageH = this.stage.stageHeight;

        this._sandTable = new SandTable()
        this.addChild(this._sandTable);
        this._sandTable.anchorOffsetX = 0.5;
        this._sandTable.anchorOffsetY = 0.5;
        this._sandTable.x = stageW / 2
        this._sandTable.y = stageH / 2
        // table.scaleX = 0.65 //1.5 //0.5
        // table.scaleY = 0.65 //1.5 //0.5
        this._sandTable.scaleToEdge()

        let ctrlPanel = new CtrlPanel(this._sandTable);
        this.addChild(ctrlPanel)
    }

    private openClassicView() {
        this._clsView = new ClassicView(this._sandTable);
        this.addChild(this._clsView);
    }
    private openDiceView() {
        this._diceView = new DiceView(this._sandTable);
        this.addChild(this._diceView);
    }
    private netLatencyResponse(data:{lag:number}) {
        // Util.log("test net latency:", data.lag)
        if (this._clsView) {
            this._clsView.showNetLatency(data.lag);
        } else if (this._diceView) {
            this._diceView.showNetLatency(data.lag);
        }
    }
    private syncOptData(msg:pb.ExchangeOptData) {
        let data:IOptData = JSON.parse(msg.optData)
        // Util.log("sync opt data:", msg.optData, opt) // 
        if (data.opt == "shoot") {
            this._sandTable.shoot(data);
            if (this._clsView) {
                // 
            } else if (this._diceView) {
                this._diceView.resetDiceType();
            }
        } else if (data.opt == "bet") {
            this._sandTable.setBet(data.bet);
        } else if (data.opt == "start") {
            Util.log("battle start 。。。")
            Battle.inst.start = true;

            if (this._clsView) {
                // 
            } else if (this._diceView) {
                this._diceView.start();
            }
        } else if (data.opt == "stop") {
            Util.log("battle stop 。。。")
            Battle.inst.start = false;
        }
    }
    public showDebug(debug:string) {
        if (this._clsView) {
            this._clsView.showDebug(debug);
        } else if (this._diceView) {
            this._diceView.showDebug(debug);
        }
    }
}