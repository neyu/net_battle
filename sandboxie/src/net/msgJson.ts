class MsgJson implements MsgBase {
    /**
     * 构造函数
     */
    public constructor() {

    }

    /**
     * 接收消息处理
     * @param msg
     */
    public receive(socket: egret.WebSocket): void {
        var msg: string = socket.readUTF();
        var obj: any = this.decode(msg);
        if (obj) {
            MsgCenter.inst.dispatch(obj.key, obj.body);
        }
    }

    /**
     * 发送消息处理
     * @param msg
     */
    public send(socket: egret.WebSocket, msg: any): void {
        var obj: any = this.encode(msg);
        if (obj) {
            socket.type = egret.WebSocket.TYPE_STRING;
            socket.writeUTF(obj);
        }
    }

    /**
     * 消息解析
     * @param msg
     */
    public decode(msg: any): any {
        var obj = JSON.parse(msg);
        // console.log("msgJson.decode:", obj);
        return obj;
    }

    /**
     * 消息封装
     * @param msg
     */
    public encode(msg: any): any {
        var content = JSON.stringify(msg);
        // console.log("msgJson.encode:", content)
        return content;
    }
}