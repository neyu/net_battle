class LobbyScene extends egret.DisplayObjectContainer {
    private _lobbyView: fairygui.GComponent;

    private _entryPanel: fairygui.GComponent;
    private _entryType: number = 0; // 0经典 1骰子

    constructor() {
        super()

        Net.regMsgProc("net_latency_res", this.netLatencyResponse, this)
        Net.regMsgProc("msgProto.EnterClsRoomResponse", this.enterClsRoomResponse, this)
        Net.regMsgProc("msgProto.EnterDiceRoomResponse", this.enterDiceRoomResponse, this)

        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event: egret.Event) {
        fairygui.UIPackage.addPackage("lobby");
        this.addChild(fairygui.GRoot.inst.displayObject);

        this.openLobbyView();

        Lobby.inst.testNetLatency()
    }
    public onExit() {
        Net.delMsgTarget(this);

        fairygui.GRoot.inst.removeChild(this._lobbyView);

        this.removeChild(fairygui.GRoot.inst.displayObject);
        // fairygui.UIPackage.removePackage("lobby");

        this.parent.removeChild(this);
    }
    private openLobbyView() {
        this._lobbyView = fairygui.UIPackage.createObject("lobby", "main").asCom;
        fairygui.GRoot.inst.addChild(this._lobbyView);

        let lbName = this._lobbyView.getChild("n2").asTextField;
        lbName.text = Login.inst._userData.nickName;

        let friendBt = this._lobbyView.getChild("n0").asButton;
        friendBt.addClickListener(this.__clickClassicBt, this)

        let worldBt = this._lobbyView.getChild("n1").asButton;
        worldBt.addClickListener(this.__clickDiceBt, this);

        let exitBtn = this._lobbyView.getChild("n31").asButton;
        exitBtn.addClickListener(this.__clickExit, this);

        let chatBtn = this._lobbyView.getChild("n32").asButton;
        chatBtn.addClickListener(this.__clickChat, this);
    }

    private openRoomEntrance(type:number) {
        this._entryType = type;

        this._entryPanel = fairygui.UIPackage.createObject("lobby", "entrance").asCom;
        fairygui.GRoot.inst.addChild(this._entryPanel);
        this._entryPanel.x = Lobby.inst.getScene().width / 2 - this._entryPanel.width / 2
        this._entryPanel.y = Lobby.inst.getScene().height / 2 - this._entryPanel.height / 2 + 40

        let btnExit = this._entryPanel.getChild("n6").asButton
        btnExit.addClickListener(this.__clickExitEntry, this)

        let btnCreateRoom = this._entryPanel.getChild("n3").asButton
        btnCreateRoom.addClickListener(this.__clickCreate, this)

        let btnJoinRoom = this._entryPanel.getChild("n4").asButton
        btnJoinRoom.addClickListener(this.__clickJoin, this)

        let lbMode = this._entryPanel.getChild("n8").asTextField
        if (this._entryType == 0) {
            lbMode.text = "(经典模式)"
        } else if (this._entryType == 1) {
            lbMode.text = "(骰子模式)"
        }
    }
    private closeEntrancePanel() {
        fairygui.GRoot.inst.removeChild(this._entryPanel);
    }
    private __clickClassicBt(evt:Event):void {
        this.openRoomEntrance(0);
    }
    private __clickDiceBt(evt:Event):void {
        this.openRoomEntrance(1);
    }
    private __clickExit(evt:Event):void {
        Lobby.inst.gotoLogin();
    }
    private __clickChat(evt:Event):void {
        Chat.inst.showChatView()
    }
    private __clickExitEntry(evt:Event) {
        this.closeEntrancePanel()
    }
    private __clickCreate(evt:Event) {
        let lbRoom = this._entryPanel.getChild("n1").asTextInput
        let name = lbRoom.text.trim()
        if (name == "") {
            TipMgr.showTip("房间名不能为空")
            return
        }

        if (this._entryType == 0) {
            Net.Send("msgProto.CreateClsRoom", {
                name: "cls." + name
            })
        } else if (this._entryType == 1) {
            Net.Send("msgProto.CreateDiceRoom", {
                name: "dice." + name
            })
        }
    }
    private __clickJoin(evt:Event) {
        let lbRoom = this._entryPanel.getChild("n1").asTextInput
        let name = lbRoom.text.trim()
        if (name == "") {
            TipMgr.showTip(Net.strCode["roomNameNotNull"].text)
            return
        }

        if (this._entryType == 0) {
            Net.Send("msgProto.JoinClsRoom", {
                name: "cls." + name
            })
        } else if (this._entryType == 1) {
            Net.Send("msgProto.JoinDiceRoom", {
                name: "dice." + name
            })
        }
    }

    private netLatencyResponse(data:{lag:number}) {
        // Util.log("test net latency:", data.lag)

        let lbLag = this._lobbyView.getChild("n28").asTextField
        lbLag.text = data.lag.toString() + "ms";
    }

    private enterClsRoomResponse(msg:msgProto.EnterClsRoomResponse) {
        Util.log("enterClsRoomResponse:", msg)
        if (msg.retCode != 0) {
            TipMgr.showTip(Net.iCode[msg.retCode].text);
            return
        }
        this.closeEntrancePanel()

        Battle.inst.setRoomMaster(protobuf.util.LongBits.from(msg.roomId).toNumber(), protobuf.util.LongBits.from(msg.masterId).toNumber())
        Lobby.inst.tryClassicBt();
    }
    private enterDiceRoomResponse(msg:msgProto.EnterDiceRoomResponse) {
        Util.log("enterDiceRoomResponse:", msg)
        if (msg.retCode != 0) {
            TipMgr.showTip(Net.iCode[msg.retCode].text);
            return
        }
        this.closeEntrancePanel()

        Battle.inst.setRoomMaster(protobuf.util.LongBits.from(msg.roomId).toNumber(), protobuf.util.LongBits.from(msg.masterId).toNumber())
        Lobby.inst.tryDiceBt();
    }
}