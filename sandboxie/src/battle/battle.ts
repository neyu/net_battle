interface IOptData {
    opt: string,
    bet?: number,
    userId?: number,
    mode?: number,
    ballInfo?: IBallInfo,
    origRad?: number,
    radian?: number
}

class Battle {
    private static _inst: Battle = null;

    private _btScene: BtScene = null;
    private _gameMode: number = 0; // 0:经典模式 1:骰子模式

    private _roomId: number = 0;
    private _master: number = 0;
    public start: boolean = false;

    public _tmpFrame: number = 0;
    public _tmpRecord: IOptInfo[] = []; // 同步数据缓存

    public static get inst(): Battle {
        if (Battle._inst == null) {
            Battle._inst = new Battle();
        }
        return Battle._inst;
    }
    public init() {
        Net.regMsgProc("pb.SyncRoomState", this.syncRoomState, this)
    }
    public createScene(type:number) {
        this._btScene = new BtScene(type)
        return this._btScene;
    }
    public getScene() {
        return this._btScene;
    }
    public gotoLobby() {
        if (this.mode == 0) {
            Net.Send("pb.ExitClsRoom", {
                roomId: this._roomId
            })
        } else if (this.mode == 1) {
            Net.Send("pb.ExitDiceRoom", {
                roomId: this._roomId
            })
        }

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
    public setRoomMaster(roomId:number, master:number) {
        this._roomId = roomId
        this._master = master
    }
    public isMaster() {
        if (this._master == Login.inst._userData.userId) {
            return true
        }
        return false
    }
    private syncRoomState(msg:pb.SyncRoomState) {
        Util.log("syncRoomState:", msg.frame, msg.userList, msg.optRecord)
        this._tmpFrame = msg.frame;

        for (let i=0; i < msg.optRecord.length; i++) {
            let optInfo = msg.optRecord[i];
            let data = JSON.parse(optInfo.optData)
            this._tmpRecord.push({
                frame: optInfo.frame,
                optData: data
            })
        }
    }
}