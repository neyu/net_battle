var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Socket = (function () {
    /**
     * 构造函数
     */
    function Socket() {
        this._needReconnect = true;
        this._maxReconnectCount = 10;
        this._reconnectCount = 0;
        //
    }
    Object.defineProperty(Socket, "inst", {
        get: function () {
            if (Socket._inst == null) {
                Socket._inst = new Socket();
            }
            return Socket._inst;
        },
        enumerable: true,
        configurable: true
    });
    Socket.Destroy = function () {
        if (Socket._inst) {
            Socket._inst = null;
        }
    };
    /**
     * 添加事件监听
     */
    Socket.prototype.addEvents = function () {
        this._socket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
        this._socket.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
        this._socket.addEventListener(egret.Event.CLOSE, this.onSocketClose, this);
        this._socket.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onSocketError, this);
    };
    /**
     * 移除事件监听
     */
    Socket.prototype.removeEvents = function () {
        this._socket.removeEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
        this._socket.removeEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
        this._socket.removeEventListener(egret.Event.CLOSE, this.onSocketClose, this);
        this._socket.removeEventListener(egret.IOErrorEvent.IO_ERROR, this.onSocketError, this);
    };
    /**
     * 服务器连接成功
     */
    Socket.prototype.onSocketOpen = function () {
        this._reconnectCount = 0;
        this._isConnecting = true;
        if (this._connectFlag && this._needReconnect) {
            MsgCenter.inst.dispatch(SocketConst.SOCKET_RECONNECT);
        }
        else {
            MsgCenter.inst.dispatch(SocketConst.SOCKET_CONNECT);
        }
        this._connectFlag = true;
    };
    /**
     * 服务器断开连接
     */
    Socket.prototype.onSocketClose = function () {
        this._isConnecting = false;
        if (this._needReconnect) {
            MsgCenter.inst.dispatch(SocketConst.SOCKET_START_RECONNECT);
            this.reconnect();
        }
        else {
            MsgCenter.inst.dispatch(SocketConst.SOCKET_CLOSE);
        }
    };
    /**
     * 服务器连接错误
     */
    Socket.prototype.onSocketError = function () {
        if (this._needReconnect) {
            this.reconnect();
        }
        else {
            MsgCenter.inst.dispatch(SocketConst.SOCKET_NOCONNECT);
        }
        this._isConnecting = false;
    };
    /**
     * 收到服务器消息
     * @param e
     */
    Socket.prototype.onReceiveMessage = function (e) {
        this._msg.receive(this._socket);
    };
    /**
     * 初始化服务区地址
     * @param host IP
     * @param port 端口
     * @param msg 消息发送接受处理类
     */
    Socket.prototype.initServer = function (host, port, msg) {
        this._host = host;
        this._port = port;
        this._msg = msg;
    };
    /**
     * 开始Socket连接
     */
    Socket.prototype.connect = function () {
        // if (App.DeviceUtils.IsHtml5) {
        //     if (!window["WebSocket"]) {
        //         console.log("[Error]:不支持WebSocket");
        //         return;
        //     }
        // }
        this._socket = new egret.WebSocket();
        if (this._msg instanceof MsgProto) {
            this._socket.type = egret.WebSocket.TYPE_BINARY;
        }
        else {
            this._socket.type = egret.WebSocket.TYPE_STRING;
        }
        this.addEvents();
        // ws
        //let url = this._host + ":" + this._port;
        //this._socket.connect(this._host, this._port);
        // wss
        //let url = "wss://" + this._host + ":" + this._port;
        var url = this._host + ":" + this._port;
        this._socket.connectByUrl(url);
        console.log("[Debug]:WebSocket: " + url);
    };
    /**
     * 重新连接
     */
    Socket.prototype.reconnect = function () {
        this.closeCurrentSocket();
        this._reconnectCount++;
        console.log("尝试与服务器重连:", this._reconnectCount);
        egret.setTimeout(this.connect.bind(this), this, 3000);
        // if (this._reconnectCount < this._maxReconnectCount) {
        //     egret.setTimeout(this.connect.bind(this), this, 3000);
        // } else {
        //     this._reconnectCount = 0;
        //     if (this._connectFlag) {
        //         MessageCenter.inst.dispatch(SocketConst.SOCKET_CLOSE);
        //     } else {
        //         MessageCenter.inst.dispatch(SocketConst.SOCKET_NOCONNECT);
        //     }
        // }
    };
    /**
     * 发送消息到服务器
     * @param msg
     */
    Socket.prototype.send = function (msg, fail) {
        if (this._socket != null && this._isConnecting) {
            this._msg.send(this._socket, msg);
            return true;
        }
        else {
            if (fail != null) {
                fail();
            }
            return false;
        }
    };
    /**
     * 关闭Socket连接
     */
    Socket.prototype.close = function () {
        var url = this._host + ":" + this._port;
        console.log("[Debug]:WebSocket close connection:", url);
        this._connectFlag = false;
        this.closeCurrentSocket();
    };
    /**
     * 清理当前的Socket连接
     */
    Socket.prototype.closeCurrentSocket = function () {
        this.removeEvents();
        this._socket.close();
        this._socket = null;
        this._isConnecting = false;
    };
    /**
     * Socket是否在连接中
     * @returns {boolean}
     */
    Socket.prototype.isConnecting = function () {
        return this._isConnecting;
    };
    /**
     * Debug信息
     * @param str
     */
    Socket.prototype.debugInfo = function (str) {
        // MessageCenter.inst.dispatch(SocketConst.SOCKET_DEBUG_INFO, str);
    };
    return Socket;
}());
__reflect(Socket.prototype, "Socket");
//# sourceMappingURL=sock.js.map