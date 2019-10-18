/**
 * 子弹
*/
class Bullet extends egret.Sprite {
    private _borderR: number = 0;
    private _bulletR: number = 10;
    private _radian: number = 0;
    private _drawOffset: number = 1;
    private _ballInfo: IBallInfo = null;
    private _label: egret.TextField = null;

    constructor(radian:number, ball:IBallInfo) {
        super()

        this._radian = radian;
        this._ballInfo = ball;
        // this.width = this._bulletR * 2;
        // this.height = this._bulletR * 2
        // this.anchorOffsetX = 0.5
        // this.anchorOffsetY = 0.5

        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    private onAddToStage(event: egret.Event) {
        this.graphics.beginFill(this._ballInfo.color)
        this.graphics.lineStyle(1, 0x0)
        this.graphics.drawCircle(0, 0, this._bulletR)
        this.graphics.endFill()

        this._label = new egret.TextField();
        this.addChild(this._label);
        this._label.textAlign = egret.HorizontalAlign.CENTER 
        this._label.verticalAlign = egret.VerticalAlign.MIDDLE
        this._label.size = 10;
        this._label.width = 50;
        this._label.height = 14;
        this._label.x = -this._label.width / 2;
        this._label.y = this._bulletR;
        this._label.textColor = 0xffcc00;
        this._label.text = this._ballInfo.text; //"弹(Ra)";
        this._label.anchorOffsetX = 0.5;
        this._label.anchorOffsetX = 0.5;

        this.startMove()
    }
    public setBorder(radius:number) {
        this._borderR = radius;
    }

    private speed: number = 0.002;
    private time: number = 0;
    private _bornTime: number = 0;
    private startMove() {
        this.time = egret.getTimer();
        this._bornTime = this.time
        egret.startTick(this.move, this);
    }
    private move(timeStamp: number): boolean {
        var now = timeStamp;
        var time = this.time;
        var pass = now - time;
        // console.log("moveStar: ", (1000 / pass).toFixed(5));
        this.x += this.speed * pass * pass * Math.cos(this._radian);
        this.y += -this.speed * pass * pass * Math.sin(this._radian);

        let moveOffset = Math.sqrt(this.x * this.x + this.y * this.y)
        if (moveOffset >= this._borderR) {
            // 修正小数计算带来的越界
            let ratio = this._borderR / moveOffset;
            this.x = this.x * ratio;
            this.y = this.y * ratio;

            if (this._radian <= Math.PI * 2 / 3) {
                this._radian = this._radian * 3;
            } else if (this._radian > Math.PI * 2 / 3 && this._radian <= Math.PI * 4 / 3) {
                this._radian = this._radian * 3 - Math.PI * 2;
            } else if (this._radian > Math.PI * 4 / 3) {
                this._radian = this._radian * 3 - Math.PI * 4;
            }
        }
        if (now - this._bornTime > 30000) {
            egret.stopTick(this.move, this);
            this.parent.removeChild(this);
            return false;
        }

        this.time = now;
        return false;
    }
}