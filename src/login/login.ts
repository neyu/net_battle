class Login {
    private static _inst: Login;

    private _loginScene: LoginScene = null;
    private isRememberPwd:boolean = true;

    private _logined: boolean = false;
    private _account: string = "";
    private _password: string = "";

    private _accountId: number = 0;
    private _loginKey: string = "";
    private _accountData: any = {};
    private _userData: any = {};
    private _entered: boolean = false;
    private _svrIndex: number = 0;

    public _autoLogin:boolean = true;

    public static get inst(): Login {
        if (Login._inst == null) {
            Login._inst = new Login();
            Login._inst.init()
        }
        return Login._inst;
    }
    init() {
        this._accountData["loginKey"] = "";

        net.regMsgProc("game_verified", this.gameVerifyed, this)
        // this.checkNetwork();
    }
    createScene() {
        this._loginScene = new LoginScene()
        return this._loginScene
    }
    getScene() {
        return this._loginScene;
    }

    // SDK渠道登录，自动，手动
    checkLoginState() {
        // this.checkNetwork()
    }
    checkLoginState2() {
        if (this._autoLogin) {
            this.checkLocal()
        } else {
            //
        }
    }

    checkNetwork() {
        if (!net.isOnConn()) {
            TimerMgr.inst.doFrame(1, 0, this.networkTest, this);
        }
    }
    networkTest() {
        if (net.isOnConn()) {
            TimerMgr.inst.remove(this.networkTest, this)
            this.checkLoginState2()
        }
    }

    checkLocal() {
        var logined = ""; // mo.getLocalStorageItem(gc.Keys.logined, true);
        var acc = ""; // mo.getLocalStorageItem(gc.Keys.accountName, true);
        var pwd = ""; // mo.getLocalStorageItem(gc.Keys.password, true);

        if (logined && (acc != null && pwd != null)) {
            net.Send("msgProto.AccountLogin", {
                name: acc,
                pwd: pwd,
                channelId: 99999
            });

        } else {
            this._loginScene.on_login_fail()
        }
    }

    checkLoginResponse(succ) {
        if (succ) {
            this._loginScene.on_login_succ()
        } else {
            this._loginScene.on_login_fail()
        }
    }

    login(acc, pwd) {
        if (acc == null || acc == "" || pwd == null || pwd == "") {
            console.log(net.strCode["loginNotNull"].text);
        } else {
            this._account = acc;
            this._password = pwd;
            this._logined = false;

            if (!net.isOnConn()) {
                return   
            }
            net.Send("msgProto.AccountLogin", {
                account: acc,
                pwd: pwd,
                channelId: 99999
            });
        }
    }

    setLoginState(succ:boolean) {
        if (succ) {
            this._logined = true;
            this.saveAccAndPwd()
        } else {
            this._logined = false;
        }
    }

    setAccountData(accId:number, key:string) {
        this._accountId = accId;
        this._loginKey = key;
    }

    saveAccAndPwd() {
        //
    }

    saveUserData(name:string, userId:number) {
        console.log(name, userId);
        this._userData.nickName = name;
        this._userData.userId = userId;

        this._entered = true;
    }
    gameEntered() {
        return this._entered;
    }

    getServerInfo() {
        net.Send("msgProto.SvrListGet", {
            isTest: 1
        })
    }

    getUserServers() {
        net.Send("msgProto.UserSvrsGet", {
            accId: this._accountId
        })
    }

    connToGame(host:string, port:string) {
        net.Close()
        net.ResetToGame(host, port, this._accountId);
    }
    gameVerifyed() {
        this.enterGame()
    }

    enterGame() {
        net.Send("msgProto.GameEnter", {
            accId: this._accountId,
            loginKey: this._loginKey,
            serverIndexId: 1
        })
    }

    createRole(idx:number) {
        net.Send("msgProto.UserCreate", {
            name: "测试" + Math.round(Math.random() * 100).toString(),
            heroTempId: idx,
            serverIndexId: 1,
            shareKey: ""
        })
    }
}
 
