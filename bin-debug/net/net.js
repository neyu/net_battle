var net;
(function (net) {
    net.ProtoConfig = null;
    net.ServerConfig = null;
    net.strCode = null;
    net.iCode = null;
    var _this = null;
    var _connType = 0;
    var _gameToken = "";
    var _accountId = 0;
    function init() {
        _this = this;
        net.ProtoConfig = RES.getRes("msgProto_json");
        // ServerConfig = RES.getRes("server_json");
        loadMsgCode();
        //Socket.inst.initServer(ServerConfig.Server_pub, ServerConfig.Port_pub, new ByteArrayMsgByProtobuf());
        // Socket.inst.initServer(app.versionData.socket_server, app.versionData.socket_port, new ByteArrayMsgByProtobuf());
        // Socket.inst.initServer("ws://www.xxh5.net", "7800/ws", new MsgJson())
        Socket.inst.initServer("ws://127.0.0.1", "8400/ws", new MsgProto());
        _connType = 1; // connecto to login
        addNetworkEvents();
    }
    net.init = init;
    function loadMsgCode() {
        net.strCode = RES.getRes("c_msgCode_json");
        net.iCode = {};
        for (var key in net.strCode) {
            var item = net.strCode[key];
            net.iCode[item["id"]] = item;
        }
        // console.log("load msg code over", iCode);
    }
    function regMsgProc(msgName, selector, target) {
        MsgCenter.inst.addListener(msgName, selector, target);
    }
    net.regMsgProc = regMsgProc;
    function msgDispatch(key, param) {
        MsgCenter.inst.dispatch(key, param);
    }
    net.msgDispatch = msgDispatch;
    function Send(key, body) {
        var msg = {};
        msg.key = key;
        msg.body = body;
        Socket.inst.send(msg);
    }
    net.Send = Send;
    function isOnConn() {
        if (Socket.inst.isConnecting()) {
            return true;
        }
        return false;
    }
    net.isOnConn = isOnConn;
    function Close() {
        TimerMgr.inst.remove(pingAck, _this);
        Socket.inst.close();
        Socket.Destroy();
    }
    net.Close = Close;
    function ResetToGame(host, port, accId) {
        _connType = 2;
        _gameToken = "app_1.0.0#res_1.0.0";
        _accountId = accId;
        Socket.inst.initServer("ws://" + host, port + "/ws", new MsgProto());
        Socket.inst.connect();
    }
    net.ResetToGame = ResetToGame;
    function addNetworkEvents() {
        Socket.inst.connect();
        MsgCenter.inst.addListener(SocketConst.SOCKET_CONNECT, function () {
            console.log("[Debug]:与服务器连接上");
            if (_connType == 1) {
                ping();
            }
            else if (_connType = 2) {
                verifyGameToken();
            }
        }, this);
        MsgCenter.inst.addListener(SocketConst.SOCKET_RECONNECT, function () {
            console.log("[Debug]:与服务器重新连接上");
        }, this);
        MsgCenter.inst.addListener(SocketConst.SOCKET_START_RECONNECT, function () {
            console.log("[Debug]:开始与服务器重新连接");
        }, this);
        MsgCenter.inst.addListener(SocketConst.SOCKET_CLOSE, function () {
            console.log("[Debug]:与服务器断开连接");
        }, this);
        MsgCenter.inst.addListener(SocketConst.SOCKET_NOCONNECT, function () {
            console.log("[Debug]:服务器连接不上");
        }, this);
        // MsgCenter.inst.addListener("msgProto.error_notice_s2c", errorNotice, this);
        MsgCenter.inst.addListener("msgProto.VerifyAck", verifyAck, _this);
    }
    function errorNotice(msg) {
        // utils.log("errorNotice:");
    }
    var interval = 45 * 1000;
    function ping() {
        TimerMgr.inst.doTimer(interval, 0, pingAck, _this);
    }
    function pingAck() {
        net.Send("msgProto.PingAck", {});
        console.log("心跳一次", interval);
    }
    function verifyGameToken() {
        net.Send("msgProto.VerifyReq", {
            GameToken: _gameToken,
            GameSvcId: "game_1",
            AccountId: _accountId
        });
    }
    function verifyAck(msg) {
        console.log("game token verify ack:", msg);
        ping();
        net.msgDispatch("game_verified", {});
    }
})(net || (net = {}));
//# sourceMappingURL=net.js.map