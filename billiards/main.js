var AssetAdapter = function() {
		function t() {}
		var e = (__define, t),
			i = e.prototype;
		return i.getAsset = function(t, e, i) {
			function s(s) {
				e.call(i, s, t)
			}
			if (RES.hasRes(t)) {
				var n = RES.getRes(t);
				n ? s(n) : RES.getResAsync(t, s, this)
			} else RES.getResByUrl(t, s, this, RES.ResourceItem.TYPE_IMAGE)
		}, t
	}();
egret.registerClass(AssetAdapter, "AssetAdapter", ["eui.IAssetAdapter"]);
var GameData = function() {
		function t() {}
		var e = (__define, t);
		e.prototype;
		return t.isScoll = !1, t.myAccount = 0, t
	}();
egret.registerClass(GameData, "GameData");
var LoseUI = function(t) {
		function e() {
			t.call(this), this.skinName = "LoseUISkin"
		}
		__extends(e, t);
		var i = (__define, e),
			s = i.prototype;
		return s.createChildren = function() {
			t.prototype.createChildren.call(this), this.tuichuBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tuichuFunc, this), this.jixuBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.jixuFunc, this)
		}, s.playAction = function() {
			var t = RES.getRes("lose3"),
				e = RES.getRes("lose2"),
				i = RES.getRes("lose1"),
				s = new dragonBones.EgretFactory;
			s.addDragonBonesData(dragonBones.DataParser.parseDragonBonesData(t)), s.addTextureAtlas(new dragonBones.EgretTextureAtlas(i, e));
			var n = s.buildArmature("armatureName");
			this.addChild(n.display), n.display.x = 275, n.display.y = 290, dragonBones.WorldClock.clock.add(n), n.addEventListener(egret.Event.COMPLETE, function() {
				dragonBones.WorldClock.clock.remove(n)
			}, this), n.animation.gotoAndPlay("zq_lose_01a", -1, -1, 1)
		}, s.tuichuFunc = function() {
			this.parent && this.parent.removeChild(this), TableUI.Instance().quitFunc()
		}, s.jixuFunc = function() {
			this.parent && this.parent.removeChild(this), TableUI.Instance().againFunc()
		}, e
	}(eui.Component);
egret.registerClass(LoseUI, "LoseUI");
var MyNet = function() {
		function t() {
			this.lastUpdateTick = egret.getTimer(), this.sleepTime = 0
		}
		var e = (__define, t),
			i = e.prototype;
		return t.i = function() {
			return this._instance || (this._instance = new t), this._instance
		}, i.connect = function(e, i, s) {
			this.clientNet && (this.clientNet.close(), this.clientNet = null), this.clientNet = new net.ClientNet(e, i, s), this.clientNet.onConnect = function() {
				t.i().onConnect && t.i().onConnect()
			}, this.clientNet.onClose = function() {
				t.i().onClose && (t.i().onClose(), t.i().clientNet = null)
			}, this.clientNet.connect()
		}, i.close = function() {
			this.clientNet && (this.clientNet.close(), this.clientNet = null)
		}, i.update = function() {
			if (this.clientNet && !this.clientNet.processOneInstantMsg()) {
				var t = egret.getTimer();
				t - this.lastUpdateTick >= this.sleepTime && (this.lastUpdateTick = t, this.clientNet && this.clientNet.processOneMsg())
			}
		}, i.sleep = function(t) {
			this.lastUpdateTick = egret.getTimer(), this.sleepTime = t
		}, i.wakeup = function() {
			this.sleepTime = 0
		}, i.registerMsgHandler = function(t, e, i) {
			this.clientNet && this.clientNet.registerMsgHandler(t, e, i)
		}, i.unregisterMsgHandler = function(t, e, i) {
			this.clientNet && this.clientNet.unregisterMsgHandler(t, e, i)
		}, i.sendMsg = function(t) {
			this.clientNet && this.clientNet.sendMsg(t)
		}, i.clearMsg = function() {
			this.clientNet && (this.clientNet.clearMsgQueue(), this.clientNet.clearInstantMsgQueue())
		}, t
	}();
egret.registerClass(MyNet, "MyNet");
var net;
!
function(t) {
	var e = function() {
			function e(t, e, i) {
				this.msgHandlers = {}, this.msgQueue = [], this.instantMsgQueue = [], this.webSocket = new egret.WebSocket, this.recvBuf = new egret.ByteArray, this.remoteAddress = t, this.remotePort = e, this.timeOut = i, this.webSocket.type = egret.WebSocket.TYPE_BINARY, this.webSocket.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this), this.webSocket.addEventListener(egret.Event.CLOSE, this.onSocketClose, this), this.webSocket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onRecevieMessage, this)
			}
			var i = (__define, e),
				s = i.prototype;
			return s.isInstantMsg = function(t) {}, s.connect = function() {
				this.webSocket.connect(this.remoteAddress, this.remotePort)
			}, s.close = function() {
				this.webSocket.close()
			}, s.clearMsgQueue = function() {
				this.msgQueue = []
			}, s.clearInstantMsgQueue = function() {
				this.instantMsgQueue = []
			}, s.processOneInstantMsg = function() {
				if (0 == this.instantMsgQueue.length) return !1;
				var t = this.instantMsgQueue.shift(),
					e = this.msgHandlers[t._msgid];
				if (null != e) for (var i = 0; i < e.length; i++) {
					var s = this.msgHandlers[t._msgid][i].handler,
						n = this.msgHandlers[t._msgid][i].thisobject;
					s.apply(n, [t])
				}
				return !0
			}, s.processOneMsg = function() {
				if (0 != this.msgQueue.length) {
					var t = this.msgQueue.shift(),
						e = this.msgHandlers[t._msgid];
					if (null != e) for (var i = 0; i < e.length; i++) {
						var s = this.msgHandlers[t._msgid][i].handler,
							n = this.msgHandlers[t._msgid][i].thisobject;
						s.apply(n, [t])
					}
				}
			}, s.registerMsgHandler = function(t, e, i) {
				var s = this.msgHandlers[t];
				null == s && (this.msgHandlers[t] = [], s = this.msgHandlers[t]), s.push({
					thisobject: i,
					handler: e
				})
			}, s.unregisterMsgHandler = function(t, e, i) {
				var s = this.msgHandlers[t];
				if (null != s) {
					for (var n = -1, r = 0; r < s.length; r++) if (s[r].thisobject == i && s[r].handler == e) {
						n = r;
						break
					}
					n >= 0 && s.splice(n, 1)
				}
			}, s.sendMsg = function(e) {
				var i = new egret.ByteArray;
				t.encodeMsg(e, i);
				var s = new egret.ByteArray;
				s.writeByte(255 & i.length), s.writeByte(i.length >> 8 & 255), s.writeByte(255 & e._msgid), s.writeByte(e._msgid >> 8 & 255), s.writeInt(0), s.writeBytes(i, 0, i.length), this.webSocket.writeBytes(s, 0, s.length);
				var n = e._msgname;
				delete e._msgid, delete e._msgname, delete e._fields, console.debug(n, e)
			}, s.onSocketOpen = function() {
				console.debug("onSocketOpen"), this.onConnect && this.onConnect()
			}, s.onSocketClose = function() {
				console.debug("onSocketClose"), this.onClose && this.onClose()
			}, s.onRecevieMessage = function(e) {
				for (this.webSocket.readBytes(this.recvBuf, 0, 0), this.recvBuf.position = 0; this.recvBuf.bytesAvailable >= 8;) {
					var i = this.recvBuf.position,
						s = this.recvBuf.readUnsignedByte() + (this.recvBuf.readUnsignedByte() << 8),
						n = this.recvBuf.readUnsignedByte() + (this.recvBuf.readUnsignedByte() << 8);
					this.recvBuf.readUnsignedInt();
					if (this.recvBuf.bytesAvailable < s) {
						this.recvBuf.position = i;
						break
					}
					var r = t.SERVER_MSGS[n][1]({});
					r.errorCode = t.decodeNumber(this.recvBuf), r.errorMsg = t.decodeString(this.recvBuf), t.decodeMsg(r, this.recvBuf), this.isInstantMsg(n) ? this.instantMsgQueue.push(r) : this.msgQueue.push(r), console.debug(t.SERVER_MSGS[n][0].replace("_", ""), r), this.recvBuf.position = i + s + 8
				}
				var a = new egret.ByteArray;
				this.recvBuf.readBytes(a, 0, 0), this.recvBuf = a
			}, e
		}();
	t.ClientNet = e, egret.registerClass(e, "net.ClientNet")
}(net || (net = {}));
var net;
!
function(t) {
	var e = function() {
			function t() {}
			var e = (__define, t);
			e.prototype;
			return t.CM_Login = 201, t.CM_PlayerEnter = 203, t.CM_PlayerLeave = 204, t.CM_Cue = 205, t.CM_Hit = 206, t.CM_HitPoint = 207, t.CM_HitAngle = 208, t.CM_TableState = 209, t.CM_Chat = 210, t.CM_PutBall = 211, t.CM_Again = 212, t.SM_Login = 300, t.SM_PlayerEnter = 311, t.SM_PlayerLeave = 312, t.SM_GameStart = 313, t.SM_GameEnd = 318, t.SM_Cue = 322, t.SM_Hit = 323, t.SM_HitPoint = 324, t.SM_HitAngle = 325, t.SM_TableState = 326, t.SM_Chat = 327, t.SM_Color = 328, t.SM_PutBall = 329, t.SM_TOPutBall = 330, t.SM_TOHit = 331, t
		}();
	t.Messages = e, egret.registerClass(e, "net.Messages")
}(net || (net = {}));
var net;
!
function(t) {
	function e(t) {
		return t._fields = [
			["account", "string"],
			["name", "string"],
			["head", "string"],
			["sex", "int"],
			["lastAction", "int"],
			["chair", "int"],
			["leftChip", "int"],
			["isPlaying", "int"]
		], t._msgid = 0, t._msgname = "MFPlayerState", t
	}
	function i(t) {
		return t._fields = [
			["x", "string"],
			["y", "string"]
		], t._msgid = 0, t._msgname = "MFPoint", t
	}
	function s(t) {
		return t._fields = [
			["num", "int"],
			["point", i]
		], t._msgid = 0, t._msgname = "MFBall", t
	}
	function n(e) {
		return e._fields = [
			["account", "string"],
			["passwd", "string"]
		], e._msgid = t.Messages.CM_Login, e._msgname = "CMLogin", e
	}
	function r(e) {
		return e._fields = [
			["tableId", "string"]
		], e._msgid = t.Messages.CM_PlayerEnter, e._msgname = "CMPlayerEnter", e
	}
	function a(e) {
		return e._fields = [], e._msgid = t.Messages.CM_PlayerLeave, e._msgname = "CMPlayerLeave", e
	}
	function h(e) {
		return e._fields = [
			["point", i],
			["angle", "string"]
		], e._msgid = t.Messages.CM_Cue, e._msgname = "CMCue", e
	}
	function o(e) {
		return e._fields = [
			["vx", "string"],
			["vy", "string"]
		], e._msgid = t.Messages.CM_Hit, e._msgname = "CMHit", e
	}
	function l(e) {
		return e._fields = [
			["point", i]
		], e._msgid = t.Messages.CM_HitPoint, e._msgname = "CMHitPoint", e
	}
	function g(e) {
		return e._fields = [
			["point", i]
		], e._msgid = t.Messages.CM_HitAngle, e._msgname = "CMHitAngle", e
	}
	function d(e) {
		return e._fields = [
			["table", s, "[]"],
			["goal", "int", "[]"],
			["firstCollision", "int"],
			["chair", "int"]
		], e._msgid = t.Messages.CM_TableState, e._msgname = "CMTableState", e
	}
	function u(e) {
		return e._fields = [
			["info", "string"]
		], e._msgid = t.Messages.CM_Chat, e._msgname = "CMChat", e
	}
	function c(e) {
		return e._fields = [
			["ball", i]
		], e._msgid = t.Messages.CM_PutBall, e._msgname = "CMPutBall", e
	}
	function m(e) {
		return e._fields = [
			["isAgain", "int"]
		], e._msgid = t.Messages.CM_Again, e._msgname = "CMAgain", e
	}
	function v(i) {
		return i._fields = [
			["code", "int"],
			["msg", "string"],
			["playerState", e]
		], i._msgid = t.Messages.SM_Login, i._msgname = "SMLogin", i
	}
	function p(i) {
		return i._fields = [
			["code", "int"],
			["mode", "int"],
			["tableId", "string"],
			["playerState", e]
		], i._msgid = t.Messages.SM_PlayerEnter, i._msgname = "SMPlayerEnter", i
	}
	function M(e) {
		return e._fields = [
			["code", "int"],
			["reason", "string"],
			["chair", "int"]
		], e._msgid = t.Messages.SM_PlayerLeave, e._msgname = "SMPlayerLeave", e
	}
	function x(e) {
		return e._fields = [
			["nextChair", "int"]
		], e._msgid = t.Messages.SM_GameStart, e._msgname = "SMGameStart", e
	}
	function y(e) {
		return e._fields = [
			["code", "int"],
			["winChair", "int"]
		], e._msgid = t.Messages.SM_GameEnd, e._msgname = "SMGameEnd", e
	}
	function f(e) {
		return e._fields = [
			["point", i],
			["angle", "string"]
		], e._msgid = t.Messages.SM_Cue, e._msgname = "SMCue", e
	}
	function _(e) {
		return e._fields = [
			["vx", "string"],
			["vy", "string"]
		], e._msgid = t.Messages.SM_Hit, e._msgname = "SMHit", e
	}
	function b(e) {
		return e._fields = [
			["point", i]
		], e._msgid = t.Messages.SM_HitPoint, e._msgname = "SMHitPoint", e
	}
	function C(e) {
		return e._fields = [
			["point", i]
		], e._msgid = t.Messages.SM_HitAngle, e._msgname = "SMHitAngle", e
	}
	function A(e) {
		return e._fields = [
			["code", "int"],
			["msg", "string"],
			["nextChair", "int"],
			["combo", "int"]
		], e._msgid = t.Messages.SM_TableState, e._msgname = "SMTableState", e
	}
	function S(e) {
		return e._fields = [
			["info", "string"],
			["chair", "int"]
		], e._msgid = t.Messages.SM_Chat, e._msgname = "SMChat", e
	}
	function E(e) {
		return e._fields = [
			["chair0Color", "int"],
			["chair1Color", "int"]
		], e._msgid = t.Messages.SM_Color, e._msgname = "SMColor", e
	}
	function T(e) {
		return e._fields = [
			["ball", i]
		], e._msgid = t.Messages.SM_PutBall, e._msgname = "SMPutBall", e
	}
	function B(e) {
		return e._fields = [
			["ball", i]
		], e._msgid = t.Messages.SM_TOPutBall, e._msgname = "SMTOPutBall", e
	}
	function I(e) {
		return e._fields = [
			["nextChair", "int"]
		], e._msgid = t.Messages.SM_TOHit, e._msgname = "SMTOHit", e
	}
	t.MFPlayerState = e, t.MFPoint = i, t.MFBall = s, t.CMLogin = n, t.CMPlayerEnter = r, t.CMPlayerLeave = a, t.CMCue = h, t.CMHit = o, t.CMHitPoint = l, t.CMHitAngle = g, t.CMTableState = d, t.CMChat = u, t.CMPutBall = c, t.CMAgain = m, t.SMLogin = v, t.SMPlayerEnter = p, t.SMPlayerLeave = M, t.SMGameStart = x, t.SMGameEnd = y, t.SMCue = f, t.SMHit = _, t.SMHitPoint = b, t.SMHitAngle = C, t.SMTableState = A, t.SMChat = S, t.SMColor = E, t.SMPutBall = T, t.SMTOPutBall = B, t.SMTOHit = I, t.CLIENT_MSGS = {
		201: ["CM_Login", n],
		203: ["CM_PlayerEnter", r],
		204: ["CM_PlayerLeave", a],
		205: ["CM_Cue", h],
		206: ["CM_Hit", o],
		207: ["CM_HitPoint", l],
		208: ["CM_HitAngle", g],
		209: ["CM_TableState", d],
		210: ["CM_Chat", u],
		211: ["CM_PutBall", c],
		212: ["CM_Again", m]
	}, t.SERVER_MSGS = {
		300: ["SM_Login", v],
		311: ["SM_PlayerEnter", p],
		312: ["SM_PlayerLeave", M],
		313: ["SM_GameStart", x],
		318: ["SM_GameEnd", y],
		322: ["SM_Cue", f],
		323: ["SM_Hit", _],
		324: ["SM_HitPoint", b],
		325: ["SM_HitAngle", C],
		326: ["SM_TableState", A],
		327: ["SM_Chat", S],
		328: ["SM_Color", E],
		329: ["SM_PutBall", T],
		330: ["SM_TOPutBall", B],
		331: ["SM_TOHit", I]
	}
}(net || (net = {}));
var net;
!
function(t) {
	function e(t) {
		t || console.log("assert failed!!!!")
	}
	function i(t) {
		var e = new egret.ByteArray;
		return e.writeUTFBytes(t), e.position = 0, e
	}
	function s(t) {
		return t.position = 0, t.readUTFBytes(t.length)
	}
	function n(t, e) {
		var i = 0 > e ? 128 : 0,
			s = 0 > e ? -e : e;
		if (0 == s) t.writeByte(0);
		else {
			for (var n = 0, r = s; r > 0;) r = Math.floor(r / 256), n++;
			for (t.writeByte(127 & n | i); s > 0;) t.writeByte(255 & s), s = Math.floor(s / 256)
		}
	}
	function r(t, e) {
		var s = i(e);
		n(t, s.length), t.writeBytes(s)
	}
	function a(t) {
		if (t.bytesAvailable <= 0) return 0;
		var e = t.readUnsignedByte(),
			i = (128 & e) > 0,
			s = 127 & e,
			n = 0;
		if (0 == s) n = 0;
		else for (var r = 0; s > r; r++) n += Number(t.readUnsignedByte()) * Math.pow(2, 8 * r);
		return n = i ? -n : n
	}
	function h(t) {
		if (t.bytesAvailable <= 0) return "";
		var e = a(t),
			i = new egret.ByteArray;
		if (e > 0) {
			t.readBytes(i, 0, e);
			var n = s(i);
			return n
		}
		return ""
	}
	function o(t, e) {
		for (var i = 0; i < t._fields.length; i++) {
			var s = t._fields[i][0],
				a = t._fields[i][1];
			if (t._fields[i].length > 2) {
				n(e, t[s].length);
				for (var h = 0; h < t[s].length; h++) switch (a) {
				case "int":
				case "uint":
					n(e, t[s][h]);
					break;
				case "string":
					r(e, t[s][h]);
					break;
				default:
					o(t[s][h], e)
				}
			} else switch (a) {
			case "int":
			case "uint":
				n(e, t[s]);
				break;
			case "string":
				r(e, t[s]);
				break;
			default:
				o(t[s], e)
			}
		}
	}
	function l(t, e) {
		for (var i = 0; i < t._fields.length; i++) {
			var s = t._fields[i][0],
				n = t._fields[i][1];
			if (t._fields[i].length > 2) {
				t[s] = [];
				for (var r = a(e), o = 0; r > o; o++) switch (n) {
				case "int":
				case "uint":
					t[s][o] = a(e);
					break;
				case "string":
					t[s][o] = h(e);
					break;
				default:
					t[s][o] = n({}), l(t[s][o], e)
				}
			} else switch (n) {
			case "int":
			case "uint":
				t[s] = a(e);
				break;
			case "string":
				t[s] = h(e);
				break;
			default:
				t[s] = n({}), l(t[s], e)
			}
		}
	}
	t.Assert = e, t.stringToByteArray = i, t.byteArrayToString = s, t.encodeNumber = n, t.encodeString = r, t.decodeNumber = a, t.decodeString = h, t.encodeMsg = o, t.decodeMsg = l
}(net || (net = {}));
var NewBall = function() {
		function t(t) {
			this.radius = 17, this.vx = 0, this.vy = 0, this.idx = 0, this.nextX = 0, this.nextY = 0, this.lastX = 0, this.lastY = 0, this.name = "", this.isJindong = -1, this.moc = .9997, this.degree = 0, this.idx = t, create3DBall(t)
		}
		var e = (__define, t),
			i = e.prototype;
		return i.startRoll = function() {
			this.vx = this.vx * this.moc, this.vy = this.vy * this.moc, Math.abs(this.vx) < .04 && Math.abs(this.vy) < .04 && (this.moc -= 1e-6), Math.abs(this.vx) < .002 && Math.abs(this.vy) < .002 && (this.vx = 0, this.vy = 0)
		}, t
	}();
egret.registerClass(NewBall, "NewBall");
var PromptWord = function(t) {
		function e() {
			t.call(this), this._str = "", this._time = null, this.skinName = "PromptWordUISkin"
		}
		__extends(e, t);
		var i = (__define, e),
			s = i.prototype;
		return s.setSour = function(t) {
			this._str != t && (this._str = t, this.word.source = t), this.dingshi()
		}, s.dingshi = function() {
			this._time && egret.clearTimeout(this._time), this._time = egret.setTimeout(this.removeThis, this, 2300)
		}, s.removeThis = function() {
			this._time = null, this.parent && this.parent.removeChild(this)
		}, e
	}(eui.Component);
egret.registerClass(PromptWord, "PromptWord");
var TableUI = function(t) {
		function e() {
			t.call(this), this.ballArr = [], this.bounce = -.7, this.tableX = 0, this.tableY = 0, this.tableW = 0, this.tableH = 0, this.curBall = null, this.ganLen = 581, this.angleSpeed = 0, this.angleNum = 0, this.otherX = 0, this.otherY = 0, this.posArr = [], this.holeR = 28, this.centerX = 0, this.centerY = 0, this.ballImgArr = [], this.downStart = 744, this.downOver = 820, this._r = 0, this.removeBallArr = [], this.firstCollision = 0, this.isMove = !1, this.curVx = 0, this.curVy = 0, this.isBegin = !1, this.huadongAngle = 0, this["long"] = 0, this.moveTime = 0, this.whiteBall = null, this.xIcon = null, this.tipsUI = new TipsUI, this.isBaiqiu = 0, this.isOwnGame = !1, this.curActionNum = 0, this.myChairId = -1, this.otherChairId = -1, this.isLianxi = 0, this.myBrowser = "", this.myColor = -1, this.lightArr = [], this.curTimerNum = 0, this.isLoading = 0, this.isKsBtn = !1, this.isCanClose = !1, this.isLosePrompt = !1, this.isCanMove = !1, this.isTOHit = !1, this.isKsPlay = !1, this.isClickLidu = !1, this.liduTime = 0, this.addNum = 2, this.skinName = "TableUISkin"
		}
		__extends(e, t);
		var i = (__define, e),
			s = i.prototype;
		return s.createChildren = function() {
			t.prototype.createChildren.call(this), this.tableX = this.tableBG.x, this.tableY = this.tableBG.y, this.tableW = this.tableBG.width, this.tableH = this.tableBG.height, this.smallGroup.visible = !1, this.bigGroup.visible = !1, this.leftGroupPos = {
				x: this.smallGroup.x,
				y: this.smallGroup.y
			}, this.rightGroupPos = {
				x: this.bigGroup.x,
				y: this.bigGroup.y
			}, this.leftLabel.visible = !1, this.rightLabel.visible = !1, this.leftTurn.visible = !1, this.rightTurn.visible = !1, this.ballImgArr = [this.ball1, this.ball2, this.ball3, this.ball4, this.ball5, this.ball6, this.ball7, null, this.ball9, this.ball10, this.ball11, this.ball12, this.ball13, this.ball14, this.ball15], this.ball8.alpha = .4, this.ball16.alpha = .4;
			for (var e = 0; e < this.ballImgArr.length; e++) this.ballImgArr[e] && (this.ballImgArr[e].alpha = .4);
			this.posArr = [{
				x1: this.tableX + 204,
				y1: this.tableY + 80,
				x2: this.tableX + 166,
				y2: this.tableY + 120,
				hx: this.tableX + 172,
				hy: this.tableY + 89
			}, {
				x1: this.tableX + 683,
				y1: this.tableY + 80,
				x2: this.tableX + 746,
				y2: this.tableY + 80,
				hx: this.tableX + 715,
				hy: this.tableY + 70
			}, {
				x1: this.tableX + 1226,
				y1: this.tableY + 80,
				x2: this.tableX + 1264,
				y2: this.tableY + 120,
				hx: this.tableX + 1257,
				hy: this.tableY + 89
			}, {
				x1: this.tableX + 166,
				y1: this.tableY + 596,
				x2: this.tableX + 204,
				y2: this.tableY + 636,
				hx: this.tableX + 172,
				hy: this.tableY + 628
			}, {
				x1: this.tableX + 683,
				y1: this.tableY + 636,
				x2: this.tableX + 746,
				y2: this.tableY + 636,
				hx: this.tableX + 715,
				hy: this.tableY + 647
			}, {
				x1: this.tableX + 1264,
				y1: this.tableY + 596,
				x2: this.tableX + 1226,
				y2: this.tableY + 636,
				hx: this.tableX + 1257,
				hy: this.tableY + 628
			}];
			var i = new egret.Rectangle(0, 0, this.chatGroup.width, this.chatGroup.height);
			this.chatGroup.mask = i, this.centerX = this.posArr[0].hx + .5 * (this.posArr[2].hx - this.posArr[0].hx), this.centerY = this.posArr[0].hy + (this.posArr[3].hy - this.posArr[0].hy) / 2, this.ganImg = new eui.Image("gan"), this.ganImg.anchorOffsetX = 12, this.ganImg.anchorOffsetY = 5, this.ganImg.visible = !1, this.addChild(this.ganImg);
			var s = this;
			this.lianxiImg = new eui.Image("lianxiBtn1"), this.lianxiImg.anchorOffsetX = 48, this.lianxiImg.x = this.centerX, this.lianxiImg.y = this.centerY + 170, s.addChild(this.lianxiImg), this.lianxiImg.name = "lianxi";
			var n = RES.getRes("ks3"),
				r = RES.getRes("ks2"),
				a = RES.getRes("ks1"),
				h = new dragonBones.EgretFactory;
			h.addDragonBonesData(dragonBones.DataParser.parseDragonBonesData(n)), h.addTextureAtlas(new dragonBones.EgretTextureAtlas(a, r)), this.ksDragon = h.buildArmature("armatureName"), this.ksDragon.display.name = "ks", s.addChild(this.ksDragon.display), this.isKsPlay = !0, this.ksDragon.display.x = s.centerX, this.ksDragon.display.y = s.centerY + 80, dragonBones.WorldClock.clock.add(this.ksDragon), this.ksDragon.addEventListener(egret.Event.COMPLETE, function() {
				s.isKsBtn = !0, s.isKsPlay = !1, s.ksDragon.display.touchEnabled = !0, s.ksDragon.display.addEventListener(egret.TouchEvent.TOUCH_TAP, s.startConnect, s), s.lianxiImg.addEventListener(egret.TouchEvent.TOUCH_TAP, s.lianxiFunc, s), console.log("11111")
			}, s), this.ksDragon.animation.gotoAndPlay("zq_ks_01a", -1, -1, 1);
			var o = RES.getRes("lianji3"),
				l = RES.getRes("lianji2"),
				g = RES.getRes("lianji1"),
				d = new dragonBones.EgretFactory;
			d.addDragonBonesData(dragonBones.DataParser.parseDragonBonesData(o)), d.addTextureAtlas(new dragonBones.EgretTextureAtlas(g, l)), this.lianjiDragon = d.buildArmature("armatureName"), this.lianjiDragon.display.x = s.centerX + 430, this.lianjiDragon.display.y = s.centerY, egret.Ticker.getInstance().register(function(t) {
				return dragonBones.WorldClock.clock.advanceTime(t / 1e3), !0
			}, this), document.addEventListener("mousemove", this.mouseMoveGan), this.setTimeNum(0), this.myBrowser = getBrowserType(), this.shp1 = new egret.Shape, this.addChild(this.shp1), this.shp1.alpha = .6, this.shp2 = new egret.Shape, this.addChild(this.shp2), this.shp2.alpha = .6, this.shp3 = new egret.Shape, this.addChild(this.shp3), this.shp3.alpha = .6, this.shp4 = new egret.Shape, this.addChild(this.shp4), this.shp4.alpha = .6, this["long"] = 175.7, this.liduLabel.text = "70/100";
			var i = new egret.Rectangle(251 - this["long"], 0, this["long"], 42);
			this.lidu.mask = i, this.lidu.touchEnabled = !1, this.promptWord = new PromptWord, this.promptWord.anchorOffsetX = 138, this.promptWord.x = this.centerX, this.promptWord.y = this.centerY - 230, this.soundganqiu = RES.getRes("ganqiu"), this.soundrudong = RES.getRes("rudong"), this.soundzhuangbian = RES.getRes("zhuangbian"), this.soundzhuangqiu = RES.getRes("zhuangqiu")
		}, s.SMColor = function(t) {
			var e = 0;
			0 == this.myChairId ? e = t.chair0Color : 1 == this.myChairId && (e = t.chair1Color), this.myColor = e, 0 == e ? (this.smallGroup.x = this.leftGroupPos.x, this.smallGroup.y = this.leftGroupPos.y, this.smallGroup.visible = !0, this.bigGroup.x = this.rightGroupPos.x, this.bigGroup.y = this.rightGroupPos.y, this.bigGroup.visible = !0) : 1 == e && (this.smallGroup.x = this.rightGroupPos.x, this.smallGroup.y = this.rightGroupPos.y, this.smallGroup.visible = !0, this.bigGroup.x = this.leftGroupPos.x, this.bigGroup.y = this.leftGroupPos.y, this.bigGroup.visible = !0), this.leftLabel.parent && this.removeChild(this.leftLabel), this.rightLabel.parent && this.removeChild(this.rightLabel)
		}, s.SMChat = function(t) {
			this.chatLabel.text = this.chatLabel.text + "\n" + t.info, this.chatLabel.bottom = 0
		}, s.sendFunc = function() {
			if (1 == this.isLianxi) {
				var t = "" + GameData.myAccount + ": " + this.chatText.text;
				MyNet.i().sendMsg(net.CMChat({
					info: t
				}))
			}
			this.chatText.text = ""
		}, s.downFunc = function(t) {
			return t.stageY < this.downStart ? void(this.downIcon.y = this.downStart) : t.stageY > this.downOver ? void(this.downIcon.y = this.downOver) : (this.downIcon.y = t.stageY, void(this.chatLabel.bottom = -(this.downIcon.y - this.downOver)))
		}, s.lianxiFunc = function() {
			var t = this.getChildByName("ks");
			t.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.startConnect, this), t.parent && this.removeChild(t), this.isKsBtn = !1;
			var e = this.getChildByName("lianxi");
			e.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.lianxiFunc, this), e.parent && this.removeChild(e), this.isLianxi = 2, this.isOwnGame = !0, this.ganImg0.visible = !1, this.ganImg1.visible = !0, this.isBaiqiu = 1;
			var i = new eui.Label;
			i.text = "等待游戏开始...", i.width = 1440, i.y = this.centerY, i.name = "dengdai", i.textAlign = egret.HorizontalAlign.CENTER, this.addChild(i), egret.setTimeout(this.startGame1, this, 100)
		}, s.startConnect = function() {
			this.isLianxi = 1;
			var t = this.getChildByName("ks");
			t.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.startConnect, this), t.parent && this.removeChild(t), this.isKsBtn = !1, this.isKsPlay = !1, dragonBones.WorldClock.clock.remove(this.ksDragon);
			var i = this.getChildByName("lianxi");
			i.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.lianxiFunc, this), i.parent && this.removeChild(i);
			var s = new eui.Label;
			s.text = "等待其他玩家...", s.width = 1440, s.y = this.centerY, s.name = "dengdai", s.textAlign = egret.HorizontalAlign.CENTER, this.addChild(s), this.msgTimer = new egret.Timer(200, 0), this.msgTimer.addEventListener(egret.TimerEvent.TIMER, MyNet.i().update, MyNet.i()), this.msgTimer.start(), MyNet.i().connect("192.166.0.60", 7786, 10);
			var n = this;
			MyNet.i().onConnect = function() {
				MyNet.i().wakeup(), MyNet.i().sendMsg(net.CMLogin({
					account: "",
					passwd: ""
				})), MyNet.i().registerMsgHandler(net.Messages.SM_Login, n.SMLogin, n)
			}, MyNet.i().onClose = function() {
				e.Instance().isCanClose ? e.Instance().isCanClose = !1 : alert("网络连接失败")
			}
		}, s.SMLogin = function(t) {
			MyNet.i().unregisterMsgHandler(net.Messages.SM_Login, this.SMLogin, this), GameData.myAccount = t.playerState.account, this.startGame()
		}, s.startGame = function() {
			MyNet.i().sendMsg(net.CMPlayerEnter({
				tableId: ""
			})), MyNet.i().registerMsgHandler(net.Messages.SM_PlayerEnter, this.PlayerEnter, this), MyNet.i().registerMsgHandler(net.Messages.SM_GameStart, this.SMGameStart, this), MyNet.i().registerMsgHandler(net.Messages.SM_Hit, this.SMHit, this), MyNet.i().registerMsgHandler(net.Messages.SM_Cue, this.SMCue, this), MyNet.i().registerMsgHandler(net.Messages.SM_HitPoint, this.SMHitPoint, this), MyNet.i().registerMsgHandler(net.Messages.SM_HitAngle, this.SMHitAngle, this), MyNet.i().registerMsgHandler(net.Messages.SM_TableState, this.SMTableState, this), MyNet.i().registerMsgHandler(net.Messages.SM_Chat, this.SMChat, this), MyNet.i().registerMsgHandler(net.Messages.SM_Color, this.SMColor, this), MyNet.i().registerMsgHandler(net.Messages.SM_GameEnd, this.SMGameEnd, this), MyNet.i().registerMsgHandler(net.Messages.SM_PutBall, this.SMPutBall, this), MyNet.i().registerMsgHandler(net.Messages.SM_TOPutBall, this.SMTOPutBall, this), MyNet.i().registerMsgHandler(net.Messages.SM_TOHit, this.SMTOHit, this)
		}, s.SMPutBall = function(t) {
			1 == this.isBaiqiu ? this.countdownFunc(!0, 15) : this.countdownFunc(!0, 25), this.isBaiqiu = 0, this.curBall.isJindong = -1, this.curBall.lastX = this.curBall.nextX = Number(t.ball.x), this.curBall.lastY = this.curBall.nextY = Number(t.ball.y), setBaiPos(t.ball.x, t.ball.y), refreshUI()
		}, s.SMGameEnd = function(t) {
			this.isLosePrompt ? this.idTO1 = egret.setTimeout(this.SMGameEnd1, this, 3e3, t) : this.SMGameEnd1(t)
		}, s.SMGameEnd1 = function(t) {
			if (this.isLosePrompt && (egret.clearTimeout(this.idTO1), this.isLosePrompt = !1), this.countdownFunc(!1), 1 != t.code) if (this.isOwnGame = !1, this.isBaiqiu = 0, this.ganImg.visible = !1, this.shp1.graphics.clear(), this.shp2.graphics.clear(), this.shp3.graphics.clear(), t.winChair == this.myChairId) {
				var e = new WinUI;
				e.x = this.centerX - 273, e.y = this.centerY - 234.5, this.addChild(e), e.playAction()
			} else {
				var i = new LoseUI;
				i.x = this.centerX - 273, i.y = this.centerY - 234.5, this.addChild(i), i.playAction()
			}
		}, s.SMCue = function(t) {
			this.ganImg.visible = !0, this.ganImg.rotation = Number(t.angle), this.ganImg.x = Number(t.point.x), this.ganImg.y = Number(t.point.y)
		}, s.SMHitPoint = function(t) {}, s.SMHitAngle = function(t) {}, s.SMTableState = function(t) {
			var e = -1;
			5 == t.code && (e = t.msg.charAt(t.msg.length - 1)), 6 == t.code && -1 != t.msg.indexOf("word1 or word2") && (e = t.msg.charAt(t.msg.length - 1)), -1 != e && (e == this.myChairId ? 0 == this.myColor ? this.ball8.alpha = 1 : 1 == this.myColor && (this.ball16.alpha = 1) : 1 == this.myColor ? this.ball8.alpha = 1 : 0 == this.myColor && (this.ball16.alpha = 1)), 3 == t.code && (this.isBaiqiu = 2, this.countdownFunc(!0, 15), this.ganImg.visible = !1), (2 == t.code || 4 == t.code) && this.countdownFunc(!0, 25);
			var i = "";
			if (this.isTOHit) i = "word3", this.isTOHit = !1;
			else if (-1 != t.msg.indexOf("word1 or word2")) {
				this.isLosePrompt = !0;
				var s = t.msg.charAt(t.msg.length - 1);
				i = this.myChairId == s ? "word2" : "word1"
			} else if ("word4 or word5" == t.msg) i = t.nextChair == this.myChairId ? "word5" : "word4";
			else if ("word6" == t.msg || "word11" == t.msg) i = t.msg;
			else if ("word7 or word8" == t.msg) i = t.nextChair == this.myChairId ? "word8" : "word7";
			else if ("word9" != t.msg && "word10" != t.msg || t.nextChair != this.myChairId) {
				if (-1 != t.msg.indexOf("word12")) {
					var s = t.msg.charAt(t.msg.length - 1);
					this.myChairId == s && (this.isLosePrompt = !0, i = "word12")
				}
			} else i = t.msg;
			if ("" != i && (this.promptWord.setSour(i), this.promptWord.parent || this.addChild(this.promptWord)), this.curActionNum = t.nextChair, t.nextChair == this.myChairId) {
				if (this.isOwnGame = !0, this.ganImg0.visible = !1, this.ganImg1.visible = !0, this.leftTurn.visible = !0, this.rightTurn.visible = !1, 0 == this.myColor) for (var n = 0; n < this.ballArr.length; n++) {
					var r = this.ballArr[n];
					if (r.idx >= 1 && r.idx <= 7) {
						var a = RES.getRes("light3"),
							h = RES.getRes("light2"),
							o = RES.getRes("light1"),
							l = new dragonBones.EgretFactory;
						l.addDragonBonesData(dragonBones.DataParser.parseDragonBonesData(a)), l.addTextureAtlas(new dragonBones.EgretTextureAtlas(o, h));
						var g = l.buildArmature("armatureName");
						this.addChild(g.display), g.display.x = r.nextX, g.display.y = r.nextY, dragonBones.WorldClock.clock.add(g), g.animation.gotoAndPlay("zq_guang_001a", -1, -1, 0), this.lightArr.push(g)
					}
				} else if (1 == this.myColor) for (var n = 0; n < this.ballArr.length; n++) {
					var r = this.ballArr[n];
					if (r.idx >= 9 && r.idx <= 15) {
						var a = RES.getRes("light3"),
							h = RES.getRes("light2"),
							o = RES.getRes("light1"),
							l = new dragonBones.EgretFactory;
						l.addDragonBonesData(dragonBones.DataParser.parseDragonBonesData(a)), l.addTextureAtlas(new dragonBones.EgretTextureAtlas(o, h));
						var g = l.buildArmature("armatureName");
						this.addChild(g.display), g.display.x = r.nextX, g.display.y = r.nextY, dragonBones.WorldClock.clock.add(g), g.animation.gotoAndPlay("zq_guang_001a", -1, -1, 0), this.lightArr.push(g)
					}
				}
			} else this.isOwnGame = !1, this.ganImg0.visible = !0, this.ganImg1.visible = !1, this.leftTurn.visible = !1, this.rightTurn.visible = !0;
			if (t.combo >= 2 && t.combo <= 7) {
				var d = this;
				this.lianjiDragon.display.parent || d.addChild(this.lianjiDragon.display), dragonBones.WorldClock.clock.add(d.lianjiDragon), this.lianjiDragon.addEventListener(egret.Event.COMPLETE, function() {
					dragonBones.WorldClock.clock.remove(d.lianjiDragon), d.lianjiDragon.display.parent && d.removeChild(d.lianjiDragon.display)
				}, d), d.lianjiDragon.animation.gotoAndPlay("zq_00" + t.combo + "a", -1, -1, 1)
			}
		}, s.PlayerEnter = function(t) {
			Number(t.playerState.account) == GameData.myAccount ? this.myChairId = t.playerState.chair : this.otherChairId = t.playerState.chair
		}, s.SMGameStart = function(t) {
			this.curActionNum = t.nextChair, t.nextChair == this.myChairId ? (this.isOwnGame = !0, this.isBaiqiu = 1, this.ganImg0.visible = !1, this.ganImg1.visible = !0, this.leftTurn.visible = !0, this.rightTurn.visible = !1) : (this.isOwnGame = !1, this.isBaiqiu = 1, this.ganImg0.visible = !0, this.ganImg1.visible = !1, this.leftTurn.visible = !1, this.rightTurn.visible = !0), this.leftLabel.visible = !0, this.rightLabel.visible = !0, this.startGame1()
		}, s.startGame1 = function() {
			this.curBall = new NewBall(0), this.curBall.lastX = this.posArr[0].hx + .1 * (this.posArr[2].hx - this.posArr[0].hx), this.curBall.lastY = this.posArr[0].hy + (this.posArr[3].hy - this.posArr[0].hy) / 2, this.curBall.nextX = this.curBall.lastX, this.curBall.nextY = this.curBall.lastY, this.curBall.name = "cur", this.ballArr.push(this.curBall), this.otherX = this.posArr[0].hx + .7 * (this.posArr[2].hx - this.posArr[0].hx), this.otherY = this.posArr[0].hy + (this.posArr[3].hy - this.posArr[0].hy) / 2;
			for (var t = 0; 5 > t; t++) {
				var e = new NewBall(this.ballArr.length);
				e.lastX = this.otherX + (2 * e.radius + 1) * t * Math.cos(Math.PI / 6), e.lastY = this.otherY - (2 * e.radius + 1) * t * Math.sin(Math.PI / 6), e.nextX = e.lastX, e.nextY = e.lastY, this.ballArr.push(e);
				for (var i = 1; t >= i; i++) {
					var s = new NewBall(this.ballArr.length);
					s.lastX = e.lastX, s.lastY = e.lastY + 2 * s.radius * i + i, s.nextX = s.lastX, s.nextY = s.lastY, this.ballArr.push(s)
				}
			}
			for (var t = 0; t < this.ballArr.length; t++) {
				var e = this.ballArr[t];
				setBallPos1(e.nextX, e.nextY, t)
			}
			refreshUI(), egret.setTimeout(this.startGame2, this, 100)
		}, s.startGame2 = function() {
			this._r = this.ballArr[0].radius, this.countdownTimer = new egret.Timer(1e3, 0), this.countdownTimer.addEventListener(egret.TimerEvent.TIMER, this.startCountDown, this), this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.beginFunc, this), this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.moveFunc, this), this.addEventListener(egret.TouchEvent.TOUCH_END, this.endFunc, this), this.tipsBtn1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showTips, this), this.tipsBtn2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showTips, this), this.lidudi.addEventListener(egret.TouchEvent.TOUCH_TAP, this.liduFunc, this), this.sendChat.addEventListener(egret.TouchEvent.TOUCH_TAP, this.sendFunc, this), this.chatText.text = "", this.isCanMove = !0, 1 == this.isLianxi && this.downIcon.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.downFunc, this), this.ganImg.visible = !1;
			var t = this.getChildByName("dengdai");
			t.parent && this.removeChild(t), 1 == this.isLianxi && this.countdownFunc(!0, 15)
		}, s.removeAllEventListener = function() {
			this.removeEventListener(egret.Event.ENTER_FRAME, this.enterFrame, this), this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.beginFunc, this), this.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.moveFunc, this), this.removeEventListener(egret.TouchEvent.TOUCH_END, this.endFunc, this), this.tipsBtn1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.showTips, this), this.tipsBtn2.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.showTips, this), this.lidudi.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.liduFunc, this), this.sendChat.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.sendFunc, this), this.countdownTimer.removeEventListener(egret.TimerEvent.TIMER, this.startCountDown, this), this.isCanMove = !1, 1 == this.isLianxi && this.downIcon.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.downFunc, this)
		}, s.quitFunc = function() {
			var t = this;
			this.resetUI(), 1 == this.isLianxi && (this.msgTimer && (this.msgTimer.removeEventListener(egret.TimerEvent.TIMER, MyNet.i().update, MyNet.i()), this.msgTimer.stop(), this.msgTimer = null), MyNet.i().unregisterMsgHandler(net.Messages.SM_PlayerEnter, this.PlayerEnter, this), MyNet.i().unregisterMsgHandler(net.Messages.SM_GameStart, this.SMGameStart, this), MyNet.i().unregisterMsgHandler(net.Messages.SM_Hit, this.SMHit, this), MyNet.i().unregisterMsgHandler(net.Messages.SM_Cue, this.SMCue, this), MyNet.i().unregisterMsgHandler(net.Messages.SM_HitPoint, this.SMHitPoint, this), MyNet.i().unregisterMsgHandler(net.Messages.SM_HitAngle, this.SMHitAngle, this), MyNet.i().unregisterMsgHandler(net.Messages.SM_TableState, this.SMTableState, this), MyNet.i().unregisterMsgHandler(net.Messages.SM_Chat, this.SMChat, this), MyNet.i().unregisterMsgHandler(net.Messages.SM_Color, this.SMColor, this), MyNet.i().unregisterMsgHandler(net.Messages.SM_GameEnd, this.SMGameEnd, this), MyNet.i().unregisterMsgHandler(net.Messages.SM_PutBall, this.SMPutBall, this), MyNet.i().unregisterMsgHandler(net.Messages.SM_TOPutBall, this.SMTOPutBall, this), MyNet.i().unregisterMsgHandler(net.Messages.SM_TOHit, this.SMTOHit, this), this.isCanClose = !0, MyNet.i().close()), this.isLianxi = 0, this.lianxiImg = new eui.Image("lianxiBtn1"), this.lianxiImg.anchorOffsetX = 48, this.lianxiImg.x = this.centerX, this.lianxiImg.y = this.centerY + 170, t.addChild(this.lianxiImg), this.lianxiImg.name = "lianxi";
			var e = RES.getRes("ks3"),
				i = RES.getRes("ks2"),
				s = RES.getRes("ks1"),
				n = new dragonBones.EgretFactory;
			n.addDragonBonesData(dragonBones.DataParser.parseDragonBonesData(e)), n.addTextureAtlas(new dragonBones.EgretTextureAtlas(s, i)), this.ksDragon = n.buildArmature("armatureName"), this.ksDragon.display.name = "ks", t.addChild(this.ksDragon.display), this.isKsPlay = !0, this.ksDragon.display.x = t.centerX, this.ksDragon.display.y = t.centerY + 80, dragonBones.WorldClock.clock.add(this.ksDragon), this.ksDragon.addEventListener(egret.Event.COMPLETE, function() {
				t.isKsBtn = !0, t.isKsPlay = !1, t.ksDragon.display.touchEnabled = !0, t.ksDragon.display.addEventListener(egret.TouchEvent.TOUCH_TAP, t.startConnect, t), t.lianxiImg.addEventListener(egret.TouchEvent.TOUCH_TAP, t.lianxiFunc, t)
			}, t), this.ksDragon.animation.gotoAndPlay("zq_ks_01a", -1, -1, 1), 1 == this.isLianxi && MyNet.i().sendMsg(net.CMAgain({
				isAgain: 0
			}))
		}, s.SMTOPutBall = function(t) {
			this.whiteBall && this.whiteBall.parent && (this.removeChild(this.whiteBall), this.whiteBall = null), this.xIcon && this.xIcon.parent && (this.removeChild(this.xIcon), this.xIcon = null), 1 == this.isBaiqiu ? this.countdownFunc(!0, 15) : this.countdownFunc(!0, 25), this.isBaiqiu = 0, this.curBall.isJindong = -1, this.curBall.lastX = this.curBall.nextX = Number(t.ball.x), this.curBall.lastY = this.curBall.nextY = Number(t.ball.y), setBaiPos(t.ball.x, t.ball.y), refreshUI()
		}, s.SMTOHit = function(t) {
			this.isTOHit = !0, MyNet.i().sleep(1e6), this.countdownFunc(!1), this.ganImg.visible = !1, this.shp1.graphics.clear(), this.shp2.graphics.clear(), this.shp3.graphics.clear(), this.shp4.graphics.clear();
			for (var e = 0; e < this.lightArr.length; e++) this.lightArr[e] && (this.lightArr[e].animation.gotoAndStop("zq_guang_001a", 0), this.removeChild(this.lightArr[e].display), dragonBones.WorldClock.clock.remove(this.lightArr[e]));
			this.lightArr = [], this.isOwnGame = !1, this.isMove = !0, this.isBegin = !1, this.ganImg0.visible = !0, this.ganImg1.visible = !0, this.curBall.vx = 0, this.curBall.vy = 0, this.isLoading = 2, this.addEventListener(egret.Event.ENTER_FRAME, this.enterFrame, this)
		}, s.countdownFunc = function(t, e) {
			if (void 0 === e && (e = 0), t && e > 0) {
				var i = Math.floor(e);
				this.curTimerNum = i, this.countdownTimer.running || this.countdownTimer.start()
			}
			t || (this.curTimerNum = 0, this.countdownTimer.running && this.countdownTimer.stop(), this.setTimeNum(this.curTimerNum))
		}, s.startCountDown = function() {
			this.curTimerNum--, this.setTimeNum(this.curTimerNum), 0 == this.curTimerNum && this.countdownTimer.stop()
		}, s.againFunc = function() {
			if (this.resetUI(), 1 == this.isLianxi) {
				MyNet.i().sendMsg(net.CMAgain({
					isAgain: 1
				}));
				var t = new eui.Label;
				t.text = "等待其他玩家...", t.width = 1440, t.y = this.centerY, t.name = "dengdai", t.textAlign = egret.HorizontalAlign.CENTER, this.addChild(t)
			} else if (2 == this.isLianxi) {
				this.isOwnGame = !0, this.ganImg0.visible = !1, this.ganImg1.visible = !0, this.isBaiqiu = 1;
				var t = new eui.Label;
				t.text = "等待游戏开始...", t.width = 1440, t.y = this.centerY, t.name = "dengdai", t.textAlign = egret.HorizontalAlign.CENTER, this.addChild(t), egret.setTimeout(this.startGame1, this, 100)
			}
		}, s.resetUI = function() {
			this.removeAllEventListener();
			for (var t = this.ballArr.length - 1; t >= 0; t--) remove3DBall(t), this.ballArr.splice(t, 1);
			refreshUI(), Refresh3DBall(), this.isMove = !1, this.isBegin = !1, this.isOwnGame = !1, this.otherChairId = -1, this.curActionNum = 0, this.myColor = -1, this.smallGroup.visible = !1, this.bigGroup.visible = !1, this.leftLabel.visible = !1, this.rightLabel.visible = !1, this.leftTurn.visible = !1, this.rightTurn.visible = !1, this.ball8.alpha = .4, this.ball16.alpha = .4;
			for (var t = 0; t < this.ballImgArr.length; t++) this.ballImgArr[t] && (this.ballImgArr[t].alpha = .4);
			for (var t = 0; t < this.lightArr.length; t++) this.lightArr[t] && (this.lightArr[t].animation.gotoAndStop("zq_guang_001a", 0), this.removeChild(this.lightArr[t].display), dragonBones.WorldClock.clock.remove(this.lightArr[t]));
			this.lightArr = [], this.ganImg.visible = !1, this.ganImg0.visible = !0, this.ganImg1.visible = !0, this["long"] = 175.7, this.liduLabel.text = "70/100";
			var e = new egret.Rectangle(251 - this["long"], 0, this["long"], 42);
			this.lidu.mask = e
		}, s.showTips = function(t) {
			this.tipsUI.parent || (this.tipsUI.anchorOffsetX = 212, this.tipsUI.anchorOffsetY = 58, this.tipsUI.x = t.target.x, this.tipsUI.y = t.target.y, this.tipsUI.dingshi(), this.addChild(this.tipsUI))
		}, s.SMHit = function(t) {
			this.countdownFunc(!1), this.ganImg.visible = !1, this.ganImg0.visible = !0, this.ganImg1.visible = !0, this.curBall.vx = Number(t.vx), this.curBall.vy = Number(t.vy), this.isLoading = 2, this.addEventListener(egret.Event.ENTER_FRAME, this.enterFrame, this)
		}, e.Instance = function() {
			return null == e._instance && (e._instance = new e), e._instance
		}, s.mouseMoveGan = function(t) {
			e.Instance().isKsBtn && e.Instance().playKsAction(t.pageX, t.pageY), e.Instance().isCanMove && e.Instance().moveGan(t.pageX, t.pageY)
		}, s.playKsAction = function(t, e) {
			var i = 0,
				s = 0;
			0 == bep ? (i = _rate * t, s = _rate * (e - bel)) : 1 == bep && (i = _rate * (t - bel), s = _rate * e);
			var t = this.centerX,
				e = this.centerY + 80;
			i >= t - 80 && s >= e - 80 && t + 80 >= i && e + 80 >= s ? this.isKsPlay || (this.isKsPlay = !0, console.log("play"), this.ksDragon.animation.gotoAndPlay("zq_ks_02a", -1, -1, 0)) : this.isKsPlay && (this.ksDragon.animation.gotoAndStop("zq_ks_02a", 0, 0), this.isKsPlay = !1, console.log("over")), i >= this.lianxiImg.x - 48 && i <= this.lianxiImg.x + 48 && s >= this.lianxiImg.y && s <= this.lianxiImg.y + 41 ? "lianxiBtn1" == this.lianxiImg.source && (this.lianxiImg.source = "lianxiBtn2") : "lianxiBtn2" == this.lianxiImg.source && (this.lianxiImg.source = "lianxiBtn1")
		}, s.moveGan = function(t, e) {
			if (this.isOwnGame) {
				if (0 != this.isBaiqiu) {
					var i = 0,
						s = 0;
					return 0 == bep ? (i = _rate * t, s = _rate * (e - bel)) : 1 == bep && (i = _rate * (t - bel), s = _rate * e), void(i >= 116 && s >= 31 && 1311 >= i && 683 >= s && (null == this.whiteBall && (this.whiteBall = new eui.Image("whiteBall"), this.whiteBall.anchorOffsetX = 54.5, this.whiteBall.anchorOffsetY = 54.5, this.addChild(this.whiteBall), this.curBall.lastX = this.curBall.nextX = -17, this.curBall.lastY = this.curBall.nextY = -17, this.curBall.vx = 0, this.curBall.vy = 0, setBaiPos(-17, -17), refreshUI()), 1 == this.isBaiqiu && (i > 418 ? (null == this.xIcon && (this.xIcon = new eui.Image("forbid"), this.xIcon.anchorOffsetX = 54.5, this.xIcon.anchorOffsetY = 54.5, this.addChild(this.xIcon)), this.xIcon.x = i, this.xIcon.y = s) : this.xIcon && this.xIcon.parent && (this.removeChild(this.xIcon), this.xIcon = null)), this.whiteBall.x = i, this.whiteBall.y = s))
				}
				if (!this.isMove && !this.isBegin) {
					var i = 0,
						s = 0;
					if (0 == bep ? (i = _rate * t, s = _rate * (e - bel)) : 1 == bep && (i = _rate * (t - bel), s = _rate * e), i >= 116 && s >= 31 && 1311 >= i && 683 >= s) {
						var n = i - this.curBall.nextX,
							r = s - this.curBall.nextY,
							a = Math.sqrt(n * n + r * r);
						if (a <= this._r) return;
						if (this.showGan(i, s), this.setSubline(), 1 == this.isLianxi) {
							var h = egret.getTimer();
							if (h - this.moveTime > 1e3) {
								this.moveTime = h;
								var o = this;
								MyNet.i().sendMsg(net.CMCue({
									point: net.MFPoint({
										x: "" + o.ganImg.x,
										y: "" + o.ganImg.y
									}),
									angle: "" + o.ganImg.rotation
								}))
							}
						}
					}
				}
			}
		}, s.rotationCoord = function(t, e, i) {
			0 == i && (i = 1e-4);
			var s = -i,
				n = Math.cos(s) * Math.cos(s) / Math.sin(s) + Math.sin(s),
				r = (Math.cos(s) * t / Math.sin(s) - e) / n,
				a = Math.cos(s) + Math.sin(s) * Math.sin(s) / Math.cos(s),
				h = (Math.sin(s) * t / Math.cos(s) + e) / a;
			return {
				x: r,
				y: h
			}
		}, s.showGan = function(t, e) {
			var i = this.curBall.nextX,
				s = this.curBall.nextY,
				n = t,
				r = e,
				a = n - i,
				h = r - s,
				o = Math.sqrt((n - i) * (n - i) + (r - s) * (r - s)),
				l = 0;
			a >= 0 && 0 >= h && (l = 180 * Math.asin(a / o) / Math.PI - 90, this.angleSpeed = Math.asin(a / o), this.angleNum = 1, this.huadongAngle = this.angleSpeed - Math.PI / 2, this.ganImg.x = i - this.ganLen * Math.sin(Math.asin(a / o)), this.ganImg.y = s + this.ganLen * Math.cos(Math.asin(a / o))), a > 0 && h > 0 && (l = 180 * Math.asin(h / o) / Math.PI, this.angleSpeed = Math.asin(h / o), this.angleNum = 2, this.huadongAngle = this.angleSpeed, this.ganImg.x = i - this.ganLen * Math.cos(Math.asin(h / o)), this.ganImg.y = s - this.ganLen * Math.sin(Math.asin(h / o))), 0 > h && 0 > a && (l = 180 * Math.asin(a / o) / Math.PI - 90, this.angleSpeed = Math.asin(a / o), this.angleNum = 3, this.huadongAngle = this.angleSpeed - Math.PI / 2, this.ganImg.x = i + this.ganLen * Math.sin(Math.asin(-a / o)), this.ganImg.y = s + this.ganLen * Math.cos(Math.asin(-a / o))), 0 > a && h > 0 && (l = 180 * -(Math.asin(h / o) + 90 * Math.PI / 180) / Math.PI - 90, this.angleSpeed = Math.asin(h / o), this.angleNum = 4, this.huadongAngle = Math.PI - this.angleSpeed, this.ganImg.x = i + this.ganLen * Math.cos(Math.asin(h / o)), this.ganImg.y = s - this.ganLen * Math.sin(Math.asin(h / o))), this.ganImg.rotation = l, this.ganImg.visible = !0
		}, s.liduFunc = function(t) {
			if (!this.isBegin && !this.isMove) {
				this["long"] = 251 - t.localX, this.liduLabel.text = "" + Math.floor(this["long"] / 251 * 100) + "/100";
				var e = new egret.Rectangle(251 - this["long"], 0, this["long"], 42);
				this.lidu.mask = e, this.isClickLidu = !0
			}
		}, s.beginFunc = function(t) {
			if (this.isOwnGame) {
				var e = this;
				if (t.stageX >= 116 && t.stageY >= 31 && t.stageX <= 1311 && t.stageY <= 683 && 0 != this.isBaiqiu) {
					var i = 0,
						s = "";
					if (1 == this.isBaiqiu ? (i = 418 + this._r, s = "word15") : 2 == this.isBaiqiu && (i = this.posArr[2].x2, s = "word14"), !(t.stageX > this.posArr[0].x2 + this._r && t.stageY > this.posArr[0].y1 + this._r && t.stageX < i - this._r && t.stageY < this.posArr[3].y2 - this._r)) return this.promptWord.setSour(s), void(this.promptWord.parent || this.addChild(this.promptWord));
					for (var n = 0; 6 > n; n++) {
						var r = this.posArr[n].hx,
							a = this.posArr[n].hy;
						if (t.stageX > r - this.holeR && t.stageX < r + this.holeR && t.stageY > a - this.holeR && t.stageY < a + this.holeR) {
							var h = t.stageX - r,
								o = t.stageY - a,
								l = Math.sqrt(h * h + o * o);
							if (l < this.holeR) return this.promptWord.setSour(s), void(this.promptWord.parent || this.addChild(this.promptWord))
						}
					}
					for (var g = 0; g < this.ballArr.length; g++) {
						var d = this.ballArr[g];
						if ("cur" != d.name) {
							var h = d.nextX - t.stageX,
								o = d.nextY - t.stageY,
								l = Math.sqrt(h * h + o * o);
							if (l <= 2 * this._r) return this.promptWord.setSour(s), void(this.promptWord.parent || this.addChild(this.promptWord))
						}
					}
					return 1 == this.isLianxi && MyNet.i().sendMsg(net.CMPutBall({
						ball: net.MFPoint({
							x: "" + t.stageX,
							y: "" + t.stageY
						})
					})), setBaiPos(t.stageX, t.stageY), refreshUI(), this.curBall.lastX = this.curBall.nextX = t.stageX, this.curBall.lastY = this.curBall.nextY = t.stageY, this.whiteBall && this.whiteBall.parent && (this.removeChild(this.whiteBall), this.whiteBall = null), this.xIcon && this.xIcon.parent && (this.removeChild(this.xIcon), this.xIcon = null), this.curBall.isJindong = -1, 1 == this.isLianxi && (1 == this.isBaiqiu ? this.countdownFunc(!0, 15) : 2 == this.isBaiqiu && this.countdownFunc(!0, 25)), void(this.isBaiqiu = 0)
				}
				if (!this.isMove && !this.isBegin && t.stageX >= 116 && t.stageY >= 31 && t.stageX <= 1311 && t.stageY <= 683) {
					var h = t.stageX - this.curBall.nextX,
						o = t.stageY - this.curBall.nextY,
						l = Math.sqrt(h * h + o * o);
					if (l <= this._r) return;
					return 1 == this.isLianxi && MyNet.i().sendMsg(net.CMCue({
						point: net.MFPoint({
							x: "" + e.ganImg.x,
							y: "" + e.ganImg.y
						}),
						angle: "" + e.ganImg.rotation
					})), this.isBegin = !0, this.isClickLidu ? this.isClickLidu = !1 : this["long"] = 175.7, this.addNum = 2, this.isLoading = 0, this.addEventListener(egret.Event.ENTER_FRAME, this.enterFrame, this), void(this.liduTime = egret.setTimeout(function() {
						e.isLoading = 1
					}, this, 500))
				}
			}
		}, s.moveFunc = function(t) {}, s.endFunc = function() {
			if (this.isOwnGame && !this.isMove && this.isBegin) {
				var t = 2 * this["long"] / 251;
				1 == this.angleNum ? (this.curVx = t * Math.sin(this.angleSpeed), this.curVy = -t * Math.cos(this.angleSpeed)) : 2 == this.angleNum ? (this.curVx = t * Math.cos(this.angleSpeed), this.curVy = t * Math.sin(this.angleSpeed)) : 3 == this.angleNum ? (this.curVx = t * Math.sin(this.angleSpeed), this.curVy = -t * Math.cos(this.angleSpeed)) : 4 == this.angleNum && (this.curVx = -t * Math.cos(this.angleSpeed), this.curVy = t * Math.sin(this.angleSpeed)), MyNet.i().sleep(1e7), this.shp1.graphics.clear(), this.shp2.graphics.clear(), this.shp3.graphics.clear(), this.shp4.graphics.clear();
				for (var e = 0; e < this.lightArr.length; e++) this.lightArr[e] && (this.lightArr[e].animation.gotoAndStop("zq_guang_001a", 0), this.removeChild(this.lightArr[e].display), dragonBones.WorldClock.clock.remove(this.lightArr[e]));
				this.lightArr = [], this.curBall.vx = this.curVx, this.curBall.vy = this.curVy, this.isOwnGame = !1, this.isMove = !0, this.isBegin = !1, 1 == this.isLianxi && MyNet.i().sendMsg(net.CMHit({
					vx: "" + this.curVx,
					vy: "" + this.curVy
				})), this.countdownFunc(!1), egret.clearTimeout(this.liduTime), this.isLoading = 0;
				var i = this.ganImg.x,
					s = this.ganImg.y,
					n = this.curBall.nextX - i,
					r = this.curBall.nextY - s,
					a = Math.atan2(r, n),
					h = Math.sin(a),
					o = Math.cos(a),
					l = new egret.Point(0, 0);
				l.x -= 80 * this["long"] / 251;
				var g = this.rotateR(l.x, l.y, h, o, !1),
					d = i + g.x,
					u = s + g.y,
					c = this,
					m = egret.Tween.get(this.ganImg);
				m.to({
					x: d,
					y: u
				}, 1e3 * (1 - this["long"] / 251)), m.to({
					x: i,
					y: s
				}, 600 * (1 - this["long"] / 251)), m.call(function() {
					c.isLoading = 2, c.ganImg.visible = !1, 1 == c.isLianxi && (c.ganImg0.visible = !0), c.ganImg1.visible = !0;
					var t = c.soundganqiu.play(0, 1);
					t.volume = Math.sqrt(this.curVx * this.curVx + this.curVy * this.curVy) / 2
				}, this)
			}
		}, s.enterFrame = function() {
			if (1 == this.isLoading) {
				this["long"] += this.addNum, this["long"] >= 251 ? this.addNum = -2 : this["long"] <= 0 && (this.addNum = 2);
				var t = new egret.Rectangle(251 - this["long"], 0, this["long"], 42);
				this.lidu.mask = t, this.liduLabel.text = "" + Math.floor(this["long"] / 251 * 100) + "/100"
			} else 2 == this.isLoading && (this.updataMask(), refreshUI())
		}, s.updataMask = function() {
			for (var t = 0; 30 > t; t++) {
				for (var e = this.ballArr.length, i = 0, s = e - 1; s >= 0; s--) {
					var n = this.ballArr[s];
					if (0 == n.vx && 0 == n.vy && -1 == n.isJindong && i++, -1 != n.isJindong) {
						var r = egret.Point.polar(11, n.degree * Math.PI / 180);
						n.nextX = this.posArr[n.isJindong].hx + r.x, n.nextY = this.posArr[n.isJindong].hy + r.y, n.degree += .6, n.degree >= 300 && n.degree < 300.6 && this.jinqiuAction(n.isJindong), n.degree >= 600 && (this.removeBallArr.push(n.idx), "cur" == n.name ? (n.nextX = -17, n.nextY = -17, n.isJindong = -1) : (remove3DBall(s), this.ballArr.splice(s, 1), this.ballImgArr[n.idx - 1] && (this.ballImgArr[n.idx - 1].alpha = 1)))
					} else(0 != n.vx || 0 != n.vy) && (n.nextX += n.vx, n.nextY += n.vy, n.startRoll(), this.checkWalls(n))
				}
				var e = this.ballArr.length;
				for (s = 0; e - 1 > s; s++) {
					var a = this.ballArr[s];
					if (-1 == a.isJindong) for (var h = s + 1; e > h; h++) {
						var o = this.ballArr[h]; - 1 == o.isJindong && this.checkCollision(a, o)
					}
				}
				if (e == i) {
					this.isLoading = 0, this.removeEventListener(egret.Event.ENTER_FRAME, this.enterFrame, this), console.log("over"), this["long"] = 175.7, this.liduLabel.text = "70/100";
					var l = new egret.Rectangle(251 - this["long"], 0, this["long"], 42);
					this.lidu.mask = l;
					for (var s = this.ballArr.length - 1; s >= 0; s--) {
						var g = this.ballArr[s];
						g.moc = .9997, g.degree = 0, g.isJindong = -1
					}
					if (1 == this.isLianxi) {
						for (var d = this, u = [], s = 0; s < this.ballArr.length; s++) this.ballArr[s].nextX = Math.round(this.ballArr[s].nextX), this.ballArr[s].nextY = Math.round(this.ballArr[s].nextY), u.push(net.MFBall({
							num: this.ballArr[s].idx,
							point: net.MFPoint({
								x: "" + this.ballArr[s].nextX,
								y: "" + this.ballArr[s].nextY
							})
						}));
						MyNet.i().sendMsg(net.CMTableState({
							table: u,
							goal: d.removeBallArr,
							firstCollision: d.firstCollision,
							chair: d.curActionNum
						})), this.firstCollision = 0, this.removeBallArr = []
					} else if (2 == this.isLianxi) {
						if (1 == this.ballArr.length) {
							var c = new WinUI;
							c.x = this.centerX - 273, c.y = this.centerY - 234.5, this.addChild(c), c.playAction()
						} else this.isOwnGame = !0; - 17 == this.curBall.nextX && -17 == this.curBall.nextY && (this.isBaiqiu = 2)
					}
					this.isMove = !1, MyNet.i().wakeup();
					break
				}
			}
			for (var e = this.ballArr.length, s = e - 1; s >= 0; s--) {
				var g = this.ballArr[s];
				setBallPos(g.nextX, g.nextY, g.lastX, g.lastY, s), g.lastX = g.nextX, g.lastY = g.nextY
			}
		}, s.jinqiuAction = function(t) {
			var e = RES.getRes("jinqiu3"),
				i = RES.getRes("jinqiu2"),
				s = RES.getRes("jinqiu1"),
				n = new dragonBones.EgretFactory;
			n.addDragonBonesData(dragonBones.DataParser.parseDragonBonesData(e)), n.addTextureAtlas(new dragonBones.EgretTextureAtlas(s, i));
			var r = n.buildArmature("armatureName");
			this.addChild(r.display), r.display.x = this.posArr[t].hx, r.display.y = this.posArr[t].hy, dragonBones.WorldClock.clock.add(r);
			var a = this;
			r.addEventListener(egret.Event.COMPLETE, function() {
				dragonBones.WorldClock.clock.remove(r), r.display.parent && a.removeChild(r.display)
			}, this), r.animation.gotoAndPlay("01", -1, -1, 1)
		}, s.checkWalls = function(t) {
			for (var e = 0; 6 > e; e++) {
				var i = this.posArr[e].hx,
					s = this.posArr[e].hy;
				if (t.nextX > i - this.holeR && t.nextX < i + this.holeR && t.nextY > s - this.holeR && t.nextY < s + this.holeR) {
					var n = t.nextX - i,
						r = t.nextY - s,
						a = Math.sqrt(n * n + r * r);
					if (a < this.holeR) {
						console.log("ball: " + t.idx);
						var h = this.soundrudong.play(0, 1);
						h.volume = Math.sqrt(t.vx * t.vx + t.vy * t.vy) / 2, t.vx = 0, t.vy = 0, t.isJindong = e
					}
				}
			}
			if (t.nextX < this.posArr[0].x2 + this._r) {
				if (t.nextY > this.posArr[0].y2 && t.nextY < this.posArr[3].y1) {
					t.nextX = this.posArr[0].x2 + this._r;
					var h = this.soundzhuangbian.play(0, 1);
					return h.volume = Math.sqrt(t.vx * t.vx + t.vy * t.vy) / 2, t.vx *= this.bounce, !1
				}
				if (t.nextY <= this.posArr[0].y2) {
					var n = t.nextX - this.posArr[0].x2,
						r = t.nextY - this.posArr[0].y2,
						a = Math.sqrt(n * n + r * r);
					a < this._r && this.rebound(t, this.posArr[0].x2, this.posArr[0].y2, .7)
				}
				if (t.nextY >= this.posArr[3].y1) {
					var n = t.nextX - this.posArr[3].x1,
						r = t.nextY - this.posArr[3].y1,
						a = Math.sqrt(n * n + r * r);
					a < this._r && this.rebound(t, this.posArr[3].x1, this.posArr[3].y1, .7)
				}
			}
			if (t.nextX > this.posArr[2].x2 - this._r) {
				if (t.nextY > this.posArr[2].y2 && t.nextY < this.posArr[5].y1) {
					t.nextX = this.posArr[2].x2 - this._r;
					var h = this.soundzhuangbian.play(0, 1);
					h.volume = Math.sqrt(t.vx * t.vx + t.vy * t.vy) / 2, t.vx *= this.bounce
				}
				if (t.nextY <= this.posArr[2].y2) {
					var n = t.nextX - this.posArr[2].x2,
						r = t.nextY - this.posArr[2].y2,
						a = Math.sqrt(n * n + r * r);
					a < this._r && this.rebound(t, this.posArr[2].x2, this.posArr[2].y2, .7)
				}
				if (t.nextY >= this.posArr[5].y1) {
					var n = t.nextX - this.posArr[5].x1,
						r = t.nextY - this.posArr[5].y1,
						a = Math.sqrt(n * n + r * r);
					a < this._r && this.rebound(t, this.posArr[5].x1, this.posArr[5].y1, .7)
				}
			}
			if (t.nextY < this.posArr[0].y1 + this._r) {
				if (t.nextX > this.posArr[0].x1 && t.nextX < this.posArr[1].x1) {
					t.nextY = this.posArr[0].y1 + this._r;
					var h = this.soundzhuangbian.play(0, 1);
					h.volume = Math.sqrt(t.vx * t.vx + t.vy * t.vy) / 2, t.vy *= this.bounce
				}
				if (t.nextX > this.posArr[1].x2 && t.nextX < this.posArr[2].x1) {
					t.nextY = this.posArr[0].y1 + this._r;
					var h = this.soundzhuangbian.play(0, 1);
					h.volume = Math.sqrt(t.vx * t.vx + t.vy * t.vy) / 2, t.vy *= this.bounce
				}
				if (t.nextX <= this.posArr[0].x1) {
					var n = t.nextX - this.posArr[0].x1,
						r = t.nextY - this.posArr[0].y1,
						a = Math.sqrt(n * n + r * r);
					a < this._r && this.rebound(t, this.posArr[0].x1, this.posArr[0].y1, .7)
				}
				if (t.nextX >= this.posArr[1].x1 && t.nextX < this.posArr[1].hx) {
					var n = t.nextX - this.posArr[1].x1,
						r = t.nextY - this.posArr[1].y1,
						a = Math.sqrt(n * n + r * r);
					a < this._r && this.rebound(t, this.posArr[1].x1, this.posArr[1].y1, .7)
				}
				if (t.nextX <= this.posArr[1].x2 && t.nextX > this.posArr[1].hx) {
					var n = t.nextX - this.posArr[1].x2,
						r = t.nextY - this.posArr[1].y2,
						a = Math.sqrt(n * n + r * r);
					a < this._r && this.rebound(t, this.posArr[1].x2, this.posArr[1].y2, .7)
				}
				if (t.nextX >= this.posArr[2].x1) {
					var n = t.nextX - this.posArr[2].x1,
						r = t.nextY - this.posArr[2].y1,
						a = Math.sqrt(n * n + r * r);
					a < this._r && this.rebound(t, this.posArr[2].x1, this.posArr[2].y1, .7)
				}
			}
			if (t.nextY > this.posArr[3].y2 - this._r) {
				if (t.nextX > this.posArr[3].x2 && t.nextX < this.posArr[4].x1) {
					t.nextY = this.posArr[3].y2 - this._r;
					var h = this.soundzhuangbian.play(0, 1);
					h.volume = Math.sqrt(t.vx * t.vx + t.vy * t.vy) / 2, t.vy *= this.bounce
				}
				if (t.nextX > this.posArr[4].x2 && t.nextX < this.posArr[5].x2) {
					t.nextY = this.posArr[3].y2 - this._r;
					var h = this.soundzhuangbian.play(0, 1);
					h.volume = Math.sqrt(t.vx * t.vx + t.vy * t.vy) / 2, t.vy *= this.bounce
				}
				if (t.nextX <= this.posArr[3].x2) {
					var n = t.nextX - this.posArr[3].x2,
						r = t.nextY - this.posArr[3].y2,
						a = Math.sqrt(n * n + r * r);
					a < this._r && this.rebound(t, this.posArr[3].x2, this.posArr[3].y2, .7)
				}
				if (t.nextX >= this.posArr[4].x1 && t.nextX < this.posArr[4].hx) {
					var n = t.nextX - this.posArr[4].x1,
						r = t.nextY - this.posArr[4].y1,
						a = Math.sqrt(n * n + r * r);
					a < this._r && this.rebound(t, this.posArr[4].x1, this.posArr[4].y1, .7)
				}
				if (t.nextX <= this.posArr[4].x2 && t.nextX > this.posArr[4].hx) {
					var n = t.nextX - this.posArr[4].x2,
						r = t.nextY - this.posArr[4].y2,
						a = Math.sqrt(n * n + r * r);
					a < this._r && this.rebound(t, this.posArr[4].x2, this.posArr[4].y2, .7)
				}
				if (t.nextX >= this.posArr[5].x2) {
					var n = t.nextX - this.posArr[5].x2,
						r = t.nextY - this.posArr[5].y2,
						a = Math.sqrt(n * n + r * r);
					a < this._r && this.rebound(t, this.posArr[5].x2, this.posArr[5].y2, .7)
				}
			}
		}, s.setSubline = function() {
			var t = 2,
				e = 0,
				i = 0;
			1 == this.angleNum ? (e = t * Math.sin(this.angleSpeed), i = -t * Math.cos(this.angleSpeed)) : 2 == this.angleNum ? (e = t * Math.cos(this.angleSpeed), i = t * Math.sin(this.angleSpeed)) : 3 == this.angleNum ? (e = t * Math.sin(this.angleSpeed), i = -t * Math.cos(this.angleSpeed)) : 4 == this.angleNum && (e = -t * Math.cos(this.angleSpeed), i = t * Math.sin(this.angleSpeed)), this.shp1.graphics.clear(), this.shp2.graphics.clear(), this.shp3.graphics.clear(), this.shp4.graphics.clear();
			for (var s = this.curBall.nextX, n = this.curBall.nextY, r = 0; 1500 > r; r++) {
				s += e, n += i;
				for (var a = this.ballArr.length, h = !1, o = 0; a > o; o++) {
					var l = this.ballArr[o];
					if ("cur" != l.name) {
						var g = l.nextX - s,
							d = l.nextY - n,
							u = Math.sqrt(g * g + d * d);
						if (u <= 2 * this._r) {
							h = !0;
							var c = this.rotationCoord(s, n, this.huadongAngle),
								m = this.rotationCoord(l.nextX, l.nextY, this.huadongAngle),
								v = c.x - m.x,
								p = c.y - m.y,
								M = Math.sqrt(v * v + p * p),
								x = Math.abs(v / M),
								y = p / Math.abs(p),
								f = Math.atan2(d, g),
								_ = Math.sin(f),
								b = Math.cos(f),
								C = this.rotateR(g, d, _, b, !0);
							C.x += 70 * x;
							var A = new egret.Point(0, y * (this._r + 50 * (1 - x))),
								S = new egret.Point(0, y * this._r),
								E = this.rotateR(C.x, C.y, _, b, !1),
								T = this.rotateR(A.x, A.y, _, b, !1),
								B = this.rotateR(S.x, S.y, _, b, !1);
							this.shp3.graphics.lineStyle(3, 16777215), this.shp3.graphics.moveTo(l.nextX, l.nextY), this.shp3.graphics.lineTo(s + E.x, n + E.y), this.shp3.graphics.endFill(), this.shp4.graphics.lineStyle(3, 16777215), this.shp4.graphics.moveTo(s + B.x, n + B.y), this.shp4.graphics.lineTo(s + T.x, n + T.y), this.shp4.graphics.endFill();
							break
						}
					}
				}
				if (h) break;
				for (var I = !0, r = 0; 6 > r; r++) {
					var w = this.posArr[r].hx,
						R = this.posArr[r].hy;
					if (s > w - this.holeR && s < w + this.holeR && n > R - this.holeR && n < R + this.holeR) {
						var g = s - w,
							d = n - R,
							u = Math.sqrt(g * g + d * d);
						if (u < this.holeR) {
							I = !1;
							break
						}
					}
				}
				if (s < this.posArr[0].x2 + this._r) break;
				if (s > this.posArr[2].x2 - this._r) break;
				if (n < this.posArr[0].y1 + this._r) break;
				if (n > this.posArr[3].y2 - this._r) break
			}
			this.shp1.graphics.lineStyle(3, 16777215), this.shp1.graphics.moveTo(this.curBall.nextX, this.curBall.nextY), this.shp1.graphics.lineTo(s, n), this.shp1.graphics.endFill(), this.shp2.graphics.lineStyle(3, 16777215), this.shp2.graphics.drawCircle(s, n, this._r - 2), this.shp2.graphics.endFill()
		}, s.rotateR = function(t, e, i, s, n) {
			var r = new egret.Point;
			return n ? (r.x = t * s + e * i, r.y = e * s - t * i) : (r.x = t * s - e * i, r.y = e * s + t * i), r
		}, s.checkCollision = function(t, e) {
			var i = e.nextX - t.nextX,
				s = e.nextY - t.nextY,
				n = Math.sqrt(i * i + s * s);
			if (n < 2 * this._r) {
				var r = t.vx + e.vx,
					a = t.vy + e.vy,
					h = this.soundzhuangqiu.play(0, 1);
				h.volume = Math.sqrt(r * r + a * a) / 2;
				var o = Math.atan2(s, i),
					l = Math.sin(o),
					g = Math.cos(o),
					d = new egret.Point(0, 0),
					u = this.rotateR(i, s, l, g, !0),
					c = this.rotateR(t.vx, t.vy, l, g, !0),
					m = this.rotateR(e.vx, e.vy, l, g, !0),
					v = 2 * this._r - Math.abs(d.x - u.x);
				d.x -= .5 * v + 1e-4, u.x += .5 * v + 1e-4;
				var p = this.rotateR(d.x, d.y, l, g, !1),
					M = this.rotateR(u.x, u.y, l, g, !1);
				e.nextX = t.nextX + M.x, e.nextY = t.nextY + M.y, t.nextX = t.nextX + p.x, t.nextY = t.nextY + p.y;
				var x = c.x - m.x;
				c.x = m.x, m.x = x + c.x;
				var y = this.rotateR(c.x, c.y, l, g, !1),
					f = this.rotateR(m.x, m.y, l, g, !1);
				t.vx = y.x, t.vy = y.y, e.vx = f.x, e.vy = f.y, 0 == this.firstCollision && (0 == t.idx && (this.firstCollision = e.idx), 0 == e.idx && (this.firstCollision = t.idx))
			}
		}, s.rebound = function(t, e, i, s) {
			if (0 == s) return t.vx = 0, void(t.vy = 0);
			var n = this.soundzhuangbian.play(0, 1);
			n.volume = Math.sqrt(t.vx * t.vx + t.vy * t.vy) / 2;
			var r = e - t.nextX,
				a = i - t.nextY,
				h = Math.atan2(a, r),
				o = Math.sin(h),
				l = Math.cos(h),
				g = new egret.Point(0, 0),
				d = this.rotateR(r, a, o, l, !0);
			g.x = d.x - this._r - 1e-4;
			var u = this.rotateR(g.x, g.y, o, l, !1);
			t.nextX = t.nextX + u.x, t.nextY = t.nextY + u.y;
			var c = this.rotateR(t.vx, t.vy, o, l, !0),
				m = this.rotateR(0, 0, o, l, !0),
				v = c.x - m.x;
			c.x = m.x, m.x = v + c.x;
			var p = this.rotateR(c.x, c.y, o, l, !1),
				M = this.rotateR(m.x, m.y, o, l, !1);
			t.vx = s * (p.x - M.x), t.vy = s * (p.y - M.y)
		}, s.setTimeNum = function(t) {
			if (!(0 > t || t >= 100)) {
				var e = Math.floor(t),
					i = Math.floor(e / 10),
					s = e - 10 * i;
				this.leftNumImg.source = "num" + i, this.rightNumImg.source = "num" + s
			}
		}, e._instance = null, e
	}(eui.Component);
egret.registerClass(TableUI, "TableUI");
var TipsUI = function(t) {
		function e() {
			t.call(this), this.skinName = "TipsUISkin"
		}
		__extends(e, t);
		var i = (__define, e),
			s = i.prototype;
		return s.dingshi = function() {
			egret.setTimeout(this.removeThis, this, 3e3)
		}, s.removeThis = function() {
			this.parent && this.parent.removeChild(this)
		}, e
	}(eui.Component);
egret.registerClass(TipsUI, "TipsUI");
var WinUI = function(t) {
		function e() {
			t.call(this), this.skinName = "WinUISkin", console.log("dawdad")
		}
		__extends(e, t);
		var i = (__define, e),
			s = i.prototype;
		return s.createChildren = function() {
			t.prototype.createChildren.call(this), this.tuichuBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tuichuFunc, this), this.jixuBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.jixuFunc, this)
		}, s.playAction = function() {
			var t = RES.getRes("win3"),
				e = RES.getRes("win2"),
				i = RES.getRes("win1"),
				s = new dragonBones.EgretFactory;
			s.addDragonBonesData(dragonBones.DataParser.parseDragonBonesData(t)), s.addTextureAtlas(new dragonBones.EgretTextureAtlas(i, e));
			var n = s.buildArmature("armatureName");
			this.addChild(n.display), n.display.x = 275, n.display.y = 290, dragonBones.WorldClock.clock.add(n), n.addEventListener(egret.Event.COMPLETE, function() {
				dragonBones.WorldClock.clock.remove(n)
			}, this), n.animation.gotoAndPlay("zq_win_01a", -1, -1, 1)
		}, s.tuichuFunc = function() {
			this.parent && this.parent.removeChild(this), TableUI.Instance().quitFunc()
		}, s.jixuFunc = function() {
			this.parent && this.parent.removeChild(this), TableUI.Instance().againFunc()
		}, e
	}(eui.Component);
egret.registerClass(WinUI, "WinUI");
var LoadingUI = function(t) {
		function e() {
			t.call(this), this.createView()
		}
		__extends(e, t);
		var i = (__define, e),
			s = i.prototype;
		return s.createView = function() {
			this.textField = new egret.TextField, this.addChild(this.textField), this.textField.y = 300, this.textField.width = 1026, this.textField.height = 100, this.textField.textAlign = "center"
		}, s.setProgress = function(t, e) {
			this.textField.text = "Loading..." + t + "/" + e
		}, e
	}(egret.Sprite);
egret.registerClass(LoadingUI, "LoadingUI");
var Main = function(t) {
		function e() {
			t.apply(this, arguments), this.isThemeLoadEnd = !1, this.isResourceLoadEnd = !1
		}
		__extends(e, t);
		var i = (__define, e),
			s = i.prototype;
		return s.createChildren = function() {
			var t = new AssetAdapter;
			this.stage.registerImplementation("eui.IAssetAdapter", t), this.stage.registerImplementation("eui.IThemeAdapter", new ThemeAdapter), this.loadingView = new LoadingUI, this.stage.addChild(this.loadingView), RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this), RES.loadConfig("resource/default.res.json", "resource/")
		}, s.onConfigComplete = function(t) {
			RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
			var e = new eui.Theme("resource/default.thm.json", this.stage);
			e.addEventListener(eui.UIEvent.COMPLETE, this.onThemeLoadComplete, this), RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this), RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this), RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this), RES.loadGroup("preload")
		}, s.onThemeLoadComplete = function() {
			this.isThemeLoadEnd = !0, this.mPR(), this.createScene()
		}, s.onResourceLoadComplete = function(t) {
			"preload" == t.groupName && (this.stage.removeChild(this.loadingView), RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this), RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this), RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this), this.isResourceLoadEnd = !0, this.createScene())
		}, s.createScene = function() {
			this.isThemeLoadEnd && this.isResourceLoadEnd && this.startCreateScene()
		}, s.onResourceLoadError = function(t) {
			console.warn("Group:" + t.groupName + " has failed to load"), this.onResourceLoadComplete(t)
		}, s.onResourceProgress = function(t) {
			"preload" == t.groupName && this.loadingView.setProgress(t.itemsLoaded, t.itemsTotal)
		}, s.startCreateScene = function() {
			GameData.isScoll = !1, add3DBall();
			var t = TableUI.Instance();
			this.addChild(t), window.addEventListener("resize", this.getScene)
		}, s.getScene = function() {
			IsDifferent()
		}, s.mPR = function() {
			var t = 1440 / document.body.clientWidth,
				e = 900 / document.body.clientHeight;
			t >= e ? (bep = 0, _rate = t, bel = (document.body.clientHeight - 900 / t) / 2) : (bep = 1, _rate = e, bel = (document.body.clientWidth - 1440 / e) / 2)
		}, e
	}(eui.UILayer);
egret.registerClass(Main, "Main");
var _rate, bel, bep, ThemeAdapter = function() {
		function t() {}
		var e = (__define, t),
			i = e.prototype;
		return i.getTheme = function(t, e, i, s) {
			function n(t) {
				e.call(s, t)
			}
			function r(e) {
				e.resItem.url == t && (RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, r, null), i.call(s))
			}
			RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, r, null), RES.getResByUrl(t, n, this, RES.ResourceItem.TYPE_TEXT)
		}, t
	}();
egret.registerClass(ThemeAdapter, "ThemeAdapter", ["eui.IThemeAdapter"]);