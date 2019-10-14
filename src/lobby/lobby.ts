class Lobby {
    private static _inst: Lobby = null;

    private _lobbyScene: LobbyScene = null;

    public static get inst(): Lobby {
        if (Lobby._inst == null) {
            Lobby._inst = new Lobby();
            Lobby._inst.init();
        }
        return Lobby._inst;
    }
    private init() {
        //
    }
    public createScene() {
        this._lobbyScene = new LobbyScene()
        return this._lobbyScene;
    }
    public getScene() {
        return this._lobbyScene;
    }
    public gotoBattle() {
        let mainStage = this._lobbyScene.parent

        this._lobbyScene.onExit();
        this._lobbyScene = null;

        mainStage.addChild(Battle.inst.createScene())
    }
    public gotoLogin() {
        let mainStage = this._lobbyScene.parent

        this._lobbyScene.onExit();
        this._lobbyScene = null;

        Login.inst.resetEnterState();
        mainStage.addChild(Login.inst.createScene())
    }
    public tryFriendBt() {
        this.gotoBattle();
    }

}