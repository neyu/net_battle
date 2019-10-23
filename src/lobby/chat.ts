class Chat {
    private static _inst: Chat = null;
    private _chatView: ChatView = null;
    public _wordList: string[] = [];
    public _wordMaxCnt: number = 11;

    public static get inst(): Chat {
        if (Chat._inst == null) {
            Chat._inst = new Chat();
            Chat._inst.init();
        }
        return Chat._inst;
    }
    private init() {
        Net.regMsgProc("msgProto.ChatAck", this.chatMessage, this)
    }
    public showChatView() {
        this._chatView = new ChatView()
        Lobby.inst.getScene().addChild(this._chatView);
        
        this._chatView.showMessage();
    }
    public closeChatView() {
        Lobby.inst.getScene().removeChild(this._chatView);
        this._chatView = null;
    }
    private chatMessage(msg:any) {
        TipMgr.showTip(msg.content);
        this._wordList.push(msg.content);
        if (this._wordList.length > this._wordMaxCnt) {
            this._wordList.shift();
        }

        if (this._chatView) {
            this._chatView.showMessage();
        }
    }
}
