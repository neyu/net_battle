var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
/**
 * 子弹
*/
var Bullet = (function (_super) {
    __extends(Bullet, _super);
    function Bullet(dirX, dirY, color) {
        var _this = _super.call(this) || this;
        _this._radius = 0;
        _this._bulletR = 10;
        _this._dirX = 1;
        _this._dirY = 1;
        _this._drawOffset = 1;
        _this._color = 0;
        _this.speed = 0.005;
        _this.time = 0;
        _this._dirX = dirX;
        _this._dirY = dirY;
        _this._drawOffset = Math.sqrt(dirX * dirX + dirY * dirY);
        _this._color = color;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    Bullet.prototype.onAddToStage = function (event) {
        this.graphics.beginFill(this._color);
        this.graphics.lineStyle(1, 0x0);
        this.graphics.drawCircle(0, 0, this._bulletR);
        this.graphics.endFill();
        this.anchorOffsetX = 0.5;
        this.anchorOffsetY = 0.5;
        this.startMove();
    };
    Bullet.prototype.setBorder = function (radius) {
        this._radius = radius;
        this.y = this._radius;
    };
    Bullet.prototype.startMove = function () {
        this.time = egret.getTimer();
        egret.startTick(this.move, this);
    };
    Bullet.prototype.move = function (timeStamp) {
        var now = timeStamp;
        var time = this.time;
        var pass = now - time;
        // console.log("moveStar: ", (1000 / pass).toFixed(5));
        this.x += this.speed * pass * pass * this._dirX / this._drawOffset;
        this.y += this.speed * pass * pass * this._dirY / this._drawOffset;
        var moveOffset = Math.sqrt(this.x * this.x + this.y * this.y);
        if (moveOffset > this._radius) {
            egret.stopTick(this.move, this);
            this.parent.removeChild(this);
            return;
        }
        this.time = now;
        return false;
    };
    return Bullet;
}(egret.Shape));
__reflect(Bullet.prototype, "Bullet");
//# sourceMappingURL=bullet.js.map