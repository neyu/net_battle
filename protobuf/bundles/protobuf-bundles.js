var $protobuf = window.protobuf;
$protobuf.roots.default=window;
// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.msgProto = (function() {

    /**
     * Namespace msgProto.
     * @exports msgProto
     * @namespace
     */
    var msgProto = {};

    msgProto.ChatReq = (function() {

        /**
         * Properties of a ChatReq.
         * @memberof msgProto
         * @interface IChatReq
         * @property {string|null} [content] ChatReq content
         */

        /**
         * Constructs a new ChatReq.
         * @memberof msgProto
         * @classdesc Represents a ChatReq.
         * @implements IChatReq
         * @constructor
         * @param {msgProto.IChatReq=} [properties] Properties to set
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
         * @memberof msgProto.ChatReq
         * @instance
         */
        ChatReq.prototype.content = "";

        /**
         * Encodes the specified ChatReq message. Does not implicitly {@link msgProto.ChatReq.verify|verify} messages.
         * @function encode
         * @memberof msgProto.ChatReq
         * @static
         * @param {msgProto.IChatReq} message ChatReq message or plain object to encode
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
         * @memberof msgProto.ChatReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msgProto.ChatReq} ChatReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChatReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msgProto.ChatReq();
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
         * @memberof msgProto.ChatReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msgProto.ChatReq} ChatReq
         */
        ChatReq.fromObject = function fromObject(object) {
            if (object instanceof $root.msgProto.ChatReq)
                return object;
            var message = new $root.msgProto.ChatReq();
            if (object.content != null)
                message.content = String(object.content);
            return message;
        };

        /**
         * Creates a plain object from a ChatReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msgProto.ChatReq
         * @static
         * @param {msgProto.ChatReq} message ChatReq
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
         * @memberof msgProto.ChatReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChatReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ChatReq;
    })();

    msgProto.ChatAck = (function() {

        /**
         * Properties of a ChatAck.
         * @memberof msgProto
         * @interface IChatAck
         * @property {string|null} [content] ChatAck content
         */

        /**
         * Constructs a new ChatAck.
         * @memberof msgProto
         * @classdesc Represents a ChatAck.
         * @implements IChatAck
         * @constructor
         * @param {msgProto.IChatAck=} [properties] Properties to set
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
         * @memberof msgProto.ChatAck
         * @instance
         */
        ChatAck.prototype.content = "";

        /**
         * Encodes the specified ChatAck message. Does not implicitly {@link msgProto.ChatAck.verify|verify} messages.
         * @function encode
         * @memberof msgProto.ChatAck
         * @static
         * @param {msgProto.IChatAck} message ChatAck message or plain object to encode
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
         * @memberof msgProto.ChatAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msgProto.ChatAck} ChatAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChatAck.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msgProto.ChatAck();
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
         * @memberof msgProto.ChatAck
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msgProto.ChatAck} ChatAck
         */
        ChatAck.fromObject = function fromObject(object) {
            if (object instanceof $root.msgProto.ChatAck)
                return object;
            var message = new $root.msgProto.ChatAck();
            if (object.content != null)
                message.content = String(object.content);
            return message;
        };

        /**
         * Creates a plain object from a ChatAck message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msgProto.ChatAck
         * @static
         * @param {msgProto.ChatAck} message ChatAck
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
         * @memberof msgProto.ChatAck
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChatAck.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ChatAck;
    })();

    msgProto.TestAck = (function() {

        /**
         * Properties of a TestAck.
         * @memberof msgProto
         * @interface ITestAck
         * @property {string|null} [dummy] TestAck dummy
         */

        /**
         * Constructs a new TestAck.
         * @memberof msgProto
         * @classdesc Represents a TestAck.
         * @implements ITestAck
         * @constructor
         * @param {msgProto.ITestAck=} [properties] Properties to set
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
         * @memberof msgProto.TestAck
         * @instance
         */
        TestAck.prototype.dummy = "";

        /**
         * Encodes the specified TestAck message. Does not implicitly {@link msgProto.TestAck.verify|verify} messages.
         * @function encode
         * @memberof msgProto.TestAck
         * @static
         * @param {msgProto.ITestAck} message TestAck message or plain object to encode
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
         * @memberof msgProto.TestAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msgProto.TestAck} TestAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TestAck.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msgProto.TestAck();
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
         * @memberof msgProto.TestAck
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msgProto.TestAck} TestAck
         */
        TestAck.fromObject = function fromObject(object) {
            if (object instanceof $root.msgProto.TestAck)
                return object;
            var message = new $root.msgProto.TestAck();
            if (object.dummy != null)
                message.dummy = String(object.dummy);
            return message;
        };

        /**
         * Creates a plain object from a TestAck message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msgProto.TestAck
         * @static
         * @param {msgProto.TestAck} message TestAck
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
         * @memberof msgProto.TestAck
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TestAck.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TestAck;
    })();

    msgProto.ContentReq = (function() {

        /**
         * Properties of a ContentReq.
         * @memberof msgProto
         * @interface IContentReq
         * @property {string|null} [msg] ContentReq msg
         * @property {number|null} [value] ContentReq value
         */

        /**
         * Constructs a new ContentReq.
         * @memberof msgProto
         * @classdesc Represents a ContentReq.
         * @implements IContentReq
         * @constructor
         * @param {msgProto.IContentReq=} [properties] Properties to set
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
         * @memberof msgProto.ContentReq
         * @instance
         */
        ContentReq.prototype.msg = "";

        /**
         * ContentReq value.
         * @member {number} value
         * @memberof msgProto.ContentReq
         * @instance
         */
        ContentReq.prototype.value = 0;

        /**
         * Encodes the specified ContentReq message. Does not implicitly {@link msgProto.ContentReq.verify|verify} messages.
         * @function encode
         * @memberof msgProto.ContentReq
         * @static
         * @param {msgProto.IContentReq} message ContentReq message or plain object to encode
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
         * @memberof msgProto.ContentReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msgProto.ContentReq} ContentReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ContentReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msgProto.ContentReq();
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
         * @memberof msgProto.ContentReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msgProto.ContentReq} ContentReq
         */
        ContentReq.fromObject = function fromObject(object) {
            if (object instanceof $root.msgProto.ContentReq)
                return object;
            var message = new $root.msgProto.ContentReq();
            if (object.msg != null)
                message.msg = String(object.msg);
            if (object.value != null)
                message.value = object.value | 0;
            return message;
        };

        /**
         * Creates a plain object from a ContentReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msgProto.ContentReq
         * @static
         * @param {msgProto.ContentReq} message ContentReq
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
         * @memberof msgProto.ContentReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ContentReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ContentReq;
    })();

    msgProto.ContentAck = (function() {

        /**
         * Properties of a ContentAck.
         * @memberof msgProto
         * @interface IContentAck
         * @property {string|null} [msg] ContentAck msg
         * @property {number|null} [value] ContentAck value
         */

        /**
         * Constructs a new ContentAck.
         * @memberof msgProto
         * @classdesc Represents a ContentAck.
         * @implements IContentAck
         * @constructor
         * @param {msgProto.IContentAck=} [properties] Properties to set
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
         * @memberof msgProto.ContentAck
         * @instance
         */
        ContentAck.prototype.msg = "";

        /**
         * ContentAck value.
         * @member {number} value
         * @memberof msgProto.ContentAck
         * @instance
         */
        ContentAck.prototype.value = 0;

        /**
         * Encodes the specified ContentAck message. Does not implicitly {@link msgProto.ContentAck.verify|verify} messages.
         * @function encode
         * @memberof msgProto.ContentAck
         * @static
         * @param {msgProto.IContentAck} message ContentAck message or plain object to encode
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
         * @memberof msgProto.ContentAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msgProto.ContentAck} ContentAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ContentAck.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msgProto.ContentAck();
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
         * @memberof msgProto.ContentAck
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msgProto.ContentAck} ContentAck
         */
        ContentAck.fromObject = function fromObject(object) {
            if (object instanceof $root.msgProto.ContentAck)
                return object;
            var message = new $root.msgProto.ContentAck();
            if (object.msg != null)
                message.msg = String(object.msg);
            if (object.value != null)
                message.value = object.value | 0;
            return message;
        };

        /**
         * Creates a plain object from a ContentAck message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msgProto.ContentAck
         * @static
         * @param {msgProto.ContentAck} message ContentAck
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
         * @memberof msgProto.ContentAck
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ContentAck.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ContentAck;
    })();

    msgProto.UserCreate = (function() {

        /**
         * Properties of a UserCreate.
         * @memberof msgProto
         * @interface IUserCreate
         * @property {string|null} [name] UserCreate name
         * @property {number|null} [heroTempId] UserCreate heroTempId
         * @property {number|null} [sex] UserCreate sex
         * @property {number|null} [serverIndexId] UserCreate serverIndexId
         * @property {string|null} [shareKey] UserCreate shareKey
         */

        /**
         * Constructs a new UserCreate.
         * @memberof msgProto
         * @classdesc Represents a UserCreate.
         * @implements IUserCreate
         * @constructor
         * @param {msgProto.IUserCreate=} [properties] Properties to set
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
         * @memberof msgProto.UserCreate
         * @instance
         */
        UserCreate.prototype.name = "";

        /**
         * UserCreate heroTempId.
         * @member {number} heroTempId
         * @memberof msgProto.UserCreate
         * @instance
         */
        UserCreate.prototype.heroTempId = 0;

        /**
         * UserCreate sex.
         * @member {number} sex
         * @memberof msgProto.UserCreate
         * @instance
         */
        UserCreate.prototype.sex = 0;

        /**
         * UserCreate serverIndexId.
         * @member {number} serverIndexId
         * @memberof msgProto.UserCreate
         * @instance
         */
        UserCreate.prototype.serverIndexId = 0;

        /**
         * UserCreate shareKey.
         * @member {string} shareKey
         * @memberof msgProto.UserCreate
         * @instance
         */
        UserCreate.prototype.shareKey = "";

        /**
         * Encodes the specified UserCreate message. Does not implicitly {@link msgProto.UserCreate.verify|verify} messages.
         * @function encode
         * @memberof msgProto.UserCreate
         * @static
         * @param {msgProto.IUserCreate} message UserCreate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserCreate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.heroTempId != null && message.hasOwnProperty("heroTempId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.heroTempId);
            if (message.sex != null && message.hasOwnProperty("sex"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.sex);
            if (message.serverIndexId != null && message.hasOwnProperty("serverIndexId"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.serverIndexId);
            if (message.shareKey != null && message.hasOwnProperty("shareKey"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.shareKey);
            return writer;
        };

        /**
         * Decodes a UserCreate message from the specified reader or buffer.
         * @function decode
         * @memberof msgProto.UserCreate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msgProto.UserCreate} UserCreate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserCreate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msgProto.UserCreate();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.heroTempId = reader.int32();
                    break;
                case 3:
                    message.sex = reader.int32();
                    break;
                case 4:
                    message.serverIndexId = reader.int32();
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
         * @memberof msgProto.UserCreate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msgProto.UserCreate} UserCreate
         */
        UserCreate.fromObject = function fromObject(object) {
            if (object instanceof $root.msgProto.UserCreate)
                return object;
            var message = new $root.msgProto.UserCreate();
            if (object.name != null)
                message.name = String(object.name);
            if (object.heroTempId != null)
                message.heroTempId = object.heroTempId | 0;
            if (object.sex != null)
                message.sex = object.sex | 0;
            if (object.serverIndexId != null)
                message.serverIndexId = object.serverIndexId | 0;
            if (object.shareKey != null)
                message.shareKey = String(object.shareKey);
            return message;
        };

        /**
         * Creates a plain object from a UserCreate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msgProto.UserCreate
         * @static
         * @param {msgProto.UserCreate} message UserCreate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserCreate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.name = "";
                object.heroTempId = 0;
                object.sex = 0;
                object.serverIndexId = 0;
                object.shareKey = "";
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.heroTempId != null && message.hasOwnProperty("heroTempId"))
                object.heroTempId = message.heroTempId;
            if (message.sex != null && message.hasOwnProperty("sex"))
                object.sex = message.sex;
            if (message.serverIndexId != null && message.hasOwnProperty("serverIndexId"))
                object.serverIndexId = message.serverIndexId;
            if (message.shareKey != null && message.hasOwnProperty("shareKey"))
                object.shareKey = message.shareKey;
            return object;
        };

        /**
         * Converts this UserCreate to JSON.
         * @function toJSON
         * @memberof msgProto.UserCreate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserCreate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserCreate;
    })();

    msgProto.UserCreateResponse = (function() {

        /**
         * Properties of a UserCreateResponse.
         * @memberof msgProto
         * @interface IUserCreateResponse
         * @property {number|null} [retCode] UserCreateResponse retCode
         */

        /**
         * Constructs a new UserCreateResponse.
         * @memberof msgProto
         * @classdesc Represents a UserCreateResponse.
         * @implements IUserCreateResponse
         * @constructor
         * @param {msgProto.IUserCreateResponse=} [properties] Properties to set
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
         * @memberof msgProto.UserCreateResponse
         * @instance
         */
        UserCreateResponse.prototype.retCode = 0;

        /**
         * Encodes the specified UserCreateResponse message. Does not implicitly {@link msgProto.UserCreateResponse.verify|verify} messages.
         * @function encode
         * @memberof msgProto.UserCreateResponse
         * @static
         * @param {msgProto.IUserCreateResponse} message UserCreateResponse message or plain object to encode
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
         * @memberof msgProto.UserCreateResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msgProto.UserCreateResponse} UserCreateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserCreateResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msgProto.UserCreateResponse();
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
         * @memberof msgProto.UserCreateResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msgProto.UserCreateResponse} UserCreateResponse
         */
        UserCreateResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.msgProto.UserCreateResponse)
                return object;
            var message = new $root.msgProto.UserCreateResponse();
            if (object.retCode != null)
                message.retCode = object.retCode | 0;
            return message;
        };

        /**
         * Creates a plain object from a UserCreateResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msgProto.UserCreateResponse
         * @static
         * @param {msgProto.UserCreateResponse} message UserCreateResponse
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
         * @memberof msgProto.UserCreateResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserCreateResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserCreateResponse;
    })();

    msgProto.GameEnter = (function() {

        /**
         * Properties of a GameEnter.
         * @memberof msgProto
         * @interface IGameEnter
         * @property {number|Long|null} [accId] GameEnter accId
         * @property {string|null} [loginKey] GameEnter loginKey
         * @property {number|null} [serverIndexId] GameEnter serverIndexId
         */

        /**
         * Constructs a new GameEnter.
         * @memberof msgProto
         * @classdesc Represents a GameEnter.
         * @implements IGameEnter
         * @constructor
         * @param {msgProto.IGameEnter=} [properties] Properties to set
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
         * @memberof msgProto.GameEnter
         * @instance
         */
        GameEnter.prototype.accId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GameEnter loginKey.
         * @member {string} loginKey
         * @memberof msgProto.GameEnter
         * @instance
         */
        GameEnter.prototype.loginKey = "";

        /**
         * GameEnter serverIndexId.
         * @member {number} serverIndexId
         * @memberof msgProto.GameEnter
         * @instance
         */
        GameEnter.prototype.serverIndexId = 0;

        /**
         * Encodes the specified GameEnter message. Does not implicitly {@link msgProto.GameEnter.verify|verify} messages.
         * @function encode
         * @memberof msgProto.GameEnter
         * @static
         * @param {msgProto.IGameEnter} message GameEnter message or plain object to encode
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
            if (message.serverIndexId != null && message.hasOwnProperty("serverIndexId"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.serverIndexId);
            return writer;
        };

        /**
         * Decodes a GameEnter message from the specified reader or buffer.
         * @function decode
         * @memberof msgProto.GameEnter
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msgProto.GameEnter} GameEnter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameEnter.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msgProto.GameEnter();
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
                    message.serverIndexId = reader.int32();
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
         * @memberof msgProto.GameEnter
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msgProto.GameEnter} GameEnter
         */
        GameEnter.fromObject = function fromObject(object) {
            if (object instanceof $root.msgProto.GameEnter)
                return object;
            var message = new $root.msgProto.GameEnter();
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
            if (object.serverIndexId != null)
                message.serverIndexId = object.serverIndexId | 0;
            return message;
        };

        /**
         * Creates a plain object from a GameEnter message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msgProto.GameEnter
         * @static
         * @param {msgProto.GameEnter} message GameEnter
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
                object.serverIndexId = 0;
            }
            if (message.accId != null && message.hasOwnProperty("accId"))
                if (typeof message.accId === "number")
                    object.accId = options.longs === String ? String(message.accId) : message.accId;
                else
                    object.accId = options.longs === String ? $util.Long.prototype.toString.call(message.accId) : options.longs === Number ? new $util.LongBits(message.accId.low >>> 0, message.accId.high >>> 0).toNumber() : message.accId;
            if (message.loginKey != null && message.hasOwnProperty("loginKey"))
                object.loginKey = message.loginKey;
            if (message.serverIndexId != null && message.hasOwnProperty("serverIndexId"))
                object.serverIndexId = message.serverIndexId;
            return object;
        };

        /**
         * Converts this GameEnter to JSON.
         * @function toJSON
         * @memberof msgProto.GameEnter
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameEnter.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameEnter;
    })();

    msgProto.GameEnterResponse = (function() {

        /**
         * Properties of a GameEnterResponse.
         * @memberof msgProto
         * @interface IGameEnterResponse
         * @property {number|null} [retCode] GameEnterResponse retCode
         * @property {string|null} [nickName] GameEnterResponse nickName
         * @property {number|Long|null} [userId] GameEnterResponse userId
         */

        /**
         * Constructs a new GameEnterResponse.
         * @memberof msgProto
         * @classdesc Represents a GameEnterResponse.
         * @implements IGameEnterResponse
         * @constructor
         * @param {msgProto.IGameEnterResponse=} [properties] Properties to set
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
         * @memberof msgProto.GameEnterResponse
         * @instance
         */
        GameEnterResponse.prototype.retCode = 0;

        /**
         * GameEnterResponse nickName.
         * @member {string} nickName
         * @memberof msgProto.GameEnterResponse
         * @instance
         */
        GameEnterResponse.prototype.nickName = "";

        /**
         * GameEnterResponse userId.
         * @member {number|Long} userId
         * @memberof msgProto.GameEnterResponse
         * @instance
         */
        GameEnterResponse.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Encodes the specified GameEnterResponse message. Does not implicitly {@link msgProto.GameEnterResponse.verify|verify} messages.
         * @function encode
         * @memberof msgProto.GameEnterResponse
         * @static
         * @param {msgProto.IGameEnterResponse} message GameEnterResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameEnterResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.retCode != null && message.hasOwnProperty("retCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.retCode);
            if (message.nickName != null && message.hasOwnProperty("nickName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.nickName);
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.userId);
            return writer;
        };

        /**
         * Decodes a GameEnterResponse message from the specified reader or buffer.
         * @function decode
         * @memberof msgProto.GameEnterResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msgProto.GameEnterResponse} GameEnterResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameEnterResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msgProto.GameEnterResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.retCode = reader.int32();
                    break;
                case 2:
                    message.nickName = reader.string();
                    break;
                case 3:
                    message.userId = reader.int64();
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
         * @memberof msgProto.GameEnterResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msgProto.GameEnterResponse} GameEnterResponse
         */
        GameEnterResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.msgProto.GameEnterResponse)
                return object;
            var message = new $root.msgProto.GameEnterResponse();
            if (object.retCode != null)
                message.retCode = object.retCode | 0;
            if (object.nickName != null)
                message.nickName = String(object.nickName);
            if (object.userId != null)
                if ($util.Long)
                    (message.userId = $util.Long.fromValue(object.userId)).unsigned = false;
                else if (typeof object.userId === "string")
                    message.userId = parseInt(object.userId, 10);
                else if (typeof object.userId === "number")
                    message.userId = object.userId;
                else if (typeof object.userId === "object")
                    message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a GameEnterResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msgProto.GameEnterResponse
         * @static
         * @param {msgProto.GameEnterResponse} message GameEnterResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameEnterResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.retCode = 0;
                object.nickName = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.userId = options.longs === String ? "0" : 0;
            }
            if (message.retCode != null && message.hasOwnProperty("retCode"))
                object.retCode = message.retCode;
            if (message.nickName != null && message.hasOwnProperty("nickName"))
                object.nickName = message.nickName;
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (typeof message.userId === "number")
                    object.userId = options.longs === String ? String(message.userId) : message.userId;
                else
                    object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
            return object;
        };

        /**
         * Converts this GameEnterResponse to JSON.
         * @function toJSON
         * @memberof msgProto.GameEnterResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameEnterResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameEnterResponse;
    })();

    msgProto.NetGetServerDate = (function() {

        /**
         * Properties of a NetGetServerDate.
         * @memberof msgProto
         * @interface INetGetServerDate
         */

        /**
         * Constructs a new NetGetServerDate.
         * @memberof msgProto
         * @classdesc Represents a NetGetServerDate.
         * @implements INetGetServerDate
         * @constructor
         * @param {msgProto.INetGetServerDate=} [properties] Properties to set
         */
        function NetGetServerDate(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Encodes the specified NetGetServerDate message. Does not implicitly {@link msgProto.NetGetServerDate.verify|verify} messages.
         * @function encode
         * @memberof msgProto.NetGetServerDate
         * @static
         * @param {msgProto.INetGetServerDate} message NetGetServerDate message or plain object to encode
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
         * @memberof msgProto.NetGetServerDate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msgProto.NetGetServerDate} NetGetServerDate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NetGetServerDate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msgProto.NetGetServerDate();
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
         * @memberof msgProto.NetGetServerDate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msgProto.NetGetServerDate} NetGetServerDate
         */
        NetGetServerDate.fromObject = function fromObject(object) {
            if (object instanceof $root.msgProto.NetGetServerDate)
                return object;
            return new $root.msgProto.NetGetServerDate();
        };

        /**
         * Creates a plain object from a NetGetServerDate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msgProto.NetGetServerDate
         * @static
         * @param {msgProto.NetGetServerDate} message NetGetServerDate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NetGetServerDate.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this NetGetServerDate to JSON.
         * @function toJSON
         * @memberof msgProto.NetGetServerDate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NetGetServerDate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return NetGetServerDate;
    })();

    msgProto.AccountLogin = (function() {

        /**
         * Properties of an AccountLogin.
         * @memberof msgProto
         * @interface IAccountLogin
         * @property {string|null} [account] AccountLogin account
         * @property {string|null} [pwd] AccountLogin pwd
         * @property {number|null} [channelId] AccountLogin channelId
         */

        /**
         * Constructs a new AccountLogin.
         * @memberof msgProto
         * @classdesc Represents an AccountLogin.
         * @implements IAccountLogin
         * @constructor
         * @param {msgProto.IAccountLogin=} [properties] Properties to set
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
         * @memberof msgProto.AccountLogin
         * @instance
         */
        AccountLogin.prototype.account = "";

        /**
         * AccountLogin pwd.
         * @member {string} pwd
         * @memberof msgProto.AccountLogin
         * @instance
         */
        AccountLogin.prototype.pwd = "";

        /**
         * AccountLogin channelId.
         * @member {number} channelId
         * @memberof msgProto.AccountLogin
         * @instance
         */
        AccountLogin.prototype.channelId = 0;

        /**
         * Encodes the specified AccountLogin message. Does not implicitly {@link msgProto.AccountLogin.verify|verify} messages.
         * @function encode
         * @memberof msgProto.AccountLogin
         * @static
         * @param {msgProto.IAccountLogin} message AccountLogin message or plain object to encode
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
         * @memberof msgProto.AccountLogin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msgProto.AccountLogin} AccountLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccountLogin.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msgProto.AccountLogin();
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
         * @memberof msgProto.AccountLogin
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msgProto.AccountLogin} AccountLogin
         */
        AccountLogin.fromObject = function fromObject(object) {
            if (object instanceof $root.msgProto.AccountLogin)
                return object;
            var message = new $root.msgProto.AccountLogin();
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
         * @memberof msgProto.AccountLogin
         * @static
         * @param {msgProto.AccountLogin} message AccountLogin
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
         * @memberof msgProto.AccountLogin
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AccountLogin.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AccountLogin;
    })();

    msgProto.LoginResponse = (function() {

        /**
         * Properties of a LoginResponse.
         * @memberof msgProto
         * @interface ILoginResponse
         * @property {number|null} [retCode] LoginResponse retCode
         * @property {number|Long|null} [accId] LoginResponse accId
         * @property {string|null} [account] LoginResponse account
         * @property {string|null} [email] LoginResponse email
         * @property {string|null} [deviceId] LoginResponse deviceId
         * @property {number|null} [status] LoginResponse status
         * @property {string|null} [sdkData] LoginResponse sdkData
         * @property {string|null} [exData] LoginResponse exData
         * @property {number|null} [loginCount] LoginResponse loginCount
         * @property {string|null} [loginKey] LoginResponse loginKey
         * @property {string|null} [userServers] LoginResponse userServers
         * @property {string|null} [rechargeCom] LoginResponse rechargeCom
         * @property {string|null} [sdkChannelId] LoginResponse sdkChannelId
         * @property {number|Long|null} [bendExpireAt] LoginResponse bendExpireAt
         * @property {number|null} [bendType] LoginResponse bendType
         */

        /**
         * Constructs a new LoginResponse.
         * @memberof msgProto
         * @classdesc Represents a LoginResponse.
         * @implements ILoginResponse
         * @constructor
         * @param {msgProto.ILoginResponse=} [properties] Properties to set
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
         * @memberof msgProto.LoginResponse
         * @instance
         */
        LoginResponse.prototype.retCode = 0;

        /**
         * LoginResponse accId.
         * @member {number|Long} accId
         * @memberof msgProto.LoginResponse
         * @instance
         */
        LoginResponse.prototype.accId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * LoginResponse account.
         * @member {string} account
         * @memberof msgProto.LoginResponse
         * @instance
         */
        LoginResponse.prototype.account = "";

        /**
         * LoginResponse email.
         * @member {string} email
         * @memberof msgProto.LoginResponse
         * @instance
         */
        LoginResponse.prototype.email = "";

        /**
         * LoginResponse deviceId.
         * @member {string} deviceId
         * @memberof msgProto.LoginResponse
         * @instance
         */
        LoginResponse.prototype.deviceId = "";

        /**
         * LoginResponse status.
         * @member {number} status
         * @memberof msgProto.LoginResponse
         * @instance
         */
        LoginResponse.prototype.status = 0;

        /**
         * LoginResponse sdkData.
         * @member {string} sdkData
         * @memberof msgProto.LoginResponse
         * @instance
         */
        LoginResponse.prototype.sdkData = "";

        /**
         * LoginResponse exData.
         * @member {string} exData
         * @memberof msgProto.LoginResponse
         * @instance
         */
        LoginResponse.prototype.exData = "";

        /**
         * LoginResponse loginCount.
         * @member {number} loginCount
         * @memberof msgProto.LoginResponse
         * @instance
         */
        LoginResponse.prototype.loginCount = 0;

        /**
         * LoginResponse loginKey.
         * @member {string} loginKey
         * @memberof msgProto.LoginResponse
         * @instance
         */
        LoginResponse.prototype.loginKey = "";

        /**
         * LoginResponse userServers.
         * @member {string} userServers
         * @memberof msgProto.LoginResponse
         * @instance
         */
        LoginResponse.prototype.userServers = "";

        /**
         * LoginResponse rechargeCom.
         * @member {string} rechargeCom
         * @memberof msgProto.LoginResponse
         * @instance
         */
        LoginResponse.prototype.rechargeCom = "";

        /**
         * LoginResponse sdkChannelId.
         * @member {string} sdkChannelId
         * @memberof msgProto.LoginResponse
         * @instance
         */
        LoginResponse.prototype.sdkChannelId = "";

        /**
         * LoginResponse bendExpireAt.
         * @member {number|Long} bendExpireAt
         * @memberof msgProto.LoginResponse
         * @instance
         */
        LoginResponse.prototype.bendExpireAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * LoginResponse bendType.
         * @member {number} bendType
         * @memberof msgProto.LoginResponse
         * @instance
         */
        LoginResponse.prototype.bendType = 0;

        /**
         * Encodes the specified LoginResponse message. Does not implicitly {@link msgProto.LoginResponse.verify|verify} messages.
         * @function encode
         * @memberof msgProto.LoginResponse
         * @static
         * @param {msgProto.ILoginResponse} message LoginResponse message or plain object to encode
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
            if (message.email != null && message.hasOwnProperty("email"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.email);
            if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.deviceId);
            if (message.status != null && message.hasOwnProperty("status"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.status);
            if (message.sdkData != null && message.hasOwnProperty("sdkData"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.sdkData);
            if (message.exData != null && message.hasOwnProperty("exData"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.exData);
            if (message.loginCount != null && message.hasOwnProperty("loginCount"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.loginCount);
            if (message.loginKey != null && message.hasOwnProperty("loginKey"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.loginKey);
            if (message.userServers != null && message.hasOwnProperty("userServers"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.userServers);
            if (message.rechargeCom != null && message.hasOwnProperty("rechargeCom"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.rechargeCom);
            if (message.sdkChannelId != null && message.hasOwnProperty("sdkChannelId"))
                writer.uint32(/* id 14, wireType 2 =*/114).string(message.sdkChannelId);
            if (message.bendExpireAt != null && message.hasOwnProperty("bendExpireAt"))
                writer.uint32(/* id 15, wireType 0 =*/120).int64(message.bendExpireAt);
            if (message.bendType != null && message.hasOwnProperty("bendType"))
                writer.uint32(/* id 16, wireType 0 =*/128).int32(message.bendType);
            return writer;
        };

        /**
         * Decodes a LoginResponse message from the specified reader or buffer.
         * @function decode
         * @memberof msgProto.LoginResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msgProto.LoginResponse} LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msgProto.LoginResponse();
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
                    message.email = reader.string();
                    break;
                case 5:
                    message.deviceId = reader.string();
                    break;
                case 6:
                    message.status = reader.int32();
                    break;
                case 8:
                    message.sdkData = reader.string();
                    break;
                case 9:
                    message.exData = reader.string();
                    break;
                case 10:
                    message.loginCount = reader.int32();
                    break;
                case 11:
                    message.loginKey = reader.string();
                    break;
                case 12:
                    message.userServers = reader.string();
                    break;
                case 13:
                    message.rechargeCom = reader.string();
                    break;
                case 14:
                    message.sdkChannelId = reader.string();
                    break;
                case 15:
                    message.bendExpireAt = reader.int64();
                    break;
                case 16:
                    message.bendType = reader.int32();
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
         * @memberof msgProto.LoginResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msgProto.LoginResponse} LoginResponse
         */
        LoginResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.msgProto.LoginResponse)
                return object;
            var message = new $root.msgProto.LoginResponse();
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
            if (object.email != null)
                message.email = String(object.email);
            if (object.deviceId != null)
                message.deviceId = String(object.deviceId);
            if (object.status != null)
                message.status = object.status | 0;
            if (object.sdkData != null)
                message.sdkData = String(object.sdkData);
            if (object.exData != null)
                message.exData = String(object.exData);
            if (object.loginCount != null)
                message.loginCount = object.loginCount | 0;
            if (object.loginKey != null)
                message.loginKey = String(object.loginKey);
            if (object.userServers != null)
                message.userServers = String(object.userServers);
            if (object.rechargeCom != null)
                message.rechargeCom = String(object.rechargeCom);
            if (object.sdkChannelId != null)
                message.sdkChannelId = String(object.sdkChannelId);
            if (object.bendExpireAt != null)
                if ($util.Long)
                    (message.bendExpireAt = $util.Long.fromValue(object.bendExpireAt)).unsigned = false;
                else if (typeof object.bendExpireAt === "string")
                    message.bendExpireAt = parseInt(object.bendExpireAt, 10);
                else if (typeof object.bendExpireAt === "number")
                    message.bendExpireAt = object.bendExpireAt;
                else if (typeof object.bendExpireAt === "object")
                    message.bendExpireAt = new $util.LongBits(object.bendExpireAt.low >>> 0, object.bendExpireAt.high >>> 0).toNumber();
            if (object.bendType != null)
                message.bendType = object.bendType | 0;
            return message;
        };

        /**
         * Creates a plain object from a LoginResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msgProto.LoginResponse
         * @static
         * @param {msgProto.LoginResponse} message LoginResponse
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
                object.email = "";
                object.deviceId = "";
                object.status = 0;
                object.sdkData = "";
                object.exData = "";
                object.loginCount = 0;
                object.loginKey = "";
                object.userServers = "";
                object.rechargeCom = "";
                object.sdkChannelId = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.bendExpireAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.bendExpireAt = options.longs === String ? "0" : 0;
                object.bendType = 0;
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
            if (message.email != null && message.hasOwnProperty("email"))
                object.email = message.email;
            if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                object.deviceId = message.deviceId;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.sdkData != null && message.hasOwnProperty("sdkData"))
                object.sdkData = message.sdkData;
            if (message.exData != null && message.hasOwnProperty("exData"))
                object.exData = message.exData;
            if (message.loginCount != null && message.hasOwnProperty("loginCount"))
                object.loginCount = message.loginCount;
            if (message.loginKey != null && message.hasOwnProperty("loginKey"))
                object.loginKey = message.loginKey;
            if (message.userServers != null && message.hasOwnProperty("userServers"))
                object.userServers = message.userServers;
            if (message.rechargeCom != null && message.hasOwnProperty("rechargeCom"))
                object.rechargeCom = message.rechargeCom;
            if (message.sdkChannelId != null && message.hasOwnProperty("sdkChannelId"))
                object.sdkChannelId = message.sdkChannelId;
            if (message.bendExpireAt != null && message.hasOwnProperty("bendExpireAt"))
                if (typeof message.bendExpireAt === "number")
                    object.bendExpireAt = options.longs === String ? String(message.bendExpireAt) : message.bendExpireAt;
                else
                    object.bendExpireAt = options.longs === String ? $util.Long.prototype.toString.call(message.bendExpireAt) : options.longs === Number ? new $util.LongBits(message.bendExpireAt.low >>> 0, message.bendExpireAt.high >>> 0).toNumber() : message.bendExpireAt;
            if (message.bendType != null && message.hasOwnProperty("bendType"))
                object.bendType = message.bendType;
            return object;
        };

        /**
         * Converts this LoginResponse to JSON.
         * @function toJSON
         * @memberof msgProto.LoginResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LoginResponse;
    })();

    msgProto.AccountLoginBySdk = (function() {

        /**
         * Properties of an AccountLoginBySdk.
         * @memberof msgProto
         * @interface IAccountLoginBySdk
         * @property {string|null} [channelId] AccountLoginBySdk channelId
         * @property {string|null} [sdkData] AccountLoginBySdk sdkData
         * @property {string|null} [deviceId] AccountLoginBySdk deviceId
         */

        /**
         * Constructs a new AccountLoginBySdk.
         * @memberof msgProto
         * @classdesc Represents an AccountLoginBySdk.
         * @implements IAccountLoginBySdk
         * @constructor
         * @param {msgProto.IAccountLoginBySdk=} [properties] Properties to set
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
         * @memberof msgProto.AccountLoginBySdk
         * @instance
         */
        AccountLoginBySdk.prototype.channelId = "";

        /**
         * AccountLoginBySdk sdkData.
         * @member {string} sdkData
         * @memberof msgProto.AccountLoginBySdk
         * @instance
         */
        AccountLoginBySdk.prototype.sdkData = "";

        /**
         * AccountLoginBySdk deviceId.
         * @member {string} deviceId
         * @memberof msgProto.AccountLoginBySdk
         * @instance
         */
        AccountLoginBySdk.prototype.deviceId = "";

        /**
         * Encodes the specified AccountLoginBySdk message. Does not implicitly {@link msgProto.AccountLoginBySdk.verify|verify} messages.
         * @function encode
         * @memberof msgProto.AccountLoginBySdk
         * @static
         * @param {msgProto.IAccountLoginBySdk} message AccountLoginBySdk message or plain object to encode
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
         * @memberof msgProto.AccountLoginBySdk
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msgProto.AccountLoginBySdk} AccountLoginBySdk
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccountLoginBySdk.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msgProto.AccountLoginBySdk();
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
         * @memberof msgProto.AccountLoginBySdk
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msgProto.AccountLoginBySdk} AccountLoginBySdk
         */
        AccountLoginBySdk.fromObject = function fromObject(object) {
            if (object instanceof $root.msgProto.AccountLoginBySdk)
                return object;
            var message = new $root.msgProto.AccountLoginBySdk();
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
         * @memberof msgProto.AccountLoginBySdk
         * @static
         * @param {msgProto.AccountLoginBySdk} message AccountLoginBySdk
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
         * @memberof msgProto.AccountLoginBySdk
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AccountLoginBySdk.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AccountLoginBySdk;
    })();

    msgProto.AccountRegister = (function() {

        /**
         * Properties of an AccountRegister.
         * @memberof msgProto
         * @interface IAccountRegister
         * @property {string|null} [account] AccountRegister account
         * @property {string|null} [pwd] AccountRegister pwd
         * @property {number|null} [channelId] AccountRegister channelId
         * @property {string|null} [deviceId] AccountRegister deviceId
         */

        /**
         * Constructs a new AccountRegister.
         * @memberof msgProto
         * @classdesc Represents an AccountRegister.
         * @implements IAccountRegister
         * @constructor
         * @param {msgProto.IAccountRegister=} [properties] Properties to set
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
         * @memberof msgProto.AccountRegister
         * @instance
         */
        AccountRegister.prototype.account = "";

        /**
         * AccountRegister pwd.
         * @member {string} pwd
         * @memberof msgProto.AccountRegister
         * @instance
         */
        AccountRegister.prototype.pwd = "";

        /**
         * AccountRegister channelId.
         * @member {number} channelId
         * @memberof msgProto.AccountRegister
         * @instance
         */
        AccountRegister.prototype.channelId = 0;

        /**
         * AccountRegister deviceId.
         * @member {string} deviceId
         * @memberof msgProto.AccountRegister
         * @instance
         */
        AccountRegister.prototype.deviceId = "";

        /**
         * Encodes the specified AccountRegister message. Does not implicitly {@link msgProto.AccountRegister.verify|verify} messages.
         * @function encode
         * @memberof msgProto.AccountRegister
         * @static
         * @param {msgProto.IAccountRegister} message AccountRegister message or plain object to encode
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
            if (message.channelId != null && message.hasOwnProperty("channelId"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.channelId);
            if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.deviceId);
            return writer;
        };

        /**
         * Decodes an AccountRegister message from the specified reader or buffer.
         * @function decode
         * @memberof msgProto.AccountRegister
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msgProto.AccountRegister} AccountRegister
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccountRegister.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msgProto.AccountRegister();
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
                case 4:
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
         * Creates an AccountRegister message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msgProto.AccountRegister
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msgProto.AccountRegister} AccountRegister
         */
        AccountRegister.fromObject = function fromObject(object) {
            if (object instanceof $root.msgProto.AccountRegister)
                return object;
            var message = new $root.msgProto.AccountRegister();
            if (object.account != null)
                message.account = String(object.account);
            if (object.pwd != null)
                message.pwd = String(object.pwd);
            if (object.channelId != null)
                message.channelId = object.channelId | 0;
            if (object.deviceId != null)
                message.deviceId = String(object.deviceId);
            return message;
        };

        /**
         * Creates a plain object from an AccountRegister message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msgProto.AccountRegister
         * @static
         * @param {msgProto.AccountRegister} message AccountRegister
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
                object.channelId = 0;
                object.deviceId = "";
            }
            if (message.account != null && message.hasOwnProperty("account"))
                object.account = message.account;
            if (message.pwd != null && message.hasOwnProperty("pwd"))
                object.pwd = message.pwd;
            if (message.channelId != null && message.hasOwnProperty("channelId"))
                object.channelId = message.channelId;
            if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                object.deviceId = message.deviceId;
            return object;
        };

        /**
         * Converts this AccountRegister to JSON.
         * @function toJSON
         * @memberof msgProto.AccountRegister
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AccountRegister.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AccountRegister;
    })();

    msgProto.SvrListGet = (function() {

        /**
         * Properties of a SvrListGet.
         * @memberof msgProto
         * @interface ISvrListGet
         * @property {boolean|null} [isTest] SvrListGet isTest
         */

        /**
         * Constructs a new SvrListGet.
         * @memberof msgProto
         * @classdesc Represents a SvrListGet.
         * @implements ISvrListGet
         * @constructor
         * @param {msgProto.ISvrListGet=} [properties] Properties to set
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
         * @memberof msgProto.SvrListGet
         * @instance
         */
        SvrListGet.prototype.isTest = false;

        /**
         * Encodes the specified SvrListGet message. Does not implicitly {@link msgProto.SvrListGet.verify|verify} messages.
         * @function encode
         * @memberof msgProto.SvrListGet
         * @static
         * @param {msgProto.ISvrListGet} message SvrListGet message or plain object to encode
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
         * @memberof msgProto.SvrListGet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msgProto.SvrListGet} SvrListGet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SvrListGet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msgProto.SvrListGet();
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
         * @memberof msgProto.SvrListGet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msgProto.SvrListGet} SvrListGet
         */
        SvrListGet.fromObject = function fromObject(object) {
            if (object instanceof $root.msgProto.SvrListGet)
                return object;
            var message = new $root.msgProto.SvrListGet();
            if (object.isTest != null)
                message.isTest = Boolean(object.isTest);
            return message;
        };

        /**
         * Creates a plain object from a SvrListGet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msgProto.SvrListGet
         * @static
         * @param {msgProto.SvrListGet} message SvrListGet
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
         * @memberof msgProto.SvrListGet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SvrListGet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SvrListGet;
    })();

    msgProto.SvrInfoGet = (function() {

        /**
         * Properties of a SvrInfoGet.
         * @memberof msgProto
         * @interface ISvrInfoGet
         * @property {number|null} [svrId] SvrInfoGet svrId
         */

        /**
         * Constructs a new SvrInfoGet.
         * @memberof msgProto
         * @classdesc Represents a SvrInfoGet.
         * @implements ISvrInfoGet
         * @constructor
         * @param {msgProto.ISvrInfoGet=} [properties] Properties to set
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
         * @memberof msgProto.SvrInfoGet
         * @instance
         */
        SvrInfoGet.prototype.svrId = 0;

        /**
         * Encodes the specified SvrInfoGet message. Does not implicitly {@link msgProto.SvrInfoGet.verify|verify} messages.
         * @function encode
         * @memberof msgProto.SvrInfoGet
         * @static
         * @param {msgProto.ISvrInfoGet} message SvrInfoGet message or plain object to encode
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
         * @memberof msgProto.SvrInfoGet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msgProto.SvrInfoGet} SvrInfoGet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SvrInfoGet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msgProto.SvrInfoGet();
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
         * @memberof msgProto.SvrInfoGet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msgProto.SvrInfoGet} SvrInfoGet
         */
        SvrInfoGet.fromObject = function fromObject(object) {
            if (object instanceof $root.msgProto.SvrInfoGet)
                return object;
            var message = new $root.msgProto.SvrInfoGet();
            if (object.svrId != null)
                message.svrId = object.svrId | 0;
            return message;
        };

        /**
         * Creates a plain object from a SvrInfoGet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msgProto.SvrInfoGet
         * @static
         * @param {msgProto.SvrInfoGet} message SvrInfoGet
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
         * @memberof msgProto.SvrInfoGet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SvrInfoGet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SvrInfoGet;
    })();

    msgProto.PbSvrInfo = (function() {

        /**
         * Properties of a PbSvrInfo.
         * @memberof msgProto
         * @interface IPbSvrInfo
         * @property {number|null} [id] PbSvrInfo id
         * @property {string|null} [name] PbSvrInfo name
         * @property {string|null} [mergerName] 服务器名称 *
         * @property {string|null} [area] PbSvrInfo area
         * @property {string|null} [host] PbSvrInfo host
         * @property {string|null} [port] PbSvrInfo port
         * @property {number|null} [isNew] PbSvrInfo isNew
         * @property {number|null} [status] PbSvrInfo status
         * @property {number|null} [sort] PbSvrInfo sort
         * @property {string|null} [appId] PbSvrInfo appId
         * @property {number|null} [serverId] PbSvrInfo serverId
         * @property {number|null} [indexId] PbSvrInfo indexId
         * @property {number|null} [isClose] PbSvrInfo isClose
         * @property {string|null} [closeExplain] 是否维护 *
         * @property {number|Long|null} [serverDate] 维护说明 *
         */

        /**
         * Constructs a new PbSvrInfo.
         * @memberof msgProto
         * @classdesc Represents a PbSvrInfo.
         * @implements IPbSvrInfo
         * @constructor
         * @param {msgProto.IPbSvrInfo=} [properties] Properties to set
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
         * @memberof msgProto.PbSvrInfo
         * @instance
         */
        PbSvrInfo.prototype.id = 0;

        /**
         * PbSvrInfo name.
         * @member {string} name
         * @memberof msgProto.PbSvrInfo
         * @instance
         */
        PbSvrInfo.prototype.name = "";

        /**
         * 服务器名称 *
         * @member {string} mergerName
         * @memberof msgProto.PbSvrInfo
         * @instance
         */
        PbSvrInfo.prototype.mergerName = "";

        /**
         * PbSvrInfo area.
         * @member {string} area
         * @memberof msgProto.PbSvrInfo
         * @instance
         */
        PbSvrInfo.prototype.area = "";

        /**
         * PbSvrInfo host.
         * @member {string} host
         * @memberof msgProto.PbSvrInfo
         * @instance
         */
        PbSvrInfo.prototype.host = "";

        /**
         * PbSvrInfo port.
         * @member {string} port
         * @memberof msgProto.PbSvrInfo
         * @instance
         */
        PbSvrInfo.prototype.port = "";

        /**
         * PbSvrInfo isNew.
         * @member {number} isNew
         * @memberof msgProto.PbSvrInfo
         * @instance
         */
        PbSvrInfo.prototype.isNew = 0;

        /**
         * PbSvrInfo status.
         * @member {number} status
         * @memberof msgProto.PbSvrInfo
         * @instance
         */
        PbSvrInfo.prototype.status = 0;

        /**
         * PbSvrInfo sort.
         * @member {number} sort
         * @memberof msgProto.PbSvrInfo
         * @instance
         */
        PbSvrInfo.prototype.sort = 0;

        /**
         * PbSvrInfo appId.
         * @member {string} appId
         * @memberof msgProto.PbSvrInfo
         * @instance
         */
        PbSvrInfo.prototype.appId = "";

        /**
         * PbSvrInfo serverId.
         * @member {number} serverId
         * @memberof msgProto.PbSvrInfo
         * @instance
         */
        PbSvrInfo.prototype.serverId = 0;

        /**
         * PbSvrInfo indexId.
         * @member {number} indexId
         * @memberof msgProto.PbSvrInfo
         * @instance
         */
        PbSvrInfo.prototype.indexId = 0;

        /**
         * PbSvrInfo isClose.
         * @member {number} isClose
         * @memberof msgProto.PbSvrInfo
         * @instance
         */
        PbSvrInfo.prototype.isClose = 0;

        /**
         * 是否维护 *
         * @member {string} closeExplain
         * @memberof msgProto.PbSvrInfo
         * @instance
         */
        PbSvrInfo.prototype.closeExplain = "";

        /**
         * 维护说明 *
         * @member {number|Long} serverDate
         * @memberof msgProto.PbSvrInfo
         * @instance
         */
        PbSvrInfo.prototype.serverDate = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Encodes the specified PbSvrInfo message. Does not implicitly {@link msgProto.PbSvrInfo.verify|verify} messages.
         * @function encode
         * @memberof msgProto.PbSvrInfo
         * @static
         * @param {msgProto.IPbSvrInfo} message PbSvrInfo message or plain object to encode
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
            if (message.mergerName != null && message.hasOwnProperty("mergerName"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.mergerName);
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
            if (message.sort != null && message.hasOwnProperty("sort"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.sort);
            if (message.appId != null && message.hasOwnProperty("appId"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.appId);
            if (message.serverId != null && message.hasOwnProperty("serverId"))
                writer.uint32(/* id 12, wireType 0 =*/96).int32(message.serverId);
            if (message.indexId != null && message.hasOwnProperty("indexId"))
                writer.uint32(/* id 13, wireType 0 =*/104).int32(message.indexId);
            if (message.isClose != null && message.hasOwnProperty("isClose"))
                writer.uint32(/* id 14, wireType 0 =*/112).int32(message.isClose);
            if (message.closeExplain != null && message.hasOwnProperty("closeExplain"))
                writer.uint32(/* id 15, wireType 2 =*/122).string(message.closeExplain);
            if (message.serverDate != null && message.hasOwnProperty("serverDate"))
                writer.uint32(/* id 16, wireType 0 =*/128).int64(message.serverDate);
            return writer;
        };

        /**
         * Decodes a PbSvrInfo message from the specified reader or buffer.
         * @function decode
         * @memberof msgProto.PbSvrInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msgProto.PbSvrInfo} PbSvrInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbSvrInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msgProto.PbSvrInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2:
                    message.id = reader.int32();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.mergerName = reader.string();
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
                case 10:
                    message.sort = reader.int32();
                    break;
                case 11:
                    message.appId = reader.string();
                    break;
                case 12:
                    message.serverId = reader.int32();
                    break;
                case 13:
                    message.indexId = reader.int32();
                    break;
                case 14:
                    message.isClose = reader.int32();
                    break;
                case 15:
                    message.closeExplain = reader.string();
                    break;
                case 16:
                    message.serverDate = reader.int64();
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
         * @memberof msgProto.PbSvrInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msgProto.PbSvrInfo} PbSvrInfo
         */
        PbSvrInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.msgProto.PbSvrInfo)
                return object;
            var message = new $root.msgProto.PbSvrInfo();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.name != null)
                message.name = String(object.name);
            if (object.mergerName != null)
                message.mergerName = String(object.mergerName);
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
            if (object.sort != null)
                message.sort = object.sort | 0;
            if (object.appId != null)
                message.appId = String(object.appId);
            if (object.serverId != null)
                message.serverId = object.serverId | 0;
            if (object.indexId != null)
                message.indexId = object.indexId | 0;
            if (object.isClose != null)
                message.isClose = object.isClose | 0;
            if (object.closeExplain != null)
                message.closeExplain = String(object.closeExplain);
            if (object.serverDate != null)
                if ($util.Long)
                    (message.serverDate = $util.Long.fromValue(object.serverDate)).unsigned = false;
                else if (typeof object.serverDate === "string")
                    message.serverDate = parseInt(object.serverDate, 10);
                else if (typeof object.serverDate === "number")
                    message.serverDate = object.serverDate;
                else if (typeof object.serverDate === "object")
                    message.serverDate = new $util.LongBits(object.serverDate.low >>> 0, object.serverDate.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a PbSvrInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msgProto.PbSvrInfo
         * @static
         * @param {msgProto.PbSvrInfo} message PbSvrInfo
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
                object.mergerName = "";
                object.area = "";
                object.host = "";
                object.port = "";
                object.isNew = 0;
                object.status = 0;
                object.sort = 0;
                object.appId = "";
                object.serverId = 0;
                object.indexId = 0;
                object.isClose = 0;
                object.closeExplain = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.serverDate = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.serverDate = options.longs === String ? "0" : 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.mergerName != null && message.hasOwnProperty("mergerName"))
                object.mergerName = message.mergerName;
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
            if (message.sort != null && message.hasOwnProperty("sort"))
                object.sort = message.sort;
            if (message.appId != null && message.hasOwnProperty("appId"))
                object.appId = message.appId;
            if (message.serverId != null && message.hasOwnProperty("serverId"))
                object.serverId = message.serverId;
            if (message.indexId != null && message.hasOwnProperty("indexId"))
                object.indexId = message.indexId;
            if (message.isClose != null && message.hasOwnProperty("isClose"))
                object.isClose = message.isClose;
            if (message.closeExplain != null && message.hasOwnProperty("closeExplain"))
                object.closeExplain = message.closeExplain;
            if (message.serverDate != null && message.hasOwnProperty("serverDate"))
                if (typeof message.serverDate === "number")
                    object.serverDate = options.longs === String ? String(message.serverDate) : message.serverDate;
                else
                    object.serverDate = options.longs === String ? $util.Long.prototype.toString.call(message.serverDate) : options.longs === Number ? new $util.LongBits(message.serverDate.low >>> 0, message.serverDate.high >>> 0).toNumber() : message.serverDate;
            return object;
        };

        /**
         * Converts this PbSvrInfo to JSON.
         * @function toJSON
         * @memberof msgProto.PbSvrInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PbSvrInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PbSvrInfo;
    })();

    msgProto.SvrListResponse = (function() {

        /**
         * Properties of a SvrListResponse.
         * @memberof msgProto
         * @interface ISvrListResponse
         * @property {number|null} [retCode] SvrListResponse retCode
         * @property {number|null} [retType] SvrListResponse retType
         * @property {Array.<msgProto.IPbSvrInfo>|null} [infos] SvrListResponse infos
         */

        /**
         * Constructs a new SvrListResponse.
         * @memberof msgProto
         * @classdesc Represents a SvrListResponse.
         * @implements ISvrListResponse
         * @constructor
         * @param {msgProto.ISvrListResponse=} [properties] Properties to set
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
         * @memberof msgProto.SvrListResponse
         * @instance
         */
        SvrListResponse.prototype.retCode = 0;

        /**
         * SvrListResponse retType.
         * @member {number} retType
         * @memberof msgProto.SvrListResponse
         * @instance
         */
        SvrListResponse.prototype.retType = 0;

        /**
         * SvrListResponse infos.
         * @member {Array.<msgProto.IPbSvrInfo>} infos
         * @memberof msgProto.SvrListResponse
         * @instance
         */
        SvrListResponse.prototype.infos = $util.emptyArray;

        /**
         * Encodes the specified SvrListResponse message. Does not implicitly {@link msgProto.SvrListResponse.verify|verify} messages.
         * @function encode
         * @memberof msgProto.SvrListResponse
         * @static
         * @param {msgProto.ISvrListResponse} message SvrListResponse message or plain object to encode
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
                    $root.msgProto.PbSvrInfo.encode(message.infos[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a SvrListResponse message from the specified reader or buffer.
         * @function decode
         * @memberof msgProto.SvrListResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msgProto.SvrListResponse} SvrListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SvrListResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msgProto.SvrListResponse();
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
                    message.infos.push($root.msgProto.PbSvrInfo.decode(reader, reader.uint32()));
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
         * @memberof msgProto.SvrListResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msgProto.SvrListResponse} SvrListResponse
         */
        SvrListResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.msgProto.SvrListResponse)
                return object;
            var message = new $root.msgProto.SvrListResponse();
            if (object.retCode != null)
                message.retCode = object.retCode | 0;
            if (object.retType != null)
                message.retType = object.retType | 0;
            if (object.infos) {
                if (!Array.isArray(object.infos))
                    throw TypeError(".msgProto.SvrListResponse.infos: array expected");
                message.infos = [];
                for (var i = 0; i < object.infos.length; ++i) {
                    if (typeof object.infos[i] !== "object")
                        throw TypeError(".msgProto.SvrListResponse.infos: object expected");
                    message.infos[i] = $root.msgProto.PbSvrInfo.fromObject(object.infos[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SvrListResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msgProto.SvrListResponse
         * @static
         * @param {msgProto.SvrListResponse} message SvrListResponse
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
                    object.infos[j] = $root.msgProto.PbSvrInfo.toObject(message.infos[j], options);
            }
            return object;
        };

        /**
         * Converts this SvrListResponse to JSON.
         * @function toJSON
         * @memberof msgProto.SvrListResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SvrListResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SvrListResponse;
    })();

    msgProto.SvrDateGet = (function() {

        /**
         * Properties of a SvrDateGet.
         * @memberof msgProto
         * @interface ISvrDateGet
         */

        /**
         * Constructs a new SvrDateGet.
         * @memberof msgProto
         * @classdesc Represents a SvrDateGet.
         * @implements ISvrDateGet
         * @constructor
         * @param {msgProto.ISvrDateGet=} [properties] Properties to set
         */
        function SvrDateGet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Encodes the specified SvrDateGet message. Does not implicitly {@link msgProto.SvrDateGet.verify|verify} messages.
         * @function encode
         * @memberof msgProto.SvrDateGet
         * @static
         * @param {msgProto.ISvrDateGet} message SvrDateGet message or plain object to encode
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
         * @memberof msgProto.SvrDateGet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msgProto.SvrDateGet} SvrDateGet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SvrDateGet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msgProto.SvrDateGet();
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
         * @memberof msgProto.SvrDateGet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msgProto.SvrDateGet} SvrDateGet
         */
        SvrDateGet.fromObject = function fromObject(object) {
            if (object instanceof $root.msgProto.SvrDateGet)
                return object;
            return new $root.msgProto.SvrDateGet();
        };

        /**
         * Creates a plain object from a SvrDateGet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msgProto.SvrDateGet
         * @static
         * @param {msgProto.SvrDateGet} message SvrDateGet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SvrDateGet.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this SvrDateGet to JSON.
         * @function toJSON
         * @memberof msgProto.SvrDateGet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SvrDateGet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SvrDateGet;
    })();

    msgProto.UserSvrsGet = (function() {

        /**
         * Properties of a UserSvrsGet.
         * @memberof msgProto
         * @interface IUserSvrsGet
         * @property {number|Long|null} [accId] UserSvrsGet accId
         */

        /**
         * Constructs a new UserSvrsGet.
         * @memberof msgProto
         * @classdesc Represents a UserSvrsGet.
         * @implements IUserSvrsGet
         * @constructor
         * @param {msgProto.IUserSvrsGet=} [properties] Properties to set
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
         * @memberof msgProto.UserSvrsGet
         * @instance
         */
        UserSvrsGet.prototype.accId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Encodes the specified UserSvrsGet message. Does not implicitly {@link msgProto.UserSvrsGet.verify|verify} messages.
         * @function encode
         * @memberof msgProto.UserSvrsGet
         * @static
         * @param {msgProto.IUserSvrsGet} message UserSvrsGet message or plain object to encode
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
         * @memberof msgProto.UserSvrsGet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msgProto.UserSvrsGet} UserSvrsGet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserSvrsGet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msgProto.UserSvrsGet();
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
         * @memberof msgProto.UserSvrsGet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msgProto.UserSvrsGet} UserSvrsGet
         */
        UserSvrsGet.fromObject = function fromObject(object) {
            if (object instanceof $root.msgProto.UserSvrsGet)
                return object;
            var message = new $root.msgProto.UserSvrsGet();
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
         * @memberof msgProto.UserSvrsGet
         * @static
         * @param {msgProto.UserSvrsGet} message UserSvrsGet
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
         * @memberof msgProto.UserSvrsGet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserSvrsGet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserSvrsGet;
    })();

    msgProto.AccountSvrsGet = (function() {

        /**
         * Properties of an AccountSvrsGet.
         * @memberof msgProto
         * @interface IAccountSvrsGet
         * @property {string|null} [openId] AccountSvrsGet openId
         * @property {string|null} [appId] AccountSvrsGet appId
         * @property {boolean|null} [isTest] AccountSvrsGet isTest
         */

        /**
         * Constructs a new AccountSvrsGet.
         * @memberof msgProto
         * @classdesc Represents an AccountSvrsGet.
         * @implements IAccountSvrsGet
         * @constructor
         * @param {msgProto.IAccountSvrsGet=} [properties] Properties to set
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
         * @memberof msgProto.AccountSvrsGet
         * @instance
         */
        AccountSvrsGet.prototype.openId = "";

        /**
         * AccountSvrsGet appId.
         * @member {string} appId
         * @memberof msgProto.AccountSvrsGet
         * @instance
         */
        AccountSvrsGet.prototype.appId = "";

        /**
         * AccountSvrsGet isTest.
         * @member {boolean} isTest
         * @memberof msgProto.AccountSvrsGet
         * @instance
         */
        AccountSvrsGet.prototype.isTest = false;

        /**
         * Encodes the specified AccountSvrsGet message. Does not implicitly {@link msgProto.AccountSvrsGet.verify|verify} messages.
         * @function encode
         * @memberof msgProto.AccountSvrsGet
         * @static
         * @param {msgProto.IAccountSvrsGet} message AccountSvrsGet message or plain object to encode
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
         * @memberof msgProto.AccountSvrsGet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msgProto.AccountSvrsGet} AccountSvrsGet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccountSvrsGet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msgProto.AccountSvrsGet();
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
         * @memberof msgProto.AccountSvrsGet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msgProto.AccountSvrsGet} AccountSvrsGet
         */
        AccountSvrsGet.fromObject = function fromObject(object) {
            if (object instanceof $root.msgProto.AccountSvrsGet)
                return object;
            var message = new $root.msgProto.AccountSvrsGet();
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
         * @memberof msgProto.AccountSvrsGet
         * @static
         * @param {msgProto.AccountSvrsGet} message AccountSvrsGet
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
         * @memberof msgProto.AccountSvrsGet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AccountSvrsGet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AccountSvrsGet;
    })();

    msgProto.ServerInfo = (function() {

        /**
         * Properties of a ServerInfo.
         * @memberof msgProto
         * @interface IServerInfo
         * @property {string|null} [ip] ServerInfo ip
         * @property {number|null} [port] ServerInfo port
         */

        /**
         * Constructs a new ServerInfo.
         * @memberof msgProto
         * @classdesc Represents a ServerInfo.
         * @implements IServerInfo
         * @constructor
         * @param {msgProto.IServerInfo=} [properties] Properties to set
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
         * @memberof msgProto.ServerInfo
         * @instance
         */
        ServerInfo.prototype.ip = "";

        /**
         * ServerInfo port.
         * @member {number} port
         * @memberof msgProto.ServerInfo
         * @instance
         */
        ServerInfo.prototype.port = 0;

        /**
         * Encodes the specified ServerInfo message. Does not implicitly {@link msgProto.ServerInfo.verify|verify} messages.
         * @function encode
         * @memberof msgProto.ServerInfo
         * @static
         * @param {msgProto.IServerInfo} message ServerInfo message or plain object to encode
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
         * @memberof msgProto.ServerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msgProto.ServerInfo} ServerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServerInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msgProto.ServerInfo();
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
         * @memberof msgProto.ServerInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msgProto.ServerInfo} ServerInfo
         */
        ServerInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.msgProto.ServerInfo)
                return object;
            var message = new $root.msgProto.ServerInfo();
            if (object.ip != null)
                message.ip = String(object.ip);
            if (object.port != null)
                message.port = object.port | 0;
            return message;
        };

        /**
         * Creates a plain object from a ServerInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msgProto.ServerInfo
         * @static
         * @param {msgProto.ServerInfo} message ServerInfo
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
         * @memberof msgProto.ServerInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ServerInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ServerInfo;
    })();

    msgProto.PingAck = (function() {

        /**
         * Properties of a PingAck.
         * @memberof msgProto
         * @interface IPingAck
         */

        /**
         * Constructs a new PingAck.
         * @memberof msgProto
         * @classdesc Represents a PingAck.
         * @implements IPingAck
         * @constructor
         * @param {msgProto.IPingAck=} [properties] Properties to set
         */
        function PingAck(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Encodes the specified PingAck message. Does not implicitly {@link msgProto.PingAck.verify|verify} messages.
         * @function encode
         * @memberof msgProto.PingAck
         * @static
         * @param {msgProto.IPingAck} message PingAck message or plain object to encode
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
         * @memberof msgProto.PingAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msgProto.PingAck} PingAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PingAck.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msgProto.PingAck();
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
         * @memberof msgProto.PingAck
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msgProto.PingAck} PingAck
         */
        PingAck.fromObject = function fromObject(object) {
            if (object instanceof $root.msgProto.PingAck)
                return object;
            return new $root.msgProto.PingAck();
        };

        /**
         * Creates a plain object from a PingAck message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msgProto.PingAck
         * @static
         * @param {msgProto.PingAck} message PingAck
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PingAck.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this PingAck to JSON.
         * @function toJSON
         * @memberof msgProto.PingAck
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PingAck.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PingAck;
    })();

    msgProto.LoginReq = (function() {

        /**
         * Properties of a LoginReq.
         * @memberof msgProto
         * @interface ILoginReq
         * @property {string|null} [version] LoginReq version
         * @property {string|null} [platform] LoginReq platform
         * @property {string|null} [uid] LoginReq uid
         */

        /**
         * Constructs a new LoginReq.
         * @memberof msgProto
         * @classdesc Represents a LoginReq.
         * @implements ILoginReq
         * @constructor
         * @param {msgProto.ILoginReq=} [properties] Properties to set
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
         * @memberof msgProto.LoginReq
         * @instance
         */
        LoginReq.prototype.version = "";

        /**
         * LoginReq platform.
         * @member {string} platform
         * @memberof msgProto.LoginReq
         * @instance
         */
        LoginReq.prototype.platform = "";

        /**
         * LoginReq uid.
         * @member {string} uid
         * @memberof msgProto.LoginReq
         * @instance
         */
        LoginReq.prototype.uid = "";

        /**
         * Encodes the specified LoginReq message. Does not implicitly {@link msgProto.LoginReq.verify|verify} messages.
         * @function encode
         * @memberof msgProto.LoginReq
         * @static
         * @param {msgProto.ILoginReq} message LoginReq message or plain object to encode
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
         * @memberof msgProto.LoginReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msgProto.LoginReq} LoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msgProto.LoginReq();
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
         * @memberof msgProto.LoginReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msgProto.LoginReq} LoginReq
         */
        LoginReq.fromObject = function fromObject(object) {
            if (object instanceof $root.msgProto.LoginReq)
                return object;
            var message = new $root.msgProto.LoginReq();
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
         * @memberof msgProto.LoginReq
         * @static
         * @param {msgProto.LoginReq} message LoginReq
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
         * @memberof msgProto.LoginReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LoginReq;
    })();

    msgProto.LoginAck = (function() {

        /**
         * Properties of a LoginAck.
         * @memberof msgProto
         * @interface ILoginAck
         * @property {msgProto.ResultCode|null} [result] LoginAck result
         * @property {msgProto.IServerInfo|null} [server] LoginAck server
         * @property {string|null} [gameToken] LoginAck gameToken
         * @property {string|null} [gameSvcId] LoginAck gameSvcId
         */

        /**
         * Constructs a new LoginAck.
         * @memberof msgProto
         * @classdesc Represents a LoginAck.
         * @implements ILoginAck
         * @constructor
         * @param {msgProto.ILoginAck=} [properties] Properties to set
         */
        function LoginAck(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginAck result.
         * @member {msgProto.ResultCode} result
         * @memberof msgProto.LoginAck
         * @instance
         */
        LoginAck.prototype.result = 0;

        /**
         * LoginAck server.
         * @member {msgProto.IServerInfo|null|undefined} server
         * @memberof msgProto.LoginAck
         * @instance
         */
        LoginAck.prototype.server = null;

        /**
         * LoginAck gameToken.
         * @member {string} gameToken
         * @memberof msgProto.LoginAck
         * @instance
         */
        LoginAck.prototype.gameToken = "";

        /**
         * LoginAck gameSvcId.
         * @member {string} gameSvcId
         * @memberof msgProto.LoginAck
         * @instance
         */
        LoginAck.prototype.gameSvcId = "";

        /**
         * Encodes the specified LoginAck message. Does not implicitly {@link msgProto.LoginAck.verify|verify} messages.
         * @function encode
         * @memberof msgProto.LoginAck
         * @static
         * @param {msgProto.ILoginAck} message LoginAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginAck.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && message.hasOwnProperty("result"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
            if (message.server != null && message.hasOwnProperty("server"))
                $root.msgProto.ServerInfo.encode(message.server, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.gameToken != null && message.hasOwnProperty("gameToken"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.gameToken);
            if (message.gameSvcId != null && message.hasOwnProperty("gameSvcId"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.gameSvcId);
            return writer;
        };

        /**
         * Decodes a LoginAck message from the specified reader or buffer.
         * @function decode
         * @memberof msgProto.LoginAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msgProto.LoginAck} LoginAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginAck.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msgProto.LoginAck();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32();
                    break;
                case 2:
                    message.server = $root.msgProto.ServerInfo.decode(reader, reader.uint32());
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
         * @memberof msgProto.LoginAck
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msgProto.LoginAck} LoginAck
         */
        LoginAck.fromObject = function fromObject(object) {
            if (object instanceof $root.msgProto.LoginAck)
                return object;
            var message = new $root.msgProto.LoginAck();
            switch (object.result) {
            case "noError":
            case 0:
                message.result = 0;
                break;
            case "gateNotFound":
            case 1:
                message.result = 1;
                break;
            case "gateAddressError":
            case 2:
                message.result = 2;
                break;
            case "gameNotFound":
            case 3:
                message.result = 3;
                break;
            }
            if (object.server != null) {
                if (typeof object.server !== "object")
                    throw TypeError(".msgProto.LoginAck.server: object expected");
                message.server = $root.msgProto.ServerInfo.fromObject(object.server);
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
         * @memberof msgProto.LoginAck
         * @static
         * @param {msgProto.LoginAck} message LoginAck
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginAck.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.result = options.enums === String ? "noError" : 0;
                object.server = null;
                object.gameToken = "";
                object.gameSvcId = "";
            }
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = options.enums === String ? $root.msgProto.ResultCode[message.result] : message.result;
            if (message.server != null && message.hasOwnProperty("server"))
                object.server = $root.msgProto.ServerInfo.toObject(message.server, options);
            if (message.gameToken != null && message.hasOwnProperty("gameToken"))
                object.gameToken = message.gameToken;
            if (message.gameSvcId != null && message.hasOwnProperty("gameSvcId"))
                object.gameSvcId = message.gameSvcId;
            return object;
        };

        /**
         * Converts this LoginAck to JSON.
         * @function toJSON
         * @memberof msgProto.LoginAck
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginAck.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LoginAck;
    })();

    msgProto.VerifyReq = (function() {

        /**
         * Properties of a VerifyReq.
         * @memberof msgProto
         * @interface IVerifyReq
         * @property {string|null} [gameToken] VerifyReq gameToken
         * @property {string|null} [gameSvcId] VerifyReq gameSvcId
         * @property {number|Long|null} [accountId] VerifyReq accountId
         */

        /**
         * Constructs a new VerifyReq.
         * @memberof msgProto
         * @classdesc Represents a VerifyReq.
         * @implements IVerifyReq
         * @constructor
         * @param {msgProto.IVerifyReq=} [properties] Properties to set
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
         * @memberof msgProto.VerifyReq
         * @instance
         */
        VerifyReq.prototype.gameToken = "";

        /**
         * VerifyReq gameSvcId.
         * @member {string} gameSvcId
         * @memberof msgProto.VerifyReq
         * @instance
         */
        VerifyReq.prototype.gameSvcId = "";

        /**
         * VerifyReq accountId.
         * @member {number|Long} accountId
         * @memberof msgProto.VerifyReq
         * @instance
         */
        VerifyReq.prototype.accountId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Encodes the specified VerifyReq message. Does not implicitly {@link msgProto.VerifyReq.verify|verify} messages.
         * @function encode
         * @memberof msgProto.VerifyReq
         * @static
         * @param {msgProto.IVerifyReq} message VerifyReq message or plain object to encode
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
         * @memberof msgProto.VerifyReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msgProto.VerifyReq} VerifyReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VerifyReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msgProto.VerifyReq();
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
         * @memberof msgProto.VerifyReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msgProto.VerifyReq} VerifyReq
         */
        VerifyReq.fromObject = function fromObject(object) {
            if (object instanceof $root.msgProto.VerifyReq)
                return object;
            var message = new $root.msgProto.VerifyReq();
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
         * @memberof msgProto.VerifyReq
         * @static
         * @param {msgProto.VerifyReq} message VerifyReq
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
         * @memberof msgProto.VerifyReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        VerifyReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return VerifyReq;
    })();

    msgProto.VerifyAck = (function() {

        /**
         * Properties of a VerifyAck.
         * @memberof msgProto
         * @interface IVerifyAck
         * @property {msgProto.ResultCode|null} [result] VerifyAck result
         */

        /**
         * Constructs a new VerifyAck.
         * @memberof msgProto
         * @classdesc Represents a VerifyAck.
         * @implements IVerifyAck
         * @constructor
         * @param {msgProto.IVerifyAck=} [properties] Properties to set
         */
        function VerifyAck(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * VerifyAck result.
         * @member {msgProto.ResultCode} result
         * @memberof msgProto.VerifyAck
         * @instance
         */
        VerifyAck.prototype.result = 0;

        /**
         * Encodes the specified VerifyAck message. Does not implicitly {@link msgProto.VerifyAck.verify|verify} messages.
         * @function encode
         * @memberof msgProto.VerifyAck
         * @static
         * @param {msgProto.IVerifyAck} message VerifyAck message or plain object to encode
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
         * @memberof msgProto.VerifyAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msgProto.VerifyAck} VerifyAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VerifyAck.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msgProto.VerifyAck();
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
         * @memberof msgProto.VerifyAck
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msgProto.VerifyAck} VerifyAck
         */
        VerifyAck.fromObject = function fromObject(object) {
            if (object instanceof $root.msgProto.VerifyAck)
                return object;
            var message = new $root.msgProto.VerifyAck();
            switch (object.result) {
            case "noError":
            case 0:
                message.result = 0;
                break;
            case "gateNotFound":
            case 1:
                message.result = 1;
                break;
            case "gateAddressError":
            case 2:
                message.result = 2;
                break;
            case "gameNotFound":
            case 3:
                message.result = 3;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a VerifyAck message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msgProto.VerifyAck
         * @static
         * @param {msgProto.VerifyAck} message VerifyAck
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        VerifyAck.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.result = options.enums === String ? "noError" : 0;
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = options.enums === String ? $root.msgProto.ResultCode[message.result] : message.result;
            return object;
        };

        /**
         * Converts this VerifyAck to JSON.
         * @function toJSON
         * @memberof msgProto.VerifyAck
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        VerifyAck.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return VerifyAck;
    })();

    /**
     * ResultCode enum.
     * @name msgProto.ResultCode
     * @enum {string}
     * @property {number} noError=0 noError value
     * @property {number} gateNotFound=1 gateNotFound value
     * @property {number} gateAddressError=2 gateAddressError value
     * @property {number} gameNotFound=3 gameNotFound value
     */
    msgProto.ResultCode = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "noError"] = 0;
        values[valuesById[1] = "gateNotFound"] = 1;
        values[valuesById[2] = "gateAddressError"] = 2;
        values[valuesById[3] = "gameNotFound"] = 3;
        return values;
    })();

    return msgProto;
})();