class DiceView extends egret.DisplayObjectContainer {
    private _diceUI: fairygui.GComponent;
 
    constructor() {
        super()
        Battle.inst.mode = 1;

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

        let btnDealer = this._diceUI.getChild("n24").asButton;
        btnDealer.addClickListener(this.__clickDealer, this);
        
        let btnReset = this._diceUI.getChild("n29").asButton;
        btnReset.addClickListener(this.__clickReset, this);
        
        let btnBet = this._diceUI.getChild("n26").asButton;
        btnBet.addClickListener(this.__clickBet, this);

        let ctrlDice = this._diceUI.getController("func")
        ctrlDice.addEventListener(fairygui.StateChangeEvent.CHANGED, this.__clickDiceMode, this)
    }
    public destroy() {
        fairygui.GRoot.inst.removeChild(this._diceUI)
        this.parent.removeChild(this)
    }
    private __clickExit(evt:Event): void {
        Battle.inst.gotoLobby()
    }
    private __clickDealer(evt:Event): void {
        Battle.inst.getScene().resetSandBoxie()
    }
    private __clickReset(evt:Event): void {
        Battle.inst.getScene().resetSandBoxie()
    }
    private __clickBet(evt:Event): void {
        let lbBet = this._diceUI.getChild("n35").asTextField;
        lbBet.text = "+1"
    }
    private __clickDiceMode(evt:Event): void {
        let ctrlDice = this._diceUI.getController("func")
        Util.log("dice mode set:", ctrlDice.selectedIndex)
        Battle.inst._diceType = ctrlDice.selectedIndex;
    }

    public showNetLatency(lag:number) {
        let lbLag = this._diceUI.getChild("n18").asTextField
        lbLag.text = lag.toString() + "ms";
    }
    public showDebug(debug:string) {
        let lbDebug = this._diceUI.getChild("n20").asTextField;
        lbDebug.text = debug;
    }

}