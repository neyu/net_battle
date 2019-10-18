namespace net {
    export var ProtoConf: any = null;
    export var ServerConf: any = null;
    export var strCode: any = null;
    export var iCode: any = null;
    var _this: any = null;
    var _connType: number = 0;
    var _gameToken: string = "";
    var _accountId: number = 0;

    export function init() : void {
        _this = this;

        ProtoConf = RES.getRes("msgProto_json");
        ServerConf = RES.getRes("server_json");
        loadMsgCode();

        //Socket.inst.initServer(ServerConf.Server_pub, ServerConf.Port_pub, new ByteArrayMsgByProtobuf());
        // Socket.inst.initServer(app.versionData.socket_server, app.versionData.socket_port, new ByteArrayMsgByProtobuf());
        // Socket.inst.initServer("ws://www.xxh5.net", "7800/ws", new MsgJson())
        addNetworkEvents();
        ConnToLogin();
    }

    function loadMsgCode() {
        strCode = RES.getRes("c_msgCode_json")
        iCode = {}

        for (var key in strCode) {
            let item = strCode[key]
            iCode[item["id"]] = item
        }
        // console.log("load msg code over", iCode);
    }

    export function regMsgProc(msgName:string, selector:Function, target:any) {
        MsgCenter.inst.addListener(msgName, selector, target);
    }
    export function delMsgProc(msgName:string, selector:Function, target:any) {
        MsgCenter.inst.removeListener(msgName, selector, target);
    }
    export function delMsgTarget(target:any) {
        MsgCenter.inst.removeAll(target)
    }
    export function msgDispatch(key:string, param:any) {
        MsgCenter.inst.dispatch(key, param)
    }

    export function Send(key:string, body:any) {
        var msg: any = {}
        msg.key = key
        msg.body = body
        Socket.inst.send(msg);
    }

    export function isOnConn() {
        if (Socket.inst.isConnecting()) {
            return true;
        }
        return false;
    }

    export function Close() {
        TimerMgr.inst.remove(pingAck, _this);    

        Socket.inst.close()
        Socket.Destroy()
    }
    export function ConnToLogin() {
        _connType = 1 // connecto to login

        Socket.inst.initServer(ServerConf.server_pub, ServerConf.port_pub, new MsgProto())
        Socket.inst.connect();
    }

    export function ResetToGame(host:string, port:string, accId:number) {
        _connType = 2 // connecto to game

        _gameToken = "app_1.0.0#res_1.0.0";
        _accountId = accId;
        Socket.inst.initServer("ws://" + host,  port + "/ws", new MsgProto())
        Socket.inst.connect();
    }

    function addNetworkEvents() {
        MsgCenter.inst.addListener(SocketConst.SOCKET_CONNECT, () => {
            console.log("[Debug]:与服务器连接上");
            if (_connType == 1) {
                ping();
            } else if (_connType = 2) {
                verifyGameToken()
            }
        }, this);
        MsgCenter.inst.addListener(SocketConst.SOCKET_RECONNECT, () => {
            console.log("[Debug]:与服务器重新连接上");
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
        MsgCenter.inst.addListener("msgProto.VerifyAck", verifyAck, _this);
    }

    function errorNotice(msg:any) {
        // utils.log("errorNotice:");
    }

    var interval = 45 * 1000;
    function ping() {
        TimerMgr.inst.doTimer(interval, 0, pingAck, _this);    
    }
    function pingAck() {
        net.Send("msgProto.PingAck", {});
        console.log("心跳一次", interval)
    }

    function verifyGameToken() {
        net.Send("msgProto.VerifyReq", {
            gameToken: _gameToken,
            gameSvcId: "game_1",
            accountId: _accountId
        })
    }  
    function verifyAck(msg:any) {
        console.log("game token verify ack:", msg)
        ping();

        net.msgDispatch("game_verified", {})
    }
}