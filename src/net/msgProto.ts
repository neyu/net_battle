class MsgProto implements MsgBase {
    private _msgBuffer: egret.ByteArray;
    private msgClass: any = null;
    private protoConfig: any = null;
    private protoConfigSymmetry: any = null;

    private msgLenSize: number = 2;
    private msgIdSize: number = 2;
    private msgHeadSize: number = 4;  // size + id

    private totalSend: number = 0;
    private totalRecv: number = 0;

    /**
     * 构造函数
     */
    public constructor() {
        this._msgBuffer = new egret.ByteArray();
        this.msgClass = {};
        this.protoConfig = net.ProtoConfig;
        this.protoConfigSymmetry = {};
        var keys = Object.keys(this.protoConfig);
        for (var i: number = 0, len = keys.length; i < len; i++) {
            var key = keys[i];
            var value = this.protoConfig[key];
            this.protoConfigSymmetry[value] = key;
        }
    }

    /**
     * 接收消息处理
     * @param msg
     */
    public receive(socket: egret.WebSocket): void {
        socket.readBytes(this._msgBuffer);
        var bufLen = this._msgBuffer.length;
        if ( bufLen <= 0) 
        {
            console.log("可能与服务器已经断开连接了！！");
            return;
        }
        if (bufLen < this.msgIdSize) {
            console.log("消息还未准备好！！");
            return;
        }
        // console.log("msg bytes recv:", this._msgBuffer.bytes)
        var obj: any = this.decode(this._msgBuffer);
        if (obj) {
            MsgCenter.inst.dispatch(obj.key, obj.body);
        }

        //TODO double bytearray clear
        if (this._msgBuffer.bytesAvailable == 0) {
            this._msgBuffer.clear();
        }
    }

    /**
     * 发送消息处理
     * @param msg
     */
    public send(socket: egret.WebSocket, msg: any): void {
        var obj: any = this.encode(msg);
        if (obj) {
            obj.position = 0;
            socket.writeBytes(obj, 0, obj.bytesAvailable);
        }
    }

    /**
     * 消息解析
     * @param msg
     */
    public decode(msg: any): any {
        this.totalRecv += msg.length
        // var datLen = msg.readShort() - this.msgHeadSize;
        var msgId = msg.readShort();
        var obj: any = {};
        obj.key = this.getMsgKey(msgId);
        obj.body = {}

        var dataLen = msg.bytesAvailable;
        if (dataLen >= 0) {
            var btArr: egret.ByteArray = new egret.ByteArray();
            msg.readBytes(btArr, 0, msg.bytesAvailable);
                    
            //console.log("decode:", msg.bytes);
            //App.DebugUtils.start("Protobuf Decode");
            // obj.body = this.getMsgClass(obj.key).decode(btArr.bytes, datLen);
            obj.body = this.getMsgClass(obj.key).decode(btArr.bytes, dataLen);
            //App.DebugUtils.stop("Protobuf Decode");
        }
        console.log("[Debug]:收到数据：", this.totalRecv + "/" + msg.length,  " [" + msgId + " " + obj.key + "]", obj.body);
        return obj;
    }

    /**
     * 消息封装
     * @param msg
     */
    public encode(msg: any): any {
        var msgID = this.getMsgID(msg.key);
        var msgClass = this.getMsgClass(msg.key);
        var msgBody = msgClass.fromObject(msg.body);
        var msgBuffer = msgClass.encode(msgBody).finish();

        //App.DebugUtils.start("Protobuf Encode");
        var bodyBytes: egret.ByteArray = new egret.ByteArray(msgBuffer);
        //App.DebugUtils.stop("Protobuf Encode");

        var sendMsg: egret.ByteArray = new egret.ByteArray();
        // var msgLen:number = bodyBytes.length + this.msgHeadSize;
        // sendMsg.writeShort(msgLen);
        sendMsg.writeShort(msgID);
        sendMsg.writeBytes(bodyBytes);
        // console.log("msg bytes send:", sendMsg.bytes)

        this.totalSend += sendMsg.length
        console.log("[Debug]:发送数据：", this.totalSend + "/" + sendMsg.length, " [" + msgID + " " + msg.key + "]", msg.body);
        return sendMsg;
    }


    /**
     * 获取msgID对应的类
     * @param key
     * @returns {any}
     */
    private getMsgClass(key: string): any {
        var cls: any = this.msgClass[key];
        if (cls == null) {
            cls = egret.getDefinitionByName(key);
            this.msgClass[key] = cls;
        }
        return cls;
    }

    /**
     * 获取msgID
     * @param key
     * @returns {any}
     */
    private getMsgID(key: string): number {
        return this.protoConfigSymmetry[key];
    }

    /**
     * 获取msgKey
     * @param msgId
     * @returns {any}
     */
    private getMsgKey(msgId: number) {
        return this.protoConfig[msgId];
    }

}