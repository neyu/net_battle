class ChatView extends egret.DisplayObjectContainer {
    private _chatRoom: fairygui.GComponent;
    private _bubbleList: ChatBubble[] = [];

    constructor() {
        super()

        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    private onAddToStage(event: egret.Event) {
        this._chatRoom = fairygui.UIPackage.createObject("lobby", "chat_room").asCom;
        fairygui.GRoot.inst.addChild(this._chatRoom);
        this._chatRoom.x += Lobby.inst.getScene().width / 2 - this._chatRoom.width / 2 + 2
        this._chatRoom.y += Lobby.inst.getScene().height / 2 - this._chatRoom.height / 2 + 40

        let exitBtn = this._chatRoom.getChild("n14").asButton
        exitBtn.addClickListener(this.__clickExitChat, this)

        let sendBtn = this._chatRoom.getChild("n7").asButton
        sendBtn.addClickListener(this.__clickSend, this);

        let chatBoard = this._chatRoom.getChild("n5").asTextField
        for (let i=0; i < Chat.inst._wordMaxCnt; i++) {
            let bubble = new ChatBubble("");
            this._chatRoom.displayListContainer.addChild(bubble);
            bubble.x = chatBoard.x;
            bubble.y += chatBoard.y + i * 40;
            bubble.alpha = 0;

            this._bubbleList.push(bubble);
        }

        this.showMessage();
    }
    private __clickExitChat(evt:Event) {
        fairygui.GRoot.inst.removeChild(this._chatRoom)

        Chat.inst.closeChatView()
    }
    private __clickSend(evt:Event) {
        let chatBox = this._chatRoom.getChild("n6").asTextInput
        let chatBoard = this._chatRoom.getChild("n5").asTextField

        Net.Send("msgProto.ChatReq", {
            content: chatBox.text
        })
    }
    public showMessage() {
        for (let i=0; i < Chat.inst._wordList.length; i++) {
            let content = Chat.inst._wordList[i];
            let bubble = this._bubbleList[i];
            bubble.alpha = 1;
            bubble.setContent(content);
        }
    }
}

// 聊天气泡
class ChatBubble extends egret.DisplayObjectContainer {
    private _bg: egret.Shape = null;
    private _label: egret.TextField = null;
    private _content:string = "";
    private _w: number = 310;
    private _h: number = 35;

    constructor(word:string) {
        super()
        this._content = word;

        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event: egret.Event) {
        this.show();
    }

    public show() {
        this._bg = new egret.Shape();
        this._bg.graphics.lineStyle(1, 0x0)
        this._bg.graphics.beginFill(0xaaaaaa, 1)
        this._bg.graphics.drawRect(0, 0, this._w, this._h);
        this._bg.graphics.endFill()
        this.addChild(this._bg);

        this._label = new egret.TextField();
        this.addChild(this._label);
        this._label.x = 2; //-this._w/2
        this._label.y = 4; //-this._h/2
        this._label.width = this._w - 2;
        this._label.height = this._h - 2;

        this._label.lineSpacing = 2;
        this._label.bold = true;
        this._label.size = 13;
        this._label.textColor = 0x00ffcc;
        this._label.text = this._content;
    }
    public setContent(word:string) {
        this._label.text = word;
    }
}