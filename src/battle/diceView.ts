class DiceView extends egret.DisplayObjectContainer {
    private _sandTable: SandTable;
    private _diceUI: fairygui.GComponent;
    private _bet: number = 1;

    constructor(sandTable:SandTable) {
        super()
        Battle.inst.mode = 1;
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

        let btnNext = this._diceUI.getChild("n37").asButton;
        btnNext.addClickListener(this.__clickNext, this);
        
        let btnStart = this._diceUI.getChild("n29").asButton;
        btnStart.addClickListener(this.__clickStart, this);
        
        let btnBet = this._diceUI.getChild("n26").asButton;
        btnBet.addClickListener(this.__clickBet, this);

        let ctrlDice = this._diceUI.getController("func")
        ctrlDice.addEventListener(fairygui.StateChangeEvent.CHANGED, this.__clickDiceMode, this)

        if (!Battle.inst.isMaster()) {
            btnBet.enabled = false;
            btnStart.enabled = false;
            btnNext.enabled = false;
        }
    }
    public destroy() {
        fairygui.GRoot.inst.removeChild(this._diceUI)
        this.parent.removeChild(this)
    }
    private __clickExit(evt:Event): void {
        Battle.inst.gotoLobby()
    }
    private __clickNext(evt:Event): void {
        this._sandTable.clear()

        let data = {
            opt: "next",
        }
        Net.Send("msgProto.ExchangeOptData", {
            optData: JSON.stringify(data)
        })
    }
    private __clickStart(evt:Event): void {
        let data = {
            opt: "start",
        }
        Net.Send("msgProto.ExchangeOptData", {
            optData: JSON.stringify(data)
        })
    }
    private __clickBet(evt:Event): void {
        let bet = 1;
        if (this._bet < 5) {
            this._bet += 1;
            bet = this._bet;
        } else if (this._bet < 9 ) {
            this._bet += 1;
            bet = 10 - this._bet;
        } else {
            this._bet = 2;
            bet = this._bet;
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
            this._diceUI.getChild("n37").asButton.enabled = false;
        }
    }
    public resetDiceFunc() {
        let ctrlDice = this._diceUI.getController("func")
        ctrlDice.setSelectedIndex(0)
        this._sandTable.changeLastBall(0);
    }
}