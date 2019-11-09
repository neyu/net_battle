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
        Net.regMsgProc("pb.TestNetLatency", this.testLatencyResponse, this)
        // 提前开启监听
        Battle.inst.init()
    }
    public createScene() {
        this._lobbyScene = new LobbyScene()
        return this._lobbyScene;
    }
    public getScene() {
        return this._lobbyScene;
    }
    public gotoBattle(type:number) {
        let mainStage = this._lobbyScene.parent

        this._lobbyScene.onExit();
        this._lobbyScene = null;

        Battle.inst.mode = type;
        mainStage.addChild(Battle.inst.createScene(type))
    }
    public gotoLogin() {
        let mainStage = this._lobbyScene.parent

        this._lobbyScene.onExit();
        this._lobbyScene = null;

        Login.inst.resetEnterState();
        mainStage.addChild(Login.inst.createScene())
    }
    public tryClassicBt() {
        this.gotoBattle(0);
    }
    public tryDiceBt() {
        this.gotoBattle(1);
    }

    private testLatencyResponse(msg:{time:number}) {
        // Util.log("test net latency response:", msg);
        let diff = new Date().getTime() - msg.time;
        Net.msgDispatch("net_latency_res", {lag: diff})
    }
    private _interval = 5 * 1000;
    public testNetLatency() {
        // 先走一次
        this.doTest();

        TimerMgr.inst.doTimer(this._interval, 0, this.doTest, this);    
    }
    private doTest() {
        Net.Send("pb.TestNetLatency", {
            time: new Date().getTime()
        });
    }
}