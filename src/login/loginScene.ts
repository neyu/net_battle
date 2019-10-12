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

    openLoginPanel() {

        this._loginPanel = fairygui.UIPackage.createObject("login", "login").asCom;
        fairygui.GRoot.inst.addChild(this._loginPanel);

        var btnLogin = this._loginPanel.getChild("n10").asButton;
        btnLogin.addClickListener(this.__clickLogin, this);

        var btnToReg = this._loginPanel.getChild("n11").asButton;
        btnToReg.addClickListener(this.__toRegister, this);

    }
    closeLoginPanel() {
        fairygui.GRoot.inst.removeChild(this._loginPanel);

        this._loginPanel = null;
    }

    openRegisterPanel() {
        this._regPanel = fairygui.UIPackage.createObject("login", "register").asCom;
        fairygui.GRoot.inst.addChild(this._regPanel);

        var btnCancel = this._regPanel.getChild("n9").asButton;
        btnCancel.addClickListener(this.__cancelReg, this);

        var btnRegister = this._regPanel.getChild("n10").asButton;
        btnRegister.addClickListener(this.__clickRegister, this);
        
    }
    closeRegisterPanel() {
        fairygui.GRoot.inst.removeChild(this._regPanel);

        this._regPanel = null;
    }

    openEnterPanel() {
        this._enterPanel = fairygui.UIPackage.createObject("login","enter").asCom;
        fairygui.GRoot.inst.addChild(this._enterPanel);

        var btnEnter = this._enterPanel.getChild("n1").asButton;
        btnEnter.addClickListener(this.__clickEnter, this);

        var btnSvr = this._enterPanel.getChild("n0").asButton;
        btnSvr.addClickListener(this.__clickSvr, this);

        var btnChangeAcc = this._enterPanel.getChild("n3").asButton;
        btnChangeAcc.addClickListener(this.__clickChangeAcc, this);

        this.checkServersShow();

    }
    closeEnterPanel() {
        fairygui.GRoot.inst.removeChild(this._enterPanel);

        this._enterPanel = null;
    }

    openCreatePanel() {
        this._createPanel = fairygui.UIPackage.createObject("login", "create_role").asCom;
        fairygui.GRoot.inst.addChild(this._createPanel);

        var btnCreate = this._createPanel.getChild("n2").asButton;
        btnCreate.addClickListener(this.__clickCreate, this);
    }
    closeCreatePanel() {
        fairygui.GRoot.inst.removeChild(this._createPanel);

        this._createPanel = null;
    }

    openSvrListPanel() {
        this._svrListPanel = fairygui.UIPackage.createObject("login", "servers").asCom;
        fairygui.GRoot.inst.addChild(this._svrListPanel);

        var btnChoose = this._svrListPanel.getChild("n5").asButton;
        btnChoose.addClickListener(this.__clickSvrChoose, this);
    }
    closeSvrListPanel() {
        fairygui.GRoot.inst.removeChild(this._svrListPanel);

        this._svrListPanel = null;
    }

    checkServersShow(){
        var self = this;
    }
    _selectServer(item){
        //
    }

    selectServer(){
        var self = this;
        // self.indexServer = IndexServer.create().show().onClose(function(){
        //     self.showCurServer(self.indexServer.selectData);
        //     self.checkServersShow();
        // });
    }

    showCurServer(data,lock?:boolean){
        // 
    }

    _afterIndexBg(){
        //
    }
    onExit(){
        //
    }

    on_login_succ(){
        // var self = this;
        // this.closeLoginPanel();

        console.log("on_login_succ.........")
    }
    on_login_fail() {
        var self = this;
        console.log("on_login_fail.........")
        //重试
        // IndexRetry.create().show();
    }    

    private __clickLogin(evt: Event):void {
        if (1) {
            this.closeLoginPanel()
            this.openEnterPanel()
            return
        }

        var lbAcc = this._loginPanel.getChild("n7").asTextInput;
        var lbPwd = this._loginPanel.getChild("n8").asTextInput;
        console.log("登录游戏 get acc/pass:", lbAcc.text, lbPwd.text);

        var acc = lbAcc.text.trim();
        var pwd = lbPwd.text.trim();

        // g_index.localSdk.loginLocal(acc, pwd, function(){
        //     // self.close();
        //     console.log("关闭登录界面。。")
        // });

        // net.Send("msgProto.AccountLogin", {
        //     name: acc,
        //     pwd: pwd,
        //     channelId: egret.project.channelId
        // });
        Login.inst.login(acc, pwd)
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
        if (1) {
            this.closeRegisterPanel()
            this.openEnterPanel()
            return
        }

        var lbAcc = this._regPanel.getChild("n10").asTextInput;
        var lbPwd1 = this._regPanel.getChild("n11").asTextInput;
        var lbPwd2 = this._regPanel.getChild("n12").asTextInput;

        var acc = lbAcc.text.trim();
        var pwd1 = lbPwd1.text.trim();
        var pwd2 = lbPwd2.text.trim();
        if (acc == null || pwd1 == null || pwd2 == null || acc == "" || pwd1 == "" || pwd2 == "") {
            // mo.showMsg(gc.id_c_msgCode.loginNotNull);
            console.log(net.strCode["loginNotNull"]);
        // } else if (acc.length < 6 || acc.length >12){
        //     // mo.showMsg(gc.id_c_msgCode.accountLengthNotCorrect);
        //     console.log(net.strCode["accountLengthNotCorrect"]);
        // } else if (pwd1.length < 6 || pwd1.length >12){
        //     // mo.showMsg(gc.id_c_msgCode.pwdLengthNotCorrect);
        //     console.log(net.strCode["pwdLengthNotCorrect"]);
        } else if (pwd1 !== pwd2) {
            // mo.showMsg(gc.id_c_msgCode.pwdNotSame);
            console.log(net.strCode["pwdNotSame"]);
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
        if (1) {
            this.closeEnterPanel()
            this.openCreatePanel()
            return
        }

        var self = this;
        this.closeEnterPanel();
        console.log("开始进入游戏。。。。")

        if (Login.inst.gameEntered()) {
            // 开始游戏
        }

        let testSvr: msgProto.PbSvrInfo = null;
        if (this._userSvrs.length > 0) {
            testSvr = this._userSvrs[0];
        } else if (this._svrList.length > 0) {
            testSvr = this._svrList[0];
        } else {
            console.log(net.strCode["svrMiss"])
            return
        }
        Login.inst.connToGame(testSvr.Host, testSvr.Port)
    }

    private __clickSvr(evt:Event):void {
        var self = this;
        console.log("选择服务器。。。");
        this.openSvrListPanel();
    }
    private __clickChangeAcc(evt:Event) {
        this.closeEnterPanel();
        console.log("关闭enter界面。。")

        this.openLoginPanel();
    }

    private __clickRetry(evt:Event) {
        var self = this;
        // self.close();
        console.log("关闭retry界面。。")
    }

    private __clickCreate(evt:Event) {
        if (1) {
            this.closeCreatePanel()
            this.openLoginPanel()
            return;
        }
        Login.inst.createRole(1);
    }

    private __clickSvrChoose(evt:Event) {
        this.closeSvrListPanel()
    }

    enterBattleScene() {
        console.log("进入游戏场景。。。。")
    }

    private loginResponse(msg:any) {
        console.log('login response:', net.iCode[msg.retCode].text)  

        if (msg.retCode != 0) {
            Login.inst.setLoginState(false)

            return
        }
        Login.inst.setLoginState(true)
        Login.inst.setAccountData(msg.accId, msg.LoginKey)
        // this.on_login_succ()
        Login.inst.getServerInfo()
    }

    private svrListGetResponse(msg:any) {
        if (msg.retType == 0) {
            console.log('svr list get response:', net.iCode[msg.retCode].text)
            for (let i=0; i < msg.infos.length; i++) {
                console.log("server info:", i, msg.infos[i]);
            }
            this._svrList = msg.infos;

            this.closeLoginPanel();
            this.closeRegisterPanel();

            this.openEnterPanel();

            Login.inst.getUserServers()
        } else if (msg.retType == 1) {
            console.log('svr users get response:', net.iCode[msg.retCode].text)
            for (let i=0; i < msg.infos.length; i++) {
                console.log("server info:", i, msg.infos[i]);
            }
            this._userSvrs = msg.infos;
        }
    }

    private gameEnterResponse(msg:any) {
        console.log('game enter response:', net.iCode[msg.retCode].text)
        if (msg.retCode != 0) {
            return
        }
        if (msg.nickName == "") {
            this.openCreatePanel();
        } else {
            this.closeCreatePanel();
            Login.inst.saveUserData(msg.nickName, msg.userId)
        }
    }

    private userCreateResponse(msg:any) {
        console.log('user create response:', net.iCode[msg.retCode].text)
        if (msg.retCode != 0) {
            return
        }
    }
}



