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
 * 测试egret基础Api
*/
var TestEgretApi = (function (_super) {
    __extends(TestEgretApi, _super);
    function TestEgretApi() {
        var _this = _super.call(this) || this;
        _this._w = 0;
        _this._h = 0;
        _this.timer = null;
        _this.count = 0;
        _this.speed = 0.05;
        _this.time = 0;
        _this.star = null;
        _this.init();
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    TestEgretApi.prototype.init = function () {
        //
    };
    TestEgretApi.prototype.onAddToStage = function () {
        console.log("SandTable stage w/h", this.stage.stageWidth, this.stage.stageHeight);
        this._w = this.stage.stageWidth;
        this._h = this.stage.stageHeight;
        this.drawShape();
        this.drawCircle();
        this.drawLine();
        this.drawCurve();
        this.drawArc();
        this.drawArc2();
        this.drawFan();
        this.drawArcProgress();
        this.drawFanProgress();
        this.drawMask();
        this.drawMosaic();
        // 定时器
        this.testTimer();
        this.testTicker();
    };
    TestEgretApi.prototype.drawShape = function () {
        var shp = new egret.Shape();
        shp.graphics.beginFill(0xff0000, 1);
        shp.graphics.lineStyle(2, 0x00ff00);
        var shpW = 100;
        var shpH = 200;
        shp.graphics.drawRect(this._w / 2 - shpW / 2, this._h / 2 - shpH / 2, shpW, shpH);
        shp.graphics.endFill();
        this.addChild(shp);
    };
    TestEgretApi.prototype.drawCircle = function () {
        var shp = new egret.Shape();
        shp.graphics.beginFill(0xffff00, 0.75);
        shp.graphics.lineStyle(2, 0x00ff00);
        var radius = 75;
        shp.graphics.drawCircle(this._w / 2, this._h / 2 - 150, radius);
        shp.graphics.endFill();
        this.addChild(shp);
    };
    TestEgretApi.prototype.drawLine = function () {
        var shp = new egret.Shape();
        shp.graphics.lineStyle(3, 0x00ffff);
        shp.graphics.moveTo(50, 250);
        shp.graphics.lineTo(200, 700);
        shp.graphics.lineStyle(3, 0x0000ff);
        shp.graphics.lineTo(400, 700);
        shp.graphics.lineStyle(3, 0xff00ff);
        shp.graphics.lineTo(400, 900);
        this.addChild(shp);
    };
    TestEgretApi.prototype.drawCurve = function () {
        var shp = new egret.Shape();
        shp.graphics.lineStyle(3, 0x00ff00);
        shp.graphics.moveTo(50, 700);
        // shp.graphics.curveTo(150, 900, 450, 800)
        shp.graphics.cubicCurveTo(150, 1000, 250, 600, 450, 900);
        this.addChild(shp);
    };
    TestEgretApi.prototype.drawArc = function () {
        var shp = new egret.Shape();
        shp.graphics.lineStyle(3, 0x000);
        shp.graphics.beginFill(0xff0000);
        shp.graphics.drawArc(250, 900, 50, 0, Math.PI / 2, true);
        shp.graphics.endFill();
        this.addChild(shp);
    };
    TestEgretApi.prototype.drawArc2 = function () {
        var shp = new egret.Shape();
        shp.graphics.lineStyle(3, 0x00ffff);
        shp.graphics.drawArc(250, 900, 80, Math.PI, Math.PI * 3 / 2, true);
        this.addChild(shp);
    };
    TestEgretApi.prototype.drawFan = function () {
        var shp = new egret.Shape();
        shp.graphics.lineStyle(3, 0x00ffff);
        shp.graphics.beginFill(0xff00ff);
        shp.graphics.moveTo(450, 950);
        shp.graphics.lineTo(500, 950);
        shp.graphics.drawArc(450, 950, 50, 0, Math.PI * 3 / 2, false);
        shp.graphics.lineTo(450, 950);
        shp.graphics.endFill();
        this.addChild(shp);
    };
    TestEgretApi.prototype.drawArcProgress = function () {
        var shp = this.getArcProgress();
        // shp.x = 400;
        // shp.y = 300;
        // this.addChild(shp);
    };
    TestEgretApi.prototype.getArcProgress = function () {
        var self = this;
        var angle = 0;
        egret.startTick(function (timeStamp) {
            angle += 1;
            changeGraphics(angle);
            angle = angle % 360;
            return true;
        }, this);
        var color = 0x0;
        var shape = null;
        function changeGraphics(angle) {
            shape = new egret.Shape();
            // shape.graphics.clear();
            color += 0x111111;
            shape.graphics.lineStyle(2, color, 1);
            shape.graphics.drawArc(50, 50, 50, 0, angle * Math.PI / 180, false);
            shape.graphics.endFill();
            shape.x = 400;
            shape.y = 300;
            self.addChild(shape);
        }
        return shape;
    };
    TestEgretApi.prototype.drawFanProgress = function () {
        var shp = this.getSectorProgress();
        //
    };
    TestEgretApi.prototype.getSectorProgress = function () {
        var self = this;
        var angle = 0;
        egret.startTick(function (timeStamp) {
            angle += 1;
            changeGraphics(angle);
            angle = angle % 360;
            return true;
        }, this);
        var color = 0x0;
        var shape = null;
        function changeGraphics(angle) {
            shape = new egret.Shape();
            // shape.graphics.clear();
            color += 0x111111;
            shape.graphics.beginFill(color);
            shape.graphics.moveTo(50, 50);
            shape.graphics.lineTo(100, 50);
            shape.graphics.drawArc(50, 50, 50, 0, angle * Math.PI / 180, false);
            shape.graphics.lineTo(50, 50);
            shape.graphics.endFill();
            shape.x = 400;
            shape.y = 500;
            self.addChild(shape);
        }
        return shape;
    };
    TestEgretApi.prototype.drawMask = function () {
        var shp = this.drawBorderProgress();
    };
    TestEgretApi.prototype.drawBorderProgress = function () {
        var self = this;
        var container = new egret.DisplayObjectContainer();
        var w = 100;
        var h = 100;
        var r = Math.max(w, h) / 2 * 1.5;
        var bitmap = new egret.Bitmap(RES.getRes("border_png"));
        container.addChild(bitmap);
        bitmap.width = w;
        bitmap.height = h;
        var shape = new egret.Shape();
        shape.x = bitmap.width / 2;
        shape.y = bitmap.height / 2;
        container.addChild(shape);
        bitmap.mask = shape; // 核心！！！
        var angle = 0;
        egret.startTick(function (timeStamp) {
            angle += 1;
            changeGraphics(angle);
            angle = angle % 360;
            return true;
        }, this);
        function changeGraphics(angle) {
            shape.graphics.clear();
            shape.graphics.beginFill(0x00ffff, 1);
            shape.graphics.lineTo(r, 0);
            shape.graphics.drawArc(0, 0, r, 0, angle * Math.PI / 180, true);
            shape.graphics.lineTo(0, 0);
            shape.graphics.endFill();
        }
        container.x = 450;
        container.y = 650;
        self.addChild(container);
        return container;
    };
    TestEgretApi.prototype.drawMosaic = function () {
        var shp = new egret.Shape();
        shp.graphics.beginFill(0x0000ff);
        shp.graphics.drawRect(0, 0, 50, 50);
        shp.graphics.endFill();
        shp.graphics.beginFill(0x0000ff);
        shp.graphics.drawRect(50, 50, 50, 50);
        shp.graphics.endFill();
        shp.graphics.beginFill(0xff0000);
        shp.graphics.drawRect(50, 0, 50, 50);
        shp.graphics.endFill();
        shp.graphics.beginFill(0xff0000);
        shp.graphics.drawRect(0, 50, 50, 50);
        shp.graphics.endFill();
        shp.x = 20;
        shp.y = 950;
        this.addChild(shp);
    };
    TestEgretApi.prototype.testTimer = function () {
        this.timer = new egret.Timer(3000, 3);
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
        this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timerCompFunc, this);
        this.timer.start();
    };
    TestEgretApi.prototype.timerFunc = function () {
        this.count++;
        console.log("计时中。。。", this.count);
        if (this.count >= 2) {
            this.timer.stop();
            console.log("计时提前终止。");
        }
    };
    TestEgretApi.prototype.timerCompFunc = function () {
        console.log("计时结束！！");
    };
    TestEgretApi.prototype.testTicker = function () {
        this.star = new egret.Bitmap(RES.getRes("star_png"));
        this.addChild(this.star);
        this.time = egret.getTimer();
        egret.startTick(this.moveStar, this);
    };
    TestEgretApi.prototype.moveStar = function (timeStamp) {
        var now = timeStamp;
        var time = this.time;
        var pass = now - time;
        console.log("moveStar: ", (1000 / pass).toFixed(5));
        this.star.x += this.speed * pass;
        if (this.star.x > 300) {
            egret.stopTick(this.moveStar, this);
        }
        this.time = now;
        return false;
    };
    return TestEgretApi;
}(egret.DisplayObjectContainer));
__reflect(TestEgretApi.prototype, "TestEgretApi");
//# sourceMappingURL=testEgretApi.js.map