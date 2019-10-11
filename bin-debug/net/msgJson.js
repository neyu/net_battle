var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var MsgJson = (function () {
    /**
     * 构造函数
     */
    function MsgJson() {
    }
    /**
     * 接收消息处理
     * @param msg
     */
    MsgJson.prototype.receive = function (socket) {
        var msg = socket.readUTF();
        var obj = this.decode(msg);
        if (obj) {
            MsgCenter.inst.dispatch(obj.key, obj.body);
        }
    };
    /**
     * 发送消息处理
     * @param msg
     */
    MsgJson.prototype.send = function (socket, msg) {
        var obj = this.encode(msg);
        if (obj) {
            socket.type = egret.WebSocket.TYPE_STRING;
            socket.writeUTF(obj);
        }
    };
    /**
     * 消息解析
     * @param msg
     */
    MsgJson.prototype.decode = function (msg) {
        var obj = JSON.parse(msg);
        // console.log("msgJson.decode:", obj);
        return obj;
    };
    /**
     * 消息封装
     * @param msg
     */
    MsgJson.prototype.encode = function (msg) {
        var content = JSON.stringify(msg);
        // console.log("msgJson.encode:", content)
        return content;
    };
    return MsgJson;
}());
__reflect(MsgJson.prototype, "MsgJson", ["MsgBase"]);
//# sourceMappingURL=msgJson.js.map