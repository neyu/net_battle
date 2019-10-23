class Socket {
    private static _inst: Socket;

    private _needReconnect: boolean = true;
    private _maxReconnectCount = 10;

    private _reconnectCount: number = 0;
    private _connectFlag: boolean;
    private _host: string;
    private _port: any;
    private _socket: egret.WebSocket;
    private _msg: MsgBase;
    private _isConnect: boolean;

    public static get inst(): Socket {
        if (Socket._inst == null) {
            Socket._inst = new Socket();
        }
        return Socket._inst;
    }
    /**
     * 构造函数
     */
    public constructor() {
        //
    }
    public static Destroy() {
        if (Socket._inst) {
            Socket._inst = null;
        }
    }
    /**
     * 添加事件监听
     */
    private addEvents() {
        this._socket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
        this._socket.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
        this._socket.addEventListener(egret.Event.CLOSE, this.onSocketClose, this);
        this._socket.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onSocketError, this);
    }

    /**
     * 移除事件监听
     */
    private removeEvents(): void {
        this._socket.removeEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
        this._socket.removeEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
        this._socket.removeEventListener(egret.Event.CLOSE, this.onSocketClose, this);
        this._socket.removeEventListener(egret.IOErrorEvent.IO_ERROR, this.onSocketError, this);
    }

    /**
     * 服务器连接成功
     */
    private onSocketOpen(evt:egret.Event): void {
        console.log("[Debug]:onSocketOpen:", evt);
        // if (this._socket.readyState != 1) {
        //     return
        // }
        this._reconnectCount = 0;
        this._isConnect = true;

        if (this._connectFlag && this._needReconnect) {
            MsgCenter.inst.dispatch(SocketConst.SOCKET_RECONNECT);
        } else {
            MsgCenter.inst.dispatch(SocketConst.SOCKET_CONNECT);
        }

        this._connectFlag = true;
    }

    /**
     * 服务器断开连接
     */
    private onSocketClose(evt:egret.Event): void {
        console.log("[Debug]:onSocketClose:", evt);

        this._isConnect = false;

        if (this._needReconnect) {
            MsgCenter.inst.dispatch(SocketConst.SOCKET_START_RECONNECT);
            this.reconnect();
        } else {
            MsgCenter.inst.dispatch(SocketConst.SOCKET_CLOSE);
        }
    }

    /**
     * 服务器连接错误
     */
    private onSocketError(evt:egret.Event): void {
        console.log("[Debug]:onSocketError evt:", evt);

        if (this._needReconnect) {
            this.reconnect();
        } else {
            MsgCenter.inst.dispatch(SocketConst.SOCKET_NOCONNECT);
        }
        this._isConnect = false;
    }

    /**
     * 收到服务器消息
     * @param e
     */
    private onReceiveMessage(evt: egret.Event): void {
        console.log("[Debug]:onReceiveMessage:", evt);

        this._msg.receive(this._socket);
    }

    /**
     * 初始化服务区地址
     * @param host IP
     * @param port 端口
     * @param msg 消息发送接受处理类
     */
    public initServer(host: string, port: any, msg: MsgBase): void {
        this._host = host;
        this._port = port;
        this._msg = msg;
    }

    /**
     * 开始Socket连接
     */
    public connect(): void {
        // if (App.DeviceUtils.IsHtml5) {
        //     if (!window["WebSocket"]) {
        //         console.log("[Error]:不支持WebSocket");
        //         return;
        //     }
        // }
        this._socket = new egret.WebSocket();
        if (this._msg instanceof MsgProto) {
            this._socket.type = egret.WebSocket.TYPE_BINARY;
        } else {
            this._socket.type = egret.WebSocket.TYPE_STRING;
        }
        this.addEvents();

        // ws
        //let url = this._host + ":" + this._port;
        //this._socket.connect(this._host, this._port);
 
        // wss
        //let url = "wss://" + this._host + ":" + this._port;
        let url = this._host + ":" + this._port;
        this._socket.connectByUrl(url);
 
        console.log("[Debug]:WebSocket: " + url);
    }

    /**
     * 重新连接
     */
    private reconnect(): void {
        this.closeCurrentSocket();
        this._reconnectCount++;
        console.log("尝试与服务器重连:", this._reconnectCount)
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
    }

    /**
     * 发送消息到服务器
     * @param msg
     */
    public send(msg: any, fail?:Function): boolean {
        if (this._socket != null && this._isConnect) {
            this._msg.send(this._socket, msg);
            return true;
        } else {
            if (fail != null) {
                fail()
            }
            return false;
        }
    }

    /**
     * 关闭Socket连接
     */
    public close(): void {
        let url = this._host + ":" + this._port;
        console.log("[Debug]:WebSocket close connection:", url);

        this._connectFlag = false;
        this.closeCurrentSocket();
    }

    /**
     * 清理当前的Socket连接
     */
    private closeCurrentSocket() {
        this.removeEvents();
        this._socket.close();
        this._socket = null;
        this._isConnect = false;
    }

    /**
     * Socket是否在连接中
     * @returns {boolean}
     */
    public isConnect(): boolean {
        return this._isConnect;
    }

    /**
     * Debug信息
     * @param str
     */
    private debugInfo(str: String): void {
        // MessageCenter.inst.dispatch(SocketConst.SOCKET_DEBUG_INFO, str);
    }

}