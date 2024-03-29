//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

class Main extends egret.Sprite {
    public constructor() {
        super();

        this.graphics.beginFill(0xffffee, 0.7);
        this.graphics.drawRect(0, 0, 640, 1636);
        this.graphics.endFill();

        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event: egret.Event) {
        // this.stage.frameRate = 30;

        egret.lifecycle.addLifecycleListener((context) => {
            // custom lifecycle plugin
            context.onUpdate = () => {
            }
        })

        egret.lifecycle.onPause = () => {
            egret.ticker.pause();
        }

        egret.lifecycle.onResume = () => {
            egret.ticker.resume();
        }

        this.runGame().catch(e => {
            console.log(e);
        })

        this.testSomething();
    }

    private async runGame() {
        await this.loadResource()
        this.loadMyResource();

        const result = await RES.getResAsync("description_json")
        // this.startAnimation(result);

        await platform.login();
        const userInfo = await platform.getUserInfo();
        console.log(userInfo);
    }

    private async loadResource() {
        try {
            const loadingView = new LoadingUI();
            this.stage.addChild(loadingView);
            
            await RES.loadConfig("resource/default.res.json", "resource/");
            await RES.loadGroup("preload", 0, loadingView);
            this.stage.removeChild(loadingView);
        }
        catch (e) {
            console.error(e);
        }
    }

    private resMap: any = []
    private loadMyResource() {
        var uiLoading:RES.PromiseTaskReporter = {
            onProgress(current: number, total: number){
                if (current >= total) {
                    console.log("ui load finished:", current+"/"+total);
                }
            }
        };
        var iconLoading:RES.PromiseTaskReporter = {
            onProgress(current: number, total: number){
                if (current >= total) {
                    console.log("icon load finished:", current+"/"+total);
                }
            }
        };
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onGroupComplete, this);
        RES.loadGroup("ui", 0, uiLoading);
        this.resMap["ui"] = false
        RES.loadGroup("icon", 0, iconLoading);
        this.resMap["icon"] = false
    }
    private onGroupComplete(evt:RES.ResourceEvent) {
        console.log("res group finish: ", evt.groupName)
        this.resMap[evt.groupName] = true

        for (let key in this.resMap) {
            if (!this.resMap[key]) {
                return
            }
        }
        console.log("onGroupComplete !!!!!!!!!!!!!!!!")
        this.loadGameScene();
    }

    private textfield: egret.TextField;
    /**
     * 创建游戏场景
     * Create a game scene
     */
    private loadGameScene() {
        // this.testPanel()
        // this.showSandTable()
        
        // 初始化提示
        TipMgr.inst.init(this.stage);

        // 尝试连接网络
        Net.init()

        // 进入登录场景
        this.switchLogin()
    }

    private testPanel() {
        let stageW = this.stage.stageWidth;
        let stageH = this.stage.stageHeight;

        let topMask = new egret.Shape();
        topMask.graphics.beginFill(0x000000, 0.5);
        topMask.graphics.drawRect(0, 0, stageW, 172);
        topMask.graphics.endFill();
        topMask.y = 33;
        this.addChild(topMask);

        let line = new egret.Shape();
        line.graphics.lineStyle(2, 0xffffff);
        line.graphics.moveTo(0, 0);
        line.graphics.lineTo(0, 117);
        line.graphics.endFill();
        line.x = 172;
        line.y = 61;
        this.addChild(line);


        let colorLabel = new egret.TextField();
        colorLabel.textColor = 0xffffff;
        colorLabel.width = stageW - 172;
        colorLabel.textAlign = "center";
        colorLabel.text = "Hello Egret";
        colorLabel.size = 24;
        colorLabel.x = 172;
        colorLabel.y = 80;
        this.addChild(colorLabel);

        let textfield = new egret.TextField();
        this.addChild(textfield);
        textfield.alpha = 0;
        textfield.width = stageW - 172;
        textfield.textAlign = egret.HorizontalAlign.CENTER;
        textfield.size = 24;
        textfield.textColor = 0xffffff;
        textfield.x = 172;
        textfield.y = 135;
        this.textfield = textfield;
    }
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    private createBitmapByName(name: string) {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }

    /**
     * 描述文件加载成功，开始播放动画
     * Description file loading is successful, start to play the animation
     */
    private startAnimation(result: string[]) {
        let parser = new egret.HtmlTextParser();

        let textflowArr = result.map(text => parser.parse(text));
        let textfield = this.textfield;
        let count = -1;
        let change = () => {
            count++;
            if (count >= textflowArr.length) {
                count = 0;
            }
            let textFlow = textflowArr[count];

            // 切换描述内容
            // Switch to described content
            textfield.textFlow = textFlow;
            let tw = egret.Tween.get(textfield);
            tw.to({ "alpha": 1 }, 200);
            tw.wait(2000);
            tw.to({ "alpha": 0 }, 200);
            tw.call(change, this);
        };

        change();
    }

    private showSandTable() {
        let stageW = this.stage.stageWidth;
        let stageH = this.stage.stageHeight;

        let testApi = new TestEgretApi()
        // this.addChild(testApi);

        let table = new SandTable()
        this.addChild(table);
        table.anchorOffsetX = 0.5;
        table.anchorOffsetY = 0.5;
        table.x = stageW / 2
        table.y = stageH / 2
        // table.scaleX = 0.65 //1.5 //0.5
        // table.scaleY = 0.65 //1.5 //0.5
        table.scaleToEdge()

        let ctrlPanel = new CtrlPanel(table);
        this.addChild(ctrlPanel)
    }
    private switchLogin() {
        this.addChild(Login.inst.createScene());
    }
    private testSomething() {
        Util.log("test something....")
        // console.log("PI:", Math.PI)
        // console.log("PI/2:", Math.PI/2)
        // console.log("PI/3:", Math.PI/3)
        // console.log("PI/4:", Math.PI/4)
        // console.log("PI/6:", Math.PI/6)

        // console.log("tan PI/4:", Math.tan(Math.PI/4))
        // console.log("tan PI/6:", Math.tan(Math.PI/6))

        // console.log("tan:", Math.atan(1))
        // console.log("tan1:", Math.atan2(1, 1))

        // console.log("tan2:", Math.atan(Math.sqrt(3)/3))
        // console.log("tan3:", Math.atan2(Math.sqrt(3), 3))

        // console.log("tan4:", Math.atan(3/Math.sqrt(3)))
        // console.log("tan5:", Math.atan2(3, Math.sqrt(3)))

        let a = 2 / 3;
        let b = this.getFixedNumber(a);
        console.log("a:", a);
        console.log("b:", b);

        // TimerMgr.inst.doFrame(0, 0, this.doFrame, this)
        // TimerMgr.inst.doTimer(0, 0, this.doTimer, this)

        let scene = new THREE.Scene();
        Util.log("what is three scene:", scene);
    }
    private getFixedNumber(a:number): number {
        let b = parseFloat(a.toFixed(5))
        return b;
    }
    private doFrame(elapse:number) {
        Util.log("test do frame elapse:", elapse)
    }
    private doTimer(elapse:number) {
        Util.log("test do timer elapse:", elapse)
    }
}
