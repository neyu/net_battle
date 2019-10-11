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
 * 沙盘
*/
var SandTable = (function (_super) {
    __extends(SandTable, _super);
    function SandTable() {
        var _this = _super.call(this) || this;
        _this._radius = 320;
        _this._w = 0;
        _this._h = 0;
        _this._scale = 1.0;
        _this._bulletR = 10;
        _this._ballR = 16;
        _this._ballPool = [];
        _this._ballColors = [];
        _this.initBallColor();
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    SandTable.prototype.onAddToStage = function (event) {
        this._w = this._radius * Math.sqrt(2);
        this._h = this._w;
        this.drawSandTable();
    };
    SandTable.prototype.drawSandTable = function () {
        this._circleTb = new egret.Shape();
        this._circleTb.graphics.lineStyle(1, 0xff0000);
        this._circleTb.graphics.beginFill(0x0, 1);
        this._circleTb.graphics.drawCircle(0, 0, this._radius);
        this._circleTb.graphics.endFill();
        this._circleTb.anchorOffsetX = 0.5;
        this._circleTb.anchorOffsetY = 0.5;
        this.addChild(this._circleTb);
        this._circleTb.alpha = 0.6;
        this._rectTb = new egret.Shape();
        this._rectTb.graphics.lineStyle(1, 0x00ff00);
        this._rectTb.graphics.beginFill(0x0, 1);
        this._rectTb.graphics.drawRect(-this._w / 2, -this._h / 2, this._w, this._h);
        this._rectTb.graphics.endFill();
        this._rectTb.anchorOffsetX = 0.5;
        this._rectTb.anchorOffsetY = 0.5;
        this.addChild(this._rectTb);
        this._rectTb.alpha = 0.1;
        this.showBallPool();
    };
    SandTable.prototype.showBallPool = function () {
        this._ballPool = [];
        for (var i = 0; i < 5; i++) {
            var ball = new egret.Shape();
            ball.graphics.lineStyle(1, 0xff0000);
            ball.graphics.beginFill(this._ballColors[i], 1);
            ball.graphics.drawCircle(0, 0, this._ballR);
            ball.graphics.endFill();
            ball.anchorOffsetX = 0.5;
            ball.anchorOffsetY = 0.5;
            this.addChild(ball);
            ball.x = -this._radius * 2 / 3 + 28 * i;
            ball.y = this._radius + 50;
            if (i == 4) {
                ball.scaleX = 1.2;
                ball.scaleY = 1.2;
            }
            this._ballPool.push(ball);
        }
    };
    SandTable.prototype.getRandColor = function () {
        var rand = Math.random() * 100;
        var color = 0x0;
        if (rand < 30) {
            color = 0xff0000;
        }
        else if (rand > 60) {
            color = 0x0000ff;
        }
        else {
            color = 0x00ff00;
        }
        return color;
    };
    SandTable.prototype.initBallColor = function () {
        this._ballColors.push(this.getRandColor());
        this._ballColors.push(this.getRandColor());
        this._ballColors.push(this.getRandColor());
        this._ballColors.push(this.getRandColor());
        this._ballColors.push(this.getRandColor());
    };
    SandTable.prototype.resetBallColor = function () {
        this._ballColors[4] = this._ballColors[3];
        this._ballColors[3] = this._ballColors[2];
        this._ballColors[2] = this._ballColors[1];
        this._ballColors[1] = this._ballColors[0];
        this._ballColors[0] = this.getRandColor();
        for (var i = 0; i < 5; i++) {
            this._ballPool[i].graphics.beginFill(this._ballColors[i], 1);
            this._ballPool[i].graphics.drawCircle(0, 0, this._ballR);
            this._ballPool[i].graphics.endFill();
        }
    };
    SandTable.prototype.ScaleToEdge = function () {
        // this._circleTb.scaleX = Math.sqrt(2)
        // this._circleTb.scaleY = Math.sqrt(2)
        // this._rectTb.scaleX = Math.sqrt(2)
        // this._rectTb.scaleY = Math.sqrt(2)
        // this.scaleX = Math.sqrt(2)
        // this.scaleY = Math.sqrt(2)
    };
    SandTable.prototype.Shoot = function (dirX, dirY) {
        var bullet = new Bullet(dirX, dirY, this._ballColors[4]);
        this.addChild(bullet);
        bullet.setBorder(this._radius);
        this.resetBallColor();
    };
    return SandTable;
}(egret.DisplayObjectContainer));
__reflect(SandTable.prototype, "SandTable");
//# sourceMappingURL=sandTable.js.map