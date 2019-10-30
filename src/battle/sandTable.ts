/**
 * 沙盘
*/
interface IBallInfo {
    text: string,
    color: number,
    score: number,
    type: number,
    userId: number,
}
class SandTable extends egret.DisplayObjectContainer {
    private _radius: number = 320
    private _w: number = 0;
    private _h: number = 0;
    private _scale: number = 1.0
    private _origRadian: number = 0;

    private _circleTb: egret.Shape;
    private _rectTb: egret.Shape;

    // 预备球队列
    private _ballR: number = 16;
    private _ballInfos: IBallInfo[];
    private _ballPool: egret.Shape[];
    private _ballPoolEx: egret.Shape[];

    // 沙盘中实体球集合
    private _bulletR: number = 10;
    private _bulletList: Bullet[] = [];

    constructor() {
        super()

        this._ballPool = [];
        this._ballInfos = [];
        this.initBallInfo()

        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    private onAddToStage(event: egret.Event) {
        this._w = this._radius * Math.sqrt(2)
        this._h = this._w;

        // let angleList = [0, 90, 180, 270];
        this._origRadian = this.getRandRadian();

        this.drawSandTable()

        TimerMgr.inst.doTimer(500, 0, this.doCollisionDetect, this);    
    }

    private getRandRadian(): number {
        let rand = Math.random() * 360;
        if (rand < 90) {
            return 0;
        } else if (rand < 180) {
            return parseFloat((Math.PI/2).toFixed(5));
        } else if (rand < 270) {
            return parseFloat((Math.PI).toFixed(5));
        } else {
            return parseFloat((Math.PI*3/2).toFixed(5));
        }
    }
    private drawSandTable() {
        this._circleTb = new egret.Shape();
        this._circleTb.graphics.lineStyle(1, 0xff0000);
        this._circleTb.graphics.beginFill(0x0, 1);
        this._circleTb.graphics.drawCircle(0, 0, this._radius);
        this._circleTb.graphics.endFill();
        this._circleTb.anchorOffsetX = 0.5;
        this._circleTb.anchorOffsetY = 0.5;
        this.addChild(this._circleTb);
        this._circleTb.alpha = 0.6

        this._rectTb = new egret.Shape();
        this._rectTb.graphics.lineStyle(1, 0x00ff00);
        this._rectTb.graphics.beginFill(0x0, 1)
        this._rectTb.graphics.drawRect(-this._w/2, -this._h/2, this._w, this._h)
        this._rectTb.graphics.endFill()
        this._rectTb.anchorOffsetX = 0.5
        this._rectTb.anchorOffsetY = 0.5
        this.addChild(this._rectTb)
        this._rectTb.alpha = 0.1

        this.showBallPoolEx()
        this.showBallPool()
        this.changeBet(1)
    }

    private showBallPool() {
        this._ballPool = [];

        for (let i=0; i < 5; i++) {
            let ball = new egret.Shape()
            ball.graphics.beginFill(0x0000ff, 1);
            ball.graphics.drawCircle(0, 0, this._ballR);
            ball.graphics.endFill();
            ball.anchorOffsetX = 0.5;
            ball.anchorOffsetY = 0.5;
            this.addChild(ball);
            ball.alpha = 0;

            ball.x = -240 + 28 * i //this._radius * 2/3
            ball.y = this._radius + 40
            if (i == 4) {
                ball.scaleX = 1.3;
                ball.scaleY = 1.3;
            }

            this._ballPool.push(ball);
        }
    }
    private showBallPoolEx() {
        this._ballPoolEx = [];

        for (let i=0; i < 5; i++) {
            let ball = new egret.Shape()
            ball.graphics.lineStyle(2, 0xff00ff);
            ball.graphics.beginFill(0xffffff, 1);
            ball.graphics.drawCircle(0, 0, this._ballR+2);
            ball.graphics.endFill();
            ball.anchorOffsetX = 0.5;
            ball.anchorOffsetY = 0.5;
            this.addChild(ball);

            ball.x = -240  + 28 * i //-this._radius * 2/3
            ball.y = this._radius + 40
            if (i == 4) {
                ball.scaleX = 1.3;
                ball.scaleY = 1.3;
            }

            this._ballPoolEx.push(ball);
        }
    }

    private getRandBall(): IBallInfo {
        let ballInfo: IBallInfo = {text:"", color:0, score:0, type:0, userId:0}
        let rand = Math.random() * 100
        ballInfo.type = Math.floor(rand)
        if (rand < 30 ) {
            ballInfo.text = "核(Ra)"
        } else if (rand > 60) {
            ballInfo.text = "水(HO)"
        } else {
            ballInfo.text = "命(C)"
        }
        return ballInfo;
    }
    private getRandDice(): number {
        let score: number = 0;
        let rand = Math.random() * 100
        if (rand < 10 ) {
            score = 6;
        } else if (rand >= 10 && rand < 20) {
            score = 5;
        } else if (rand >= 20 && rand < 40) {
            score = 4;
        } else if (rand > 40 && rand < 70) {
            score = 3;
        } else if (rand >= 70 && rand < 90) {
            score = 2;
        } else {
            score = 1;
        }
        return score;
    }
    private getRandColor(type:number): number {
        if (type <= 30) {
            return 0xff0000;
        } else if (type <= 60) {
            return 0x00ff00
        } else {
            return 0x0000ff
        }
    }
    private getDiceColor(type:number): number {
        if (type == 0) {
            return 0x0000ff;
        } else if (type == 1) {
            return 0xff0000;
        } else if (type == 2) {
            return 0x00ff00
        }
    }
    private initBallInfo() {
        this._ballInfos.push(this.getRandBall())
        this._ballInfos.push(this.getRandBall())
        this._ballInfos.push(this.getRandBall())
        this._ballInfos.push(this.getRandBall())
        this._ballInfos.push(this.getRandBall())
    }
    private resetBallInfo() {
        this._ballInfos[4] = this._ballInfos[3]
        this._ballInfos[3] = this._ballInfos[2]
        this._ballInfos[2] = this._ballInfos[1]
        this._ballInfos[1] = this._ballInfos[0]
        this._ballInfos[0] = this.getRandBall()

        for (let i=0; i < 5; i++) {
            this._ballPool[i].graphics.beginFill(this.getRandColor(this._ballInfos[i].type), 1);
            this._ballPool[i].graphics.drawCircle(0, 0, this._ballR);
            this._ballPool[i].graphics.endFill();
        }
    }
    public addBallInfo(color:number) {
        let ballInfo: IBallInfo = {text:"", color:0x0000ff, score:0, type:0, userId:0}

    }
    public changeBet(bet:number) {
        Util.log("add bet:", bet);
        for (let i=0; i < 5-bet; i++) {
            this._ballPool[i].alpha = 0
        }
        for (let i=5-bet; i < 5; i++) {
            this._ballPool[i].alpha = 1
        }
    }
    public scaleToEdge() {
        // this._circleTb.scaleX = Math.sqrt(2)
        // this._circleTb.scaleY = Math.sqrt(2)
        
        // this._rectTb.scaleX = Math.sqrt(2)
        // this._rectTb.scaleY = Math.sqrt(2)

        // this.scaleX = Math.sqrt(2)
        // this.scaleY = Math.sqrt(2)
        this.scaleX = 0.7
        this.scaleY = 0.7
    }

    public clear() {
        for (let i=0; i < this._bulletList.length; i++) {
            let bullet = this._bulletList[i]
            bullet.destroy()
        }
        this._bulletList = [];
    }
    private doCollisionDetect() {
        for (let i=0; i < this._bulletList.length; i++) {
            let bA = this._bulletList[i];
            let diameter = bA._bulletR * 2;
            for (let j=i+1; j < this._bulletList.length; j++) {
                let bB = this._bulletList[j];
                let len = Math.sqrt((bA.x - bB.x) * (bA.x - bB.x) + (bA.y - bB.y) * (bA.y - bB.y))
                if (len <= diameter) {
                    this.bulletCollision(bA, bB);
                }
            }
        }
        // clear dead bullet
        for (let i=this._bulletList.length-1; i >=0; i--) {
            let bullet = this._bulletList[i]
            if (bullet._isDead) {
                bullet.destroy()
                this._bulletList.splice(i, 1);
            }
        }
    }
    private bulletCollision(bA:Bullet, bB:Bullet) {
        if (Battle.inst.mode == 1) {
            let scoreA = bA._ballInfo.score
            let scoreB = bB._ballInfo.score
            if (bA._ballInfo.type != 1 && bB._ballInfo.type != 1) {
                if (bA._ballInfo.type == 2) {
                    bA._ballInfo.score = scoreB;
                    bA.changeScore();
                }
                if (bB._ballInfo.type == 2) {
                    bB._ballInfo.score = scoreA;
                    bB.changeScore();
                }
            } else {
                // 置换
                bA._ballInfo.score = scoreB;
                bB._ballInfo.score = scoreA;
                bA.changeScore();
                bB.changeScore();
            }
        }
    }
    
    public testShoot(radian:number) {
        this._origRadian = Math.PI / 4;

        // Util.log("test shoot orig/rad:", this._origRadian, radian);
        let shtRad = radian + this._origRadian;

        let bullet = new Bullet(shtRad, this._ballInfos[4])
        this.addChild(bullet)
        bullet.setBorder(this._radius);
        bullet.x = this._radius * Math.sin(this._origRadian);
        bullet.y = this._radius * Math.cos(this._origRadian);

        this._bulletList.push(bullet);

        this.resetBallInfo();
    }

    public tryShoot(radian:number) {
        let data:IOptData;
        if (Battle.inst.mode == 0) {
            data = {
                opt: "shoot",
                roleId: Login.inst._userData.userId,
                mode: Battle.inst.mode,
                ballInfo: this._ballInfos[4],
                origRad: this._origRadian,
                radian: radian
            }
        } else if (Battle.inst.mode == 1) {
            let ballInfo: IBallInfo = {text:"", color:0, score:this.getRandDice(), type:0, userId:0}
            ballInfo.type = Battle.inst._diceType
            ballInfo.text = Login.inst._userData.nickName;
            data = {
                opt: "shoot",
                roleId: Login.inst._userData.userId,
                mode: Battle.inst.mode,
                ballInfo: ballInfo,
                origRad: this._origRadian,
                radian: radian
            }
        }
        // Util.log("try shoot orig/rad:", this._origRadian, radian);

        Net.Send("msgProto.ExchangeOptData", {
            optData: JSON.stringify(data)
        })
    }
    public shoot(opt:IOptData) {
        // Util.log("shoot orig/rad:", opt.origRad, opt.radian);
        let debug = "orig/rad:" + opt.origRad.toString() + "/" + opt.radian.toString();
        Battle.inst.getScene().showDebug(debug);

        let shtRad = opt.radian + opt.origRad - this._origRadian;
        let bullet = new Bullet(shtRad, opt.ballInfo)
        this.addChild(bullet)
        bullet.setBorder(this._radius);
        bullet.x = this._radius * Math.sin(opt.origRad - this._origRadian);
        bullet.y = this._radius * Math.cos(opt.origRad - this._origRadian);

        this._bulletList.push(bullet);

        if (Battle.inst.mode == 0) {
            if (Login.inst._userData.userId == opt.roleId) {
                this.resetBallInfo();
            }
        }
    }

}