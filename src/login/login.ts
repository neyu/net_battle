interface IUserData {
    userId?: number;
    nickName?: string;
}

class Login {
    private static _inst: Login = null;

    private _loginScene: LoginScene = null;
    private isRememberPwd:boolean = true;

    private _logined: boolean = false;
    private _account: string = "";
    private _password: string = "";

    private _accountId: number = 0;
    private _loginKey: string = "";
    private _accountData: any = {};
    public _userData: IUserData = {};
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
    private init() {
        this._accountData["loginKey"] = "";

        Net.regMsgProc("game_verified", this.gameVerifyed, this)
        // this.checkNetwork();
    }
    public createScene() {
        this._loginScene = new LoginScene()
        return this._loginScene
    }
    public getScene() {
        return this._loginScene;
    }

    // SDK渠道登录，自动，手动
    public checkLoginState() {
        // this.checkNetwork()
    }
    public checkLoginState2() {
        if (this._autoLogin) {
            // 
        } else {
            //
        }
    }

    public checkNetwork() {
        if (!Net.isOnConn()) {
            TimerMgr.inst.doFrame(1, 0, this.networkTest, this);
        }
    }
    public networkTest() {
        if (Net.isOnConn()) {
            TimerMgr.inst.remove(this.networkTest, this)
            this.checkLoginState2()
        }
    }

    public login() {
        if (this._account == null || this._account == "" 
        || this._password == null || this._password == "") {
            Util.log(Net.strCode["loginNotNull"].text);
            
            TipMgr.showTip(Net.strCode["loginNotNull"].text);
            return
        } else {
            this._logined = false;

            if (!Net.isOnConn()) {
                return   
            }
            Net.Send("msgProto.AccountLogin", {
                account: this._account,
                pwd: this._password,
                channelId: 99999
            });
        }
    }
    public resetEnterState() {
        Net.Close();
        Net.ConnToLogin()

        this._userData = {};
        this._entered = false;
    }
    public setLoginState(succ:boolean) {
        if (succ) {
            this._logined = true;
            this.saveAccAndPwd()
        } else {
            this._logined = false;
        }
    }

    public setAccAndPwd(acc:string, pwd:string) {
        this._account = acc;
        this._password = pwd;
    }
    public setAccountData(accId:number, key:string) {
        this._accountId = accId;
        this._loginKey = key;
    }

    public saveAccAndPwd() {
        //
    }

    public saveUserData(name:string, userId:number) {
        console.log(name, userId);
        this._userData.nickName = name;
        this._userData.userId = userId;

        this._entered = true;
    }
    public gameEntered() {
        return this._entered;
    }

    public getServerInfo() {
        Net.Send("msgProto.SvrListGet", {
            isTest: 1
        })
    }

    public getUserServers() {
        Net.Send("msgProto.UserSvrsGet", {
            accId: this._accountId
        })
    }

    public connToGame(host:string, port:string) {
        Net.Close()
        Net.ResetToGame(host, port, this._accountId);
    }
    public gameVerifyed() {
        this.enterGame()
    }

    public enterGame() {
        Net.Send("msgProto.GameEnter", {
            accId: this._accountId,
            loginKey: this._loginKey,
            serverIndexId: 1
        })
    }

    public createRole(idx:number, name:string) {
        Net.Send("msgProto.UserCreate", {
            name: name, //"测试" + Math.round(Math.random() * 100).toString(),
            heroTempId: idx,
            serverIndexId: 1,
            shareKey: ""
        })
    }
    public gotoLobby() {
        let mainStage = this._loginScene.parent

        this._loginScene.onExit();
        this._loginScene = null;

        mainStage.addChild(Lobby.inst.createScene())
    }
}
 
