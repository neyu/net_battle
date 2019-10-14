class TipMgr {
    private static _inst: TipMgr = null;
    private static _node: egret.DisplayObjectContainer = null;

    public static get inst(): TipMgr {
        if (TipMgr._inst == null) {
            TipMgr._inst = new TipMgr();
        }
        return TipMgr._inst;
    }
    public init(node:egret.DisplayObjectContainer) {
        TipMgr._node = node;
    }

    public static showTip(word:string) {
        let tip = new Tip(word);
        tip.x = this._node.stage.stageWidth / 2;
        tip.y = this._node.stage.stageHeight / 2;
        this._node.addChild(tip)
    }
}