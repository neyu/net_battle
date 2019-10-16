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
        net.regMsgProc("msgProto.TestNetLatency", this.testLatencyResponse, this)
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

    private testLatencyResponse(msg:{time:number}) {
        // Util.log("test net latency response:", msg);
        let diff = new Date().getTime() - msg.time;
        net.msgDispatch("net_latency_res", {lag: diff})
    }
    private _interval = 5 * 1000;
    public testNetLatency() {
        // 先走一次
        this.doTest();

        TimerMgr.inst.doTimer(this._interval, 0, this.doTest, this);    
    }
    private doTest() {
        net.Send("msgProto.TestNetLatency", {
            time: new Date().getTime()
        });
    }
}