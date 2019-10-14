class BtScene extends egret.DisplayObjectContainer {
    private _btUI: fairygui.GComponent;

    constructor() {
        super()

        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event: egret.Event) {
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

    private openLobbyView() {
        this._btUI = fairygui.UIPackage.createObject("battle", "main").asCom;
        fairygui.GRoot.inst.addChild(this._btUI);

        let exitBtn = this._btUI.getChild("n19").asButton
        exitBtn.addClickListener(this.__clickExit, this)
    }

    private __clickExit(evt:Event):void {
        Battle.inst.gotoLobby()
    }
}