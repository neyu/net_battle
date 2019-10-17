interface IOptData {
    roleId: number,
    type: string,
    color: number,
    origRad: number,
    radian: number
}

class Battle {
    private static _inst: Battle = null;

    private _btScene: BtScene = null;

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
}