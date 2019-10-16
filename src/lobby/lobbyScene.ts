class LobbyScene extends egret.DisplayObjectContainer {
    private _lobbyView: fairygui.GComponent;
    private _chatRoom: fairygui.GComponent;

    constructor() {
        super()

        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event: egret.Event) {
        fairygui.UIPackage.addPackage("lobby");
        this.addChild(fairygui.GRoot.inst.displayObject);

        this.openLobbyView();
    }
    public onExit() {
        fairygui.GRoot.inst.removeChild(this._lobbyView);

        this.removeChild(fairygui.GRoot.inst.displayObject);
        // fairygui.UIPackage.removePackage("lobby");

        this.parent.removeChild(this);
    }
    private openLobbyView() {
        this._lobbyView = fairygui.UIPackage.createObject("lobby", "main").asCom;
        fairygui.GRoot.inst.addChild(this._lobbyView);

        let lbName = this._lobbyView.getChild("n2").asTextField;
        lbName.text = Login.inst._userData.nickName;

        let friendBt = this._lobbyView.getChild("n0").asButton;
        friendBt.addClickListener(this._clickFriendBt, this)

        let worldBt = this._lobbyView.getChild("n1").asButton;
        worldBt.addClickListener(this.__clickWorldBt, this);

        let exitBtn = this._lobbyView.getChild("n31").asButton;
        exitBtn.addClickListener(this.__clickExit, this);

        let chatBtn = this._lobbyView.getChild("n32").asButton;
        chatBtn.addClickListener(this.__clickChat, this);
    }

    private _clickFriendBt(evt:Event):void {
        Lobby.inst.tryFriendBt();
    }
    private __clickWorldBt(evt:Event):void {
        Lobby.inst.tryFriendBt();
    }
    private __clickExit(evt:Event):void {
        Lobby.inst.gotoLogin();
    }
    private __clickChat(evt:Event):void {
        Chat.inst.showChatView()
    }


}