/**
 * 子弹
*/
class Bullet extends egret.Shape {
    private _radius: number = 0;
    private _bulletR: number = 10;
    private _dirX: number = 1;
    private _dirY: number = 1;
    private _drawOffset: number = 1;
    private _color: number = 0;

    constructor(dirX:number, dirY:number, color:number) {
        super()

        this._dirX = dirX;
        this._dirY = dirY;
        this._drawOffset = Math.sqrt(dirX * dirX + dirY * dirY)
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
        this.y = this._radius
    }

    private speed: number = 0.005;
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
        this.x += this.speed * pass * pass * this._dirX / this._drawOffset;
        this.y += this.speed * pass * pass * this._dirY / this._drawOffset;

        let moveOffset = Math.sqrt(this.x * this.x + this.y * this.y)
        if (moveOffset > this._radius) {
            egret.stopTick(this.move, this);
            this.parent.removeChild(this);
            return
        }

        this.time = now;
        return false;
    }
}