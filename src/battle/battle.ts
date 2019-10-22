interface IOptData {
    roleId: number,
    mode: number,
    ballInfo: IBallInfo,
    origRad: number,
    radian: number
}

class Battle {
    private static _inst: Battle = null;

    private _btScene: BtScene = null;
    private _gameMode: number = 0; // 0:经典模式 1:骰子模式
    public _diceType: number = 0; // 0:随机 1:置换 2:同色

    public static get inst(): Battle {
        if (Battle._inst == null) {
            Battle._inst = new Battle();
            Battle._inst.init();
        }
        return Battle._inst;
    }
    private init() {
        //
    }
    public createScene() {
        this._btScene = new BtScene()
        return this._btScene;
    }
    public getScene() {
        return this._btScene;
    }
    public gotoLobby() {
        let mainStage = this._btScene.parent

        this._btScene.onExit();
        this._btScene = null;

        mainStage.addChild(Lobby.inst.createScene())
    }

    public set mode(m:number) {
        this._gameMode = m;
    }
    public get mode(): number {
        return this._gameMode
    }
}