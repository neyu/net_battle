class LoginScene extends egret.DisplayObjectContainer {
    private _loginPanel: fairygui.GComponent;
    private _enterPanel: fairygui.GComponent;
    private _regPanel: fairygui.GComponent;
    private _createPanel: fairygui.GComponent;
    private _svrListPanel: fairygui.GComponent;

    private _svrList: any = [];
    private _userSvrs: any = [];

    constructor() {
        super()

        net.regMsgProc("msgProto.LoginResponse", this.loginResponse, this)
        net.regMsgProc("msgProto.SvrListResponse", this.svrListGetResponse, this)

        net.regMsgProc("msgProto.GameEnterResponse", this.gameEnterResponse, this)
        net.regMsgProc("msgProto.UserCreateResponse", this.userCreateResponse, this)

        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event: egret.Event) {
        fairygui.UIPackage.addPackage("login");
        this.addChild(fairygui.GRoot.inst.displayObject);

        this.openLoginPanel();
    }
    public onExit() {
        net.delMsgProc("msgProto.LoginResponse", this.loginResponse, this)
        net.delMsgProc("msgProto.SvrListResponse", this.svrListGetResponse, this)

        net.delMsgProc("msgProto.GameEnterResponse", this.gameEnterResponse, this)
        net.delMsgProc("msgProto.UserCreateResponse", this.userCreateResponse, this)

        this.removeChild(fairygui.GRoot.inst.displayObject);
        // fairygui.UIPackage.removePackage("login");

        this.parent.removeChild(this);
    }

    private openLoginPanel() {
        this._loginPanel = fairygui.UIPackage.createObject("login", "login").asCom;
        fairygui.GRoot.inst.addChild(this._loginPanel);

        var btnLogin = this._loginPanel.getChild("n10").asButton;
        btnLogin.addClickListener(this.__clickLogin, this);

        var btnToReg = this._loginPanel.getChild("n11").asButton;
        btnToReg.addClickListener(this.__toRegister, this);

    }
    private closeLoginPanel() {
        fairygui.GRoot.inst.removeChild(this._loginPanel);

        this._loginPanel = null;
    }

    private openRegisterPanel() {
        this._regPanel = fairygui.UIPackage.createObject("login", "register").asCom;
        fairygui.GRoot.inst.addChild(this._regPanel);

        var btnCancel = this._regPanel.getChild("n9").asButton;
        btnCancel.addClickListener(this.__cancelReg, this);

        var btnRegister = this._regPanel.getChild("n10").asButton;
        btnRegister.addClickListener(this.__clickRegister, this);
        
    }
    private closeRegisterPanel() {
        fairygui.GRoot.inst.removeChild(this._regPanel);

        this._regPanel = null;
    }

    private openEnterPanel() {
        this._enterPanel = fairygui.UIPackage.createObject("login","enter").asCom;
        fairygui.GRoot.inst.addChild(this._enterPanel);

        var btnEnter = this._enterPanel.getChild("n1").asButton;
        btnEnter.addClickListener(this.__clickEnter, this);

        var btnSvr = this._enterPanel.getChild("n0").asButton;
        btnSvr.addClickListener(this.__clickSvr, this);

        var btnChangeAcc = this._enterPanel.getChild("n3").asButton;
        btnChangeAcc.addClickListener(this.__clickChangeAcc, this);
    }
    private closeEnterPanel() {
        fairygui.GRoot.inst.removeChild(this._enterPanel);

        this._enterPanel = null;
    }

    private openCreatePanel() {
        this._createPanel = fairygui.UIPackage.createObject("login", "create_role").asCom;
        fairygui.GRoot.inst.addChild(this._createPanel);

        var btnCreate = this._createPanel.getChild("n2").asButton;
        btnCreate.addClickListener(this.__clickCreate, this);
    }
    private closeCreatePanel() {
        fairygui.GRoot.inst.removeChild(this._createPanel);

        this._createPanel = null;
    }

    private openSvrListPanel() {
        this._svrListPanel = fairygui.UIPackage.createObject("login", "servers").asCom;
        fairygui.GRoot.inst.addChild(this._svrListPanel);

        var btnChoose = this._svrListPanel.getChild("n5").asButton;
        btnChoose.addClickListener(this.__clickSvrChoose, this);
    }
    private closeSvrListPanel() {
        fairygui.GRoot.inst.removeChild(this._svrListPanel);

        this._svrListPanel = null;
    }

    private __clickLogin(evt: Event):void {
        var lbAcc = this._loginPanel.getChild("n2").asTextInput;
        var lbPwd = this._loginPanel.getChild("n13").asTextInput;
        Util.info("点击登录游戏 acc/pass:", lbAcc.text, lbPwd.text);

        var acc = lbAcc.text.trim();
        var pwd = lbPwd.text.trim();
        if (acc == null || acc == "" || pwd == null || pwd == "") {
            console.log(net.strCode["loginNotNull"].text);

            TipMgr.showTip(net.strCode["loginNotNull"].text);
            return
        }
        Login.inst.setAccAndPwd(acc, pwd);

        Login.inst.login()
    }

    private __toRegister(evt:Event):void {
        this.closeLoginPanel()
        this.openRegisterPanel()
    }

    private __cancelReg(evt:Event):void {
        this.closeRegisterPanel();
        this.openLoginPanel();
    }

    private __clickRegister(evt:Event):void {
        var lbAcc = this._regPanel.getChild("n3").asTextInput;
        var lbPwd1 = this._regPanel.getChild("n4").asTextInput;
        var lbPwd2 = this._regPanel.getChild("n5").asTextInput;

        var acc = lbAcc.text.trim();
        var pwd1 = lbPwd1.text.trim();
        var pwd2 = lbPwd2.text.trim();
        if (acc == null || pwd1 == null || pwd2 == null || acc == "" || pwd1 == "" || pwd2 == "") {
            TipMgr.showTip(net.strCode["loginNotNull"])
            return
        // } else if (acc.length < 6 || acc.length >12){
        //     TipMgr.showTip(net.strCode["accountLengthNotCorrect"])
        //     return
        // } else if (pwd1.length < 6 || pwd1.length >12){
        //     TipMgr.showTip(net.strCode["pwdLengthNotCorrect"])
        //     return
        // } else if (pwd1 !== pwd2) {
        //     TipMgr.showTip(net.strCode["pwdNotSame"])
        //     return
        } else {
            net.Send("msgProto.AccountRegister", {
                account: acc,
                pwd: pwd1,
                channelId: 99999,
                deviceId: "device" + new Date().getTime().toString()
            })
        }
    }

    private __clickEnter(evt:Event):void {
        Util.info("点击进入游戏。。。。")

        if (Login.inst.gameEntered()) {
            return
        }

        let testSvr: msgProto.PbSvrInfo = null;
        if (this._userSvrs.length > 0) {
            testSvr = this._userSvrs[0];
        } else if (this._svrList.length > 0) {
            testSvr = this._svrList[0];
        } else {
            Util.log(net.strCode["svrMiss"])

            TipMgr.showTip(net.strCode["svrMiss"])
            return
        }
        Login.inst.connToGame(testSvr.host, testSvr.port)
    }

    private __clickSvr(evt:Event):void {
        Util.info("点击选择服务器。。。");

        this.openSvrListPanel();
    }
    private __clickChangeAcc(evt:Event) {
        this.closeEnterPanel();
        Util.info("关闭enter界面。。")

        Login.inst.setAccAndPwd("", "");
        this.openLoginPanel();
    }

    private __clickRetry(evt:Event) {
        var self = this;
        // self.close();
        Util.info("关闭retry界面。。")
    }

    private __clickCreate(evt:Event) {
        let lbName = this._createPanel.getChild("n0").asTextInput;
        let name = lbName.text.trim();
        if (name == null || name == "") {
            TipMgr.showTip(net.strCode["inputRoleName"].text);
            return
        }
        Login.inst.createRole(1, name);
    }

    private __clickSvrChoose(evt:Event) {
        this.closeSvrListPanel()
    }

    enterBattleScene() {
        Util.info("进入游戏场景。。。。")
    }

    private loginResponse(msg:any) {
        Util.log("login response:",  net.iCode[msg.retCode].text)

        if (msg.retCode != 0) {
            Login.inst.setLoginState(false)

            TipMgr.showTip(net.iCode[msg.retCode].text);
            return
        }
        Login.inst.setLoginState(true)
        Login.inst.setAccountData(msg.accId, msg.LoginKey)

        Login.inst.getServerInfo()
    }

    private svrListGetResponse(msg:any) {
        if (msg.retType == 0) {
            Util.log('svr list get response:', net.iCode[msg.retCode].text)
            for (let i=0; i < msg.infos.length; i++) {
                // Util.log("server info:", i, msg.infos[i]);
            }
            this._svrList = msg.infos;

            this.closeLoginPanel();
            this.closeRegisterPanel();

            this.openEnterPanel();

            Login.inst.getUserServers()
        } else if (msg.retType == 1) {
            Util.log('svr users get response:', net.iCode[msg.retCode].text)
            for (let i=0; i < msg.infos.length; i++) {
                console.log("server info:", i, msg.infos[i]);
            }
            this._userSvrs = msg.infos;
        }
    }

    private gameEnterResponse(msg:any) {
        Util.log('game enter response:', net.iCode[msg.retCode].text)
        if (msg.retCode != 0) {
            TipMgr.showTip(net.iCode[msg.retCode].text);
            return
        }
        this.closeEnterPanel();

        if (msg.nickName == "") {
            this.openCreatePanel();
        } else {
            this.closeCreatePanel();
            Login.inst.saveUserData(msg.nickName, msg.userId)

            // 开始游戏，进入游戏大厅
            Login.inst.gotoLobby();
        }
    }

    private userCreateResponse(msg:any) {
        Util.log('user create response:', net.iCode[msg.retCode].text)
        if (msg.retCode != 0) {
            TipMgr.showTip(net.iCode[msg.retCode].text);
            return
        }
        this.closeCreatePanel();
        Login.inst.enterGame();
    }
}



