class ClassicView extends egret.DisplayObjectContainer {
    private _sandTable: SandTable;
    private _classicUI: fairygui.GComponent;

    constructor(sandTable:SandTable) {
        super()
        this._sandTable = sandTable;
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    private onAddToStage(evt:egret.Event) {
        this._classicUI = fairygui.UIPackage.createObject("battle", "classic").asCom;
        fairygui.GRoot.inst.addChild(this._classicUI);
        this._classicUI.opaque = false;

        let exitBtn = this._classicUI.getChild("n19").asButton
        exitBtn.addClickListener(this.__clickExit, this)

        let lbNick = this._classicUI.getChild("n21").asTextField
        lbNick.text = Login.inst._userData.nickName;
    }
    public destroy() {
        fairygui.GRoot.inst.removeChild(this._classicUI)
        this.parent.removeChild(this)
    }
    private __clickExit(evt:Event): void {
        Battle.inst.gotoLobby()
    }

    public showNetLatency(lag:number) {
        let lbLag = this._classicUI.getChild("n18").asTextField
        lbLag.text = lag.toString() + "ms";
    }
    public showDebug(debug:string) {
        let lbDebug = this._classicUI.getChild("n20").asTextField;
        lbDebug.text = debug;
    }
}