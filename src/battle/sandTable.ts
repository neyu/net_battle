/**
 * 沙盘
*/
class SandTable extends egret.DisplayObjectContainer {
    private _radius: number = 320
    private _w: number = 0;
    private _h: number = 0;
    private _scale: number = 1.0
    private _bulletR: number = 10;

    private _circleTb: egret.Shape;
    private _rectTb: egret.Shape;

    private _ballColors: number[];
    private _ballPool: egret.Shape[];
    private _ballR: number = 16;

    constructor() {
        super()

        this._ballPool = [];
        this._ballColors = [];
        this.initBallColor()

        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    private onAddToStage(event: egret.Event) {
        this._w = this._radius * Math.sqrt(2)
        this._h = this._w;

        this.drawSandTable()
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


        this.showBallPool()
    }
    private showBallPool() {
        this._ballPool = [];

        for (let i=0; i < 5; i++) {
            let ball = new egret.Shape()
            ball.graphics.lineStyle(1, 0xff0000);
            ball.graphics.beginFill(this._ballColors[i], 1);
            ball.graphics.drawCircle(0, 0, this._ballR);
            ball.graphics.endFill();
            ball.anchorOffsetX = 0.5;
            ball.anchorOffsetY = 0.5;
            this.addChild(ball);

            ball.x = -this._radius * 2/3 + 28 * i
            ball.y = this._radius + 50
            if (i == 4) {
                ball.scaleX = 1.2;
                ball.scaleY = 1.2;
            }

            this._ballPool.push(ball);
        }
    }
    private getRandColor(): number {
        let rand = Math.random() * 100
        let color = 0x0
        if (rand < 30 ) {
            color = 0xff0000
        } else if (rand > 60) {
            color = 0x0000ff
        } else {
            color = 0x00ff00
        }
        return color;
    }
    private initBallColor() {
        this._ballColors.push(this.getRandColor())
        this._ballColors.push(this.getRandColor())
        this._ballColors.push(this.getRandColor())
        this._ballColors.push(this.getRandColor())
        this._ballColors.push(this.getRandColor())
    }
    private resetBallColor() {
        this._ballColors[4] = this._ballColors[3]
        this._ballColors[3] = this._ballColors[2]
        this._ballColors[2] = this._ballColors[1]
        this._ballColors[1] = this._ballColors[0]
        this._ballColors[0] = this.getRandColor()

        for (let i=0; i < 5; i++) {
            this._ballPool[i].graphics.beginFill(this._ballColors[i], 1);
            this._ballPool[i].graphics.drawCircle(0, 0, this._ballR);
            this._ballPool[i].graphics.endFill();
        }
    }

    public scaleToEdge() {
        // this._circleTb.scaleX = Math.sqrt(2)
        // this._circleTb.scaleY = Math.sqrt(2)
        
        // this._rectTb.scaleX = Math.sqrt(2)
        // this._rectTb.scaleY = Math.sqrt(2)

        // this.scaleX = Math.sqrt(2)
        // this.scaleY = Math.sqrt(2)
    }

    public shoot(opt:IOptData) {
        let bullet = new Bullet(opt.dirX, opt.dirY, opt.color)
        this.addChild(bullet)
        bullet.setBorder(this._radius);

        if (Login.inst._userData.userId == opt.roleId) {
            this.resetBallColor();
        }
    }
    public tryShoot(dirX: number, dirY:number) {
        let data:IOptData = {
            roleId: Login.inst._userData.userId,
            type: "shoot",
            dirX: dirX,
            dirY: dirY,
            color: this._ballColors[4],
            angle: 90
        }
        net.Send("msgProto.ExchangeOptData", {
            optData: JSON.stringify(data)
        })
    }

}