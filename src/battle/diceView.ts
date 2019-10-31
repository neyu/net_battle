class DiceView extends egret.DisplayObjectContainer {
    private _sandTable: SandTable;
    private _diceUI: fairygui.GComponent;
    private _betTag: number = 1;
    private _tick: number = 30000; // ms
    private _round: number = 0;

    constructor(sandTable:SandTable) {
        super()

        this._sandTable = sandTable;

        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    private onAddToStage(evt:egret.Event) {
        this._diceUI = fairygui.UIPackage.createObject("battle", "dice").asCom;
        fairygui.GRoot.inst.addChild(this._diceUI);
        this._diceUI.opaque = false;

        let exitBtn = this._diceUI.getChild("n19").asButton
        exitBtn.addClickListener(this.__clickExit, this)

        let lbNick = this._diceUI.getChild("n21").asTextField
        lbNick.text = Login.inst._userData.nickName;

        
        let point = this._sandTable.localToGlobal(this._sandTable._poolPosX, this._sandTable._poolPosY)

        let btnBet = this._diceUI.getChild("n26").asButton;
        btnBet.addClickListener(this.__clickBet, this);
        btnBet.y = point.y -10

        this._diceUI.getChild("n41").asTextField.y = btnBet.y - 45;
        this._diceUI.getChild("n42").asTextField.y = btnBet.y - 45;
        this._diceUI.getChild("n40").asTextField.y = btnBet.y - 25;
        this._diceUI.getChild("n38").asTextField.y = btnBet.y - 30;
        
        let btnStart = this._diceUI.getChild("n29").asButton;
        btnStart.addClickListener(this.__clickStart, this);
        btnStart.y = btnBet.y + 35

        let ctrlDice = this._diceUI.getController("func")
        ctrlDice.addEventListener(fairygui.StateChangeEvent.CHANGED, this.__clickDiceMode, this)
        this._diceUI.getChild("n32").asButton.y = btnStart.y;
        this._diceUI.getChild("n33").asButton.y = btnStart.y;
        this._diceUI.getChild("n34").asButton.y = btnStart.y;
        
        if (!Battle.inst.isMaster()) {
            btnBet.enabled = false;
            btnStart.enabled = false;
        }
    }
    public destroy() {
        fairygui.GRoot.inst.removeChild(this._diceUI)
        this.parent.removeChild(this)
    }
    private __clickExit(evt:Event): void {
        Battle.inst.gotoLobby()
    }
    private __clickStart(evt:Event): void {
        this._betTag = 0;

        let data = {
            opt: "start",
        }
        Net.Send("msgProto.ExchangeOptData", {
            optData: JSON.stringify(data)
        })
    }
    private __clickBet(evt:Event): void {
        let bet = 0;
        if (this._betTag < 5) {
            this._betTag += 1;
            bet = this._betTag;
        } else if (this._betTag < 9 ) {
            this._betTag += 1;
            bet = 10 - this._betTag;
        } else {
            this._betTag = 2;
            bet = this._betTag;
        }
        Util.log("bet:", bet);

        let data = {
            opt: "bet",
            bet: bet,
        }
        Net.Send("msgProto.ExchangeOptData", {
            optData: JSON.stringify(data)
        })
    }
    private __clickDiceMode(evt:Event): void {
        let ctrlDice = this._diceUI.getController("func")
        Util.log("dice mode set:", ctrlDice.selectedIndex)

        this._sandTable.changeLastBall(ctrlDice.selectedIndex);
    }

    public showNetLatency(lag:number) {
        let lbLag = this._diceUI.getChild("n18").asTextField
        lbLag.text = lag.toString() + "ms";
    }
    public showDebug(debug:string) {
        let lbDebug = this._diceUI.getChild("n20").asTextField;
        lbDebug.text = debug;
    }
    public start() {
        if (Battle.inst.isMaster()) {
            this._diceUI.getChild("n29").asButton.enabled = false;
            this._diceUI.getChild("n26").asButton.enabled = false;
        }
        this._tick = 30000;
        this._round += 1;
        this._diceUI.getChild("n42").asTextField.text = this._round.toString();

        TimerMgr.inst.doTimer(1, 0, this.gameTimer, this);    
        TimerMgr.inst.doFrame(1, 0, this.doCollisionDetect, this);    
    }
    private roundOver() {
        let score: number = this._sandTable.calcScore(Login.inst._userData.userId)
        this._diceUI.getChild("n22").asTextField.text = "+" + score.toString();

        this._sandTable.setBet(0);
        this._betTag = 0;
        TimerMgr.inst.remove(this.gameTimer, this);
        TimerMgr.inst.remove(this.doCollisionDetect, this);

        if (Battle.inst.isMaster()) {
            this._diceUI.getChild("n29").asButton.enabled = true;
            this._diceUI.getChild("n26").asButton.enabled = true;

            let data = {
                opt: "stop",
            }
            Net.Send("msgProto.ExchangeOptData", {
                optData: JSON.stringify(data)
            })
        }
    }
    public resetDiceType() {
        let ctrlDice = this._diceUI.getController("func")
        ctrlDice.setSelectedIndex(0)
        this._sandTable.changeLastBall(0);
    }
    private gameTimer(elapse:number) {
        // Util.log("elapse:", elapse);
        this._tick -= elapse;
        if (this._tick < 0) {
            this._tick = 0

            this.roundOver()
        }
        let tk = this._tick / 1000;
        let lbTick = this._diceUI.getChild("n38").asTextField;
        let strFix = "0"
        if (tk < 10) {
            lbTick.text = strFix + tk.toFixed(1)
        } else {
            lbTick.text = tk.toFixed(1)
        }

    }
    private doCollisionDetect(elapse:number) {
        this._sandTable.doCollisionDetect();
    }
}