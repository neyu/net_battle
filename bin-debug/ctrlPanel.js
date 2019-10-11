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
 * 操作输入收集面板
 * egret的点击检测是像素级，没有象素，点击是不生效的。
*/
var CtrlPanel = (function (_super) {
    __extends(CtrlPanel, _super);
    function CtrlPanel(sandTable) {
        var _this = _super.call(this) || this;
        _this._w = 0;
        _this._h = 0;
        _this.originX = 0;
        _this.originY = 0;
        _this.bgRadius = 80;
        _this.ballRadius = 10;
        _this._sandTb = sandTable;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    CtrlPanel.prototype.onAddToStage = function (evt) {
        this._w = this.stage.stageWidth;
        this._h = this.stage.stageHeight;
        this.graphics.beginFill(0x00ff00, 0.2);
        this.graphics.drawRect(0, 0, this.stage.stageWidth, this.stage.stageHeight);
        this.graphics.endFill();
        this.drawCtrlBall();
        this.touchEnabled = true;
        // 注册事件
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
        this.addEventListener(egret.TouchEvent.TOUCH_CANCEL, this.onTouchCancel, this);
        this.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
        this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
    };
    CtrlPanel.prototype.drawCtrlBall = function () {
        this.stickNode = new egret.DisplayObjectContainer();
        this.addChild(this.stickNode);
        this.bgBall = new egret.Shape();
        this.bgBall.graphics.beginFill(0x0);
        this.bgBall.graphics.lineStyle(3, 0xffff00);
        this.bgBall.graphics.drawCircle(0, 0, this.bgRadius);
        this.bgBall.graphics.endFill();
        this.stickNode.addChild(this.bgBall);
        this.bgBall.anchorOffsetX = 0.5;
        this.bgBall.anchorOffsetY = 0.5;
        this.bgBall.alpha = 0.1;
        this.origBall = new egret.Shape();
        this.origBall.graphics.beginFill(0x0);
        this.origBall.graphics.lineStyle(1, 0xff0000);
        this.origBall.graphics.drawCircle(0, 0, this.ballRadius);
        this.origBall.graphics.endFill();
        this.stickNode.addChild(this.origBall);
        this.origBall.anchorOffsetX = 0.5;
        this.origBall.anchorOffsetY = 0.5;
        this.drawBall = new egret.Shape();
        // this.drawBall.graphics.beginFill(0x0)
        this.drawBall.graphics.lineStyle(1, 0x0);
        this.drawBall.graphics.drawCircle(0, 0, this.ballRadius);
        // this.drawBall.graphics.endFill()
        this.stickNode.addChild(this.drawBall);
        this.drawBall.anchorOffsetX = 0.5;
        this.drawBall.anchorOffsetY = 0.5;
        this.resetPosition();
    };
    CtrlPanel.prototype.resetPosition = function () {
        this.stickNode.x = this._w / 2;
        this.stickNode.y = this._h - this.bgRadius;
        this.drawBall.x = 0;
        this.drawBall.y = 0;
    };
    CtrlPanel.prototype.onTouchBegin = function (evt) {
        // console.log("onTouchBegin:", evt.target.width, evt.target.height, evt.type, evt.stageX, evt.stageY);
        this.stickNode.x = evt.stageX;
        this.stickNode.y = evt.stageY;
    };
    CtrlPanel.prototype.onTouchCancel = function (evt) {
        // console.log("onTouchCancel:", evt.target.width, evt.target.height, evt.type, evt.stageX, evt.stageY);
        this.resetPosition();
    };
    CtrlPanel.prototype.onTouchEnd = function (evt) {
        // console.log("onTouchEnd:", evt.target.width, evt.target.height, evt.type, evt.stageX, evt.stageY);
        var drawX = evt.stageX - this.stickNode.x;
        var drawY = evt.stageY - this.stickNode.y;
        this._sandTb.Shoot(drawX, drawY);
        this.resetPosition();
    };
    CtrlPanel.prototype.onTouchMove = function (evt) {
        // console.log("onTouchMove:", evt.target.width, evt.target.height, evt.type, evt.stageX, evt.stageY);
        var drawX = evt.stageX - this.stickNode.x;
        var drawY = evt.stageY - this.stickNode.y;
        var drawOffset = Math.sqrt(drawX * drawX + drawY * drawY);
        if (drawOffset > this.bgRadius) {
            this.drawBall.x = drawX * this.bgRadius / drawOffset;
            this.drawBall.y = drawY * this.bgRadius / drawOffset;
        }
        else {
            this.drawBall.x = drawX;
            this.drawBall.y = drawY;
        }
    };
    return CtrlPanel;
}(egret.Sprite));
__reflect(CtrlPanel.prototype, "CtrlPanel");
//# sourceMappingURL=ctrlPanel.js.map