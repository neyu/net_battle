class BtScene extends egret.DisplayObjectContainer {
    private _btUI: fairygui.GComponent;
    private _sandTable: SandTable;

    constructor() {
        super()

        net.regMsgProc("net_latency_res", this.netLatencyResponse, this)
        net.regMsgProc("msgProto.ExchangeOptData", this.syncOptData, this)

        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event: egret.Event) {
        this.showSandTable();

        fairygui.UIPackage.addPackage("battle");
        this.addChild(fairygui.GRoot.inst.displayObject);

        this.openLobbyView();
    }
    public onExit() {
        net.delMsgTarget(this);

        fairygui.GRoot.inst.removeChild(this._btUI);

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

    private openLobbyView() {
        this._btUI = fairygui.UIPackage.createObject("battle", "main").asCom;
        fairygui.GRoot.inst.addChild(this._btUI);
        this._btUI.opaque = false;

        let exitBtn = this._btUI.getChild("n19").asButton
        exitBtn.addClickListener(this.__clickExit, this)

        let lbNick = this._btUI.getChild("n21").asTextField
        lbNick.text = Login.inst._userData.nickName;

        let lbMode = this._btUI.getChild("n36").asTextField
        lbMode.text = "当前模式：经典模式"

        let btnDealer = this._btUI.getChild("n24").asButton;
        btnDealer.addClickListener(this.__clickDealer, this);
        
        let btnReset = this._btUI.getChild("n29").asButton;
        btnReset.addClickListener(this.__clickReset, this);
        
        let btnBet = this._btUI.getChild("n26").asButton;
        btnBet.addClickListener(this.__clickBet, this);

        let ctrlDice = this._btUI.getController("dice")
        ctrlDice.addEventListener(fairygui.StateChangeEvent.CHANGED, this.__clickDiceMode, this)
    }

    private __clickExit(evt:Event): void {
        Battle.inst.gotoLobby()
    }
    private __clickDealer(evt:Event): void {
        Battle.inst.mode = 1;
        this._sandTable.clear()
    }
    private __clickReset(evt:Event): void {
        Battle.inst.mode = 0;
        this._sandTable.clear()
    }
    private __clickBet(evt:Event): void {
        let lbBet = this._btUI.getChild("n35").asTextField;
        lbBet.text = "+1"
    }
    private __clickDiceMode(evt:Event): void {
        let ctrlDice = this._btUI.getController("dice")
        Util.log("dice mode set:", ctrlDice.selectedIndex)
        Battle.inst._diceType = ctrlDice.selectedIndex;
    }
    private netLatencyResponse(data:{lag:number}) {
        // Util.log("test net latency:", data.lag)

        let lbLag = this._btUI.getChild("n18").asTextField
        lbLag.text = data.lag.toString() + "ms";
    }
    private syncOptData(msg:msgProto.ExchangeOptData) {
        let opt:IOptData = JSON.parse(msg.optData)
        // Util.log("sync opt data:", msg.optData, opt) // 

        this._sandTable.shoot(opt);
    }
    public showDebug(debug:string) {
        let lbDebug = this._btUI.getChild("n20").asTextField;
        lbDebug.text = debug;
    }
}