/**
 * 测试egret基础Api
*/
class TestEgretApi extends egret.DisplayObjectContainer {
    private _w: number = 0;
    private _h: number = 0;

    constructor() {
        super()

        this.init();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    private init() {
        //
    }
    private onAddToStage() {
        console.log("SandTable stage w/h", this.stage.stageWidth, this.stage.stageHeight)
        this._w = this.stage.stageWidth;
        this._h = this.stage.stageHeight;

        this.drawShape()
        this.drawCircle()
        this.drawLine()
        this.drawCurve()
        this.drawArc()
        this.drawArc2()
        this.drawFan()
        this.drawArcProgress()
        this.drawFanProgress()
        this.drawMask()
        this.drawMosaic()

        // 定时器
        this.testTimer()
        this.testTicker()
    }

    private drawShape() {
        var shp:egret.Shape = new egret.Shape();
        shp.graphics.beginFill( 0xff0000, 1);
        shp.graphics.lineStyle(2, 0x00ff00);

        let shpW = 100;
        let shpH = 200;
        shp.graphics.drawRect(this._w/2-shpW/2, this._h/2-shpH/2, shpW, shpH);
        shp.graphics.endFill();
        this.addChild( shp );
    }

    private drawCircle() {
        var shp: egret.Shape = new egret.Shape();
        shp.graphics.beginFill(0xffff00, 0.75);
        shp.graphics.lineStyle(2, 0x00ff00);

        let radius = 75;
        shp.graphics.drawCircle(this._w/2, this._h/2-150, radius);
        shp.graphics.endFill()

        this.addChild(shp)
    }

    private drawLine() {
        var shp: egret.Shape = new egret.Shape();
        shp.graphics.lineStyle(3, 0x00ffff);
        shp.graphics.moveTo(50, 250)
        shp.graphics.lineTo(200, 700)
        shp.graphics.lineStyle(3, 0x0000ff);
        shp.graphics.lineTo(400, 700)
        shp.graphics.lineStyle(3, 0xff00ff);
        shp.graphics.lineTo(400, 900)

        this.addChild(shp)
    }
    private drawCurve() {
        var shp: egret.Shape = new egret.Shape();
        shp.graphics.lineStyle(3, 0x00ff00);
        shp.graphics.moveTo(50, 700)
        // shp.graphics.curveTo(150, 900, 450, 800)
        shp.graphics.cubicCurveTo(150, 1000, 250, 600, 450, 900)
        this.addChild(shp)
    }
    private drawArc() {
        var shp: egret.Shape = new egret.Shape();
        shp.graphics.lineStyle(3, 0x000);
        shp.graphics.beginFill(0xff0000);
        shp.graphics.drawArc(250, 900, 50, 0, Math.PI/2, true)
        shp.graphics.endFill();

        this.addChild(shp)
    }
    private drawArc2() {
        var shp: egret.Shape = new egret.Shape();
        shp.graphics.lineStyle(3, 0x00ffff);
        shp.graphics.drawArc(250, 900, 80, Math.PI, Math.PI*3/2, true)
        this.addChild(shp)
    }
    private drawFan() {
        var shp: egret.Shape = new egret.Shape();
        shp.graphics.lineStyle(3, 0x00ffff);
        shp.graphics.beginFill(0xff00ff)

        shp.graphics.moveTo(450, 950)
        shp.graphics.lineTo(500, 950)
        shp.graphics.drawArc(450, 950, 50, 0, Math.PI*3/2, false)
        shp.graphics.lineTo(450, 950)
        shp.graphics.endFill()
        
        this.addChild(shp)
    }
    private drawArcProgress() {
        var shp: egret.Shape = this.getArcProgress();
        // shp.x = 400;
        // shp.y = 300;
        // this.addChild(shp);
    }
    private getArcProgress(): egret.Shape {
        var self = this;

        var angle:number = 0;
        egret.startTick(function (timeStamp:number):boolean {
            angle += 1;
            changeGraphics(angle);
            angle = angle % 360;
            return true;
        }, this);

        var color: number = 0x0;
        var shape: egret.Shape = null;
        function changeGraphics(angle) {
            shape = new egret.Shape();
            // shape.graphics.clear();
            color += 0x111111
            shape.graphics.lineStyle(2, color, 1);
            shape.graphics.drawArc(50, 50, 50, 0, angle * Math.PI / 180, false);
            shape.graphics.endFill();

            shape.x = 400;
            shape.y = 300;
            self.addChild(shape);
        }
        return shape;
    }
    private drawFanProgress() {
        var shp: egret.Shape = this.getSectorProgress()
        //
    }
    private getSectorProgress():egret.Shape {
        var self = this;

        var angle:number = 0;
        egret.startTick(function (timeStamp:number):boolean {
            angle += 1;
            changeGraphics(angle);
            angle = angle % 360;
            return true;
        }, this);

        var color: number = 0x0;
        var shape: egret.Shape = null;
        function changeGraphics(angle) {
            shape = new egret.Shape();
            // shape.graphics.clear();
            
            color += 0x111111
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
    }
    private drawMask() {
        var shp: egret.DisplayObjectContainer = this.drawBorderProgress()
    }
    private drawBorderProgress():egret.DisplayObjectContainer {
        var self = this;

        var container: egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        var w:number = 100;
        var h:number = 100;
        var r:number = Math.max(w, h) / 2 * 1.5;

        var bitmap = new egret.Bitmap(RES.getRes("border_png"));
        container.addChild(bitmap);
        bitmap.width = w;
        bitmap.height = h;

        var shape:egret.Shape = new egret.Shape();
        shape.x = bitmap.width / 2;
        shape.y = bitmap.height / 2;
        container.addChild(shape);

        bitmap.mask = shape; // 核心！！！

        var angle = 0;
        egret.startTick(function (timeStamp:number):boolean {
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
        self.addChild(container)
        return container
    }
    private drawMosaic() {
        var shp: egret.Shape = new egret.Shape()

        shp.graphics.beginFill( 0x0000ff );
        shp.graphics.drawRect( 0, 0, 50,50 );
        shp.graphics.endFill();

        shp.graphics.beginFill( 0x0000ff );
        shp.graphics.drawRect( 50, 50, 50, 50);
        shp.graphics.endFill();

        shp.graphics.beginFill( 0xff0000 );
        shp.graphics.drawRect( 50, 0, 50,50 );
        shp.graphics.endFill();

        shp.graphics.beginFill( 0xff0000 );
        shp.graphics.drawRect( 0, 50, 50,50 );
        shp.graphics.endFill();

        shp.x = 20;
        shp.y = 950;
        this.addChild(shp);
    }

    private timer: egret.Timer = null;
    private testTimer() {
        this.timer = new egret.Timer(3000, 3);
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this)
        this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timerCompFunc, this);

        this.timer.start();
    }
    private count: number = 0;
    private timerFunc() {
        this.count++;
        console.log("计时中。。。", this.count);

        if (this.count >=2 ) {
            this.timer.stop();
            console.log("计时提前终止。")
        }
    }
    private timerCompFunc() {
        console.log("计时结束！！")
    }

    private speed: number = 0.05;
    private time: number = 0;
    private star: egret.Bitmap = null;
    private testTicker() {
        this.star = new egret.Bitmap(RES.getRes("star_png"));
        this.addChild(this.star);

        this.time = egret.getTimer();
        egret.startTick(this.moveStar, this);
    }
    private moveStar(timeStamp: number): boolean {
        var now = timeStamp;
        var time = this.time;
        var pass = now - time;
        console.log("moveStar: ",(1000 / pass).toFixed(5));
        this.star.x += this.speed * pass;
        if(this.star.x > 300)  {
            egret.stopTick(this.moveStar,this);
        }
        this.time = now;
        return false;
    }
}