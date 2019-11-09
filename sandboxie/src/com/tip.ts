class Tip extends egret.DisplayObjectContainer {
    private _bg: egret.Shape = null;
    private _label: egret.TextField = null;
    private _content:string = "";
    private _w: number = 360;
    private _h: number = 32;

    constructor(word:string) {
        super()
        this._content = word;

        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event: egret.Event) {
        this.show();
    }

    public show() {
        this._bg = new egret.Shape();
        this._bg.graphics.lineStyle(1, 0x0)
        this._bg.graphics.beginFill(0xaaaaaa, 1)
        this._bg.graphics.drawRect(-this._w/2, -this._h/2, this._w, this._h);
        this._bg.graphics.endFill()
        this._bg.anchorOffsetX = 0.5;
        this._bg.anchorOffsetY = 0.5;
        this.addChild(this._bg);

        this._label = new egret.TextField();
        this.addChild(this._label);
        this._label.x = -this._w/2
        this._label.y = -this._h/2
        this._label.width = this._w;
        this._label.height = this._h;
        this._label.textAlign = egret.HorizontalAlign.CENTER 
        this._label.verticalAlign = egret.VerticalAlign.MIDDLE
        this._label.size = 24;
        this._label.textColor = 0xff0000;
        this._label.text = this._content;
        // this._label.anchorOffsetX = 0.5
        // this._label.anchorOffsetY = 0.5

        this.startMove()
    }

    private speed: number = 0.006;
    private time: number = 0;
    private moveOffset: number = 0;
    private startMove() {
        this.time = egret.getTimer();
        egret.startTick(this.move, this);
    }
    private move(timeStamp:number): boolean {
        var now = timeStamp;
        var time = this.time;
        var pass = now - time;

        let step = this.speed * pass * pass;
        this.y -= step;

        this.moveOffset += step;
        if (this.moveOffset > 300) {
            egret.stopTick(this.move, this);
            this.parent.removeChild(this);
            return false;
        }

        this.time = now;
        return false;
    }
}