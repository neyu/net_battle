var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var MsgProto = (function () {
    /**
     * 构造函数
     */
    function MsgProto() {
        this.msgClass = null;
        this.protoConfig = null;
        this.protoConfigSymmetry = null;
        this.msgLenSize = 2;
        this.msgIdSize = 2;
        this.msgHeadSize = 4; // size + id
        this.totalSend = 0;
        this.totalRecv = 0;
        this._msgBuffer = new egret.ByteArray();
        this.msgClass = {};
        this.protoConfig = net.ProtoConfig;
        this.protoConfigSymmetry = {};
        var keys = Object.keys(this.protoConfig);
        for (var i = 0, len = keys.length; i < len; i++) {
            var key = keys[i];
            var value = this.protoConfig[key];
            this.protoConfigSymmetry[value] = key;
        }
    }
    /**
     * 接收消息处理
     * @param msg
     */
    MsgProto.prototype.receive = function (socket) {
        socket.readBytes(this._msgBuffer);
        var bufLen = this._msgBuffer.length;
        if (bufLen <= 0) {
            console.log("可能与服务器已经断开连接了！！");
            return;
        }
        if (bufLen < this.msgIdSize) {
            console.log("消息还未准备好！！");
            return;
        }
        // console.log("msg bytes recv:", this._msgBuffer.bytes)
        var obj = this.decode(this._msgBuffer);
        if (obj) {
            MsgCenter.inst.dispatch(obj.key, obj.body);
        }
        //TODO double bytearray clear
        if (this._msgBuffer.bytesAvailable == 0) {
            this._msgBuffer.clear();
        }
    };
    /**
     * 发送消息处理
     * @param msg
     */
    MsgProto.prototype.send = function (socket, msg) {
        var obj = this.encode(msg);
        if (obj) {
            obj.position = 0;
            socket.writeBytes(obj, 0, obj.bytesAvailable);
        }
    };
    /**
     * 消息解析
     * @param msg
     */
    MsgProto.prototype.decode = function (msg) {
        this.totalRecv += msg.length;
        // var datLen = msg.readShort() - this.msgHeadSize;
        var msgId = msg.readShort();
        var obj = {};
        obj.key = this.getMsgKey(msgId);
        obj.body = {};
        var dataLen = msg.bytesAvailable;
        if (dataLen >= 0) {
            var btArr = new egret.ByteArray();
            msg.readBytes(btArr, 0, msg.bytesAvailable);
            //console.log("decode:", msg.bytes);
            //App.DebugUtils.start("Protobuf Decode");
            // obj.body = this.getMsgClass(obj.key).decode(btArr.bytes, datLen);
            obj.body = this.getMsgClass(obj.key).decode(btArr.bytes, dataLen);
            //App.DebugUtils.stop("Protobuf Decode");
        }
        console.log("[Debug]:收到数据：", this.totalRecv + "/" + msg.length, " [" + msgId + " " + obj.key + "]", obj.body);
        return obj;
    };
    /**
     * 消息封装
     * @param msg
     */
    MsgProto.prototype.encode = function (msg) {
        var msgID = this.getMsgID(msg.key);
        var msgClass = this.getMsgClass(msg.key);
        var msgBody = msgClass.fromObject(msg.body);
        var msgBuffer = msgClass.encode(msgBody).finish();
        //App.DebugUtils.start("Protobuf Encode");
        var bodyBytes = new egret.ByteArray(msgBuffer);
        //App.DebugUtils.stop("Protobuf Encode");
        var sendMsg = new egret.ByteArray();
        // var msgLen:number = bodyBytes.length + this.msgHeadSize;
        // sendMsg.writeShort(msgLen);
        sendMsg.writeShort(msgID);
        sendMsg.writeBytes(bodyBytes);
        // console.log("msg bytes send:", sendMsg.bytes)
        this.totalSend += sendMsg.length;
        console.log("[Debug]:发送数据：", this.totalSend + "/" + sendMsg.length, " [" + msgID + " " + msg.key + "]", msg.body);
        return sendMsg;
    };
    /**
     * 获取msgID对应的类
     * @param key
     * @returns {any}
     */
    MsgProto.prototype.getMsgClass = function (key) {
        var cls = this.msgClass[key];
        if (cls == null) {
            cls = egret.getDefinitionByName(key);
            this.msgClass[key] = cls;
        }
        return cls;
    };
    /**
     * 获取msgID
     * @param key
     * @returns {any}
     */
    MsgProto.prototype.getMsgID = function (key) {
        return this.protoConfigSymmetry[key];
    };
    /**
     * 获取msgKey
     * @param msgId
     * @returns {any}
     */
    MsgProto.prototype.getMsgKey = function (msgId) {
        return this.protoConfig[msgId];
    };
    return MsgProto;
}());
__reflect(MsgProto.prototype, "MsgProto", ["MsgBase"]);
//# sourceMappingURL=msgProto.js.map