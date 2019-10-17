/**
 * 子弹
*/
class Bullet extends egret.Shape {
    private _radius: number = 0;
    private _bulletR: number = 10;
    private _radian: number = 0;
    private _drawOffset: number = 1;
    private _color: number = 0;

    constructor(radian:number, color:number) {
        super()

        this._radian = radian;
        this._color = color;

        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    private onAddToStage(event: egret.Event) {
        this.graphics.beginFill(this._color)
        this.graphics.lineStyle(1, 0x0)
        this.graphics.drawCircle(0, 0, this._bulletR)
        this.graphics.endFill()

        this.anchorOffsetX = 0.5
        this.anchorOffsetY = 0.5

        this.startMove()
    }
    public setBorder(radius:number) {
        this._radius = radius;
    }

    private speed: number = 0.01;
    private time: number = 0;
    private startMove() {
        this.time = egret.getTimer();
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
        if (moveOffset > this._radius) {
            egret.stopTick(this.move, this);
            this.parent.removeChild(this);
            return false;
        }

        this.time = now;
        return false;
    }
}