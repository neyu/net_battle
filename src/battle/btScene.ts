class BtScene extends egret.DisplayObjectContainer {
    private _btUI: fairygui.GComponent;

    constructor() {
        super()

        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event: egret.Event) {
        this.showSandTable();

        fairygui.UIPackage.addPackage("battle");
        this.addChild(fairygui.GRoot.inst.displayObject);

        this.openLobbyView();
    }
    public onExit() {
        fairygui.GRoot.inst.removeChild(this._btUI);

        this.removeChild(fairygui.GRoot.inst.displayObject);
        // fairygui.UIPackage.removePackage("battle");

        this.parent.removeChild(this);
    }

    private showSandTable() {
        let stageW = this.stage.stageWidth;
        let stageH = this.stage.stageHeight;

        let table = new SandTable()
        this.addChild(table);
        table.anchorOffsetX = 0.5;
        table.anchorOffsetY = 0.5;
        table.x = stageW / 2
        table.y = stageH / 2
        // table.scaleX = 0.65 //1.5 //0.5
        // table.scaleY = 0.65 //1.5 //0.5
        table.ScaleToEdge()

        let ctrlPanel = new CtrlPanel(table);
        this.addChild(ctrlPanel)
    }

    private openLobbyView() {
        this._btUI = fairygui.UIPackage.createObject("battle", "main").asCom;
        fairygui.GRoot.inst.addChild(this._btUI);
        this._btUI.opaque = false;

        let exitBtn = this._btUI.getChild("n19").asButton
        exitBtn.addClickListener(this.__clickExit, this)
    }

    private __clickExit(evt:Event):void {
        Battle.inst.gotoLobby()
    }
}