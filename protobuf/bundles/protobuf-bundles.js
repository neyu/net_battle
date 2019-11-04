var $protobuf = window.protobuf;
$protobuf.roots.default=window;
// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.pb = (function() {

    /**
     * Namespace pb.
     * @exports pb
     * @namespace
     */
    var pb = {};

    /**
     * ResultCode enum.
     * @name pb.ResultCode
     * @enum {string}
     * @property {number} NoError=0 NoError value
     * @property {number} GateNotFound=1 GateNotFound value
     * @property {number} GateAddressError=2 GateAddressError value
     * @property {number} GameNotFound=3 GameNotFound value
     */
    pb.ResultCode = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "NoError"] = 0;
        values[valuesById[1] = "GateNotFound"] = 1;
        values[valuesById[2] = "GateAddressError"] = 2;
        values[valuesById[3] = "GameNotFound"] = 3;
        return values;
    })();

    /**
     * Prop enum.
     * @name pb.Prop
     * @enum {string}
     * @property {number} Coin=0 Coin value
     * @property {number} Diamond=1 Diamond value
     * @property {number} Vip=2 Vip value
     * @property {number} Level=10 Level value
     * @property {number} Exp=11 Exp value
     * @property {number} Atk=12 Atk value
     * @property {number} Def=13 Def value
     * @property {number} Hp=14 Hp value
     * @property {number} Mp=15 Mp value
     * @property {number} Ap=16 Ap value
     */
    pb.Prop = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Coin"] = 0;
        values[valuesById[1] = "Diamond"] = 1;
        values[valuesById[2] = "Vip"] = 2;
        values[valuesById[10] = "Level"] = 10;
        values[valuesById[11] = "Exp"] = 11;
        values[valuesById[12] = "Atk"] = 12;
        values[valuesById[13] = "Def"] = 13;
        values[valuesById[14] = "Hp"] = 14;
        values[valuesById[15] = "Mp"] = 15;
        values[valuesById[16] = "Ap"] = 16;
        return values;
    })();

    /**
     * Opt enum.
     * @name pb.Opt
     * @enum {string}
     * @property {number} Buy=0 Buy value
     * @property {number} Sale=1 Sale value
     */
    pb.Opt = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Buy"] = 0;
        values[valuesById[1] = "Sale"] = 1;
        return values;
    })();

    pb.ChatReq = (function() {

        /**
         * Properties of a ChatReq.
         * @memberof pb
         * @interface IChatReq
         * @property {string|null} [content] ChatReq content
         */

        /**
         * Constructs a new ChatReq.
         * @memberof pb
         * @classdesc Represents a ChatReq.
         * @implements IChatReq
         * @constructor
         * @param {pb.IChatReq=} [properties] Properties to set
         */
        function ChatReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ChatReq content.
         * @member {string} content
         * @memberof pb.ChatReq
         * @instance
         */
        ChatReq.prototype.content = "";

        /**
         * Encodes the specified ChatReq message. Does not implicitly {@link pb.ChatReq.verify|verify} messages.
         * @function encode
         * @memberof pb.ChatReq
         * @static
         * @param {pb.IChatReq} message ChatReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChatReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.content != null && message.hasOwnProperty("content"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.content);
            return writer;
        };

        /**
         * Decodes a ChatReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.ChatReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.ChatReq} ChatReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChatReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.ChatReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.content = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Creates a ChatReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.ChatReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.ChatReq} ChatReq
         */
        ChatReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.ChatReq)
                return object;
            var message = new $root.pb.ChatReq();
            if (object.content != null)
                message.content = String(object.content);
            return message;
        };

        /**
         * Creates a plain object from a ChatReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.ChatReq
         * @static
         * @param {pb.ChatReq} message ChatReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChatReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.content = "";
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            return object;
        };

        /**
         * Converts this ChatReq to JSON.
         * @function toJSON
         * @memberof pb.ChatReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChatReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ChatReq;
    })();

    pb.ChatAck = (function() {

        /**
         * Properties of a ChatAck.
         * @memberof pb
         * @interface IChatAck
         * @property {string|null} [content] ChatAck content
         */

        /**
         * Constructs a new ChatAck.
         * @memberof pb
         * @classdesc Represents a ChatAck.
         * @implements IChatAck
         * @constructor
         * @param {pb.IChatAck=} [properties] Properties to set
         */
        function ChatAck(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ChatAck content.
         * @member {string} content
         * @memberof pb.ChatAck
         * @instance
         */
        ChatAck.prototype.content = "";

        /**
         * Encodes the specified ChatAck message. Does not implicitly {@link pb.ChatAck.verify|verify} messages.
         * @function encode
         * @memberof pb.ChatAck
         * @static
         * @param {pb.IChatAck} message ChatAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChatAck.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.content != null && message.hasOwnProperty("content"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.content);
            return writer;
        };

        /**
         * Decodes a ChatAck message from the specified reader or buffer.
         * @function decode
         * @memberof pb.ChatAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.ChatAck} ChatAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChatAck.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.ChatAck();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.content = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Creates a ChatAck message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.ChatAck
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.ChatAck} ChatAck
         */
        ChatAck.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.ChatAck)
                return object;
            var message = new $root.pb.ChatAck();
            if (object.content != null)
                message.content = String(object.content);
            return message;
        };

        /**
         * Creates a plain object from a ChatAck message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.ChatAck
         * @static
         * @param {pb.ChatAck} message ChatAck
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChatAck.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.content = "";
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            return object;
        };

        /**
         * Converts this ChatAck to JSON.
         * @function toJSON
         * @memberof pb.ChatAck
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChatAck.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ChatAck;
    })();

    pb.TestAck = (function() {

        /**
         * Properties of a TestAck.
         * @memberof pb
         * @interface ITestAck
         * @property {string|null} [dummy] TestAck dummy
         */

        /**
         * Constructs a new TestAck.
         * @memberof pb
         * @classdesc Represents a TestAck.
         * @implements ITestAck
         * @constructor
         * @param {pb.ITestAck=} [properties] Properties to set
         */
        function TestAck(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TestAck dummy.
         * @member {string} dummy
         * @memberof pb.TestAck
         * @instance
         */
        TestAck.prototype.dummy = "";

        /**
         * Encodes the specified TestAck message. Does not implicitly {@link pb.TestAck.verify|verify} messages.
         * @function encode
         * @memberof pb.TestAck
         * @static
         * @param {pb.ITestAck} message TestAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TestAck.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.dummy != null && message.hasOwnProperty("dummy"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.dummy);
            return writer;
        };

        /**
         * Decodes a TestAck message from the specified reader or buffer.
         * @function decode
         * @memberof pb.TestAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.TestAck} TestAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TestAck.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.TestAck();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.dummy = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Creates a TestAck message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.TestAck
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.TestAck} TestAck
         */
        TestAck.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.TestAck)
                return object;
            var message = new $root.pb.TestAck();
            if (object.dummy != null)
                message.dummy = String(object.dummy);
            return message;
        };

        /**
         * Creates a plain object from a TestAck message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.TestAck
         * @static
         * @param {pb.TestAck} message TestAck
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TestAck.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.dummy = "";
            if (message.dummy != null && message.hasOwnProperty("dummy"))
                object.dummy = message.dummy;
            return object;
        };

        /**
         * Converts this TestAck to JSON.
         * @function toJSON
         * @memberof pb.TestAck
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TestAck.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TestAck;
    })();

    pb.ContentReq = (function() {

        /**
         * Properties of a ContentReq.
         * @memberof pb
         * @interface IContentReq
         * @property {string|null} [msg] ContentReq msg
         * @property {number|null} [value] ContentReq value
         */

        /**
         * Constructs a new ContentReq.
         * @memberof pb
         * @classdesc Represents a ContentReq.
         * @implements IContentReq
         * @constructor
         * @param {pb.IContentReq=} [properties] Properties to set
         */
        function ContentReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ContentReq msg.
         * @member {string} msg
         * @memberof pb.ContentReq
         * @instance
         */
        ContentReq.prototype.msg = "";

        /**
         * ContentReq value.
         * @member {number} value
         * @memberof pb.ContentReq
         * @instance
         */
        ContentReq.prototype.value = 0;

        /**
         * Encodes the specified ContentReq message. Does not implicitly {@link pb.ContentReq.verify|verify} messages.
         * @function encode
         * @memberof pb.ContentReq
         * @static
         * @param {pb.IContentReq} message ContentReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ContentReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.msg != null && message.hasOwnProperty("msg"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.msg);
            if (message.value != null && message.hasOwnProperty("value"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.value);
            return writer;
        };

        /**
         * Decodes a ContentReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.ContentReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.ContentReq} ContentReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ContentReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.ContentReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.msg = reader.string();
                    break;
                case 2:
                    message.value = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Creates a ContentReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.ContentReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.ContentReq} ContentReq
         */
        ContentReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.ContentReq)
                return object;
            var message = new $root.pb.ContentReq();
            if (object.msg != null)
                message.msg = String(object.msg);
            if (object.value != null)
                message.value = object.value | 0;
            return message;
        };

        /**
         * Creates a plain object from a ContentReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.ContentReq
         * @static
         * @param {pb.ContentReq} message ContentReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ContentReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.msg = "";
                object.value = 0;
            }
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = message.value;
            return object;
        };

        /**
         * Converts this ContentReq to JSON.
         * @function toJSON
         * @memberof pb.ContentReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ContentReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ContentReq;
    })();

    pb.ContentAck = (function() {

        /**
         * Properties of a ContentAck.
         * @memberof pb
         * @interface IContentAck
         * @property {string|null} [msg] ContentAck msg
         * @property {number|null} [value] ContentAck value
         */

        /**
         * Constructs a new ContentAck.
         * @memberof pb
         * @classdesc Represents a ContentAck.
         * @implements IContentAck
         * @constructor
         * @param {pb.IContentAck=} [properties] Properties to set
         */
        function ContentAck(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ContentAck msg.
         * @member {string} msg
         * @memberof pb.ContentAck
         * @instance
         */
        ContentAck.prototype.msg = "";

        /**
         * ContentAck value.
         * @member {number} value
         * @memberof pb.ContentAck
         * @instance
         */
        ContentAck.prototype.value = 0;

        /**
         * Encodes the specified ContentAck message. Does not implicitly {@link pb.ContentAck.verify|verify} messages.
         * @function encode
         * @memberof pb.ContentAck
         * @static
         * @param {pb.IContentAck} message ContentAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ContentAck.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.msg != null && message.hasOwnProperty("msg"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.msg);
            if (message.value != null && message.hasOwnProperty("value"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.value);
            return writer;
        };

        /**
         * Decodes a ContentAck message from the specified reader or buffer.
         * @function decode
         * @memberof pb.ContentAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.ContentAck} ContentAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ContentAck.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.ContentAck();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.msg = reader.string();
                    break;
                case 2:
                    message.value = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Creates a ContentAck message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.ContentAck
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.ContentAck} ContentAck
         */
        ContentAck.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.ContentAck)
                return object;
            var message = new $root.pb.ContentAck();
            if (object.msg != null)
                message.msg = String(object.msg);
            if (object.value != null)
                message.value = object.value | 0;
            return message;
        };

        /**
         * Creates a plain object from a ContentAck message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.ContentAck
         * @static
         * @param {pb.ContentAck} message ContentAck
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ContentAck.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.msg = "";
                object.value = 0;
            }
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = message.value;
            return object;
        };

        /**
         * Converts this ContentAck to JSON.
         * @function toJSON
         * @memberof pb.ContentAck
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ContentAck.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ContentAck;
    })();

    pb.ServerInfo = (function() {

        /**
         * Properties of a ServerInfo.
         * @memberof pb
         * @interface IServerInfo
         * @property {string|null} [ip] ServerInfo ip
         * @property {number|null} [port] ServerInfo port
         */

        /**
         * Constructs a new ServerInfo.
         * @memberof pb
         * @classdesc Represents a ServerInfo.
         * @implements IServerInfo
         * @constructor
         * @param {pb.IServerInfo=} [properties] Properties to set
         */
        function ServerInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ServerInfo ip.
         * @member {string} ip
         * @memberof pb.ServerInfo
         * @instance
         */
        ServerInfo.prototype.ip = "";

        /**
         * ServerInfo port.
         * @member {number} port
         * @memberof pb.ServerInfo
         * @instance
         */
        ServerInfo.prototype.port = 0;

        /**
         * Encodes the specified ServerInfo message. Does not implicitly {@link pb.ServerInfo.verify|verify} messages.
         * @function encode
         * @memberof pb.ServerInfo
         * @static
         * @param {pb.IServerInfo} message ServerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServerInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ip != null && message.hasOwnProperty("ip"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.ip);
            if (message.port != null && message.hasOwnProperty("port"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.port);
            return writer;
        };

        /**
         * Decodes a ServerInfo message from the specified reader or buffer.
         * @function decode
         * @memberof pb.ServerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.ServerInfo} ServerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServerInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.ServerInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ip = reader.string();
                    break;
                case 2:
                    message.port = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Creates a ServerInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.ServerInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.ServerInfo} ServerInfo
         */
        ServerInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.ServerInfo)
                return object;
            var message = new $root.pb.ServerInfo();
            if (object.ip != null)
                message.ip = String(object.ip);
            if (object.port != null)
                message.port = object.port | 0;
            return message;
        };

        /**
         * Creates a plain object from a ServerInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.ServerInfo
         * @static
         * @param {pb.ServerInfo} message ServerInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ServerInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.ip = "";
                object.port = 0;
            }
            if (message.ip != null && message.hasOwnProperty("ip"))
                object.ip = message.ip;
            if (message.port != null && message.hasOwnProperty("port"))
                object.port = message.port;
            return object;
        };

        /**
         * Converts this ServerInfo to JSON.
         * @function toJSON
         * @memberof pb.ServerInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ServerInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ServerInfo;
    })();

    pb.PingAck = (function() {

        /**
         * Properties of a PingAck.
         * @memberof pb
         * @interface IPingAck
         */

        /**
         * Constructs a new PingAck.
         * @memberof pb
         * @classdesc Represents a PingAck.
         * @implements IPingAck
         * @constructor
         * @param {pb.IPingAck=} [properties] Properties to set
         */
        function PingAck(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Encodes the specified PingAck message. Does not implicitly {@link pb.PingAck.verify|verify} messages.
         * @function encode
         * @memberof pb.PingAck
         * @static
         * @param {pb.IPingAck} message PingAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PingAck.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Decodes a PingAck message from the specified reader or buffer.
         * @function decode
         * @memberof pb.PingAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.PingAck} PingAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PingAck.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.PingAck();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Creates a PingAck message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.PingAck
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.PingAck} PingAck
         */
        PingAck.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.PingAck)
                return object;
            return new $root.pb.PingAck();
        };

        /**
         * Creates a plain object from a PingAck message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.PingAck
         * @static
         * @param {pb.PingAck} message PingAck
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PingAck.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this PingAck to JSON.
         * @function toJSON
         * @memberof pb.PingAck
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PingAck.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PingAck;
    })();

    pb.LoginReq = (function() {

        /**
         * Properties of a LoginReq.
         * @memberof pb
         * @interface ILoginReq
         * @property {string|null} [version] LoginReq version
         * @property {string|null} [platform] LoginReq platform
         * @property {string|null} [uid] LoginReq uid
         */

        /**
         * Constructs a new LoginReq.
         * @memberof pb
         * @classdesc Represents a LoginReq.
         * @implements ILoginReq
         * @constructor
         * @param {pb.ILoginReq=} [properties] Properties to set
         */
        function LoginReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginReq version.
         * @member {string} version
         * @memberof pb.LoginReq
         * @instance
         */
        LoginReq.prototype.version = "";

        /**
         * LoginReq platform.
         * @member {string} platform
         * @memberof pb.LoginReq
         * @instance
         */
        LoginReq.prototype.platform = "";

        /**
         * LoginReq uid.
         * @member {string} uid
         * @memberof pb.LoginReq
         * @instance
         */
        LoginReq.prototype.uid = "";

        /**
         * Encodes the specified LoginReq message. Does not implicitly {@link pb.LoginReq.verify|verify} messages.
         * @function encode
         * @memberof pb.LoginReq
         * @static
         * @param {pb.ILoginReq} message LoginReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.version != null && message.hasOwnProperty("version"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.version);
            if (message.platform != null && message.hasOwnProperty("platform"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.platform);
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.uid);
            return writer;
        };

        /**
         * Decodes a LoginReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.LoginReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.LoginReq} LoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.LoginReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.version = reader.string();
                    break;
                case 2:
                    message.platform = reader.string();
                    break;
                case 3:
                    message.uid = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Creates a LoginReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.LoginReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.LoginReq} LoginReq
         */
        LoginReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.LoginReq)
                return object;
            var message = new $root.pb.LoginReq();
            if (object.version != null)
                message.version = String(object.version);
            if (object.platform != null)
                message.platform = String(object.platform);
            if (object.uid != null)
                message.uid = String(object.uid);
            return message;
        };

        /**
         * Creates a plain object from a LoginReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.LoginReq
         * @static
         * @param {pb.LoginReq} message LoginReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.version = "";
                object.platform = "";
                object.uid = "";
            }
            if (message.version != null && message.hasOwnProperty("version"))
                object.version = message.version;
            if (message.platform != null && message.hasOwnProperty("platform"))
                object.platform = message.platform;
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            return object;
        };

        /**
         * Converts this LoginReq to JSON.
         * @function toJSON
         * @memberof pb.LoginReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LoginReq;
    })();

    pb.LoginAck = (function() {

        /**
         * Properties of a LoginAck.
         * @memberof pb
         * @interface ILoginAck
         * @property {pb.ResultCode|null} [result] LoginAck result
         * @property {pb.IServerInfo|null} [server] LoginAck server
         * @property {string|null} [gameToken] LoginAck gameToken
         * @property {string|null} [gameSvcId] LoginAck gameSvcId
         */

        /**
         * Constructs a new LoginAck.
         * @memberof pb
         * @classdesc Represents a LoginAck.
         * @implements ILoginAck
         * @constructor
         * @param {pb.ILoginAck=} [properties] Properties to set
         */
        function LoginAck(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginAck result.
         * @member {pb.ResultCode} result
         * @memberof pb.LoginAck
         * @instance
         */
        LoginAck.prototype.result = 0;

        /**
         * LoginAck server.
         * @member {pb.IServerInfo|null|undefined} server
         * @memberof pb.LoginAck
         * @instance
         */
        LoginAck.prototype.server = null;

        /**
         * LoginAck gameToken.
         * @member {string} gameToken
         * @memberof pb.LoginAck
         * @instance
         */
        LoginAck.prototype.gameToken = "";

        /**
         * LoginAck gameSvcId.
         * @member {string} gameSvcId
         * @memberof pb.LoginAck
         * @instance
         */
        LoginAck.prototype.gameSvcId = "";

        /**
         * Encodes the specified LoginAck message. Does not implicitly {@link pb.LoginAck.verify|verify} messages.
         * @function encode
         * @memberof pb.LoginAck
         * @static
         * @param {pb.ILoginAck} message LoginAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginAck.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && message.hasOwnProperty("result"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
            if (message.server != null && message.hasOwnProperty("server"))
                $root.pb.ServerInfo.encode(message.server, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.gameToken != null && message.hasOwnProperty("gameToken"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.gameToken);
            if (message.gameSvcId != null && message.hasOwnProperty("gameSvcId"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.gameSvcId);
            return writer;
        };

        /**
         * Decodes a LoginAck message from the specified reader or buffer.
         * @function decode
         * @memberof pb.LoginAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.LoginAck} LoginAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginAck.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.LoginAck();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32();
                    break;
                case 2:
                    message.server = $root.pb.ServerInfo.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.gameToken = reader.string();
                    break;
                case 4:
                    message.gameSvcId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Creates a LoginAck message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.LoginAck
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.LoginAck} LoginAck
         */
        LoginAck.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.LoginAck)
                return object;
            var message = new $root.pb.LoginAck();
            switch (object.result) {
            case "NoError":
            case 0:
                message.result = 0;
                break;
            case "GateNotFound":
            case 1:
                message.result = 1;
                break;
            case "GateAddressError":
            case 2:
                message.result = 2;
                break;
            case "GameNotFound":
            case 3:
                message.result = 3;
                break;
            }
            if (object.server != null) {
                if (typeof object.server !== "object")
                    throw TypeError(".pb.LoginAck.server: object expected");
                message.server = $root.pb.ServerInfo.fromObject(object.server);
            }
            if (object.gameToken != null)
                message.gameToken = String(object.gameToken);
            if (object.gameSvcId != null)
                message.gameSvcId = String(object.gameSvcId);
            return message;
        };

        /**
         * Creates a plain object from a LoginAck message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.LoginAck
         * @static
         * @param {pb.LoginAck} message LoginAck
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginAck.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.result = options.enums === String ? "NoError" : 0;
                object.server = null;
                object.gameToken = "";
                object.gameSvcId = "";
            }
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = options.enums === String ? $root.pb.ResultCode[message.result] : message.result;
            if (message.server != null && message.hasOwnProperty("server"))
                object.server = $root.pb.ServerInfo.toObject(message.server, options);
            if (message.gameToken != null && message.hasOwnProperty("gameToken"))
                object.gameToken = message.gameToken;
            if (message.gameSvcId != null && message.hasOwnProperty("gameSvcId"))
                object.gameSvcId = message.gameSvcId;
            return object;
        };

        /**
         * Converts this LoginAck to JSON.
         * @function toJSON
         * @memberof pb.LoginAck
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginAck.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LoginAck;
    })();

    pb.VerifyReq = (function() {

        /**
         * Properties of a VerifyReq.
         * @memberof pb
         * @interface IVerifyReq
         * @property {string|null} [gameToken] VerifyReq gameToken
         * @property {string|null} [gameSvcId] VerifyReq gameSvcId
         * @property {number|Long|null} [accountId] VerifyReq accountId
         */

        /**
         * Constructs a new VerifyReq.
         * @memberof pb
         * @classdesc Represents a VerifyReq.
         * @implements IVerifyReq
         * @constructor
         * @param {pb.IVerifyReq=} [properties] Properties to set
         */
        function VerifyReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * VerifyReq gameToken.
         * @member {string} gameToken
         * @memberof pb.VerifyReq
         * @instance
         */
        VerifyReq.prototype.gameToken = "";

        /**
         * VerifyReq gameSvcId.
         * @member {string} gameSvcId
         * @memberof pb.VerifyReq
         * @instance
         */
        VerifyReq.prototype.gameSvcId = "";

        /**
         * VerifyReq accountId.
         * @member {number|Long} accountId
         * @memberof pb.VerifyReq
         * @instance
         */
        VerifyReq.prototype.accountId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Encodes the specified VerifyReq message. Does not implicitly {@link pb.VerifyReq.verify|verify} messages.
         * @function encode
         * @memberof pb.VerifyReq
         * @static
         * @param {pb.IVerifyReq} message VerifyReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VerifyReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.gameToken != null && message.hasOwnProperty("gameToken"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.gameToken);
            if (message.gameSvcId != null && message.hasOwnProperty("gameSvcId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.gameSvcId);
            if (message.accountId != null && message.hasOwnProperty("accountId"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.accountId);
            return writer;
        };

        /**
         * Decodes a VerifyReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.VerifyReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.VerifyReq} VerifyReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VerifyReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.VerifyReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.gameToken = reader.string();
                    break;
                case 2:
                    message.gameSvcId = reader.string();
                    break;
                case 3:
                    message.accountId = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Creates a VerifyReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.VerifyReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.VerifyReq} VerifyReq
         */
        VerifyReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.VerifyReq)
                return object;
            var message = new $root.pb.VerifyReq();
            if (object.gameToken != null)
                message.gameToken = String(object.gameToken);
            if (object.gameSvcId != null)
                message.gameSvcId = String(object.gameSvcId);
            if (object.accountId != null)
                if ($util.Long)
                    (message.accountId = $util.Long.fromValue(object.accountId)).unsigned = false;
                else if (typeof object.accountId === "string")
                    message.accountId = parseInt(object.accountId, 10);
                else if (typeof object.accountId === "number")
                    message.accountId = object.accountId;
                else if (typeof object.accountId === "object")
                    message.accountId = new $util.LongBits(object.accountId.low >>> 0, object.accountId.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a VerifyReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.VerifyReq
         * @static
         * @param {pb.VerifyReq} message VerifyReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        VerifyReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.gameToken = "";
                object.gameSvcId = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.accountId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.accountId = options.longs === String ? "0" : 0;
            }
            if (message.gameToken != null && message.hasOwnProperty("gameToken"))
                object.gameToken = message.gameToken;
            if (message.gameSvcId != null && message.hasOwnProperty("gameSvcId"))
                object.gameSvcId = message.gameSvcId;
            if (message.accountId != null && message.hasOwnProperty("accountId"))
                if (typeof message.accountId === "number")
                    object.accountId = options.longs === String ? String(message.accountId) : message.accountId;
                else
                    object.accountId = options.longs === String ? $util.Long.prototype.toString.call(message.accountId) : options.longs === Number ? new $util.LongBits(message.accountId.low >>> 0, message.accountId.high >>> 0).toNumber() : message.accountId;
            return object;
        };

        /**
         * Converts this VerifyReq to JSON.
         * @function toJSON
         * @memberof pb.VerifyReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        VerifyReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return VerifyReq;
    })();

    pb.VerifyAck = (function() {

        /**
         * Properties of a VerifyAck.
         * @memberof pb
         * @interface IVerifyAck
         * @property {pb.ResultCode|null} [result] VerifyAck result
         */

        /**
         * Constructs a new VerifyAck.
         * @memberof pb
         * @classdesc Represents a VerifyAck.
         * @implements IVerifyAck
         * @constructor
         * @param {pb.IVerifyAck=} [properties] Properties to set
         */
        function VerifyAck(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * VerifyAck result.
         * @member {pb.ResultCode} result
         * @memberof pb.VerifyAck
         * @instance
         */
        VerifyAck.prototype.result = 0;

        /**
         * Encodes the specified VerifyAck message. Does not implicitly {@link pb.VerifyAck.verify|verify} messages.
         * @function encode
         * @memberof pb.VerifyAck
         * @static
         * @param {pb.IVerifyAck} message VerifyAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VerifyAck.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && message.hasOwnProperty("result"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
            return writer;
        };

        /**
         * Decodes a VerifyAck message from the specified reader or buffer.
         * @function decode
         * @memberof pb.VerifyAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.VerifyAck} VerifyAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VerifyAck.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.VerifyAck();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Creates a VerifyAck message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.VerifyAck
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.VerifyAck} VerifyAck
         */
        VerifyAck.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.VerifyAck)
                return object;
            var message = new $root.pb.VerifyAck();
            switch (object.result) {
            case "NoError":
            case 0:
                message.result = 0;
                break;
            case "GateNotFound":
            case 1:
                message.result = 1;
                break;
            case "GateAddressError":
            case 2:
                message.result = 2;
                break;
            case "GameNotFound":
            case 3:
                message.result = 3;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a VerifyAck message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.VerifyAck
         * @static
         * @param {pb.VerifyAck} message VerifyAck
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        VerifyAck.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.result = options.enums === String ? "NoError" : 0;
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = options.enums === String ? $root.pb.ResultCode[message.result] : message.result;
            return object;
        };

        /**
         * Converts this VerifyAck to JSON.
         * @function toJSON
         * @memberof pb.VerifyAck
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        VerifyAck.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return VerifyAck;
    })();

    pb.UserCreate = (function() {

        /**
         * Properties of a UserCreate.
         * @memberof pb
         * @interface IUserCreate
         * @property {string|null} [name] UserCreate name
         * @property {number|null} [tempId] UserCreate tempId
         * @property {number|null} [serverId] UserCreate serverId
         * @property {string|null} [shareKey] UserCreate shareKey
         */

        /**
         * Constructs a new UserCreate.
         * @memberof pb
         * @classdesc Represents a UserCreate.
         * @implements IUserCreate
         * @constructor
         * @param {pb.IUserCreate=} [properties] Properties to set
         */
        function UserCreate(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserCreate name.
         * @member {string} name
         * @memberof pb.UserCreate
         * @instance
         */
        UserCreate.prototype.name = "";

        /**
         * UserCreate tempId.
         * @member {number} tempId
         * @memberof pb.UserCreate
         * @instance
         */
        UserCreate.prototype.tempId = 0;

        /**
         * UserCreate serverId.
         * @member {number} serverId
         * @memberof pb.UserCreate
         * @instance
         */
        UserCreate.prototype.serverId = 0;

        /**
         * UserCreate shareKey.
         * @member {string} shareKey
         * @memberof pb.UserCreate
         * @instance
         */
        UserCreate.prototype.shareKey = "";

        /**
         * Encodes the specified UserCreate message. Does not implicitly {@link pb.UserCreate.verify|verify} messages.
         * @function encode
         * @memberof pb.UserCreate
         * @static
         * @param {pb.IUserCreate} message UserCreate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserCreate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.tempId != null && message.hasOwnProperty("tempId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.tempId);
            if (message.serverId != null && message.hasOwnProperty("serverId"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.serverId);
            if (message.shareKey != null && message.hasOwnProperty("shareKey"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.shareKey);
            return writer;
        };

        /**
         * Decodes a UserCreate message from the specified reader or buffer.
         * @function decode
         * @memberof pb.UserCreate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.UserCreate} UserCreate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserCreate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.UserCreate();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.tempId = reader.int32();
                    break;
                case 4:
                    message.serverId = reader.int32();
                    break;
                case 5:
                    message.shareKey = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Creates a UserCreate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.UserCreate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.UserCreate} UserCreate
         */
        UserCreate.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.UserCreate)
                return object;
            var message = new $root.pb.UserCreate();
            if (object.name != null)
                message.name = String(object.name);
            if (object.tempId != null)
                message.tempId = object.tempId | 0;
            if (object.serverId != null)
                message.serverId = object.serverId | 0;
            if (object.shareKey != null)
                message.shareKey = String(object.shareKey);
            return message;
        };

        /**
         * Creates a plain object from a UserCreate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.UserCreate
         * @static
         * @param {pb.UserCreate} message UserCreate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserCreate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.name = "";
                object.tempId = 0;
                object.serverId = 0;
                object.shareKey = "";
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.tempId != null && message.hasOwnProperty("tempId"))
                object.tempId = message.tempId;
            if (message.serverId != null && message.hasOwnProperty("serverId"))
                object.serverId = message.serverId;
            if (message.shareKey != null && message.hasOwnProperty("shareKey"))
                object.shareKey = message.shareKey;
            return object;
        };

        /**
         * Converts this UserCreate to JSON.
         * @function toJSON
         * @memberof pb.UserCreate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserCreate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserCreate;
    })();

    pb.UserCreateResponse = (function() {

        /**
         * Properties of a UserCreateResponse.
         * @memberof pb
         * @interface IUserCreateResponse
         * @property {number|null} [retCode] UserCreateResponse retCode
         */

        /**
         * Constructs a new UserCreateResponse.
         * @memberof pb
         * @classdesc Represents a UserCreateResponse.
         * @implements IUserCreateResponse
         * @constructor
         * @param {pb.IUserCreateResponse=} [properties] Properties to set
         */
        function UserCreateResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserCreateResponse retCode.
         * @member {number} retCode
         * @memberof pb.UserCreateResponse
         * @instance
         */
        UserCreateResponse.prototype.retCode = 0;

        /**
         * Encodes the specified UserCreateResponse message. Does not implicitly {@link pb.UserCreateResponse.verify|verify} messages.
         * @function encode
         * @memberof pb.UserCreateResponse
         * @static
         * @param {pb.IUserCreateResponse} message UserCreateResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserCreateResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.retCode != null && message.hasOwnProperty("retCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.retCode);
            return writer;
        };

        /**
         * Decodes a UserCreateResponse message from the specified reader or buffer.
         * @function decode
         * @memberof pb.UserCreateResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.UserCreateResponse} UserCreateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserCreateResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.UserCreateResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.retCode = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Creates a UserCreateResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.UserCreateResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.UserCreateResponse} UserCreateResponse
         */
        UserCreateResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.UserCreateResponse)
                return object;
            var message = new $root.pb.UserCreateResponse();
            if (object.retCode != null)
                message.retCode = object.retCode | 0;
            return message;
        };

        /**
         * Creates a plain object from a UserCreateResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.UserCreateResponse
         * @static
         * @param {pb.UserCreateResponse} message UserCreateResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserCreateResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.retCode = 0;
            if (message.retCode != null && message.hasOwnProperty("retCode"))
                object.retCode = message.retCode;
            return object;
        };

        /**
         * Converts this UserCreateResponse to JSON.
         * @function toJSON
         * @memberof pb.UserCreateResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserCreateResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserCreateResponse;
    })();

    pb.GameEnter = (function() {

        /**
         * Properties of a GameEnter.
         * @memberof pb
         * @interface IGameEnter
         * @property {number|Long|null} [accId] GameEnter accId
         * @property {string|null} [loginKey] GameEnter loginKey
         * @property {number|null} [serverId] GameEnter serverId
         */

        /**
         * Constructs a new GameEnter.
         * @memberof pb
         * @classdesc Represents a GameEnter.
         * @implements IGameEnter
         * @constructor
         * @param {pb.IGameEnter=} [properties] Properties to set
         */
        function GameEnter(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameEnter accId.
         * @member {number|Long} accId
         * @memberof pb.GameEnter
         * @instance
         */
        GameEnter.prototype.accId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GameEnter loginKey.
         * @member {string} loginKey
         * @memberof pb.GameEnter
         * @instance
         */
        GameEnter.prototype.loginKey = "";

        /**
         * GameEnter serverId.
         * @member {number} serverId
         * @memberof pb.GameEnter
         * @instance
         */
        GameEnter.prototype.serverId = 0;

        /**
         * Encodes the specified GameEnter message. Does not implicitly {@link pb.GameEnter.verify|verify} messages.
         * @function encode
         * @memberof pb.GameEnter
         * @static
         * @param {pb.IGameEnter} message GameEnter message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameEnter.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.accId != null && message.hasOwnProperty("accId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.accId);
            if (message.loginKey != null && message.hasOwnProperty("loginKey"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.loginKey);
            if (message.serverId != null && message.hasOwnProperty("serverId"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.serverId);
            return writer;
        };

        /**
         * Decodes a GameEnter message from the specified reader or buffer.
         * @function decode
         * @memberof pb.GameEnter
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.GameEnter} GameEnter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameEnter.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.GameEnter();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.accId = reader.int64();
                    break;
                case 2:
                    message.loginKey = reader.string();
                    break;
                case 3:
                    message.serverId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Creates a GameEnter message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.GameEnter
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.GameEnter} GameEnter
         */
        GameEnter.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.GameEnter)
                return object;
            var message = new $root.pb.GameEnter();
            if (object.accId != null)
                if ($util.Long)
                    (message.accId = $util.Long.fromValue(object.accId)).unsigned = false;
                else if (typeof object.accId === "string")
                    message.accId = parseInt(object.accId, 10);
                else if (typeof object.accId === "number")
                    message.accId = object.accId;
                else if (typeof object.accId === "object")
                    message.accId = new $util.LongBits(object.accId.low >>> 0, object.accId.high >>> 0).toNumber();
            if (object.loginKey != null)
                message.loginKey = String(object.loginKey);
            if (object.serverId != null)
                message.serverId = object.serverId | 0;
            return message;
        };

        /**
         * Creates a plain object from a GameEnter message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.GameEnter
         * @static
         * @param {pb.GameEnter} message GameEnter
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameEnter.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.accId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.accId = options.longs === String ? "0" : 0;
                object.loginKey = "";
                object.serverId = 0;
            }
            if (message.accId != null && message.hasOwnProperty("accId"))
                if (typeof message.accId === "number")
                    object.accId = options.longs === String ? String(message.accId) : message.accId;
                else
                    object.accId = options.longs === String ? $util.Long.prototype.toString.call(message.accId) : options.longs === Number ? new $util.LongBits(message.accId.low >>> 0, message.accId.high >>> 0).toNumber() : message.accId;
            if (message.loginKey != null && message.hasOwnProperty("loginKey"))
                object.loginKey = message.loginKey;
            if (message.serverId != null && message.hasOwnProperty("serverId"))
                object.serverId = message.serverId;
            return object;
        };

        /**
         * Converts this GameEnter to JSON.
         * @function toJSON
         * @memberof pb.GameEnter
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameEnter.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameEnter;
    })();

    pb.GameEnterResponse = (function() {

        /**
         * Properties of a GameEnterResponse.
         * @memberof pb
         * @interface IGameEnterResponse
         * @property {number|null} [retCode] GameEnterResponse retCode
         * @property {number|Long|null} [userId] GameEnterResponse userId
         * @property {string|null} [nickName] GameEnterResponse nickName
         * @property {number|null} [tempId] GameEnterResponse tempId
         * @property {number|Long|null} [coin] GameEnterResponse coin
         * @property {number|Long|null} [diamond] GameEnterResponse diamond
         * @property {number|null} [vip] GameEnterResponse vip
         * @property {number|null} [vipScore] GameEnterResponse vipScore
         * @property {number|null} [ticket] GameEnterResponse ticket
         * @property {number|Long|null} [ticketReTime] GameEnterResponse ticketReTime
         * @property {string|null} [signName] GameEnterResponse signName
         * @property {number|null} [honor] GameEnterResponse honor
         * @property {string|null} [sign] GameEnterResponse sign
         * @property {number|Long|null} [lastExitTime] GameEnterResponse lastExitTime
         */

        /**
         * Constructs a new GameEnterResponse.
         * @memberof pb
         * @classdesc Represents a GameEnterResponse.
         * @implements IGameEnterResponse
         * @constructor
         * @param {pb.IGameEnterResponse=} [properties] Properties to set
         */
        function GameEnterResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameEnterResponse retCode.
         * @member {number} retCode
         * @memberof pb.GameEnterResponse
         * @instance
         */
        GameEnterResponse.prototype.retCode = 0;

        /**
         * GameEnterResponse userId.
         * @member {number|Long} userId
         * @memberof pb.GameEnterResponse
         * @instance
         */
        GameEnterResponse.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GameEnterResponse nickName.
         * @member {string} nickName
         * @memberof pb.GameEnterResponse
         * @instance
         */
        GameEnterResponse.prototype.nickName = "";

        /**
         * GameEnterResponse tempId.
         * @member {number} tempId
         * @memberof pb.GameEnterResponse
         * @instance
         */
        GameEnterResponse.prototype.tempId = 0;

        /**
         * GameEnterResponse coin.
         * @member {number|Long} coin
         * @memberof pb.GameEnterResponse
         * @instance
         */
        GameEnterResponse.prototype.coin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GameEnterResponse diamond.
         * @member {number|Long} diamond
         * @memberof pb.GameEnterResponse
         * @instance
         */
        GameEnterResponse.prototype.diamond = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GameEnterResponse vip.
         * @member {number} vip
         * @memberof pb.GameEnterResponse
         * @instance
         */
        GameEnterResponse.prototype.vip = 0;

        /**
         * GameEnterResponse vipScore.
         * @member {number} vipScore
         * @memberof pb.GameEnterResponse
         * @instance
         */
        GameEnterResponse.prototype.vipScore = 0;

        /**
         * GameEnterResponse ticket.
         * @member {number} ticket
         * @memberof pb.GameEnterResponse
         * @instance
         */
        GameEnterResponse.prototype.ticket = 0;

        /**
         * GameEnterResponse ticketReTime.
         * @member {number|Long} ticketReTime
         * @memberof pb.GameEnterResponse
         * @instance
         */
        GameEnterResponse.prototype.ticketReTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GameEnterResponse signName.
         * @member {string} signName
         * @memberof pb.GameEnterResponse
         * @instance
         */
        GameEnterResponse.prototype.signName = "";

        /**
         * GameEnterResponse honor.
         * @member {number} honor
         * @memberof pb.GameEnterResponse
         * @instance
         */
        GameEnterResponse.prototype.honor = 0;

        /**
         * GameEnterResponse sign.
         * @member {string} sign
         * @memberof pb.GameEnterResponse
         * @instance
         */
        GameEnterResponse.prototype.sign = "";

        /**
         * GameEnterResponse lastExitTime.
         * @member {number|Long} lastExitTime
         * @memberof pb.GameEnterResponse
         * @instance
         */
        GameEnterResponse.prototype.lastExitTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Encodes the specified GameEnterResponse message. Does not implicitly {@link pb.GameEnterResponse.verify|verify} messages.
         * @function encode
         * @memberof pb.GameEnterResponse
         * @static
         * @param {pb.IGameEnterResponse} message GameEnterResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameEnterResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.retCode != null && message.hasOwnProperty("retCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.retCode);
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.userId);
            if (message.nickName != null && message.hasOwnProperty("nickName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.nickName);
            if (message.tempId != null && message.hasOwnProperty("tempId"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.tempId);
            if (message.coin != null && message.hasOwnProperty("coin"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.coin);
            if (message.diamond != null && message.hasOwnProperty("diamond"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.diamond);
            if (message.vip != null && message.hasOwnProperty("vip"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.vip);
            if (message.vipScore != null && message.hasOwnProperty("vipScore"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.vipScore);
            if (message.ticket != null && message.hasOwnProperty("ticket"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.ticket);
            if (message.ticketReTime != null && message.hasOwnProperty("ticketReTime"))
                writer.uint32(/* id 10, wireType 0 =*/80).int64(message.ticketReTime);
            if (message.signName != null && message.hasOwnProperty("signName"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.signName);
            if (message.honor != null && message.hasOwnProperty("honor"))
                writer.uint32(/* id 12, wireType 0 =*/96).int32(message.honor);
            if (message.sign != null && message.hasOwnProperty("sign"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.sign);
            if (message.lastExitTime != null && message.hasOwnProperty("lastExitTime"))
                writer.uint32(/* id 14, wireType 0 =*/112).int64(message.lastExitTime);
            return writer;
        };

        /**
         * Decodes a GameEnterResponse message from the specified reader or buffer.
         * @function decode
         * @memberof pb.GameEnterResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.GameEnterResponse} GameEnterResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameEnterResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.GameEnterResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.retCode = reader.int32();
                    break;
                case 2:
                    message.userId = reader.int64();
                    break;
                case 3:
                    message.nickName = reader.string();
                    break;
                case 4:
                    message.tempId = reader.int32();
                    break;
                case 5:
                    message.coin = reader.int64();
                    break;
                case 6:
                    message.diamond = reader.int64();
                    break;
                case 7:
                    message.vip = reader.int32();
                    break;
                case 8:
                    message.vipScore = reader.int32();
                    break;
                case 9:
                    message.ticket = reader.int32();
                    break;
                case 10:
                    message.ticketReTime = reader.int64();
                    break;
                case 11:
                    message.signName = reader.string();
                    break;
                case 12:
                    message.honor = reader.int32();
                    break;
                case 13:
                    message.sign = reader.string();
                    break;
                case 14:
                    message.lastExitTime = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Creates a GameEnterResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.GameEnterResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.GameEnterResponse} GameEnterResponse
         */
        GameEnterResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.GameEnterResponse)
                return object;
            var message = new $root.pb.GameEnterResponse();
            if (object.retCode != null)
                message.retCode = object.retCode | 0;
            if (object.userId != null)
                if ($util.Long)
                    (message.userId = $util.Long.fromValue(object.userId)).unsigned = false;
                else if (typeof object.userId === "string")
                    message.userId = parseInt(object.userId, 10);
                else if (typeof object.userId === "number")
                    message.userId = object.userId;
                else if (typeof object.userId === "object")
                    message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber();
            if (object.nickName != null)
                message.nickName = String(object.nickName);
            if (object.tempId != null)
                message.tempId = object.tempId | 0;
            if (object.coin != null)
                if ($util.Long)
                    (message.coin = $util.Long.fromValue(object.coin)).unsigned = false;
                else if (typeof object.coin === "string")
                    message.coin = parseInt(object.coin, 10);
                else if (typeof object.coin === "number")
                    message.coin = object.coin;
                else if (typeof object.coin === "object")
                    message.coin = new $util.LongBits(object.coin.low >>> 0, object.coin.high >>> 0).toNumber();
            if (object.diamond != null)
                if ($util.Long)
                    (message.diamond = $util.Long.fromValue(object.diamond)).unsigned = false;
                else if (typeof object.diamond === "string")
                    message.diamond = parseInt(object.diamond, 10);
                else if (typeof object.diamond === "number")
                    message.diamond = object.diamond;
                else if (typeof object.diamond === "object")
                    message.diamond = new $util.LongBits(object.diamond.low >>> 0, object.diamond.high >>> 0).toNumber();
            if (object.vip != null)
                message.vip = object.vip | 0;
            if (object.vipScore != null)
                message.vipScore = object.vipScore | 0;
            if (object.ticket != null)
                message.ticket = object.ticket | 0;
            if (object.ticketReTime != null)
                if ($util.Long)
                    (message.ticketReTime = $util.Long.fromValue(object.ticketReTime)).unsigned = false;
                else if (typeof object.ticketReTime === "string")
                    message.ticketReTime = parseInt(object.ticketReTime, 10);
                else if (typeof object.ticketReTime === "number")
                    message.ticketReTime = object.ticketReTime;
                else if (typeof object.ticketReTime === "object")
                    message.ticketReTime = new $util.LongBits(object.ticketReTime.low >>> 0, object.ticketReTime.high >>> 0).toNumber();
            if (object.signName != null)
                message.signName = String(object.signName);
            if (object.honor != null)
                message.honor = object.honor | 0;
            if (object.sign != null)
                message.sign = String(object.sign);
            if (object.lastExitTime != null)
                if ($util.Long)
                    (message.lastExitTime = $util.Long.fromValue(object.lastExitTime)).unsigned = false;
                else if (typeof object.lastExitTime === "string")
                    message.lastExitTime = parseInt(object.lastExitTime, 10);
                else if (typeof object.lastExitTime === "number")
                    message.lastExitTime = object.lastExitTime;
                else if (typeof object.lastExitTime === "object")
                    message.lastExitTime = new $util.LongBits(object.lastExitTime.low >>> 0, object.lastExitTime.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a GameEnterResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.GameEnterResponse
         * @static
         * @param {pb.GameEnterResponse} message GameEnterResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameEnterResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.retCode = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.userId = options.longs === String ? "0" : 0;
                object.nickName = "";
                object.tempId = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.coin = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.coin = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.diamond = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.diamond = options.longs === String ? "0" : 0;
                object.vip = 0;
                object.vipScore = 0;
                object.ticket = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.ticketReTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.ticketReTime = options.longs === String ? "0" : 0;
                object.signName = "";
                object.honor = 0;
                object.sign = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.lastExitTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.lastExitTime = options.longs === String ? "0" : 0;
            }
            if (message.retCode != null && message.hasOwnProperty("retCode"))
                object.retCode = message.retCode;
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (typeof message.userId === "number")
                    object.userId = options.longs === String ? String(message.userId) : message.userId;
                else
                    object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
            if (message.nickName != null && message.hasOwnProperty("nickName"))
                object.nickName = message.nickName;
            if (message.tempId != null && message.hasOwnProperty("tempId"))
                object.tempId = message.tempId;
            if (message.coin != null && message.hasOwnProperty("coin"))
                if (typeof message.coin === "number")
                    object.coin = options.longs === String ? String(message.coin) : message.coin;
                else
                    object.coin = options.longs === String ? $util.Long.prototype.toString.call(message.coin) : options.longs === Number ? new $util.LongBits(message.coin.low >>> 0, message.coin.high >>> 0).toNumber() : message.coin;
            if (message.diamond != null && message.hasOwnProperty("diamond"))
                if (typeof message.diamond === "number")
                    object.diamond = options.longs === String ? String(message.diamond) : message.diamond;
                else
                    object.diamond = options.longs === String ? $util.Long.prototype.toString.call(message.diamond) : options.longs === Number ? new $util.LongBits(message.diamond.low >>> 0, message.diamond.high >>> 0).toNumber() : message.diamond;
            if (message.vip != null && message.hasOwnProperty("vip"))
                object.vip = message.vip;
            if (message.vipScore != null && message.hasOwnProperty("vipScore"))
                object.vipScore = message.vipScore;
            if (message.ticket != null && message.hasOwnProperty("ticket"))
                object.ticket = message.ticket;
            if (message.ticketReTime != null && message.hasOwnProperty("ticketReTime"))
                if (typeof message.ticketReTime === "number")
                    object.ticketReTime = options.longs === String ? String(message.ticketReTime) : message.ticketReTime;
                else
                    object.ticketReTime = options.longs === String ? $util.Long.prototype.toString.call(message.ticketReTime) : options.longs === Number ? new $util.LongBits(message.ticketReTime.low >>> 0, message.ticketReTime.high >>> 0).toNumber() : message.ticketReTime;
            if (message.signName != null && message.hasOwnProperty("signName"))
                object.signName = message.signName;
            if (message.honor != null && message.hasOwnProperty("honor"))
                object.honor = message.honor;
            if (message.sign != null && message.hasOwnProperty("sign"))
                object.sign = message.sign;
            if (message.lastExitTime != null && message.hasOwnProperty("lastExitTime"))
                if (typeof message.lastExitTime === "number")
                    object.lastExitTime = options.longs === String ? String(message.lastExitTime) : message.lastExitTime;
                else
                    object.lastExitTime = options.longs === String ? $util.Long.prototype.toString.call(message.lastExitTime) : options.longs === Number ? new $util.LongBits(message.lastExitTime.low >>> 0, message.lastExitTime.high >>> 0).toNumber() : message.lastExitTime;
            return object;
        };

        /**
         * Converts this GameEnterResponse to JSON.
         * @function toJSON
         * @memberof pb.GameEnterResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameEnterResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameEnterResponse;
    })();

    pb.NetGetServerDate = (function() {

        /**
         * Properties of a NetGetServerDate.
         * @memberof pb
         * @interface INetGetServerDate
         */

        /**
         * Constructs a new NetGetServerDate.
         * @memberof pb
         * @classdesc Represents a NetGetServerDate.
         * @implements INetGetServerDate
         * @constructor
         * @param {pb.INetGetServerDate=} [properties] Properties to set
         */
        function NetGetServerDate(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Encodes the specified NetGetServerDate message. Does not implicitly {@link pb.NetGetServerDate.verify|verify} messages.
         * @function encode
         * @memberof pb.NetGetServerDate
         * @static
         * @param {pb.INetGetServerDate} message NetGetServerDate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NetGetServerDate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Decodes a NetGetServerDate message from the specified reader or buffer.
         * @function decode
         * @memberof pb.NetGetServerDate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.NetGetServerDate} NetGetServerDate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NetGetServerDate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.NetGetServerDate();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Creates a NetGetServerDate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.NetGetServerDate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.NetGetServerDate} NetGetServerDate
         */
        NetGetServerDate.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.NetGetServerDate)
                return object;
            return new $root.pb.NetGetServerDate();
        };

        /**
         * Creates a plain object from a NetGetServerDate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.NetGetServerDate
         * @static
         * @param {pb.NetGetServerDate} message NetGetServerDate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NetGetServerDate.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this NetGetServerDate to JSON.
         * @function toJSON
         * @memberof pb.NetGetServerDate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NetGetServerDate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return NetGetServerDate;
    })();

    pb.AccountLogin = (function() {

        /**
         * Properties of an AccountLogin.
         * @memberof pb
         * @interface IAccountLogin
         * @property {string|null} [account] AccountLogin account
         * @property {string|null} [pwd] AccountLogin pwd
         * @property {number|null} [channelId] AccountLogin channelId
         */

        /**
         * Constructs a new AccountLogin.
         * @memberof pb
         * @classdesc Represents an AccountLogin.
         * @implements IAccountLogin
         * @constructor
         * @param {pb.IAccountLogin=} [properties] Properties to set
         */
        function AccountLogin(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AccountLogin account.
         * @member {string} account
         * @memberof pb.AccountLogin
         * @instance
         */
        AccountLogin.prototype.account = "";

        /**
         * AccountLogin pwd.
         * @member {string} pwd
         * @memberof pb.AccountLogin
         * @instance
         */
        AccountLogin.prototype.pwd = "";

        /**
         * AccountLogin channelId.
         * @member {number} channelId
         * @memberof pb.AccountLogin
         * @instance
         */
        AccountLogin.prototype.channelId = 0;

        /**
         * Encodes the specified AccountLogin message. Does not implicitly {@link pb.AccountLogin.verify|verify} messages.
         * @function encode
         * @memberof pb.AccountLogin
         * @static
         * @param {pb.IAccountLogin} message AccountLogin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccountLogin.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.account != null && message.hasOwnProperty("account"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.account);
            if (message.pwd != null && message.hasOwnProperty("pwd"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.pwd);
            if (message.channelId != null && message.hasOwnProperty("channelId"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.channelId);
            return writer;
        };

        /**
         * Decodes an AccountLogin message from the specified reader or buffer.
         * @function decode
         * @memberof pb.AccountLogin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.AccountLogin} AccountLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccountLogin.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.AccountLogin();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.account = reader.string();
                    break;
                case 2:
                    message.pwd = reader.string();
                    break;
                case 3:
                    message.channelId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Creates an AccountLogin message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.AccountLogin
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.AccountLogin} AccountLogin
         */
        AccountLogin.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.AccountLogin)
                return object;
            var message = new $root.pb.AccountLogin();
            if (object.account != null)
                message.account = String(object.account);
            if (object.pwd != null)
                message.pwd = String(object.pwd);
            if (object.channelId != null)
                message.channelId = object.channelId | 0;
            return message;
        };

        /**
         * Creates a plain object from an AccountLogin message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.AccountLogin
         * @static
         * @param {pb.AccountLogin} message AccountLogin
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AccountLogin.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.account = "";
                object.pwd = "";
                object.channelId = 0;
            }
            if (message.account != null && message.hasOwnProperty("account"))
                object.account = message.account;
            if (message.pwd != null && message.hasOwnProperty("pwd"))
                object.pwd = message.pwd;
            if (message.channelId != null && message.hasOwnProperty("channelId"))
                object.channelId = message.channelId;
            return object;
        };

        /**
         * Converts this AccountLogin to JSON.
         * @function toJSON
         * @memberof pb.AccountLogin
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AccountLogin.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AccountLogin;
    })();

    pb.LoginResponse = (function() {

        /**
         * Properties of a LoginResponse.
         * @memberof pb
         * @interface ILoginResponse
         * @property {number|null} [retCode] LoginResponse retCode
         * @property {number|Long|null} [accId] LoginResponse accId
         * @property {string|null} [account] LoginResponse account
         * @property {string|null} [deviceId] LoginResponse deviceId
         * @property {number|null} [loginTimes] LoginResponse loginTimes
         * @property {string|null} [loginKey] LoginResponse loginKey
         * @property {string|null} [userServers] LoginResponse userServers
         * @property {string|null} [sdkData] LoginResponse sdkData
         * @property {string|null} [exData] LoginResponse exData
         * @property {string|null} [nickName] LoginResponse nickName
         * @property {string|null} [icon] LoginResponse icon
         */

        /**
         * Constructs a new LoginResponse.
         * @memberof pb
         * @classdesc Represents a LoginResponse.
         * @implements ILoginResponse
         * @constructor
         * @param {pb.ILoginResponse=} [properties] Properties to set
         */
        function LoginResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginResponse retCode.
         * @member {number} retCode
         * @memberof pb.LoginResponse
         * @instance
         */
        LoginResponse.prototype.retCode = 0;

        /**
         * LoginResponse accId.
         * @member {number|Long} accId
         * @memberof pb.LoginResponse
         * @instance
         */
        LoginResponse.prototype.accId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * LoginResponse account.
         * @member {string} account
         * @memberof pb.LoginResponse
         * @instance
         */
        LoginResponse.prototype.account = "";

        /**
         * LoginResponse deviceId.
         * @member {string} deviceId
         * @memberof pb.LoginResponse
         * @instance
         */
        LoginResponse.prototype.deviceId = "";

        /**
         * LoginResponse loginTimes.
         * @member {number} loginTimes
         * @memberof pb.LoginResponse
         * @instance
         */
        LoginResponse.prototype.loginTimes = 0;

        /**
         * LoginResponse loginKey.
         * @member {string} loginKey
         * @memberof pb.LoginResponse
         * @instance
         */
        LoginResponse.prototype.loginKey = "";

        /**
         * LoginResponse userServers.
         * @member {string} userServers
         * @memberof pb.LoginResponse
         * @instance
         */
        LoginResponse.prototype.userServers = "";

        /**
         * LoginResponse sdkData.
         * @member {string} sdkData
         * @memberof pb.LoginResponse
         * @instance
         */
        LoginResponse.prototype.sdkData = "";

        /**
         * LoginResponse exData.
         * @member {string} exData
         * @memberof pb.LoginResponse
         * @instance
         */
        LoginResponse.prototype.exData = "";

        /**
         * LoginResponse nickName.
         * @member {string} nickName
         * @memberof pb.LoginResponse
         * @instance
         */
        LoginResponse.prototype.nickName = "";

        /**
         * LoginResponse icon.
         * @member {string} icon
         * @memberof pb.LoginResponse
         * @instance
         */
        LoginResponse.prototype.icon = "";

        /**
         * Encodes the specified LoginResponse message. Does not implicitly {@link pb.LoginResponse.verify|verify} messages.
         * @function encode
         * @memberof pb.LoginResponse
         * @static
         * @param {pb.ILoginResponse} message LoginResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.retCode != null && message.hasOwnProperty("retCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.retCode);
            if (message.accId != null && message.hasOwnProperty("accId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.accId);
            if (message.account != null && message.hasOwnProperty("account"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.account);
            if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.deviceId);
            if (message.loginTimes != null && message.hasOwnProperty("loginTimes"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.loginTimes);
            if (message.loginKey != null && message.hasOwnProperty("loginKey"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.loginKey);
            if (message.userServers != null && message.hasOwnProperty("userServers"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.userServers);
            if (message.sdkData != null && message.hasOwnProperty("sdkData"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.sdkData);
            if (message.exData != null && message.hasOwnProperty("exData"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.exData);
            if (message.nickName != null && message.hasOwnProperty("nickName"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.nickName);
            if (message.icon != null && message.hasOwnProperty("icon"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.icon);
            return writer;
        };

        /**
         * Decodes a LoginResponse message from the specified reader or buffer.
         * @function decode
         * @memberof pb.LoginResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.LoginResponse} LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.LoginResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.retCode = reader.int32();
                    break;
                case 2:
                    message.accId = reader.int64();
                    break;
                case 3:
                    message.account = reader.string();
                    break;
                case 4:
                    message.deviceId = reader.string();
                    break;
                case 5:
                    message.loginTimes = reader.int32();
                    break;
                case 6:
                    message.loginKey = reader.string();
                    break;
                case 7:
                    message.userServers = reader.string();
                    break;
                case 8:
                    message.sdkData = reader.string();
                    break;
                case 9:
                    message.exData = reader.string();
                    break;
                case 10:
                    message.nickName = reader.string();
                    break;
                case 11:
                    message.icon = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Creates a LoginResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.LoginResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.LoginResponse} LoginResponse
         */
        LoginResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.LoginResponse)
                return object;
            var message = new $root.pb.LoginResponse();
            if (object.retCode != null)
                message.retCode = object.retCode | 0;
            if (object.accId != null)
                if ($util.Long)
                    (message.accId = $util.Long.fromValue(object.accId)).unsigned = false;
                else if (typeof object.accId === "string")
                    message.accId = parseInt(object.accId, 10);
                else if (typeof object.accId === "number")
                    message.accId = object.accId;
                else if (typeof object.accId === "object")
                    message.accId = new $util.LongBits(object.accId.low >>> 0, object.accId.high >>> 0).toNumber();
            if (object.account != null)
                message.account = String(object.account);
            if (object.deviceId != null)
                message.deviceId = String(object.deviceId);
            if (object.loginTimes != null)
                message.loginTimes = object.loginTimes | 0;
            if (object.loginKey != null)
                message.loginKey = String(object.loginKey);
            if (object.userServers != null)
                message.userServers = String(object.userServers);
            if (object.sdkData != null)
                message.sdkData = String(object.sdkData);
            if (object.exData != null)
                message.exData = String(object.exData);
            if (object.nickName != null)
                message.nickName = String(object.nickName);
            if (object.icon != null)
                message.icon = String(object.icon);
            return message;
        };

        /**
         * Creates a plain object from a LoginResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.LoginResponse
         * @static
         * @param {pb.LoginResponse} message LoginResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.retCode = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.accId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.accId = options.longs === String ? "0" : 0;
                object.account = "";
                object.deviceId = "";
                object.loginTimes = 0;
                object.loginKey = "";
                object.userServers = "";
                object.sdkData = "";
                object.exData = "";
                object.nickName = "";
                object.icon = "";
            }
            if (message.retCode != null && message.hasOwnProperty("retCode"))
                object.retCode = message.retCode;
            if (message.accId != null && message.hasOwnProperty("accId"))
                if (typeof message.accId === "number")
                    object.accId = options.longs === String ? String(message.accId) : message.accId;
                else
                    object.accId = options.longs === String ? $util.Long.prototype.toString.call(message.accId) : options.longs === Number ? new $util.LongBits(message.accId.low >>> 0, message.accId.high >>> 0).toNumber() : message.accId;
            if (message.account != null && message.hasOwnProperty("account"))
                object.account = message.account;
            if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                object.deviceId = message.deviceId;
            if (message.loginTimes != null && message.hasOwnProperty("loginTimes"))
                object.loginTimes = message.loginTimes;
            if (message.loginKey != null && message.hasOwnProperty("loginKey"))
                object.loginKey = message.loginKey;
            if (message.userServers != null && message.hasOwnProperty("userServers"))
                object.userServers = message.userServers;
            if (message.sdkData != null && message.hasOwnProperty("sdkData"))
                object.sdkData = message.sdkData;
            if (message.exData != null && message.hasOwnProperty("exData"))
                object.exData = message.exData;
            if (message.nickName != null && message.hasOwnProperty("nickName"))
                object.nickName = message.nickName;
            if (message.icon != null && message.hasOwnProperty("icon"))
                object.icon = message.icon;
            return object;
        };

        /**
         * Converts this LoginResponse to JSON.
         * @function toJSON
         * @memberof pb.LoginResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LoginResponse;
    })();

    pb.AccountLoginBySdk = (function() {

        /**
         * Properties of an AccountLoginBySdk.
         * @memberof pb
         * @interface IAccountLoginBySdk
         * @property {string|null} [channelId] AccountLoginBySdk channelId
         * @property {string|null} [sdkData] AccountLoginBySdk sdkData
         * @property {string|null} [deviceId] AccountLoginBySdk deviceId
         */

        /**
         * Constructs a new AccountLoginBySdk.
         * @memberof pb
         * @classdesc Represents an AccountLoginBySdk.
         * @implements IAccountLoginBySdk
         * @constructor
         * @param {pb.IAccountLoginBySdk=} [properties] Properties to set
         */
        function AccountLoginBySdk(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AccountLoginBySdk channelId.
         * @member {string} channelId
         * @memberof pb.AccountLoginBySdk
         * @instance
         */
        AccountLoginBySdk.prototype.channelId = "";

        /**
         * AccountLoginBySdk sdkData.
         * @member {string} sdkData
         * @memberof pb.AccountLoginBySdk
         * @instance
         */
        AccountLoginBySdk.prototype.sdkData = "";

        /**
         * AccountLoginBySdk deviceId.
         * @member {string} deviceId
         * @memberof pb.AccountLoginBySdk
         * @instance
         */
        AccountLoginBySdk.prototype.deviceId = "";

        /**
         * Encodes the specified AccountLoginBySdk message. Does not implicitly {@link pb.AccountLoginBySdk.verify|verify} messages.
         * @function encode
         * @memberof pb.AccountLoginBySdk
         * @static
         * @param {pb.IAccountLoginBySdk} message AccountLoginBySdk message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccountLoginBySdk.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.channelId != null && message.hasOwnProperty("channelId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.channelId);
            if (message.sdkData != null && message.hasOwnProperty("sdkData"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.sdkData);
            if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.deviceId);
            return writer;
        };

        /**
         * Decodes an AccountLoginBySdk message from the specified reader or buffer.
         * @function decode
         * @memberof pb.AccountLoginBySdk
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.AccountLoginBySdk} AccountLoginBySdk
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccountLoginBySdk.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.AccountLoginBySdk();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.channelId = reader.string();
                    break;
                case 2:
                    message.sdkData = reader.string();
                    break;
                case 3:
                    message.deviceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Creates an AccountLoginBySdk message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.AccountLoginBySdk
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.AccountLoginBySdk} AccountLoginBySdk
         */
        AccountLoginBySdk.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.AccountLoginBySdk)
                return object;
            var message = new $root.pb.AccountLoginBySdk();
            if (object.channelId != null)
                message.channelId = String(object.channelId);
            if (object.sdkData != null)
                message.sdkData = String(object.sdkData);
            if (object.deviceId != null)
                message.deviceId = String(object.deviceId);
            return message;
        };

        /**
         * Creates a plain object from an AccountLoginBySdk message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.AccountLoginBySdk
         * @static
         * @param {pb.AccountLoginBySdk} message AccountLoginBySdk
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AccountLoginBySdk.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.channelId = "";
                object.sdkData = "";
                object.deviceId = "";
            }
            if (message.channelId != null && message.hasOwnProperty("channelId"))
                object.channelId = message.channelId;
            if (message.sdkData != null && message.hasOwnProperty("sdkData"))
                object.sdkData = message.sdkData;
            if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                object.deviceId = message.deviceId;
            return object;
        };

        /**
         * Converts this AccountLoginBySdk to JSON.
         * @function toJSON
         * @memberof pb.AccountLoginBySdk
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AccountLoginBySdk.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AccountLoginBySdk;
    })();

    pb.AccountRegister = (function() {

        /**
         * Properties of an AccountRegister.
         * @memberof pb
         * @interface IAccountRegister
         * @property {string|null} [account] AccountRegister account
         * @property {string|null} [pwd] AccountRegister pwd
         * @property {string|null} [deviceId] AccountRegister deviceId
         * @property {number|null} [channelId] AccountRegister channelId
         * @property {string|null} [platform] AccountRegister platform
         */

        /**
         * Constructs a new AccountRegister.
         * @memberof pb
         * @classdesc Represents an AccountRegister.
         * @implements IAccountRegister
         * @constructor
         * @param {pb.IAccountRegister=} [properties] Properties to set
         */
        function AccountRegister(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AccountRegister account.
         * @member {string} account
         * @memberof pb.AccountRegister
         * @instance
         */
        AccountRegister.prototype.account = "";

        /**
         * AccountRegister pwd.
         * @member {string} pwd
         * @memberof pb.AccountRegister
         * @instance
         */
        AccountRegister.prototype.pwd = "";

        /**
         * AccountRegister deviceId.
         * @member {string} deviceId
         * @memberof pb.AccountRegister
         * @instance
         */
        AccountRegister.prototype.deviceId = "";

        /**
         * AccountRegister channelId.
         * @member {number} channelId
         * @memberof pb.AccountRegister
         * @instance
         */
        AccountRegister.prototype.channelId = 0;

        /**
         * AccountRegister platform.
         * @member {string} platform
         * @memberof pb.AccountRegister
         * @instance
         */
        AccountRegister.prototype.platform = "";

        /**
         * Encodes the specified AccountRegister message. Does not implicitly {@link pb.AccountRegister.verify|verify} messages.
         * @function encode
         * @memberof pb.AccountRegister
         * @static
         * @param {pb.IAccountRegister} message AccountRegister message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccountRegister.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.account != null && message.hasOwnProperty("account"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.account);
            if (message.pwd != null && message.hasOwnProperty("pwd"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.pwd);
            if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.deviceId);
            if (message.channelId != null && message.hasOwnProperty("channelId"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.channelId);
            if (message.platform != null && message.hasOwnProperty("platform"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.platform);
            return writer;
        };

        /**
         * Decodes an AccountRegister message from the specified reader or buffer.
         * @function decode
         * @memberof pb.AccountRegister
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.AccountRegister} AccountRegister
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccountRegister.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.AccountRegister();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.account = reader.string();
                    break;
                case 2:
                    message.pwd = reader.string();
                    break;
                case 3:
                    message.deviceId = reader.string();
                    break;
                case 4:
                    message.channelId = reader.int32();
                    break;
                case 5:
                    message.platform = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Creates an AccountRegister message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.AccountRegister
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.AccountRegister} AccountRegister
         */
        AccountRegister.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.AccountRegister)
                return object;
            var message = new $root.pb.AccountRegister();
            if (object.account != null)
                message.account = String(object.account);
            if (object.pwd != null)
                message.pwd = String(object.pwd);
            if (object.deviceId != null)
                message.deviceId = String(object.deviceId);
            if (object.channelId != null)
                message.channelId = object.channelId | 0;
            if (object.platform != null)
                message.platform = String(object.platform);
            return message;
        };

        /**
         * Creates a plain object from an AccountRegister message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.AccountRegister
         * @static
         * @param {pb.AccountRegister} message AccountRegister
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AccountRegister.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.account = "";
                object.pwd = "";
                object.deviceId = "";
                object.channelId = 0;
                object.platform = "";
            }
            if (message.account != null && message.hasOwnProperty("account"))
                object.account = message.account;
            if (message.pwd != null && message.hasOwnProperty("pwd"))
                object.pwd = message.pwd;
            if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                object.deviceId = message.deviceId;
            if (message.channelId != null && message.hasOwnProperty("channelId"))
                object.channelId = message.channelId;
            if (message.platform != null && message.hasOwnProperty("platform"))
                object.platform = message.platform;
            return object;
        };

        /**
         * Converts this AccountRegister to JSON.
         * @function toJSON
         * @memberof pb.AccountRegister
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AccountRegister.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AccountRegister;
    })();

    pb.SvrListGet = (function() {

        /**
         * Properties of a SvrListGet.
         * @memberof pb
         * @interface ISvrListGet
         * @property {boolean|null} [isTest] SvrListGet isTest
         */

        /**
         * Constructs a new SvrListGet.
         * @memberof pb
         * @classdesc Represents a SvrListGet.
         * @implements ISvrListGet
         * @constructor
         * @param {pb.ISvrListGet=} [properties] Properties to set
         */
        function SvrListGet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SvrListGet isTest.
         * @member {boolean} isTest
         * @memberof pb.SvrListGet
         * @instance
         */
        SvrListGet.prototype.isTest = false;

        /**
         * Encodes the specified SvrListGet message. Does not implicitly {@link pb.SvrListGet.verify|verify} messages.
         * @function encode
         * @memberof pb.SvrListGet
         * @static
         * @param {pb.ISvrListGet} message SvrListGet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SvrListGet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.isTest != null && message.hasOwnProperty("isTest"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.isTest);
            return writer;
        };

        /**
         * Decodes a SvrListGet message from the specified reader or buffer.
         * @function decode
         * @memberof pb.SvrListGet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.SvrListGet} SvrListGet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SvrListGet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.SvrListGet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.isTest = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Creates a SvrListGet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.SvrListGet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.SvrListGet} SvrListGet
         */
        SvrListGet.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.SvrListGet)
                return object;
            var message = new $root.pb.SvrListGet();
            if (object.isTest != null)
                message.isTest = Boolean(object.isTest);
            return message;
        };

        /**
         * Creates a plain object from a SvrListGet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.SvrListGet
         * @static
         * @param {pb.SvrListGet} message SvrListGet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SvrListGet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.isTest = false;
            if (message.isTest != null && message.hasOwnProperty("isTest"))
                object.isTest = message.isTest;
            return object;
        };

        /**
         * Converts this SvrListGet to JSON.
         * @function toJSON
         * @memberof pb.SvrListGet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SvrListGet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SvrListGet;
    })();

    pb.SvrInfoGet = (function() {

        /**
         * Properties of a SvrInfoGet.
         * @memberof pb
         * @interface ISvrInfoGet
         * @property {number|null} [svrId] SvrInfoGet svrId
         */

        /**
         * Constructs a new SvrInfoGet.
         * @memberof pb
         * @classdesc Represents a SvrInfoGet.
         * @implements ISvrInfoGet
         * @constructor
         * @param {pb.ISvrInfoGet=} [properties] Properties to set
         */
        function SvrInfoGet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SvrInfoGet svrId.
         * @member {number} svrId
         * @memberof pb.SvrInfoGet
         * @instance
         */
        SvrInfoGet.prototype.svrId = 0;

        /**
         * Encodes the specified SvrInfoGet message. Does not implicitly {@link pb.SvrInfoGet.verify|verify} messages.
         * @function encode
         * @memberof pb.SvrInfoGet
         * @static
         * @param {pb.ISvrInfoGet} message SvrInfoGet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SvrInfoGet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.svrId != null && message.hasOwnProperty("svrId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.svrId);
            return writer;
        };

        /**
         * Decodes a SvrInfoGet message from the specified reader or buffer.
         * @function decode
         * @memberof pb.SvrInfoGet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.SvrInfoGet} SvrInfoGet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SvrInfoGet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.SvrInfoGet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.svrId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Creates a SvrInfoGet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.SvrInfoGet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.SvrInfoGet} SvrInfoGet
         */
        SvrInfoGet.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.SvrInfoGet)
                return object;
            var message = new $root.pb.SvrInfoGet();
            if (object.svrId != null)
                message.svrId = object.svrId | 0;
            return message;
        };

        /**
         * Creates a plain object from a SvrInfoGet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.SvrInfoGet
         * @static
         * @param {pb.SvrInfoGet} message SvrInfoGet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SvrInfoGet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.svrId = 0;
            if (message.svrId != null && message.hasOwnProperty("svrId"))
                object.svrId = message.svrId;
            return object;
        };

        /**
         * Converts this SvrInfoGet to JSON.
         * @function toJSON
         * @memberof pb.SvrInfoGet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SvrInfoGet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SvrInfoGet;
    })();

    pb.PbSvrInfo = (function() {

        /**
         * Properties of a PbSvrInfo.
         * @memberof pb
         * @interface IPbSvrInfo
         * @property {number|null} [id] PbSvrInfo id
         * @property {string|null} [name] PbSvrInfo name
         * @property {string|null} [area] PbSvrInfo area
         * @property {string|null} [host] PbSvrInfo host
         * @property {string|null} [port] PbSvrInfo port
         * @property {number|null} [isNew] PbSvrInfo isNew
         * @property {number|null} [status] PbSvrInfo status
         * @property {number|null} [isClose] PbSvrInfo isClose
         * @property {string|null} [closeExplain] PbSvrInfo closeExplain
         */

        /**
         * Constructs a new PbSvrInfo.
         * @memberof pb
         * @classdesc Represents a PbSvrInfo.
         * @implements IPbSvrInfo
         * @constructor
         * @param {pb.IPbSvrInfo=} [properties] Properties to set
         */
        function PbSvrInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PbSvrInfo id.
         * @member {number} id
         * @memberof pb.PbSvrInfo
         * @instance
         */
        PbSvrInfo.prototype.id = 0;

        /**
         * PbSvrInfo name.
         * @member {string} name
         * @memberof pb.PbSvrInfo
         * @instance
         */
        PbSvrInfo.prototype.name = "";

        /**
         * PbSvrInfo area.
         * @member {string} area
         * @memberof pb.PbSvrInfo
         * @instance
         */
        PbSvrInfo.prototype.area = "";

        /**
         * PbSvrInfo host.
         * @member {string} host
         * @memberof pb.PbSvrInfo
         * @instance
         */
        PbSvrInfo.prototype.host = "";

        /**
         * PbSvrInfo port.
         * @member {string} port
         * @memberof pb.PbSvrInfo
         * @instance
         */
        PbSvrInfo.prototype.port = "";

        /**
         * PbSvrInfo isNew.
         * @member {number} isNew
         * @memberof pb.PbSvrInfo
         * @instance
         */
        PbSvrInfo.prototype.isNew = 0;

        /**
         * PbSvrInfo status.
         * @member {number} status
         * @memberof pb.PbSvrInfo
         * @instance
         */
        PbSvrInfo.prototype.status = 0;

        /**
         * PbSvrInfo isClose.
         * @member {number} isClose
         * @memberof pb.PbSvrInfo
         * @instance
         */
        PbSvrInfo.prototype.isClose = 0;

        /**
         * PbSvrInfo closeExplain.
         * @member {string} closeExplain
         * @memberof pb.PbSvrInfo
         * @instance
         */
        PbSvrInfo.prototype.closeExplain = "";

        /**
         * Encodes the specified PbSvrInfo message. Does not implicitly {@link pb.PbSvrInfo.verify|verify} messages.
         * @function encode
         * @memberof pb.PbSvrInfo
         * @static
         * @param {pb.IPbSvrInfo} message PbSvrInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbSvrInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.id);
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
            if (message.area != null && message.hasOwnProperty("area"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.area);
            if (message.host != null && message.hasOwnProperty("host"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.host);
            if (message.port != null && message.hasOwnProperty("port"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.port);
            if (message.isNew != null && message.hasOwnProperty("isNew"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.isNew);
            if (message.status != null && message.hasOwnProperty("status"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.status);
            if (message.isClose != null && message.hasOwnProperty("isClose"))
                writer.uint32(/* id 14, wireType 0 =*/112).int32(message.isClose);
            if (message.closeExplain != null && message.hasOwnProperty("closeExplain"))
                writer.uint32(/* id 15, wireType 2 =*/122).string(message.closeExplain);
            return writer;
        };

        /**
         * Decodes a PbSvrInfo message from the specified reader or buffer.
         * @function decode
         * @memberof pb.PbSvrInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.PbSvrInfo} PbSvrInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbSvrInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.PbSvrInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2:
                    message.id = reader.int32();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 5:
                    message.area = reader.string();
                    break;
                case 6:
                    message.host = reader.string();
                    break;
                case 7:
                    message.port = reader.string();
                    break;
                case 8:
                    message.isNew = reader.int32();
                    break;
                case 9:
                    message.status = reader.int32();
                    break;
                case 14:
                    message.isClose = reader.int32();
                    break;
                case 15:
                    message.closeExplain = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Creates a PbSvrInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.PbSvrInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.PbSvrInfo} PbSvrInfo
         */
        PbSvrInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.PbSvrInfo)
                return object;
            var message = new $root.pb.PbSvrInfo();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.name != null)
                message.name = String(object.name);
            if (object.area != null)
                message.area = String(object.area);
            if (object.host != null)
                message.host = String(object.host);
            if (object.port != null)
                message.port = String(object.port);
            if (object.isNew != null)
                message.isNew = object.isNew | 0;
            if (object.status != null)
                message.status = object.status | 0;
            if (object.isClose != null)
                message.isClose = object.isClose | 0;
            if (object.closeExplain != null)
                message.closeExplain = String(object.closeExplain);
            return message;
        };

        /**
         * Creates a plain object from a PbSvrInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.PbSvrInfo
         * @static
         * @param {pb.PbSvrInfo} message PbSvrInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PbSvrInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                object.name = "";
                object.area = "";
                object.host = "";
                object.port = "";
                object.isNew = 0;
                object.status = 0;
                object.isClose = 0;
                object.closeExplain = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.area != null && message.hasOwnProperty("area"))
                object.area = message.area;
            if (message.host != null && message.hasOwnProperty("host"))
                object.host = message.host;
            if (message.port != null && message.hasOwnProperty("port"))
                object.port = message.port;
            if (message.isNew != null && message.hasOwnProperty("isNew"))
                object.isNew = message.isNew;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.isClose != null && message.hasOwnProperty("isClose"))
                object.isClose = message.isClose;
            if (message.closeExplain != null && message.hasOwnProperty("closeExplain"))
                object.closeExplain = message.closeExplain;
            return object;
        };

        /**
         * Converts this PbSvrInfo to JSON.
         * @function toJSON
         * @memberof pb.PbSvrInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PbSvrInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PbSvrInfo;
    })();

    pb.SvrListResponse = (function() {

        /**
         * Properties of a SvrListResponse.
         * @memberof pb
         * @interface ISvrListResponse
         * @property {number|null} [retCode] SvrListResponse retCode
         * @property {number|null} [retType] SvrListResponse retType
         * @property {Array.<pb.IPbSvrInfo>|null} [infos] SvrListResponse infos
         */

        /**
         * Constructs a new SvrListResponse.
         * @memberof pb
         * @classdesc Represents a SvrListResponse.
         * @implements ISvrListResponse
         * @constructor
         * @param {pb.ISvrListResponse=} [properties] Properties to set
         */
        function SvrListResponse(properties) {
            this.infos = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SvrListResponse retCode.
         * @member {number} retCode
         * @memberof pb.SvrListResponse
         * @instance
         */
        SvrListResponse.prototype.retCode = 0;

        /**
         * SvrListResponse retType.
         * @member {number} retType
         * @memberof pb.SvrListResponse
         * @instance
         */
        SvrListResponse.prototype.retType = 0;

        /**
         * SvrListResponse infos.
         * @member {Array.<pb.IPbSvrInfo>} infos
         * @memberof pb.SvrListResponse
         * @instance
         */
        SvrListResponse.prototype.infos = $util.emptyArray;

        /**
         * Encodes the specified SvrListResponse message. Does not implicitly {@link pb.SvrListResponse.verify|verify} messages.
         * @function encode
         * @memberof pb.SvrListResponse
         * @static
         * @param {pb.ISvrListResponse} message SvrListResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SvrListResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.retCode != null && message.hasOwnProperty("retCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.retCode);
            if (message.retType != null && message.hasOwnProperty("retType"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.retType);
            if (message.infos != null && message.infos.length)
                for (var i = 0; i < message.infos.length; ++i)
                    $root.pb.PbSvrInfo.encode(message.infos[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a SvrListResponse message from the specified reader or buffer.
         * @function decode
         * @memberof pb.SvrListResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.SvrListResponse} SvrListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SvrListResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.SvrListResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.retCode = reader.int32();
                    break;
                case 2:
                    message.retType = reader.int32();
                    break;
                case 3:
                    if (!(message.infos && message.infos.length))
                        message.infos = [];
                    message.infos.push($root.pb.PbSvrInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Creates a SvrListResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.SvrListResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.SvrListResponse} SvrListResponse
         */
        SvrListResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.SvrListResponse)
                return object;
            var message = new $root.pb.SvrListResponse();
            if (object.retCode != null)
                message.retCode = object.retCode | 0;
            if (object.retType != null)
                message.retType = object.retType | 0;
            if (object.infos) {
                if (!Array.isArray(object.infos))
                    throw TypeError(".pb.SvrListResponse.infos: array expected");
                message.infos = [];
                for (var i = 0; i < object.infos.length; ++i) {
                    if (typeof object.infos[i] !== "object")
                        throw TypeError(".pb.SvrListResponse.infos: object expected");
                    message.infos[i] = $root.pb.PbSvrInfo.fromObject(object.infos[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SvrListResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.SvrListResponse
         * @static
         * @param {pb.SvrListResponse} message SvrListResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SvrListResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.infos = [];
            if (options.defaults) {
                object.retCode = 0;
                object.retType = 0;
            }
            if (message.retCode != null && message.hasOwnProperty("retCode"))
                object.retCode = message.retCode;
            if (message.retType != null && message.hasOwnProperty("retType"))
                object.retType = message.retType;
            if (message.infos && message.infos.length) {
                object.infos = [];
                for (var j = 0; j < message.infos.length; ++j)
                    object.infos[j] = $root.pb.PbSvrInfo.toObject(message.infos[j], options);
            }
            return object;
        };

        /**
         * Converts this SvrListResponse to JSON.
         * @function toJSON
         * @memberof pb.SvrListResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SvrListResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SvrListResponse;
    })();

    pb.SvrDateGet = (function() {

        /**
         * Properties of a SvrDateGet.
         * @memberof pb
         * @interface ISvrDateGet
         */

        /**
         * Constructs a new SvrDateGet.
         * @memberof pb
         * @classdesc Represents a SvrDateGet.
         * @implements ISvrDateGet
         * @constructor
         * @param {pb.ISvrDateGet=} [properties] Properties to set
         */
        function SvrDateGet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Encodes the specified SvrDateGet message. Does not implicitly {@link pb.SvrDateGet.verify|verify} messages.
         * @function encode
         * @memberof pb.SvrDateGet
         * @static
         * @param {pb.ISvrDateGet} message SvrDateGet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SvrDateGet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Decodes a SvrDateGet message from the specified reader or buffer.
         * @function decode
         * @memberof pb.SvrDateGet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.SvrDateGet} SvrDateGet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SvrDateGet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.SvrDateGet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Creates a SvrDateGet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.SvrDateGet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.SvrDateGet} SvrDateGet
         */
        SvrDateGet.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.SvrDateGet)
                return object;
            return new $root.pb.SvrDateGet();
        };

        /**
         * Creates a plain object from a SvrDateGet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.SvrDateGet
         * @static
         * @param {pb.SvrDateGet} message SvrDateGet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SvrDateGet.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this SvrDateGet to JSON.
         * @function toJSON
         * @memberof pb.SvrDateGet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SvrDateGet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SvrDateGet;
    })();

    pb.UserSvrsGet = (function() {

        /**
         * Properties of a UserSvrsGet.
         * @memberof pb
         * @interface IUserSvrsGet
         * @property {number|Long|null} [accId] UserSvrsGet accId
         */

        /**
         * Constructs a new UserSvrsGet.
         * @memberof pb
         * @classdesc Represents a UserSvrsGet.
         * @implements IUserSvrsGet
         * @constructor
         * @param {pb.IUserSvrsGet=} [properties] Properties to set
         */
        function UserSvrsGet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserSvrsGet accId.
         * @member {number|Long} accId
         * @memberof pb.UserSvrsGet
         * @instance
         */
        UserSvrsGet.prototype.accId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Encodes the specified UserSvrsGet message. Does not implicitly {@link pb.UserSvrsGet.verify|verify} messages.
         * @function encode
         * @memberof pb.UserSvrsGet
         * @static
         * @param {pb.IUserSvrsGet} message UserSvrsGet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserSvrsGet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.accId != null && message.hasOwnProperty("accId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.accId);
            return writer;
        };

        /**
         * Decodes a UserSvrsGet message from the specified reader or buffer.
         * @function decode
         * @memberof pb.UserSvrsGet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.UserSvrsGet} UserSvrsGet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserSvrsGet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.UserSvrsGet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.accId = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Creates a UserSvrsGet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.UserSvrsGet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.UserSvrsGet} UserSvrsGet
         */
        UserSvrsGet.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.UserSvrsGet)
                return object;
            var message = new $root.pb.UserSvrsGet();
            if (object.accId != null)
                if ($util.Long)
                    (message.accId = $util.Long.fromValue(object.accId)).unsigned = false;
                else if (typeof object.accId === "string")
                    message.accId = parseInt(object.accId, 10);
                else if (typeof object.accId === "number")
                    message.accId = object.accId;
                else if (typeof object.accId === "object")
                    message.accId = new $util.LongBits(object.accId.low >>> 0, object.accId.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a UserSvrsGet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.UserSvrsGet
         * @static
         * @param {pb.UserSvrsGet} message UserSvrsGet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserSvrsGet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.accId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.accId = options.longs === String ? "0" : 0;
            if (message.accId != null && message.hasOwnProperty("accId"))
                if (typeof message.accId === "number")
                    object.accId = options.longs === String ? String(message.accId) : message.accId;
                else
                    object.accId = options.longs === String ? $util.Long.prototype.toString.call(message.accId) : options.longs === Number ? new $util.LongBits(message.accId.low >>> 0, message.accId.high >>> 0).toNumber() : message.accId;
            return object;
        };

        /**
         * Converts this UserSvrsGet to JSON.
         * @function toJSON
         * @memberof pb.UserSvrsGet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserSvrsGet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserSvrsGet;
    })();

    pb.AccountSvrsGet = (function() {

        /**
         * Properties of an AccountSvrsGet.
         * @memberof pb
         * @interface IAccountSvrsGet
         * @property {string|null} [openId] AccountSvrsGet openId
         * @property {string|null} [appId] AccountSvrsGet appId
         * @property {boolean|null} [isTest] AccountSvrsGet isTest
         */

        /**
         * Constructs a new AccountSvrsGet.
         * @memberof pb
         * @classdesc Represents an AccountSvrsGet.
         * @implements IAccountSvrsGet
         * @constructor
         * @param {pb.IAccountSvrsGet=} [properties] Properties to set
         */
        function AccountSvrsGet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AccountSvrsGet openId.
         * @member {string} openId
         * @memberof pb.AccountSvrsGet
         * @instance
         */
        AccountSvrsGet.prototype.openId = "";

        /**
         * AccountSvrsGet appId.
         * @member {string} appId
         * @memberof pb.AccountSvrsGet
         * @instance
         */
        AccountSvrsGet.prototype.appId = "";

        /**
         * AccountSvrsGet isTest.
         * @member {boolean} isTest
         * @memberof pb.AccountSvrsGet
         * @instance
         */
        AccountSvrsGet.prototype.isTest = false;

        /**
         * Encodes the specified AccountSvrsGet message. Does not implicitly {@link pb.AccountSvrsGet.verify|verify} messages.
         * @function encode
         * @memberof pb.AccountSvrsGet
         * @static
         * @param {pb.IAccountSvrsGet} message AccountSvrsGet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccountSvrsGet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.openId != null && message.hasOwnProperty("openId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.openId);
            if (message.appId != null && message.hasOwnProperty("appId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.appId);
            if (message.isTest != null && message.hasOwnProperty("isTest"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.isTest);
            return writer;
        };

        /**
         * Decodes an AccountSvrsGet message from the specified reader or buffer.
         * @function decode
         * @memberof pb.AccountSvrsGet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.AccountSvrsGet} AccountSvrsGet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccountSvrsGet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.AccountSvrsGet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.openId = reader.string();
                    break;
                case 2:
                    message.appId = reader.string();
                    break;
                case 3:
                    message.isTest = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Creates an AccountSvrsGet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.AccountSvrsGet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.AccountSvrsGet} AccountSvrsGet
         */
        AccountSvrsGet.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.AccountSvrsGet)
                return object;
            var message = new $root.pb.AccountSvrsGet();
            if (object.openId != null)
                message.openId = String(object.openId);
            if (object.appId != null)
                message.appId = String(object.appId);
            if (object.isTest != null)
                message.isTest = Boolean(object.isTest);
            return message;
        };

        /**
         * Creates a plain object from an AccountSvrsGet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.AccountSvrsGet
         * @static
         * @param {pb.AccountSvrsGet} message AccountSvrsGet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AccountSvrsGet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.openId = "";
                object.appId = "";
                object.isTest = false;
            }
            if (message.openId != null && message.hasOwnProperty("openId"))
                object.openId = message.openId;
            if (message.appId != null && message.hasOwnProperty("appId"))
                object.appId = message.appId;
            if (message.isTest != null && message.hasOwnProperty("isTest"))
                object.isTest = message.isTest;
            return object;
        };

        /**
         * Converts this AccountSvrsGet to JSON.
         * @function toJSON
         * @memberof pb.AccountSvrsGet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AccountSvrsGet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AccountSvrsGet;
    })();

    pb.TestNetLatency = (function() {

        /**
         * Properties of a TestNetLatency.
         * @memberof pb
         * @interface ITestNetLatency
         * @property {number|Long|null} [time] TestNetLatency time
         */

        /**
         * Constructs a new TestNetLatency.
         * @memberof pb
         * @classdesc Represents a TestNetLatency.
         * @implements ITestNetLatency
         * @constructor
         * @param {pb.ITestNetLatency=} [properties] Properties to set
         */
        function TestNetLatency(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TestNetLatency time.
         * @member {number|Long} time
         * @memberof pb.TestNetLatency
         * @instance
         */
        TestNetLatency.prototype.time = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Encodes the specified TestNetLatency message. Does not implicitly {@link pb.TestNetLatency.verify|verify} messages.
         * @function encode
         * @memberof pb.TestNetLatency
         * @static
         * @param {pb.ITestNetLatency} message TestNetLatency message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TestNetLatency.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.time != null && message.hasOwnProperty("time"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.time);
            return writer;
        };

        /**
         * Decodes a TestNetLatency message from the specified reader or buffer.
         * @function decode
         * @memberof pb.TestNetLatency
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.TestNetLatency} TestNetLatency
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TestNetLatency.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.TestNetLatency();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.time = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Creates a TestNetLatency message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.TestNetLatency
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.TestNetLatency} TestNetLatency
         */
        TestNetLatency.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.TestNetLatency)
                return object;
            var message = new $root.pb.TestNetLatency();
            if (object.time != null)
                if ($util.Long)
                    (message.time = $util.Long.fromValue(object.time)).unsigned = false;
                else if (typeof object.time === "string")
                    message.time = parseInt(object.time, 10);
                else if (typeof object.time === "number")
                    message.time = object.time;
                else if (typeof object.time === "object")
                    message.time = new $util.LongBits(object.time.low >>> 0, object.time.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a TestNetLatency message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.TestNetLatency
         * @static
         * @param {pb.TestNetLatency} message TestNetLatency
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TestNetLatency.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.time = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.time = options.longs === String ? "0" : 0;
            if (message.time != null && message.hasOwnProperty("time"))
                if (typeof message.time === "number")
                    object.time = options.longs === String ? String(message.time) : message.time;
                else
                    object.time = options.longs === String ? $util.Long.prototype.toString.call(message.time) : options.longs === Number ? new $util.LongBits(message.time.low >>> 0, message.time.high >>> 0).toNumber() : message.time;
            return object;
        };

        /**
         * Converts this TestNetLatency to JSON.
         * @function toJSON
         * @memberof pb.TestNetLatency
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TestNetLatency.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TestNetLatency;
    })();

    pb.CreateClsRoom = (function() {

        /**
         * Properties of a CreateClsRoom.
         * @memberof pb
         * @interface ICreateClsRoom
         * @property {string|null} [name] CreateClsRoom name
         */

        /**
         * Constructs a new CreateClsRoom.
         * @memberof pb
         * @classdesc Represents a CreateClsRoom.
         * @implements ICreateClsRoom
         * @constructor
         * @param {pb.ICreateClsRoom=} [properties] Properties to set
         */
        function CreateClsRoom(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateClsRoom name.
         * @member {string} name
         * @memberof pb.CreateClsRoom
         * @instance
         */
        CreateClsRoom.prototype.name = "";

        /**
         * Encodes the specified CreateClsRoom message. Does not implicitly {@link pb.CreateClsRoom.verify|verify} messages.
         * @function encode
         * @memberof pb.CreateClsRoom
         * @static
         * @param {pb.ICreateClsRoom} message CreateClsRoom message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateClsRoom.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            return writer;
        };

        /**
         * Decodes a CreateClsRoom message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CreateClsRoom
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.CreateClsRoom} CreateClsRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateClsRoom.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.CreateClsRoom();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Creates a CreateClsRoom message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.CreateClsRoom
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.CreateClsRoom} CreateClsRoom
         */
        CreateClsRoom.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.CreateClsRoom)
                return object;
            var message = new $root.pb.CreateClsRoom();
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from a CreateClsRoom message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.CreateClsRoom
         * @static
         * @param {pb.CreateClsRoom} message CreateClsRoom
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateClsRoom.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.name = "";
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };

        /**
         * Converts this CreateClsRoom to JSON.
         * @function toJSON
         * @memberof pb.CreateClsRoom
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateClsRoom.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateClsRoom;
    })();

    pb.JoinClsRoom = (function() {

        /**
         * Properties of a JoinClsRoom.
         * @memberof pb
         * @interface IJoinClsRoom
         * @property {string|null} [name] JoinClsRoom name
         */

        /**
         * Constructs a new JoinClsRoom.
         * @memberof pb
         * @classdesc Represents a JoinClsRoom.
         * @implements IJoinClsRoom
         * @constructor
         * @param {pb.IJoinClsRoom=} [properties] Properties to set
         */
        function JoinClsRoom(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JoinClsRoom name.
         * @member {string} name
         * @memberof pb.JoinClsRoom
         * @instance
         */
        JoinClsRoom.prototype.name = "";

        /**
         * Encodes the specified JoinClsRoom message. Does not implicitly {@link pb.JoinClsRoom.verify|verify} messages.
         * @function encode
         * @memberof pb.JoinClsRoom
         * @static
         * @param {pb.IJoinClsRoom} message JoinClsRoom message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinClsRoom.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            return writer;
        };

        /**
         * Decodes a JoinClsRoom message from the specified reader or buffer.
         * @function decode
         * @memberof pb.JoinClsRoom
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.JoinClsRoom} JoinClsRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinClsRoom.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.JoinClsRoom();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Creates a JoinClsRoom message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.JoinClsRoom
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.JoinClsRoom} JoinClsRoom
         */
        JoinClsRoom.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.JoinClsRoom)
                return object;
            var message = new $root.pb.JoinClsRoom();
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from a JoinClsRoom message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.JoinClsRoom
         * @static
         * @param {pb.JoinClsRoom} message JoinClsRoom
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JoinClsRoom.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.name = "";
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };

        /**
         * Converts this JoinClsRoom to JSON.
         * @function toJSON
         * @memberof pb.JoinClsRoom
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JoinClsRoom.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JoinClsRoom;
    })();

    pb.EnterClsRoomResponse = (function() {

        /**
         * Properties of an EnterClsRoomResponse.
         * @memberof pb
         * @interface IEnterClsRoomResponse
         * @property {number|null} [retCode] EnterClsRoomResponse retCode
         * @property {number|Long|null} [roomId] EnterClsRoomResponse roomId
         * @property {number|Long|null} [masterId] EnterClsRoomResponse masterId
         */

        /**
         * Constructs a new EnterClsRoomResponse.
         * @memberof pb
         * @classdesc Represents an EnterClsRoomResponse.
         * @implements IEnterClsRoomResponse
         * @constructor
         * @param {pb.IEnterClsRoomResponse=} [properties] Properties to set
         */
        function EnterClsRoomResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EnterClsRoomResponse retCode.
         * @member {number} retCode
         * @memberof pb.EnterClsRoomResponse
         * @instance
         */
        EnterClsRoomResponse.prototype.retCode = 0;

        /**
         * EnterClsRoomResponse roomId.
         * @member {number|Long} roomId
         * @memberof pb.EnterClsRoomResponse
         * @instance
         */
        EnterClsRoomResponse.prototype.roomId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * EnterClsRoomResponse masterId.
         * @member {number|Long} masterId
         * @memberof pb.EnterClsRoomResponse
         * @instance
         */
        EnterClsRoomResponse.prototype.masterId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Encodes the specified EnterClsRoomResponse message. Does not implicitly {@link pb.EnterClsRoomResponse.verify|verify} messages.
         * @function encode
         * @memberof pb.EnterClsRoomResponse
         * @static
         * @param {pb.IEnterClsRoomResponse} message EnterClsRoomResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnterClsRoomResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.retCode != null && message.hasOwnProperty("retCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.retCode);
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.roomId);
            if (message.masterId != null && message.hasOwnProperty("masterId"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.masterId);
            return writer;
        };

        /**
         * Decodes an EnterClsRoomResponse message from the specified reader or buffer.
         * @function decode
         * @memberof pb.EnterClsRoomResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.EnterClsRoomResponse} EnterClsRoomResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnterClsRoomResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.EnterClsRoomResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.retCode = reader.int32();
                    break;
                case 2:
                    message.roomId = reader.int64();
                    break;
                case 3:
                    message.masterId = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Creates an EnterClsRoomResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.EnterClsRoomResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.EnterClsRoomResponse} EnterClsRoomResponse
         */
        EnterClsRoomResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.EnterClsRoomResponse)
                return object;
            var message = new $root.pb.EnterClsRoomResponse();
            if (object.retCode != null)
                message.retCode = object.retCode | 0;
            if (object.roomId != null)
                if ($util.Long)
                    (message.roomId = $util.Long.fromValue(object.roomId)).unsigned = false;
                else if (typeof object.roomId === "string")
                    message.roomId = parseInt(object.roomId, 10);
                else if (typeof object.roomId === "number")
                    message.roomId = object.roomId;
                else if (typeof object.roomId === "object")
                    message.roomId = new $util.LongBits(object.roomId.low >>> 0, object.roomId.high >>> 0).toNumber();
            if (object.masterId != null)
                if ($util.Long)
                    (message.masterId = $util.Long.fromValue(object.masterId)).unsigned = false;
                else if (typeof object.masterId === "string")
                    message.masterId = parseInt(object.masterId, 10);
                else if (typeof object.masterId === "number")
                    message.masterId = object.masterId;
                else if (typeof object.masterId === "object")
                    message.masterId = new $util.LongBits(object.masterId.low >>> 0, object.masterId.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from an EnterClsRoomResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.EnterClsRoomResponse
         * @static
         * @param {pb.EnterClsRoomResponse} message EnterClsRoomResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EnterClsRoomResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.retCode = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.roomId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.roomId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.masterId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.masterId = options.longs === String ? "0" : 0;
            }
            if (message.retCode != null && message.hasOwnProperty("retCode"))
                object.retCode = message.retCode;
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (typeof message.roomId === "number")
                    object.roomId = options.longs === String ? String(message.roomId) : message.roomId;
                else
                    object.roomId = options.longs === String ? $util.Long.prototype.toString.call(message.roomId) : options.longs === Number ? new $util.LongBits(message.roomId.low >>> 0, message.roomId.high >>> 0).toNumber() : message.roomId;
            if (message.masterId != null && message.hasOwnProperty("masterId"))
                if (typeof message.masterId === "number")
                    object.masterId = options.longs === String ? String(message.masterId) : message.masterId;
                else
                    object.masterId = options.longs === String ? $util.Long.prototype.toString.call(message.masterId) : options.longs === Number ? new $util.LongBits(message.masterId.low >>> 0, message.masterId.high >>> 0).toNumber() : message.masterId;
            return object;
        };

        /**
         * Converts this EnterClsRoomResponse to JSON.
         * @function toJSON
         * @memberof pb.EnterClsRoomResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EnterClsRoomResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EnterClsRoomResponse;
    })();

    pb.ExitClsRoom = (function() {

        /**
         * Properties of an ExitClsRoom.
         * @memberof pb
         * @interface IExitClsRoom
         * @property {number|Long|null} [roomId] ExitClsRoom roomId
         */

        /**
         * Constructs a new ExitClsRoom.
         * @memberof pb
         * @classdesc Represents an ExitClsRoom.
         * @implements IExitClsRoom
         * @constructor
         * @param {pb.IExitClsRoom=} [properties] Properties to set
         */
        function ExitClsRoom(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ExitClsRoom roomId.
         * @member {number|Long} roomId
         * @memberof pb.ExitClsRoom
         * @instance
         */
        ExitClsRoom.prototype.roomId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Encodes the specified ExitClsRoom message. Does not implicitly {@link pb.ExitClsRoom.verify|verify} messages.
         * @function encode
         * @memberof pb.ExitClsRoom
         * @static
         * @param {pb.IExitClsRoom} message ExitClsRoom message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExitClsRoom.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.roomId);
            return writer;
        };

        /**
         * Decodes an ExitClsRoom message from the specified reader or buffer.
         * @function decode
         * @memberof pb.ExitClsRoom
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.ExitClsRoom} ExitClsRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExitClsRoom.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.ExitClsRoom();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.roomId = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Creates an ExitClsRoom message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.ExitClsRoom
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.ExitClsRoom} ExitClsRoom
         */
        ExitClsRoom.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.ExitClsRoom)
                return object;
            var message = new $root.pb.ExitClsRoom();
            if (object.roomId != null)
                if ($util.Long)
                    (message.roomId = $util.Long.fromValue(object.roomId)).unsigned = false;
                else if (typeof object.roomId === "string")
                    message.roomId = parseInt(object.roomId, 10);
                else if (typeof object.roomId === "number")
                    message.roomId = object.roomId;
                else if (typeof object.roomId === "object")
                    message.roomId = new $util.LongBits(object.roomId.low >>> 0, object.roomId.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from an ExitClsRoom message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.ExitClsRoom
         * @static
         * @param {pb.ExitClsRoom} message ExitClsRoom
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ExitClsRoom.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.roomId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.roomId = options.longs === String ? "0" : 0;
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (typeof message.roomId === "number")
                    object.roomId = options.longs === String ? String(message.roomId) : message.roomId;
                else
                    object.roomId = options.longs === String ? $util.Long.prototype.toString.call(message.roomId) : options.longs === Number ? new $util.LongBits(message.roomId.low >>> 0, message.roomId.high >>> 0).toNumber() : message.roomId;
            return object;
        };

        /**
         * Converts this ExitClsRoom to JSON.
         * @function toJSON
         * @memberof pb.ExitClsRoom
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ExitClsRoom.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ExitClsRoom;
    })();

    pb.CreateDiceRoom = (function() {

        /**
         * Properties of a CreateDiceRoom.
         * @memberof pb
         * @interface ICreateDiceRoom
         * @property {string|null} [name] CreateDiceRoom name
         */

        /**
         * Constructs a new CreateDiceRoom.
         * @memberof pb
         * @classdesc Represents a CreateDiceRoom.
         * @implements ICreateDiceRoom
         * @constructor
         * @param {pb.ICreateDiceRoom=} [properties] Properties to set
         */
        function CreateDiceRoom(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateDiceRoom name.
         * @member {string} name
         * @memberof pb.CreateDiceRoom
         * @instance
         */
        CreateDiceRoom.prototype.name = "";

        /**
         * Encodes the specified CreateDiceRoom message. Does not implicitly {@link pb.CreateDiceRoom.verify|verify} messages.
         * @function encode
         * @memberof pb.CreateDiceRoom
         * @static
         * @param {pb.ICreateDiceRoom} message CreateDiceRoom message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateDiceRoom.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            return writer;
        };

        /**
         * Decodes a CreateDiceRoom message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CreateDiceRoom
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.CreateDiceRoom} CreateDiceRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateDiceRoom.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.CreateDiceRoom();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Creates a CreateDiceRoom message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.CreateDiceRoom
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.CreateDiceRoom} CreateDiceRoom
         */
        CreateDiceRoom.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.CreateDiceRoom)
                return object;
            var message = new $root.pb.CreateDiceRoom();
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from a CreateDiceRoom message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.CreateDiceRoom
         * @static
         * @param {pb.CreateDiceRoom} message CreateDiceRoom
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateDiceRoom.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.name = "";
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };

        /**
         * Converts this CreateDiceRoom to JSON.
         * @function toJSON
         * @memberof pb.CreateDiceRoom
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateDiceRoom.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateDiceRoom;
    })();

    pb.JoinDiceRoom = (function() {

        /**
         * Properties of a JoinDiceRoom.
         * @memberof pb
         * @interface IJoinDiceRoom
         * @property {string|null} [name] JoinDiceRoom name
         */

        /**
         * Constructs a new JoinDiceRoom.
         * @memberof pb
         * @classdesc Represents a JoinDiceRoom.
         * @implements IJoinDiceRoom
         * @constructor
         * @param {pb.IJoinDiceRoom=} [properties] Properties to set
         */
        function JoinDiceRoom(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JoinDiceRoom name.
         * @member {string} name
         * @memberof pb.JoinDiceRoom
         * @instance
         */
        JoinDiceRoom.prototype.name = "";

        /**
         * Encodes the specified JoinDiceRoom message. Does not implicitly {@link pb.JoinDiceRoom.verify|verify} messages.
         * @function encode
         * @memberof pb.JoinDiceRoom
         * @static
         * @param {pb.IJoinDiceRoom} message JoinDiceRoom message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinDiceRoom.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            return writer;
        };

        /**
         * Decodes a JoinDiceRoom message from the specified reader or buffer.
         * @function decode
         * @memberof pb.JoinDiceRoom
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.JoinDiceRoom} JoinDiceRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinDiceRoom.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.JoinDiceRoom();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Creates a JoinDiceRoom message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.JoinDiceRoom
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.JoinDiceRoom} JoinDiceRoom
         */
        JoinDiceRoom.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.JoinDiceRoom)
                return object;
            var message = new $root.pb.JoinDiceRoom();
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from a JoinDiceRoom message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.JoinDiceRoom
         * @static
         * @param {pb.JoinDiceRoom} message JoinDiceRoom
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JoinDiceRoom.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.name = "";
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };

        /**
         * Converts this JoinDiceRoom to JSON.
         * @function toJSON
         * @memberof pb.JoinDiceRoom
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JoinDiceRoom.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JoinDiceRoom;
    })();

    pb.EnterDiceRoomResponse = (function() {

        /**
         * Properties of an EnterDiceRoomResponse.
         * @memberof pb
         * @interface IEnterDiceRoomResponse
         * @property {number|null} [retCode] EnterDiceRoomResponse retCode
         * @property {number|Long|null} [roomId] EnterDiceRoomResponse roomId
         * @property {number|Long|null} [masterId] EnterDiceRoomResponse masterId
         */

        /**
         * Constructs a new EnterDiceRoomResponse.
         * @memberof pb
         * @classdesc Represents an EnterDiceRoomResponse.
         * @implements IEnterDiceRoomResponse
         * @constructor
         * @param {pb.IEnterDiceRoomResponse=} [properties] Properties to set
         */
        function EnterDiceRoomResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EnterDiceRoomResponse retCode.
         * @member {number} retCode
         * @memberof pb.EnterDiceRoomResponse
         * @instance
         */
        EnterDiceRoomResponse.prototype.retCode = 0;

        /**
         * EnterDiceRoomResponse roomId.
         * @member {number|Long} roomId
         * @memberof pb.EnterDiceRoomResponse
         * @instance
         */
        EnterDiceRoomResponse.prototype.roomId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * EnterDiceRoomResponse masterId.
         * @member {number|Long} masterId
         * @memberof pb.EnterDiceRoomResponse
         * @instance
         */
        EnterDiceRoomResponse.prototype.masterId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Encodes the specified EnterDiceRoomResponse message. Does not implicitly {@link pb.EnterDiceRoomResponse.verify|verify} messages.
         * @function encode
         * @memberof pb.EnterDiceRoomResponse
         * @static
         * @param {pb.IEnterDiceRoomResponse} message EnterDiceRoomResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnterDiceRoomResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.retCode != null && message.hasOwnProperty("retCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.retCode);
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.roomId);
            if (message.masterId != null && message.hasOwnProperty("masterId"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.masterId);
            return writer;
        };

        /**
         * Decodes an EnterDiceRoomResponse message from the specified reader or buffer.
         * @function decode
         * @memberof pb.EnterDiceRoomResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.EnterDiceRoomResponse} EnterDiceRoomResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnterDiceRoomResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.EnterDiceRoomResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.retCode = reader.int32();
                    break;
                case 2:
                    message.roomId = reader.int64();
                    break;
                case 3:
                    message.masterId = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Creates an EnterDiceRoomResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.EnterDiceRoomResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.EnterDiceRoomResponse} EnterDiceRoomResponse
         */
        EnterDiceRoomResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.EnterDiceRoomResponse)
                return object;
            var message = new $root.pb.EnterDiceRoomResponse();
            if (object.retCode != null)
                message.retCode = object.retCode | 0;
            if (object.roomId != null)
                if ($util.Long)
                    (message.roomId = $util.Long.fromValue(object.roomId)).unsigned = false;
                else if (typeof object.roomId === "string")
                    message.roomId = parseInt(object.roomId, 10);
                else if (typeof object.roomId === "number")
                    message.roomId = object.roomId;
                else if (typeof object.roomId === "object")
                    message.roomId = new $util.LongBits(object.roomId.low >>> 0, object.roomId.high >>> 0).toNumber();
            if (object.masterId != null)
                if ($util.Long)
                    (message.masterId = $util.Long.fromValue(object.masterId)).unsigned = false;
                else if (typeof object.masterId === "string")
                    message.masterId = parseInt(object.masterId, 10);
                else if (typeof object.masterId === "number")
                    message.masterId = object.masterId;
                else if (typeof object.masterId === "object")
                    message.masterId = new $util.LongBits(object.masterId.low >>> 0, object.masterId.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from an EnterDiceRoomResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.EnterDiceRoomResponse
         * @static
         * @param {pb.EnterDiceRoomResponse} message EnterDiceRoomResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EnterDiceRoomResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.retCode = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.roomId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.roomId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.masterId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.masterId = options.longs === String ? "0" : 0;
            }
            if (message.retCode != null && message.hasOwnProperty("retCode"))
                object.retCode = message.retCode;
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (typeof message.roomId === "number")
                    object.roomId = options.longs === String ? String(message.roomId) : message.roomId;
                else
                    object.roomId = options.longs === String ? $util.Long.prototype.toString.call(message.roomId) : options.longs === Number ? new $util.LongBits(message.roomId.low >>> 0, message.roomId.high >>> 0).toNumber() : message.roomId;
            if (message.masterId != null && message.hasOwnProperty("masterId"))
                if (typeof message.masterId === "number")
                    object.masterId = options.longs === String ? String(message.masterId) : message.masterId;
                else
                    object.masterId = options.longs === String ? $util.Long.prototype.toString.call(message.masterId) : options.longs === Number ? new $util.LongBits(message.masterId.low >>> 0, message.masterId.high >>> 0).toNumber() : message.masterId;
            return object;
        };

        /**
         * Converts this EnterDiceRoomResponse to JSON.
         * @function toJSON
         * @memberof pb.EnterDiceRoomResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EnterDiceRoomResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EnterDiceRoomResponse;
    })();

    pb.ExitDiceRoom = (function() {

        /**
         * Properties of an ExitDiceRoom.
         * @memberof pb
         * @interface IExitDiceRoom
         * @property {number|Long|null} [roomId] ExitDiceRoom roomId
         */

        /**
         * Constructs a new ExitDiceRoom.
         * @memberof pb
         * @classdesc Represents an ExitDiceRoom.
         * @implements IExitDiceRoom
         * @constructor
         * @param {pb.IExitDiceRoom=} [properties] Properties to set
         */
        function ExitDiceRoom(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ExitDiceRoom roomId.
         * @member {number|Long} roomId
         * @memberof pb.ExitDiceRoom
         * @instance
         */
        ExitDiceRoom.prototype.roomId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Encodes the specified ExitDiceRoom message. Does not implicitly {@link pb.ExitDiceRoom.verify|verify} messages.
         * @function encode
         * @memberof pb.ExitDiceRoom
         * @static
         * @param {pb.IExitDiceRoom} message ExitDiceRoom message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExitDiceRoom.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.roomId);
            return writer;
        };

        /**
         * Decodes an ExitDiceRoom message from the specified reader or buffer.
         * @function decode
         * @memberof pb.ExitDiceRoom
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.ExitDiceRoom} ExitDiceRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExitDiceRoom.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.ExitDiceRoom();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.roomId = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Creates an ExitDiceRoom message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.ExitDiceRoom
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.ExitDiceRoom} ExitDiceRoom
         */
        ExitDiceRoom.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.ExitDiceRoom)
                return object;
            var message = new $root.pb.ExitDiceRoom();
            if (object.roomId != null)
                if ($util.Long)
                    (message.roomId = $util.Long.fromValue(object.roomId)).unsigned = false;
                else if (typeof object.roomId === "string")
                    message.roomId = parseInt(object.roomId, 10);
                else if (typeof object.roomId === "number")
                    message.roomId = object.roomId;
                else if (typeof object.roomId === "object")
                    message.roomId = new $util.LongBits(object.roomId.low >>> 0, object.roomId.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from an ExitDiceRoom message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.ExitDiceRoom
         * @static
         * @param {pb.ExitDiceRoom} message ExitDiceRoom
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ExitDiceRoom.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.roomId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.roomId = options.longs === String ? "0" : 0;
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (typeof message.roomId === "number")
                    object.roomId = options.longs === String ? String(message.roomId) : message.roomId;
                else
                    object.roomId = options.longs === String ? $util.Long.prototype.toString.call(message.roomId) : options.longs === Number ? new $util.LongBits(message.roomId.low >>> 0, message.roomId.high >>> 0).toNumber() : message.roomId;
            return object;
        };

        /**
         * Converts this ExitDiceRoom to JSON.
         * @function toJSON
         * @memberof pb.ExitDiceRoom
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ExitDiceRoom.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ExitDiceRoom;
    })();

    pb.ExchangeRoomOpt = (function() {

        /**
         * Properties of an ExchangeRoomOpt.
         * @memberof pb
         * @interface IExchangeRoomOpt
         * @property {number|null} [svrFrame] ExchangeRoomOpt svrFrame
         * @property {string|null} [optData] ExchangeRoomOpt optData
         */

        /**
         * Constructs a new ExchangeRoomOpt.
         * @memberof pb
         * @classdesc Represents an ExchangeRoomOpt.
         * @implements IExchangeRoomOpt
         * @constructor
         * @param {pb.IExchangeRoomOpt=} [properties] Properties to set
         */
        function ExchangeRoomOpt(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ExchangeRoomOpt svrFrame.
         * @member {number} svrFrame
         * @memberof pb.ExchangeRoomOpt
         * @instance
         */
        ExchangeRoomOpt.prototype.svrFrame = 0;

        /**
         * ExchangeRoomOpt optData.
         * @member {string} optData
         * @memberof pb.ExchangeRoomOpt
         * @instance
         */
        ExchangeRoomOpt.prototype.optData = "";

        /**
         * Encodes the specified ExchangeRoomOpt message. Does not implicitly {@link pb.ExchangeRoomOpt.verify|verify} messages.
         * @function encode
         * @memberof pb.ExchangeRoomOpt
         * @static
         * @param {pb.IExchangeRoomOpt} message ExchangeRoomOpt message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExchangeRoomOpt.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.svrFrame != null && message.hasOwnProperty("svrFrame"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.svrFrame);
            if (message.optData != null && message.hasOwnProperty("optData"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.optData);
            return writer;
        };

        /**
         * Decodes an ExchangeRoomOpt message from the specified reader or buffer.
         * @function decode
         * @memberof pb.ExchangeRoomOpt
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.ExchangeRoomOpt} ExchangeRoomOpt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExchangeRoomOpt.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.ExchangeRoomOpt();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.svrFrame = reader.int32();
                    break;
                case 2:
                    message.optData = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Creates an ExchangeRoomOpt message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.ExchangeRoomOpt
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.ExchangeRoomOpt} ExchangeRoomOpt
         */
        ExchangeRoomOpt.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.ExchangeRoomOpt)
                return object;
            var message = new $root.pb.ExchangeRoomOpt();
            if (object.svrFrame != null)
                message.svrFrame = object.svrFrame | 0;
            if (object.optData != null)
                message.optData = String(object.optData);
            return message;
        };

        /**
         * Creates a plain object from an ExchangeRoomOpt message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.ExchangeRoomOpt
         * @static
         * @param {pb.ExchangeRoomOpt} message ExchangeRoomOpt
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ExchangeRoomOpt.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.svrFrame = 0;
                object.optData = "";
            }
            if (message.svrFrame != null && message.hasOwnProperty("svrFrame"))
                object.svrFrame = message.svrFrame;
            if (message.optData != null && message.hasOwnProperty("optData"))
                object.optData = message.optData;
            return object;
        };

        /**
         * Converts this ExchangeRoomOpt to JSON.
         * @function toJSON
         * @memberof pb.ExchangeRoomOpt
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ExchangeRoomOpt.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ExchangeRoomOpt;
    })();

    pb.PbOptInfo = (function() {

        /**
         * Properties of a PbOptInfo.
         * @memberof pb
         * @interface IPbOptInfo
         * @property {number|null} [frame] PbOptInfo frame
         * @property {string|null} [optData] PbOptInfo optData
         */

        /**
         * Constructs a new PbOptInfo.
         * @memberof pb
         * @classdesc Represents a PbOptInfo.
         * @implements IPbOptInfo
         * @constructor
         * @param {pb.IPbOptInfo=} [properties] Properties to set
         */
        function PbOptInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PbOptInfo frame.
         * @member {number} frame
         * @memberof pb.PbOptInfo
         * @instance
         */
        PbOptInfo.prototype.frame = 0;

        /**
         * PbOptInfo optData.
         * @member {string} optData
         * @memberof pb.PbOptInfo
         * @instance
         */
        PbOptInfo.prototype.optData = "";

        /**
         * Encodes the specified PbOptInfo message. Does not implicitly {@link pb.PbOptInfo.verify|verify} messages.
         * @function encode
         * @memberof pb.PbOptInfo
         * @static
         * @param {pb.IPbOptInfo} message PbOptInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbOptInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.frame != null && message.hasOwnProperty("frame"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.frame);
            if (message.optData != null && message.hasOwnProperty("optData"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.optData);
            return writer;
        };

        /**
         * Decodes a PbOptInfo message from the specified reader or buffer.
         * @function decode
         * @memberof pb.PbOptInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.PbOptInfo} PbOptInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbOptInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.PbOptInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.frame = reader.int32();
                    break;
                case 2:
                    message.optData = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Creates a PbOptInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.PbOptInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.PbOptInfo} PbOptInfo
         */
        PbOptInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.PbOptInfo)
                return object;
            var message = new $root.pb.PbOptInfo();
            if (object.frame != null)
                message.frame = object.frame | 0;
            if (object.optData != null)
                message.optData = String(object.optData);
            return message;
        };

        /**
         * Creates a plain object from a PbOptInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.PbOptInfo
         * @static
         * @param {pb.PbOptInfo} message PbOptInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PbOptInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.frame = 0;
                object.optData = "";
            }
            if (message.frame != null && message.hasOwnProperty("frame"))
                object.frame = message.frame;
            if (message.optData != null && message.hasOwnProperty("optData"))
                object.optData = message.optData;
            return object;
        };

        /**
         * Converts this PbOptInfo to JSON.
         * @function toJSON
         * @memberof pb.PbOptInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PbOptInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PbOptInfo;
    })();

    pb.SyncRoomState = (function() {

        /**
         * Properties of a SyncRoomState.
         * @memberof pb
         * @interface ISyncRoomState
         * @property {Array.<number|Long>|null} [userList] SyncRoomState userList
         * @property {Array.<pb.IPbOptInfo>|null} [optRecord] SyncRoomState optRecord
         */

        /**
         * Constructs a new SyncRoomState.
         * @memberof pb
         * @classdesc Represents a SyncRoomState.
         * @implements ISyncRoomState
         * @constructor
         * @param {pb.ISyncRoomState=} [properties] Properties to set
         */
        function SyncRoomState(properties) {
            this.userList = [];
            this.optRecord = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SyncRoomState userList.
         * @member {Array.<number|Long>} userList
         * @memberof pb.SyncRoomState
         * @instance
         */
        SyncRoomState.prototype.userList = $util.emptyArray;

        /**
         * SyncRoomState optRecord.
         * @member {Array.<pb.IPbOptInfo>} optRecord
         * @memberof pb.SyncRoomState
         * @instance
         */
        SyncRoomState.prototype.optRecord = $util.emptyArray;

        /**
         * Encodes the specified SyncRoomState message. Does not implicitly {@link pb.SyncRoomState.verify|verify} messages.
         * @function encode
         * @memberof pb.SyncRoomState
         * @static
         * @param {pb.ISyncRoomState} message SyncRoomState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SyncRoomState.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userList != null && message.userList.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (var i = 0; i < message.userList.length; ++i)
                    writer.int64(message.userList[i]);
                writer.ldelim();
            }
            if (message.optRecord != null && message.optRecord.length)
                for (var i = 0; i < message.optRecord.length; ++i)
                    $root.pb.PbOptInfo.encode(message.optRecord[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a SyncRoomState message from the specified reader or buffer.
         * @function decode
         * @memberof pb.SyncRoomState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.SyncRoomState} SyncRoomState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SyncRoomState.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.SyncRoomState();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.userList && message.userList.length))
                        message.userList = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.userList.push(reader.int64());
                    } else
                        message.userList.push(reader.int64());
                    break;
                case 2:
                    if (!(message.optRecord && message.optRecord.length))
                        message.optRecord = [];
                    message.optRecord.push($root.pb.PbOptInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Creates a SyncRoomState message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.SyncRoomState
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.SyncRoomState} SyncRoomState
         */
        SyncRoomState.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.SyncRoomState)
                return object;
            var message = new $root.pb.SyncRoomState();
            if (object.userList) {
                if (!Array.isArray(object.userList))
                    throw TypeError(".pb.SyncRoomState.userList: array expected");
                message.userList = [];
                for (var i = 0; i < object.userList.length; ++i)
                    if ($util.Long)
                        (message.userList[i] = $util.Long.fromValue(object.userList[i])).unsigned = false;
                    else if (typeof object.userList[i] === "string")
                        message.userList[i] = parseInt(object.userList[i], 10);
                    else if (typeof object.userList[i] === "number")
                        message.userList[i] = object.userList[i];
                    else if (typeof object.userList[i] === "object")
                        message.userList[i] = new $util.LongBits(object.userList[i].low >>> 0, object.userList[i].high >>> 0).toNumber();
            }
            if (object.optRecord) {
                if (!Array.isArray(object.optRecord))
                    throw TypeError(".pb.SyncRoomState.optRecord: array expected");
                message.optRecord = [];
                for (var i = 0; i < object.optRecord.length; ++i) {
                    if (typeof object.optRecord[i] !== "object")
                        throw TypeError(".pb.SyncRoomState.optRecord: object expected");
                    message.optRecord[i] = $root.pb.PbOptInfo.fromObject(object.optRecord[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SyncRoomState message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.SyncRoomState
         * @static
         * @param {pb.SyncRoomState} message SyncRoomState
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SyncRoomState.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.userList = [];
                object.optRecord = [];
            }
            if (message.userList && message.userList.length) {
                object.userList = [];
                for (var j = 0; j < message.userList.length; ++j)
                    if (typeof message.userList[j] === "number")
                        object.userList[j] = options.longs === String ? String(message.userList[j]) : message.userList[j];
                    else
                        object.userList[j] = options.longs === String ? $util.Long.prototype.toString.call(message.userList[j]) : options.longs === Number ? new $util.LongBits(message.userList[j].low >>> 0, message.userList[j].high >>> 0).toNumber() : message.userList[j];
            }
            if (message.optRecord && message.optRecord.length) {
                object.optRecord = [];
                for (var j = 0; j < message.optRecord.length; ++j)
                    object.optRecord[j] = $root.pb.PbOptInfo.toObject(message.optRecord[j], options);
            }
            return object;
        };

        /**
         * Converts this SyncRoomState to JSON.
         * @function toJSON
         * @memberof pb.SyncRoomState
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SyncRoomState.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SyncRoomState;
    })();

    pb.PbHeroInfo = (function() {

        /**
         * Properties of a PbHeroInfo.
         * @memberof pb
         * @interface IPbHeroInfo
         * @property {number|Long|null} [id] PbHeroInfo id
         * @property {number|null} [tempId] PbHeroInfo tempId
         * @property {number|null} [level] PbHeroInfo level
         * @property {number|null} [exp] PbHeroInfo exp
         * @property {number|null} [atk] PbHeroInfo atk
         * @property {number|null} [def] PbHeroInfo def
         * @property {number|null} [hp] PbHeroInfo hp
         * @property {number|null} [mp] PbHeroInfo mp
         * @property {number|null} [ap] PbHeroInfo ap
         */

        /**
         * Constructs a new PbHeroInfo.
         * @memberof pb
         * @classdesc Represents a PbHeroInfo.
         * @implements IPbHeroInfo
         * @constructor
         * @param {pb.IPbHeroInfo=} [properties] Properties to set
         */
        function PbHeroInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PbHeroInfo id.
         * @member {number|Long} id
         * @memberof pb.PbHeroInfo
         * @instance
         */
        PbHeroInfo.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PbHeroInfo tempId.
         * @member {number} tempId
         * @memberof pb.PbHeroInfo
         * @instance
         */
        PbHeroInfo.prototype.tempId = 0;

        /**
         * PbHeroInfo level.
         * @member {number} level
         * @memberof pb.PbHeroInfo
         * @instance
         */
        PbHeroInfo.prototype.level = 0;

        /**
         * PbHeroInfo exp.
         * @member {number} exp
         * @memberof pb.PbHeroInfo
         * @instance
         */
        PbHeroInfo.prototype.exp = 0;

        /**
         * PbHeroInfo atk.
         * @member {number} atk
         * @memberof pb.PbHeroInfo
         * @instance
         */
        PbHeroInfo.prototype.atk = 0;

        /**
         * PbHeroInfo def.
         * @member {number} def
         * @memberof pb.PbHeroInfo
         * @instance
         */
        PbHeroInfo.prototype.def = 0;

        /**
         * PbHeroInfo hp.
         * @member {number} hp
         * @memberof pb.PbHeroInfo
         * @instance
         */
        PbHeroInfo.prototype.hp = 0;

        /**
         * PbHeroInfo mp.
         * @member {number} mp
         * @memberof pb.PbHeroInfo
         * @instance
         */
        PbHeroInfo.prototype.mp = 0;

        /**
         * PbHeroInfo ap.
         * @member {number} ap
         * @memberof pb.PbHeroInfo
         * @instance
         */
        PbHeroInfo.prototype.ap = 0;

        /**
         * Encodes the specified PbHeroInfo message. Does not implicitly {@link pb.PbHeroInfo.verify|verify} messages.
         * @function encode
         * @memberof pb.PbHeroInfo
         * @static
         * @param {pb.IPbHeroInfo} message PbHeroInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbHeroInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
            if (message.tempId != null && message.hasOwnProperty("tempId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.tempId);
            if (message.level != null && message.hasOwnProperty("level"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.level);
            if (message.exp != null && message.hasOwnProperty("exp"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.exp);
            if (message.ap != null && message.hasOwnProperty("ap"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.ap);
            if (message.atk != null && message.hasOwnProperty("atk"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.atk);
            if (message.def != null && message.hasOwnProperty("def"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.def);
            if (message.hp != null && message.hasOwnProperty("hp"))
                writer.uint32(/* id 11, wireType 0 =*/88).int32(message.hp);
            if (message.mp != null && message.hasOwnProperty("mp"))
                writer.uint32(/* id 12, wireType 0 =*/96).int32(message.mp);
            return writer;
        };

        /**
         * Decodes a PbHeroInfo message from the specified reader or buffer.
         * @function decode
         * @memberof pb.PbHeroInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.PbHeroInfo} PbHeroInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbHeroInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.PbHeroInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int64();
                    break;
                case 2:
                    message.tempId = reader.int32();
                    break;
                case 4:
                    message.level = reader.int32();
                    break;
                case 5:
                    message.exp = reader.int32();
                    break;
                case 9:
                    message.atk = reader.int32();
                    break;
                case 10:
                    message.def = reader.int32();
                    break;
                case 11:
                    message.hp = reader.int32();
                    break;
                case 12:
                    message.mp = reader.int32();
                    break;
                case 8:
                    message.ap = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Creates a PbHeroInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.PbHeroInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.PbHeroInfo} PbHeroInfo
         */
        PbHeroInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.PbHeroInfo)
                return object;
            var message = new $root.pb.PbHeroInfo();
            if (object.id != null)
                if ($util.Long)
                    (message.id = $util.Long.fromValue(object.id)).unsigned = false;
                else if (typeof object.id === "string")
                    message.id = parseInt(object.id, 10);
                else if (typeof object.id === "number")
                    message.id = object.id;
                else if (typeof object.id === "object")
                    message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
            if (object.tempId != null)
                message.tempId = object.tempId | 0;
            if (object.level != null)
                message.level = object.level | 0;
            if (object.exp != null)
                message.exp = object.exp | 0;
            if (object.atk != null)
                message.atk = object.atk | 0;
            if (object.def != null)
                message.def = object.def | 0;
            if (object.hp != null)
                message.hp = object.hp | 0;
            if (object.mp != null)
                message.mp = object.mp | 0;
            if (object.ap != null)
                message.ap = object.ap | 0;
            return message;
        };

        /**
         * Creates a plain object from a PbHeroInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.PbHeroInfo
         * @static
         * @param {pb.PbHeroInfo} message PbHeroInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PbHeroInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.id = options.longs === String ? "0" : 0;
                object.tempId = 0;
                object.level = 0;
                object.exp = 0;
                object.ap = 0;
                object.atk = 0;
                object.def = 0;
                object.hp = 0;
                object.mp = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                if (typeof message.id === "number")
                    object.id = options.longs === String ? String(message.id) : message.id;
                else
                    object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
            if (message.tempId != null && message.hasOwnProperty("tempId"))
                object.tempId = message.tempId;
            if (message.level != null && message.hasOwnProperty("level"))
                object.level = message.level;
            if (message.exp != null && message.hasOwnProperty("exp"))
                object.exp = message.exp;
            if (message.ap != null && message.hasOwnProperty("ap"))
                object.ap = message.ap;
            if (message.atk != null && message.hasOwnProperty("atk"))
                object.atk = message.atk;
            if (message.def != null && message.hasOwnProperty("def"))
                object.def = message.def;
            if (message.hp != null && message.hasOwnProperty("hp"))
                object.hp = message.hp;
            if (message.mp != null && message.hasOwnProperty("mp"))
                object.mp = message.mp;
            return object;
        };

        /**
         * Converts this PbHeroInfo to JSON.
         * @function toJSON
         * @memberof pb.PbHeroInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PbHeroInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PbHeroInfo;
    })();

    pb.HeroInfo = (function() {

        /**
         * Properties of a HeroInfo.
         * @memberof pb
         * @interface IHeroInfo
         * @property {Array.<pb.IPbHeroInfo>|null} [infos] HeroInfo infos
         */

        /**
         * Constructs a new HeroInfo.
         * @memberof pb
         * @classdesc Represents a HeroInfo.
         * @implements IHeroInfo
         * @constructor
         * @param {pb.IHeroInfo=} [properties] Properties to set
         */
        function HeroInfo(properties) {
            this.infos = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HeroInfo infos.
         * @member {Array.<pb.IPbHeroInfo>} infos
         * @memberof pb.HeroInfo
         * @instance
         */
        HeroInfo.prototype.infos = $util.emptyArray;

        /**
         * Encodes the specified HeroInfo message. Does not implicitly {@link pb.HeroInfo.verify|verify} messages.
         * @function encode
         * @memberof pb.HeroInfo
         * @static
         * @param {pb.IHeroInfo} message HeroInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeroInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.infos != null && message.infos.length)
                for (var i = 0; i < message.infos.length; ++i)
                    $root.pb.PbHeroInfo.encode(message.infos[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a HeroInfo message from the specified reader or buffer.
         * @function decode
         * @memberof pb.HeroInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.HeroInfo} HeroInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeroInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.HeroInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.infos && message.infos.length))
                        message.infos = [];
                    message.infos.push($root.pb.PbHeroInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Creates a HeroInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.HeroInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.HeroInfo} HeroInfo
         */
        HeroInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.HeroInfo)
                return object;
            var message = new $root.pb.HeroInfo();
            if (object.infos) {
                if (!Array.isArray(object.infos))
                    throw TypeError(".pb.HeroInfo.infos: array expected");
                message.infos = [];
                for (var i = 0; i < object.infos.length; ++i) {
                    if (typeof object.infos[i] !== "object")
                        throw TypeError(".pb.HeroInfo.infos: object expected");
                    message.infos[i] = $root.pb.PbHeroInfo.fromObject(object.infos[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a HeroInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.HeroInfo
         * @static
         * @param {pb.HeroInfo} message HeroInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HeroInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.infos = [];
            if (message.infos && message.infos.length) {
                object.infos = [];
                for (var j = 0; j < message.infos.length; ++j)
                    object.infos[j] = $root.pb.PbHeroInfo.toObject(message.infos[j], options);
            }
            return object;
        };

        /**
         * Converts this HeroInfo to JSON.
         * @function toJSON
         * @memberof pb.HeroInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HeroInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HeroInfo;
    })();

    pb.SyncPropData = (function() {

        /**
         * Properties of a SyncPropData.
         * @memberof pb
         * @interface ISyncPropData
         * @property {number|Long|null} [heroId] SyncPropData heroId
         * @property {Array.<pb.Prop>|null} [type] SyncPropData type
         * @property {Array.<number|Long>|null} [val] SyncPropData val
         */

        /**
         * Constructs a new SyncPropData.
         * @memberof pb
         * @classdesc Represents a SyncPropData.
         * @implements ISyncPropData
         * @constructor
         * @param {pb.ISyncPropData=} [properties] Properties to set
         */
        function SyncPropData(properties) {
            this.type = [];
            this.val = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SyncPropData heroId.
         * @member {number|Long} heroId
         * @memberof pb.SyncPropData
         * @instance
         */
        SyncPropData.prototype.heroId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SyncPropData type.
         * @member {Array.<pb.Prop>} type
         * @memberof pb.SyncPropData
         * @instance
         */
        SyncPropData.prototype.type = $util.emptyArray;

        /**
         * SyncPropData val.
         * @member {Array.<number|Long>} val
         * @memberof pb.SyncPropData
         * @instance
         */
        SyncPropData.prototype.val = $util.emptyArray;

        /**
         * Encodes the specified SyncPropData message. Does not implicitly {@link pb.SyncPropData.verify|verify} messages.
         * @function encode
         * @memberof pb.SyncPropData
         * @static
         * @param {pb.ISyncPropData} message SyncPropData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SyncPropData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.heroId != null && message.hasOwnProperty("heroId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.heroId);
            if (message.type != null && message.type.length) {
                writer.uint32(/* id 2, wireType 2 =*/18).fork();
                for (var i = 0; i < message.type.length; ++i)
                    writer.int32(message.type[i]);
                writer.ldelim();
            }
            if (message.val != null && message.val.length) {
                writer.uint32(/* id 3, wireType 2 =*/26).fork();
                for (var i = 0; i < message.val.length; ++i)
                    writer.int64(message.val[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Decodes a SyncPropData message from the specified reader or buffer.
         * @function decode
         * @memberof pb.SyncPropData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.SyncPropData} SyncPropData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SyncPropData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.SyncPropData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.heroId = reader.int64();
                    break;
                case 2:
                    if (!(message.type && message.type.length))
                        message.type = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.type.push(reader.int32());
                    } else
                        message.type.push(reader.int32());
                    break;
                case 3:
                    if (!(message.val && message.val.length))
                        message.val = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.val.push(reader.int64());
                    } else
                        message.val.push(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Creates a SyncPropData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.SyncPropData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.SyncPropData} SyncPropData
         */
        SyncPropData.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.SyncPropData)
                return object;
            var message = new $root.pb.SyncPropData();
            if (object.heroId != null)
                if ($util.Long)
                    (message.heroId = $util.Long.fromValue(object.heroId)).unsigned = false;
                else if (typeof object.heroId === "string")
                    message.heroId = parseInt(object.heroId, 10);
                else if (typeof object.heroId === "number")
                    message.heroId = object.heroId;
                else if (typeof object.heroId === "object")
                    message.heroId = new $util.LongBits(object.heroId.low >>> 0, object.heroId.high >>> 0).toNumber();
            if (object.type) {
                if (!Array.isArray(object.type))
                    throw TypeError(".pb.SyncPropData.type: array expected");
                message.type = [];
                for (var i = 0; i < object.type.length; ++i)
                    switch (object.type[i]) {
                    default:
                    case "Coin":
                    case 0:
                        message.type[i] = 0;
                        break;
                    case "Diamond":
                    case 1:
                        message.type[i] = 1;
                        break;
                    case "Vip":
                    case 2:
                        message.type[i] = 2;
                        break;
                    case "Level":
                    case 10:
                        message.type[i] = 10;
                        break;
                    case "Exp":
                    case 11:
                        message.type[i] = 11;
                        break;
                    case "Atk":
                    case 12:
                        message.type[i] = 12;
                        break;
                    case "Def":
                    case 13:
                        message.type[i] = 13;
                        break;
                    case "Hp":
                    case 14:
                        message.type[i] = 14;
                        break;
                    case "Mp":
                    case 15:
                        message.type[i] = 15;
                        break;
                    case "Ap":
                    case 16:
                        message.type[i] = 16;
                        break;
                    }
            }
            if (object.val) {
                if (!Array.isArray(object.val))
                    throw TypeError(".pb.SyncPropData.val: array expected");
                message.val = [];
                for (var i = 0; i < object.val.length; ++i)
                    if ($util.Long)
                        (message.val[i] = $util.Long.fromValue(object.val[i])).unsigned = false;
                    else if (typeof object.val[i] === "string")
                        message.val[i] = parseInt(object.val[i], 10);
                    else if (typeof object.val[i] === "number")
                        message.val[i] = object.val[i];
                    else if (typeof object.val[i] === "object")
                        message.val[i] = new $util.LongBits(object.val[i].low >>> 0, object.val[i].high >>> 0).toNumber();
            }
            return message;
        };

        /**
         * Creates a plain object from a SyncPropData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.SyncPropData
         * @static
         * @param {pb.SyncPropData} message SyncPropData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SyncPropData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.type = [];
                object.val = [];
            }
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.heroId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.heroId = options.longs === String ? "0" : 0;
            if (message.heroId != null && message.hasOwnProperty("heroId"))
                if (typeof message.heroId === "number")
                    object.heroId = options.longs === String ? String(message.heroId) : message.heroId;
                else
                    object.heroId = options.longs === String ? $util.Long.prototype.toString.call(message.heroId) : options.longs === Number ? new $util.LongBits(message.heroId.low >>> 0, message.heroId.high >>> 0).toNumber() : message.heroId;
            if (message.type && message.type.length) {
                object.type = [];
                for (var j = 0; j < message.type.length; ++j)
                    object.type[j] = options.enums === String ? $root.pb.Prop[message.type[j]] : message.type[j];
            }
            if (message.val && message.val.length) {
                object.val = [];
                for (var j = 0; j < message.val.length; ++j)
                    if (typeof message.val[j] === "number")
                        object.val[j] = options.longs === String ? String(message.val[j]) : message.val[j];
                    else
                        object.val[j] = options.longs === String ? $util.Long.prototype.toString.call(message.val[j]) : options.longs === Number ? new $util.LongBits(message.val[j].low >>> 0, message.val[j].high >>> 0).toNumber() : message.val[j];
            }
            return object;
        };

        /**
         * Converts this SyncPropData to JSON.
         * @function toJSON
         * @memberof pb.SyncPropData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SyncPropData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SyncPropData;
    })();

    pb.SyncPropData2 = (function() {

        /**
         * Properties of a SyncPropData2.
         * @memberof pb
         * @interface ISyncPropData2
         * @property {number|Long|null} [heroId] SyncPropData2 heroId
         * @property {Array.<pb.Prop>|null} [type] SyncPropData2 type
         * @property {Array.<string>|null} [val] SyncPropData2 val
         */

        /**
         * Constructs a new SyncPropData2.
         * @memberof pb
         * @classdesc Represents a SyncPropData2.
         * @implements ISyncPropData2
         * @constructor
         * @param {pb.ISyncPropData2=} [properties] Properties to set
         */
        function SyncPropData2(properties) {
            this.type = [];
            this.val = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SyncPropData2 heroId.
         * @member {number|Long} heroId
         * @memberof pb.SyncPropData2
         * @instance
         */
        SyncPropData2.prototype.heroId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SyncPropData2 type.
         * @member {Array.<pb.Prop>} type
         * @memberof pb.SyncPropData2
         * @instance
         */
        SyncPropData2.prototype.type = $util.emptyArray;

        /**
         * SyncPropData2 val.
         * @member {Array.<string>} val
         * @memberof pb.SyncPropData2
         * @instance
         */
        SyncPropData2.prototype.val = $util.emptyArray;

        /**
         * Encodes the specified SyncPropData2 message. Does not implicitly {@link pb.SyncPropData2.verify|verify} messages.
         * @function encode
         * @memberof pb.SyncPropData2
         * @static
         * @param {pb.ISyncPropData2} message SyncPropData2 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SyncPropData2.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.heroId != null && message.hasOwnProperty("heroId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.heroId);
            if (message.type != null && message.type.length) {
                writer.uint32(/* id 2, wireType 2 =*/18).fork();
                for (var i = 0; i < message.type.length; ++i)
                    writer.int32(message.type[i]);
                writer.ldelim();
            }
            if (message.val != null && message.val.length)
                for (var i = 0; i < message.val.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.val[i]);
            return writer;
        };

        /**
         * Decodes a SyncPropData2 message from the specified reader or buffer.
         * @function decode
         * @memberof pb.SyncPropData2
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.SyncPropData2} SyncPropData2
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SyncPropData2.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.SyncPropData2();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.heroId = reader.int64();
                    break;
                case 2:
                    if (!(message.type && message.type.length))
                        message.type = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.type.push(reader.int32());
                    } else
                        message.type.push(reader.int32());
                    break;
                case 3:
                    if (!(message.val && message.val.length))
                        message.val = [];
                    message.val.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Creates a SyncPropData2 message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.SyncPropData2
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.SyncPropData2} SyncPropData2
         */
        SyncPropData2.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.SyncPropData2)
                return object;
            var message = new $root.pb.SyncPropData2();
            if (object.heroId != null)
                if ($util.Long)
                    (message.heroId = $util.Long.fromValue(object.heroId)).unsigned = false;
                else if (typeof object.heroId === "string")
                    message.heroId = parseInt(object.heroId, 10);
                else if (typeof object.heroId === "number")
                    message.heroId = object.heroId;
                else if (typeof object.heroId === "object")
                    message.heroId = new $util.LongBits(object.heroId.low >>> 0, object.heroId.high >>> 0).toNumber();
            if (object.type) {
                if (!Array.isArray(object.type))
                    throw TypeError(".pb.SyncPropData2.type: array expected");
                message.type = [];
                for (var i = 0; i < object.type.length; ++i)
                    switch (object.type[i]) {
                    default:
                    case "Coin":
                    case 0:
                        message.type[i] = 0;
                        break;
                    case "Diamond":
                    case 1:
                        message.type[i] = 1;
                        break;
                    case "Vip":
                    case 2:
                        message.type[i] = 2;
                        break;
                    case "Level":
                    case 10:
                        message.type[i] = 10;
                        break;
                    case "Exp":
                    case 11:
                        message.type[i] = 11;
                        break;
                    case "Atk":
                    case 12:
                        message.type[i] = 12;
                        break;
                    case "Def":
                    case 13:
                        message.type[i] = 13;
                        break;
                    case "Hp":
                    case 14:
                        message.type[i] = 14;
                        break;
                    case "Mp":
                    case 15:
                        message.type[i] = 15;
                        break;
                    case "Ap":
                    case 16:
                        message.type[i] = 16;
                        break;
                    }
            }
            if (object.val) {
                if (!Array.isArray(object.val))
                    throw TypeError(".pb.SyncPropData2.val: array expected");
                message.val = [];
                for (var i = 0; i < object.val.length; ++i)
                    message.val[i] = String(object.val[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a SyncPropData2 message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.SyncPropData2
         * @static
         * @param {pb.SyncPropData2} message SyncPropData2
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SyncPropData2.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.type = [];
                object.val = [];
            }
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.heroId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.heroId = options.longs === String ? "0" : 0;
            if (message.heroId != null && message.hasOwnProperty("heroId"))
                if (typeof message.heroId === "number")
                    object.heroId = options.longs === String ? String(message.heroId) : message.heroId;
                else
                    object.heroId = options.longs === String ? $util.Long.prototype.toString.call(message.heroId) : options.longs === Number ? new $util.LongBits(message.heroId.low >>> 0, message.heroId.high >>> 0).toNumber() : message.heroId;
            if (message.type && message.type.length) {
                object.type = [];
                for (var j = 0; j < message.type.length; ++j)
                    object.type[j] = options.enums === String ? $root.pb.Prop[message.type[j]] : message.type[j];
            }
            if (message.val && message.val.length) {
                object.val = [];
                for (var j = 0; j < message.val.length; ++j)
                    object.val[j] = message.val[j];
            }
            return object;
        };

        /**
         * Converts this SyncPropData2 to JSON.
         * @function toJSON
         * @memberof pb.SyncPropData2
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SyncPropData2.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SyncPropData2;
    })();

    pb.SyncOptData = (function() {

        /**
         * Properties of a SyncOptData.
         * @memberof pb
         * @interface ISyncOptData
         * @property {pb.Opt|null} [type] SyncOptData type
         * @property {Array.<number|Long>|null} [iVal] SyncOptData iVal
         * @property {Array.<string>|null} [strVal] SyncOptData strVal
         */

        /**
         * Constructs a new SyncOptData.
         * @memberof pb
         * @classdesc Represents a SyncOptData.
         * @implements ISyncOptData
         * @constructor
         * @param {pb.ISyncOptData=} [properties] Properties to set
         */
        function SyncOptData(properties) {
            this.iVal = [];
            this.strVal = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SyncOptData type.
         * @member {pb.Opt} type
         * @memberof pb.SyncOptData
         * @instance
         */
        SyncOptData.prototype.type = 0;

        /**
         * SyncOptData iVal.
         * @member {Array.<number|Long>} iVal
         * @memberof pb.SyncOptData
         * @instance
         */
        SyncOptData.prototype.iVal = $util.emptyArray;

        /**
         * SyncOptData strVal.
         * @member {Array.<string>} strVal
         * @memberof pb.SyncOptData
         * @instance
         */
        SyncOptData.prototype.strVal = $util.emptyArray;

        /**
         * Encodes the specified SyncOptData message. Does not implicitly {@link pb.SyncOptData.verify|verify} messages.
         * @function encode
         * @memberof pb.SyncOptData
         * @static
         * @param {pb.ISyncOptData} message SyncOptData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SyncOptData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.iVal != null && message.iVal.length) {
                writer.uint32(/* id 2, wireType 2 =*/18).fork();
                for (var i = 0; i < message.iVal.length; ++i)
                    writer.int64(message.iVal[i]);
                writer.ldelim();
            }
            if (message.strVal != null && message.strVal.length)
                for (var i = 0; i < message.strVal.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.strVal[i]);
            return writer;
        };

        /**
         * Decodes a SyncOptData message from the specified reader or buffer.
         * @function decode
         * @memberof pb.SyncOptData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.SyncOptData} SyncOptData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SyncOptData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.SyncOptData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    if (!(message.iVal && message.iVal.length))
                        message.iVal = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.iVal.push(reader.int64());
                    } else
                        message.iVal.push(reader.int64());
                    break;
                case 3:
                    if (!(message.strVal && message.strVal.length))
                        message.strVal = [];
                    message.strVal.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Creates a SyncOptData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.SyncOptData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.SyncOptData} SyncOptData
         */
        SyncOptData.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.SyncOptData)
                return object;
            var message = new $root.pb.SyncOptData();
            switch (object.type) {
            case "Buy":
            case 0:
                message.type = 0;
                break;
            case "Sale":
            case 1:
                message.type = 1;
                break;
            }
            if (object.iVal) {
                if (!Array.isArray(object.iVal))
                    throw TypeError(".pb.SyncOptData.iVal: array expected");
                message.iVal = [];
                for (var i = 0; i < object.iVal.length; ++i)
                    if ($util.Long)
                        (message.iVal[i] = $util.Long.fromValue(object.iVal[i])).unsigned = false;
                    else if (typeof object.iVal[i] === "string")
                        message.iVal[i] = parseInt(object.iVal[i], 10);
                    else if (typeof object.iVal[i] === "number")
                        message.iVal[i] = object.iVal[i];
                    else if (typeof object.iVal[i] === "object")
                        message.iVal[i] = new $util.LongBits(object.iVal[i].low >>> 0, object.iVal[i].high >>> 0).toNumber();
            }
            if (object.strVal) {
                if (!Array.isArray(object.strVal))
                    throw TypeError(".pb.SyncOptData.strVal: array expected");
                message.strVal = [];
                for (var i = 0; i < object.strVal.length; ++i)
                    message.strVal[i] = String(object.strVal[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a SyncOptData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.SyncOptData
         * @static
         * @param {pb.SyncOptData} message SyncOptData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SyncOptData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.iVal = [];
                object.strVal = [];
            }
            if (options.defaults)
                object.type = options.enums === String ? "Buy" : 0;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.pb.Opt[message.type] : message.type;
            if (message.iVal && message.iVal.length) {
                object.iVal = [];
                for (var j = 0; j < message.iVal.length; ++j)
                    if (typeof message.iVal[j] === "number")
                        object.iVal[j] = options.longs === String ? String(message.iVal[j]) : message.iVal[j];
                    else
                        object.iVal[j] = options.longs === String ? $util.Long.prototype.toString.call(message.iVal[j]) : options.longs === Number ? new $util.LongBits(message.iVal[j].low >>> 0, message.iVal[j].high >>> 0).toNumber() : message.iVal[j];
            }
            if (message.strVal && message.strVal.length) {
                object.strVal = [];
                for (var j = 0; j < message.strVal.length; ++j)
                    object.strVal[j] = message.strVal[j];
            }
            return object;
        };

        /**
         * Converts this SyncOptData to JSON.
         * @function toJSON
         * @memberof pb.SyncOptData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SyncOptData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SyncOptData;
    })();

    return pb;
})();