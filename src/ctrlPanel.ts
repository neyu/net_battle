/**
 * 操作输入收集面板
 * egret的点击检测是像素级，没有象素，点击是不生效的。
*/
class CtrlPanel extends egret.Sprite {
    private _sandTb: SandTable;
    private _w: number = 0;
    private _h: number = 0;

    private originX: number = 0;
    private originY: number = 0;
    private bgRadius: number = 80;
    private ballRadius: number = 10;

    private stickNode: egret.DisplayObjectContainer;
    private bgBall: egret.Shape;
    private origBall: egret.Shape;
    private drawBall: egret.Shape;

    public constructor(sandTable: SandTable) {
        super()

        this._sandTb = sandTable;
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this)
    }
    private onAddToStage(evt: egret.Event) {
        this._w = this.stage.stageWidth;
        this._h = this.stage.stageHeight;

        this.graphics.beginFill(0x00ff00, 0.2)
        this.graphics.drawRect(0, 0, this.stage.stageWidth, this.stage.stageHeight);
        this.graphics.endFill()

        this.drawCtrlBall();

        this.touchEnabled = true;
        // 注册事件
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
        this.addEventListener(egret.TouchEvent.TOUCH_CANCEL, this.onTouchCancel, this);
        this.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
        this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
    }

    private drawCtrlBall() {
        this.stickNode = new egret.DisplayObjectContainer();
        this.addChild(this.stickNode);

        this.bgBall = new egret.Shape()
        this.bgBall.graphics.beginFill(0x0)
        this.bgBall.graphics.lineStyle(3, 0xffff00)
        this.bgBall.graphics.drawCircle(0, 0, this.bgRadius)
        this.bgBall.graphics.endFill()
        this.stickNode.addChild(this.bgBall)
        this.bgBall.anchorOffsetX = 0.5
        this.bgBall.anchorOffsetY = 0.5
        this.bgBall.alpha = 0.1

        this.origBall = new egret.Shape()
        this.origBall.graphics.beginFill(0x0)
        this.origBall.graphics.lineStyle(1, 0xff0000)
        this.origBall.graphics.drawCircle(0, 0, this.ballRadius)
        this.origBall.graphics.endFill()
        this.stickNode.addChild(this.origBall)
        this.origBall.anchorOffsetX = 0.5
        this.origBall.anchorOffsetY = 0.5
        
        this.drawBall = new egret.Shape()
        // this.drawBall.graphics.beginFill(0x0)
        this.drawBall.graphics.lineStyle(1, 0x0)
        this.drawBall.graphics.drawCircle(0, 0, this.ballRadius)
        // this.drawBall.graphics.endFill()
        this.stickNode.addChild(this.drawBall)
        this.drawBall.anchorOffsetX = 0.5
        this.drawBall.anchorOffsetY = 0.5

        this.resetPosition()
    }
    private resetPosition() {
        this.stickNode.x = this._w / 2;
        this.stickNode.y = this._h - this.bgRadius;
        this.drawBall.x = 0;
        this.drawBall.y = 0;
    }

    private onTouchBegin(evt:egret.TouchEvent)
    {
        // console.log("onTouchBegin:", evt.target.width, evt.target.height, evt.type, evt.stageX, evt.stageY);
        this.stickNode.x = evt.stageX;
        this.stickNode.y = evt.stageY;
    }
    private onTouchCancel(evt:egret.TouchEvent)
    {
        // console.log("onTouchCancel:", evt.target.width, evt.target.height, evt.type, evt.stageX, evt.stageY);
        this.resetPosition();
    }
    private onTouchEnd(evt:egret.TouchEvent)
    {
        // console.log("onTouchEnd:", evt.target.width, evt.target.height, evt.type, evt.stageX, evt.stageY);
        let drawX = evt.stageX - this.stickNode.x;
        let drawY = evt.stageY - this.stickNode.y;
        this._sandTb.Shoot(drawX, drawY);

        this.resetPosition();
    }
    private onTouchMove(evt: egret.TouchEvent) {
        // console.log("onTouchMove:", evt.target.width, evt.target.height, evt.type, evt.stageX, evt.stageY);
        let drawX = evt.stageX - this.stickNode.x;
        let drawY = evt.stageY - this.stickNode.y;
        let drawOffset = Math.sqrt(drawX * drawX + drawY * drawY)

        if (drawOffset > this.bgRadius) {
            this.drawBall.x = drawX * this.bgRadius / drawOffset
            this.drawBall.y = drawY * this.bgRadius / drawOffset
        } else {
            this.drawBall.x = drawX;
            this.drawBall.y = drawY;
        }
    }
}