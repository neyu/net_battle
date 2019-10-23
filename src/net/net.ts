class Net {
    public static ProtoConf: any = null;
    public static ServerConf: any = null;
    public static strCode: any = null;
    public static iCode: any = null;

    private static _connType: number = 0;
    private static _gameToken: string = "";
    private static _accountId: number = 0;

    public static init() : void {
        this.ProtoConf = RES.getRes("msgProto_json");
        this.ServerConf = RES.getRes("server_json");
        this.loadMsgCode();

        this.addNetworkEvents();
        this.ConnToLogin();
    }

    public static loadMsgCode() {
        this.strCode = RES.getRes("c_msgCode_json")
        this.iCode = {}

        for (var key in this.strCode) {
            let item = this.strCode[key]
            this.iCode[item["id"]] = item
        }
        // console.log("load msg code over", iCode);
    }

    public static regMsgProc(msgName:string, selector:Function, target:any) {
        MsgCenter.inst.addListener(msgName, selector, target);
    }
    public static delMsgProc(msgName:string, selector:Function, target:any) {
        MsgCenter.inst.removeListener(msgName, selector, target);
    }
    public static delMsgTarget(target:any) {
        MsgCenter.inst.removeAll(target)
    }
    public static msgDispatch(key:string, param:any) {
        MsgCenter.inst.dispatch(key, param)
    }

    public static Send(key:string, body:any): boolean {
        var msg: any = {}
        msg.key = key
        msg.body = body
        return Socket.inst.send(msg);
    }

    public static isOnConn() {
        if (Socket.inst.isConnect()) {
            return true;
        }
        return false;
    }

    public static Close() {
        // this.delMsgTarget(this)
        TimerMgr.inst.remove(this.pingAck, this);    

        Socket.inst.close()
        Socket.Destroy()
    }
    public static ConnToLogin() {
        this._connType = 1 // connecto to login

        Socket.inst.initServer(this.ServerConf.server_pub, this.ServerConf.port_pub, new MsgProto())
        Socket.inst.connect();
    }

    public static ResetToGame(host:string, port:string, accId:number) {
        this._connType = 2 // connecto to game

        this._gameToken = "app_1.0.0#res_1.0.0";
        this._accountId = accId;
        Socket.inst.initServer("ws://" + host,  port + "/ws", new MsgProto())
        Socket.inst.connect();
    }

    private static addNetworkEvents() {
        MsgCenter.inst.addListener(SocketConst.SOCKET_CONNECT, () => {
            console.log("[Debug]:与服务器连接上");
            if (this._connType == 1) {
                this.ping();
            } else if (this._connType = 2) {
                this.verifyGameToken()
            }
        }, this);
        MsgCenter.inst.addListener(SocketConst.SOCKET_RECONNECT, () => {
            console.log("[Debug]:与服务器重新连接上");
            if (this._connType == 2) {
                this.verifyGameToken()
            }
        }, this);
        MsgCenter.inst.addListener(SocketConst.SOCKET_START_RECONNECT, () => {
            console.log("[Debug]:开始与服务器重新连接");
        }, this);
        MsgCenter.inst.addListener(SocketConst.SOCKET_CLOSE, () => {
            console.log("[Debug]:与服务器断开连接");
        }, this);
        MsgCenter.inst.addListener(SocketConst.SOCKET_NOCONNECT, () => {
            console.log("[Debug]:服务器连接不上");
        }, this);

        // MsgCenter.inst.addListener("msgProto.error_notice_s2c", errorNotice, this);
        MsgCenter.inst.addListener("msgProto.VerifyAck", this.verifyAck, this);
    }

    private static errorNotice(msg:any) {
        // utils.log("errorNotice:");
    }

    private static interval = 45 * 1000;
    private static ping() {
        TimerMgr.inst.doTimer(this.interval, 0, this.pingAck, this);    
    }
    private static pingAck() {
        let succ = this.Send("msgProto.PingAck", {});
        if (succ) {
            console.log("心跳一次", this.interval)
        } else {
            console.log("心跳失败", this.interval)
        }
    }

    private static verifyGameToken() {
        this.Send("msgProto.VerifyReq", {
            gameToken: this._gameToken,
            gameSvcId: "game_1",
            accountId: this._accountId
        })
    }  
    private static verifyAck(msg:any) {
        console.log("game token verify ack:", msg)
        this.ping();

        this.msgDispatch("game_verified", {})
    }
}