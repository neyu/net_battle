type Long = protobuf.Long;

/** Namespace msgProto. */
declare namespace msgProto {

    /** Properties of a ChatReq. */
    interface IChatReq {

        /** ChatReq Content */
        Content?: (string|null);
    }

    /** Represents a ChatReq. */
    class ChatReq implements IChatReq {

        /**
         * Constructs a new ChatReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IChatReq);

        /** ChatReq Content. */
        public Content: string;

        /**
         * Encodes the specified ChatReq message. Does not implicitly {@link msgProto.ChatReq.verify|verify} messages.
         * @param message ChatReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IChatReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ChatReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChatReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.ChatReq;

        /**
         * Creates a ChatReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChatReq
         */
        public static fromObject(object: { [k: string]: any }): msgProto.ChatReq;

        /**
         * Creates a plain object from a ChatReq message. Also converts values to other types if specified.
         * @param message ChatReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.ChatReq, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChatReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChatAck. */
    interface IChatAck {

        /** ChatAck Content */
        Content?: (string|null);
    }

    /** Represents a ChatAck. */
    class ChatAck implements IChatAck {

        /**
         * Constructs a new ChatAck.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IChatAck);

        /** ChatAck Content. */
        public Content: string;

        /**
         * Encodes the specified ChatAck message. Does not implicitly {@link msgProto.ChatAck.verify|verify} messages.
         * @param message ChatAck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IChatAck, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ChatAck message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChatAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.ChatAck;

        /**
         * Creates a ChatAck message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChatAck
         */
        public static fromObject(object: { [k: string]: any }): msgProto.ChatAck;

        /**
         * Creates a plain object from a ChatAck message. Also converts values to other types if specified.
         * @param message ChatAck
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.ChatAck, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChatAck to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TestAck. */
    interface ITestAck {

        /** TestAck Dummy */
        Dummy?: (string|null);
    }

    /** Represents a TestAck. */
    class TestAck implements ITestAck {

        /**
         * Constructs a new TestAck.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.ITestAck);

        /** TestAck Dummy. */
        public Dummy: string;

        /**
         * Encodes the specified TestAck message. Does not implicitly {@link msgProto.TestAck.verify|verify} messages.
         * @param message TestAck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.ITestAck, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a TestAck message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TestAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.TestAck;

        /**
         * Creates a TestAck message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TestAck
         */
        public static fromObject(object: { [k: string]: any }): msgProto.TestAck;

        /**
         * Creates a plain object from a TestAck message. Also converts values to other types if specified.
         * @param message TestAck
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.TestAck, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TestAck to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ContentReq. */
    interface IContentReq {

        /** ContentReq Msg */
        Msg?: (string|null);

        /** ContentReq Value */
        Value?: (number|null);
    }

    /** Represents a ContentReq. */
    class ContentReq implements IContentReq {

        /**
         * Constructs a new ContentReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IContentReq);

        /** ContentReq Msg. */
        public Msg: string;

        /** ContentReq Value. */
        public Value: number;

        /**
         * Encodes the specified ContentReq message. Does not implicitly {@link msgProto.ContentReq.verify|verify} messages.
         * @param message ContentReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IContentReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ContentReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ContentReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.ContentReq;

        /**
         * Creates a ContentReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ContentReq
         */
        public static fromObject(object: { [k: string]: any }): msgProto.ContentReq;

        /**
         * Creates a plain object from a ContentReq message. Also converts values to other types if specified.
         * @param message ContentReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.ContentReq, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ContentReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ContentAck. */
    interface IContentAck {

        /** ContentAck Msg */
        Msg?: (string|null);

        /** ContentAck Value */
        Value?: (number|null);
    }

    /** Represents a ContentAck. */
    class ContentAck implements IContentAck {

        /**
         * Constructs a new ContentAck.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IContentAck);

        /** ContentAck Msg. */
        public Msg: string;

        /** ContentAck Value. */
        public Value: number;

        /**
         * Encodes the specified ContentAck message. Does not implicitly {@link msgProto.ContentAck.verify|verify} messages.
         * @param message ContentAck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IContentAck, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ContentAck message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ContentAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.ContentAck;

        /**
         * Creates a ContentAck message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ContentAck
         */
        public static fromObject(object: { [k: string]: any }): msgProto.ContentAck;

        /**
         * Creates a plain object from a ContentAck message. Also converts values to other types if specified.
         * @param message ContentAck
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.ContentAck, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ContentAck to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ActivityBuyMysterShop. */
    interface IActivityBuyMysterShop {

        /** ActivityBuyMysterShop activityId */
        activityId?: (number|null);

        /** ActivityBuyMysterShop index */
        index?: (number|null);
    }

    /** Represents an ActivityBuyMysterShop. */
    class ActivityBuyMysterShop implements IActivityBuyMysterShop {

        /**
         * Constructs a new ActivityBuyMysterShop.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IActivityBuyMysterShop);

        /** ActivityBuyMysterShop activityId. */
        public activityId: number;

        /** ActivityBuyMysterShop index. */
        public index: number;

        /**
         * Encodes the specified ActivityBuyMysterShop message. Does not implicitly {@link msgProto.ActivityBuyMysterShop.verify|verify} messages.
         * @param message ActivityBuyMysterShop message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IActivityBuyMysterShop, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ActivityBuyMysterShop message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ActivityBuyMysterShop
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.ActivityBuyMysterShop;

        /**
         * Creates an ActivityBuyMysterShop message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ActivityBuyMysterShop
         */
        public static fromObject(object: { [k: string]: any }): msgProto.ActivityBuyMysterShop;

        /**
         * Creates a plain object from an ActivityBuyMysterShop message. Also converts values to other types if specified.
         * @param message ActivityBuyMysterShop
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.ActivityBuyMysterShop, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ActivityBuyMysterShop to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ActivityGetList. */
    interface IActivityGetList {
    }

    /** Represents an ActivityGetList. */
    class ActivityGetList implements IActivityGetList {

        /**
         * Constructs a new ActivityGetList.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IActivityGetList);

        /**
         * Encodes the specified ActivityGetList message. Does not implicitly {@link msgProto.ActivityGetList.verify|verify} messages.
         * @param message ActivityGetList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IActivityGetList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ActivityGetList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ActivityGetList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.ActivityGetList;

        /**
         * Creates an ActivityGetList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ActivityGetList
         */
        public static fromObject(object: { [k: string]: any }): msgProto.ActivityGetList;

        /**
         * Creates a plain object from an ActivityGetList message. Also converts values to other types if specified.
         * @param message ActivityGetList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.ActivityGetList, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ActivityGetList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ActivityReceive. */
    interface IActivityReceive {

        /** ActivityReceive activityId */
        activityId?: (number|null);

        /** ActivityReceive index */
        index?: (number|null);
    }

    /** Represents an ActivityReceive. */
    class ActivityReceive implements IActivityReceive {

        /**
         * Constructs a new ActivityReceive.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IActivityReceive);

        /** ActivityReceive activityId. */
        public activityId: number;

        /** ActivityReceive index. */
        public index: number;

        /**
         * Encodes the specified ActivityReceive message. Does not implicitly {@link msgProto.ActivityReceive.verify|verify} messages.
         * @param message ActivityReceive message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IActivityReceive, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ActivityReceive message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ActivityReceive
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.ActivityReceive;

        /**
         * Creates an ActivityReceive message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ActivityReceive
         */
        public static fromObject(object: { [k: string]: any }): msgProto.ActivityReceive;

        /**
         * Creates a plain object from an ActivityReceive message. Also converts values to other types if specified.
         * @param message ActivityReceive
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.ActivityReceive, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ActivityReceive to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ActivityGetIsNeedOperate. */
    interface IActivityGetIsNeedOperate {
    }

    /** Represents an ActivityGetIsNeedOperate. */
    class ActivityGetIsNeedOperate implements IActivityGetIsNeedOperate {

        /**
         * Constructs a new ActivityGetIsNeedOperate.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IActivityGetIsNeedOperate);

        /**
         * Encodes the specified ActivityGetIsNeedOperate message. Does not implicitly {@link msgProto.ActivityGetIsNeedOperate.verify|verify} messages.
         * @param message ActivityGetIsNeedOperate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IActivityGetIsNeedOperate, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ActivityGetIsNeedOperate message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ActivityGetIsNeedOperate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.ActivityGetIsNeedOperate;

        /**
         * Creates an ActivityGetIsNeedOperate message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ActivityGetIsNeedOperate
         */
        public static fromObject(object: { [k: string]: any }): msgProto.ActivityGetIsNeedOperate;

        /**
         * Creates a plain object from an ActivityGetIsNeedOperate message. Also converts values to other types if specified.
         * @param message ActivityGetIsNeedOperate
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.ActivityGetIsNeedOperate, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ActivityGetIsNeedOperate to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an activity_patchSign. */
    interface Iactivity_patchSign {

        /** activity_patchSign activityId */
        activityId?: (number|null);
    }

    /** Represents an activity_patchSign. */
    class activity_patchSign implements Iactivity_patchSign {

        /**
         * Constructs a new activity_patchSign.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.Iactivity_patchSign);

        /** activity_patchSign activityId. */
        public activityId: number;

        /**
         * Encodes the specified activity_patchSign message. Does not implicitly {@link msgProto.activity_patchSign.verify|verify} messages.
         * @param message activity_patchSign message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.Iactivity_patchSign, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an activity_patchSign message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns activity_patchSign
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.activity_patchSign;

        /**
         * Creates an activity_patchSign message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns activity_patchSign
         */
        public static fromObject(object: { [k: string]: any }): msgProto.activity_patchSign;

        /**
         * Creates a plain object from an activity_patchSign message. Also converts values to other types if specified.
         * @param message activity_patchSign
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.activity_patchSign, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this activity_patchSign to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ActivityReport. */
    interface IActivityReport {

        /** ActivityReport ActivityId */
        ActivityId?: (number|null);

        /** ActivityReport report */
        report?: (string|null);
    }

    /** Represents an ActivityReport. */
    class ActivityReport implements IActivityReport {

        /**
         * Constructs a new ActivityReport.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IActivityReport);

        /** ActivityReport ActivityId. */
        public ActivityId: number;

        /** ActivityReport report. */
        public report: string;

        /**
         * Encodes the specified ActivityReport message. Does not implicitly {@link msgProto.ActivityReport.verify|verify} messages.
         * @param message ActivityReport message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IActivityReport, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ActivityReport message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ActivityReport
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.ActivityReport;

        /**
         * Creates an ActivityReport message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ActivityReport
         */
        public static fromObject(object: { [k: string]: any }): msgProto.ActivityReport;

        /**
         * Creates a plain object from an ActivityReport message. Also converts values to other types if specified.
         * @param message ActivityReport
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.ActivityReport, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ActivityReport to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ArenaGetInfo. */
    interface IArenaGetInfo {
    }

    /** Represents an ArenaGetInfo. */
    class ArenaGetInfo implements IArenaGetInfo {

        /**
         * Constructs a new ArenaGetInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IArenaGetInfo);

        /**
         * Encodes the specified ArenaGetInfo message. Does not implicitly {@link msgProto.ArenaGetInfo.verify|verify} messages.
         * @param message ArenaGetInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IArenaGetInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ArenaGetInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ArenaGetInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.ArenaGetInfo;

        /**
         * Creates an ArenaGetInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ArenaGetInfo
         */
        public static fromObject(object: { [k: string]: any }): msgProto.ArenaGetInfo;

        /**
         * Creates a plain object from an ArenaGetInfo message. Also converts values to other types if specified.
         * @param message ArenaGetInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.ArenaGetInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ArenaGetInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ArenaResetFightRanks. */
    interface IArenaResetFightRanks {
    }

    /** Represents an ArenaResetFightRanks. */
    class ArenaResetFightRanks implements IArenaResetFightRanks {

        /**
         * Constructs a new ArenaResetFightRanks.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IArenaResetFightRanks);

        /**
         * Encodes the specified ArenaResetFightRanks message. Does not implicitly {@link msgProto.ArenaResetFightRanks.verify|verify} messages.
         * @param message ArenaResetFightRanks message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IArenaResetFightRanks, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ArenaResetFightRanks message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ArenaResetFightRanks
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.ArenaResetFightRanks;

        /**
         * Creates an ArenaResetFightRanks message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ArenaResetFightRanks
         */
        public static fromObject(object: { [k: string]: any }): msgProto.ArenaResetFightRanks;

        /**
         * Creates a plain object from an ArenaResetFightRanks message. Also converts values to other types if specified.
         * @param message ArenaResetFightRanks
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.ArenaResetFightRanks, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ArenaResetFightRanks to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ArenaFightStart. */
    interface IArenaFightStart {

        /** ArenaFightStart rank */
        rank?: (string|null);
    }

    /** Represents an ArenaFightStart. */
    class ArenaFightStart implements IArenaFightStart {

        /**
         * Constructs a new ArenaFightStart.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IArenaFightStart);

        /** ArenaFightStart rank. */
        public rank: string;

        /**
         * Encodes the specified ArenaFightStart message. Does not implicitly {@link msgProto.ArenaFightStart.verify|verify} messages.
         * @param message ArenaFightStart message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IArenaFightStart, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ArenaFightStart message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ArenaFightStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.ArenaFightStart;

        /**
         * Creates an ArenaFightStart message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ArenaFightStart
         */
        public static fromObject(object: { [k: string]: any }): msgProto.ArenaFightStart;

        /**
         * Creates a plain object from an ArenaFightStart message. Also converts values to other types if specified.
         * @param message ArenaFightStart
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.ArenaFightStart, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ArenaFightStart to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ArenaFightEnd. */
    interface IArenaFightEnd {

        /** ArenaFightEnd rank */
        rank?: (string|null);

        /** ArenaFightEnd isWin */
        isWin?: (number|null);

        /** ArenaFightEnd fightData */
        fightData?: (string|null);
    }

    /** Represents an ArenaFightEnd. */
    class ArenaFightEnd implements IArenaFightEnd {

        /**
         * Constructs a new ArenaFightEnd.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IArenaFightEnd);

        /** ArenaFightEnd rank. */
        public rank: string;

        /** ArenaFightEnd isWin. */
        public isWin: number;

        /** ArenaFightEnd fightData. */
        public fightData: string;

        /**
         * Encodes the specified ArenaFightEnd message. Does not implicitly {@link msgProto.ArenaFightEnd.verify|verify} messages.
         * @param message ArenaFightEnd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IArenaFightEnd, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ArenaFightEnd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ArenaFightEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.ArenaFightEnd;

        /**
         * Creates an ArenaFightEnd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ArenaFightEnd
         */
        public static fromObject(object: { [k: string]: any }): msgProto.ArenaFightEnd;

        /**
         * Creates a plain object from an ArenaFightEnd message. Also converts values to other types if specified.
         * @param message ArenaFightEnd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.ArenaFightEnd, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ArenaFightEnd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ArenaGetFightUserList. */
    interface IArenaGetFightUserList {
    }

    /** Represents an ArenaGetFightUserList. */
    class ArenaGetFightUserList implements IArenaGetFightUserList {

        /**
         * Constructs a new ArenaGetFightUserList.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IArenaGetFightUserList);

        /**
         * Encodes the specified ArenaGetFightUserList message. Does not implicitly {@link msgProto.ArenaGetFightUserList.verify|verify} messages.
         * @param message ArenaGetFightUserList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IArenaGetFightUserList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ArenaGetFightUserList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ArenaGetFightUserList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.ArenaGetFightUserList;

        /**
         * Creates an ArenaGetFightUserList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ArenaGetFightUserList
         */
        public static fromObject(object: { [k: string]: any }): msgProto.ArenaGetFightUserList;

        /**
         * Creates a plain object from an ArenaGetFightUserList message. Also converts values to other types if specified.
         * @param message ArenaGetFightUserList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.ArenaGetFightUserList, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ArenaGetFightUserList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ArenaBuyPKNum. */
    interface IArenaBuyPKNum {
    }

    /** Represents an ArenaBuyPKNum. */
    class ArenaBuyPKNum implements IArenaBuyPKNum {

        /**
         * Constructs a new ArenaBuyPKNum.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IArenaBuyPKNum);

        /**
         * Encodes the specified ArenaBuyPKNum message. Does not implicitly {@link msgProto.ArenaBuyPKNum.verify|verify} messages.
         * @param message ArenaBuyPKNum message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IArenaBuyPKNum, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ArenaBuyPKNum message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ArenaBuyPKNum
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.ArenaBuyPKNum;

        /**
         * Creates an ArenaBuyPKNum message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ArenaBuyPKNum
         */
        public static fromObject(object: { [k: string]: any }): msgProto.ArenaBuyPKNum;

        /**
         * Creates a plain object from an ArenaBuyPKNum message. Also converts values to other types if specified.
         * @param message ArenaBuyPKNum
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.ArenaBuyPKNum, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ArenaBuyPKNum to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ArenaGetRecordList. */
    interface IArenaGetRecordList {

        /** ArenaGetRecordList index */
        index?: (number|null);

        /** ArenaGetRecordList coun */
        coun?: (number|null);
    }

    /** Represents an ArenaGetRecordList. */
    class ArenaGetRecordList implements IArenaGetRecordList {

        /**
         * Constructs a new ArenaGetRecordList.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IArenaGetRecordList);

        /** ArenaGetRecordList index. */
        public index: number;

        /** ArenaGetRecordList coun. */
        public coun: number;

        /**
         * Encodes the specified ArenaGetRecordList message. Does not implicitly {@link msgProto.ArenaGetRecordList.verify|verify} messages.
         * @param message ArenaGetRecordList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IArenaGetRecordList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ArenaGetRecordList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ArenaGetRecordList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.ArenaGetRecordList;

        /**
         * Creates an ArenaGetRecordList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ArenaGetRecordList
         */
        public static fromObject(object: { [k: string]: any }): msgProto.ArenaGetRecordList;

        /**
         * Creates a plain object from an ArenaGetRecordList message. Also converts values to other types if specified.
         * @param message ArenaGetRecordList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.ArenaGetRecordList, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ArenaGetRecordList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ArenaSetRead. */
    interface IArenaSetRead {
    }

    /** Represents an ArenaSetRead. */
    class ArenaSetRead implements IArenaSetRead {

        /**
         * Constructs a new ArenaSetRead.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IArenaSetRead);

        /**
         * Encodes the specified ArenaSetRead message. Does not implicitly {@link msgProto.ArenaSetRead.verify|verify} messages.
         * @param message ArenaSetRead message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IArenaSetRead, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ArenaSetRead message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ArenaSetRead
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.ArenaSetRead;

        /**
         * Creates an ArenaSetRead message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ArenaSetRead
         */
        public static fromObject(object: { [k: string]: any }): msgProto.ArenaSetRead;

        /**
         * Creates a plain object from an ArenaSetRead message. Also converts values to other types if specified.
         * @param message ArenaSetRead
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.ArenaSetRead, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ArenaSetRead to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ArenaPickRankAward. */
    interface IArenaPickRankAward {
    }

    /** Represents an ArenaPickRankAward. */
    class ArenaPickRankAward implements IArenaPickRankAward {

        /**
         * Constructs a new ArenaPickRankAward.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IArenaPickRankAward);

        /**
         * Encodes the specified ArenaPickRankAward message. Does not implicitly {@link msgProto.ArenaPickRankAward.verify|verify} messages.
         * @param message ArenaPickRankAward message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IArenaPickRankAward, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ArenaPickRankAward message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ArenaPickRankAward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.ArenaPickRankAward;

        /**
         * Creates an ArenaPickRankAward message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ArenaPickRankAward
         */
        public static fromObject(object: { [k: string]: any }): msgProto.ArenaPickRankAward;

        /**
         * Creates a plain object from an ArenaPickRankAward message. Also converts values to other types if specified.
         * @param message ArenaPickRankAward
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.ArenaPickRankAward, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ArenaPickRankAward to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ArenaRefreshCD. */
    interface IArenaRefreshCD {
    }

    /** Represents an ArenaRefreshCD. */
    class ArenaRefreshCD implements IArenaRefreshCD {

        /**
         * Constructs a new ArenaRefreshCD.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IArenaRefreshCD);

        /**
         * Encodes the specified ArenaRefreshCD message. Does not implicitly {@link msgProto.ArenaRefreshCD.verify|verify} messages.
         * @param message ArenaRefreshCD message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IArenaRefreshCD, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ArenaRefreshCD message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ArenaRefreshCD
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.ArenaRefreshCD;

        /**
         * Creates an ArenaRefreshCD message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ArenaRefreshCD
         */
        public static fromObject(object: { [k: string]: any }): msgProto.ArenaRefreshCD;

        /**
         * Creates a plain object from an ArenaRefreshCD message. Also converts values to other types if specified.
         * @param message ArenaRefreshCD
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.ArenaRefreshCD, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ArenaRefreshCD to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ArenaGetRankList. */
    interface IArenaGetRankList {
    }

    /** Represents an ArenaGetRankList. */
    class ArenaGetRankList implements IArenaGetRankList {

        /**
         * Constructs a new ArenaGetRankList.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IArenaGetRankList);

        /**
         * Encodes the specified ArenaGetRankList message. Does not implicitly {@link msgProto.ArenaGetRankList.verify|verify} messages.
         * @param message ArenaGetRankList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IArenaGetRankList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ArenaGetRankList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ArenaGetRankList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.ArenaGetRankList;

        /**
         * Creates an ArenaGetRankList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ArenaGetRankList
         */
        public static fromObject(object: { [k: string]: any }): msgProto.ArenaGetRankList;

        /**
         * Creates a plain object from an ArenaGetRankList message. Also converts values to other types if specified.
         * @param message ArenaGetRankList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.ArenaGetRankList, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ArenaGetRankList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ArenaGetRefreshRemainTime. */
    interface IArenaGetRefreshRemainTime {
    }

    /** Represents an ArenaGetRefreshRemainTime. */
    class ArenaGetRefreshRemainTime implements IArenaGetRefreshRemainTime {

        /**
         * Constructs a new ArenaGetRefreshRemainTime.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IArenaGetRefreshRemainTime);

        /**
         * Encodes the specified ArenaGetRefreshRemainTime message. Does not implicitly {@link msgProto.ArenaGetRefreshRemainTime.verify|verify} messages.
         * @param message ArenaGetRefreshRemainTime message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IArenaGetRefreshRemainTime, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ArenaGetRefreshRemainTime message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ArenaGetRefreshRemainTime
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.ArenaGetRefreshRemainTime;

        /**
         * Creates an ArenaGetRefreshRemainTime message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ArenaGetRefreshRemainTime
         */
        public static fromObject(object: { [k: string]: any }): msgProto.ArenaGetRefreshRemainTime;

        /**
         * Creates a plain object from an ArenaGetRefreshRemainTime message. Also converts values to other types if specified.
         * @param message ArenaGetRefreshRemainTime
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.ArenaGetRefreshRemainTime, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ArenaGetRefreshRemainTime to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BonusGetInfo. */
    interface IBonusGetInfo {

        /** BonusGetInfo lastId */
        lastId?: (number|null);
    }

    /** Represents a BonusGetInfo. */
    class BonusGetInfo implements IBonusGetInfo {

        /**
         * Constructs a new BonusGetInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IBonusGetInfo);

        /** BonusGetInfo lastId. */
        public lastId: number;

        /**
         * Encodes the specified BonusGetInfo message. Does not implicitly {@link msgProto.BonusGetInfo.verify|verify} messages.
         * @param message BonusGetInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IBonusGetInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a BonusGetInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BonusGetInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.BonusGetInfo;

        /**
         * Creates a BonusGetInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BonusGetInfo
         */
        public static fromObject(object: { [k: string]: any }): msgProto.BonusGetInfo;

        /**
         * Creates a plain object from a BonusGetInfo message. Also converts values to other types if specified.
         * @param message BonusGetInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.BonusGetInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BonusGetInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BonusBreakRelation. */
    interface IBonusBreakRelation {

        /** BonusBreakRelation inviteeUserId */
        inviteeUserId?: (number|Long|null);
    }

    /** Represents a BonusBreakRelation. */
    class BonusBreakRelation implements IBonusBreakRelation {

        /**
         * Constructs a new BonusBreakRelation.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IBonusBreakRelation);

        /** BonusBreakRelation inviteeUserId. */
        public inviteeUserId: (number|Long);

        /**
         * Encodes the specified BonusBreakRelation message. Does not implicitly {@link msgProto.BonusBreakRelation.verify|verify} messages.
         * @param message BonusBreakRelation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IBonusBreakRelation, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a BonusBreakRelation message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BonusBreakRelation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.BonusBreakRelation;

        /**
         * Creates a BonusBreakRelation message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BonusBreakRelation
         */
        public static fromObject(object: { [k: string]: any }): msgProto.BonusBreakRelation;

        /**
         * Creates a plain object from a BonusBreakRelation message. Also converts values to other types if specified.
         * @param message BonusBreakRelation
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.BonusBreakRelation, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BonusBreakRelation to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BonusShare. */
    interface IBonusShare {

        /** BonusShare serverIndexId */
        serverIndexId?: (number|null);
    }

    /** Represents a BonusShare. */
    class BonusShare implements IBonusShare {

        /**
         * Constructs a new BonusShare.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IBonusShare);

        /** BonusShare serverIndexId. */
        public serverIndexId: number;

        /**
         * Encodes the specified BonusShare message. Does not implicitly {@link msgProto.BonusShare.verify|verify} messages.
         * @param message BonusShare message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IBonusShare, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a BonusShare message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BonusShare
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.BonusShare;

        /**
         * Creates a BonusShare message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BonusShare
         */
        public static fromObject(object: { [k: string]: any }): msgProto.BonusShare;

        /**
         * Creates a plain object from a BonusShare message. Also converts values to other types if specified.
         * @param message BonusShare
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.BonusShare, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BonusShare to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BonusDraw. */
    interface IBonusDraw {
    }

    /** Represents a BonusDraw. */
    class BonusDraw implements IBonusDraw {

        /**
         * Constructs a new BonusDraw.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IBonusDraw);

        /**
         * Encodes the specified BonusDraw message. Does not implicitly {@link msgProto.BonusDraw.verify|verify} messages.
         * @param message BonusDraw message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IBonusDraw, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a BonusDraw message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BonusDraw
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.BonusDraw;

        /**
         * Creates a BonusDraw message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BonusDraw
         */
        public static fromObject(object: { [k: string]: any }): msgProto.BonusDraw;

        /**
         * Creates a plain object from a BonusDraw message. Also converts values to other types if specified.
         * @param message BonusDraw
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.BonusDraw, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BonusDraw to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BonusSendShareGift. */
    interface IBonusSendShareGift {
    }

    /** Represents a BonusSendShareGift. */
    class BonusSendShareGift implements IBonusSendShareGift {

        /**
         * Constructs a new BonusSendShareGift.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IBonusSendShareGift);

        /**
         * Encodes the specified BonusSendShareGift message. Does not implicitly {@link msgProto.BonusSendShareGift.verify|verify} messages.
         * @param message BonusSendShareGift message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IBonusSendShareGift, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a BonusSendShareGift message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BonusSendShareGift
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.BonusSendShareGift;

        /**
         * Creates a BonusSendShareGift message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BonusSendShareGift
         */
        public static fromObject(object: { [k: string]: any }): msgProto.BonusSendShareGift;

        /**
         * Creates a plain object from a BonusSendShareGift message. Also converts values to other types if specified.
         * @param message BonusSendShareGift
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.BonusSendShareGift, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BonusSendShareGift to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BossGetGuildBossList. */
    interface IBossGetGuildBossList {
    }

    /** Represents a BossGetGuildBossList. */
    class BossGetGuildBossList implements IBossGetGuildBossList {

        /**
         * Constructs a new BossGetGuildBossList.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IBossGetGuildBossList);

        /**
         * Encodes the specified BossGetGuildBossList message. Does not implicitly {@link msgProto.BossGetGuildBossList.verify|verify} messages.
         * @param message BossGetGuildBossList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IBossGetGuildBossList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a BossGetGuildBossList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BossGetGuildBossList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.BossGetGuildBossList;

        /**
         * Creates a BossGetGuildBossList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BossGetGuildBossList
         */
        public static fromObject(object: { [k: string]: any }): msgProto.BossGetGuildBossList;

        /**
         * Creates a plain object from a BossGetGuildBossList message. Also converts values to other types if specified.
         * @param message BossGetGuildBossList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.BossGetGuildBossList, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BossGetGuildBossList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BossGetWorldBossList. */
    interface IBossGetWorldBossList {
    }

    /** Represents a BossGetWorldBossList. */
    class BossGetWorldBossList implements IBossGetWorldBossList {

        /**
         * Constructs a new BossGetWorldBossList.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IBossGetWorldBossList);

        /**
         * Encodes the specified BossGetWorldBossList message. Does not implicitly {@link msgProto.BossGetWorldBossList.verify|verify} messages.
         * @param message BossGetWorldBossList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IBossGetWorldBossList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a BossGetWorldBossList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BossGetWorldBossList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.BossGetWorldBossList;

        /**
         * Creates a BossGetWorldBossList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BossGetWorldBossList
         */
        public static fromObject(object: { [k: string]: any }): msgProto.BossGetWorldBossList;

        /**
         * Creates a plain object from a BossGetWorldBossList message. Also converts values to other types if specified.
         * @param message BossGetWorldBossList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.BossGetWorldBossList, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BossGetWorldBossList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BossOpenBoss. */
    interface IBossOpenBoss {

        /** BossOpenBoss bossId */
        bossId?: (number|null);

        /** BossOpenBoss isLock */
        isLock?: (number|null);
    }

    /** Represents a BossOpenBoss. */
    class BossOpenBoss implements IBossOpenBoss {

        /**
         * Constructs a new BossOpenBoss.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IBossOpenBoss);

        /** BossOpenBoss bossId. */
        public bossId: number;

        /** BossOpenBoss isLock. */
        public isLock: number;

        /**
         * Encodes the specified BossOpenBoss message. Does not implicitly {@link msgProto.BossOpenBoss.verify|verify} messages.
         * @param message BossOpenBoss message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IBossOpenBoss, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a BossOpenBoss message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BossOpenBoss
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.BossOpenBoss;

        /**
         * Creates a BossOpenBoss message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BossOpenBoss
         */
        public static fromObject(object: { [k: string]: any }): msgProto.BossOpenBoss;

        /**
         * Creates a plain object from a BossOpenBoss message. Also converts values to other types if specified.
         * @param message BossOpenBoss
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.BossOpenBoss, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BossOpenBoss to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BossEnter. */
    interface IBossEnter {

        /** BossEnter bossId */
        bossId?: (number|null);
    }

    /** Represents a BossEnter. */
    class BossEnter implements IBossEnter {

        /**
         * Constructs a new BossEnter.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IBossEnter);

        /** BossEnter bossId. */
        public bossId: number;

        /**
         * Encodes the specified BossEnter message. Does not implicitly {@link msgProto.BossEnter.verify|verify} messages.
         * @param message BossEnter message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IBossEnter, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a BossEnter message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BossEnter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.BossEnter;

        /**
         * Creates a BossEnter message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BossEnter
         */
        public static fromObject(object: { [k: string]: any }): msgProto.BossEnter;

        /**
         * Creates a plain object from a BossEnter message. Also converts values to other types if specified.
         * @param message BossEnter
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.BossEnter, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BossEnter to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BossStartFight. */
    interface IBossStartFight {

        /** BossStartFight bossId */
        bossId?: (number|null);
    }

    /** Represents a BossStartFight. */
    class BossStartFight implements IBossStartFight {

        /**
         * Constructs a new BossStartFight.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IBossStartFight);

        /** BossStartFight bossId. */
        public bossId: number;

        /**
         * Encodes the specified BossStartFight message. Does not implicitly {@link msgProto.BossStartFight.verify|verify} messages.
         * @param message BossStartFight message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IBossStartFight, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a BossStartFight message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BossStartFight
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.BossStartFight;

        /**
         * Creates a BossStartFight message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BossStartFight
         */
        public static fromObject(object: { [k: string]: any }): msgProto.BossStartFight;

        /**
         * Creates a plain object from a BossStartFight message. Also converts values to other types if specified.
         * @param message BossStartFight
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.BossStartFight, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BossStartFight to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BossHurt. */
    interface IBossHurt {

        /** BossHurt bossId */
        bossId?: (number|null);

        /** BossHurt hurtDic */
        hurtDic?: (string|null);

        /** BossHurt isEnd */
        isEnd?: (number|null);

        /** BossHurt mData */
        mData?: (string|null);

        /** BossHurt hurtArr */
        hurtArr?: (string|null);
    }

    /** Represents a BossHurt. */
    class BossHurt implements IBossHurt {

        /**
         * Constructs a new BossHurt.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IBossHurt);

        /** BossHurt bossId. */
        public bossId: number;

        /** BossHurt hurtDic. */
        public hurtDic: string;

        /** BossHurt isEnd. */
        public isEnd: number;

        /** BossHurt mData. */
        public mData: string;

        /** BossHurt hurtArr. */
        public hurtArr: string;

        /**
         * Encodes the specified BossHurt message. Does not implicitly {@link msgProto.BossHurt.verify|verify} messages.
         * @param message BossHurt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IBossHurt, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a BossHurt message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BossHurt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.BossHurt;

        /**
         * Creates a BossHurt message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BossHurt
         */
        public static fromObject(object: { [k: string]: any }): msgProto.BossHurt;

        /**
         * Creates a plain object from a BossHurt message. Also converts values to other types if specified.
         * @param message BossHurt
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.BossHurt, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BossHurt to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BossExitFight. */
    interface IBossExitFight {

        /** BossExitFight bossId */
        bossId?: (number|null);
    }

    /** Represents a BossExitFight. */
    class BossExitFight implements IBossExitFight {

        /**
         * Constructs a new BossExitFight.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IBossExitFight);

        /** BossExitFight bossId. */
        public bossId: number;

        /**
         * Encodes the specified BossExitFight message. Does not implicitly {@link msgProto.BossExitFight.verify|verify} messages.
         * @param message BossExitFight message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IBossExitFight, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a BossExitFight message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BossExitFight
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.BossExitFight;

        /**
         * Creates a BossExitFight message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BossExitFight
         */
        public static fromObject(object: { [k: string]: any }): msgProto.BossExitFight;

        /**
         * Creates a plain object from a BossExitFight message. Also converts values to other types if specified.
         * @param message BossExitFight
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.BossExitFight, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BossExitFight to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BossClearFightCd. */
    interface IBossClearFightCd {
    }

    /** Represents a BossClearFightCd. */
    class BossClearFightCd implements IBossClearFightCd {

        /**
         * Constructs a new BossClearFightCd.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IBossClearFightCd);

        /**
         * Encodes the specified BossClearFightCd message. Does not implicitly {@link msgProto.BossClearFightCd.verify|verify} messages.
         * @param message BossClearFightCd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IBossClearFightCd, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a BossClearFightCd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BossClearFightCd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.BossClearFightCd;

        /**
         * Creates a BossClearFightCd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BossClearFightCd
         */
        public static fromObject(object: { [k: string]: any }): msgProto.BossClearFightCd;

        /**
         * Creates a plain object from a BossClearFightCd message. Also converts values to other types if specified.
         * @param message BossClearFightCd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.BossClearFightCd, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BossClearFightCd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BossInspire. */
    interface IBossInspire {

        /** BossInspire bossId */
        bossId?: (number|null);
    }

    /** Represents a BossInspire. */
    class BossInspire implements IBossInspire {

        /**
         * Constructs a new BossInspire.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IBossInspire);

        /** BossInspire bossId. */
        public bossId: number;

        /**
         * Encodes the specified BossInspire message. Does not implicitly {@link msgProto.BossInspire.verify|verify} messages.
         * @param message BossInspire message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IBossInspire, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a BossInspire message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BossInspire
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.BossInspire;

        /**
         * Creates a BossInspire message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BossInspire
         */
        public static fromObject(object: { [k: string]: any }): msgProto.BossInspire;

        /**
         * Creates a plain object from a BossInspire message. Also converts values to other types if specified.
         * @param message BossInspire
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.BossInspire, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BossInspire to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BossGetInspireRecordArr. */
    interface IBossGetInspireRecordArr {

        /** BossGetInspireRecordArr bossId */
        bossId?: (number|null);
    }

    /** Represents a BossGetInspireRecordArr. */
    class BossGetInspireRecordArr implements IBossGetInspireRecordArr {

        /**
         * Constructs a new BossGetInspireRecordArr.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IBossGetInspireRecordArr);

        /** BossGetInspireRecordArr bossId. */
        public bossId: number;

        /**
         * Encodes the specified BossGetInspireRecordArr message. Does not implicitly {@link msgProto.BossGetInspireRecordArr.verify|verify} messages.
         * @param message BossGetInspireRecordArr message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IBossGetInspireRecordArr, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a BossGetInspireRecordArr message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BossGetInspireRecordArr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.BossGetInspireRecordArr;

        /**
         * Creates a BossGetInspireRecordArr message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BossGetInspireRecordArr
         */
        public static fromObject(object: { [k: string]: any }): msgProto.BossGetInspireRecordArr;

        /**
         * Creates a plain object from a BossGetInspireRecordArr message. Also converts values to other types if specified.
         * @param message BossGetInspireRecordArr
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.BossGetInspireRecordArr, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BossGetInspireRecordArr to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BossSyncInspire. */
    interface IBossSyncInspire {

        /** BossSyncInspire bossId */
        bossId?: (number|null);
    }

    /** Represents a BossSyncInspire. */
    class BossSyncInspire implements IBossSyncInspire {

        /**
         * Constructs a new BossSyncInspire.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IBossSyncInspire);

        /** BossSyncInspire bossId. */
        public bossId: number;

        /**
         * Encodes the specified BossSyncInspire message. Does not implicitly {@link msgProto.BossSyncInspire.verify|verify} messages.
         * @param message BossSyncInspire message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IBossSyncInspire, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a BossSyncInspire message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BossSyncInspire
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.BossSyncInspire;

        /**
         * Creates a BossSyncInspire message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BossSyncInspire
         */
        public static fromObject(object: { [k: string]: any }): msgProto.BossSyncInspire;

        /**
         * Creates a plain object from a BossSyncInspire message. Also converts values to other types if specified.
         * @param message BossSyncInspire
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.BossSyncInspire, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BossSyncInspire to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BossGetHurtRankList. */
    interface IBossGetHurtRankList {

        /** BossGetHurtRankList bossId */
        bossId?: (number|null);
    }

    /** Represents a BossGetHurtRankList. */
    class BossGetHurtRankList implements IBossGetHurtRankList {

        /**
         * Constructs a new BossGetHurtRankList.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IBossGetHurtRankList);

        /** BossGetHurtRankList bossId. */
        public bossId: number;

        /**
         * Encodes the specified BossGetHurtRankList message. Does not implicitly {@link msgProto.BossGetHurtRankList.verify|verify} messages.
         * @param message BossGetHurtRankList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IBossGetHurtRankList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a BossGetHurtRankList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BossGetHurtRankList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.BossGetHurtRankList;

        /**
         * Creates a BossGetHurtRankList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BossGetHurtRankList
         */
        public static fromObject(object: { [k: string]: any }): msgProto.BossGetHurtRankList;

        /**
         * Creates a plain object from a BossGetHurtRankList message. Also converts values to other types if specified.
         * @param message BossGetHurtRankList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.BossGetHurtRankList, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BossGetHurtRankList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BossGetFirstHurtRank. */
    interface IBossGetFirstHurtRank {

        /** BossGetFirstHurtRank bossId */
        bossId?: (number|null);
    }

    /** Represents a BossGetFirstHurtRank. */
    class BossGetFirstHurtRank implements IBossGetFirstHurtRank {

        /**
         * Constructs a new BossGetFirstHurtRank.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IBossGetFirstHurtRank);

        /** BossGetFirstHurtRank bossId. */
        public bossId: number;

        /**
         * Encodes the specified BossGetFirstHurtRank message. Does not implicitly {@link msgProto.BossGetFirstHurtRank.verify|verify} messages.
         * @param message BossGetFirstHurtRank message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IBossGetFirstHurtRank, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a BossGetFirstHurtRank message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BossGetFirstHurtRank
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.BossGetFirstHurtRank;

        /**
         * Creates a BossGetFirstHurtRank message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BossGetFirstHurtRank
         */
        public static fromObject(object: { [k: string]: any }): msgProto.BossGetFirstHurtRank;

        /**
         * Creates a plain object from a BossGetFirstHurtRank message. Also converts values to other types if specified.
         * @param message BossGetFirstHurtRank
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.BossGetFirstHurtRank, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BossGetFirstHurtRank to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BossGetBossResult. */
    interface IBossGetBossResult {

        /** BossGetBossResult bossId */
        bossId?: (number|null);

        /** BossGetBossResult originBossId */
        originBossId?: (number|null);
    }

    /** Represents a BossGetBossResult. */
    class BossGetBossResult implements IBossGetBossResult {

        /**
         * Constructs a new BossGetBossResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IBossGetBossResult);

        /** BossGetBossResult bossId. */
        public bossId: number;

        /** BossGetBossResult originBossId. */
        public originBossId: number;

        /**
         * Encodes the specified BossGetBossResult message. Does not implicitly {@link msgProto.BossGetBossResult.verify|verify} messages.
         * @param message BossGetBossResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IBossGetBossResult, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a BossGetBossResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BossGetBossResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.BossGetBossResult;

        /**
         * Creates a BossGetBossResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BossGetBossResult
         */
        public static fromObject(object: { [k: string]: any }): msgProto.BossGetBossResult;

        /**
         * Creates a plain object from a BossGetBossResult message. Also converts values to other types if specified.
         * @param message BossGetBossResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.BossGetBossResult, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BossGetBossResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BossGetResultData. */
    interface IBossGetResultData {

        /** BossGetResultData originBossId */
        originBossId?: (number|null);
    }

    /** Represents a BossGetResultData. */
    class BossGetResultData implements IBossGetResultData {

        /**
         * Constructs a new BossGetResultData.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IBossGetResultData);

        /** BossGetResultData originBossId. */
        public originBossId: number;

        /**
         * Encodes the specified BossGetResultData message. Does not implicitly {@link msgProto.BossGetResultData.verify|verify} messages.
         * @param message BossGetResultData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IBossGetResultData, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a BossGetResultData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BossGetResultData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.BossGetResultData;

        /**
         * Creates a BossGetResultData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BossGetResultData
         */
        public static fromObject(object: { [k: string]: any }): msgProto.BossGetResultData;

        /**
         * Creates a plain object from a BossGetResultData message. Also converts values to other types if specified.
         * @param message BossGetResultData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.BossGetResultData, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BossGetResultData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DemonLotusGetInfo. */
    interface IDemonLotusGetInfo {
    }

    /** Represents a DemonLotusGetInfo. */
    class DemonLotusGetInfo implements IDemonLotusGetInfo {

        /**
         * Constructs a new DemonLotusGetInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IDemonLotusGetInfo);

        /**
         * Encodes the specified DemonLotusGetInfo message. Does not implicitly {@link msgProto.DemonLotusGetInfo.verify|verify} messages.
         * @param message DemonLotusGetInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IDemonLotusGetInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DemonLotusGetInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DemonLotusGetInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.DemonLotusGetInfo;

        /**
         * Creates a DemonLotusGetInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DemonLotusGetInfo
         */
        public static fromObject(object: { [k: string]: any }): msgProto.DemonLotusGetInfo;

        /**
         * Creates a plain object from a DemonLotusGetInfo message. Also converts values to other types if specified.
         * @param message DemonLotusGetInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.DemonLotusGetInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DemonLotusGetInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DemonLotusUpLotus. */
    interface IDemonLotusUpLotus {
    }

    /** Represents a DemonLotusUpLotus. */
    class DemonLotusUpLotus implements IDemonLotusUpLotus {

        /**
         * Constructs a new DemonLotusUpLotus.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IDemonLotusUpLotus);

        /**
         * Encodes the specified DemonLotusUpLotus message. Does not implicitly {@link msgProto.DemonLotusUpLotus.verify|verify} messages.
         * @param message DemonLotusUpLotus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IDemonLotusUpLotus, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DemonLotusUpLotus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DemonLotusUpLotus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.DemonLotusUpLotus;

        /**
         * Creates a DemonLotusUpLotus message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DemonLotusUpLotus
         */
        public static fromObject(object: { [k: string]: any }): msgProto.DemonLotusUpLotus;

        /**
         * Creates a plain object from a DemonLotusUpLotus message. Also converts values to other types if specified.
         * @param message DemonLotusUpLotus
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.DemonLotusUpLotus, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DemonLotusUpLotus to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DemonLotusGetRevenue. */
    interface IDemonLotusGetRevenue {
    }

    /** Represents a DemonLotusGetRevenue. */
    class DemonLotusGetRevenue implements IDemonLotusGetRevenue {

        /**
         * Constructs a new DemonLotusGetRevenue.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IDemonLotusGetRevenue);

        /**
         * Encodes the specified DemonLotusGetRevenue message. Does not implicitly {@link msgProto.DemonLotusGetRevenue.verify|verify} messages.
         * @param message DemonLotusGetRevenue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IDemonLotusGetRevenue, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DemonLotusGetRevenue message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DemonLotusGetRevenue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.DemonLotusGetRevenue;

        /**
         * Creates a DemonLotusGetRevenue message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DemonLotusGetRevenue
         */
        public static fromObject(object: { [k: string]: any }): msgProto.DemonLotusGetRevenue;

        /**
         * Creates a plain object from a DemonLotusGetRevenue message. Also converts values to other types if specified.
         * @param message DemonLotusGetRevenue
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.DemonLotusGetRevenue, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DemonLotusGetRevenue to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DemonLotusOpening. */
    interface IDemonLotusOpening {
    }

    /** Represents a DemonLotusOpening. */
    class DemonLotusOpening implements IDemonLotusOpening {

        /**
         * Constructs a new DemonLotusOpening.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IDemonLotusOpening);

        /**
         * Encodes the specified DemonLotusOpening message. Does not implicitly {@link msgProto.DemonLotusOpening.verify|verify} messages.
         * @param message DemonLotusOpening message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IDemonLotusOpening, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DemonLotusOpening message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DemonLotusOpening
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.DemonLotusOpening;

        /**
         * Creates a DemonLotusOpening message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DemonLotusOpening
         */
        public static fromObject(object: { [k: string]: any }): msgProto.DemonLotusOpening;

        /**
         * Creates a plain object from a DemonLotusOpening message. Also converts values to other types if specified.
         * @param message DemonLotusOpening
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.DemonLotusOpening, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DemonLotusOpening to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DemonLotusLotusAdvance. */
    interface IDemonLotusLotusAdvance {
    }

    /** Represents a DemonLotusLotusAdvance. */
    class DemonLotusLotusAdvance implements IDemonLotusLotusAdvance {

        /**
         * Constructs a new DemonLotusLotusAdvance.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IDemonLotusLotusAdvance);

        /**
         * Encodes the specified DemonLotusLotusAdvance message. Does not implicitly {@link msgProto.DemonLotusLotusAdvance.verify|verify} messages.
         * @param message DemonLotusLotusAdvance message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IDemonLotusLotusAdvance, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DemonLotusLotusAdvance message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DemonLotusLotusAdvance
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.DemonLotusLotusAdvance;

        /**
         * Creates a DemonLotusLotusAdvance message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DemonLotusLotusAdvance
         */
        public static fromObject(object: { [k: string]: any }): msgProto.DemonLotusLotusAdvance;

        /**
         * Creates a plain object from a DemonLotusLotusAdvance message. Also converts values to other types if specified.
         * @param message DemonLotusLotusAdvance
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.DemonLotusLotusAdvance, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DemonLotusLotusAdvance to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DemonLotusTreasureTrain. */
    interface IDemonLotusTreasureTrain {
    }

    /** Represents a DemonLotusTreasureTrain. */
    class DemonLotusTreasureTrain implements IDemonLotusTreasureTrain {

        /**
         * Constructs a new DemonLotusTreasureTrain.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IDemonLotusTreasureTrain);

        /**
         * Encodes the specified DemonLotusTreasureTrain message. Does not implicitly {@link msgProto.DemonLotusTreasureTrain.verify|verify} messages.
         * @param message DemonLotusTreasureTrain message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IDemonLotusTreasureTrain, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DemonLotusTreasureTrain message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DemonLotusTreasureTrain
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.DemonLotusTreasureTrain;

        /**
         * Creates a DemonLotusTreasureTrain message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DemonLotusTreasureTrain
         */
        public static fromObject(object: { [k: string]: any }): msgProto.DemonLotusTreasureTrain;

        /**
         * Creates a plain object from a DemonLotusTreasureTrain message. Also converts values to other types if specified.
         * @param message DemonLotusTreasureTrain
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.DemonLotusTreasureTrain, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DemonLotusTreasureTrain to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MailGetList. */
    interface IMailGetList {
    }

    /** Represents a MailGetList. */
    class MailGetList implements IMailGetList {

        /**
         * Constructs a new MailGetList.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IMailGetList);

        /**
         * Encodes the specified MailGetList message. Does not implicitly {@link msgProto.MailGetList.verify|verify} messages.
         * @param message MailGetList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IMailGetList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MailGetList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MailGetList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.MailGetList;

        /**
         * Creates a MailGetList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MailGetList
         */
        public static fromObject(object: { [k: string]: any }): msgProto.MailGetList;

        /**
         * Creates a plain object from a MailGetList message. Also converts values to other types if specified.
         * @param message MailGetList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.MailGetList, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MailGetList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a mailPickItems. */
    interface ImailPickItems {

        /** mailPickItems mailId */
        mailId?: (number|null);
    }

    /** Represents a mailPickItems. */
    class mailPickItems implements ImailPickItems {

        /**
         * Constructs a new mailPickItems.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.ImailPickItems);

        /** mailPickItems mailId. */
        public mailId: number;

        /**
         * Encodes the specified mailPickItems message. Does not implicitly {@link msgProto.mailPickItems.verify|verify} messages.
         * @param message mailPickItems message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.ImailPickItems, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a mailPickItems message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns mailPickItems
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.mailPickItems;

        /**
         * Creates a mailPickItems message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns mailPickItems
         */
        public static fromObject(object: { [k: string]: any }): msgProto.mailPickItems;

        /**
         * Creates a plain object from a mailPickItems message. Also converts values to other types if specified.
         * @param message mailPickItems
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.mailPickItems, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this mailPickItems to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MailPickAllItems. */
    interface IMailPickAllItems {
    }

    /** Represents a MailPickAllItems. */
    class MailPickAllItems implements IMailPickAllItems {

        /**
         * Constructs a new MailPickAllItems.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IMailPickAllItems);

        /**
         * Encodes the specified MailPickAllItems message. Does not implicitly {@link msgProto.MailPickAllItems.verify|verify} messages.
         * @param message MailPickAllItems message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IMailPickAllItems, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MailPickAllItems message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MailPickAllItems
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.MailPickAllItems;

        /**
         * Creates a MailPickAllItems message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MailPickAllItems
         */
        public static fromObject(object: { [k: string]: any }): msgProto.MailPickAllItems;

        /**
         * Creates a plain object from a MailPickAllItems message. Also converts values to other types if specified.
         * @param message MailPickAllItems
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.MailPickAllItems, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MailPickAllItems to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MailSetRead. */
    interface IMailSetRead {

        /** MailSetRead mailId */
        mailId?: (number|null);
    }

    /** Represents a MailSetRead. */
    class MailSetRead implements IMailSetRead {

        /**
         * Constructs a new MailSetRead.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IMailSetRead);

        /** MailSetRead mailId. */
        public mailId: number;

        /**
         * Encodes the specified MailSetRead message. Does not implicitly {@link msgProto.MailSetRead.verify|verify} messages.
         * @param message MailSetRead message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IMailSetRead, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MailSetRead message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MailSetRead
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.MailSetRead;

        /**
         * Creates a MailSetRead message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MailSetRead
         */
        public static fromObject(object: { [k: string]: any }): msgProto.MailSetRead;

        /**
         * Creates a plain object from a MailSetRead message. Also converts values to other types if specified.
         * @param message MailSetRead
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.MailSetRead, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MailSetRead to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MailGetIsNeedOperate. */
    interface IMailGetIsNeedOperate {

        /** MailGetIsNeedOperate mailId */
        mailId?: (number|null);
    }

    /** Represents a MailGetIsNeedOperate. */
    class MailGetIsNeedOperate implements IMailGetIsNeedOperate {

        /**
         * Constructs a new MailGetIsNeedOperate.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IMailGetIsNeedOperate);

        /** MailGetIsNeedOperate mailId. */
        public mailId: number;

        /**
         * Encodes the specified MailGetIsNeedOperate message. Does not implicitly {@link msgProto.MailGetIsNeedOperate.verify|verify} messages.
         * @param message MailGetIsNeedOperate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IMailGetIsNeedOperate, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MailGetIsNeedOperate message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MailGetIsNeedOperate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.MailGetIsNeedOperate;

        /**
         * Creates a MailGetIsNeedOperate message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MailGetIsNeedOperate
         */
        public static fromObject(object: { [k: string]: any }): msgProto.MailGetIsNeedOperate;

        /**
         * Creates a plain object from a MailGetIsNeedOperate message. Also converts values to other types if specified.
         * @param message MailGetIsNeedOperate
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.MailGetIsNeedOperate, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MailGetIsNeedOperate to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EventEventBuy. */
    interface IEventEventBuy {

        /** EventEventBuy eventId */
        eventId?: (number|null);
    }

    /** Represents an EventEventBuy. */
    class EventEventBuy implements IEventEventBuy {

        /**
         * Constructs a new EventEventBuy.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IEventEventBuy);

        /** EventEventBuy eventId. */
        public eventId: number;

        /**
         * Encodes the specified EventEventBuy message. Does not implicitly {@link msgProto.EventEventBuy.verify|verify} messages.
         * @param message EventEventBuy message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IEventEventBuy, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an EventEventBuy message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EventEventBuy
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.EventEventBuy;

        /**
         * Creates an EventEventBuy message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EventEventBuy
         */
        public static fromObject(object: { [k: string]: any }): msgProto.EventEventBuy;

        /**
         * Creates a plain object from an EventEventBuy message. Also converts values to other types if specified.
         * @param message EventEventBuy
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.EventEventBuy, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EventEventBuy to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EquipChangeEquip. */
    interface IEquipChangeEquip {

        /** EquipChangeEquip tempId */
        tempId?: (number|null);

        /** EquipChangeEquip index */
        index?: (number|null);

        /** EquipChangeEquip equipId */
        equipId?: (number|null);
    }

    /** Represents an EquipChangeEquip. */
    class EquipChangeEquip implements IEquipChangeEquip {

        /**
         * Constructs a new EquipChangeEquip.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IEquipChangeEquip);

        /** EquipChangeEquip tempId. */
        public tempId: number;

        /** EquipChangeEquip index. */
        public index: number;

        /** EquipChangeEquip equipId. */
        public equipId: number;

        /**
         * Encodes the specified EquipChangeEquip message. Does not implicitly {@link msgProto.EquipChangeEquip.verify|verify} messages.
         * @param message EquipChangeEquip message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IEquipChangeEquip, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an EquipChangeEquip message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EquipChangeEquip
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.EquipChangeEquip;

        /**
         * Creates an EquipChangeEquip message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EquipChangeEquip
         */
        public static fromObject(object: { [k: string]: any }): msgProto.EquipChangeEquip;

        /**
         * Creates a plain object from an EquipChangeEquip message. Also converts values to other types if specified.
         * @param message EquipChangeEquip
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.EquipChangeEquip, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EquipChangeEquip to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EquipInheritedEquip. */
    interface IEquipInheritedEquip {

        /** EquipInheritedEquip equipId */
        equipId?: (number|null);

        /** EquipInheritedEquip tempId */
        tempId?: (number|null);
    }

    /** Represents an EquipInheritedEquip. */
    class EquipInheritedEquip implements IEquipInheritedEquip {

        /**
         * Constructs a new EquipInheritedEquip.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IEquipInheritedEquip);

        /** EquipInheritedEquip equipId. */
        public equipId: number;

        /** EquipInheritedEquip tempId. */
        public tempId: number;

        /**
         * Encodes the specified EquipInheritedEquip message. Does not implicitly {@link msgProto.EquipInheritedEquip.verify|verify} messages.
         * @param message EquipInheritedEquip message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IEquipInheritedEquip, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an EquipInheritedEquip message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EquipInheritedEquip
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.EquipInheritedEquip;

        /**
         * Creates an EquipInheritedEquip message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EquipInheritedEquip
         */
        public static fromObject(object: { [k: string]: any }): msgProto.EquipInheritedEquip;

        /**
         * Creates a plain object from an EquipInheritedEquip message. Also converts values to other types if specified.
         * @param message EquipInheritedEquip
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.EquipInheritedEquip, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EquipInheritedEquip to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EquipCustomization. */
    interface IEquipCustomization {

        /** EquipCustomization certificate */
        certificate?: (number|null);

        /** EquipCustomization job */
        job?: (number|null);

        /** EquipCustomization name */
        name?: (string|null);

        /** EquipCustomization lvl */
        lvl?: (number|null);

        /** EquipCustomization abilityIndex */
        abilityIndex?: (string|null);

        /** EquipCustomization equipType */
        equipType?: (number|null);
    }

    /** Represents an EquipCustomization. */
    class EquipCustomization implements IEquipCustomization {

        /**
         * Constructs a new EquipCustomization.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IEquipCustomization);

        /** EquipCustomization certificate. */
        public certificate: number;

        /** EquipCustomization job. */
        public job: number;

        /** EquipCustomization name. */
        public name: string;

        /** EquipCustomization lvl. */
        public lvl: number;

        /** EquipCustomization abilityIndex. */
        public abilityIndex: string;

        /** EquipCustomization equipType. */
        public equipType: number;

        /**
         * Encodes the specified EquipCustomization message. Does not implicitly {@link msgProto.EquipCustomization.verify|verify} messages.
         * @param message EquipCustomization message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IEquipCustomization, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an EquipCustomization message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EquipCustomization
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.EquipCustomization;

        /**
         * Creates an EquipCustomization message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EquipCustomization
         */
        public static fromObject(object: { [k: string]: any }): msgProto.EquipCustomization;

        /**
         * Creates a plain object from an EquipCustomization message. Also converts values to other types if specified.
         * @param message EquipCustomization
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.EquipCustomization, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EquipCustomization to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EquipUpCustomization. */
    interface IEquipUpCustomization {

        /** EquipUpCustomization equipId */
        equipId?: (number|null);
    }

    /** Represents an EquipUpCustomization. */
    class EquipUpCustomization implements IEquipUpCustomization {

        /**
         * Constructs a new EquipUpCustomization.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IEquipUpCustomization);

        /** EquipUpCustomization equipId. */
        public equipId: number;

        /**
         * Encodes the specified EquipUpCustomization message. Does not implicitly {@link msgProto.EquipUpCustomization.verify|verify} messages.
         * @param message EquipUpCustomization message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IEquipUpCustomization, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an EquipUpCustomization message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EquipUpCustomization
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.EquipUpCustomization;

        /**
         * Creates an EquipUpCustomization message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EquipUpCustomization
         */
        public static fromObject(object: { [k: string]: any }): msgProto.EquipUpCustomization;

        /**
         * Creates a plain object from an EquipUpCustomization message. Also converts values to other types if specified.
         * @param message EquipUpCustomization
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.EquipUpCustomization, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EquipUpCustomization to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EquipUpdateEquipItemLockStatus. */
    interface IEquipUpdateEquipItemLockStatus {

        /** EquipUpdateEquipItemLockStatus equipId */
        equipId?: (number|null);

        /** EquipUpdateEquipItemLockStatus isLocked */
        isLocked?: (number|null);
    }

    /** Represents an EquipUpdateEquipItemLockStatus. */
    class EquipUpdateEquipItemLockStatus implements IEquipUpdateEquipItemLockStatus {

        /**
         * Constructs a new EquipUpdateEquipItemLockStatus.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IEquipUpdateEquipItemLockStatus);

        /** EquipUpdateEquipItemLockStatus equipId. */
        public equipId: number;

        /** EquipUpdateEquipItemLockStatus isLocked. */
        public isLocked: number;

        /**
         * Encodes the specified EquipUpdateEquipItemLockStatus message. Does not implicitly {@link msgProto.EquipUpdateEquipItemLockStatus.verify|verify} messages.
         * @param message EquipUpdateEquipItemLockStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IEquipUpdateEquipItemLockStatus, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an EquipUpdateEquipItemLockStatus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EquipUpdateEquipItemLockStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.EquipUpdateEquipItemLockStatus;

        /**
         * Creates an EquipUpdateEquipItemLockStatus message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EquipUpdateEquipItemLockStatus
         */
        public static fromObject(object: { [k: string]: any }): msgProto.EquipUpdateEquipItemLockStatus;

        /**
         * Creates a plain object from an EquipUpdateEquipItemLockStatus message. Also converts values to other types if specified.
         * @param message EquipUpdateEquipItemLockStatus
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.EquipUpdateEquipItemLockStatus, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EquipUpdateEquipItemLockStatus to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EquipSellEquipItems. */
    interface IEquipSellEquipItems {

        /** EquipSellEquipItems equipIdArr */
        equipIdArr?: (string|null);
    }

    /** Represents an EquipSellEquipItems. */
    class EquipSellEquipItems implements IEquipSellEquipItems {

        /**
         * Constructs a new EquipSellEquipItems.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IEquipSellEquipItems);

        /** EquipSellEquipItems equipIdArr. */
        public equipIdArr: string;

        /**
         * Encodes the specified EquipSellEquipItems message. Does not implicitly {@link msgProto.EquipSellEquipItems.verify|verify} messages.
         * @param message EquipSellEquipItems message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IEquipSellEquipItems, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an EquipSellEquipItems message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EquipSellEquipItems
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.EquipSellEquipItems;

        /**
         * Creates an EquipSellEquipItems message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EquipSellEquipItems
         */
        public static fromObject(object: { [k: string]: any }): msgProto.EquipSellEquipItems;

        /**
         * Creates a plain object from an EquipSellEquipItems message. Also converts values to other types if specified.
         * @param message EquipSellEquipItems
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.EquipSellEquipItems, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EquipSellEquipItems to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserGetInfo. */
    interface IUserGetInfo {
    }

    /** Represents a UserGetInfo. */
    class UserGetInfo implements IUserGetInfo {

        /**
         * Constructs a new UserGetInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IUserGetInfo);

        /**
         * Encodes the specified UserGetInfo message. Does not implicitly {@link msgProto.UserGetInfo.verify|verify} messages.
         * @param message UserGetInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IUserGetInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a UserGetInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserGetInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.UserGetInfo;

        /**
         * Creates a UserGetInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserGetInfo
         */
        public static fromObject(object: { [k: string]: any }): msgProto.UserGetInfo;

        /**
         * Creates a plain object from a UserGetInfo message. Also converts values to other types if specified.
         * @param message UserGetInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.UserGetInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserGetInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserChangeName. */
    interface IUserChangeName {

        /** UserChangeName name */
        name?: (string|null);

        /** UserChangeName heroTempId */
        heroTempId?: (number|null);
    }

    /** Represents a UserChangeName. */
    class UserChangeName implements IUserChangeName {

        /**
         * Constructs a new UserChangeName.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IUserChangeName);

        /** UserChangeName name. */
        public name: string;

        /** UserChangeName heroTempId. */
        public heroTempId: number;

        /**
         * Encodes the specified UserChangeName message. Does not implicitly {@link msgProto.UserChangeName.verify|verify} messages.
         * @param message UserChangeName message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IUserChangeName, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a UserChangeName message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserChangeName
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.UserChangeName;

        /**
         * Creates a UserChangeName message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserChangeName
         */
        public static fromObject(object: { [k: string]: any }): msgProto.UserChangeName;

        /**
         * Creates a plain object from a UserChangeName message. Also converts values to other types if specified.
         * @param message UserChangeName
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.UserChangeName, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserChangeName to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserUpLvl. */
    interface IUserUpLvl {
    }

    /** Represents a UserUpLvl. */
    class UserUpLvl implements IUserUpLvl {

        /**
         * Constructs a new UserUpLvl.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IUserUpLvl);

        /**
         * Encodes the specified UserUpLvl message. Does not implicitly {@link msgProto.UserUpLvl.verify|verify} messages.
         * @param message UserUpLvl message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IUserUpLvl, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a UserUpLvl message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserUpLvl
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.UserUpLvl;

        /**
         * Creates a UserUpLvl message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserUpLvl
         */
        public static fromObject(object: { [k: string]: any }): msgProto.UserUpLvl;

        /**
         * Creates a plain object from a UserUpLvl message. Also converts values to other types if specified.
         * @param message UserUpLvl
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.UserUpLvl, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserUpLvl to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserSyncData. */
    interface IUserSyncData {

        /** UserSyncData sendData */
        sendData?: (string|null);
    }

    /** Represents a UserSyncData. */
    class UserSyncData implements IUserSyncData {

        /**
         * Constructs a new UserSyncData.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IUserSyncData);

        /** UserSyncData sendData. */
        public sendData: string;

        /**
         * Encodes the specified UserSyncData message. Does not implicitly {@link msgProto.UserSyncData.verify|verify} messages.
         * @param message UserSyncData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IUserSyncData, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a UserSyncData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserSyncData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.UserSyncData;

        /**
         * Creates a UserSyncData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserSyncData
         */
        public static fromObject(object: { [k: string]: any }): msgProto.UserSyncData;

        /**
         * Creates a plain object from a UserSyncData message. Also converts values to other types if specified.
         * @param message UserSyncData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.UserSyncData, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserSyncData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserSyncData2. */
    interface IUserSyncData2 {
    }

    /** Represents a UserSyncData2. */
    class UserSyncData2 implements IUserSyncData2 {

        /**
         * Constructs a new UserSyncData2.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IUserSyncData2);

        /**
         * Encodes the specified UserSyncData2 message. Does not implicitly {@link msgProto.UserSyncData2.verify|verify} messages.
         * @param message UserSyncData2 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IUserSyncData2, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a UserSyncData2 message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserSyncData2
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.UserSyncData2;

        /**
         * Creates a UserSyncData2 message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserSyncData2
         */
        public static fromObject(object: { [k: string]: any }): msgProto.UserSyncData2;

        /**
         * Creates a plain object from a UserSyncData2 message. Also converts values to other types if specified.
         * @param message UserSyncData2
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.UserSyncData2, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserSyncData2 to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserGetBagChest. */
    interface IUserGetBagChest {

        /** UserGetBagChest chestId */
        chestId?: (number|null);

        /** UserGetBagChest count */
        count?: (number|null);
    }

    /** Represents a UserGetBagChest. */
    class UserGetBagChest implements IUserGetBagChest {

        /**
         * Constructs a new UserGetBagChest.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IUserGetBagChest);

        /** UserGetBagChest chestId. */
        public chestId: number;

        /** UserGetBagChest count. */
        public count: number;

        /**
         * Encodes the specified UserGetBagChest message. Does not implicitly {@link msgProto.UserGetBagChest.verify|verify} messages.
         * @param message UserGetBagChest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IUserGetBagChest, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a UserGetBagChest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserGetBagChest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.UserGetBagChest;

        /**
         * Creates a UserGetBagChest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserGetBagChest
         */
        public static fromObject(object: { [k: string]: any }): msgProto.UserGetBagChest;

        /**
         * Creates a plain object from a UserGetBagChest message. Also converts values to other types if specified.
         * @param message UserGetBagChest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.UserGetBagChest, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserGetBagChest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserBuyGold. */
    interface IUserBuyGold {
    }

    /** Represents a UserBuyGold. */
    class UserBuyGold implements IUserBuyGold {

        /**
         * Constructs a new UserBuyGold.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IUserBuyGold);

        /**
         * Encodes the specified UserBuyGold message. Does not implicitly {@link msgProto.UserBuyGold.verify|verify} messages.
         * @param message UserBuyGold message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IUserBuyGold, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a UserBuyGold message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserBuyGold
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.UserBuyGold;

        /**
         * Creates a UserBuyGold message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserBuyGold
         */
        public static fromObject(object: { [k: string]: any }): msgProto.UserBuyGold;

        /**
         * Creates a plain object from a UserBuyGold message. Also converts values to other types if specified.
         * @param message UserBuyGold
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.UserBuyGold, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserBuyGold to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserBuyLingyun. */
    interface IUserBuyLingyun {
    }

    /** Represents a UserBuyLingyun. */
    class UserBuyLingyun implements IUserBuyLingyun {

        /**
         * Constructs a new UserBuyLingyun.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IUserBuyLingyun);

        /**
         * Encodes the specified UserBuyLingyun message. Does not implicitly {@link msgProto.UserBuyLingyun.verify|verify} messages.
         * @param message UserBuyLingyun message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IUserBuyLingyun, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a UserBuyLingyun message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserBuyLingyun
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.UserBuyLingyun;

        /**
         * Creates a UserBuyLingyun message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserBuyLingyun
         */
        public static fromObject(object: { [k: string]: any }): msgProto.UserBuyLingyun;

        /**
         * Creates a plain object from a UserBuyLingyun message. Also converts values to other types if specified.
         * @param message UserBuyLingyun
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.UserBuyLingyun, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserBuyLingyun to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserGetRedPoint. */
    interface IUserGetRedPoint {
    }

    /** Represents a UserGetRedPoint. */
    class UserGetRedPoint implements IUserGetRedPoint {

        /**
         * Constructs a new UserGetRedPoint.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IUserGetRedPoint);

        /**
         * Encodes the specified UserGetRedPoint message. Does not implicitly {@link msgProto.UserGetRedPoint.verify|verify} messages.
         * @param message UserGetRedPoint message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IUserGetRedPoint, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a UserGetRedPoint message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserGetRedPoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.UserGetRedPoint;

        /**
         * Creates a UserGetRedPoint message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserGetRedPoint
         */
        public static fromObject(object: { [k: string]: any }): msgProto.UserGetRedPoint;

        /**
         * Creates a plain object from a UserGetRedPoint message. Also converts values to other types if specified.
         * @param message UserGetRedPoint
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.UserGetRedPoint, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserGetRedPoint to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserUpdateGuide. */
    interface IUserUpdateGuide {

        /** UserUpdateGuide guideId */
        guideId?: (number|null);
    }

    /** Represents a UserUpdateGuide. */
    class UserUpdateGuide implements IUserUpdateGuide {

        /**
         * Constructs a new UserUpdateGuide.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IUserUpdateGuide);

        /** UserUpdateGuide guideId. */
        public guideId: number;

        /**
         * Encodes the specified UserUpdateGuide message. Does not implicitly {@link msgProto.UserUpdateGuide.verify|verify} messages.
         * @param message UserUpdateGuide message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IUserUpdateGuide, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a UserUpdateGuide message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserUpdateGuide
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.UserUpdateGuide;

        /**
         * Creates a UserUpdateGuide message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserUpdateGuide
         */
        public static fromObject(object: { [k: string]: any }): msgProto.UserUpdateGuide;

        /**
         * Creates a plain object from a UserUpdateGuide message. Also converts values to other types if specified.
         * @param message UserUpdateGuide
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.UserUpdateGuide, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserUpdateGuide to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserGetWinRecord. */
    interface IUserGetWinRecord {
    }

    /** Represents a UserGetWinRecord. */
    class UserGetWinRecord implements IUserGetWinRecord {

        /**
         * Constructs a new UserGetWinRecord.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IUserGetWinRecord);

        /**
         * Encodes the specified UserGetWinRecord message. Does not implicitly {@link msgProto.UserGetWinRecord.verify|verify} messages.
         * @param message UserGetWinRecord message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IUserGetWinRecord, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a UserGetWinRecord message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserGetWinRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.UserGetWinRecord;

        /**
         * Creates a UserGetWinRecord message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserGetWinRecord
         */
        public static fromObject(object: { [k: string]: any }): msgProto.UserGetWinRecord;

        /**
         * Creates a plain object from a UserGetWinRecord message. Also converts values to other types if specified.
         * @param message UserGetWinRecord
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.UserGetWinRecord, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserGetWinRecord to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserGetLoseRecord. */
    interface IUserGetLoseRecord {
    }

    /** Represents a UserGetLoseRecord. */
    class UserGetLoseRecord implements IUserGetLoseRecord {

        /**
         * Constructs a new UserGetLoseRecord.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IUserGetLoseRecord);

        /**
         * Encodes the specified UserGetLoseRecord message. Does not implicitly {@link msgProto.UserGetLoseRecord.verify|verify} messages.
         * @param message UserGetLoseRecord message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IUserGetLoseRecord, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a UserGetLoseRecord message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserGetLoseRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.UserGetLoseRecord;

        /**
         * Creates a UserGetLoseRecord message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserGetLoseRecord
         */
        public static fromObject(object: { [k: string]: any }): msgProto.UserGetLoseRecord;

        /**
         * Creates a plain object from a UserGetLoseRecord message. Also converts values to other types if specified.
         * @param message UserGetLoseRecord
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.UserGetLoseRecord, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserGetLoseRecord to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserBuyToUpLvl. */
    interface IUserBuyToUpLvl {
    }

    /** Represents a UserBuyToUpLvl. */
    class UserBuyToUpLvl implements IUserBuyToUpLvl {

        /**
         * Constructs a new UserBuyToUpLvl.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IUserBuyToUpLvl);

        /**
         * Encodes the specified UserBuyToUpLvl message. Does not implicitly {@link msgProto.UserBuyToUpLvl.verify|verify} messages.
         * @param message UserBuyToUpLvl message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IUserBuyToUpLvl, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a UserBuyToUpLvl message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserBuyToUpLvl
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.UserBuyToUpLvl;

        /**
         * Creates a UserBuyToUpLvl message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserBuyToUpLvl
         */
        public static fromObject(object: { [k: string]: any }): msgProto.UserBuyToUpLvl;

        /**
         * Creates a plain object from a UserBuyToUpLvl message. Also converts values to other types if specified.
         * @param message UserBuyToUpLvl
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.UserBuyToUpLvl, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserBuyToUpLvl to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserSaveDeskSuccess. */
    interface IUserSaveDeskSuccess {

        /** UserSaveDeskSuccess type */
        type?: (number|null);
    }

    /** Represents a UserSaveDeskSuccess. */
    class UserSaveDeskSuccess implements IUserSaveDeskSuccess {

        /**
         * Constructs a new UserSaveDeskSuccess.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IUserSaveDeskSuccess);

        /** UserSaveDeskSuccess type. */
        public type: number;

        /**
         * Encodes the specified UserSaveDeskSuccess message. Does not implicitly {@link msgProto.UserSaveDeskSuccess.verify|verify} messages.
         * @param message UserSaveDeskSuccess message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IUserSaveDeskSuccess, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a UserSaveDeskSuccess message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserSaveDeskSuccess
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.UserSaveDeskSuccess;

        /**
         * Creates a UserSaveDeskSuccess message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserSaveDeskSuccess
         */
        public static fromObject(object: { [k: string]: any }): msgProto.UserSaveDeskSuccess;

        /**
         * Creates a plain object from a UserSaveDeskSuccess message. Also converts values to other types if specified.
         * @param message UserSaveDeskSuccess
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.UserSaveDeskSuccess, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserSaveDeskSuccess to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserSetHeroEmbattle. */
    interface IUserSetHeroEmbattle {

        /** UserSetHeroEmbattle heroEmbattle */
        heroEmbattle?: (string|null);
    }

    /** Represents a UserSetHeroEmbattle. */
    class UserSetHeroEmbattle implements IUserSetHeroEmbattle {

        /**
         * Constructs a new UserSetHeroEmbattle.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IUserSetHeroEmbattle);

        /** UserSetHeroEmbattle heroEmbattle. */
        public heroEmbattle: string;

        /**
         * Encodes the specified UserSetHeroEmbattle message. Does not implicitly {@link msgProto.UserSetHeroEmbattle.verify|verify} messages.
         * @param message UserSetHeroEmbattle message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IUserSetHeroEmbattle, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a UserSetHeroEmbattle message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserSetHeroEmbattle
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.UserSetHeroEmbattle;

        /**
         * Creates a UserSetHeroEmbattle message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserSetHeroEmbattle
         */
        public static fromObject(object: { [k: string]: any }): msgProto.UserSetHeroEmbattle;

        /**
         * Creates a plain object from a UserSetHeroEmbattle message. Also converts values to other types if specified.
         * @param message UserSetHeroEmbattle
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.UserSetHeroEmbattle, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserSetHeroEmbattle to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserBuyBagGrid. */
    interface IUserBuyBagGrid {
    }

    /** Represents a UserBuyBagGrid. */
    class UserBuyBagGrid implements IUserBuyBagGrid {

        /**
         * Constructs a new UserBuyBagGrid.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IUserBuyBagGrid);

        /**
         * Encodes the specified UserBuyBagGrid message. Does not implicitly {@link msgProto.UserBuyBagGrid.verify|verify} messages.
         * @param message UserBuyBagGrid message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IUserBuyBagGrid, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a UserBuyBagGrid message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserBuyBagGrid
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.UserBuyBagGrid;

        /**
         * Creates a UserBuyBagGrid message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserBuyBagGrid
         */
        public static fromObject(object: { [k: string]: any }): msgProto.UserBuyBagGrid;

        /**
         * Creates a plain object from a UserBuyBagGrid message. Also converts values to other types if specified.
         * @param message UserBuyBagGrid
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.UserBuyBagGrid, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserBuyBagGrid to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserUpdateCombat. */
    interface IUserUpdateCombat {
    }

    /** Represents a UserUpdateCombat. */
    class UserUpdateCombat implements IUserUpdateCombat {

        /**
         * Constructs a new UserUpdateCombat.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IUserUpdateCombat);

        /**
         * Encodes the specified UserUpdateCombat message. Does not implicitly {@link msgProto.UserUpdateCombat.verify|verify} messages.
         * @param message UserUpdateCombat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IUserUpdateCombat, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a UserUpdateCombat message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserUpdateCombat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.UserUpdateCombat;

        /**
         * Creates a UserUpdateCombat message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserUpdateCombat
         */
        public static fromObject(object: { [k: string]: any }): msgProto.UserUpdateCombat;

        /**
         * Creates a plain object from a UserUpdateCombat message. Also converts values to other types if specified.
         * @param message UserUpdateCombat
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.UserUpdateCombat, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserUpdateCombat to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserSetAutoFight. */
    interface IUserSetAutoFight {

        /** UserSetAutoFight isAuto */
        isAuto?: (number|null);
    }

    /** Represents a UserSetAutoFight. */
    class UserSetAutoFight implements IUserSetAutoFight {

        /**
         * Constructs a new UserSetAutoFight.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IUserSetAutoFight);

        /** UserSetAutoFight isAuto. */
        public isAuto: number;

        /**
         * Encodes the specified UserSetAutoFight message. Does not implicitly {@link msgProto.UserSetAutoFight.verify|verify} messages.
         * @param message UserSetAutoFight message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IUserSetAutoFight, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a UserSetAutoFight message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserSetAutoFight
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.UserSetAutoFight;

        /**
         * Creates a UserSetAutoFight message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserSetAutoFight
         */
        public static fromObject(object: { [k: string]: any }): msgProto.UserSetAutoFight;

        /**
         * Creates a plain object from a UserSetAutoFight message. Also converts values to other types if specified.
         * @param message UserSetAutoFight
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.UserSetAutoFight, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserSetAutoFight to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserSetTimeError. */
    interface IUserSetTimeError {

        /** UserSetTimeError errorNum */
        errorNum?: (number|null);
    }

    /** Represents a UserSetTimeError. */
    class UserSetTimeError implements IUserSetTimeError {

        /**
         * Constructs a new UserSetTimeError.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IUserSetTimeError);

        /** UserSetTimeError errorNum. */
        public errorNum: number;

        /**
         * Encodes the specified UserSetTimeError message. Does not implicitly {@link msgProto.UserSetTimeError.verify|verify} messages.
         * @param message UserSetTimeError message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IUserSetTimeError, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a UserSetTimeError message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserSetTimeError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.UserSetTimeError;

        /**
         * Creates a UserSetTimeError message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserSetTimeError
         */
        public static fromObject(object: { [k: string]: any }): msgProto.UserSetTimeError;

        /**
         * Creates a plain object from a UserSetTimeError message. Also converts values to other types if specified.
         * @param message UserSetTimeError
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.UserSetTimeError, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserSetTimeError to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserSetTodayRankWin. */
    interface IUserSetTodayRankWin {

        /** UserSetTodayRankWin eid */
        eid?: (number|Long|null);
    }

    /** Represents a UserSetTodayRankWin. */
    class UserSetTodayRankWin implements IUserSetTodayRankWin {

        /**
         * Constructs a new UserSetTodayRankWin.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IUserSetTodayRankWin);

        /** UserSetTodayRankWin eid. */
        public eid: (number|Long);

        /**
         * Encodes the specified UserSetTodayRankWin message. Does not implicitly {@link msgProto.UserSetTodayRankWin.verify|verify} messages.
         * @param message UserSetTodayRankWin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IUserSetTodayRankWin, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a UserSetTodayRankWin message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserSetTodayRankWin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.UserSetTodayRankWin;

        /**
         * Creates a UserSetTodayRankWin message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserSetTodayRankWin
         */
        public static fromObject(object: { [k: string]: any }): msgProto.UserSetTodayRankWin;

        /**
         * Creates a plain object from a UserSetTodayRankWin message. Also converts values to other types if specified.
         * @param message UserSetTodayRankWin
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.UserSetTodayRankWin, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserSetTodayRankWin to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserGetWarPrintedList. */
    interface IUserGetWarPrintedList {
    }

    /** Represents a UserGetWarPrintedList. */
    class UserGetWarPrintedList implements IUserGetWarPrintedList {

        /**
         * Constructs a new UserGetWarPrintedList.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IUserGetWarPrintedList);

        /**
         * Encodes the specified UserGetWarPrintedList message. Does not implicitly {@link msgProto.UserGetWarPrintedList.verify|verify} messages.
         * @param message UserGetWarPrintedList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IUserGetWarPrintedList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a UserGetWarPrintedList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserGetWarPrintedList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.UserGetWarPrintedList;

        /**
         * Creates a UserGetWarPrintedList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserGetWarPrintedList
         */
        public static fromObject(object: { [k: string]: any }): msgProto.UserGetWarPrintedList;

        /**
         * Creates a plain object from a UserGetWarPrintedList message. Also converts values to other types if specified.
         * @param message UserGetWarPrintedList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.UserGetWarPrintedList, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserGetWarPrintedList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserWarPrintedStrength. */
    interface IUserWarPrintedStrength {

        /** UserWarPrintedStrength warPrintedId */
        warPrintedId?: (number|null);
    }

    /** Represents a UserWarPrintedStrength. */
    class UserWarPrintedStrength implements IUserWarPrintedStrength {

        /**
         * Constructs a new UserWarPrintedStrength.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IUserWarPrintedStrength);

        /** UserWarPrintedStrength warPrintedId. */
        public warPrintedId: number;

        /**
         * Encodes the specified UserWarPrintedStrength message. Does not implicitly {@link msgProto.UserWarPrintedStrength.verify|verify} messages.
         * @param message UserWarPrintedStrength message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IUserWarPrintedStrength, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a UserWarPrintedStrength message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserWarPrintedStrength
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.UserWarPrintedStrength;

        /**
         * Creates a UserWarPrintedStrength message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserWarPrintedStrength
         */
        public static fromObject(object: { [k: string]: any }): msgProto.UserWarPrintedStrength;

        /**
         * Creates a plain object from a UserWarPrintedStrength message. Also converts values to other types if specified.
         * @param message UserWarPrintedStrength
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.UserWarPrintedStrength, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserWarPrintedStrength to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserSetMedalTitle. */
    interface IUserSetMedalTitle {

        /** UserSetMedalTitle warPrintedId */
        warPrintedId?: (number|null);
    }

    /** Represents a UserSetMedalTitle. */
    class UserSetMedalTitle implements IUserSetMedalTitle {

        /**
         * Constructs a new UserSetMedalTitle.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IUserSetMedalTitle);

        /** UserSetMedalTitle warPrintedId. */
        public warPrintedId: number;

        /**
         * Encodes the specified UserSetMedalTitle message. Does not implicitly {@link msgProto.UserSetMedalTitle.verify|verify} messages.
         * @param message UserSetMedalTitle message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IUserSetMedalTitle, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a UserSetMedalTitle message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserSetMedalTitle
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.UserSetMedalTitle;

        /**
         * Creates a UserSetMedalTitle message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserSetMedalTitle
         */
        public static fromObject(object: { [k: string]: any }): msgProto.UserSetMedalTitle;

        /**
         * Creates a plain object from a UserSetMedalTitle message. Also converts values to other types if specified.
         * @param message UserSetMedalTitle
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.UserSetMedalTitle, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserSetMedalTitle to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserGetGenuineQi. */
    interface IUserGetGenuineQi {
    }

    /** Represents a UserGetGenuineQi. */
    class UserGetGenuineQi implements IUserGetGenuineQi {

        /**
         * Constructs a new UserGetGenuineQi.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IUserGetGenuineQi);

        /**
         * Encodes the specified UserGetGenuineQi message. Does not implicitly {@link msgProto.UserGetGenuineQi.verify|verify} messages.
         * @param message UserGetGenuineQi message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IUserGetGenuineQi, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a UserGetGenuineQi message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserGetGenuineQi
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.UserGetGenuineQi;

        /**
         * Creates a UserGetGenuineQi message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserGetGenuineQi
         */
        public static fromObject(object: { [k: string]: any }): msgProto.UserGetGenuineQi;

        /**
         * Creates a plain object from a UserGetGenuineQi message. Also converts values to other types if specified.
         * @param message UserGetGenuineQi
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.UserGetGenuineQi, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserGetGenuineQi to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserActiveMedal. */
    interface IUserActiveMedal {

        /** UserActiveMedal warPrintedId */
        warPrintedId?: (number|null);
    }

    /** Represents a UserActiveMedal. */
    class UserActiveMedal implements IUserActiveMedal {

        /**
         * Constructs a new UserActiveMedal.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IUserActiveMedal);

        /** UserActiveMedal warPrintedId. */
        public warPrintedId: number;

        /**
         * Encodes the specified UserActiveMedal message. Does not implicitly {@link msgProto.UserActiveMedal.verify|verify} messages.
         * @param message UserActiveMedal message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IUserActiveMedal, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a UserActiveMedal message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserActiveMedal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.UserActiveMedal;

        /**
         * Creates a UserActiveMedal message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserActiveMedal
         */
        public static fromObject(object: { [k: string]: any }): msgProto.UserActiveMedal;

        /**
         * Creates a plain object from a UserActiveMedal message. Also converts values to other types if specified.
         * @param message UserActiveMedal
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.UserActiveMedal, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserActiveMedal to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserGetBindPhoneUrl. */
    interface IUserGetBindPhoneUrl {
    }

    /** Represents a UserGetBindPhoneUrl. */
    class UserGetBindPhoneUrl implements IUserGetBindPhoneUrl {

        /**
         * Constructs a new UserGetBindPhoneUrl.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IUserGetBindPhoneUrl);

        /**
         * Encodes the specified UserGetBindPhoneUrl message. Does not implicitly {@link msgProto.UserGetBindPhoneUrl.verify|verify} messages.
         * @param message UserGetBindPhoneUrl message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IUserGetBindPhoneUrl, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a UserGetBindPhoneUrl message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserGetBindPhoneUrl
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.UserGetBindPhoneUrl;

        /**
         * Creates a UserGetBindPhoneUrl message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserGetBindPhoneUrl
         */
        public static fromObject(object: { [k: string]: any }): msgProto.UserGetBindPhoneUrl;

        /**
         * Creates a plain object from a UserGetBindPhoneUrl message. Also converts values to other types if specified.
         * @param message UserGetBindPhoneUrl
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.UserGetBindPhoneUrl, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserGetBindPhoneUrl to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserGetWanbagift. */
    interface IUserGetWanbagift {

        /** UserGetWanbagift os */
        os?: (string|null);

        /** UserGetWanbagift giftId */
        giftId?: (number|null);
    }

    /** Represents a UserGetWanbagift. */
    class UserGetWanbagift implements IUserGetWanbagift {

        /**
         * Constructs a new UserGetWanbagift.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IUserGetWanbagift);

        /** UserGetWanbagift os. */
        public os: string;

        /** UserGetWanbagift giftId. */
        public giftId: number;

        /**
         * Encodes the specified UserGetWanbagift message. Does not implicitly {@link msgProto.UserGetWanbagift.verify|verify} messages.
         * @param message UserGetWanbagift message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IUserGetWanbagift, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a UserGetWanbagift message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserGetWanbagift
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.UserGetWanbagift;

        /**
         * Creates a UserGetWanbagift message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserGetWanbagift
         */
        public static fromObject(object: { [k: string]: any }): msgProto.UserGetWanbagift;

        /**
         * Creates a plain object from a UserGetWanbagift message. Also converts values to other types if specified.
         * @param message UserGetWanbagift
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.UserGetWanbagift, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserGetWanbagift to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserUpdateSetting. */
    interface IUserUpdateSetting {

        /** UserUpdateSetting catNoVipChat */
        catNoVipChat?: (boolean|null);

        /** UserUpdateSetting autoBuyLittleHorn */
        autoBuyLittleHorn?: (boolean|null);
    }

    /** Represents a UserUpdateSetting. */
    class UserUpdateSetting implements IUserUpdateSetting {

        /**
         * Constructs a new UserUpdateSetting.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IUserUpdateSetting);

        /** UserUpdateSetting catNoVipChat. */
        public catNoVipChat: boolean;

        /** UserUpdateSetting autoBuyLittleHorn. */
        public autoBuyLittleHorn: boolean;

        /**
         * Encodes the specified UserUpdateSetting message. Does not implicitly {@link msgProto.UserUpdateSetting.verify|verify} messages.
         * @param message UserUpdateSetting message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IUserUpdateSetting, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a UserUpdateSetting message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserUpdateSetting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.UserUpdateSetting;

        /**
         * Creates a UserUpdateSetting message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserUpdateSetting
         */
        public static fromObject(object: { [k: string]: any }): msgProto.UserUpdateSetting;

        /**
         * Creates a plain object from a UserUpdateSetting message. Also converts values to other types if specified.
         * @param message UserUpdateSetting
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.UserUpdateSetting, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserUpdateSetting to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserUpdateItems4Bag. */
    interface IUserUpdateItems4Bag {

        /** UserUpdateItems4Bag itemId */
        itemId?: (number|null);
    }

    /** Represents a UserUpdateItems4Bag. */
    class UserUpdateItems4Bag implements IUserUpdateItems4Bag {

        /**
         * Constructs a new UserUpdateItems4Bag.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IUserUpdateItems4Bag);

        /** UserUpdateItems4Bag itemId. */
        public itemId: number;

        /**
         * Encodes the specified UserUpdateItems4Bag message. Does not implicitly {@link msgProto.UserUpdateItems4Bag.verify|verify} messages.
         * @param message UserUpdateItems4Bag message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IUserUpdateItems4Bag, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a UserUpdateItems4Bag message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserUpdateItems4Bag
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.UserUpdateItems4Bag;

        /**
         * Creates a UserUpdateItems4Bag message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserUpdateItems4Bag
         */
        public static fromObject(object: { [k: string]: any }): msgProto.UserUpdateItems4Bag;

        /**
         * Creates a plain object from a UserUpdateItems4Bag message. Also converts values to other types if specified.
         * @param message UserUpdateItems4Bag
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.UserUpdateItems4Bag, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserUpdateItems4Bag to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FriendGetInfo. */
    interface IFriendGetInfo {
    }

    /** Represents a FriendGetInfo. */
    class FriendGetInfo implements IFriendGetInfo {

        /**
         * Constructs a new FriendGetInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IFriendGetInfo);

        /**
         * Encodes the specified FriendGetInfo message. Does not implicitly {@link msgProto.FriendGetInfo.verify|verify} messages.
         * @param message FriendGetInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IFriendGetInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a FriendGetInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FriendGetInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.FriendGetInfo;

        /**
         * Creates a FriendGetInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FriendGetInfo
         */
        public static fromObject(object: { [k: string]: any }): msgProto.FriendGetInfo;

        /**
         * Creates a plain object from a FriendGetInfo message. Also converts values to other types if specified.
         * @param message FriendGetInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.FriendGetInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FriendGetInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FriendRequestFriend. */
    interface IFriendRequestFriend {

        /** FriendRequestFriend requestedId */
        requestedId?: (number|Long|null);
    }

    /** Represents a FriendRequestFriend. */
    class FriendRequestFriend implements IFriendRequestFriend {

        /**
         * Constructs a new FriendRequestFriend.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IFriendRequestFriend);

        /** FriendRequestFriend requestedId. */
        public requestedId: (number|Long);

        /**
         * Encodes the specified FriendRequestFriend message. Does not implicitly {@link msgProto.FriendRequestFriend.verify|verify} messages.
         * @param message FriendRequestFriend message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IFriendRequestFriend, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a FriendRequestFriend message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FriendRequestFriend
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.FriendRequestFriend;

        /**
         * Creates a FriendRequestFriend message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FriendRequestFriend
         */
        public static fromObject(object: { [k: string]: any }): msgProto.FriendRequestFriend;

        /**
         * Creates a plain object from a FriendRequestFriend message. Also converts values to other types if specified.
         * @param message FriendRequestFriend
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.FriendRequestFriend, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FriendRequestFriend to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FriendDisposeFriendRequest. */
    interface IFriendDisposeFriendRequest {

        /** FriendDisposeFriendRequest requestId */
        requestId?: (number|Long|null);

        /** FriendDisposeFriendRequest isTake */
        isTake?: (boolean|null);
    }

    /** Represents a FriendDisposeFriendRequest. */
    class FriendDisposeFriendRequest implements IFriendDisposeFriendRequest {

        /**
         * Constructs a new FriendDisposeFriendRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IFriendDisposeFriendRequest);

        /** FriendDisposeFriendRequest requestId. */
        public requestId: (number|Long);

        /** FriendDisposeFriendRequest isTake. */
        public isTake: boolean;

        /**
         * Encodes the specified FriendDisposeFriendRequest message. Does not implicitly {@link msgProto.FriendDisposeFriendRequest.verify|verify} messages.
         * @param message FriendDisposeFriendRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IFriendDisposeFriendRequest, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a FriendDisposeFriendRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FriendDisposeFriendRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.FriendDisposeFriendRequest;

        /**
         * Creates a FriendDisposeFriendRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FriendDisposeFriendRequest
         */
        public static fromObject(object: { [k: string]: any }): msgProto.FriendDisposeFriendRequest;

        /**
         * Creates a plain object from a FriendDisposeFriendRequest message. Also converts values to other types if specified.
         * @param message FriendDisposeFriendRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.FriendDisposeFriendRequest, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FriendDisposeFriendRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FriendEventCheer. */
    interface IFriendEventCheer {
    }

    /** Represents a FriendEventCheer. */
    class FriendEventCheer implements IFriendEventCheer {

        /**
         * Constructs a new FriendEventCheer.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IFriendEventCheer);

        /**
         * Encodes the specified FriendEventCheer message. Does not implicitly {@link msgProto.FriendEventCheer.verify|verify} messages.
         * @param message FriendEventCheer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IFriendEventCheer, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a FriendEventCheer message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FriendEventCheer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.FriendEventCheer;

        /**
         * Creates a FriendEventCheer message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FriendEventCheer
         */
        public static fromObject(object: { [k: string]: any }): msgProto.FriendEventCheer;

        /**
         * Creates a plain object from a FriendEventCheer message. Also converts values to other types if specified.
         * @param message FriendEventCheer
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.FriendEventCheer, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FriendEventCheer to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FriendGetRequestInfo. */
    interface IFriendGetRequestInfo {
    }

    /** Represents a FriendGetRequestInfo. */
    class FriendGetRequestInfo implements IFriendGetRequestInfo {

        /**
         * Constructs a new FriendGetRequestInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IFriendGetRequestInfo);

        /**
         * Encodes the specified FriendGetRequestInfo message. Does not implicitly {@link msgProto.FriendGetRequestInfo.verify|verify} messages.
         * @param message FriendGetRequestInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IFriendGetRequestInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a FriendGetRequestInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FriendGetRequestInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.FriendGetRequestInfo;

        /**
         * Creates a FriendGetRequestInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FriendGetRequestInfo
         */
        public static fromObject(object: { [k: string]: any }): msgProto.FriendGetRequestInfo;

        /**
         * Creates a plain object from a FriendGetRequestInfo message. Also converts values to other types if specified.
         * @param message FriendGetRequestInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.FriendGetRequestInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FriendGetRequestInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FightPickLoot. */
    interface IFightPickLoot {

        /** FightPickLoot copyId */
        copyId?: (number|null);

        /** FightPickLoot uidArr */
        uidArr?: (string|null);

        /** FightPickLoot fightData */
        fightData?: (string|null);
    }

    /** Represents a FightPickLoot. */
    class FightPickLoot implements IFightPickLoot {

        /**
         * Constructs a new FightPickLoot.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IFightPickLoot);

        /** FightPickLoot copyId. */
        public copyId: number;

        /** FightPickLoot uidArr. */
        public uidArr: string;

        /** FightPickLoot fightData. */
        public fightData: string;

        /**
         * Encodes the specified FightPickLoot message. Does not implicitly {@link msgProto.FightPickLoot.verify|verify} messages.
         * @param message FightPickLoot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IFightPickLoot, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a FightPickLoot message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FightPickLoot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.FightPickLoot;

        /**
         * Creates a FightPickLoot message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FightPickLoot
         */
        public static fromObject(object: { [k: string]: any }): msgProto.FightPickLoot;

        /**
         * Creates a plain object from a FightPickLoot message. Also converts values to other types if specified.
         * @param message FightPickLoot
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.FightPickLoot, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FightPickLoot to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FightRevive. */
    interface IFightRevive {
    }

    /** Represents a FightRevive. */
    class FightRevive implements IFightRevive {

        /**
         * Constructs a new FightRevive.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IFightRevive);

        /**
         * Encodes the specified FightRevive message. Does not implicitly {@link msgProto.FightRevive.verify|verify} messages.
         * @param message FightRevive message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IFightRevive, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a FightRevive message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FightRevive
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.FightRevive;

        /**
         * Creates a FightRevive message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FightRevive
         */
        public static fromObject(object: { [k: string]: any }): msgProto.FightRevive;

        /**
         * Creates a plain object from a FightRevive message. Also converts values to other types if specified.
         * @param message FightRevive
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.FightRevive, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FightRevive to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FightGetAndInitNextLoot. */
    interface IFightGetAndInitNextLoot {

        /** FightGetAndInitNextLoot copyId */
        copyId?: (number|null);

        /** FightGetAndInitNextLoot isBoss */
        isBoss?: (boolean|null);

        /** FightGetAndInitNextLoot lvl */
        lvl?: (number|null);
    }

    /** Represents a FightGetAndInitNextLoot. */
    class FightGetAndInitNextLoot implements IFightGetAndInitNextLoot {

        /**
         * Constructs a new FightGetAndInitNextLoot.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IFightGetAndInitNextLoot);

        /** FightGetAndInitNextLoot copyId. */
        public copyId: number;

        /** FightGetAndInitNextLoot isBoss. */
        public isBoss: boolean;

        /** FightGetAndInitNextLoot lvl. */
        public lvl: number;

        /**
         * Encodes the specified FightGetAndInitNextLoot message. Does not implicitly {@link msgProto.FightGetAndInitNextLoot.verify|verify} messages.
         * @param message FightGetAndInitNextLoot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IFightGetAndInitNextLoot, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a FightGetAndInitNextLoot message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FightGetAndInitNextLoot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.FightGetAndInitNextLoot;

        /**
         * Creates a FightGetAndInitNextLoot message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FightGetAndInitNextLoot
         */
        public static fromObject(object: { [k: string]: any }): msgProto.FightGetAndInitNextLoot;

        /**
         * Creates a plain object from a FightGetAndInitNextLoot message. Also converts values to other types if specified.
         * @param message FightGetAndInitNextLoot
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.FightGetAndInitNextLoot, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FightGetAndInitNextLoot to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FiveDaysTargetGetInfo. */
    interface IFiveDaysTargetGetInfo {
    }

    /** Represents a FiveDaysTargetGetInfo. */
    class FiveDaysTargetGetInfo implements IFiveDaysTargetGetInfo {

        /**
         * Constructs a new FiveDaysTargetGetInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IFiveDaysTargetGetInfo);

        /**
         * Encodes the specified FiveDaysTargetGetInfo message. Does not implicitly {@link msgProto.FiveDaysTargetGetInfo.verify|verify} messages.
         * @param message FiveDaysTargetGetInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IFiveDaysTargetGetInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a FiveDaysTargetGetInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FiveDaysTargetGetInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.FiveDaysTargetGetInfo;

        /**
         * Creates a FiveDaysTargetGetInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FiveDaysTargetGetInfo
         */
        public static fromObject(object: { [k: string]: any }): msgProto.FiveDaysTargetGetInfo;

        /**
         * Creates a plain object from a FiveDaysTargetGetInfo message. Also converts values to other types if specified.
         * @param message FiveDaysTargetGetInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.FiveDaysTargetGetInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FiveDaysTargetGetInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FiveDaysTargetGetInfo1. */
    interface IFiveDaysTargetGetInfo1 {
    }

    /** Represents a FiveDaysTargetGetInfo1. */
    class FiveDaysTargetGetInfo1 implements IFiveDaysTargetGetInfo1 {

        /**
         * Constructs a new FiveDaysTargetGetInfo1.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IFiveDaysTargetGetInfo1);

        /**
         * Encodes the specified FiveDaysTargetGetInfo1 message. Does not implicitly {@link msgProto.FiveDaysTargetGetInfo1.verify|verify} messages.
         * @param message FiveDaysTargetGetInfo1 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IFiveDaysTargetGetInfo1, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a FiveDaysTargetGetInfo1 message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FiveDaysTargetGetInfo1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.FiveDaysTargetGetInfo1;

        /**
         * Creates a FiveDaysTargetGetInfo1 message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FiveDaysTargetGetInfo1
         */
        public static fromObject(object: { [k: string]: any }): msgProto.FiveDaysTargetGetInfo1;

        /**
         * Creates a plain object from a FiveDaysTargetGetInfo1 message. Also converts values to other types if specified.
         * @param message FiveDaysTargetGetInfo1
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.FiveDaysTargetGetInfo1, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FiveDaysTargetGetInfo1 to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GuildGetInfo. */
    interface IGuildGetInfo {
    }

    /** Represents a GuildGetInfo. */
    class GuildGetInfo implements IGuildGetInfo {

        /**
         * Constructs a new GuildGetInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IGuildGetInfo);

        /**
         * Encodes the specified GuildGetInfo message. Does not implicitly {@link msgProto.GuildGetInfo.verify|verify} messages.
         * @param message GuildGetInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IGuildGetInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GuildGetInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GuildGetInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.GuildGetInfo;

        /**
         * Creates a GuildGetInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GuildGetInfo
         */
        public static fromObject(object: { [k: string]: any }): msgProto.GuildGetInfo;

        /**
         * Creates a plain object from a GuildGetInfo message. Also converts values to other types if specified.
         * @param message GuildGetInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.GuildGetInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GuildGetInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GuildEstablishGuild. */
    interface IGuildEstablishGuild {

        /** GuildEstablishGuild name */
        name?: (string|null);
    }

    /** Represents a GuildEstablishGuild. */
    class GuildEstablishGuild implements IGuildEstablishGuild {

        /**
         * Constructs a new GuildEstablishGuild.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IGuildEstablishGuild);

        /** GuildEstablishGuild name. */
        public name: string;

        /**
         * Encodes the specified GuildEstablishGuild message. Does not implicitly {@link msgProto.GuildEstablishGuild.verify|verify} messages.
         * @param message GuildEstablishGuild message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IGuildEstablishGuild, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GuildEstablishGuild message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GuildEstablishGuild
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.GuildEstablishGuild;

        /**
         * Creates a GuildEstablishGuild message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GuildEstablishGuild
         */
        public static fromObject(object: { [k: string]: any }): msgProto.GuildEstablishGuild;

        /**
         * Creates a plain object from a GuildEstablishGuild message. Also converts values to other types if specified.
         * @param message GuildEstablishGuild
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.GuildEstablishGuild, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GuildEstablishGuild to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GuildSeekGuild. */
    interface IGuildSeekGuild {

        /** GuildSeekGuild guildId */
        guildId?: (number|null);
    }

    /** Represents a GuildSeekGuild. */
    class GuildSeekGuild implements IGuildSeekGuild {

        /**
         * Constructs a new GuildSeekGuild.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IGuildSeekGuild);

        /** GuildSeekGuild guildId. */
        public guildId: number;

        /**
         * Encodes the specified GuildSeekGuild message. Does not implicitly {@link msgProto.GuildSeekGuild.verify|verify} messages.
         * @param message GuildSeekGuild message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IGuildSeekGuild, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GuildSeekGuild message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GuildSeekGuild
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.GuildSeekGuild;

        /**
         * Creates a GuildSeekGuild message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GuildSeekGuild
         */
        public static fromObject(object: { [k: string]: any }): msgProto.GuildSeekGuild;

        /**
         * Creates a plain object from a GuildSeekGuild message. Also converts values to other types if specified.
         * @param message GuildSeekGuild
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.GuildSeekGuild, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GuildSeekGuild to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GuildJoinGuild. */
    interface IGuildJoinGuild {

        /** GuildJoinGuild guildId */
        guildId?: (number|null);
    }

    /** Represents a GuildJoinGuild. */
    class GuildJoinGuild implements IGuildJoinGuild {

        /**
         * Constructs a new GuildJoinGuild.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IGuildJoinGuild);

        /** GuildJoinGuild guildId. */
        public guildId: number;

        /**
         * Encodes the specified GuildJoinGuild message. Does not implicitly {@link msgProto.GuildJoinGuild.verify|verify} messages.
         * @param message GuildJoinGuild message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IGuildJoinGuild, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GuildJoinGuild message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GuildJoinGuild
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.GuildJoinGuild;

        /**
         * Creates a GuildJoinGuild message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GuildJoinGuild
         */
        public static fromObject(object: { [k: string]: any }): msgProto.GuildJoinGuild;

        /**
         * Creates a plain object from a GuildJoinGuild message. Also converts values to other types if specified.
         * @param message GuildJoinGuild
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.GuildJoinGuild, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GuildJoinGuild to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GuildGetAppliedMembers. */
    interface IGuildGetAppliedMembers {
    }

    /** Represents a GuildGetAppliedMembers. */
    class GuildGetAppliedMembers implements IGuildGetAppliedMembers {

        /**
         * Constructs a new GuildGetAppliedMembers.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IGuildGetAppliedMembers);

        /**
         * Encodes the specified GuildGetAppliedMembers message. Does not implicitly {@link msgProto.GuildGetAppliedMembers.verify|verify} messages.
         * @param message GuildGetAppliedMembers message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IGuildGetAppliedMembers, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GuildGetAppliedMembers message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GuildGetAppliedMembers
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.GuildGetAppliedMembers;

        /**
         * Creates a GuildGetAppliedMembers message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GuildGetAppliedMembers
         */
        public static fromObject(object: { [k: string]: any }): msgProto.GuildGetAppliedMembers;

        /**
         * Creates a plain object from a GuildGetAppliedMembers message. Also converts values to other types if specified.
         * @param message GuildGetAppliedMembers
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.GuildGetAppliedMembers, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GuildGetAppliedMembers to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GuildAppliedMembersSet. */
    interface IGuildAppliedMembersSet {

        /** GuildAppliedMembersSet tUserId */
        tUserId?: (number|Long|null);

        /** GuildAppliedMembersSet isConsent */
        isConsent?: (boolean|null);
    }

    /** Represents a GuildAppliedMembersSet. */
    class GuildAppliedMembersSet implements IGuildAppliedMembersSet {

        /**
         * Constructs a new GuildAppliedMembersSet.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IGuildAppliedMembersSet);

        /** GuildAppliedMembersSet tUserId. */
        public tUserId: (number|Long);

        /** GuildAppliedMembersSet isConsent. */
        public isConsent: boolean;

        /**
         * Encodes the specified GuildAppliedMembersSet message. Does not implicitly {@link msgProto.GuildAppliedMembersSet.verify|verify} messages.
         * @param message GuildAppliedMembersSet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IGuildAppliedMembersSet, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GuildAppliedMembersSet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GuildAppliedMembersSet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.GuildAppliedMembersSet;

        /**
         * Creates a GuildAppliedMembersSet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GuildAppliedMembersSet
         */
        public static fromObject(object: { [k: string]: any }): msgProto.GuildAppliedMembersSet;

        /**
         * Creates a plain object from a GuildAppliedMembersSet message. Also converts values to other types if specified.
         * @param message GuildAppliedMembersSet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.GuildAppliedMembersSet, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GuildAppliedMembersSet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GuildGuildSetting. */
    interface IGuildGuildSetting {

        /** GuildGuildSetting joinCon */
        joinCon?: (string|null);

        /** GuildGuildSetting joinLvl */
        joinLvl?: (number|null);
    }

    /** Represents a GuildGuildSetting. */
    class GuildGuildSetting implements IGuildGuildSetting {

        /**
         * Constructs a new GuildGuildSetting.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IGuildGuildSetting);

        /** GuildGuildSetting joinCon. */
        public joinCon: string;

        /** GuildGuildSetting joinLvl. */
        public joinLvl: number;

        /**
         * Encodes the specified GuildGuildSetting message. Does not implicitly {@link msgProto.GuildGuildSetting.verify|verify} messages.
         * @param message GuildGuildSetting message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IGuildGuildSetting, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GuildGuildSetting message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GuildGuildSetting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.GuildGuildSetting;

        /**
         * Creates a GuildGuildSetting message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GuildGuildSetting
         */
        public static fromObject(object: { [k: string]: any }): msgProto.GuildGuildSetting;

        /**
         * Creates a plain object from a GuildGuildSetting message. Also converts values to other types if specified.
         * @param message GuildGuildSetting
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.GuildGuildSetting, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GuildGuildSetting to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GuildExitGuild. */
    interface IGuildExitGuild {
    }

    /** Represents a GuildExitGuild. */
    class GuildExitGuild implements IGuildExitGuild {

        /**
         * Constructs a new GuildExitGuild.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IGuildExitGuild);

        /**
         * Encodes the specified GuildExitGuild message. Does not implicitly {@link msgProto.GuildExitGuild.verify|verify} messages.
         * @param message GuildExitGuild message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IGuildExitGuild, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GuildExitGuild message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GuildExitGuild
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.GuildExitGuild;

        /**
         * Creates a GuildExitGuild message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GuildExitGuild
         */
        public static fromObject(object: { [k: string]: any }): msgProto.GuildExitGuild;

        /**
         * Creates a plain object from a GuildExitGuild message. Also converts values to other types if specified.
         * @param message GuildExitGuild
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.GuildExitGuild, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GuildExitGuild to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GuildSetNotice. */
    interface IGuildSetNotice {

        /** GuildSetNotice notice */
        notice?: (string|null);
    }

    /** Represents a GuildSetNotice. */
    class GuildSetNotice implements IGuildSetNotice {

        /**
         * Constructs a new GuildSetNotice.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IGuildSetNotice);

        /** GuildSetNotice notice. */
        public notice: string;

        /**
         * Encodes the specified GuildSetNotice message. Does not implicitly {@link msgProto.GuildSetNotice.verify|verify} messages.
         * @param message GuildSetNotice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IGuildSetNotice, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GuildSetNotice message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GuildSetNotice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.GuildSetNotice;

        /**
         * Creates a GuildSetNotice message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GuildSetNotice
         */
        public static fromObject(object: { [k: string]: any }): msgProto.GuildSetNotice;

        /**
         * Creates a plain object from a GuildSetNotice message. Also converts values to other types if specified.
         * @param message GuildSetNotice
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.GuildSetNotice, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GuildSetNotice to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GuildLottery. */
    interface IGuildLottery {

        /** GuildLottery count */
        count?: (number|null);
    }

    /** Represents a GuildLottery. */
    class GuildLottery implements IGuildLottery {

        /**
         * Constructs a new GuildLottery.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IGuildLottery);

        /** GuildLottery count. */
        public count: number;

        /**
         * Encodes the specified GuildLottery message. Does not implicitly {@link msgProto.GuildLottery.verify|verify} messages.
         * @param message GuildLottery message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IGuildLottery, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GuildLottery message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GuildLottery
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.GuildLottery;

        /**
         * Creates a GuildLottery message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GuildLottery
         */
        public static fromObject(object: { [k: string]: any }): msgProto.GuildLottery;

        /**
         * Creates a plain object from a GuildLottery message. Also converts values to other types if specified.
         * @param message GuildLottery
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.GuildLottery, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GuildLottery to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GuildSetEnnoble. */
    interface IGuildSetEnnoble {

        /** GuildSetEnnoble targetUserId */
        targetUserId?: (number|null);

        /** GuildSetEnnoble ennobleType */
        ennobleType?: (number|null);
    }

    /** Represents a GuildSetEnnoble. */
    class GuildSetEnnoble implements IGuildSetEnnoble {

        /**
         * Constructs a new GuildSetEnnoble.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IGuildSetEnnoble);

        /** GuildSetEnnoble targetUserId. */
        public targetUserId: number;

        /** GuildSetEnnoble ennobleType. */
        public ennobleType: number;

        /**
         * Encodes the specified GuildSetEnnoble message. Does not implicitly {@link msgProto.GuildSetEnnoble.verify|verify} messages.
         * @param message GuildSetEnnoble message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IGuildSetEnnoble, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GuildSetEnnoble message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GuildSetEnnoble
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.GuildSetEnnoble;

        /**
         * Creates a GuildSetEnnoble message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GuildSetEnnoble
         */
        public static fromObject(object: { [k: string]: any }): msgProto.GuildSetEnnoble;

        /**
         * Creates a plain object from a GuildSetEnnoble message. Also converts values to other types if specified.
         * @param message GuildSetEnnoble
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.GuildSetEnnoble, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GuildSetEnnoble to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GuildPersonPickAct. */
    interface IGuildPersonPickAct {

        /** GuildPersonPickAct actId */
        actId?: (number|null);
    }

    /** Represents a GuildPersonPickAct. */
    class GuildPersonPickAct implements IGuildPersonPickAct {

        /**
         * Constructs a new GuildPersonPickAct.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IGuildPersonPickAct);

        /** GuildPersonPickAct actId. */
        public actId: number;

        /**
         * Encodes the specified GuildPersonPickAct message. Does not implicitly {@link msgProto.GuildPersonPickAct.verify|verify} messages.
         * @param message GuildPersonPickAct message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IGuildPersonPickAct, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GuildPersonPickAct message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GuildPersonPickAct
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.GuildPersonPickAct;

        /**
         * Creates a GuildPersonPickAct message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GuildPersonPickAct
         */
        public static fromObject(object: { [k: string]: any }): msgProto.GuildPersonPickAct;

        /**
         * Creates a plain object from a GuildPersonPickAct message. Also converts values to other types if specified.
         * @param message GuildPersonPickAct
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.GuildPersonPickAct, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GuildPersonPickAct to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GuildPersonGetMemberList. */
    interface IGuildPersonGetMemberList {
    }

    /** Represents a GuildPersonGetMemberList. */
    class GuildPersonGetMemberList implements IGuildPersonGetMemberList {

        /**
         * Constructs a new GuildPersonGetMemberList.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IGuildPersonGetMemberList);

        /**
         * Encodes the specified GuildPersonGetMemberList message. Does not implicitly {@link msgProto.GuildPersonGetMemberList.verify|verify} messages.
         * @param message GuildPersonGetMemberList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IGuildPersonGetMemberList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GuildPersonGetMemberList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GuildPersonGetMemberList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.GuildPersonGetMemberList;

        /**
         * Creates a GuildPersonGetMemberList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GuildPersonGetMemberList
         */
        public static fromObject(object: { [k: string]: any }): msgProto.GuildPersonGetMemberList;

        /**
         * Creates a plain object from a GuildPersonGetMemberList message. Also converts values to other types if specified.
         * @param message GuildPersonGetMemberList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.GuildPersonGetMemberList, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GuildPersonGetMemberList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GuildPersonOpMember. */
    interface IGuildPersonOpMember {

        /** GuildPersonOpMember targetUserId */
        targetUserId?: (number|Long|null);

        /** GuildPersonOpMember op */
        op?: (number|null);
    }

    /** Represents a GuildPersonOpMember. */
    class GuildPersonOpMember implements IGuildPersonOpMember {

        /**
         * Constructs a new GuildPersonOpMember.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IGuildPersonOpMember);

        /** GuildPersonOpMember targetUserId. */
        public targetUserId: (number|Long);

        /** GuildPersonOpMember op. */
        public op: number;

        /**
         * Encodes the specified GuildPersonOpMember message. Does not implicitly {@link msgProto.GuildPersonOpMember.verify|verify} messages.
         * @param message GuildPersonOpMember message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IGuildPersonOpMember, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GuildPersonOpMember message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GuildPersonOpMember
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.GuildPersonOpMember;

        /**
         * Creates a GuildPersonOpMember message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GuildPersonOpMember
         */
        public static fromObject(object: { [k: string]: any }): msgProto.GuildPersonOpMember;

        /**
         * Creates a plain object from a GuildPersonOpMember message. Also converts values to other types if specified.
         * @param message GuildPersonOpMember
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.GuildPersonOpMember, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GuildPersonOpMember to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GuildWarGetInfo. */
    interface IGuildWarGetInfo {
    }

    /** Represents a GuildWarGetInfo. */
    class GuildWarGetInfo implements IGuildWarGetInfo {

        /**
         * Constructs a new GuildWarGetInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IGuildWarGetInfo);

        /**
         * Encodes the specified GuildWarGetInfo message. Does not implicitly {@link msgProto.GuildWarGetInfo.verify|verify} messages.
         * @param message GuildWarGetInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IGuildWarGetInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GuildWarGetInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GuildWarGetInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.GuildWarGetInfo;

        /**
         * Creates a GuildWarGetInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GuildWarGetInfo
         */
        public static fromObject(object: { [k: string]: any }): msgProto.GuildWarGetInfo;

        /**
         * Creates a plain object from a GuildWarGetInfo message. Also converts values to other types if specified.
         * @param message GuildWarGetInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.GuildWarGetInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GuildWarGetInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GuildWarGetGuildList. */
    interface IGuildWarGetGuildList {

        /** GuildWarGetGuildList guildId */
        guildId?: (number|null);
    }

    /** Represents a GuildWarGetGuildList. */
    class GuildWarGetGuildList implements IGuildWarGetGuildList {

        /**
         * Constructs a new GuildWarGetGuildList.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IGuildWarGetGuildList);

        /** GuildWarGetGuildList guildId. */
        public guildId: number;

        /**
         * Encodes the specified GuildWarGetGuildList message. Does not implicitly {@link msgProto.GuildWarGetGuildList.verify|verify} messages.
         * @param message GuildWarGetGuildList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IGuildWarGetGuildList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GuildWarGetGuildList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GuildWarGetGuildList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.GuildWarGetGuildList;

        /**
         * Creates a GuildWarGetGuildList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GuildWarGetGuildList
         */
        public static fromObject(object: { [k: string]: any }): msgProto.GuildWarGetGuildList;

        /**
         * Creates a plain object from a GuildWarGetGuildList message. Also converts values to other types if specified.
         * @param message GuildWarGetGuildList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.GuildWarGetGuildList, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GuildWarGetGuildList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GuildWarGetWarAttackData. */
    interface IGuildWarGetWarAttackData {

        /** GuildWarGetWarAttackData serverId */
        serverId?: (number|null);

        /** GuildWarGetWarAttackData guildId */
        guildId?: (number|null);
    }

    /** Represents a GuildWarGetWarAttackData. */
    class GuildWarGetWarAttackData implements IGuildWarGetWarAttackData {

        /**
         * Constructs a new GuildWarGetWarAttackData.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IGuildWarGetWarAttackData);

        /** GuildWarGetWarAttackData serverId. */
        public serverId: number;

        /** GuildWarGetWarAttackData guildId. */
        public guildId: number;

        /**
         * Encodes the specified GuildWarGetWarAttackData message. Does not implicitly {@link msgProto.GuildWarGetWarAttackData.verify|verify} messages.
         * @param message GuildWarGetWarAttackData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IGuildWarGetWarAttackData, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GuildWarGetWarAttackData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GuildWarGetWarAttackData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.GuildWarGetWarAttackData;

        /**
         * Creates a GuildWarGetWarAttackData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GuildWarGetWarAttackData
         */
        public static fromObject(object: { [k: string]: any }): msgProto.GuildWarGetWarAttackData;

        /**
         * Creates a plain object from a GuildWarGetWarAttackData message. Also converts values to other types if specified.
         * @param message GuildWarGetWarAttackData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.GuildWarGetWarAttackData, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GuildWarGetWarAttackData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GuildWarGetWarDefenceData. */
    interface IGuildWarGetWarDefenceData {

        /** GuildWarGetWarDefenceData guildId */
        guildId?: (number|null);
    }

    /** Represents a GuildWarGetWarDefenceData. */
    class GuildWarGetWarDefenceData implements IGuildWarGetWarDefenceData {

        /**
         * Constructs a new GuildWarGetWarDefenceData.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IGuildWarGetWarDefenceData);

        /** GuildWarGetWarDefenceData guildId. */
        public guildId: number;

        /**
         * Encodes the specified GuildWarGetWarDefenceData message. Does not implicitly {@link msgProto.GuildWarGetWarDefenceData.verify|verify} messages.
         * @param message GuildWarGetWarDefenceData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IGuildWarGetWarDefenceData, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GuildWarGetWarDefenceData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GuildWarGetWarDefenceData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.GuildWarGetWarDefenceData;

        /**
         * Creates a GuildWarGetWarDefenceData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GuildWarGetWarDefenceData
         */
        public static fromObject(object: { [k: string]: any }): msgProto.GuildWarGetWarDefenceData;

        /**
         * Creates a plain object from a GuildWarGetWarDefenceData message. Also converts values to other types if specified.
         * @param message GuildWarGetWarDefenceData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.GuildWarGetWarDefenceData, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GuildWarGetWarDefenceData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GuildWarGetDefenceRecordList. */
    interface IGuildWarGetDefenceRecordList {
    }

    /** Represents a GuildWarGetDefenceRecordList. */
    class GuildWarGetDefenceRecordList implements IGuildWarGetDefenceRecordList {

        /**
         * Constructs a new GuildWarGetDefenceRecordList.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IGuildWarGetDefenceRecordList);

        /**
         * Encodes the specified GuildWarGetDefenceRecordList message. Does not implicitly {@link msgProto.GuildWarGetDefenceRecordList.verify|verify} messages.
         * @param message GuildWarGetDefenceRecordList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IGuildWarGetDefenceRecordList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GuildWarGetDefenceRecordList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GuildWarGetDefenceRecordList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.GuildWarGetDefenceRecordList;

        /**
         * Creates a GuildWarGetDefenceRecordList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GuildWarGetDefenceRecordList
         */
        public static fromObject(object: { [k: string]: any }): msgProto.GuildWarGetDefenceRecordList;

        /**
         * Creates a plain object from a GuildWarGetDefenceRecordList message. Also converts values to other types if specified.
         * @param message GuildWarGetDefenceRecordList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.GuildWarGetDefenceRecordList, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GuildWarGetDefenceRecordList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GuildWarGetAttackRecordList. */
    interface IGuildWarGetAttackRecordList {
    }

    /** Represents a GuildWarGetAttackRecordList. */
    class GuildWarGetAttackRecordList implements IGuildWarGetAttackRecordList {

        /**
         * Constructs a new GuildWarGetAttackRecordList.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IGuildWarGetAttackRecordList);

        /**
         * Encodes the specified GuildWarGetAttackRecordList message. Does not implicitly {@link msgProto.GuildWarGetAttackRecordList.verify|verify} messages.
         * @param message GuildWarGetAttackRecordList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IGuildWarGetAttackRecordList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GuildWarGetAttackRecordList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GuildWarGetAttackRecordList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.GuildWarGetAttackRecordList;

        /**
         * Creates a GuildWarGetAttackRecordList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GuildWarGetAttackRecordList
         */
        public static fromObject(object: { [k: string]: any }): msgProto.GuildWarGetAttackRecordList;

        /**
         * Creates a plain object from a GuildWarGetAttackRecordList message. Also converts values to other types if specified.
         * @param message GuildWarGetAttackRecordList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.GuildWarGetAttackRecordList, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GuildWarGetAttackRecordList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GuildWarGetGuildWarAllRank. */
    interface IGuildWarGetGuildWarAllRank {
    }

    /** Represents a GuildWarGetGuildWarAllRank. */
    class GuildWarGetGuildWarAllRank implements IGuildWarGetGuildWarAllRank {

        /**
         * Constructs a new GuildWarGetGuildWarAllRank.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IGuildWarGetGuildWarAllRank);

        /**
         * Encodes the specified GuildWarGetGuildWarAllRank message. Does not implicitly {@link msgProto.GuildWarGetGuildWarAllRank.verify|verify} messages.
         * @param message GuildWarGetGuildWarAllRank message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IGuildWarGetGuildWarAllRank, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GuildWarGetGuildWarAllRank message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GuildWarGetGuildWarAllRank
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.GuildWarGetGuildWarAllRank;

        /**
         * Creates a GuildWarGetGuildWarAllRank message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GuildWarGetGuildWarAllRank
         */
        public static fromObject(object: { [k: string]: any }): msgProto.GuildWarGetGuildWarAllRank;

        /**
         * Creates a plain object from a GuildWarGetGuildWarAllRank message. Also converts values to other types if specified.
         * @param message GuildWarGetGuildWarAllRank
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.GuildWarGetGuildWarAllRank, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GuildWarGetGuildWarAllRank to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GuildWarGetLastRankList. */
    interface IGuildWarGetLastRankList {

        /** GuildWarGetLastRankList groupId */
        groupId?: (number|null);
    }

    /** Represents a GuildWarGetLastRankList. */
    class GuildWarGetLastRankList implements IGuildWarGetLastRankList {

        /**
         * Constructs a new GuildWarGetLastRankList.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IGuildWarGetLastRankList);

        /** GuildWarGetLastRankList groupId. */
        public groupId: number;

        /**
         * Encodes the specified GuildWarGetLastRankList message. Does not implicitly {@link msgProto.GuildWarGetLastRankList.verify|verify} messages.
         * @param message GuildWarGetLastRankList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IGuildWarGetLastRankList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GuildWarGetLastRankList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GuildWarGetLastRankList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.GuildWarGetLastRankList;

        /**
         * Creates a GuildWarGetLastRankList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GuildWarGetLastRankList
         */
        public static fromObject(object: { [k: string]: any }): msgProto.GuildWarGetLastRankList;

        /**
         * Creates a plain object from a GuildWarGetLastRankList message. Also converts values to other types if specified.
         * @param message GuildWarGetLastRankList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.GuildWarGetLastRankList, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GuildWarGetLastRankList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GuildWarGetSignUpData. */
    interface IGuildWarGetSignUpData {

        /** GuildWarGetSignUpData guildId */
        guildId?: (number|null);
    }

    /** Represents a GuildWarGetSignUpData. */
    class GuildWarGetSignUpData implements IGuildWarGetSignUpData {

        /**
         * Constructs a new GuildWarGetSignUpData.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IGuildWarGetSignUpData);

        /** GuildWarGetSignUpData guildId. */
        public guildId: number;

        /**
         * Encodes the specified GuildWarGetSignUpData message. Does not implicitly {@link msgProto.GuildWarGetSignUpData.verify|verify} messages.
         * @param message GuildWarGetSignUpData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IGuildWarGetSignUpData, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GuildWarGetSignUpData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GuildWarGetSignUpData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.GuildWarGetSignUpData;

        /**
         * Creates a GuildWarGetSignUpData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GuildWarGetSignUpData
         */
        public static fromObject(object: { [k: string]: any }): msgProto.GuildWarGetSignUpData;

        /**
         * Creates a plain object from a GuildWarGetSignUpData message. Also converts values to other types if specified.
         * @param message GuildWarGetSignUpData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.GuildWarGetSignUpData, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GuildWarGetSignUpData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GuildWarSignUp. */
    interface IGuildWarSignUp {

        /** GuildWarSignUp groupId */
        groupId?: (number|null);
    }

    /** Represents a GuildWarSignUp. */
    class GuildWarSignUp implements IGuildWarSignUp {

        /**
         * Constructs a new GuildWarSignUp.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IGuildWarSignUp);

        /** GuildWarSignUp groupId. */
        public groupId: number;

        /**
         * Encodes the specified GuildWarSignUp message. Does not implicitly {@link msgProto.GuildWarSignUp.verify|verify} messages.
         * @param message GuildWarSignUp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IGuildWarSignUp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GuildWarSignUp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GuildWarSignUp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.GuildWarSignUp;

        /**
         * Creates a GuildWarSignUp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GuildWarSignUp
         */
        public static fromObject(object: { [k: string]: any }): msgProto.GuildWarSignUp;

        /**
         * Creates a plain object from a GuildWarSignUp message. Also converts values to other types if specified.
         * @param message GuildWarSignUp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.GuildWarSignUp, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GuildWarSignUp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GuildWarFightStartDoor. */
    interface IGuildWarFightStartDoor {

        /** GuildWarFightStartDoor serverId */
        serverId?: (number|null);

        /** GuildWarFightStartDoor guildId */
        guildId?: (number|null);

        /** GuildWarFightStartDoor door */
        door?: (number|null);
    }

    /** Represents a GuildWarFightStartDoor. */
    class GuildWarFightStartDoor implements IGuildWarFightStartDoor {

        /**
         * Constructs a new GuildWarFightStartDoor.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IGuildWarFightStartDoor);

        /** GuildWarFightStartDoor serverId. */
        public serverId: number;

        /** GuildWarFightStartDoor guildId. */
        public guildId: number;

        /** GuildWarFightStartDoor door. */
        public door: number;

        /**
         * Encodes the specified GuildWarFightStartDoor message. Does not implicitly {@link msgProto.GuildWarFightStartDoor.verify|verify} messages.
         * @param message GuildWarFightStartDoor message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IGuildWarFightStartDoor, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GuildWarFightStartDoor message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GuildWarFightStartDoor
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.GuildWarFightStartDoor;

        /**
         * Creates a GuildWarFightStartDoor message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GuildWarFightStartDoor
         */
        public static fromObject(object: { [k: string]: any }): msgProto.GuildWarFightStartDoor;

        /**
         * Creates a plain object from a GuildWarFightStartDoor message. Also converts values to other types if specified.
         * @param message GuildWarFightStartDoor
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.GuildWarFightStartDoor, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GuildWarFightStartDoor to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GuildWarFightEndDoor. */
    interface IGuildWarFightEndDoor {

        /** GuildWarFightEndDoor serverId */
        serverId?: (number|null);

        /** GuildWarFightEndDoor guildId */
        guildId?: (number|null);

        /** GuildWarFightEndDoor door */
        door?: (number|null);

        /** GuildWarFightEndDoor isWin */
        isWin?: (boolean|null);
    }

    /** Represents a GuildWarFightEndDoor. */
    class GuildWarFightEndDoor implements IGuildWarFightEndDoor {

        /**
         * Constructs a new GuildWarFightEndDoor.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IGuildWarFightEndDoor);

        /** GuildWarFightEndDoor serverId. */
        public serverId: number;

        /** GuildWarFightEndDoor guildId. */
        public guildId: number;

        /** GuildWarFightEndDoor door. */
        public door: number;

        /** GuildWarFightEndDoor isWin. */
        public isWin: boolean;

        /**
         * Encodes the specified GuildWarFightEndDoor message. Does not implicitly {@link msgProto.GuildWarFightEndDoor.verify|verify} messages.
         * @param message GuildWarFightEndDoor message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IGuildWarFightEndDoor, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GuildWarFightEndDoor message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GuildWarFightEndDoor
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.GuildWarFightEndDoor;

        /**
         * Creates a GuildWarFightEndDoor message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GuildWarFightEndDoor
         */
        public static fromObject(object: { [k: string]: any }): msgProto.GuildWarFightEndDoor;

        /**
         * Creates a plain object from a GuildWarFightEndDoor message. Also converts values to other types if specified.
         * @param message GuildWarFightEndDoor
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.GuildWarFightEndDoor, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GuildWarFightEndDoor to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GuildWarUpDoor. */
    interface IGuildWarUpDoor {

        /** GuildWarUpDoor door */
        door?: (number|null);
    }

    /** Represents a GuildWarUpDoor. */
    class GuildWarUpDoor implements IGuildWarUpDoor {

        /**
         * Constructs a new GuildWarUpDoor.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IGuildWarUpDoor);

        /** GuildWarUpDoor door. */
        public door: number;

        /**
         * Encodes the specified GuildWarUpDoor message. Does not implicitly {@link msgProto.GuildWarUpDoor.verify|verify} messages.
         * @param message GuildWarUpDoor message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IGuildWarUpDoor, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GuildWarUpDoor message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GuildWarUpDoor
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.GuildWarUpDoor;

        /**
         * Creates a GuildWarUpDoor message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GuildWarUpDoor
         */
        public static fromObject(object: { [k: string]: any }): msgProto.GuildWarUpDoor;

        /**
         * Creates a plain object from a GuildWarUpDoor message. Also converts values to other types if specified.
         * @param message GuildWarUpDoor
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.GuildWarUpDoor, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GuildWarUpDoor to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GuildWarDownDoor. */
    interface IGuildWarDownDoor {

        /** GuildWarDownDoor door */
        door?: (number|null);
    }

    /** Represents a GuildWarDownDoor. */
    class GuildWarDownDoor implements IGuildWarDownDoor {

        /**
         * Constructs a new GuildWarDownDoor.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IGuildWarDownDoor);

        /** GuildWarDownDoor door. */
        public door: number;

        /**
         * Encodes the specified GuildWarDownDoor message. Does not implicitly {@link msgProto.GuildWarDownDoor.verify|verify} messages.
         * @param message GuildWarDownDoor message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IGuildWarDownDoor, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GuildWarDownDoor message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GuildWarDownDoor
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.GuildWarDownDoor;

        /**
         * Creates a GuildWarDownDoor message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GuildWarDownDoor
         */
        public static fromObject(object: { [k: string]: any }): msgProto.GuildWarDownDoor;

        /**
         * Creates a plain object from a GuildWarDownDoor message. Also converts values to other types if specified.
         * @param message GuildWarDownDoor
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.GuildWarDownDoor, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GuildWarDownDoor to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GuildWarEnter. */
    interface IGuildWarEnter {
    }

    /** Represents a GuildWarEnter. */
    class GuildWarEnter implements IGuildWarEnter {

        /**
         * Constructs a new GuildWarEnter.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IGuildWarEnter);

        /**
         * Encodes the specified GuildWarEnter message. Does not implicitly {@link msgProto.GuildWarEnter.verify|verify} messages.
         * @param message GuildWarEnter message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IGuildWarEnter, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GuildWarEnter message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GuildWarEnter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.GuildWarEnter;

        /**
         * Creates a GuildWarEnter message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GuildWarEnter
         */
        public static fromObject(object: { [k: string]: any }): msgProto.GuildWarEnter;

        /**
         * Creates a plain object from a GuildWarEnter message. Also converts values to other types if specified.
         * @param message GuildWarEnter
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.GuildWarEnter, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GuildWarEnter to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GuildWarClearCd. */
    interface IGuildWarClearCd {
    }

    /** Represents a GuildWarClearCd. */
    class GuildWarClearCd implements IGuildWarClearCd {

        /**
         * Constructs a new GuildWarClearCd.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IGuildWarClearCd);

        /**
         * Encodes the specified GuildWarClearCd message. Does not implicitly {@link msgProto.GuildWarClearCd.verify|verify} messages.
         * @param message GuildWarClearCd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IGuildWarClearCd, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GuildWarClearCd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GuildWarClearCd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.GuildWarClearCd;

        /**
         * Creates a GuildWarClearCd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GuildWarClearCd
         */
        public static fromObject(object: { [k: string]: any }): msgProto.GuildWarClearCd;

        /**
         * Creates a plain object from a GuildWarClearCd message. Also converts values to other types if specified.
         * @param message GuildWarClearCd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.GuildWarClearCd, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GuildWarClearCd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GuildWarInspire. */
    interface IGuildWarInspire {
    }

    /** Represents a GuildWarInspire. */
    class GuildWarInspire implements IGuildWarInspire {

        /**
         * Constructs a new GuildWarInspire.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IGuildWarInspire);

        /**
         * Encodes the specified GuildWarInspire message. Does not implicitly {@link msgProto.GuildWarInspire.verify|verify} messages.
         * @param message GuildWarInspire message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IGuildWarInspire, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GuildWarInspire message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GuildWarInspire
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.GuildWarInspire;

        /**
         * Creates a GuildWarInspire message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GuildWarInspire
         */
        public static fromObject(object: { [k: string]: any }): msgProto.GuildWarInspire;

        /**
         * Creates a plain object from a GuildWarInspire message. Also converts values to other types if specified.
         * @param message GuildWarInspire
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.GuildWarInspire, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GuildWarInspire to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GuildWarSyncData. */
    interface IGuildWarSyncData {

        /** GuildWarSyncData sceneType */
        sceneType?: (number|null);

        /** GuildWarSyncData attackData */
        attackData?: (string|null);
    }

    /** Represents a GuildWarSyncData. */
    class GuildWarSyncData implements IGuildWarSyncData {

        /**
         * Constructs a new GuildWarSyncData.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IGuildWarSyncData);

        /** GuildWarSyncData sceneType. */
        public sceneType: number;

        /** GuildWarSyncData attackData. */
        public attackData: string;

        /**
         * Encodes the specified GuildWarSyncData message. Does not implicitly {@link msgProto.GuildWarSyncData.verify|verify} messages.
         * @param message GuildWarSyncData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IGuildWarSyncData, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GuildWarSyncData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GuildWarSyncData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.GuildWarSyncData;

        /**
         * Creates a GuildWarSyncData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GuildWarSyncData
         */
        public static fromObject(object: { [k: string]: any }): msgProto.GuildWarSyncData;

        /**
         * Creates a plain object from a GuildWarSyncData message. Also converts values to other types if specified.
         * @param message GuildWarSyncData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.GuildWarSyncData, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GuildWarSyncData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an HonorGetInfo. */
    interface IHonorGetInfo {
    }

    /** Represents an HonorGetInfo. */
    class HonorGetInfo implements IHonorGetInfo {

        /**
         * Constructs a new HonorGetInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IHonorGetInfo);

        /**
         * Encodes the specified HonorGetInfo message. Does not implicitly {@link msgProto.HonorGetInfo.verify|verify} messages.
         * @param message HonorGetInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IHonorGetInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an HonorGetInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HonorGetInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.HonorGetInfo;

        /**
         * Creates an HonorGetInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HonorGetInfo
         */
        public static fromObject(object: { [k: string]: any }): msgProto.HonorGetInfo;

        /**
         * Creates a plain object from an HonorGetInfo message. Also converts values to other types if specified.
         * @param message HonorGetInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.HonorGetInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HonorGetInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an HonorGetAward. */
    interface IHonorGetAward {

        /** HonorGetAward honorId */
        honorId?: (number|null);
    }

    /** Represents an HonorGetAward. */
    class HonorGetAward implements IHonorGetAward {

        /**
         * Constructs a new HonorGetAward.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IHonorGetAward);

        /** HonorGetAward honorId. */
        public honorId: number;

        /**
         * Encodes the specified HonorGetAward message. Does not implicitly {@link msgProto.HonorGetAward.verify|verify} messages.
         * @param message HonorGetAward message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IHonorGetAward, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an HonorGetAward message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HonorGetAward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.HonorGetAward;

        /**
         * Creates an HonorGetAward message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HonorGetAward
         */
        public static fromObject(object: { [k: string]: any }): msgProto.HonorGetAward;

        /**
         * Creates a plain object from an HonorGetAward message. Also converts values to other types if specified.
         * @param message HonorGetAward
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.HonorGetAward, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HonorGetAward to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an HonorBugAlter. */
    interface IHonorBugAlter {
    }

    /** Represents an HonorBugAlter. */
    class HonorBugAlter implements IHonorBugAlter {

        /**
         * Constructs a new HonorBugAlter.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IHonorBugAlter);

        /**
         * Encodes the specified HonorBugAlter message. Does not implicitly {@link msgProto.HonorBugAlter.verify|verify} messages.
         * @param message HonorBugAlter message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IHonorBugAlter, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an HonorBugAlter message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HonorBugAlter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.HonorBugAlter;

        /**
         * Creates an HonorBugAlter message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HonorBugAlter
         */
        public static fromObject(object: { [k: string]: any }): msgProto.HonorBugAlter;

        /**
         * Creates a plain object from an HonorBugAlter message. Also converts values to other types if specified.
         * @param message HonorBugAlter
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.HonorBugAlter, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HonorBugAlter to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HeartStuntGetInfo. */
    interface IHeartStuntGetInfo {
    }

    /** Represents a HeartStuntGetInfo. */
    class HeartStuntGetInfo implements IHeartStuntGetInfo {

        /**
         * Constructs a new HeartStuntGetInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IHeartStuntGetInfo);

        /**
         * Encodes the specified HeartStuntGetInfo message. Does not implicitly {@link msgProto.HeartStuntGetInfo.verify|verify} messages.
         * @param message HeartStuntGetInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IHeartStuntGetInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a HeartStuntGetInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeartStuntGetInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.HeartStuntGetInfo;

        /**
         * Creates a HeartStuntGetInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeartStuntGetInfo
         */
        public static fromObject(object: { [k: string]: any }): msgProto.HeartStuntGetInfo;

        /**
         * Creates a plain object from a HeartStuntGetInfo message. Also converts values to other types if specified.
         * @param message HeartStuntGetInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.HeartStuntGetInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeartStuntGetInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HeartStuntChoMenCulMethods. */
    interface IHeartStuntChoMenCulMethods {

        /** HeartStuntChoMenCulMethods index */
        index?: (number|null);

        /** HeartStuntChoMenCulMethods heartStuntId */
        heartStuntId?: (number|null);
    }

    /** Represents a HeartStuntChoMenCulMethods. */
    class HeartStuntChoMenCulMethods implements IHeartStuntChoMenCulMethods {

        /**
         * Constructs a new HeartStuntChoMenCulMethods.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IHeartStuntChoMenCulMethods);

        /** HeartStuntChoMenCulMethods index. */
        public index: number;

        /** HeartStuntChoMenCulMethods heartStuntId. */
        public heartStuntId: number;

        /**
         * Encodes the specified HeartStuntChoMenCulMethods message. Does not implicitly {@link msgProto.HeartStuntChoMenCulMethods.verify|verify} messages.
         * @param message HeartStuntChoMenCulMethods message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IHeartStuntChoMenCulMethods, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a HeartStuntChoMenCulMethods message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeartStuntChoMenCulMethods
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.HeartStuntChoMenCulMethods;

        /**
         * Creates a HeartStuntChoMenCulMethods message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeartStuntChoMenCulMethods
         */
        public static fromObject(object: { [k: string]: any }): msgProto.HeartStuntChoMenCulMethods;

        /**
         * Creates a plain object from a HeartStuntChoMenCulMethods message. Also converts values to other types if specified.
         * @param message HeartStuntChoMenCulMethods
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.HeartStuntChoMenCulMethods, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeartStuntChoMenCulMethods to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HeartStuntStuMenCulMethods. */
    interface IHeartStuntStuMenCulMethods {

        /** HeartStuntStuMenCulMethods index */
        index?: (number|null);
    }

    /** Represents a HeartStuntStuMenCulMethods. */
    class HeartStuntStuMenCulMethods implements IHeartStuntStuMenCulMethods {

        /**
         * Constructs a new HeartStuntStuMenCulMethods.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IHeartStuntStuMenCulMethods);

        /** HeartStuntStuMenCulMethods index. */
        public index: number;

        /**
         * Encodes the specified HeartStuntStuMenCulMethods message. Does not implicitly {@link msgProto.HeartStuntStuMenCulMethods.verify|verify} messages.
         * @param message HeartStuntStuMenCulMethods message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IHeartStuntStuMenCulMethods, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a HeartStuntStuMenCulMethods message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeartStuntStuMenCulMethods
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.HeartStuntStuMenCulMethods;

        /**
         * Creates a HeartStuntStuMenCulMethods message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeartStuntStuMenCulMethods
         */
        public static fromObject(object: { [k: string]: any }): msgProto.HeartStuntStuMenCulMethods;

        /**
         * Creates a plain object from a HeartStuntStuMenCulMethods message. Also converts values to other types if specified.
         * @param message HeartStuntStuMenCulMethods
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.HeartStuntStuMenCulMethods, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeartStuntStuMenCulMethods to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HeartStuntChaMenCulMethods. */
    interface IHeartStuntChaMenCulMethods {

        /** HeartStuntChaMenCulMethods index */
        index?: (number|null);

        /** HeartStuntChaMenCulMethods heartStuntId */
        heartStuntId?: (number|null);
    }

    /** Represents a HeartStuntChaMenCulMethods. */
    class HeartStuntChaMenCulMethods implements IHeartStuntChaMenCulMethods {

        /**
         * Constructs a new HeartStuntChaMenCulMethods.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IHeartStuntChaMenCulMethods);

        /** HeartStuntChaMenCulMethods index. */
        public index: number;

        /** HeartStuntChaMenCulMethods heartStuntId. */
        public heartStuntId: number;

        /**
         * Encodes the specified HeartStuntChaMenCulMethods message. Does not implicitly {@link msgProto.HeartStuntChaMenCulMethods.verify|verify} messages.
         * @param message HeartStuntChaMenCulMethods message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IHeartStuntChaMenCulMethods, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a HeartStuntChaMenCulMethods message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeartStuntChaMenCulMethods
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.HeartStuntChaMenCulMethods;

        /**
         * Creates a HeartStuntChaMenCulMethods message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeartStuntChaMenCulMethods
         */
        public static fromObject(object: { [k: string]: any }): msgProto.HeartStuntChaMenCulMethods;

        /**
         * Creates a plain object from a HeartStuntChaMenCulMethods message. Also converts values to other types if specified.
         * @param message HeartStuntChaMenCulMethods
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.HeartStuntChaMenCulMethods, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeartStuntChaMenCulMethods to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HeroCallHero. */
    interface IHeroCallHero {

        /** HeroCallHero tempId */
        tempId?: (number|null);

        /** HeroCallHero sex */
        sex?: (number|null);
    }

    /** Represents a HeroCallHero. */
    class HeroCallHero implements IHeroCallHero {

        /**
         * Constructs a new HeroCallHero.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IHeroCallHero);

        /** HeroCallHero tempId. */
        public tempId: number;

        /** HeroCallHero sex. */
        public sex: number;

        /**
         * Encodes the specified HeroCallHero message. Does not implicitly {@link msgProto.HeroCallHero.verify|verify} messages.
         * @param message HeroCallHero message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IHeroCallHero, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a HeroCallHero message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeroCallHero
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.HeroCallHero;

        /**
         * Creates a HeroCallHero message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeroCallHero
         */
        public static fromObject(object: { [k: string]: any }): msgProto.HeroCallHero;

        /**
         * Creates a plain object from a HeroCallHero message. Also converts values to other types if specified.
         * @param message HeroCallHero
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.HeroCallHero, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeroCallHero to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HeroUpSkill. */
    interface IHeroUpSkill {

        /** HeroUpSkill tempId */
        tempId?: (number|null);

        /** HeroUpSkill index */
        index?: (number|null);
    }

    /** Represents a HeroUpSkill. */
    class HeroUpSkill implements IHeroUpSkill {

        /**
         * Constructs a new HeroUpSkill.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IHeroUpSkill);

        /** HeroUpSkill tempId. */
        public tempId: number;

        /** HeroUpSkill index. */
        public index: number;

        /**
         * Encodes the specified HeroUpSkill message. Does not implicitly {@link msgProto.HeroUpSkill.verify|verify} messages.
         * @param message HeroUpSkill message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IHeroUpSkill, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a HeroUpSkill message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeroUpSkill
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.HeroUpSkill;

        /**
         * Creates a HeroUpSkill message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeroUpSkill
         */
        public static fromObject(object: { [k: string]: any }): msgProto.HeroUpSkill;

        /**
         * Creates a plain object from a HeroUpSkill message. Also converts values to other types if specified.
         * @param message HeroUpSkill
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.HeroUpSkill, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeroUpSkill to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HeroClearSkillCd. */
    interface IHeroClearSkillCd {
    }

    /** Represents a HeroClearSkillCd. */
    class HeroClearSkillCd implements IHeroClearSkillCd {

        /**
         * Constructs a new HeroClearSkillCd.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IHeroClearSkillCd);

        /**
         * Encodes the specified HeroClearSkillCd message. Does not implicitly {@link msgProto.HeroClearSkillCd.verify|verify} messages.
         * @param message HeroClearSkillCd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IHeroClearSkillCd, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a HeroClearSkillCd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeroClearSkillCd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.HeroClearSkillCd;

        /**
         * Creates a HeroClearSkillCd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeroClearSkillCd
         */
        public static fromObject(object: { [k: string]: any }): msgProto.HeroClearSkillCd;

        /**
         * Creates a plain object from a HeroClearSkillCd message. Also converts values to other types if specified.
         * @param message HeroClearSkillCd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.HeroClearSkillCd, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeroClearSkillCd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HeroWearRune. */
    interface IHeroWearRune {

        /** HeroWearRune tempId */
        tempId?: (number|null);

        /** HeroWearRune index */
        index?: (number|null);
    }

    /** Represents a HeroWearRune. */
    class HeroWearRune implements IHeroWearRune {

        /**
         * Constructs a new HeroWearRune.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IHeroWearRune);

        /** HeroWearRune tempId. */
        public tempId: number;

        /** HeroWearRune index. */
        public index: number;

        /**
         * Encodes the specified HeroWearRune message. Does not implicitly {@link msgProto.HeroWearRune.verify|verify} messages.
         * @param message HeroWearRune message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IHeroWearRune, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a HeroWearRune message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeroWearRune
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.HeroWearRune;

        /**
         * Creates a HeroWearRune message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeroWearRune
         */
        public static fromObject(object: { [k: string]: any }): msgProto.HeroWearRune;

        /**
         * Creates a plain object from a HeroWearRune message. Also converts values to other types if specified.
         * @param message HeroWearRune
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.HeroWearRune, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeroWearRune to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HeroUpRealm. */
    interface IHeroUpRealm {

        /** HeroUpRealm tempId */
        tempId?: (number|null);
    }

    /** Represents a HeroUpRealm. */
    class HeroUpRealm implements IHeroUpRealm {

        /**
         * Constructs a new HeroUpRealm.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IHeroUpRealm);

        /** HeroUpRealm tempId. */
        public tempId: number;

        /**
         * Encodes the specified HeroUpRealm message. Does not implicitly {@link msgProto.HeroUpRealm.verify|verify} messages.
         * @param message HeroUpRealm message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IHeroUpRealm, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a HeroUpRealm message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeroUpRealm
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.HeroUpRealm;

        /**
         * Creates a HeroUpRealm message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeroUpRealm
         */
        public static fromObject(object: { [k: string]: any }): msgProto.HeroUpRealm;

        /**
         * Creates a plain object from a HeroUpRealm message. Also converts values to other types if specified.
         * @param message HeroUpRealm
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.HeroUpRealm, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeroUpRealm to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HeroStrength. */
    interface IHeroStrength {

        /** HeroStrength tempId */
        tempId?: (number|null);

        /** HeroStrength index */
        index?: (number|null);
    }

    /** Represents a HeroStrength. */
    class HeroStrength implements IHeroStrength {

        /**
         * Constructs a new HeroStrength.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IHeroStrength);

        /** HeroStrength tempId. */
        public tempId: number;

        /** HeroStrength index. */
        public index: number;

        /**
         * Encodes the specified HeroStrength message. Does not implicitly {@link msgProto.HeroStrength.verify|verify} messages.
         * @param message HeroStrength message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IHeroStrength, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a HeroStrength message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeroStrength
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.HeroStrength;

        /**
         * Creates a HeroStrength message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeroStrength
         */
        public static fromObject(object: { [k: string]: any }): msgProto.HeroStrength;

        /**
         * Creates a plain object from a HeroStrength message. Also converts values to other types if specified.
         * @param message HeroStrength
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.HeroStrength, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeroStrength to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HeroEquipRefine. */
    interface IHeroEquipRefine {

        /** HeroEquipRefine tempId */
        tempId?: (number|null);

        /** HeroEquipRefine index */
        index?: (number|null);
    }

    /** Represents a HeroEquipRefine. */
    class HeroEquipRefine implements IHeroEquipRefine {

        /**
         * Constructs a new HeroEquipRefine.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IHeroEquipRefine);

        /** HeroEquipRefine tempId. */
        public tempId: number;

        /** HeroEquipRefine index. */
        public index: number;

        /**
         * Encodes the specified HeroEquipRefine message. Does not implicitly {@link msgProto.HeroEquipRefine.verify|verify} messages.
         * @param message HeroEquipRefine message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IHeroEquipRefine, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a HeroEquipRefine message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeroEquipRefine
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.HeroEquipRefine;

        /**
         * Creates a HeroEquipRefine message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeroEquipRefine
         */
        public static fromObject(object: { [k: string]: any }): msgProto.HeroEquipRefine;

        /**
         * Creates a plain object from a HeroEquipRefine message. Also converts values to other types if specified.
         * @param message HeroEquipRefine
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.HeroEquipRefine, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeroEquipRefine to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HeroUpStar. */
    interface IHeroUpStar {

        /** HeroUpStar tempId */
        tempId?: (number|null);

        /** HeroUpStar index */
        index?: (number|null);
    }

    /** Represents a HeroUpStar. */
    class HeroUpStar implements IHeroUpStar {

        /**
         * Constructs a new HeroUpStar.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IHeroUpStar);

        /** HeroUpStar tempId. */
        public tempId: number;

        /** HeroUpStar index. */
        public index: number;

        /**
         * Encodes the specified HeroUpStar message. Does not implicitly {@link msgProto.HeroUpStar.verify|verify} messages.
         * @param message HeroUpStar message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IHeroUpStar, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a HeroUpStar message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeroUpStar
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.HeroUpStar;

        /**
         * Creates a HeroUpStar message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeroUpStar
         */
        public static fromObject(object: { [k: string]: any }): msgProto.HeroUpStar;

        /**
         * Creates a plain object from a HeroUpStar message. Also converts values to other types if specified.
         * @param message HeroUpStar
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.HeroUpStar, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeroUpStar to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HeroStarTop. */
    interface IHeroStarTop {

        /** HeroStarTop tempId */
        tempId?: (number|null);

        /** HeroStarTop index */
        index?: (number|null);
    }

    /** Represents a HeroStarTop. */
    class HeroStarTop implements IHeroStarTop {

        /**
         * Constructs a new HeroStarTop.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IHeroStarTop);

        /** HeroStarTop tempId. */
        public tempId: number;

        /** HeroStarTop index. */
        public index: number;

        /**
         * Encodes the specified HeroStarTop message. Does not implicitly {@link msgProto.HeroStarTop.verify|verify} messages.
         * @param message HeroStarTop message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IHeroStarTop, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a HeroStarTop message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeroStarTop
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.HeroStarTop;

        /**
         * Creates a HeroStarTop message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeroStarTop
         */
        public static fromObject(object: { [k: string]: any }): msgProto.HeroStarTop;

        /**
         * Creates a plain object from a HeroStarTop message. Also converts values to other types if specified.
         * @param message HeroStarTop
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.HeroStarTop, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeroStarTop to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a heroUpGem. */
    interface IheroUpGem {

        /** heroUpGem tempId */
        tempId?: (number|null);

        /** heroUpGem index */
        index?: (number|null);
    }

    /** Represents a heroUpGem. */
    class heroUpGem implements IheroUpGem {

        /**
         * Constructs a new heroUpGem.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IheroUpGem);

        /** heroUpGem tempId. */
        public tempId: number;

        /** heroUpGem index. */
        public index: number;

        /**
         * Encodes the specified heroUpGem message. Does not implicitly {@link msgProto.heroUpGem.verify|verify} messages.
         * @param message heroUpGem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IheroUpGem, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a heroUpGem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns heroUpGem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.heroUpGem;

        /**
         * Creates a heroUpGem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns heroUpGem
         */
        public static fromObject(object: { [k: string]: any }): msgProto.heroUpGem;

        /**
         * Creates a plain object from a heroUpGem message. Also converts values to other types if specified.
         * @param message heroUpGem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.heroUpGem, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this heroUpGem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a heroWingFos. */
    interface IheroWingFos {

        /** heroWingFos tempId */
        tempId?: (number|null);

        /** heroWingFos fosType */
        fosType?: (number|null);
    }

    /** Represents a heroWingFos. */
    class heroWingFos implements IheroWingFos {

        /**
         * Constructs a new heroWingFos.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IheroWingFos);

        /** heroWingFos tempId. */
        public tempId: number;

        /** heroWingFos fosType. */
        public fosType: number;

        /**
         * Encodes the specified heroWingFos message. Does not implicitly {@link msgProto.heroWingFos.verify|verify} messages.
         * @param message heroWingFos message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IheroWingFos, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a heroWingFos message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns heroWingFos
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.heroWingFos;

        /**
         * Creates a heroWingFos message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns heroWingFos
         */
        public static fromObject(object: { [k: string]: any }): msgProto.heroWingFos;

        /**
         * Creates a plain object from a heroWingFos message. Also converts values to other types if specified.
         * @param message heroWingFos
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.heroWingFos, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this heroWingFos to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Hero_wingStrength. */
    interface IHero_wingStrength {

        /** Hero_wingStrength tempId */
        tempId?: (number|null);

        /** Hero_wingStrength part */
        part?: (number|null);

        /** Hero_wingStrength isReplace */
        isReplace?: (boolean|null);
    }

    /** Represents a Hero_wingStrength. */
    class Hero_wingStrength implements IHero_wingStrength {

        /**
         * Constructs a new Hero_wingStrength.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IHero_wingStrength);

        /** Hero_wingStrength tempId. */
        public tempId: number;

        /** Hero_wingStrength part. */
        public part: number;

        /** Hero_wingStrength isReplace. */
        public isReplace: boolean;

        /**
         * Encodes the specified Hero_wingStrength message. Does not implicitly {@link msgProto.Hero_wingStrength.verify|verify} messages.
         * @param message Hero_wingStrength message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IHero_wingStrength, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a Hero_wingStrength message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Hero_wingStrength
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.Hero_wingStrength;

        /**
         * Creates a Hero_wingStrength message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Hero_wingStrength
         */
        public static fromObject(object: { [k: string]: any }): msgProto.Hero_wingStrength;

        /**
         * Creates a plain object from a Hero_wingStrength message. Also converts values to other types if specified.
         * @param message Hero_wingStrength
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.Hero_wingStrength, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Hero_wingStrength to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HeroWingFos2Top. */
    interface IHeroWingFos2Top {

        /** HeroWingFos2Top tempId */
        tempId?: (number|null);

        /** HeroWingFos2Top fosType */
        fosType?: (number|null);

        /** HeroWingFos2Top isUseDiamond */
        isUseDiamond?: (boolean|null);
    }

    /** Represents a HeroWingFos2Top. */
    class HeroWingFos2Top implements IHeroWingFos2Top {

        /**
         * Constructs a new HeroWingFos2Top.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IHeroWingFos2Top);

        /** HeroWingFos2Top tempId. */
        public tempId: number;

        /** HeroWingFos2Top fosType. */
        public fosType: number;

        /** HeroWingFos2Top isUseDiamond. */
        public isUseDiamond: boolean;

        /**
         * Encodes the specified HeroWingFos2Top message. Does not implicitly {@link msgProto.HeroWingFos2Top.verify|verify} messages.
         * @param message HeroWingFos2Top message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IHeroWingFos2Top, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a HeroWingFos2Top message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeroWingFos2Top
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.HeroWingFos2Top;

        /**
         * Creates a HeroWingFos2Top message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeroWingFos2Top
         */
        public static fromObject(object: { [k: string]: any }): msgProto.HeroWingFos2Top;

        /**
         * Creates a plain object from a HeroWingFos2Top message. Also converts values to other types if specified.
         * @param message HeroWingFos2Top
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.HeroWingFos2Top, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeroWingFos2Top to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HeroUpWing. */
    interface IHeroUpWing {

        /** HeroUpWing tempId */
        tempId?: (number|null);
    }

    /** Represents a HeroUpWing. */
    class HeroUpWing implements IHeroUpWing {

        /**
         * Constructs a new HeroUpWing.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IHeroUpWing);

        /** HeroUpWing tempId. */
        public tempId: number;

        /**
         * Encodes the specified HeroUpWing message. Does not implicitly {@link msgProto.HeroUpWing.verify|verify} messages.
         * @param message HeroUpWing message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IHeroUpWing, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a HeroUpWing message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeroUpWing
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.HeroUpWing;

        /**
         * Creates a HeroUpWing message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeroUpWing
         */
        public static fromObject(object: { [k: string]: any }): msgProto.HeroUpWing;

        /**
         * Creates a plain object from a HeroUpWing message. Also converts values to other types if specified.
         * @param message HeroUpWing
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.HeroUpWing, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeroUpWing to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HeroWingActivate. */
    interface IHeroWingActivate {

        /** HeroWingActivate tempId */
        tempId?: (number|null);
    }

    /** Represents a HeroWingActivate. */
    class HeroWingActivate implements IHeroWingActivate {

        /**
         * Constructs a new HeroWingActivate.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IHeroWingActivate);

        /** HeroWingActivate tempId. */
        public tempId: number;

        /**
         * Encodes the specified HeroWingActivate message. Does not implicitly {@link msgProto.HeroWingActivate.verify|verify} messages.
         * @param message HeroWingActivate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IHeroWingActivate, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a HeroWingActivate message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeroWingActivate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.HeroWingActivate;

        /**
         * Creates a HeroWingActivate message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeroWingActivate
         */
        public static fromObject(object: { [k: string]: any }): msgProto.HeroWingActivate;

        /**
         * Creates a plain object from a HeroWingActivate message. Also converts values to other types if specified.
         * @param message HeroWingActivate
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.HeroWingActivate, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeroWingActivate to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HeroCalPropAndCombat. */
    interface IHeroCalPropAndCombat {
    }

    /** Represents a HeroCalPropAndCombat. */
    class HeroCalPropAndCombat implements IHeroCalPropAndCombat {

        /**
         * Constructs a new HeroCalPropAndCombat.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IHeroCalPropAndCombat);

        /**
         * Encodes the specified HeroCalPropAndCombat message. Does not implicitly {@link msgProto.HeroCalPropAndCombat.verify|verify} messages.
         * @param message HeroCalPropAndCombat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IHeroCalPropAndCombat, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a HeroCalPropAndCombat message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeroCalPropAndCombat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.HeroCalPropAndCombat;

        /**
         * Creates a HeroCalPropAndCombat message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeroCalPropAndCombat
         */
        public static fromObject(object: { [k: string]: any }): msgProto.HeroCalPropAndCombat;

        /**
         * Creates a plain object from a HeroCalPropAndCombat message. Also converts values to other types if specified.
         * @param message HeroCalPropAndCombat
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.HeroCalPropAndCombat, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeroCalPropAndCombat to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HeroGetMainHeroDisplay. */
    interface IHeroGetMainHeroDisplay {

        /** HeroGetMainHeroDisplay userId */
        userId?: (number|Long|null);
    }

    /** Represents a HeroGetMainHeroDisplay. */
    class HeroGetMainHeroDisplay implements IHeroGetMainHeroDisplay {

        /**
         * Constructs a new HeroGetMainHeroDisplay.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IHeroGetMainHeroDisplay);

        /** HeroGetMainHeroDisplay userId. */
        public userId: (number|Long);

        /**
         * Encodes the specified HeroGetMainHeroDisplay message. Does not implicitly {@link msgProto.HeroGetMainHeroDisplay.verify|verify} messages.
         * @param message HeroGetMainHeroDisplay message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IHeroGetMainHeroDisplay, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a HeroGetMainHeroDisplay message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeroGetMainHeroDisplay
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.HeroGetMainHeroDisplay;

        /**
         * Creates a HeroGetMainHeroDisplay message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeroGetMainHeroDisplay
         */
        public static fromObject(object: { [k: string]: any }): msgProto.HeroGetMainHeroDisplay;

        /**
         * Creates a plain object from a HeroGetMainHeroDisplay message. Also converts values to other types if specified.
         * @param message HeroGetMainHeroDisplay
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.HeroGetMainHeroDisplay, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeroGetMainHeroDisplay to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HeroGetHeroDisplayByTempId. */
    interface IHeroGetHeroDisplayByTempId {

        /** HeroGetHeroDisplayByTempId userId */
        userId?: (number|Long|null);

        /** HeroGetHeroDisplayByTempId tempId */
        tempId?: (number|null);
    }

    /** Represents a HeroGetHeroDisplayByTempId. */
    class HeroGetHeroDisplayByTempId implements IHeroGetHeroDisplayByTempId {

        /**
         * Constructs a new HeroGetHeroDisplayByTempId.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IHeroGetHeroDisplayByTempId);

        /** HeroGetHeroDisplayByTempId userId. */
        public userId: (number|Long);

        /** HeroGetHeroDisplayByTempId tempId. */
        public tempId: number;

        /**
         * Encodes the specified HeroGetHeroDisplayByTempId message. Does not implicitly {@link msgProto.HeroGetHeroDisplayByTempId.verify|verify} messages.
         * @param message HeroGetHeroDisplayByTempId message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IHeroGetHeroDisplayByTempId, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a HeroGetHeroDisplayByTempId message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeroGetHeroDisplayByTempId
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.HeroGetHeroDisplayByTempId;

        /**
         * Creates a HeroGetHeroDisplayByTempId message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeroGetHeroDisplayByTempId
         */
        public static fromObject(object: { [k: string]: any }): msgProto.HeroGetHeroDisplayByTempId;

        /**
         * Creates a plain object from a HeroGetHeroDisplayByTempId message. Also converts values to other types if specified.
         * @param message HeroGetHeroDisplayByTempId
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.HeroGetHeroDisplayByTempId, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeroGetHeroDisplayByTempId to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HeroGetShowHeroData. */
    interface IHeroGetShowHeroData {

        /** HeroGetShowHeroData userId */
        userId?: (number|Long|null);
    }

    /** Represents a HeroGetShowHeroData. */
    class HeroGetShowHeroData implements IHeroGetShowHeroData {

        /**
         * Constructs a new HeroGetShowHeroData.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IHeroGetShowHeroData);

        /** HeroGetShowHeroData userId. */
        public userId: (number|Long);

        /**
         * Encodes the specified HeroGetShowHeroData message. Does not implicitly {@link msgProto.HeroGetShowHeroData.verify|verify} messages.
         * @param message HeroGetShowHeroData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IHeroGetShowHeroData, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a HeroGetShowHeroData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeroGetShowHeroData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.HeroGetShowHeroData;

        /**
         * Creates a HeroGetShowHeroData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeroGetShowHeroData
         */
        public static fromObject(object: { [k: string]: any }): msgProto.HeroGetShowHeroData;

        /**
         * Creates a plain object from a HeroGetShowHeroData message. Also converts values to other types if specified.
         * @param message HeroGetShowHeroData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.HeroGetShowHeroData, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeroGetShowHeroData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HeroWearAllRune. */
    interface IHeroWearAllRune {

        /** HeroWearAllRune tempId */
        tempId?: (number|null);
    }

    /** Represents a HeroWearAllRune. */
    class HeroWearAllRune implements IHeroWearAllRune {

        /**
         * Constructs a new HeroWearAllRune.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IHeroWearAllRune);

        /** HeroWearAllRune tempId. */
        public tempId: number;

        /**
         * Encodes the specified HeroWearAllRune message. Does not implicitly {@link msgProto.HeroWearAllRune.verify|verify} messages.
         * @param message HeroWearAllRune message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IHeroWearAllRune, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a HeroWearAllRune message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeroWearAllRune
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.HeroWearAllRune;

        /**
         * Creates a HeroWearAllRune message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeroWearAllRune
         */
        public static fromObject(object: { [k: string]: any }): msgProto.HeroWearAllRune;

        /**
         * Creates a plain object from a HeroWearAllRune message. Also converts values to other types if specified.
         * @param message HeroWearAllRune
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.HeroWearAllRune, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeroWearAllRune to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HeroAutoInfuseSwitch. */
    interface IHeroAutoInfuseSwitch {

        /** HeroAutoInfuseSwitch isOpenIn */
        isOpenIn?: (boolean|null);
    }

    /** Represents a HeroAutoInfuseSwitch. */
    class HeroAutoInfuseSwitch implements IHeroAutoInfuseSwitch {

        /**
         * Constructs a new HeroAutoInfuseSwitch.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IHeroAutoInfuseSwitch);

        /** HeroAutoInfuseSwitch isOpenIn. */
        public isOpenIn: boolean;

        /**
         * Encodes the specified HeroAutoInfuseSwitch message. Does not implicitly {@link msgProto.HeroAutoInfuseSwitch.verify|verify} messages.
         * @param message HeroAutoInfuseSwitch message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IHeroAutoInfuseSwitch, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a HeroAutoInfuseSwitch message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeroAutoInfuseSwitch
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.HeroAutoInfuseSwitch;

        /**
         * Creates a HeroAutoInfuseSwitch message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeroAutoInfuseSwitch
         */
        public static fromObject(object: { [k: string]: any }): msgProto.HeroAutoInfuseSwitch;

        /**
         * Creates a plain object from a HeroAutoInfuseSwitch message. Also converts values to other types if specified.
         * @param message HeroAutoInfuseSwitch
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.HeroAutoInfuseSwitch, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeroAutoInfuseSwitch to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HeroExtraInfuse. */
    interface IHeroExtraInfuse {

        /** HeroExtraInfuse type */
        type?: (number|null);
    }

    /** Represents a HeroExtraInfuse. */
    class HeroExtraInfuse implements IHeroExtraInfuse {

        /**
         * Constructs a new HeroExtraInfuse.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IHeroExtraInfuse);

        /** HeroExtraInfuse type. */
        public type: number;

        /**
         * Encodes the specified HeroExtraInfuse message. Does not implicitly {@link msgProto.HeroExtraInfuse.verify|verify} messages.
         * @param message HeroExtraInfuse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IHeroExtraInfuse, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a HeroExtraInfuse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeroExtraInfuse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.HeroExtraInfuse;

        /**
         * Creates a HeroExtraInfuse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeroExtraInfuse
         */
        public static fromObject(object: { [k: string]: any }): msgProto.HeroExtraInfuse;

        /**
         * Creates a plain object from a HeroExtraInfuse message. Also converts values to other types if specified.
         * @param message HeroExtraInfuse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.HeroExtraInfuse, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeroExtraInfuse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HeroSaveFightList. */
    interface IHeroSaveFightList {

        /** HeroSaveFightList fightArr */
        fightArr?: (string|null);
    }

    /** Represents a HeroSaveFightList. */
    class HeroSaveFightList implements IHeroSaveFightList {

        /**
         * Constructs a new HeroSaveFightList.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IHeroSaveFightList);

        /** HeroSaveFightList fightArr. */
        public fightArr: string;

        /**
         * Encodes the specified HeroSaveFightList message. Does not implicitly {@link msgProto.HeroSaveFightList.verify|verify} messages.
         * @param message HeroSaveFightList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IHeroSaveFightList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a HeroSaveFightList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeroSaveFightList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.HeroSaveFightList;

        /**
         * Creates a HeroSaveFightList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeroSaveFightList
         */
        public static fromObject(object: { [k: string]: any }): msgProto.HeroSaveFightList;

        /**
         * Creates a plain object from a HeroSaveFightList message. Also converts values to other types if specified.
         * @param message HeroSaveFightList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.HeroSaveFightList, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeroSaveFightList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LotteryLottery. */
    interface ILotteryLottery {

        /** LotteryLottery type */
        type?: (number|null);

        /** LotteryLottery count */
        count?: (number|null);
    }

    /** Represents a LotteryLottery. */
    class LotteryLottery implements ILotteryLottery {

        /**
         * Constructs a new LotteryLottery.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.ILotteryLottery);

        /** LotteryLottery type. */
        public type: number;

        /** LotteryLottery count. */
        public count: number;

        /**
         * Encodes the specified LotteryLottery message. Does not implicitly {@link msgProto.LotteryLottery.verify|verify} messages.
         * @param message LotteryLottery message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.ILotteryLottery, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a LotteryLottery message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LotteryLottery
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.LotteryLottery;

        /**
         * Creates a LotteryLottery message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LotteryLottery
         */
        public static fromObject(object: { [k: string]: any }): msgProto.LotteryLottery;

        /**
         * Creates a plain object from a LotteryLottery message. Also converts values to other types if specified.
         * @param message LotteryLottery
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.LotteryLottery, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LotteryLottery to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LotteryGetTreasureChest. */
    interface ILotteryGetTreasureChest {
    }

    /** Represents a LotteryGetTreasureChest. */
    class LotteryGetTreasureChest implements ILotteryGetTreasureChest {

        /**
         * Constructs a new LotteryGetTreasureChest.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.ILotteryGetTreasureChest);

        /**
         * Encodes the specified LotteryGetTreasureChest message. Does not implicitly {@link msgProto.LotteryGetTreasureChest.verify|verify} messages.
         * @param message LotteryGetTreasureChest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.ILotteryGetTreasureChest, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a LotteryGetTreasureChest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LotteryGetTreasureChest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.LotteryGetTreasureChest;

        /**
         * Creates a LotteryGetTreasureChest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LotteryGetTreasureChest
         */
        public static fromObject(object: { [k: string]: any }): msgProto.LotteryGetTreasureChest;

        /**
         * Creates a plain object from a LotteryGetTreasureChest message. Also converts values to other types if specified.
         * @param message LotteryGetTreasureChest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.LotteryGetTreasureChest, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LotteryGetTreasureChest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LotteryGetInfo. */
    interface ILotteryGetInfo {
    }

    /** Represents a LotteryGetInfo. */
    class LotteryGetInfo implements ILotteryGetInfo {

        /**
         * Constructs a new LotteryGetInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.ILotteryGetInfo);

        /**
         * Encodes the specified LotteryGetInfo message. Does not implicitly {@link msgProto.LotteryGetInfo.verify|verify} messages.
         * @param message LotteryGetInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.ILotteryGetInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a LotteryGetInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LotteryGetInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.LotteryGetInfo;

        /**
         * Creates a LotteryGetInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LotteryGetInfo
         */
        public static fromObject(object: { [k: string]: any }): msgProto.LotteryGetInfo;

        /**
         * Creates a plain object from a LotteryGetInfo message. Also converts values to other types if specified.
         * @param message LotteryGetInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.LotteryGetInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LotteryGetInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TaskGetInfo. */
    interface ITaskGetInfo {
    }

    /** Represents a TaskGetInfo. */
    class TaskGetInfo implements ITaskGetInfo {

        /**
         * Constructs a new TaskGetInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.ITaskGetInfo);

        /**
         * Encodes the specified TaskGetInfo message. Does not implicitly {@link msgProto.TaskGetInfo.verify|verify} messages.
         * @param message TaskGetInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.ITaskGetInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a TaskGetInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TaskGetInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.TaskGetInfo;

        /**
         * Creates a TaskGetInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TaskGetInfo
         */
        public static fromObject(object: { [k: string]: any }): msgProto.TaskGetInfo;

        /**
         * Creates a plain object from a TaskGetInfo message. Also converts values to other types if specified.
         * @param message TaskGetInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.TaskGetInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TaskGetInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TaskTaskAward. */
    interface ITaskTaskAward {

        /** TaskTaskAward taskId */
        taskId?: (number|null);
    }

    /** Represents a TaskTaskAward. */
    class TaskTaskAward implements ITaskTaskAward {

        /**
         * Constructs a new TaskTaskAward.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.ITaskTaskAward);

        /** TaskTaskAward taskId. */
        public taskId: number;

        /**
         * Encodes the specified TaskTaskAward message. Does not implicitly {@link msgProto.TaskTaskAward.verify|verify} messages.
         * @param message TaskTaskAward message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.ITaskTaskAward, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a TaskTaskAward message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TaskTaskAward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.TaskTaskAward;

        /**
         * Creates a TaskTaskAward message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TaskTaskAward
         */
        public static fromObject(object: { [k: string]: any }): msgProto.TaskTaskAward;

        /**
         * Creates a plain object from a TaskTaskAward message. Also converts values to other types if specified.
         * @param message TaskTaskAward
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.TaskTaskAward, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TaskTaskAward to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TaskGetVitalityChest. */
    interface ITaskGetVitalityChest {

        /** TaskGetVitalityChest index */
        index?: (number|null);
    }

    /** Represents a TaskGetVitalityChest. */
    class TaskGetVitalityChest implements ITaskGetVitalityChest {

        /**
         * Constructs a new TaskGetVitalityChest.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.ITaskGetVitalityChest);

        /** TaskGetVitalityChest index. */
        public index: number;

        /**
         * Encodes the specified TaskGetVitalityChest message. Does not implicitly {@link msgProto.TaskGetVitalityChest.verify|verify} messages.
         * @param message TaskGetVitalityChest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.ITaskGetVitalityChest, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a TaskGetVitalityChest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TaskGetVitalityChest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.TaskGetVitalityChest;

        /**
         * Creates a TaskGetVitalityChest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TaskGetVitalityChest
         */
        public static fromObject(object: { [k: string]: any }): msgProto.TaskGetVitalityChest;

        /**
         * Creates a plain object from a TaskGetVitalityChest message. Also converts values to other types if specified.
         * @param message TaskGetVitalityChest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.TaskGetVitalityChest, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TaskGetVitalityChest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PkBuyPKNum. */
    interface IPkBuyPKNum {
    }

    /** Represents a PkBuyPKNum. */
    class PkBuyPKNum implements IPkBuyPKNum {

        /**
         * Constructs a new PkBuyPKNum.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IPkBuyPKNum);

        /**
         * Encodes the specified PkBuyPKNum message. Does not implicitly {@link msgProto.PkBuyPKNum.verify|verify} messages.
         * @param message PkBuyPKNum message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IPkBuyPKNum, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PkBuyPKNum message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PkBuyPKNum
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.PkBuyPKNum;

        /**
         * Creates a PkBuyPKNum message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PkBuyPKNum
         */
        public static fromObject(object: { [k: string]: any }): msgProto.PkBuyPKNum;

        /**
         * Creates a plain object from a PkBuyPKNum message. Also converts values to other types if specified.
         * @param message PkBuyPKNum
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.PkBuyPKNum, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PkBuyPKNum to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PkGetPKUserList. */
    interface IPkGetPKUserList {
    }

    /** Represents a PkGetPKUserList. */
    class PkGetPKUserList implements IPkGetPKUserList {

        /**
         * Constructs a new PkGetPKUserList.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IPkGetPKUserList);

        /**
         * Encodes the specified PkGetPKUserList message. Does not implicitly {@link msgProto.PkGetPKUserList.verify|verify} messages.
         * @param message PkGetPKUserList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IPkGetPKUserList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PkGetPKUserList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PkGetPKUserList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.PkGetPKUserList;

        /**
         * Creates a PkGetPKUserList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PkGetPKUserList
         */
        public static fromObject(object: { [k: string]: any }): msgProto.PkGetPKUserList;

        /**
         * Creates a plain object from a PkGetPKUserList message. Also converts values to other types if specified.
         * @param message PkGetPKUserList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.PkGetPKUserList, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PkGetPKUserList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PkGetPKUserData. */
    interface IPkGetPKUserData {

        /** PkGetPKUserData userId */
        userId?: (number|Long|null);
    }

    /** Represents a PkGetPKUserData. */
    class PkGetPKUserData implements IPkGetPKUserData {

        /**
         * Constructs a new PkGetPKUserData.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IPkGetPKUserData);

        /** PkGetPKUserData userId. */
        public userId: (number|Long);

        /**
         * Encodes the specified PkGetPKUserData message. Does not implicitly {@link msgProto.PkGetPKUserData.verify|verify} messages.
         * @param message PkGetPKUserData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IPkGetPKUserData, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PkGetPKUserData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PkGetPKUserData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.PkGetPKUserData;

        /**
         * Creates a PkGetPKUserData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PkGetPKUserData
         */
        public static fromObject(object: { [k: string]: any }): msgProto.PkGetPKUserData;

        /**
         * Creates a plain object from a PkGetPKUserData message. Also converts values to other types if specified.
         * @param message PkGetPKUserData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.PkGetPKUserData, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PkGetPKUserData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PkFight. */
    interface IPkFight {

        /** PkFight enemyId */
        enemyId?: (number|Long|null);

        /** PkFight isNPC */
        isNPC?: (boolean|null);

        /** PkFight fightType */
        fightType?: (number|null);
    }

    /** Represents a PkFight. */
    class PkFight implements IPkFight {

        /**
         * Constructs a new PkFight.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IPkFight);

        /** PkFight enemyId. */
        public enemyId: (number|Long);

        /** PkFight isNPC. */
        public isNPC: boolean;

        /** PkFight fightType. */
        public fightType: number;

        /**
         * Encodes the specified PkFight message. Does not implicitly {@link msgProto.PkFight.verify|verify} messages.
         * @param message PkFight message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IPkFight, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PkFight message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PkFight
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.PkFight;

        /**
         * Creates a PkFight message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PkFight
         */
        public static fromObject(object: { [k: string]: any }): msgProto.PkFight;

        /**
         * Creates a plain object from a PkFight message. Also converts values to other types if specified.
         * @param message PkFight
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.PkFight, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PkFight to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PkGetEnemyList. */
    interface IPkGetEnemyList {
    }

    /** Represents a PkGetEnemyList. */
    class PkGetEnemyList implements IPkGetEnemyList {

        /**
         * Constructs a new PkGetEnemyList.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IPkGetEnemyList);

        /**
         * Encodes the specified PkGetEnemyList message. Does not implicitly {@link msgProto.PkGetEnemyList.verify|verify} messages.
         * @param message PkGetEnemyList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IPkGetEnemyList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PkGetEnemyList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PkGetEnemyList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.PkGetEnemyList;

        /**
         * Creates a PkGetEnemyList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PkGetEnemyList
         */
        public static fromObject(object: { [k: string]: any }): msgProto.PkGetEnemyList;

        /**
         * Creates a plain object from a PkGetEnemyList message. Also converts values to other types if specified.
         * @param message PkGetEnemyList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.PkGetEnemyList, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PkGetEnemyList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PkGetUserRanks. */
    interface IPkGetUserRanks {
    }

    /** Represents a PkGetUserRanks. */
    class PkGetUserRanks implements IPkGetUserRanks {

        /**
         * Constructs a new PkGetUserRanks.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IPkGetUserRanks);

        /**
         * Encodes the specified PkGetUserRanks message. Does not implicitly {@link msgProto.PkGetUserRanks.verify|verify} messages.
         * @param message PkGetUserRanks message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IPkGetUserRanks, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PkGetUserRanks message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PkGetUserRanks
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.PkGetUserRanks;

        /**
         * Creates a PkGetUserRanks message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PkGetUserRanks
         */
        public static fromObject(object: { [k: string]: any }): msgProto.PkGetUserRanks;

        /**
         * Creates a plain object from a PkGetUserRanks message. Also converts values to other types if specified.
         * @param message PkGetUserRanks
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.PkGetUserRanks, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PkGetUserRanks to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PkGetRank. */
    interface IPkGetRank {
    }

    /** Represents a PkGetRank. */
    class PkGetRank implements IPkGetRank {

        /**
         * Constructs a new PkGetRank.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IPkGetRank);

        /**
         * Encodes the specified PkGetRank message. Does not implicitly {@link msgProto.PkGetRank.verify|verify} messages.
         * @param message PkGetRank message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IPkGetRank, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PkGetRank message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PkGetRank
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.PkGetRank;

        /**
         * Creates a PkGetRank message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PkGetRank
         */
        public static fromObject(object: { [k: string]: any }): msgProto.PkGetRank;

        /**
         * Creates a plain object from a PkGetRank message. Also converts values to other types if specified.
         * @param message PkGetRank
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.PkGetRank, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PkGetRank to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PkChangeSign. */
    interface IPkChangeSign {

        /** PkChangeSign sign */
        sign?: (string|null);
    }

    /** Represents a PkChangeSign. */
    class PkChangeSign implements IPkChangeSign {

        /**
         * Constructs a new PkChangeSign.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IPkChangeSign);

        /** PkChangeSign sign. */
        public sign: string;

        /**
         * Encodes the specified PkChangeSign message. Does not implicitly {@link msgProto.PkChangeSign.verify|verify} messages.
         * @param message PkChangeSign message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IPkChangeSign, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PkChangeSign message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PkChangeSign
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.PkChangeSign;

        /**
         * Creates a PkChangeSign message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PkChangeSign
         */
        public static fromObject(object: { [k: string]: any }): msgProto.PkChangeSign;

        /**
         * Creates a plain object from a PkChangeSign message. Also converts values to other types if specified.
         * @param message PkChangeSign
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.PkChangeSign, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PkChangeSign to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PkSetRead. */
    interface IPkSetRead {
    }

    /** Represents a PkSetRead. */
    class PkSetRead implements IPkSetRead {

        /**
         * Constructs a new PkSetRead.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IPkSetRead);

        /**
         * Encodes the specified PkSetRead message. Does not implicitly {@link msgProto.PkSetRead.verify|verify} messages.
         * @param message PkSetRead message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IPkSetRead, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PkSetRead message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PkSetRead
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.PkSetRead;

        /**
         * Creates a PkSetRead message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PkSetRead
         */
        public static fromObject(object: { [k: string]: any }): msgProto.PkSetRead;

        /**
         * Creates a plain object from a PkSetRead message. Also converts values to other types if specified.
         * @param message PkSetRead
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.PkSetRead, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PkSetRead to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PkSkip. */
    interface IPkSkip {
    }

    /** Represents a PkSkip. */
    class PkSkip implements IPkSkip {

        /**
         * Constructs a new PkSkip.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IPkSkip);

        /**
         * Encodes the specified PkSkip message. Does not implicitly {@link msgProto.PkSkip.verify|verify} messages.
         * @param message PkSkip message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IPkSkip, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PkSkip message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PkSkip
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.PkSkip;

        /**
         * Creates a PkSkip message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PkSkip
         */
        public static fromObject(object: { [k: string]: any }): msgProto.PkSkip;

        /**
         * Creates a plain object from a PkSkip message. Also converts values to other types if specified.
         * @param message PkSkip
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.PkSkip, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PkSkip to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PkPickRankAward. */
    interface IPkPickRankAward {
    }

    /** Represents a PkPickRankAward. */
    class PkPickRankAward implements IPkPickRankAward {

        /**
         * Constructs a new PkPickRankAward.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IPkPickRankAward);

        /**
         * Encodes the specified PkPickRankAward message. Does not implicitly {@link msgProto.PkPickRankAward.verify|verify} messages.
         * @param message PkPickRankAward message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IPkPickRankAward, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PkPickRankAward message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PkPickRankAward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.PkPickRankAward;

        /**
         * Creates a PkPickRankAward message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PkPickRankAward
         */
        public static fromObject(object: { [k: string]: any }): msgProto.PkPickRankAward;

        /**
         * Creates a plain object from a PkPickRankAward message. Also converts values to other types if specified.
         * @param message PkPickRankAward
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.PkPickRankAward, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PkPickRankAward to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PkGetEnemyRecord. */
    interface IPkGetEnemyRecord {

        /** PkGetEnemyRecord enemyId */
        enemyId?: (number|Long|null);
    }

    /** Represents a PkGetEnemyRecord. */
    class PkGetEnemyRecord implements IPkGetEnemyRecord {

        /**
         * Constructs a new PkGetEnemyRecord.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IPkGetEnemyRecord);

        /** PkGetEnemyRecord enemyId. */
        public enemyId: (number|Long);

        /**
         * Encodes the specified PkGetEnemyRecord message. Does not implicitly {@link msgProto.PkGetEnemyRecord.verify|verify} messages.
         * @param message PkGetEnemyRecord message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IPkGetEnemyRecord, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PkGetEnemyRecord message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PkGetEnemyRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.PkGetEnemyRecord;

        /**
         * Creates a PkGetEnemyRecord message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PkGetEnemyRecord
         */
        public static fromObject(object: { [k: string]: any }): msgProto.PkGetEnemyRecord;

        /**
         * Creates a plain object from a PkGetEnemyRecord message. Also converts values to other types if specified.
         * @param message PkGetEnemyRecord
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.PkGetEnemyRecord, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PkGetEnemyRecord to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PkGetList. */
    interface IPkGetList {
    }

    /** Represents a PkGetList. */
    class PkGetList implements IPkGetList {

        /**
         * Constructs a new PkGetList.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IPkGetList);

        /**
         * Encodes the specified PkGetList message. Does not implicitly {@link msgProto.PkGetList.verify|verify} messages.
         * @param message PkGetList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IPkGetList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PkGetList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PkGetList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.PkGetList;

        /**
         * Creates a PkGetList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PkGetList
         */
        public static fromObject(object: { [k: string]: any }): msgProto.PkGetList;

        /**
         * Creates a plain object from a PkGetList message. Also converts values to other types if specified.
         * @param message PkGetList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.PkGetList, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PkGetList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PkOutOpen. */
    interface IPkOutOpen {
    }

    /** Represents a PkOutOpen. */
    class PkOutOpen implements IPkOutOpen {

        /**
         * Constructs a new PkOutOpen.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IPkOutOpen);

        /**
         * Encodes the specified PkOutOpen message. Does not implicitly {@link msgProto.PkOutOpen.verify|verify} messages.
         * @param message PkOutOpen message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IPkOutOpen, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PkOutOpen message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PkOutOpen
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.PkOutOpen;

        /**
         * Creates a PkOutOpen message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PkOutOpen
         */
        public static fromObject(object: { [k: string]: any }): msgProto.PkOutOpen;

        /**
         * Creates a plain object from a PkOutOpen message. Also converts values to other types if specified.
         * @param message PkOutOpen
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.PkOutOpen, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PkOutOpen to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PkOutGetEnemyList. */
    interface IPkOutGetEnemyList {
    }

    /** Represents a PkOutGetEnemyList. */
    class PkOutGetEnemyList implements IPkOutGetEnemyList {

        /**
         * Constructs a new PkOutGetEnemyList.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IPkOutGetEnemyList);

        /**
         * Encodes the specified PkOutGetEnemyList message. Does not implicitly {@link msgProto.PkOutGetEnemyList.verify|verify} messages.
         * @param message PkOutGetEnemyList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IPkOutGetEnemyList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PkOutGetEnemyList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PkOutGetEnemyList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.PkOutGetEnemyList;

        /**
         * Creates a PkOutGetEnemyList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PkOutGetEnemyList
         */
        public static fromObject(object: { [k: string]: any }): msgProto.PkOutGetEnemyList;

        /**
         * Creates a plain object from a PkOutGetEnemyList message. Also converts values to other types if specified.
         * @param message PkOutGetEnemyList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.PkOutGetEnemyList, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PkOutGetEnemyList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PkOutGetRevengeEnemyList. */
    interface IPkOutGetRevengeEnemyList {
    }

    /** Represents a PkOutGetRevengeEnemyList. */
    class PkOutGetRevengeEnemyList implements IPkOutGetRevengeEnemyList {

        /**
         * Constructs a new PkOutGetRevengeEnemyList.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IPkOutGetRevengeEnemyList);

        /**
         * Encodes the specified PkOutGetRevengeEnemyList message. Does not implicitly {@link msgProto.PkOutGetRevengeEnemyList.verify|verify} messages.
         * @param message PkOutGetRevengeEnemyList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IPkOutGetRevengeEnemyList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PkOutGetRevengeEnemyList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PkOutGetRevengeEnemyList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.PkOutGetRevengeEnemyList;

        /**
         * Creates a PkOutGetRevengeEnemyList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PkOutGetRevengeEnemyList
         */
        public static fromObject(object: { [k: string]: any }): msgProto.PkOutGetRevengeEnemyList;

        /**
         * Creates a plain object from a PkOutGetRevengeEnemyList message. Also converts values to other types if specified.
         * @param message PkOutGetRevengeEnemyList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.PkOutGetRevengeEnemyList, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PkOutGetRevengeEnemyList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PkOutRefreshEnemy. */
    interface IPkOutRefreshEnemy {
    }

    /** Represents a PkOutRefreshEnemy. */
    class PkOutRefreshEnemy implements IPkOutRefreshEnemy {

        /**
         * Constructs a new PkOutRefreshEnemy.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IPkOutRefreshEnemy);

        /**
         * Encodes the specified PkOutRefreshEnemy message. Does not implicitly {@link msgProto.PkOutRefreshEnemy.verify|verify} messages.
         * @param message PkOutRefreshEnemy message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IPkOutRefreshEnemy, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PkOutRefreshEnemy message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PkOutRefreshEnemy
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.PkOutRefreshEnemy;

        /**
         * Creates a PkOutRefreshEnemy message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PkOutRefreshEnemy
         */
        public static fromObject(object: { [k: string]: any }): msgProto.PkOutRefreshEnemy;

        /**
         * Creates a plain object from a PkOutRefreshEnemy message. Also converts values to other types if specified.
         * @param message PkOutRefreshEnemy
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.PkOutRefreshEnemy, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PkOutRefreshEnemy to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PkOutStart. */
    interface IPkOutStart {

        /** PkOutStart enemyId */
        enemyId?: (number|Long|null);

        /** PkOutStart fightType */
        fightType?: (number|null);

        /** PkOutStart isRevenge */
        isRevenge?: (boolean|null);
    }

    /** Represents a PkOutStart. */
    class PkOutStart implements IPkOutStart {

        /**
         * Constructs a new PkOutStart.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IPkOutStart);

        /** PkOutStart enemyId. */
        public enemyId: (number|Long);

        /** PkOutStart fightType. */
        public fightType: number;

        /** PkOutStart isRevenge. */
        public isRevenge: boolean;

        /**
         * Encodes the specified PkOutStart message. Does not implicitly {@link msgProto.PkOutStart.verify|verify} messages.
         * @param message PkOutStart message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IPkOutStart, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PkOutStart message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PkOutStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.PkOutStart;

        /**
         * Creates a PkOutStart message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PkOutStart
         */
        public static fromObject(object: { [k: string]: any }): msgProto.PkOutStart;

        /**
         * Creates a plain object from a PkOutStart message. Also converts values to other types if specified.
         * @param message PkOutStart
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.PkOutStart, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PkOutStart to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PkOutEnd. */
    interface IPkOutEnd {

        /** PkOutEnd isWin */
        isWin?: (boolean|null);

        /** PkOutEnd enemyId */
        enemyId?: (number|Long|null);

        /** PkOutEnd fightData */
        fightData?: (string|null);

        /** PkOutEnd fightType */
        fightType?: (number|null);

        /** PkOutEnd isRevenge */
        isRevenge?: (boolean|null);
    }

    /** Represents a PkOutEnd. */
    class PkOutEnd implements IPkOutEnd {

        /**
         * Constructs a new PkOutEnd.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IPkOutEnd);

        /** PkOutEnd isWin. */
        public isWin: boolean;

        /** PkOutEnd enemyId. */
        public enemyId: (number|Long);

        /** PkOutEnd fightData. */
        public fightData: string;

        /** PkOutEnd fightType. */
        public fightType: number;

        /** PkOutEnd isRevenge. */
        public isRevenge: boolean;

        /**
         * Encodes the specified PkOutEnd message. Does not implicitly {@link msgProto.PkOutEnd.verify|verify} messages.
         * @param message PkOutEnd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IPkOutEnd, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PkOutEnd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PkOutEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.PkOutEnd;

        /**
         * Creates a PkOutEnd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PkOutEnd
         */
        public static fromObject(object: { [k: string]: any }): msgProto.PkOutEnd;

        /**
         * Creates a plain object from a PkOutEnd message. Also converts values to other types if specified.
         * @param message PkOutEnd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.PkOutEnd, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PkOutEnd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PkOutGetRankList. */
    interface IPkOutGetRankList {
    }

    /** Represents a PkOutGetRankList. */
    class PkOutGetRankList implements IPkOutGetRankList {

        /**
         * Constructs a new PkOutGetRankList.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IPkOutGetRankList);

        /**
         * Encodes the specified PkOutGetRankList message. Does not implicitly {@link msgProto.PkOutGetRankList.verify|verify} messages.
         * @param message PkOutGetRankList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IPkOutGetRankList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PkOutGetRankList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PkOutGetRankList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.PkOutGetRankList;

        /**
         * Creates a PkOutGetRankList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PkOutGetRankList
         */
        public static fromObject(object: { [k: string]: any }): msgProto.PkOutGetRankList;

        /**
         * Creates a plain object from a PkOutGetRankList message. Also converts values to other types if specified.
         * @param message PkOutGetRankList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.PkOutGetRankList, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PkOutGetRankList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PkOutGetMyRank. */
    interface IPkOutGetMyRank {
    }

    /** Represents a PkOutGetMyRank. */
    class PkOutGetMyRank implements IPkOutGetMyRank {

        /**
         * Constructs a new PkOutGetMyRank.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IPkOutGetMyRank);

        /**
         * Encodes the specified PkOutGetMyRank message. Does not implicitly {@link msgProto.PkOutGetMyRank.verify|verify} messages.
         * @param message PkOutGetMyRank message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IPkOutGetMyRank, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PkOutGetMyRank message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PkOutGetMyRank
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.PkOutGetMyRank;

        /**
         * Creates a PkOutGetMyRank message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PkOutGetMyRank
         */
        public static fromObject(object: { [k: string]: any }): msgProto.PkOutGetMyRank;

        /**
         * Creates a plain object from a PkOutGetMyRank message. Also converts values to other types if specified.
         * @param message PkOutGetMyRank
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.PkOutGetMyRank, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PkOutGetMyRank to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PkOutGetPkRecordList. */
    interface IPkOutGetPkRecordList {
    }

    /** Represents a PkOutGetPkRecordList. */
    class PkOutGetPkRecordList implements IPkOutGetPkRecordList {

        /**
         * Constructs a new PkOutGetPkRecordList.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IPkOutGetPkRecordList);

        /**
         * Encodes the specified PkOutGetPkRecordList message. Does not implicitly {@link msgProto.PkOutGetPkRecordList.verify|verify} messages.
         * @param message PkOutGetPkRecordList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IPkOutGetPkRecordList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PkOutGetPkRecordList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PkOutGetPkRecordList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.PkOutGetPkRecordList;

        /**
         * Creates a PkOutGetPkRecordList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PkOutGetPkRecordList
         */
        public static fromObject(object: { [k: string]: any }): msgProto.PkOutGetPkRecordList;

        /**
         * Creates a plain object from a PkOutGetPkRecordList message. Also converts values to other types if specified.
         * @param message PkOutGetPkRecordList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.PkOutGetPkRecordList, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PkOutGetPkRecordList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PkOutGetRankPkRecordList. */
    interface IPkOutGetRankPkRecordList {
    }

    /** Represents a PkOutGetRankPkRecordList. */
    class PkOutGetRankPkRecordList implements IPkOutGetRankPkRecordList {

        /**
         * Constructs a new PkOutGetRankPkRecordList.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IPkOutGetRankPkRecordList);

        /**
         * Encodes the specified PkOutGetRankPkRecordList message. Does not implicitly {@link msgProto.PkOutGetRankPkRecordList.verify|verify} messages.
         * @param message PkOutGetRankPkRecordList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IPkOutGetRankPkRecordList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PkOutGetRankPkRecordList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PkOutGetRankPkRecordList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.PkOutGetRankPkRecordList;

        /**
         * Creates a PkOutGetRankPkRecordList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PkOutGetRankPkRecordList
         */
        public static fromObject(object: { [k: string]: any }): msgProto.PkOutGetRankPkRecordList;

        /**
         * Creates a plain object from a PkOutGetRankPkRecordList message. Also converts values to other types if specified.
         * @param message PkOutGetRankPkRecordList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.PkOutGetRankPkRecordList, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PkOutGetRankPkRecordList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PkOutSetPkRecordRead. */
    interface IPkOutSetPkRecordRead {
    }

    /** Represents a PkOutSetPkRecordRead. */
    class PkOutSetPkRecordRead implements IPkOutSetPkRecordRead {

        /**
         * Constructs a new PkOutSetPkRecordRead.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IPkOutSetPkRecordRead);

        /**
         * Encodes the specified PkOutSetPkRecordRead message. Does not implicitly {@link msgProto.PkOutSetPkRecordRead.verify|verify} messages.
         * @param message PkOutSetPkRecordRead message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IPkOutSetPkRecordRead, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PkOutSetPkRecordRead message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PkOutSetPkRecordRead
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.PkOutSetPkRecordRead;

        /**
         * Creates a PkOutSetPkRecordRead message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PkOutSetPkRecordRead
         */
        public static fromObject(object: { [k: string]: any }): msgProto.PkOutSetPkRecordRead;

        /**
         * Creates a plain object from a PkOutSetPkRecordRead message. Also converts values to other types if specified.
         * @param message PkOutSetPkRecordRead
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.PkOutSetPkRecordRead, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PkOutSetPkRecordRead to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PkOutDealRecord. */
    interface IPkOutDealRecord {

        /** PkOutDealRecord fightType */
        fightType?: (number|null);
    }

    /** Represents a PkOutDealRecord. */
    class PkOutDealRecord implements IPkOutDealRecord {

        /**
         * Constructs a new PkOutDealRecord.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IPkOutDealRecord);

        /** PkOutDealRecord fightType. */
        public fightType: number;

        /**
         * Encodes the specified PkOutDealRecord message. Does not implicitly {@link msgProto.PkOutDealRecord.verify|verify} messages.
         * @param message PkOutDealRecord message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IPkOutDealRecord, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PkOutDealRecord message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PkOutDealRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.PkOutDealRecord;

        /**
         * Creates a PkOutDealRecord message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PkOutDealRecord
         */
        public static fromObject(object: { [k: string]: any }): msgProto.PkOutDealRecord;

        /**
         * Creates a plain object from a PkOutDealRecord message. Also converts values to other types if specified.
         * @param message PkOutDealRecord
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.PkOutDealRecord, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PkOutDealRecord to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PkOutClearPkValue. */
    interface IPkOutClearPkValue {
    }

    /** Represents a PkOutClearPkValue. */
    class PkOutClearPkValue implements IPkOutClearPkValue {

        /**
         * Constructs a new PkOutClearPkValue.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IPkOutClearPkValue);

        /**
         * Encodes the specified PkOutClearPkValue message. Does not implicitly {@link msgProto.PkOutClearPkValue.verify|verify} messages.
         * @param message PkOutClearPkValue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IPkOutClearPkValue, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PkOutClearPkValue message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PkOutClearPkValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.PkOutClearPkValue;

        /**
         * Creates a PkOutClearPkValue message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PkOutClearPkValue
         */
        public static fromObject(object: { [k: string]: any }): msgProto.PkOutClearPkValue;

        /**
         * Creates a plain object from a PkOutClearPkValue message. Also converts values to other types if specified.
         * @param message PkOutClearPkValue
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.PkOutClearPkValue, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PkOutClearPkValue to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PkOutResetBePkKill. */
    interface IPkOutResetBePkKill {
    }

    /** Represents a PkOutResetBePkKill. */
    class PkOutResetBePkKill implements IPkOutResetBePkKill {

        /**
         * Constructs a new PkOutResetBePkKill.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IPkOutResetBePkKill);

        /**
         * Encodes the specified PkOutResetBePkKill message. Does not implicitly {@link msgProto.PkOutResetBePkKill.verify|verify} messages.
         * @param message PkOutResetBePkKill message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IPkOutResetBePkKill, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PkOutResetBePkKill message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PkOutResetBePkKill
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.PkOutResetBePkKill;

        /**
         * Creates a PkOutResetBePkKill message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PkOutResetBePkKill
         */
        public static fromObject(object: { [k: string]: any }): msgProto.PkOutResetBePkKill;

        /**
         * Creates a plain object from a PkOutResetBePkKill message. Also converts values to other types if specified.
         * @param message PkOutResetBePkKill
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.PkOutResetBePkKill, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PkOutResetBePkKill to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PkOutIncognito. */
    interface IPkOutIncognito {
    }

    /** Represents a PkOutIncognito. */
    class PkOutIncognito implements IPkOutIncognito {

        /**
         * Constructs a new PkOutIncognito.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IPkOutIncognito);

        /**
         * Encodes the specified PkOutIncognito message. Does not implicitly {@link msgProto.PkOutIncognito.verify|verify} messages.
         * @param message PkOutIncognito message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IPkOutIncognito, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PkOutIncognito message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PkOutIncognito
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.PkOutIncognito;

        /**
         * Creates a PkOutIncognito message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PkOutIncognito
         */
        public static fromObject(object: { [k: string]: any }): msgProto.PkOutIncognito;

        /**
         * Creates a plain object from a PkOutIncognito message. Also converts values to other types if specified.
         * @param message PkOutIncognito
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.PkOutIncognito, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PkOutIncognito to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PkOutGetTreasurePkRecordList. */
    interface IPkOutGetTreasurePkRecordList {
    }

    /** Represents a PkOutGetTreasurePkRecordList. */
    class PkOutGetTreasurePkRecordList implements IPkOutGetTreasurePkRecordList {

        /**
         * Constructs a new PkOutGetTreasurePkRecordList.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IPkOutGetTreasurePkRecordList);

        /**
         * Encodes the specified PkOutGetTreasurePkRecordList message. Does not implicitly {@link msgProto.PkOutGetTreasurePkRecordList.verify|verify} messages.
         * @param message PkOutGetTreasurePkRecordList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IPkOutGetTreasurePkRecordList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PkOutGetTreasurePkRecordList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PkOutGetTreasurePkRecordList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.PkOutGetTreasurePkRecordList;

        /**
         * Creates a PkOutGetTreasurePkRecordList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PkOutGetTreasurePkRecordList
         */
        public static fromObject(object: { [k: string]: any }): msgProto.PkOutGetTreasurePkRecordList;

        /**
         * Creates a plain object from a PkOutGetTreasurePkRecordList message. Also converts values to other types if specified.
         * @param message PkOutGetTreasurePkRecordList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.PkOutGetTreasurePkRecordList, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PkOutGetTreasurePkRecordList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ShopGetInfo. */
    interface IShopGetInfo {

        /** ShopGetInfo type */
        type?: (number|null);
    }

    /** Represents a ShopGetInfo. */
    class ShopGetInfo implements IShopGetInfo {

        /**
         * Constructs a new ShopGetInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IShopGetInfo);

        /** ShopGetInfo type. */
        public type: number;

        /**
         * Encodes the specified ShopGetInfo message. Does not implicitly {@link msgProto.ShopGetInfo.verify|verify} messages.
         * @param message ShopGetInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IShopGetInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ShopGetInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ShopGetInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.ShopGetInfo;

        /**
         * Creates a ShopGetInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ShopGetInfo
         */
        public static fromObject(object: { [k: string]: any }): msgProto.ShopGetInfo;

        /**
         * Creates a plain object from a ShopGetInfo message. Also converts values to other types if specified.
         * @param message ShopGetInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.ShopGetInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ShopGetInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ShopRefreshExShop. */
    interface IShopRefreshExShop {

        /** ShopRefreshExShop type */
        type?: (number|null);

        /** ShopRefreshExShop lvlRefresh */
        lvlRefresh?: (boolean|null);
    }

    /** Represents a ShopRefreshExShop. */
    class ShopRefreshExShop implements IShopRefreshExShop {

        /**
         * Constructs a new ShopRefreshExShop.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IShopRefreshExShop);

        /** ShopRefreshExShop type. */
        public type: number;

        /** ShopRefreshExShop lvlRefresh. */
        public lvlRefresh: boolean;

        /**
         * Encodes the specified ShopRefreshExShop message. Does not implicitly {@link msgProto.ShopRefreshExShop.verify|verify} messages.
         * @param message ShopRefreshExShop message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IShopRefreshExShop, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ShopRefreshExShop message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ShopRefreshExShop
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.ShopRefreshExShop;

        /**
         * Creates a ShopRefreshExShop message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ShopRefreshExShop
         */
        public static fromObject(object: { [k: string]: any }): msgProto.ShopRefreshExShop;

        /**
         * Creates a plain object from a ShopRefreshExShop message. Also converts values to other types if specified.
         * @param message ShopRefreshExShop
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.ShopRefreshExShop, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ShopRefreshExShop to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ShopBuy. */
    interface IShopBuy {

        /** ShopBuy index */
        index?: (number|null);

        /** ShopBuy type */
        type?: (number|null);

        /** ShopBuy num */
        num?: (number|null);
    }

    /** Represents a ShopBuy. */
    class ShopBuy implements IShopBuy {

        /**
         * Constructs a new ShopBuy.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IShopBuy);

        /** ShopBuy index. */
        public index: number;

        /** ShopBuy type. */
        public type: number;

        /** ShopBuy num. */
        public num: number;

        /**
         * Encodes the specified ShopBuy message. Does not implicitly {@link msgProto.ShopBuy.verify|verify} messages.
         * @param message ShopBuy message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IShopBuy, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ShopBuy message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ShopBuy
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.ShopBuy;

        /**
         * Creates a ShopBuy message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ShopBuy
         */
        public static fromObject(object: { [k: string]: any }): msgProto.ShopBuy;

        /**
         * Creates a plain object from a ShopBuy message. Also converts values to other types if specified.
         * @param message ShopBuy
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.ShopBuy, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ShopBuy to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ShopBuyAll. */
    interface IShopBuyAll {

        /** ShopBuyAll type */
        type?: (number|null);
    }

    /** Represents a ShopBuyAll. */
    class ShopBuyAll implements IShopBuyAll {

        /**
         * Constructs a new ShopBuyAll.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IShopBuyAll);

        /** ShopBuyAll type. */
        public type: number;

        /**
         * Encodes the specified ShopBuyAll message. Does not implicitly {@link msgProto.ShopBuyAll.verify|verify} messages.
         * @param message ShopBuyAll message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IShopBuyAll, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ShopBuyAll message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ShopBuyAll
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.ShopBuyAll;

        /**
         * Creates a ShopBuyAll message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ShopBuyAll
         */
        public static fromObject(object: { [k: string]: any }): msgProto.ShopBuyAll;

        /**
         * Creates a plain object from a ShopBuyAll message. Also converts values to other types if specified.
         * @param message ShopBuyAll
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.ShopBuyAll, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ShopBuyAll to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CopyGetInfo. */
    interface ICopyGetInfo {

        /** CopyGetInfo type */
        type?: (number|null);
    }

    /** Represents a CopyGetInfo. */
    class CopyGetInfo implements ICopyGetInfo {

        /**
         * Constructs a new CopyGetInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.ICopyGetInfo);

        /** CopyGetInfo type. */
        public type: number;

        /**
         * Encodes the specified CopyGetInfo message. Does not implicitly {@link msgProto.CopyGetInfo.verify|verify} messages.
         * @param message CopyGetInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.ICopyGetInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a CopyGetInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CopyGetInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.CopyGetInfo;

        /**
         * Creates a CopyGetInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CopyGetInfo
         */
        public static fromObject(object: { [k: string]: any }): msgProto.CopyGetInfo;

        /**
         * Creates a plain object from a CopyGetInfo message. Also converts values to other types if specified.
         * @param message CopyGetInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.CopyGetInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CopyGetInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CopyBuyCopyCount. */
    interface ICopyBuyCopyCount {

        /** CopyBuyCopyCount type */
        type?: (number|null);

        /** CopyBuyCopyCount copyId */
        copyId?: (number|null);
    }

    /** Represents a CopyBuyCopyCount. */
    class CopyBuyCopyCount implements ICopyBuyCopyCount {

        /**
         * Constructs a new CopyBuyCopyCount.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.ICopyBuyCopyCount);

        /** CopyBuyCopyCount type. */
        public type: number;

        /** CopyBuyCopyCount copyId. */
        public copyId: number;

        /**
         * Encodes the specified CopyBuyCopyCount message. Does not implicitly {@link msgProto.CopyBuyCopyCount.verify|verify} messages.
         * @param message CopyBuyCopyCount message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.ICopyBuyCopyCount, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a CopyBuyCopyCount message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CopyBuyCopyCount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.CopyBuyCopyCount;

        /**
         * Creates a CopyBuyCopyCount message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CopyBuyCopyCount
         */
        public static fromObject(object: { [k: string]: any }): msgProto.CopyBuyCopyCount;

        /**
         * Creates a plain object from a CopyBuyCopyCount message. Also converts values to other types if specified.
         * @param message CopyBuyCopyCount
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.CopyBuyCopyCount, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CopyBuyCopyCount to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CopyBuyEquipTessera. */
    interface ICopyBuyEquipTessera {
    }

    /** Represents a CopyBuyEquipTessera. */
    class CopyBuyEquipTessera implements ICopyBuyEquipTessera {

        /**
         * Constructs a new CopyBuyEquipTessera.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.ICopyBuyEquipTessera);

        /**
         * Encodes the specified CopyBuyEquipTessera message. Does not implicitly {@link msgProto.CopyBuyEquipTessera.verify|verify} messages.
         * @param message CopyBuyEquipTessera message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.ICopyBuyEquipTessera, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a CopyBuyEquipTessera message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CopyBuyEquipTessera
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.CopyBuyEquipTessera;

        /**
         * Creates a CopyBuyEquipTessera message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CopyBuyEquipTessera
         */
        public static fromObject(object: { [k: string]: any }): msgProto.CopyBuyEquipTessera;

        /**
         * Creates a plain object from a CopyBuyEquipTessera message. Also converts values to other types if specified.
         * @param message CopyBuyEquipTessera
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.CopyBuyEquipTessera, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CopyBuyEquipTessera to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CopyBuyRealmTessera. */
    interface ICopyBuyRealmTessera {
    }

    /** Represents a CopyBuyRealmTessera. */
    class CopyBuyRealmTessera implements ICopyBuyRealmTessera {

        /**
         * Constructs a new CopyBuyRealmTessera.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.ICopyBuyRealmTessera);

        /**
         * Encodes the specified CopyBuyRealmTessera message. Does not implicitly {@link msgProto.CopyBuyRealmTessera.verify|verify} messages.
         * @param message CopyBuyRealmTessera message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.ICopyBuyRealmTessera, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a CopyBuyRealmTessera message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CopyBuyRealmTessera
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.CopyBuyRealmTessera;

        /**
         * Creates a CopyBuyRealmTessera message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CopyBuyRealmTessera
         */
        public static fromObject(object: { [k: string]: any }): msgProto.CopyBuyRealmTessera;

        /**
         * Creates a plain object from a CopyBuyRealmTessera message. Also converts values to other types if specified.
         * @param message CopyBuyRealmTessera
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.CopyBuyRealmTessera, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CopyBuyRealmTessera to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CopyCopyWipe. */
    interface ICopyCopyWipe {

        /** CopyCopyWipe copyId */
        copyId?: (number|null);
    }

    /** Represents a CopyCopyWipe. */
    class CopyCopyWipe implements ICopyCopyWipe {

        /**
         * Constructs a new CopyCopyWipe.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.ICopyCopyWipe);

        /** CopyCopyWipe copyId. */
        public copyId: number;

        /**
         * Encodes the specified CopyCopyWipe message. Does not implicitly {@link msgProto.CopyCopyWipe.verify|verify} messages.
         * @param message CopyCopyWipe message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.ICopyCopyWipe, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a CopyCopyWipe message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CopyCopyWipe
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.CopyCopyWipe;

        /**
         * Creates a CopyCopyWipe message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CopyCopyWipe
         */
        public static fromObject(object: { [k: string]: any }): msgProto.CopyCopyWipe;

        /**
         * Creates a plain object from a CopyCopyWipe message. Also converts values to other types if specified.
         * @param message CopyCopyWipe
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.CopyCopyWipe, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CopyCopyWipe to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Copy_start. */
    interface ICopy_start {

        /** Copy_start copyId */
        copyId?: (number|null);

        /** Copy_start biCost */
        biCost?: (string|null);
    }

    /** Represents a Copy_start. */
    class Copy_start implements ICopy_start {

        /**
         * Constructs a new Copy_start.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.ICopy_start);

        /** Copy_start copyId. */
        public copyId: number;

        /** Copy_start biCost. */
        public biCost: string;

        /**
         * Encodes the specified Copy_start message. Does not implicitly {@link msgProto.Copy_start.verify|verify} messages.
         * @param message Copy_start message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.ICopy_start, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a Copy_start message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Copy_start
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.Copy_start;

        /**
         * Creates a Copy_start message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Copy_start
         */
        public static fromObject(object: { [k: string]: any }): msgProto.Copy_start;

        /**
         * Creates a plain object from a Copy_start message. Also converts values to other types if specified.
         * @param message Copy_start
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.Copy_start, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Copy_start to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CopyEnd. */
    interface ICopyEnd {

        /** CopyEnd copyId */
        copyId?: (number|null);

        /** CopyEnd fightData */
        fightData?: (string|null);

        /** CopyEnd isWin */
        isWin?: (boolean|null);
    }

    /** Represents a CopyEnd. */
    class CopyEnd implements ICopyEnd {

        /**
         * Constructs a new CopyEnd.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.ICopyEnd);

        /** CopyEnd copyId. */
        public copyId: number;

        /** CopyEnd fightData. */
        public fightData: string;

        /** CopyEnd isWin. */
        public isWin: boolean;

        /**
         * Encodes the specified CopyEnd message. Does not implicitly {@link msgProto.CopyEnd.verify|verify} messages.
         * @param message CopyEnd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.ICopyEnd, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a CopyEnd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CopyEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.CopyEnd;

        /**
         * Creates a CopyEnd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CopyEnd
         */
        public static fromObject(object: { [k: string]: any }): msgProto.CopyEnd;

        /**
         * Creates a plain object from a CopyEnd message. Also converts values to other types if specified.
         * @param message CopyEnd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.CopyEnd, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CopyEnd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CopyUpdateWinningStreak. */
    interface ICopyUpdateWinningStreak {

        /** CopyUpdateWinningStreak copyId */
        copyId?: (number|null);
    }

    /** Represents a CopyUpdateWinningStreak. */
    class CopyUpdateWinningStreak implements ICopyUpdateWinningStreak {

        /**
         * Constructs a new CopyUpdateWinningStreak.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.ICopyUpdateWinningStreak);

        /** CopyUpdateWinningStreak copyId. */
        public copyId: number;

        /**
         * Encodes the specified CopyUpdateWinningStreak message. Does not implicitly {@link msgProto.CopyUpdateWinningStreak.verify|verify} messages.
         * @param message CopyUpdateWinningStreak message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.ICopyUpdateWinningStreak, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a CopyUpdateWinningStreak message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CopyUpdateWinningStreak
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.CopyUpdateWinningStreak;

        /**
         * Creates a CopyUpdateWinningStreak message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CopyUpdateWinningStreak
         */
        public static fromObject(object: { [k: string]: any }): msgProto.CopyUpdateWinningStreak;

        /**
         * Creates a plain object from a CopyUpdateWinningStreak message. Also converts values to other types if specified.
         * @param message CopyUpdateWinningStreak
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.CopyUpdateWinningStreak, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CopyUpdateWinningStreak to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CopySetRead. */
    interface ICopySetRead {

        /** CopySetRead copyId */
        copyId?: (number|null);
    }

    /** Represents a CopySetRead. */
    class CopySetRead implements ICopySetRead {

        /**
         * Constructs a new CopySetRead.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.ICopySetRead);

        /** CopySetRead copyId. */
        public copyId: number;

        /**
         * Encodes the specified CopySetRead message. Does not implicitly {@link msgProto.CopySetRead.verify|verify} messages.
         * @param message CopySetRead message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.ICopySetRead, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a CopySetRead message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CopySetRead
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.CopySetRead;

        /**
         * Creates a CopySetRead message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CopySetRead
         */
        public static fromObject(object: { [k: string]: any }): msgProto.CopySetRead;

        /**
         * Creates a plain object from a CopySetRead message. Also converts values to other types if specified.
         * @param message CopySetRead
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.CopySetRead, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CopySetRead to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CopyGuildStart. */
    interface ICopyGuildStart {

        /** CopyGuildStart copyId */
        copyId?: (number|null);

        /** CopyGuildStart bossId */
        bossId?: (number|null);
    }

    /** Represents a CopyGuildStart. */
    class CopyGuildStart implements ICopyGuildStart {

        /**
         * Constructs a new CopyGuildStart.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.ICopyGuildStart);

        /** CopyGuildStart copyId. */
        public copyId: number;

        /** CopyGuildStart bossId. */
        public bossId: number;

        /**
         * Encodes the specified CopyGuildStart message. Does not implicitly {@link msgProto.CopyGuildStart.verify|verify} messages.
         * @param message CopyGuildStart message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.ICopyGuildStart, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a CopyGuildStart message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CopyGuildStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.CopyGuildStart;

        /**
         * Creates a CopyGuildStart message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CopyGuildStart
         */
        public static fromObject(object: { [k: string]: any }): msgProto.CopyGuildStart;

        /**
         * Creates a plain object from a CopyGuildStart message. Also converts values to other types if specified.
         * @param message CopyGuildStart
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.CopyGuildStart, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CopyGuildStart to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CopyGuildEnd. */
    interface ICopyGuildEnd {

        /** CopyGuildEnd copyId */
        copyId?: (number|null);

        /** CopyGuildEnd bossId */
        bossId?: (number|null);

        /** CopyGuildEnd isWin */
        isWin?: (boolean|null);
    }

    /** Represents a CopyGuildEnd. */
    class CopyGuildEnd implements ICopyGuildEnd {

        /**
         * Constructs a new CopyGuildEnd.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.ICopyGuildEnd);

        /** CopyGuildEnd copyId. */
        public copyId: number;

        /** CopyGuildEnd bossId. */
        public bossId: number;

        /** CopyGuildEnd isWin. */
        public isWin: boolean;

        /**
         * Encodes the specified CopyGuildEnd message. Does not implicitly {@link msgProto.CopyGuildEnd.verify|verify} messages.
         * @param message CopyGuildEnd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.ICopyGuildEnd, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a CopyGuildEnd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CopyGuildEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.CopyGuildEnd;

        /**
         * Creates a CopyGuildEnd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CopyGuildEnd
         */
        public static fromObject(object: { [k: string]: any }): msgProto.CopyGuildEnd;

        /**
         * Creates a plain object from a CopyGuildEnd message. Also converts values to other types if specified.
         * @param message CopyGuildEnd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.CopyGuildEnd, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CopyGuildEnd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CopyGuildCopyAward. */
    interface ICopyGuildCopyAward {

        /** CopyGuildCopyAward type */
        type?: (number|null);

        /** CopyGuildCopyAward typeId */
        typeId?: (number|null);
    }

    /** Represents a CopyGuildCopyAward. */
    class CopyGuildCopyAward implements ICopyGuildCopyAward {

        /**
         * Constructs a new CopyGuildCopyAward.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.ICopyGuildCopyAward);

        /** CopyGuildCopyAward type. */
        public type: number;

        /** CopyGuildCopyAward typeId. */
        public typeId: number;

        /**
         * Encodes the specified CopyGuildCopyAward message. Does not implicitly {@link msgProto.CopyGuildCopyAward.verify|verify} messages.
         * @param message CopyGuildCopyAward message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.ICopyGuildCopyAward, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a CopyGuildCopyAward message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CopyGuildCopyAward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.CopyGuildCopyAward;

        /**
         * Creates a CopyGuildCopyAward message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CopyGuildCopyAward
         */
        public static fromObject(object: { [k: string]: any }): msgProto.CopyGuildCopyAward;

        /**
         * Creates a plain object from a CopyGuildCopyAward message. Also converts values to other types if specified.
         * @param message CopyGuildCopyAward
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.CopyGuildCopyAward, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CopyGuildCopyAward to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CopyGuildCopyReset. */
    interface ICopyGuildCopyReset {
    }

    /** Represents a CopyGuildCopyReset. */
    class CopyGuildCopyReset implements ICopyGuildCopyReset {

        /**
         * Constructs a new CopyGuildCopyReset.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.ICopyGuildCopyReset);

        /**
         * Encodes the specified CopyGuildCopyReset message. Does not implicitly {@link msgProto.CopyGuildCopyReset.verify|verify} messages.
         * @param message CopyGuildCopyReset message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.ICopyGuildCopyReset, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a CopyGuildCopyReset message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CopyGuildCopyReset
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.CopyGuildCopyReset;

        /**
         * Creates a CopyGuildCopyReset message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CopyGuildCopyReset
         */
        public static fromObject(object: { [k: string]: any }): msgProto.CopyGuildCopyReset;

        /**
         * Creates a plain object from a CopyGuildCopyReset message. Also converts values to other types if specified.
         * @param message CopyGuildCopyReset
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.CopyGuildCopyReset, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CopyGuildCopyReset to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CopyClearGuildCopy. */
    interface ICopyClearGuildCopy {

        /** CopyClearGuildCopy bossId */
        bossId?: (number|null);
    }

    /** Represents a CopyClearGuildCopy. */
    class CopyClearGuildCopy implements ICopyClearGuildCopy {

        /**
         * Constructs a new CopyClearGuildCopy.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.ICopyClearGuildCopy);

        /** CopyClearGuildCopy bossId. */
        public bossId: number;

        /**
         * Encodes the specified CopyClearGuildCopy message. Does not implicitly {@link msgProto.CopyClearGuildCopy.verify|verify} messages.
         * @param message CopyClearGuildCopy message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.ICopyClearGuildCopy, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a CopyClearGuildCopy message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CopyClearGuildCopy
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.CopyClearGuildCopy;

        /**
         * Creates a CopyClearGuildCopy message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CopyClearGuildCopy
         */
        public static fromObject(object: { [k: string]: any }): msgProto.CopyClearGuildCopy;

        /**
         * Creates a plain object from a CopyClearGuildCopy message. Also converts values to other types if specified.
         * @param message CopyClearGuildCopy
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.CopyClearGuildCopy, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CopyClearGuildCopy to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CopyPaTaAward. */
    interface ICopyPaTaAward {

        /** CopyPaTaAward copyId */
        copyId?: (number|null);
    }

    /** Represents a CopyPaTaAward. */
    class CopyPaTaAward implements ICopyPaTaAward {

        /**
         * Constructs a new CopyPaTaAward.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.ICopyPaTaAward);

        /** CopyPaTaAward copyId. */
        public copyId: number;

        /**
         * Encodes the specified CopyPaTaAward message. Does not implicitly {@link msgProto.CopyPaTaAward.verify|verify} messages.
         * @param message CopyPaTaAward message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.ICopyPaTaAward, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a CopyPaTaAward message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CopyPaTaAward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.CopyPaTaAward;

        /**
         * Creates a CopyPaTaAward message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CopyPaTaAward
         */
        public static fromObject(object: { [k: string]: any }): msgProto.CopyPaTaAward;

        /**
         * Creates a plain object from a CopyPaTaAward message. Also converts values to other types if specified.
         * @param message CopyPaTaAward
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.CopyPaTaAward, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CopyPaTaAward to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CopyPaTaTreasury. */
    interface ICopyPaTaTreasury {
    }

    /** Represents a CopyPaTaTreasury. */
    class CopyPaTaTreasury implements ICopyPaTaTreasury {

        /**
         * Constructs a new CopyPaTaTreasury.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.ICopyPaTaTreasury);

        /**
         * Encodes the specified CopyPaTaTreasury message. Does not implicitly {@link msgProto.CopyPaTaTreasury.verify|verify} messages.
         * @param message CopyPaTaTreasury message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.ICopyPaTaTreasury, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a CopyPaTaTreasury message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CopyPaTaTreasury
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.CopyPaTaTreasury;

        /**
         * Creates a CopyPaTaTreasury message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CopyPaTaTreasury
         */
        public static fromObject(object: { [k: string]: any }): msgProto.CopyPaTaTreasury;

        /**
         * Creates a plain object from a CopyPaTaTreasury message. Also converts values to other types if specified.
         * @param message CopyPaTaTreasury
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.CopyPaTaTreasury, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CopyPaTaTreasury to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChallengeCupGetInfo. */
    interface IChallengeCupGetInfo {
    }

    /** Represents a ChallengeCupGetInfo. */
    class ChallengeCupGetInfo implements IChallengeCupGetInfo {

        /**
         * Constructs a new ChallengeCupGetInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IChallengeCupGetInfo);

        /**
         * Encodes the specified ChallengeCupGetInfo message. Does not implicitly {@link msgProto.ChallengeCupGetInfo.verify|verify} messages.
         * @param message ChallengeCupGetInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IChallengeCupGetInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ChallengeCupGetInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChallengeCupGetInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.ChallengeCupGetInfo;

        /**
         * Creates a ChallengeCupGetInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChallengeCupGetInfo
         */
        public static fromObject(object: { [k: string]: any }): msgProto.ChallengeCupGetInfo;

        /**
         * Creates a plain object from a ChallengeCupGetInfo message. Also converts values to other types if specified.
         * @param message ChallengeCupGetInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.ChallengeCupGetInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChallengeCupGetInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChallengeCupStartFight. */
    interface IChallengeCupStartFight {

        /** ChallengeCupStartFight championUserId */
        championUserId?: (number|Long|null);
    }

    /** Represents a ChallengeCupStartFight. */
    class ChallengeCupStartFight implements IChallengeCupStartFight {

        /**
         * Constructs a new ChallengeCupStartFight.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IChallengeCupStartFight);

        /** ChallengeCupStartFight championUserId. */
        public championUserId: (number|Long);

        /**
         * Encodes the specified ChallengeCupStartFight message. Does not implicitly {@link msgProto.ChallengeCupStartFight.verify|verify} messages.
         * @param message ChallengeCupStartFight message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IChallengeCupStartFight, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ChallengeCupStartFight message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChallengeCupStartFight
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.ChallengeCupStartFight;

        /**
         * Creates a ChallengeCupStartFight message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChallengeCupStartFight
         */
        public static fromObject(object: { [k: string]: any }): msgProto.ChallengeCupStartFight;

        /**
         * Creates a plain object from a ChallengeCupStartFight message. Also converts values to other types if specified.
         * @param message ChallengeCupStartFight
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.ChallengeCupStartFight, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChallengeCupStartFight to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChallengeCupEndFight. */
    interface IChallengeCupEndFight {

        /** ChallengeCupEndFight isWin */
        isWin?: (boolean|null);
    }

    /** Represents a ChallengeCupEndFight. */
    class ChallengeCupEndFight implements IChallengeCupEndFight {

        /**
         * Constructs a new ChallengeCupEndFight.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IChallengeCupEndFight);

        /** ChallengeCupEndFight isWin. */
        public isWin: boolean;

        /**
         * Encodes the specified ChallengeCupEndFight message. Does not implicitly {@link msgProto.ChallengeCupEndFight.verify|verify} messages.
         * @param message ChallengeCupEndFight message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IChallengeCupEndFight, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ChallengeCupEndFight message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChallengeCupEndFight
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.ChallengeCupEndFight;

        /**
         * Creates a ChallengeCupEndFight message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChallengeCupEndFight
         */
        public static fromObject(object: { [k: string]: any }): msgProto.ChallengeCupEndFight;

        /**
         * Creates a plain object from a ChallengeCupEndFight message. Also converts values to other types if specified.
         * @param message ChallengeCupEndFight
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.ChallengeCupEndFight, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChallengeCupEndFight to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChallengeCupClearCd. */
    interface IChallengeCupClearCd {
    }

    /** Represents a ChallengeCupClearCd. */
    class ChallengeCupClearCd implements IChallengeCupClearCd {

        /**
         * Constructs a new ChallengeCupClearCd.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IChallengeCupClearCd);

        /**
         * Encodes the specified ChallengeCupClearCd message. Does not implicitly {@link msgProto.ChallengeCupClearCd.verify|verify} messages.
         * @param message ChallengeCupClearCd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IChallengeCupClearCd, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ChallengeCupClearCd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChallengeCupClearCd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.ChallengeCupClearCd;

        /**
         * Creates a ChallengeCupClearCd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChallengeCupClearCd
         */
        public static fromObject(object: { [k: string]: any }): msgProto.ChallengeCupClearCd;

        /**
         * Creates a plain object from a ChallengeCupClearCd message. Also converts values to other types if specified.
         * @param message ChallengeCupClearCd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.ChallengeCupClearCd, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChallengeCupClearCd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChallengeCupToBeChampion. */
    interface IChallengeCupToBeChampion {
    }

    /** Represents a ChallengeCupToBeChampion. */
    class ChallengeCupToBeChampion implements IChallengeCupToBeChampion {

        /**
         * Constructs a new ChallengeCupToBeChampion.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IChallengeCupToBeChampion);

        /**
         * Encodes the specified ChallengeCupToBeChampion message. Does not implicitly {@link msgProto.ChallengeCupToBeChampion.verify|verify} messages.
         * @param message ChallengeCupToBeChampion message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IChallengeCupToBeChampion, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ChallengeCupToBeChampion message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChallengeCupToBeChampion
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.ChallengeCupToBeChampion;

        /**
         * Creates a ChallengeCupToBeChampion message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChallengeCupToBeChampion
         */
        public static fromObject(object: { [k: string]: any }): msgProto.ChallengeCupToBeChampion;

        /**
         * Creates a plain object from a ChallengeCupToBeChampion message. Also converts values to other types if specified.
         * @param message ChallengeCupToBeChampion
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.ChallengeCupToBeChampion, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChallengeCupToBeChampion to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChallengeCupGetDurationTimeRankList. */
    interface IChallengeCupGetDurationTimeRankList {
    }

    /** Represents a ChallengeCupGetDurationTimeRankList. */
    class ChallengeCupGetDurationTimeRankList implements IChallengeCupGetDurationTimeRankList {

        /**
         * Constructs a new ChallengeCupGetDurationTimeRankList.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IChallengeCupGetDurationTimeRankList);

        /**
         * Encodes the specified ChallengeCupGetDurationTimeRankList message. Does not implicitly {@link msgProto.ChallengeCupGetDurationTimeRankList.verify|verify} messages.
         * @param message ChallengeCupGetDurationTimeRankList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IChallengeCupGetDurationTimeRankList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ChallengeCupGetDurationTimeRankList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChallengeCupGetDurationTimeRankList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.ChallengeCupGetDurationTimeRankList;

        /**
         * Creates a ChallengeCupGetDurationTimeRankList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChallengeCupGetDurationTimeRankList
         */
        public static fromObject(object: { [k: string]: any }): msgProto.ChallengeCupGetDurationTimeRankList;

        /**
         * Creates a plain object from a ChallengeCupGetDurationTimeRankList message. Also converts values to other types if specified.
         * @param message ChallengeCupGetDurationTimeRankList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.ChallengeCupGetDurationTimeRankList, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChallengeCupGetDurationTimeRankList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChallengeCupGetIsOpen. */
    interface IChallengeCupGetIsOpen {
    }

    /** Represents a ChallengeCupGetIsOpen. */
    class ChallengeCupGetIsOpen implements IChallengeCupGetIsOpen {

        /**
         * Constructs a new ChallengeCupGetIsOpen.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IChallengeCupGetIsOpen);

        /**
         * Encodes the specified ChallengeCupGetIsOpen message. Does not implicitly {@link msgProto.ChallengeCupGetIsOpen.verify|verify} messages.
         * @param message ChallengeCupGetIsOpen message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IChallengeCupGetIsOpen, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ChallengeCupGetIsOpen message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChallengeCupGetIsOpen
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.ChallengeCupGetIsOpen;

        /**
         * Creates a ChallengeCupGetIsOpen message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChallengeCupGetIsOpen
         */
        public static fromObject(object: { [k: string]: any }): msgProto.ChallengeCupGetIsOpen;

        /**
         * Creates a plain object from a ChallengeCupGetIsOpen message. Also converts values to other types if specified.
         * @param message ChallengeCupGetIsOpen
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.ChallengeCupGetIsOpen, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChallengeCupGetIsOpen to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChallengeCupOp. */
    interface IChallengeCupOp {

        /** ChallengeCupOp op */
        op?: (number|null);
    }

    /** Represents a ChallengeCupOp. */
    class ChallengeCupOp implements IChallengeCupOp {

        /**
         * Constructs a new ChallengeCupOp.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IChallengeCupOp);

        /** ChallengeCupOp op. */
        public op: number;

        /**
         * Encodes the specified ChallengeCupOp message. Does not implicitly {@link msgProto.ChallengeCupOp.verify|verify} messages.
         * @param message ChallengeCupOp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IChallengeCupOp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ChallengeCupOp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChallengeCupOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.ChallengeCupOp;

        /**
         * Creates a ChallengeCupOp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChallengeCupOp
         */
        public static fromObject(object: { [k: string]: any }): msgProto.ChallengeCupOp;

        /**
         * Creates a plain object from a ChallengeCupOp message. Also converts values to other types if specified.
         * @param message ChallengeCupOp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.ChallengeCupOp, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChallengeCupOp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CrystalGetInfo. */
    interface ICrystalGetInfo {
    }

    /** Represents a CrystalGetInfo. */
    class CrystalGetInfo implements ICrystalGetInfo {

        /**
         * Constructs a new CrystalGetInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.ICrystalGetInfo);

        /**
         * Encodes the specified CrystalGetInfo message. Does not implicitly {@link msgProto.CrystalGetInfo.verify|verify} messages.
         * @param message CrystalGetInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.ICrystalGetInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a CrystalGetInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CrystalGetInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.CrystalGetInfo;

        /**
         * Creates a CrystalGetInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CrystalGetInfo
         */
        public static fromObject(object: { [k: string]: any }): msgProto.CrystalGetInfo;

        /**
         * Creates a plain object from a CrystalGetInfo message. Also converts values to other types if specified.
         * @param message CrystalGetInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.CrystalGetInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CrystalGetInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CrystalSaveProgress. */
    interface ICrystalSaveProgress {

        /** CrystalSaveProgress hp */
        hp?: (number|null);

        /** CrystalSaveProgress hpNum */
        hpNum?: (number|null);

        /** CrystalSaveProgress nextReplayTime */
        nextReplayTime?: (number|null);
    }

    /** Represents a CrystalSaveProgress. */
    class CrystalSaveProgress implements ICrystalSaveProgress {

        /**
         * Constructs a new CrystalSaveProgress.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.ICrystalSaveProgress);

        /** CrystalSaveProgress hp. */
        public hp: number;

        /** CrystalSaveProgress hpNum. */
        public hpNum: number;

        /** CrystalSaveProgress nextReplayTime. */
        public nextReplayTime: number;

        /**
         * Encodes the specified CrystalSaveProgress message. Does not implicitly {@link msgProto.CrystalSaveProgress.verify|verify} messages.
         * @param message CrystalSaveProgress message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.ICrystalSaveProgress, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a CrystalSaveProgress message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CrystalSaveProgress
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.CrystalSaveProgress;

        /**
         * Creates a CrystalSaveProgress message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CrystalSaveProgress
         */
        public static fromObject(object: { [k: string]: any }): msgProto.CrystalSaveProgress;

        /**
         * Creates a plain object from a CrystalSaveProgress message. Also converts values to other types if specified.
         * @param message CrystalSaveProgress
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.CrystalSaveProgress, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CrystalSaveProgress to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CrystalFinish. */
    interface ICrystalFinish {

        /** CrystalFinish crystalId */
        crystalId?: (number|null);
    }

    /** Represents a CrystalFinish. */
    class CrystalFinish implements ICrystalFinish {

        /**
         * Constructs a new CrystalFinish.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.ICrystalFinish);

        /** CrystalFinish crystalId. */
        public crystalId: number;

        /**
         * Encodes the specified CrystalFinish message. Does not implicitly {@link msgProto.CrystalFinish.verify|verify} messages.
         * @param message CrystalFinish message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.ICrystalFinish, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a CrystalFinish message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CrystalFinish
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.CrystalFinish;

        /**
         * Creates a CrystalFinish message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CrystalFinish
         */
        public static fromObject(object: { [k: string]: any }): msgProto.CrystalFinish;

        /**
         * Creates a plain object from a CrystalFinish message. Also converts values to other types if specified.
         * @param message CrystalFinish
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.CrystalFinish, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CrystalFinish to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CrystalPickAward. */
    interface ICrystalPickAward {

        /** CrystalPickAward crystalId */
        crystalId?: (number|null);
    }

    /** Represents a CrystalPickAward. */
    class CrystalPickAward implements ICrystalPickAward {

        /**
         * Constructs a new CrystalPickAward.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.ICrystalPickAward);

        /** CrystalPickAward crystalId. */
        public crystalId: number;

        /**
         * Encodes the specified CrystalPickAward message. Does not implicitly {@link msgProto.CrystalPickAward.verify|verify} messages.
         * @param message CrystalPickAward message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.ICrystalPickAward, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a CrystalPickAward message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CrystalPickAward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.CrystalPickAward;

        /**
         * Creates a CrystalPickAward message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CrystalPickAward
         */
        public static fromObject(object: { [k: string]: any }): msgProto.CrystalPickAward;

        /**
         * Creates a plain object from a CrystalPickAward message. Also converts values to other types if specified.
         * @param message CrystalPickAward
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.CrystalPickAward, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CrystalPickAward to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CrystalUseSkill. */
    interface ICrystalUseSkill {

        /** CrystalUseSkill index */
        index?: (number|null);
    }

    /** Represents a CrystalUseSkill. */
    class CrystalUseSkill implements ICrystalUseSkill {

        /**
         * Constructs a new CrystalUseSkill.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.ICrystalUseSkill);

        /** CrystalUseSkill index. */
        public index: number;

        /**
         * Encodes the specified CrystalUseSkill message. Does not implicitly {@link msgProto.CrystalUseSkill.verify|verify} messages.
         * @param message CrystalUseSkill message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.ICrystalUseSkill, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a CrystalUseSkill message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CrystalUseSkill
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.CrystalUseSkill;

        /**
         * Creates a CrystalUseSkill message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CrystalUseSkill
         */
        public static fromObject(object: { [k: string]: any }): msgProto.CrystalUseSkill;

        /**
         * Creates a plain object from a CrystalUseSkill message. Also converts values to other types if specified.
         * @param message CrystalUseSkill
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.CrystalUseSkill, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CrystalUseSkill to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CrystalRefreshSkillCd. */
    interface ICrystalRefreshSkillCd {

        /** CrystalRefreshSkillCd index */
        index?: (number|null);
    }

    /** Represents a CrystalRefreshSkillCd. */
    class CrystalRefreshSkillCd implements ICrystalRefreshSkillCd {

        /**
         * Constructs a new CrystalRefreshSkillCd.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.ICrystalRefreshSkillCd);

        /** CrystalRefreshSkillCd index. */
        public index: number;

        /**
         * Encodes the specified CrystalRefreshSkillCd message. Does not implicitly {@link msgProto.CrystalRefreshSkillCd.verify|verify} messages.
         * @param message CrystalRefreshSkillCd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.ICrystalRefreshSkillCd, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a CrystalRefreshSkillCd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CrystalRefreshSkillCd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.CrystalRefreshSkillCd;

        /**
         * Creates a CrystalRefreshSkillCd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CrystalRefreshSkillCd
         */
        public static fromObject(object: { [k: string]: any }): msgProto.CrystalRefreshSkillCd;

        /**
         * Creates a plain object from a CrystalRefreshSkillCd message. Also converts values to other types if specified.
         * @param message CrystalRefreshSkillCd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.CrystalRefreshSkillCd, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CrystalRefreshSkillCd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RankGetRankList. */
    interface IRankGetRankList {

        /** RankGetRankList rankType */
        rankType?: (number|null);
    }

    /** Represents a RankGetRankList. */
    class RankGetRankList implements IRankGetRankList {

        /**
         * Constructs a new RankGetRankList.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IRankGetRankList);

        /** RankGetRankList rankType. */
        public rankType: number;

        /**
         * Encodes the specified RankGetRankList message. Does not implicitly {@link msgProto.RankGetRankList.verify|verify} messages.
         * @param message RankGetRankList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IRankGetRankList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RankGetRankList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RankGetRankList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.RankGetRankList;

        /**
         * Creates a RankGetRankList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RankGetRankList
         */
        public static fromObject(object: { [k: string]: any }): msgProto.RankGetRankList;

        /**
         * Creates a plain object from a RankGetRankList message. Also converts values to other types if specified.
         * @param message RankGetRankList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.RankGetRankList, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RankGetRankList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RankGetUserRank. */
    interface IRankGetUserRank {

        /** RankGetUserRank rankType */
        rankType?: (number|null);
    }

    /** Represents a RankGetUserRank. */
    class RankGetUserRank implements IRankGetUserRank {

        /**
         * Constructs a new RankGetUserRank.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IRankGetUserRank);

        /** RankGetUserRank rankType. */
        public rankType: number;

        /**
         * Encodes the specified RankGetUserRank message. Does not implicitly {@link msgProto.RankGetUserRank.verify|verify} messages.
         * @param message RankGetUserRank message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IRankGetUserRank, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RankGetUserRank message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RankGetUserRank
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.RankGetUserRank;

        /**
         * Creates a RankGetUserRank message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RankGetUserRank
         */
        public static fromObject(object: { [k: string]: any }): msgProto.RankGetUserRank;

        /**
         * Creates a plain object from a RankGetUserRank message. Also converts values to other types if specified.
         * @param message RankGetUserRank
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.RankGetUserRank, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RankGetUserRank to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RankAllRankArr. */
    interface IRankAllRankArr {

        /** RankAllRankArr rankType */
        rankType?: (number|null);
    }

    /** Represents a RankAllRankArr. */
    class RankAllRankArr implements IRankAllRankArr {

        /**
         * Constructs a new RankAllRankArr.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IRankAllRankArr);

        /** RankAllRankArr rankType. */
        public rankType: number;

        /**
         * Encodes the specified RankAllRankArr message. Does not implicitly {@link msgProto.RankAllRankArr.verify|verify} messages.
         * @param message RankAllRankArr message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IRankAllRankArr, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RankAllRankArr message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RankAllRankArr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.RankAllRankArr;

        /**
         * Creates a RankAllRankArr message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RankAllRankArr
         */
        public static fromObject(object: { [k: string]: any }): msgProto.RankAllRankArr;

        /**
         * Creates a plain object from a RankAllRankArr message. Also converts values to other types if specified.
         * @param message RankAllRankArr
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.RankAllRankArr, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RankAllRankArr to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RankGetGuildRank. */
    interface IRankGetGuildRank {

        /** RankGetGuildRank rankType */
        rankType?: (number|null);
    }

    /** Represents a RankGetGuildRank. */
    class RankGetGuildRank implements IRankGetGuildRank {

        /**
         * Constructs a new RankGetGuildRank.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IRankGetGuildRank);

        /** RankGetGuildRank rankType. */
        public rankType: number;

        /**
         * Encodes the specified RankGetGuildRank message. Does not implicitly {@link msgProto.RankGetGuildRank.verify|verify} messages.
         * @param message RankGetGuildRank message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IRankGetGuildRank, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RankGetGuildRank message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RankGetGuildRank
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.RankGetGuildRank;

        /**
         * Creates a RankGetGuildRank message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RankGetGuildRank
         */
        public static fromObject(object: { [k: string]: any }): msgProto.RankGetGuildRank;

        /**
         * Creates a plain object from a RankGetGuildRank message. Also converts values to other types if specified.
         * @param message RankGetGuildRank
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.RankGetGuildRank, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RankGetGuildRank to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RebirthRebirth. */
    interface IRebirthRebirth {
    }

    /** Represents a RebirthRebirth. */
    class RebirthRebirth implements IRebirthRebirth {

        /**
         * Constructs a new RebirthRebirth.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IRebirthRebirth);

        /**
         * Encodes the specified RebirthRebirth message. Does not implicitly {@link msgProto.RebirthRebirth.verify|verify} messages.
         * @param message RebirthRebirth message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IRebirthRebirth, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RebirthRebirth message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RebirthRebirth
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.RebirthRebirth;

        /**
         * Creates a RebirthRebirth message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RebirthRebirth
         */
        public static fromObject(object: { [k: string]: any }): msgProto.RebirthRebirth;

        /**
         * Creates a plain object from a RebirthRebirth message. Also converts values to other types if specified.
         * @param message RebirthRebirth
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.RebirthRebirth, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RebirthRebirth to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RebirthBuyRebirth. */
    interface IRebirthBuyRebirth {

        /** RebirthBuyRebirth index */
        index?: (number|null);

        /** RebirthBuyRebirth num */
        num?: (number|null);
    }

    /** Represents a RebirthBuyRebirth. */
    class RebirthBuyRebirth implements IRebirthBuyRebirth {

        /**
         * Constructs a new RebirthBuyRebirth.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IRebirthBuyRebirth);

        /** RebirthBuyRebirth index. */
        public index: number;

        /** RebirthBuyRebirth num. */
        public num: number;

        /**
         * Encodes the specified RebirthBuyRebirth message. Does not implicitly {@link msgProto.RebirthBuyRebirth.verify|verify} messages.
         * @param message RebirthBuyRebirth message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IRebirthBuyRebirth, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RebirthBuyRebirth message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RebirthBuyRebirth
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.RebirthBuyRebirth;

        /**
         * Creates a RebirthBuyRebirth message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RebirthBuyRebirth
         */
        public static fromObject(object: { [k: string]: any }): msgProto.RebirthBuyRebirth;

        /**
         * Creates a plain object from a RebirthBuyRebirth message. Also converts values to other types if specified.
         * @param message RebirthBuyRebirth
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.RebirthBuyRebirth, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RebirthBuyRebirth to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RechargeGetInfo. */
    interface IRechargeGetInfo {
    }

    /** Represents a RechargeGetInfo. */
    class RechargeGetInfo implements IRechargeGetInfo {

        /**
         * Constructs a new RechargeGetInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IRechargeGetInfo);

        /**
         * Encodes the specified RechargeGetInfo message. Does not implicitly {@link msgProto.RechargeGetInfo.verify|verify} messages.
         * @param message RechargeGetInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IRechargeGetInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RechargeGetInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RechargeGetInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.RechargeGetInfo;

        /**
         * Creates a RechargeGetInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RechargeGetInfo
         */
        public static fromObject(object: { [k: string]: any }): msgProto.RechargeGetInfo;

        /**
         * Creates a plain object from a RechargeGetInfo message. Also converts values to other types if specified.
         * @param message RechargeGetInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.RechargeGetInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RechargeGetInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RechargeRecharge. */
    interface IRechargeRecharge {

        /** RechargeRecharge rechargeId */
        rechargeId?: (number|null);

        /** RechargeRecharge channelId */
        channelId?: (number|null);

        /** RechargeRecharge receiptData */
        receiptData?: (string|null);
    }

    /** Represents a RechargeRecharge. */
    class RechargeRecharge implements IRechargeRecharge {

        /**
         * Constructs a new RechargeRecharge.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IRechargeRecharge);

        /** RechargeRecharge rechargeId. */
        public rechargeId: number;

        /** RechargeRecharge channelId. */
        public channelId: number;

        /** RechargeRecharge receiptData. */
        public receiptData: string;

        /**
         * Encodes the specified RechargeRecharge message. Does not implicitly {@link msgProto.RechargeRecharge.verify|verify} messages.
         * @param message RechargeRecharge message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IRechargeRecharge, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RechargeRecharge message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RechargeRecharge
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.RechargeRecharge;

        /**
         * Creates a RechargeRecharge message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RechargeRecharge
         */
        public static fromObject(object: { [k: string]: any }): msgProto.RechargeRecharge;

        /**
         * Creates a plain object from a RechargeRecharge message. Also converts values to other types if specified.
         * @param message RechargeRecharge
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.RechargeRecharge, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RechargeRecharge to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RechargeGetTodayCount. */
    interface IRechargeGetTodayCount {
    }

    /** Represents a RechargeGetTodayCount. */
    class RechargeGetTodayCount implements IRechargeGetTodayCount {

        /**
         * Constructs a new RechargeGetTodayCount.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IRechargeGetTodayCount);

        /**
         * Encodes the specified RechargeGetTodayCount message. Does not implicitly {@link msgProto.RechargeGetTodayCount.verify|verify} messages.
         * @param message RechargeGetTodayCount message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IRechargeGetTodayCount, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RechargeGetTodayCount message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RechargeGetTodayCount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.RechargeGetTodayCount;

        /**
         * Creates a RechargeGetTodayCount message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RechargeGetTodayCount
         */
        public static fromObject(object: { [k: string]: any }): msgProto.RechargeGetTodayCount;

        /**
         * Creates a plain object from a RechargeGetTodayCount message. Also converts values to other types if specified.
         * @param message RechargeGetTodayCount
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.RechargeGetTodayCount, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RechargeGetTodayCount to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RechargeGetAllCount. */
    interface IRechargeGetAllCount {
    }

    /** Represents a RechargeGetAllCount. */
    class RechargeGetAllCount implements IRechargeGetAllCount {

        /**
         * Constructs a new RechargeGetAllCount.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IRechargeGetAllCount);

        /**
         * Encodes the specified RechargeGetAllCount message. Does not implicitly {@link msgProto.RechargeGetAllCount.verify|verify} messages.
         * @param message RechargeGetAllCount message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IRechargeGetAllCount, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RechargeGetAllCount message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RechargeGetAllCount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.RechargeGetAllCount;

        /**
         * Creates a RechargeGetAllCount message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RechargeGetAllCount
         */
        public static fromObject(object: { [k: string]: any }): msgProto.RechargeGetAllCount;

        /**
         * Creates a plain object from a RechargeGetAllCount message. Also converts values to other types if specified.
         * @param message RechargeGetAllCount
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.RechargeGetAllCount, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RechargeGetAllCount to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RechargeGetRequest. */
    interface IRechargeGetRequest {

        /** RechargeGetRequest rechargeId */
        rechargeId?: (number|null);

        /** RechargeGetRequest goodsId */
        goodsId?: (number|null);
    }

    /** Represents a RechargeGetRequest. */
    class RechargeGetRequest implements IRechargeGetRequest {

        /**
         * Constructs a new RechargeGetRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IRechargeGetRequest);

        /** RechargeGetRequest rechargeId. */
        public rechargeId: number;

        /** RechargeGetRequest goodsId. */
        public goodsId: number;

        /**
         * Encodes the specified RechargeGetRequest message. Does not implicitly {@link msgProto.RechargeGetRequest.verify|verify} messages.
         * @param message RechargeGetRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IRechargeGetRequest, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RechargeGetRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RechargeGetRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.RechargeGetRequest;

        /**
         * Creates a RechargeGetRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RechargeGetRequest
         */
        public static fromObject(object: { [k: string]: any }): msgProto.RechargeGetRequest;

        /**
         * Creates a plain object from a RechargeGetRequest message. Also converts values to other types if specified.
         * @param message RechargeGetRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.RechargeGetRequest, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RechargeGetRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RechargeHandleRequest. */
    interface IRechargeHandleRequest {
    }

    /** Represents a RechargeHandleRequest. */
    class RechargeHandleRequest implements IRechargeHandleRequest {

        /**
         * Constructs a new RechargeHandleRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IRechargeHandleRequest);

        /**
         * Encodes the specified RechargeHandleRequest message. Does not implicitly {@link msgProto.RechargeHandleRequest.verify|verify} messages.
         * @param message RechargeHandleRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IRechargeHandleRequest, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RechargeHandleRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RechargeHandleRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.RechargeHandleRequest;

        /**
         * Creates a RechargeHandleRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RechargeHandleRequest
         */
        public static fromObject(object: { [k: string]: any }): msgProto.RechargeHandleRequest;

        /**
         * Creates a plain object from a RechargeHandleRequest message. Also converts values to other types if specified.
         * @param message RechargeHandleRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.RechargeHandleRequest, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RechargeHandleRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RedEnvelopeGetList. */
    interface IRedEnvelopeGetList {
    }

    /** Represents a RedEnvelopeGetList. */
    class RedEnvelopeGetList implements IRedEnvelopeGetList {

        /**
         * Constructs a new RedEnvelopeGetList.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IRedEnvelopeGetList);

        /**
         * Encodes the specified RedEnvelopeGetList message. Does not implicitly {@link msgProto.RedEnvelopeGetList.verify|verify} messages.
         * @param message RedEnvelopeGetList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IRedEnvelopeGetList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RedEnvelopeGetList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RedEnvelopeGetList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.RedEnvelopeGetList;

        /**
         * Creates a RedEnvelopeGetList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RedEnvelopeGetList
         */
        public static fromObject(object: { [k: string]: any }): msgProto.RedEnvelopeGetList;

        /**
         * Creates a plain object from a RedEnvelopeGetList message. Also converts values to other types if specified.
         * @param message RedEnvelopeGetList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.RedEnvelopeGetList, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RedEnvelopeGetList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RedEnvelopeSendRedEnvelope. */
    interface IRedEnvelopeSendRedEnvelope {

        /** RedEnvelopeSendRedEnvelope type */
        type?: (number|null);

        /** RedEnvelopeSendRedEnvelope spItemId */
        spItemId?: (number|null);

        /** RedEnvelopeSendRedEnvelope amount */
        amount?: (number|null);

        /** RedEnvelopeSendRedEnvelope personNum */
        personNum?: (number|null);

        /** RedEnvelopeSendRedEnvelope wish */
        wish?: (string|null);
    }

    /** Represents a RedEnvelopeSendRedEnvelope. */
    class RedEnvelopeSendRedEnvelope implements IRedEnvelopeSendRedEnvelope {

        /**
         * Constructs a new RedEnvelopeSendRedEnvelope.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IRedEnvelopeSendRedEnvelope);

        /** RedEnvelopeSendRedEnvelope type. */
        public type: number;

        /** RedEnvelopeSendRedEnvelope spItemId. */
        public spItemId: number;

        /** RedEnvelopeSendRedEnvelope amount. */
        public amount: number;

        /** RedEnvelopeSendRedEnvelope personNum. */
        public personNum: number;

        /** RedEnvelopeSendRedEnvelope wish. */
        public wish: string;

        /**
         * Encodes the specified RedEnvelopeSendRedEnvelope message. Does not implicitly {@link msgProto.RedEnvelopeSendRedEnvelope.verify|verify} messages.
         * @param message RedEnvelopeSendRedEnvelope message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IRedEnvelopeSendRedEnvelope, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RedEnvelopeSendRedEnvelope message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RedEnvelopeSendRedEnvelope
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.RedEnvelopeSendRedEnvelope;

        /**
         * Creates a RedEnvelopeSendRedEnvelope message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RedEnvelopeSendRedEnvelope
         */
        public static fromObject(object: { [k: string]: any }): msgProto.RedEnvelopeSendRedEnvelope;

        /**
         * Creates a plain object from a RedEnvelopeSendRedEnvelope message. Also converts values to other types if specified.
         * @param message RedEnvelopeSendRedEnvelope
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.RedEnvelopeSendRedEnvelope, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RedEnvelopeSendRedEnvelope to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RedEnvelopeSyncRedEnvelope. */
    interface IRedEnvelopeSyncRedEnvelope {
    }

    /** Represents a RedEnvelopeSyncRedEnvelope. */
    class RedEnvelopeSyncRedEnvelope implements IRedEnvelopeSyncRedEnvelope {

        /**
         * Constructs a new RedEnvelopeSyncRedEnvelope.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IRedEnvelopeSyncRedEnvelope);

        /**
         * Encodes the specified RedEnvelopeSyncRedEnvelope message. Does not implicitly {@link msgProto.RedEnvelopeSyncRedEnvelope.verify|verify} messages.
         * @param message RedEnvelopeSyncRedEnvelope message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IRedEnvelopeSyncRedEnvelope, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RedEnvelopeSyncRedEnvelope message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RedEnvelopeSyncRedEnvelope
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.RedEnvelopeSyncRedEnvelope;

        /**
         * Creates a RedEnvelopeSyncRedEnvelope message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RedEnvelopeSyncRedEnvelope
         */
        public static fromObject(object: { [k: string]: any }): msgProto.RedEnvelopeSyncRedEnvelope;

        /**
         * Creates a plain object from a RedEnvelopeSyncRedEnvelope message. Also converts values to other types if specified.
         * @param message RedEnvelopeSyncRedEnvelope
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.RedEnvelopeSyncRedEnvelope, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RedEnvelopeSyncRedEnvelope to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RedEnvelopeGetNewList. */
    interface IRedEnvelopeGetNewList {

        /** RedEnvelopeGetNewList lastId */
        lastId?: (number|null);
    }

    /** Represents a RedEnvelopeGetNewList. */
    class RedEnvelopeGetNewList implements IRedEnvelopeGetNewList {

        /**
         * Constructs a new RedEnvelopeGetNewList.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IRedEnvelopeGetNewList);

        /** RedEnvelopeGetNewList lastId. */
        public lastId: number;

        /**
         * Encodes the specified RedEnvelopeGetNewList message. Does not implicitly {@link msgProto.RedEnvelopeGetNewList.verify|verify} messages.
         * @param message RedEnvelopeGetNewList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IRedEnvelopeGetNewList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RedEnvelopeGetNewList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RedEnvelopeGetNewList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.RedEnvelopeGetNewList;

        /**
         * Creates a RedEnvelopeGetNewList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RedEnvelopeGetNewList
         */
        public static fromObject(object: { [k: string]: any }): msgProto.RedEnvelopeGetNewList;

        /**
         * Creates a plain object from a RedEnvelopeGetNewList message. Also converts values to other types if specified.
         * @param message RedEnvelopeGetNewList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.RedEnvelopeGetNewList, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RedEnvelopeGetNewList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RedEnvelopeReceiveBonus. */
    interface IRedEnvelopeReceiveBonus {

        /** RedEnvelopeReceiveBonus redEnvelopeId */
        redEnvelopeId?: (number|null);
    }

    /** Represents a RedEnvelopeReceiveBonus. */
    class RedEnvelopeReceiveBonus implements IRedEnvelopeReceiveBonus {

        /**
         * Constructs a new RedEnvelopeReceiveBonus.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IRedEnvelopeReceiveBonus);

        /** RedEnvelopeReceiveBonus redEnvelopeId. */
        public redEnvelopeId: number;

        /**
         * Encodes the specified RedEnvelopeReceiveBonus message. Does not implicitly {@link msgProto.RedEnvelopeReceiveBonus.verify|verify} messages.
         * @param message RedEnvelopeReceiveBonus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IRedEnvelopeReceiveBonus, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RedEnvelopeReceiveBonus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RedEnvelopeReceiveBonus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.RedEnvelopeReceiveBonus;

        /**
         * Creates a RedEnvelopeReceiveBonus message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RedEnvelopeReceiveBonus
         */
        public static fromObject(object: { [k: string]: any }): msgProto.RedEnvelopeReceiveBonus;

        /**
         * Creates a plain object from a RedEnvelopeReceiveBonus message. Also converts values to other types if specified.
         * @param message RedEnvelopeReceiveBonus
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.RedEnvelopeReceiveBonus, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RedEnvelopeReceiveBonus to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RedEnvelopePersonalGetInfo. */
    interface IRedEnvelopePersonalGetInfo {
    }

    /** Represents a RedEnvelopePersonalGetInfo. */
    class RedEnvelopePersonalGetInfo implements IRedEnvelopePersonalGetInfo {

        /**
         * Constructs a new RedEnvelopePersonalGetInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IRedEnvelopePersonalGetInfo);

        /**
         * Encodes the specified RedEnvelopePersonalGetInfo message. Does not implicitly {@link msgProto.RedEnvelopePersonalGetInfo.verify|verify} messages.
         * @param message RedEnvelopePersonalGetInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IRedEnvelopePersonalGetInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RedEnvelopePersonalGetInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RedEnvelopePersonalGetInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.RedEnvelopePersonalGetInfo;

        /**
         * Creates a RedEnvelopePersonalGetInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RedEnvelopePersonalGetInfo
         */
        public static fromObject(object: { [k: string]: any }): msgProto.RedEnvelopePersonalGetInfo;

        /**
         * Creates a plain object from a RedEnvelopePersonalGetInfo message. Also converts values to other types if specified.
         * @param message RedEnvelopePersonalGetInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.RedEnvelopePersonalGetInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RedEnvelopePersonalGetInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChatGetNewList. */
    interface IChatGetNewList {

        /** ChatGetNewList lastId */
        lastId?: (number|null);

        /** ChatGetNewList guildId */
        guildId?: (number|null);

        /** ChatGetNewList guildLastId */
        guildLastId?: (number|null);
    }

    /** Represents a ChatGetNewList. */
    class ChatGetNewList implements IChatGetNewList {

        /**
         * Constructs a new ChatGetNewList.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IChatGetNewList);

        /** ChatGetNewList lastId. */
        public lastId: number;

        /** ChatGetNewList guildId. */
        public guildId: number;

        /** ChatGetNewList guildLastId. */
        public guildLastId: number;

        /**
         * Encodes the specified ChatGetNewList message. Does not implicitly {@link msgProto.ChatGetNewList.verify|verify} messages.
         * @param message ChatGetNewList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IChatGetNewList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ChatGetNewList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChatGetNewList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.ChatGetNewList;

        /**
         * Creates a ChatGetNewList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChatGetNewList
         */
        public static fromObject(object: { [k: string]: any }): msgProto.ChatGetNewList;

        /**
         * Creates a plain object from a ChatGetNewList message. Also converts values to other types if specified.
         * @param message ChatGetNewList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.ChatGetNewList, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChatGetNewList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChatGetNewSysMsgList. */
    interface IChatGetNewSysMsgList {

        /** ChatGetNewSysMsgList lastId */
        lastId?: (number|null);
    }

    /** Represents a ChatGetNewSysMsgList. */
    class ChatGetNewSysMsgList implements IChatGetNewSysMsgList {

        /**
         * Constructs a new ChatGetNewSysMsgList.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IChatGetNewSysMsgList);

        /** ChatGetNewSysMsgList lastId. */
        public lastId: number;

        /**
         * Encodes the specified ChatGetNewSysMsgList message. Does not implicitly {@link msgProto.ChatGetNewSysMsgList.verify|verify} messages.
         * @param message ChatGetNewSysMsgList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IChatGetNewSysMsgList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ChatGetNewSysMsgList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChatGetNewSysMsgList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.ChatGetNewSysMsgList;

        /**
         * Creates a ChatGetNewSysMsgList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChatGetNewSysMsgList
         */
        public static fromObject(object: { [k: string]: any }): msgProto.ChatGetNewSysMsgList;

        /**
         * Creates a plain object from a ChatGetNewSysMsgList message. Also converts values to other types if specified.
         * @param message ChatGetNewSysMsgList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.ChatGetNewSysMsgList, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChatGetNewSysMsgList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChatSendData. */
    interface IChatSendData {

        /** ChatSendData content */
        content?: (string|null);

        /** ChatSendData lastId */
        lastId?: (number|null);

        /** ChatSendData type */
        type?: (number|null);

        /** ChatSendData guildId */
        guildId?: (number|null);

        /** ChatSendData guildLastId */
        guildLastId?: (number|null);

        /** ChatSendData isLittleHorn */
        isLittleHorn?: (boolean|null);
    }

    /** Represents a ChatSendData. */
    class ChatSendData implements IChatSendData {

        /**
         * Constructs a new ChatSendData.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IChatSendData);

        /** ChatSendData content. */
        public content: string;

        /** ChatSendData lastId. */
        public lastId: number;

        /** ChatSendData type. */
        public type: number;

        /** ChatSendData guildId. */
        public guildId: number;

        /** ChatSendData guildLastId. */
        public guildLastId: number;

        /** ChatSendData isLittleHorn. */
        public isLittleHorn: boolean;

        /**
         * Encodes the specified ChatSendData message. Does not implicitly {@link msgProto.ChatSendData.verify|verify} messages.
         * @param message ChatSendData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IChatSendData, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ChatSendData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChatSendData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.ChatSendData;

        /**
         * Creates a ChatSendData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChatSendData
         */
        public static fromObject(object: { [k: string]: any }): msgProto.ChatSendData;

        /**
         * Creates a plain object from a ChatSendData message. Also converts values to other types if specified.
         * @param message ChatSendData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.ChatSendData, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChatSendData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CouponUse. */
    interface ICouponUse {

        /** CouponUse code */
        code?: (string|null);
    }

    /** Represents a CouponUse. */
    class CouponUse implements ICouponUse {

        /**
         * Constructs a new CouponUse.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.ICouponUse);

        /** CouponUse code. */
        public code: string;

        /**
         * Encodes the specified CouponUse message. Does not implicitly {@link msgProto.CouponUse.verify|verify} messages.
         * @param message CouponUse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.ICouponUse, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a CouponUse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CouponUse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.CouponUse;

        /**
         * Creates a CouponUse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CouponUse
         */
        public static fromObject(object: { [k: string]: any }): msgProto.CouponUse;

        /**
         * Creates a plain object from a CouponUse message. Also converts values to other types if specified.
         * @param message CouponUse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.CouponUse, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CouponUse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CoffersGetInfo. */
    interface ICoffersGetInfo {
    }

    /** Represents a CoffersGetInfo. */
    class CoffersGetInfo implements ICoffersGetInfo {

        /**
         * Constructs a new CoffersGetInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.ICoffersGetInfo);

        /**
         * Encodes the specified CoffersGetInfo message. Does not implicitly {@link msgProto.CoffersGetInfo.verify|verify} messages.
         * @param message CoffersGetInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.ICoffersGetInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a CoffersGetInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CoffersGetInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.CoffersGetInfo;

        /**
         * Creates a CoffersGetInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CoffersGetInfo
         */
        public static fromObject(object: { [k: string]: any }): msgProto.CoffersGetInfo;

        /**
         * Creates a plain object from a CoffersGetInfo message. Also converts values to other types if specified.
         * @param message CoffersGetInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.CoffersGetInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CoffersGetInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CoffersBuild. */
    interface ICoffersBuild {
    }

    /** Represents a CoffersBuild. */
    class CoffersBuild implements ICoffersBuild {

        /**
         * Constructs a new CoffersBuild.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.ICoffersBuild);

        /**
         * Encodes the specified CoffersBuild message. Does not implicitly {@link msgProto.CoffersBuild.verify|verify} messages.
         * @param message CoffersBuild message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.ICoffersBuild, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a CoffersBuild message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CoffersBuild
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.CoffersBuild;

        /**
         * Creates a CoffersBuild message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CoffersBuild
         */
        public static fromObject(object: { [k: string]: any }): msgProto.CoffersBuild;

        /**
         * Creates a plain object from a CoffersBuild message. Also converts values to other types if specified.
         * @param message CoffersBuild
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.CoffersBuild, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CoffersBuild to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CoffersAddBuff. */
    interface ICoffersAddBuff {
    }

    /** Represents a CoffersAddBuff. */
    class CoffersAddBuff implements ICoffersAddBuff {

        /**
         * Constructs a new CoffersAddBuff.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.ICoffersAddBuff);

        /**
         * Encodes the specified CoffersAddBuff message. Does not implicitly {@link msgProto.CoffersAddBuff.verify|verify} messages.
         * @param message CoffersAddBuff message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.ICoffersAddBuff, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a CoffersAddBuff message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CoffersAddBuff
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.CoffersAddBuff;

        /**
         * Creates a CoffersAddBuff message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CoffersAddBuff
         */
        public static fromObject(object: { [k: string]: any }): msgProto.CoffersAddBuff;

        /**
         * Creates a plain object from a CoffersAddBuff message. Also converts values to other types if specified.
         * @param message CoffersAddBuff
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.CoffersAddBuff, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CoffersAddBuff to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CoffersGetLootRecordArr. */
    interface ICoffersGetLootRecordArr {
    }

    /** Represents a CoffersGetLootRecordArr. */
    class CoffersGetLootRecordArr implements ICoffersGetLootRecordArr {

        /**
         * Constructs a new CoffersGetLootRecordArr.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.ICoffersGetLootRecordArr);

        /**
         * Encodes the specified CoffersGetLootRecordArr message. Does not implicitly {@link msgProto.CoffersGetLootRecordArr.verify|verify} messages.
         * @param message CoffersGetLootRecordArr message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.ICoffersGetLootRecordArr, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a CoffersGetLootRecordArr message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CoffersGetLootRecordArr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.CoffersGetLootRecordArr;

        /**
         * Creates a CoffersGetLootRecordArr message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CoffersGetLootRecordArr
         */
        public static fromObject(object: { [k: string]: any }): msgProto.CoffersGetLootRecordArr;

        /**
         * Creates a plain object from a CoffersGetLootRecordArr message. Also converts values to other types if specified.
         * @param message CoffersGetLootRecordArr
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.CoffersGetLootRecordArr, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CoffersGetLootRecordArr to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CoffersGetDefeseRecord. */
    interface ICoffersGetDefeseRecord {
    }

    /** Represents a CoffersGetDefeseRecord. */
    class CoffersGetDefeseRecord implements ICoffersGetDefeseRecord {

        /**
         * Constructs a new CoffersGetDefeseRecord.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.ICoffersGetDefeseRecord);

        /**
         * Encodes the specified CoffersGetDefeseRecord message. Does not implicitly {@link msgProto.CoffersGetDefeseRecord.verify|verify} messages.
         * @param message CoffersGetDefeseRecord message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.ICoffersGetDefeseRecord, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a CoffersGetDefeseRecord message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CoffersGetDefeseRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.CoffersGetDefeseRecord;

        /**
         * Creates a CoffersGetDefeseRecord message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CoffersGetDefeseRecord
         */
        public static fromObject(object: { [k: string]: any }): msgProto.CoffersGetDefeseRecord;

        /**
         * Creates a plain object from a CoffersGetDefeseRecord message. Also converts values to other types if specified.
         * @param message CoffersGetDefeseRecord
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.CoffersGetDefeseRecord, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CoffersGetDefeseRecord to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CoffersGetDefeseData. */
    interface ICoffersGetDefeseData {
    }

    /** Represents a CoffersGetDefeseData. */
    class CoffersGetDefeseData implements ICoffersGetDefeseData {

        /**
         * Constructs a new CoffersGetDefeseData.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.ICoffersGetDefeseData);

        /**
         * Encodes the specified CoffersGetDefeseData message. Does not implicitly {@link msgProto.CoffersGetDefeseData.verify|verify} messages.
         * @param message CoffersGetDefeseData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.ICoffersGetDefeseData, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a CoffersGetDefeseData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CoffersGetDefeseData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.CoffersGetDefeseData;

        /**
         * Creates a CoffersGetDefeseData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CoffersGetDefeseData
         */
        public static fromObject(object: { [k: string]: any }): msgProto.CoffersGetDefeseData;

        /**
         * Creates a plain object from a CoffersGetDefeseData message. Also converts values to other types if specified.
         * @param message CoffersGetDefeseData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.CoffersGetDefeseData, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CoffersGetDefeseData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CoffersGetEnemyDefeseData. */
    interface ICoffersGetEnemyDefeseData {

        /** CoffersGetEnemyDefeseData serverId */
        serverId?: (number|null);
    }

    /** Represents a CoffersGetEnemyDefeseData. */
    class CoffersGetEnemyDefeseData implements ICoffersGetEnemyDefeseData {

        /**
         * Constructs a new CoffersGetEnemyDefeseData.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.ICoffersGetEnemyDefeseData);

        /** CoffersGetEnemyDefeseData serverId. */
        public serverId: number;

        /**
         * Encodes the specified CoffersGetEnemyDefeseData message. Does not implicitly {@link msgProto.CoffersGetEnemyDefeseData.verify|verify} messages.
         * @param message CoffersGetEnemyDefeseData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.ICoffersGetEnemyDefeseData, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a CoffersGetEnemyDefeseData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CoffersGetEnemyDefeseData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.CoffersGetEnemyDefeseData;

        /**
         * Creates a CoffersGetEnemyDefeseData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CoffersGetEnemyDefeseData
         */
        public static fromObject(object: { [k: string]: any }): msgProto.CoffersGetEnemyDefeseData;

        /**
         * Creates a plain object from a CoffersGetEnemyDefeseData message. Also converts values to other types if specified.
         * @param message CoffersGetEnemyDefeseData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.CoffersGetEnemyDefeseData, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CoffersGetEnemyDefeseData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CoffersGetServerArr. */
    interface ICoffersGetServerArr {
    }

    /** Represents a CoffersGetServerArr. */
    class CoffersGetServerArr implements ICoffersGetServerArr {

        /**
         * Constructs a new CoffersGetServerArr.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.ICoffersGetServerArr);

        /**
         * Encodes the specified CoffersGetServerArr message. Does not implicitly {@link msgProto.CoffersGetServerArr.verify|verify} messages.
         * @param message CoffersGetServerArr message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.ICoffersGetServerArr, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a CoffersGetServerArr message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CoffersGetServerArr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.CoffersGetServerArr;

        /**
         * Creates a CoffersGetServerArr message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CoffersGetServerArr
         */
        public static fromObject(object: { [k: string]: any }): msgProto.CoffersGetServerArr;

        /**
         * Creates a plain object from a CoffersGetServerArr message. Also converts values to other types if specified.
         * @param message CoffersGetServerArr
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.CoffersGetServerArr, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CoffersGetServerArr to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CoffersFightStart. */
    interface ICoffersFightStart {

        /** CoffersFightStart serverId */
        serverId?: (number|null);

        /** CoffersFightStart door */
        door?: (number|null);
    }

    /** Represents a CoffersFightStart. */
    class CoffersFightStart implements ICoffersFightStart {

        /**
         * Constructs a new CoffersFightStart.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.ICoffersFightStart);

        /** CoffersFightStart serverId. */
        public serverId: number;

        /** CoffersFightStart door. */
        public door: number;

        /**
         * Encodes the specified CoffersFightStart message. Does not implicitly {@link msgProto.CoffersFightStart.verify|verify} messages.
         * @param message CoffersFightStart message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.ICoffersFightStart, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a CoffersFightStart message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CoffersFightStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.CoffersFightStart;

        /**
         * Creates a CoffersFightStart message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CoffersFightStart
         */
        public static fromObject(object: { [k: string]: any }): msgProto.CoffersFightStart;

        /**
         * Creates a plain object from a CoffersFightStart message. Also converts values to other types if specified.
         * @param message CoffersFightStart
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.CoffersFightStart, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CoffersFightStart to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CoffersFightEnd. */
    interface ICoffersFightEnd {

        /** CoffersFightEnd serverId */
        serverId?: (number|null);

        /** CoffersFightEnd door */
        door?: (number|null);

        /** CoffersFightEnd isWin */
        isWin?: (boolean|null);

        /** CoffersFightEnd fightData */
        fightData?: (string|null);
    }

    /** Represents a CoffersFightEnd. */
    class CoffersFightEnd implements ICoffersFightEnd {

        /**
         * Constructs a new CoffersFightEnd.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.ICoffersFightEnd);

        /** CoffersFightEnd serverId. */
        public serverId: number;

        /** CoffersFightEnd door. */
        public door: number;

        /** CoffersFightEnd isWin. */
        public isWin: boolean;

        /** CoffersFightEnd fightData. */
        public fightData: string;

        /**
         * Encodes the specified CoffersFightEnd message. Does not implicitly {@link msgProto.CoffersFightEnd.verify|verify} messages.
         * @param message CoffersFightEnd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.ICoffersFightEnd, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a CoffersFightEnd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CoffersFightEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.CoffersFightEnd;

        /**
         * Creates a CoffersFightEnd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CoffersFightEnd
         */
        public static fromObject(object: { [k: string]: any }): msgProto.CoffersFightEnd;

        /**
         * Creates a plain object from a CoffersFightEnd message. Also converts values to other types if specified.
         * @param message CoffersFightEnd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.CoffersFightEnd, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CoffersFightEnd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CoffersFightCoffersStart. */
    interface ICoffersFightCoffersStart {

        /** CoffersFightCoffersStart serverId */
        serverId?: (number|null);
    }

    /** Represents a CoffersFightCoffersStart. */
    class CoffersFightCoffersStart implements ICoffersFightCoffersStart {

        /**
         * Constructs a new CoffersFightCoffersStart.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.ICoffersFightCoffersStart);

        /** CoffersFightCoffersStart serverId. */
        public serverId: number;

        /**
         * Encodes the specified CoffersFightCoffersStart message. Does not implicitly {@link msgProto.CoffersFightCoffersStart.verify|verify} messages.
         * @param message CoffersFightCoffersStart message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.ICoffersFightCoffersStart, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a CoffersFightCoffersStart message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CoffersFightCoffersStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.CoffersFightCoffersStart;

        /**
         * Creates a CoffersFightCoffersStart message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CoffersFightCoffersStart
         */
        public static fromObject(object: { [k: string]: any }): msgProto.CoffersFightCoffersStart;

        /**
         * Creates a plain object from a CoffersFightCoffersStart message. Also converts values to other types if specified.
         * @param message CoffersFightCoffersStart
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.CoffersFightCoffersStart, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CoffersFightCoffersStart to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CoffersFightCoffersEnd. */
    interface ICoffersFightCoffersEnd {

        /** CoffersFightCoffersEnd hurt */
        hurt?: (number|null);

        /** CoffersFightCoffersEnd serverId */
        serverId?: (number|null);

        /** CoffersFightCoffersEnd fightData */
        fightData?: (string|null);
    }

    /** Represents a CoffersFightCoffersEnd. */
    class CoffersFightCoffersEnd implements ICoffersFightCoffersEnd {

        /**
         * Constructs a new CoffersFightCoffersEnd.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.ICoffersFightCoffersEnd);

        /** CoffersFightCoffersEnd hurt. */
        public hurt: number;

        /** CoffersFightCoffersEnd serverId. */
        public serverId: number;

        /** CoffersFightCoffersEnd fightData. */
        public fightData: string;

        /**
         * Encodes the specified CoffersFightCoffersEnd message. Does not implicitly {@link msgProto.CoffersFightCoffersEnd.verify|verify} messages.
         * @param message CoffersFightCoffersEnd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.ICoffersFightCoffersEnd, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a CoffersFightCoffersEnd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CoffersFightCoffersEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.CoffersFightCoffersEnd;

        /**
         * Creates a CoffersFightCoffersEnd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CoffersFightCoffersEnd
         */
        public static fromObject(object: { [k: string]: any }): msgProto.CoffersFightCoffersEnd;

        /**
         * Creates a plain object from a CoffersFightCoffersEnd message. Also converts values to other types if specified.
         * @param message CoffersFightCoffersEnd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.CoffersFightCoffersEnd, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CoffersFightCoffersEnd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SdkGetVip. */
    interface ISdkGetVip {
    }

    /** Represents a SdkGetVip. */
    class SdkGetVip implements ISdkGetVip {

        /**
         * Constructs a new SdkGetVip.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.ISdkGetVip);

        /**
         * Encodes the specified SdkGetVip message. Does not implicitly {@link msgProto.SdkGetVip.verify|verify} messages.
         * @param message SdkGetVip message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.ISdkGetVip, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a SdkGetVip message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SdkGetVip
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.SdkGetVip;

        /**
         * Creates a SdkGetVip message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SdkGetVip
         */
        public static fromObject(object: { [k: string]: any }): msgProto.SdkGetVip;

        /**
         * Creates a plain object from a SdkGetVip message. Also converts values to other types if specified.
         * @param message SdkGetVip
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.SdkGetVip, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SdkGetVip to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SmeltSmelt. */
    interface ISmeltSmelt {

        /** SmeltSmelt equipArr */
        equipArr?: (string|null);

        /** SmeltSmelt choColor */
        choColor?: (number|null);
    }

    /** Represents a SmeltSmelt. */
    class SmeltSmelt implements ISmeltSmelt {

        /**
         * Constructs a new SmeltSmelt.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.ISmeltSmelt);

        /** SmeltSmelt equipArr. */
        public equipArr: string;

        /** SmeltSmelt choColor. */
        public choColor: number;

        /**
         * Encodes the specified SmeltSmelt message. Does not implicitly {@link msgProto.SmeltSmelt.verify|verify} messages.
         * @param message SmeltSmelt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.ISmeltSmelt, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a SmeltSmelt message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SmeltSmelt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.SmeltSmelt;

        /**
         * Creates a SmeltSmelt message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SmeltSmelt
         */
        public static fromObject(object: { [k: string]: any }): msgProto.SmeltSmelt;

        /**
         * Creates a plain object from a SmeltSmelt message. Also converts values to other types if specified.
         * @param message SmeltSmelt
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.SmeltSmelt, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SmeltSmelt to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SmeltCompound. */
    interface ISmeltCompound {

        /** SmeltCompound compoundId */
        compoundId?: (number|null);
    }

    /** Represents a SmeltCompound. */
    class SmeltCompound implements ISmeltCompound {

        /**
         * Constructs a new SmeltCompound.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.ISmeltCompound);

        /** SmeltCompound compoundId. */
        public compoundId: number;

        /**
         * Encodes the specified SmeltCompound message. Does not implicitly {@link msgProto.SmeltCompound.verify|verify} messages.
         * @param message SmeltCompound message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.ISmeltCompound, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a SmeltCompound message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SmeltCompound
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.SmeltCompound;

        /**
         * Creates a SmeltCompound message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SmeltCompound
         */
        public static fromObject(object: { [k: string]: any }): msgProto.SmeltCompound;

        /**
         * Creates a plain object from a SmeltCompound message. Also converts values to other types if specified.
         * @param message SmeltCompound
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.SmeltCompound, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SmeltCompound to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SmeltWearParRing. */
    interface ISmeltWearParRing {

        /** SmeltWearParRing tempId */
        tempId?: (number|null);

        /** SmeltWearParRing breakId */
        breakId?: (number|null);
    }

    /** Represents a SmeltWearParRing. */
    class SmeltWearParRing implements ISmeltWearParRing {

        /**
         * Constructs a new SmeltWearParRing.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.ISmeltWearParRing);

        /** SmeltWearParRing tempId. */
        public tempId: number;

        /** SmeltWearParRing breakId. */
        public breakId: number;

        /**
         * Encodes the specified SmeltWearParRing message. Does not implicitly {@link msgProto.SmeltWearParRing.verify|verify} messages.
         * @param message SmeltWearParRing message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.ISmeltWearParRing, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a SmeltWearParRing message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SmeltWearParRing
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.SmeltWearParRing;

        /**
         * Creates a SmeltWearParRing message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SmeltWearParRing
         */
        public static fromObject(object: { [k: string]: any }): msgProto.SmeltWearParRing;

        /**
         * Creates a plain object from a SmeltWearParRing message. Also converts values to other types if specified.
         * @param message SmeltWearParRing
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.SmeltWearParRing, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SmeltWearParRing to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SmeltRingBreak. */
    interface ISmeltRingBreak {

        /** SmeltRingBreak tempId */
        tempId?: (number|null);

        /** SmeltRingBreak breakId */
        breakId?: (number|null);
    }

    /** Represents a SmeltRingBreak. */
    class SmeltRingBreak implements ISmeltRingBreak {

        /**
         * Constructs a new SmeltRingBreak.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.ISmeltRingBreak);

        /** SmeltRingBreak tempId. */
        public tempId: number;

        /** SmeltRingBreak breakId. */
        public breakId: number;

        /**
         * Encodes the specified SmeltRingBreak message. Does not implicitly {@link msgProto.SmeltRingBreak.verify|verify} messages.
         * @param message SmeltRingBreak message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.ISmeltRingBreak, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a SmeltRingBreak message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SmeltRingBreak
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.SmeltRingBreak;

        /**
         * Creates a SmeltRingBreak message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SmeltRingBreak
         */
        public static fromObject(object: { [k: string]: any }): msgProto.SmeltRingBreak;

        /**
         * Creates a plain object from a SmeltRingBreak message. Also converts values to other types if specified.
         * @param message SmeltRingBreak
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.SmeltRingBreak, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SmeltRingBreak to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a KingGetInfo. */
    interface IKingGetInfo {
    }

    /** Represents a KingGetInfo. */
    class KingGetInfo implements IKingGetInfo {

        /**
         * Constructs a new KingGetInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IKingGetInfo);

        /**
         * Encodes the specified KingGetInfo message. Does not implicitly {@link msgProto.KingGetInfo.verify|verify} messages.
         * @param message KingGetInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IKingGetInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a KingGetInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns KingGetInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.KingGetInfo;

        /**
         * Creates a KingGetInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns KingGetInfo
         */
        public static fromObject(object: { [k: string]: any }): msgProto.KingGetInfo;

        /**
         * Creates a plain object from a KingGetInfo message. Also converts values to other types if specified.
         * @param message KingGetInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.KingGetInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this KingGetInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a KingWorship. */
    interface IKingWorship {
    }

    /** Represents a KingWorship. */
    class KingWorship implements IKingWorship {

        /**
         * Constructs a new KingWorship.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IKingWorship);

        /**
         * Encodes the specified KingWorship message. Does not implicitly {@link msgProto.KingWorship.verify|verify} messages.
         * @param message KingWorship message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IKingWorship, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a KingWorship message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns KingWorship
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.KingWorship;

        /**
         * Creates a KingWorship message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns KingWorship
         */
        public static fromObject(object: { [k: string]: any }): msgProto.KingWorship;

        /**
         * Creates a plain object from a KingWorship message. Also converts values to other types if specified.
         * @param message KingWorship
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.KingWorship, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this KingWorship to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a KingReceiveWelfare. */
    interface IKingReceiveWelfare {
    }

    /** Represents a KingReceiveWelfare. */
    class KingReceiveWelfare implements IKingReceiveWelfare {

        /**
         * Constructs a new KingReceiveWelfare.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IKingReceiveWelfare);

        /**
         * Encodes the specified KingReceiveWelfare message. Does not implicitly {@link msgProto.KingReceiveWelfare.verify|verify} messages.
         * @param message KingReceiveWelfare message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IKingReceiveWelfare, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a KingReceiveWelfare message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns KingReceiveWelfare
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.KingReceiveWelfare;

        /**
         * Creates a KingReceiveWelfare message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns KingReceiveWelfare
         */
        public static fromObject(object: { [k: string]: any }): msgProto.KingReceiveWelfare;

        /**
         * Creates a plain object from a KingReceiveWelfare message. Also converts values to other types if specified.
         * @param message KingReceiveWelfare
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.KingReceiveWelfare, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this KingReceiveWelfare to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a KingOpenBuff. */
    interface IKingOpenBuff {
    }

    /** Represents a KingOpenBuff. */
    class KingOpenBuff implements IKingOpenBuff {

        /**
         * Constructs a new KingOpenBuff.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IKingOpenBuff);

        /**
         * Encodes the specified KingOpenBuff message. Does not implicitly {@link msgProto.KingOpenBuff.verify|verify} messages.
         * @param message KingOpenBuff message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IKingOpenBuff, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a KingOpenBuff message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns KingOpenBuff
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.KingOpenBuff;

        /**
         * Creates a KingOpenBuff message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns KingOpenBuff
         */
        public static fromObject(object: { [k: string]: any }): msgProto.KingOpenBuff;

        /**
         * Creates a plain object from a KingOpenBuff message. Also converts values to other types if specified.
         * @param message KingOpenBuff
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.KingOpenBuff, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this KingOpenBuff to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ItemSellItems. */
    interface IItemSellItems {

        /** ItemSellItems itemId */
        itemId?: (number|null);

        /** ItemSellItems itemNum */
        itemNum?: (number|null);
    }

    /** Represents an ItemSellItems. */
    class ItemSellItems implements IItemSellItems {

        /**
         * Constructs a new ItemSellItems.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IItemSellItems);

        /** ItemSellItems itemId. */
        public itemId: number;

        /** ItemSellItems itemNum. */
        public itemNum: number;

        /**
         * Encodes the specified ItemSellItems message. Does not implicitly {@link msgProto.ItemSellItems.verify|verify} messages.
         * @param message ItemSellItems message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IItemSellItems, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ItemSellItems message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ItemSellItems
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.ItemSellItems;

        /**
         * Creates an ItemSellItems message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ItemSellItems
         */
        public static fromObject(object: { [k: string]: any }): msgProto.ItemSellItems;

        /**
         * Creates a plain object from an ItemSellItems message. Also converts values to other types if specified.
         * @param message ItemSellItems
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.ItemSellItems, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ItemSellItems to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TreasureSpies. */
    interface ITreasureSpies {
    }

    /** Represents a TreasureSpies. */
    class TreasureSpies implements ITreasureSpies {

        /**
         * Constructs a new TreasureSpies.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.ITreasureSpies);

        /**
         * Encodes the specified TreasureSpies message. Does not implicitly {@link msgProto.TreasureSpies.verify|verify} messages.
         * @param message TreasureSpies message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.ITreasureSpies, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a TreasureSpies message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TreasureSpies
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.TreasureSpies;

        /**
         * Creates a TreasureSpies message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TreasureSpies
         */
        public static fromObject(object: { [k: string]: any }): msgProto.TreasureSpies;

        /**
         * Creates a plain object from a TreasureSpies message. Also converts values to other types if specified.
         * @param message TreasureSpies
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.TreasureSpies, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TreasureSpies to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TreasureGetExPkOutInfo. */
    interface ITreasureGetExPkOutInfo {
    }

    /** Represents a TreasureGetExPkOutInfo. */
    class TreasureGetExPkOutInfo implements ITreasureGetExPkOutInfo {

        /**
         * Constructs a new TreasureGetExPkOutInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.ITreasureGetExPkOutInfo);

        /**
         * Encodes the specified TreasureGetExPkOutInfo message. Does not implicitly {@link msgProto.TreasureGetExPkOutInfo.verify|verify} messages.
         * @param message TreasureGetExPkOutInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.ITreasureGetExPkOutInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a TreasureGetExPkOutInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TreasureGetExPkOutInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.TreasureGetExPkOutInfo;

        /**
         * Creates a TreasureGetExPkOutInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TreasureGetExPkOutInfo
         */
        public static fromObject(object: { [k: string]: any }): msgProto.TreasureGetExPkOutInfo;

        /**
         * Creates a plain object from a TreasureGetExPkOutInfo message. Also converts values to other types if specified.
         * @param message TreasureGetExPkOutInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.TreasureGetExPkOutInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TreasureGetExPkOutInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TreasureOpen. */
    interface ITreasureOpen {

        /** TreasureOpen id */
        id?: (number|null);
    }

    /** Represents a TreasureOpen. */
    class TreasureOpen implements ITreasureOpen {

        /**
         * Constructs a new TreasureOpen.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.ITreasureOpen);

        /** TreasureOpen id. */
        public id: number;

        /**
         * Encodes the specified TreasureOpen message. Does not implicitly {@link msgProto.TreasureOpen.verify|verify} messages.
         * @param message TreasureOpen message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.ITreasureOpen, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a TreasureOpen message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TreasureOpen
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.TreasureOpen;

        /**
         * Creates a TreasureOpen message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TreasureOpen
         */
        public static fromObject(object: { [k: string]: any }): msgProto.TreasureOpen;

        /**
         * Creates a plain object from a TreasureOpen message. Also converts values to other types if specified.
         * @param message TreasureOpen
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.TreasureOpen, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TreasureOpen to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TreasureCompose. */
    interface ITreasureCompose {

        /** TreasureCompose itemId */
        itemId?: (number|null);
    }

    /** Represents a TreasureCompose. */
    class TreasureCompose implements ITreasureCompose {

        /**
         * Constructs a new TreasureCompose.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.ITreasureCompose);

        /** TreasureCompose itemId. */
        public itemId: number;

        /**
         * Encodes the specified TreasureCompose message. Does not implicitly {@link msgProto.TreasureCompose.verify|verify} messages.
         * @param message TreasureCompose message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.ITreasureCompose, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a TreasureCompose message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TreasureCompose
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.TreasureCompose;

        /**
         * Creates a TreasureCompose message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TreasureCompose
         */
        public static fromObject(object: { [k: string]: any }): msgProto.TreasureCompose;

        /**
         * Creates a plain object from a TreasureCompose message. Also converts values to other types if specified.
         * @param message TreasureCompose
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.TreasureCompose, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TreasureCompose to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TalismanUseTrumpItem. */
    interface ITalismanUseTrumpItem {

        /** TalismanUseTrumpItem itemId */
        itemId?: (number|null);
    }

    /** Represents a TalismanUseTrumpItem. */
    class TalismanUseTrumpItem implements ITalismanUseTrumpItem {

        /**
         * Constructs a new TalismanUseTrumpItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.ITalismanUseTrumpItem);

        /** TalismanUseTrumpItem itemId. */
        public itemId: number;

        /**
         * Encodes the specified TalismanUseTrumpItem message. Does not implicitly {@link msgProto.TalismanUseTrumpItem.verify|verify} messages.
         * @param message TalismanUseTrumpItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.ITalismanUseTrumpItem, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a TalismanUseTrumpItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TalismanUseTrumpItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.TalismanUseTrumpItem;

        /**
         * Creates a TalismanUseTrumpItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TalismanUseTrumpItem
         */
        public static fromObject(object: { [k: string]: any }): msgProto.TalismanUseTrumpItem;

        /**
         * Creates a plain object from a TalismanUseTrumpItem message. Also converts values to other types if specified.
         * @param message TalismanUseTrumpItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.TalismanUseTrumpItem, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TalismanUseTrumpItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TalismanWearTrump. */
    interface ITalismanWearTrump {

        /** TalismanWearTrump tempId */
        tempId?: (number|null);

        /** TalismanWearTrump trumpId */
        trumpId?: (number|null);
    }

    /** Represents a TalismanWearTrump. */
    class TalismanWearTrump implements ITalismanWearTrump {

        /**
         * Constructs a new TalismanWearTrump.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.ITalismanWearTrump);

        /** TalismanWearTrump tempId. */
        public tempId: number;

        /** TalismanWearTrump trumpId. */
        public trumpId: number;

        /**
         * Encodes the specified TalismanWearTrump message. Does not implicitly {@link msgProto.TalismanWearTrump.verify|verify} messages.
         * @param message TalismanWearTrump message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.ITalismanWearTrump, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a TalismanWearTrump message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TalismanWearTrump
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.TalismanWearTrump;

        /**
         * Creates a TalismanWearTrump message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TalismanWearTrump
         */
        public static fromObject(object: { [k: string]: any }): msgProto.TalismanWearTrump;

        /**
         * Creates a plain object from a TalismanWearTrump message. Also converts values to other types if specified.
         * @param message TalismanWearTrump
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.TalismanWearTrump, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TalismanWearTrump to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TalismanUpTrumpLvl. */
    interface ITalismanUpTrumpLvl {

        /** TalismanUpTrumpLvl tempId */
        tempId?: (number|null);

        /** TalismanUpTrumpLvl trumpId */
        trumpId?: (number|null);
    }

    /** Represents a TalismanUpTrumpLvl. */
    class TalismanUpTrumpLvl implements ITalismanUpTrumpLvl {

        /**
         * Constructs a new TalismanUpTrumpLvl.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.ITalismanUpTrumpLvl);

        /** TalismanUpTrumpLvl tempId. */
        public tempId: number;

        /** TalismanUpTrumpLvl trumpId. */
        public trumpId: number;

        /**
         * Encodes the specified TalismanUpTrumpLvl message. Does not implicitly {@link msgProto.TalismanUpTrumpLvl.verify|verify} messages.
         * @param message TalismanUpTrumpLvl message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.ITalismanUpTrumpLvl, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a TalismanUpTrumpLvl message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TalismanUpTrumpLvl
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.TalismanUpTrumpLvl;

        /**
         * Creates a TalismanUpTrumpLvl message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TalismanUpTrumpLvl
         */
        public static fromObject(object: { [k: string]: any }): msgProto.TalismanUpTrumpLvl;

        /**
         * Creates a plain object from a TalismanUpTrumpLvl message. Also converts values to other types if specified.
         * @param message TalismanUpTrumpLvl
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.TalismanUpTrumpLvl, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TalismanUpTrumpLvl to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TalismanUpTrumpStar. */
    interface ITalismanUpTrumpStar {

        /** TalismanUpTrumpStar tempId */
        tempId?: (number|null);

        /** TalismanUpTrumpStar trumpId */
        trumpId?: (number|null);
    }

    /** Represents a TalismanUpTrumpStar. */
    class TalismanUpTrumpStar implements ITalismanUpTrumpStar {

        /**
         * Constructs a new TalismanUpTrumpStar.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.ITalismanUpTrumpStar);

        /** TalismanUpTrumpStar tempId. */
        public tempId: number;

        /** TalismanUpTrumpStar trumpId. */
        public trumpId: number;

        /**
         * Encodes the specified TalismanUpTrumpStar message. Does not implicitly {@link msgProto.TalismanUpTrumpStar.verify|verify} messages.
         * @param message TalismanUpTrumpStar message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.ITalismanUpTrumpStar, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a TalismanUpTrumpStar message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TalismanUpTrumpStar
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.TalismanUpTrumpStar;

        /**
         * Creates a TalismanUpTrumpStar message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TalismanUpTrumpStar
         */
        public static fromObject(object: { [k: string]: any }): msgProto.TalismanUpTrumpStar;

        /**
         * Creates a plain object from a TalismanUpTrumpStar message. Also converts values to other types if specified.
         * @param message TalismanUpTrumpStar
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.TalismanUpTrumpStar, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TalismanUpTrumpStar to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TalismanRecastTrump. */
    interface ITalismanRecastTrump {

        /** TalismanRecastTrump tempId */
        tempId?: (number|null);

        /** TalismanRecastTrump trumpId */
        trumpId?: (number|null);
    }

    /** Represents a TalismanRecastTrump. */
    class TalismanRecastTrump implements ITalismanRecastTrump {

        /**
         * Constructs a new TalismanRecastTrump.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.ITalismanRecastTrump);

        /** TalismanRecastTrump tempId. */
        public tempId: number;

        /** TalismanRecastTrump trumpId. */
        public trumpId: number;

        /**
         * Encodes the specified TalismanRecastTrump message. Does not implicitly {@link msgProto.TalismanRecastTrump.verify|verify} messages.
         * @param message TalismanRecastTrump message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.ITalismanRecastTrump, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a TalismanRecastTrump message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TalismanRecastTrump
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.TalismanRecastTrump;

        /**
         * Creates a TalismanRecastTrump message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TalismanRecastTrump
         */
        public static fromObject(object: { [k: string]: any }): msgProto.TalismanRecastTrump;

        /**
         * Creates a plain object from a TalismanRecastTrump message. Also converts values to other types if specified.
         * @param message TalismanRecastTrump
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.TalismanRecastTrump, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TalismanRecastTrump to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TalismanCompoundTrump. */
    interface ITalismanCompoundTrump {

        /** TalismanCompoundTrump tempId */
        tempId?: (number|null);

        /** TalismanCompoundTrump trumpId */
        trumpId?: (number|null);
    }

    /** Represents a TalismanCompoundTrump. */
    class TalismanCompoundTrump implements ITalismanCompoundTrump {

        /**
         * Constructs a new TalismanCompoundTrump.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.ITalismanCompoundTrump);

        /** TalismanCompoundTrump tempId. */
        public tempId: number;

        /** TalismanCompoundTrump trumpId. */
        public trumpId: number;

        /**
         * Encodes the specified TalismanCompoundTrump message. Does not implicitly {@link msgProto.TalismanCompoundTrump.verify|verify} messages.
         * @param message TalismanCompoundTrump message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.ITalismanCompoundTrump, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a TalismanCompoundTrump message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TalismanCompoundTrump
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.TalismanCompoundTrump;

        /**
         * Creates a TalismanCompoundTrump message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TalismanCompoundTrump
         */
        public static fromObject(object: { [k: string]: any }): msgProto.TalismanCompoundTrump;

        /**
         * Creates a plain object from a TalismanCompoundTrump message. Also converts values to other types if specified.
         * @param message TalismanCompoundTrump
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.TalismanCompoundTrump, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TalismanCompoundTrump to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TalismanBaptizeTrump. */
    interface ITalismanBaptizeTrump {

        /** TalismanBaptizeTrump tempId */
        tempId?: (number|null);

        /** TalismanBaptizeTrump trumpId */
        trumpId?: (number|null);

        /** TalismanBaptizeTrump isCheck */
        isCheck?: (boolean|null);
    }

    /** Represents a TalismanBaptizeTrump. */
    class TalismanBaptizeTrump implements ITalismanBaptizeTrump {

        /**
         * Constructs a new TalismanBaptizeTrump.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.ITalismanBaptizeTrump);

        /** TalismanBaptizeTrump tempId. */
        public tempId: number;

        /** TalismanBaptizeTrump trumpId. */
        public trumpId: number;

        /** TalismanBaptizeTrump isCheck. */
        public isCheck: boolean;

        /**
         * Encodes the specified TalismanBaptizeTrump message. Does not implicitly {@link msgProto.TalismanBaptizeTrump.verify|verify} messages.
         * @param message TalismanBaptizeTrump message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.ITalismanBaptizeTrump, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a TalismanBaptizeTrump message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TalismanBaptizeTrump
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.TalismanBaptizeTrump;

        /**
         * Creates a TalismanBaptizeTrump message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TalismanBaptizeTrump
         */
        public static fromObject(object: { [k: string]: any }): msgProto.TalismanBaptizeTrump;

        /**
         * Creates a plain object from a TalismanBaptizeTrump message. Also converts values to other types if specified.
         * @param message TalismanBaptizeTrump
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.TalismanBaptizeTrump, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TalismanBaptizeTrump to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TalismanConfirmBaptizeTrump. */
    interface ITalismanConfirmBaptizeTrump {

        /** TalismanConfirmBaptizeTrump tempId */
        tempId?: (number|null);

        /** TalismanConfirmBaptizeTrump trumpId */
        trumpId?: (number|null);
    }

    /** Represents a TalismanConfirmBaptizeTrump. */
    class TalismanConfirmBaptizeTrump implements ITalismanConfirmBaptizeTrump {

        /**
         * Constructs a new TalismanConfirmBaptizeTrump.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.ITalismanConfirmBaptizeTrump);

        /** TalismanConfirmBaptizeTrump tempId. */
        public tempId: number;

        /** TalismanConfirmBaptizeTrump trumpId. */
        public trumpId: number;

        /**
         * Encodes the specified TalismanConfirmBaptizeTrump message. Does not implicitly {@link msgProto.TalismanConfirmBaptizeTrump.verify|verify} messages.
         * @param message TalismanConfirmBaptizeTrump message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.ITalismanConfirmBaptizeTrump, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a TalismanConfirmBaptizeTrump message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TalismanConfirmBaptizeTrump
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.TalismanConfirmBaptizeTrump;

        /**
         * Creates a TalismanConfirmBaptizeTrump message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TalismanConfirmBaptizeTrump
         */
        public static fromObject(object: { [k: string]: any }): msgProto.TalismanConfirmBaptizeTrump;

        /**
         * Creates a plain object from a TalismanConfirmBaptizeTrump message. Also converts values to other types if specified.
         * @param message TalismanConfirmBaptizeTrump
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.TalismanConfirmBaptizeTrump, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TalismanConfirmBaptizeTrump to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TalismanCancelBaptizeTrump. */
    interface ITalismanCancelBaptizeTrump {

        /** TalismanCancelBaptizeTrump tempId */
        tempId?: (number|null);

        /** TalismanCancelBaptizeTrump trumpId */
        trumpId?: (number|null);
    }

    /** Represents a TalismanCancelBaptizeTrump. */
    class TalismanCancelBaptizeTrump implements ITalismanCancelBaptizeTrump {

        /**
         * Constructs a new TalismanCancelBaptizeTrump.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.ITalismanCancelBaptizeTrump);

        /** TalismanCancelBaptizeTrump tempId. */
        public tempId: number;

        /** TalismanCancelBaptizeTrump trumpId. */
        public trumpId: number;

        /**
         * Encodes the specified TalismanCancelBaptizeTrump message. Does not implicitly {@link msgProto.TalismanCancelBaptizeTrump.verify|verify} messages.
         * @param message TalismanCancelBaptizeTrump message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.ITalismanCancelBaptizeTrump, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a TalismanCancelBaptizeTrump message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TalismanCancelBaptizeTrump
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.TalismanCancelBaptizeTrump;

        /**
         * Creates a TalismanCancelBaptizeTrump message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TalismanCancelBaptizeTrump
         */
        public static fromObject(object: { [k: string]: any }): msgProto.TalismanCancelBaptizeTrump;

        /**
         * Creates a plain object from a TalismanCancelBaptizeTrump message. Also converts values to other types if specified.
         * @param message TalismanCancelBaptizeTrump
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.TalismanCancelBaptizeTrump, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TalismanCancelBaptizeTrump to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ExpeditionGetInfo. */
    interface IExpeditionGetInfo {
    }

    /** Represents an ExpeditionGetInfo. */
    class ExpeditionGetInfo implements IExpeditionGetInfo {

        /**
         * Constructs a new ExpeditionGetInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IExpeditionGetInfo);

        /**
         * Encodes the specified ExpeditionGetInfo message. Does not implicitly {@link msgProto.ExpeditionGetInfo.verify|verify} messages.
         * @param message ExpeditionGetInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IExpeditionGetInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ExpeditionGetInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ExpeditionGetInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.ExpeditionGetInfo;

        /**
         * Creates an ExpeditionGetInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ExpeditionGetInfo
         */
        public static fromObject(object: { [k: string]: any }): msgProto.ExpeditionGetInfo;

        /**
         * Creates a plain object from an ExpeditionGetInfo message. Also converts values to other types if specified.
         * @param message ExpeditionGetInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.ExpeditionGetInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ExpeditionGetInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ExpeditionWearSoul. */
    interface IExpeditionWearSoul {

        /** ExpeditionWearSoul tempId */
        tempId?: (number|null);

        /** ExpeditionWearSoul soulId */
        soulId?: (number|null);
    }

    /** Represents an ExpeditionWearSoul. */
    class ExpeditionWearSoul implements IExpeditionWearSoul {

        /**
         * Constructs a new ExpeditionWearSoul.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IExpeditionWearSoul);

        /** ExpeditionWearSoul tempId. */
        public tempId: number;

        /** ExpeditionWearSoul soulId. */
        public soulId: number;

        /**
         * Encodes the specified ExpeditionWearSoul message. Does not implicitly {@link msgProto.ExpeditionWearSoul.verify|verify} messages.
         * @param message ExpeditionWearSoul message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IExpeditionWearSoul, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ExpeditionWearSoul message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ExpeditionWearSoul
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.ExpeditionWearSoul;

        /**
         * Creates an ExpeditionWearSoul message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ExpeditionWearSoul
         */
        public static fromObject(object: { [k: string]: any }): msgProto.ExpeditionWearSoul;

        /**
         * Creates a plain object from an ExpeditionWearSoul message. Also converts values to other types if specified.
         * @param message ExpeditionWearSoul
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.ExpeditionWearSoul, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ExpeditionWearSoul to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ExpeditionStartBattle. */
    interface IExpeditionStartBattle {

        /** ExpeditionStartBattle stageId */
        stageId?: (number|null);
    }

    /** Represents an ExpeditionStartBattle. */
    class ExpeditionStartBattle implements IExpeditionStartBattle {

        /**
         * Constructs a new ExpeditionStartBattle.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IExpeditionStartBattle);

        /** ExpeditionStartBattle stageId. */
        public stageId: number;

        /**
         * Encodes the specified ExpeditionStartBattle message. Does not implicitly {@link msgProto.ExpeditionStartBattle.verify|verify} messages.
         * @param message ExpeditionStartBattle message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IExpeditionStartBattle, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ExpeditionStartBattle message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ExpeditionStartBattle
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.ExpeditionStartBattle;

        /**
         * Creates an ExpeditionStartBattle message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ExpeditionStartBattle
         */
        public static fromObject(object: { [k: string]: any }): msgProto.ExpeditionStartBattle;

        /**
         * Creates a plain object from an ExpeditionStartBattle message. Also converts values to other types if specified.
         * @param message ExpeditionStartBattle
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.ExpeditionStartBattle, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ExpeditionStartBattle to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ExpeditionEndBattle. */
    interface IExpeditionEndBattle {

        /** ExpeditionEndBattle isWin */
        isWin?: (boolean|null);

        /** ExpeditionEndBattle herosHp */
        herosHp?: (number|null);
    }

    /** Represents an ExpeditionEndBattle. */
    class ExpeditionEndBattle implements IExpeditionEndBattle {

        /**
         * Constructs a new ExpeditionEndBattle.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IExpeditionEndBattle);

        /** ExpeditionEndBattle isWin. */
        public isWin: boolean;

        /** ExpeditionEndBattle herosHp. */
        public herosHp: number;

        /**
         * Encodes the specified ExpeditionEndBattle message. Does not implicitly {@link msgProto.ExpeditionEndBattle.verify|verify} messages.
         * @param message ExpeditionEndBattle message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IExpeditionEndBattle, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ExpeditionEndBattle message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ExpeditionEndBattle
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.ExpeditionEndBattle;

        /**
         * Creates an ExpeditionEndBattle message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ExpeditionEndBattle
         */
        public static fromObject(object: { [k: string]: any }): msgProto.ExpeditionEndBattle;

        /**
         * Creates a plain object from an ExpeditionEndBattle message. Also converts values to other types if specified.
         * @param message ExpeditionEndBattle
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.ExpeditionEndBattle, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ExpeditionEndBattle to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ExpeditionBuyBlackItem. */
    interface IExpeditionBuyBlackItem {

        /** ExpeditionBuyBlackItem itemId */
        itemId?: (number|null);
    }

    /** Represents an ExpeditionBuyBlackItem. */
    class ExpeditionBuyBlackItem implements IExpeditionBuyBlackItem {

        /**
         * Constructs a new ExpeditionBuyBlackItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IExpeditionBuyBlackItem);

        /** ExpeditionBuyBlackItem itemId. */
        public itemId: number;

        /**
         * Encodes the specified ExpeditionBuyBlackItem message. Does not implicitly {@link msgProto.ExpeditionBuyBlackItem.verify|verify} messages.
         * @param message ExpeditionBuyBlackItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IExpeditionBuyBlackItem, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ExpeditionBuyBlackItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ExpeditionBuyBlackItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.ExpeditionBuyBlackItem;

        /**
         * Creates an ExpeditionBuyBlackItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ExpeditionBuyBlackItem
         */
        public static fromObject(object: { [k: string]: any }): msgProto.ExpeditionBuyBlackItem;

        /**
         * Creates a plain object from an ExpeditionBuyBlackItem message. Also converts values to other types if specified.
         * @param message ExpeditionBuyBlackItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.ExpeditionBuyBlackItem, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ExpeditionBuyBlackItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserCreate. */
    interface IUserCreate {

        /** UserCreate name */
        name?: (string|null);

        /** UserCreate heroTempId */
        heroTempId?: (number|null);

        /** UserCreate sex */
        sex?: (number|null);

        /** UserCreate serverIndexId */
        serverIndexId?: (number|null);

        /** UserCreate shareKey */
        shareKey?: (string|null);
    }

    /** Represents a UserCreate. */
    class UserCreate implements IUserCreate {

        /**
         * Constructs a new UserCreate.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IUserCreate);

        /** UserCreate name. */
        public name: string;

        /** UserCreate heroTempId. */
        public heroTempId: number;

        /** UserCreate sex. */
        public sex: number;

        /** UserCreate serverIndexId. */
        public serverIndexId: number;

        /** UserCreate shareKey. */
        public shareKey: string;

        /**
         * Encodes the specified UserCreate message. Does not implicitly {@link msgProto.UserCreate.verify|verify} messages.
         * @param message UserCreate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IUserCreate, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a UserCreate message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserCreate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.UserCreate;

        /**
         * Creates a UserCreate message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserCreate
         */
        public static fromObject(object: { [k: string]: any }): msgProto.UserCreate;

        /**
         * Creates a plain object from a UserCreate message. Also converts values to other types if specified.
         * @param message UserCreate
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.UserCreate, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserCreate to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserCreateResponse. */
    interface IUserCreateResponse {

        /** UserCreateResponse retCode */
        retCode?: (number|null);
    }

    /** Represents a UserCreateResponse. */
    class UserCreateResponse implements IUserCreateResponse {

        /**
         * Constructs a new UserCreateResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IUserCreateResponse);

        /** UserCreateResponse retCode. */
        public retCode: number;

        /**
         * Encodes the specified UserCreateResponse message. Does not implicitly {@link msgProto.UserCreateResponse.verify|verify} messages.
         * @param message UserCreateResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IUserCreateResponse, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a UserCreateResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserCreateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.UserCreateResponse;

        /**
         * Creates a UserCreateResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserCreateResponse
         */
        public static fromObject(object: { [k: string]: any }): msgProto.UserCreateResponse;

        /**
         * Creates a plain object from a UserCreateResponse message. Also converts values to other types if specified.
         * @param message UserCreateResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.UserCreateResponse, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserCreateResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameEnter. */
    interface IGameEnter {

        /** GameEnter accId */
        accId?: (number|Long|null);

        /** GameEnter loginKey */
        loginKey?: (string|null);

        /** GameEnter serverIndexId */
        serverIndexId?: (number|null);
    }

    /** Represents a GameEnter. */
    class GameEnter implements IGameEnter {

        /**
         * Constructs a new GameEnter.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IGameEnter);

        /** GameEnter accId. */
        public accId: (number|Long);

        /** GameEnter loginKey. */
        public loginKey: string;

        /** GameEnter serverIndexId. */
        public serverIndexId: number;

        /**
         * Encodes the specified GameEnter message. Does not implicitly {@link msgProto.GameEnter.verify|verify} messages.
         * @param message GameEnter message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IGameEnter, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GameEnter message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameEnter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.GameEnter;

        /**
         * Creates a GameEnter message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameEnter
         */
        public static fromObject(object: { [k: string]: any }): msgProto.GameEnter;

        /**
         * Creates a plain object from a GameEnter message. Also converts values to other types if specified.
         * @param message GameEnter
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.GameEnter, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameEnter to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameEnterResponse. */
    interface IGameEnterResponse {

        /** GameEnterResponse retCode */
        retCode?: (number|null);

        /** GameEnterResponse nickName */
        nickName?: (string|null);

        /** GameEnterResponse userId */
        userId?: (number|Long|null);
    }

    /** Represents a GameEnterResponse. */
    class GameEnterResponse implements IGameEnterResponse {

        /**
         * Constructs a new GameEnterResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IGameEnterResponse);

        /** GameEnterResponse retCode. */
        public retCode: number;

        /** GameEnterResponse nickName. */
        public nickName: string;

        /** GameEnterResponse userId. */
        public userId: (number|Long);

        /**
         * Encodes the specified GameEnterResponse message. Does not implicitly {@link msgProto.GameEnterResponse.verify|verify} messages.
         * @param message GameEnterResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IGameEnterResponse, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GameEnterResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameEnterResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.GameEnterResponse;

        /**
         * Creates a GameEnterResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameEnterResponse
         */
        public static fromObject(object: { [k: string]: any }): msgProto.GameEnterResponse;

        /**
         * Creates a plain object from a GameEnterResponse message. Also converts values to other types if specified.
         * @param message GameEnterResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.GameEnterResponse, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameEnterResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AccountGetThirdUserInfo. */
    interface IAccountGetThirdUserInfo {
    }

    /** Represents an AccountGetThirdUserInfo. */
    class AccountGetThirdUserInfo implements IAccountGetThirdUserInfo {

        /**
         * Constructs a new AccountGetThirdUserInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IAccountGetThirdUserInfo);

        /**
         * Encodes the specified AccountGetThirdUserInfo message. Does not implicitly {@link msgProto.AccountGetThirdUserInfo.verify|verify} messages.
         * @param message AccountGetThirdUserInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IAccountGetThirdUserInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AccountGetThirdUserInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AccountGetThirdUserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.AccountGetThirdUserInfo;

        /**
         * Creates an AccountGetThirdUserInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AccountGetThirdUserInfo
         */
        public static fromObject(object: { [k: string]: any }): msgProto.AccountGetThirdUserInfo;

        /**
         * Creates a plain object from an AccountGetThirdUserInfo message. Also converts values to other types if specified.
         * @param message AccountGetThirdUserInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.AccountGetThirdUserInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AccountGetThirdUserInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a NetConnect. */
    interface INetConnect {
    }

    /** Represents a NetConnect. */
    class NetConnect implements INetConnect {

        /**
         * Constructs a new NetConnect.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.INetConnect);

        /**
         * Encodes the specified NetConnect message. Does not implicitly {@link msgProto.NetConnect.verify|verify} messages.
         * @param message NetConnect message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.INetConnect, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a NetConnect message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NetConnect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.NetConnect;

        /**
         * Creates a NetConnect message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NetConnect
         */
        public static fromObject(object: { [k: string]: any }): msgProto.NetConnect;

        /**
         * Creates a plain object from a NetConnect message. Also converts values to other types if specified.
         * @param message NetConnect
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.NetConnect, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NetConnect to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a NetDisconnect. */
    interface INetDisconnect {

        /** NetDisconnect sessionId */
        sessionId?: (string|null);
    }

    /** Represents a NetDisconnect. */
    class NetDisconnect implements INetDisconnect {

        /**
         * Constructs a new NetDisconnect.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.INetDisconnect);

        /** NetDisconnect sessionId. */
        public sessionId: string;

        /**
         * Encodes the specified NetDisconnect message. Does not implicitly {@link msgProto.NetDisconnect.verify|verify} messages.
         * @param message NetDisconnect message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.INetDisconnect, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a NetDisconnect message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NetDisconnect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.NetDisconnect;

        /**
         * Creates a NetDisconnect message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NetDisconnect
         */
        public static fromObject(object: { [k: string]: any }): msgProto.NetDisconnect;

        /**
         * Creates a plain object from a NetDisconnect message. Also converts values to other types if specified.
         * @param message NetDisconnect
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.NetDisconnect, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NetDisconnect to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a NetGetServerDate. */
    interface INetGetServerDate {
    }

    /** Represents a NetGetServerDate. */
    class NetGetServerDate implements INetGetServerDate {

        /**
         * Constructs a new NetGetServerDate.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.INetGetServerDate);

        /**
         * Encodes the specified NetGetServerDate message. Does not implicitly {@link msgProto.NetGetServerDate.verify|verify} messages.
         * @param message NetGetServerDate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.INetGetServerDate, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a NetGetServerDate message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NetGetServerDate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.NetGetServerDate;

        /**
         * Creates a NetGetServerDate message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NetGetServerDate
         */
        public static fromObject(object: { [k: string]: any }): msgProto.NetGetServerDate;

        /**
         * Creates a plain object from a NetGetServerDate message. Also converts values to other types if specified.
         * @param message NetGetServerDate
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.NetGetServerDate, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NetGetServerDate to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AccountLogin. */
    interface IAccountLogin {

        /** AccountLogin account */
        account?: (string|null);

        /** AccountLogin pwd */
        pwd?: (string|null);

        /** AccountLogin channelId */
        channelId?: (number|null);
    }

    /** Represents an AccountLogin. */
    class AccountLogin implements IAccountLogin {

        /**
         * Constructs a new AccountLogin.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IAccountLogin);

        /** AccountLogin account. */
        public account: string;

        /** AccountLogin pwd. */
        public pwd: string;

        /** AccountLogin channelId. */
        public channelId: number;

        /**
         * Encodes the specified AccountLogin message. Does not implicitly {@link msgProto.AccountLogin.verify|verify} messages.
         * @param message AccountLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IAccountLogin, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AccountLogin message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AccountLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.AccountLogin;

        /**
         * Creates an AccountLogin message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AccountLogin
         */
        public static fromObject(object: { [k: string]: any }): msgProto.AccountLogin;

        /**
         * Creates a plain object from an AccountLogin message. Also converts values to other types if specified.
         * @param message AccountLogin
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.AccountLogin, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AccountLogin to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LoginResponse. */
    interface ILoginResponse {

        /** LoginResponse retCode */
        retCode?: (number|null);

        /** LoginResponse accId */
        accId?: (number|Long|null);

        /** LoginResponse account */
        account?: (string|null);

        /** LoginResponse Email */
        Email?: (string|null);

        /** LoginResponse DeviceId */
        DeviceId?: (string|null);

        /** LoginResponse Status */
        Status?: (number|null);

        /** LoginResponse SdkData */
        SdkData?: (string|null);

        /** LoginResponse ExData */
        ExData?: (string|null);

        /** LoginResponse LoginCount */
        LoginCount?: (number|null);

        /** LoginResponse LoginKey */
        LoginKey?: (string|null);

        /** LoginResponse UserServers */
        UserServers?: (string|null);

        /** LoginResponse RechargeCom */
        RechargeCom?: (string|null);

        /** LoginResponse SdkChannelId */
        SdkChannelId?: (string|null);

        /** LoginResponse BendExpireAt */
        BendExpireAt?: (number|Long|null);

        /** LoginResponse BendType */
        BendType?: (number|null);
    }

    /** Represents a LoginResponse. */
    class LoginResponse implements ILoginResponse {

        /**
         * Constructs a new LoginResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.ILoginResponse);

        /** LoginResponse retCode. */
        public retCode: number;

        /** LoginResponse accId. */
        public accId: (number|Long);

        /** LoginResponse account. */
        public account: string;

        /** LoginResponse Email. */
        public Email: string;

        /** LoginResponse DeviceId. */
        public DeviceId: string;

        /** LoginResponse Status. */
        public Status: number;

        /** LoginResponse SdkData. */
        public SdkData: string;

        /** LoginResponse ExData. */
        public ExData: string;

        /** LoginResponse LoginCount. */
        public LoginCount: number;

        /** LoginResponse LoginKey. */
        public LoginKey: string;

        /** LoginResponse UserServers. */
        public UserServers: string;

        /** LoginResponse RechargeCom. */
        public RechargeCom: string;

        /** LoginResponse SdkChannelId. */
        public SdkChannelId: string;

        /** LoginResponse BendExpireAt. */
        public BendExpireAt: (number|Long);

        /** LoginResponse BendType. */
        public BendType: number;

        /**
         * Encodes the specified LoginResponse message. Does not implicitly {@link msgProto.LoginResponse.verify|verify} messages.
         * @param message LoginResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.ILoginResponse, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a LoginResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.LoginResponse;

        /**
         * Creates a LoginResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginResponse
         */
        public static fromObject(object: { [k: string]: any }): msgProto.LoginResponse;

        /**
         * Creates a plain object from a LoginResponse message. Also converts values to other types if specified.
         * @param message LoginResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.LoginResponse, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AccountLoginBySdk. */
    interface IAccountLoginBySdk {

        /** AccountLoginBySdk channelId */
        channelId?: (string|null);

        /** AccountLoginBySdk sdkData */
        sdkData?: (string|null);

        /** AccountLoginBySdk deviceId */
        deviceId?: (string|null);
    }

    /** Represents an AccountLoginBySdk. */
    class AccountLoginBySdk implements IAccountLoginBySdk {

        /**
         * Constructs a new AccountLoginBySdk.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IAccountLoginBySdk);

        /** AccountLoginBySdk channelId. */
        public channelId: string;

        /** AccountLoginBySdk sdkData. */
        public sdkData: string;

        /** AccountLoginBySdk deviceId. */
        public deviceId: string;

        /**
         * Encodes the specified AccountLoginBySdk message. Does not implicitly {@link msgProto.AccountLoginBySdk.verify|verify} messages.
         * @param message AccountLoginBySdk message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IAccountLoginBySdk, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AccountLoginBySdk message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AccountLoginBySdk
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.AccountLoginBySdk;

        /**
         * Creates an AccountLoginBySdk message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AccountLoginBySdk
         */
        public static fromObject(object: { [k: string]: any }): msgProto.AccountLoginBySdk;

        /**
         * Creates a plain object from an AccountLoginBySdk message. Also converts values to other types if specified.
         * @param message AccountLoginBySdk
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.AccountLoginBySdk, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AccountLoginBySdk to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AccountRegister. */
    interface IAccountRegister {

        /** AccountRegister account */
        account?: (string|null);

        /** AccountRegister pwd */
        pwd?: (string|null);

        /** AccountRegister channelId */
        channelId?: (number|null);

        /** AccountRegister deviceId */
        deviceId?: (string|null);
    }

    /** Represents an AccountRegister. */
    class AccountRegister implements IAccountRegister {

        /**
         * Constructs a new AccountRegister.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IAccountRegister);

        /** AccountRegister account. */
        public account: string;

        /** AccountRegister pwd. */
        public pwd: string;

        /** AccountRegister channelId. */
        public channelId: number;

        /** AccountRegister deviceId. */
        public deviceId: string;

        /**
         * Encodes the specified AccountRegister message. Does not implicitly {@link msgProto.AccountRegister.verify|verify} messages.
         * @param message AccountRegister message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IAccountRegister, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AccountRegister message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AccountRegister
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.AccountRegister;

        /**
         * Creates an AccountRegister message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AccountRegister
         */
        public static fromObject(object: { [k: string]: any }): msgProto.AccountRegister;

        /**
         * Creates a plain object from an AccountRegister message. Also converts values to other types if specified.
         * @param message AccountRegister
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.AccountRegister, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AccountRegister to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a NoticeGetNewOne. */
    interface INoticeGetNewOne {
    }

    /** Represents a NoticeGetNewOne. */
    class NoticeGetNewOne implements INoticeGetNewOne {

        /**
         * Constructs a new NoticeGetNewOne.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.INoticeGetNewOne);

        /**
         * Encodes the specified NoticeGetNewOne message. Does not implicitly {@link msgProto.NoticeGetNewOne.verify|verify} messages.
         * @param message NoticeGetNewOne message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.INoticeGetNewOne, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a NoticeGetNewOne message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NoticeGetNewOne
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.NoticeGetNewOne;

        /**
         * Creates a NoticeGetNewOne message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NoticeGetNewOne
         */
        public static fromObject(object: { [k: string]: any }): msgProto.NoticeGetNewOne;

        /**
         * Creates a plain object from a NoticeGetNewOne message. Also converts values to other types if specified.
         * @param message NoticeGetNewOne
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.NoticeGetNewOne, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NoticeGetNewOne to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a NoticeGetList. */
    interface INoticeGetList {
    }

    /** Represents a NoticeGetList. */
    class NoticeGetList implements INoticeGetList {

        /**
         * Constructs a new NoticeGetList.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.INoticeGetList);

        /**
         * Encodes the specified NoticeGetList message. Does not implicitly {@link msgProto.NoticeGetList.verify|verify} messages.
         * @param message NoticeGetList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.INoticeGetList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a NoticeGetList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NoticeGetList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.NoticeGetList;

        /**
         * Creates a NoticeGetList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NoticeGetList
         */
        public static fromObject(object: { [k: string]: any }): msgProto.NoticeGetList;

        /**
         * Creates a plain object from a NoticeGetList message. Also converts values to other types if specified.
         * @param message NoticeGetList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.NoticeGetList, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NoticeGetList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ProtocolContentGetInfo. */
    interface IProtocolContentGetInfo {
    }

    /** Represents a ProtocolContentGetInfo. */
    class ProtocolContentGetInfo implements IProtocolContentGetInfo {

        /**
         * Constructs a new ProtocolContentGetInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IProtocolContentGetInfo);

        /**
         * Encodes the specified ProtocolContentGetInfo message. Does not implicitly {@link msgProto.ProtocolContentGetInfo.verify|verify} messages.
         * @param message ProtocolContentGetInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IProtocolContentGetInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ProtocolContentGetInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ProtocolContentGetInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.ProtocolContentGetInfo;

        /**
         * Creates a ProtocolContentGetInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ProtocolContentGetInfo
         */
        public static fromObject(object: { [k: string]: any }): msgProto.ProtocolContentGetInfo;

        /**
         * Creates a plain object from a ProtocolContentGetInfo message. Also converts values to other types if specified.
         * @param message ProtocolContentGetInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.ProtocolContentGetInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ProtocolContentGetInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SvrListGet. */
    interface ISvrListGet {

        /** SvrListGet isTest */
        isTest?: (boolean|null);
    }

    /** Represents a SvrListGet. */
    class SvrListGet implements ISvrListGet {

        /**
         * Constructs a new SvrListGet.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.ISvrListGet);

        /** SvrListGet isTest. */
        public isTest: boolean;

        /**
         * Encodes the specified SvrListGet message. Does not implicitly {@link msgProto.SvrListGet.verify|verify} messages.
         * @param message SvrListGet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.ISvrListGet, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a SvrListGet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SvrListGet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.SvrListGet;

        /**
         * Creates a SvrListGet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SvrListGet
         */
        public static fromObject(object: { [k: string]: any }): msgProto.SvrListGet;

        /**
         * Creates a plain object from a SvrListGet message. Also converts values to other types if specified.
         * @param message SvrListGet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.SvrListGet, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SvrListGet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SvrInfoGet. */
    interface ISvrInfoGet {

        /** SvrInfoGet svrId */
        svrId?: (number|null);
    }

    /** Represents a SvrInfoGet. */
    class SvrInfoGet implements ISvrInfoGet {

        /**
         * Constructs a new SvrInfoGet.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.ISvrInfoGet);

        /** SvrInfoGet svrId. */
        public svrId: number;

        /**
         * Encodes the specified SvrInfoGet message. Does not implicitly {@link msgProto.SvrInfoGet.verify|verify} messages.
         * @param message SvrInfoGet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.ISvrInfoGet, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a SvrInfoGet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SvrInfoGet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.SvrInfoGet;

        /**
         * Creates a SvrInfoGet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SvrInfoGet
         */
        public static fromObject(object: { [k: string]: any }): msgProto.SvrInfoGet;

        /**
         * Creates a plain object from a SvrInfoGet message. Also converts values to other types if specified.
         * @param message SvrInfoGet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.SvrInfoGet, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SvrInfoGet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PbSvrInfo. */
    interface IPbSvrInfo {

        /** PbSvrInfo Id */
        Id?: (number|null);

        /** PbSvrInfo Name */
        Name?: (string|null);

        /** 服务器名称 * */
        MergerName?: (string|null);

        /** PbSvrInfo Area */
        Area?: (string|null);

        /** PbSvrInfo Host */
        Host?: (string|null);

        /** PbSvrInfo Port */
        Port?: (string|null);

        /** PbSvrInfo IsNew */
        IsNew?: (number|null);

        /** PbSvrInfo Status */
        Status?: (number|null);

        /** PbSvrInfo Sort */
        Sort?: (number|null);

        /** PbSvrInfo AppId */
        AppId?: (string|null);

        /** PbSvrInfo ServerId */
        ServerId?: (number|null);

        /** PbSvrInfo IndexId */
        IndexId?: (number|null);

        /** PbSvrInfo IsClose */
        IsClose?: (number|null);

        /** 是否维护 * */
        CloseExplain?: (string|null);

        /** 维护说明 * */
        ServerDate?: (number|Long|null);
    }

    /** Represents a PbSvrInfo. */
    class PbSvrInfo implements IPbSvrInfo {

        /**
         * Constructs a new PbSvrInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IPbSvrInfo);

        /** PbSvrInfo Id. */
        public Id: number;

        /** PbSvrInfo Name. */
        public Name: string;

        /** 服务器名称 * */
        public MergerName: string;

        /** PbSvrInfo Area. */
        public Area: string;

        /** PbSvrInfo Host. */
        public Host: string;

        /** PbSvrInfo Port. */
        public Port: string;

        /** PbSvrInfo IsNew. */
        public IsNew: number;

        /** PbSvrInfo Status. */
        public Status: number;

        /** PbSvrInfo Sort. */
        public Sort: number;

        /** PbSvrInfo AppId. */
        public AppId: string;

        /** PbSvrInfo ServerId. */
        public ServerId: number;

        /** PbSvrInfo IndexId. */
        public IndexId: number;

        /** PbSvrInfo IsClose. */
        public IsClose: number;

        /** 是否维护 * */
        public CloseExplain: string;

        /** 维护说明 * */
        public ServerDate: (number|Long);

        /**
         * Encodes the specified PbSvrInfo message. Does not implicitly {@link msgProto.PbSvrInfo.verify|verify} messages.
         * @param message PbSvrInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IPbSvrInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PbSvrInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PbSvrInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.PbSvrInfo;

        /**
         * Creates a PbSvrInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PbSvrInfo
         */
        public static fromObject(object: { [k: string]: any }): msgProto.PbSvrInfo;

        /**
         * Creates a plain object from a PbSvrInfo message. Also converts values to other types if specified.
         * @param message PbSvrInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.PbSvrInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PbSvrInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SvrListResponse. */
    interface ISvrListResponse {

        /** SvrListResponse retCode */
        retCode?: (number|null);

        /** SvrListResponse retType */
        retType?: (number|null);

        /** SvrListResponse infos */
        infos?: (msgProto.IPbSvrInfo[]|null);
    }

    /** Represents a SvrListResponse. */
    class SvrListResponse implements ISvrListResponse {

        /**
         * Constructs a new SvrListResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.ISvrListResponse);

        /** SvrListResponse retCode. */
        public retCode: number;

        /** SvrListResponse retType. */
        public retType: number;

        /** SvrListResponse infos. */
        public infos: msgProto.IPbSvrInfo[];

        /**
         * Encodes the specified SvrListResponse message. Does not implicitly {@link msgProto.SvrListResponse.verify|verify} messages.
         * @param message SvrListResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.ISvrListResponse, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a SvrListResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SvrListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.SvrListResponse;

        /**
         * Creates a SvrListResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SvrListResponse
         */
        public static fromObject(object: { [k: string]: any }): msgProto.SvrListResponse;

        /**
         * Creates a plain object from a SvrListResponse message. Also converts values to other types if specified.
         * @param message SvrListResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.SvrListResponse, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SvrListResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SvrDateGet. */
    interface ISvrDateGet {
    }

    /** Represents a SvrDateGet. */
    class SvrDateGet implements ISvrDateGet {

        /**
         * Constructs a new SvrDateGet.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.ISvrDateGet);

        /**
         * Encodes the specified SvrDateGet message. Does not implicitly {@link msgProto.SvrDateGet.verify|verify} messages.
         * @param message SvrDateGet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.ISvrDateGet, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a SvrDateGet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SvrDateGet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.SvrDateGet;

        /**
         * Creates a SvrDateGet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SvrDateGet
         */
        public static fromObject(object: { [k: string]: any }): msgProto.SvrDateGet;

        /**
         * Creates a plain object from a SvrDateGet message. Also converts values to other types if specified.
         * @param message SvrDateGet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.SvrDateGet, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SvrDateGet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserSvrsGet. */
    interface IUserSvrsGet {

        /** UserSvrsGet accId */
        accId?: (number|Long|null);
    }

    /** Represents a UserSvrsGet. */
    class UserSvrsGet implements IUserSvrsGet {

        /**
         * Constructs a new UserSvrsGet.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IUserSvrsGet);

        /** UserSvrsGet accId. */
        public accId: (number|Long);

        /**
         * Encodes the specified UserSvrsGet message. Does not implicitly {@link msgProto.UserSvrsGet.verify|verify} messages.
         * @param message UserSvrsGet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IUserSvrsGet, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a UserSvrsGet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserSvrsGet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.UserSvrsGet;

        /**
         * Creates a UserSvrsGet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserSvrsGet
         */
        public static fromObject(object: { [k: string]: any }): msgProto.UserSvrsGet;

        /**
         * Creates a plain object from a UserSvrsGet message. Also converts values to other types if specified.
         * @param message UserSvrsGet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.UserSvrsGet, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserSvrsGet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AccountSvrsGet. */
    interface IAccountSvrsGet {

        /** AccountSvrsGet openId */
        openId?: (string|null);

        /** AccountSvrsGet appId */
        appId?: (string|null);

        /** AccountSvrsGet isTest */
        isTest?: (boolean|null);
    }

    /** Represents an AccountSvrsGet. */
    class AccountSvrsGet implements IAccountSvrsGet {

        /**
         * Constructs a new AccountSvrsGet.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IAccountSvrsGet);

        /** AccountSvrsGet openId. */
        public openId: string;

        /** AccountSvrsGet appId. */
        public appId: string;

        /** AccountSvrsGet isTest. */
        public isTest: boolean;

        /**
         * Encodes the specified AccountSvrsGet message. Does not implicitly {@link msgProto.AccountSvrsGet.verify|verify} messages.
         * @param message AccountSvrsGet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IAccountSvrsGet, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AccountSvrsGet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AccountSvrsGet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.AccountSvrsGet;

        /**
         * Creates an AccountSvrsGet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AccountSvrsGet
         */
        public static fromObject(object: { [k: string]: any }): msgProto.AccountSvrsGet;

        /**
         * Creates a plain object from an AccountSvrsGet message. Also converts values to other types if specified.
         * @param message AccountSvrsGet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.AccountSvrsGet, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AccountSvrsGet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a KefuGetList. */
    interface IKefuGetList {

        /** KefuGetList lastId */
        lastId?: (number|null);

        /** KefuGetList openId */
        openId?: (string|null);
    }

    /** Represents a KefuGetList. */
    class KefuGetList implements IKefuGetList {

        /**
         * Constructs a new KefuGetList.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IKefuGetList);

        /** KefuGetList lastId. */
        public lastId: number;

        /** KefuGetList openId. */
        public openId: string;

        /**
         * Encodes the specified KefuGetList message. Does not implicitly {@link msgProto.KefuGetList.verify|verify} messages.
         * @param message KefuGetList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IKefuGetList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a KefuGetList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns KefuGetList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.KefuGetList;

        /**
         * Creates a KefuGetList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns KefuGetList
         */
        public static fromObject(object: { [k: string]: any }): msgProto.KefuGetList;

        /**
         * Creates a plain object from a KefuGetList message. Also converts values to other types if specified.
         * @param message KefuGetList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.KefuGetList, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this KefuGetList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a KefuSendData. */
    interface IKefuSendData {

        /** KefuSendData lastId */
        lastId?: (number|null);

        /** KefuSendData content */
        content?: (string|null);

        /** KefuSendData openId */
        openId?: (string|null);

        /** KefuSendData nickname */
        nickname?: (string|null);

        /** KefuSendData vipLevel */
        vipLevel?: (number|null);
    }

    /** Represents a KefuSendData. */
    class KefuSendData implements IKefuSendData {

        /**
         * Constructs a new KefuSendData.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IKefuSendData);

        /** KefuSendData lastId. */
        public lastId: number;

        /** KefuSendData content. */
        public content: string;

        /** KefuSendData openId. */
        public openId: string;

        /** KefuSendData nickname. */
        public nickname: string;

        /** KefuSendData vipLevel. */
        public vipLevel: number;

        /**
         * Encodes the specified KefuSendData message. Does not implicitly {@link msgProto.KefuSendData.verify|verify} messages.
         * @param message KefuSendData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IKefuSendData, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a KefuSendData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns KefuSendData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.KefuSendData;

        /**
         * Creates a KefuSendData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns KefuSendData
         */
        public static fromObject(object: { [k: string]: any }): msgProto.KefuSendData;

        /**
         * Creates a plain object from a KefuSendData message. Also converts values to other types if specified.
         * @param message KefuSendData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.KefuSendData, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this KefuSendData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AdminCoffersLootDefense. */
    interface IAdminCoffersLootDefense {

        /** AdminCoffersLootDefense attackData */
        attackData?: (string|null);

        /** AdminCoffersLootDefense door */
        door?: (number|null);
    }

    /** Represents an AdminCoffersLootDefense. */
    class AdminCoffersLootDefense implements IAdminCoffersLootDefense {

        /**
         * Constructs a new AdminCoffersLootDefense.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IAdminCoffersLootDefense);

        /** AdminCoffersLootDefense attackData. */
        public attackData: string;

        /** AdminCoffersLootDefense door. */
        public door: number;

        /**
         * Encodes the specified AdminCoffersLootDefense message. Does not implicitly {@link msgProto.AdminCoffersLootDefense.verify|verify} messages.
         * @param message AdminCoffersLootDefense message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IAdminCoffersLootDefense, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AdminCoffersLootDefense message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AdminCoffersLootDefense
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.AdminCoffersLootDefense;

        /**
         * Creates an AdminCoffersLootDefense message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AdminCoffersLootDefense
         */
        public static fromObject(object: { [k: string]: any }): msgProto.AdminCoffersLootDefense;

        /**
         * Creates a plain object from an AdminCoffersLootDefense message. Also converts values to other types if specified.
         * @param message AdminCoffersLootDefense
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.AdminCoffersLootDefense, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AdminCoffersLootDefense to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AdminCoffersLootCoffersDefense. */
    interface IAdminCoffersLootCoffersDefense {

        /** AdminCoffersLootCoffersDefense hurt */
        hurt?: (number|null);

        /** AdminCoffersLootCoffersDefense breakNum */
        breakNum?: (number|null);
    }

    /** Represents an AdminCoffersLootCoffersDefense. */
    class AdminCoffersLootCoffersDefense implements IAdminCoffersLootCoffersDefense {

        /**
         * Constructs a new AdminCoffersLootCoffersDefense.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IAdminCoffersLootCoffersDefense);

        /** AdminCoffersLootCoffersDefense hurt. */
        public hurt: number;

        /** AdminCoffersLootCoffersDefense breakNum. */
        public breakNum: number;

        /**
         * Encodes the specified AdminCoffersLootCoffersDefense message. Does not implicitly {@link msgProto.AdminCoffersLootCoffersDefense.verify|verify} messages.
         * @param message AdminCoffersLootCoffersDefense message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IAdminCoffersLootCoffersDefense, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AdminCoffersLootCoffersDefense message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AdminCoffersLootCoffersDefense
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.AdminCoffersLootCoffersDefense;

        /**
         * Creates an AdminCoffersLootCoffersDefense message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AdminCoffersLootCoffersDefense
         */
        public static fromObject(object: { [k: string]: any }): msgProto.AdminCoffersLootCoffersDefense;

        /**
         * Creates a plain object from an AdminCoffersLootCoffersDefense message. Also converts values to other types if specified.
         * @param message AdminCoffersLootCoffersDefense
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.AdminCoffersLootCoffersDefense, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AdminCoffersLootCoffersDefense to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AdminCoffersGetCache. */
    interface IAdminCoffersGetCache {
    }

    /** Represents an AdminCoffersGetCache. */
    class AdminCoffersGetCache implements IAdminCoffersGetCache {

        /**
         * Constructs a new AdminCoffersGetCache.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IAdminCoffersGetCache);

        /**
         * Encodes the specified AdminCoffersGetCache message. Does not implicitly {@link msgProto.AdminCoffersGetCache.verify|verify} messages.
         * @param message AdminCoffersGetCache message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IAdminCoffersGetCache, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AdminCoffersGetCache message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AdminCoffersGetCache
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.AdminCoffersGetCache;

        /**
         * Creates an AdminCoffersGetCache message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AdminCoffersGetCache
         */
        public static fromObject(object: { [k: string]: any }): msgProto.AdminCoffersGetCache;

        /**
         * Creates a plain object from an AdminCoffersGetCache message. Also converts values to other types if specified.
         * @param message AdminCoffersGetCache
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.AdminCoffersGetCache, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AdminCoffersGetCache to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AdminCoffersResetPoints. */
    interface IAdminCoffersResetPoints {
    }

    /** Represents an AdminCoffersResetPoints. */
    class AdminCoffersResetPoints implements IAdminCoffersResetPoints {

        /**
         * Constructs a new AdminCoffersResetPoints.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IAdminCoffersResetPoints);

        /**
         * Encodes the specified AdminCoffersResetPoints message. Does not implicitly {@link msgProto.AdminCoffersResetPoints.verify|verify} messages.
         * @param message AdminCoffersResetPoints message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IAdminCoffersResetPoints, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AdminCoffersResetPoints message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AdminCoffersResetPoints
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.AdminCoffersResetPoints;

        /**
         * Creates an AdminCoffersResetPoints message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AdminCoffersResetPoints
         */
        public static fromObject(object: { [k: string]: any }): msgProto.AdminCoffersResetPoints;

        /**
         * Creates a plain object from an AdminCoffersResetPoints message. Also converts values to other types if specified.
         * @param message AdminCoffersResetPoints
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.AdminCoffersResetPoints, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AdminCoffersResetPoints to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AdminCoffersUpdateCache. */
    interface IAdminCoffersUpdateCache {

        /** AdminCoffersUpdateCache data */
        data?: (string|null);
    }

    /** Represents an AdminCoffersUpdateCache. */
    class AdminCoffersUpdateCache implements IAdminCoffersUpdateCache {

        /**
         * Constructs a new AdminCoffersUpdateCache.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IAdminCoffersUpdateCache);

        /** AdminCoffersUpdateCache data. */
        public data: string;

        /**
         * Encodes the specified AdminCoffersUpdateCache message. Does not implicitly {@link msgProto.AdminCoffersUpdateCache.verify|verify} messages.
         * @param message AdminCoffersUpdateCache message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IAdminCoffersUpdateCache, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AdminCoffersUpdateCache message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AdminCoffersUpdateCache
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.AdminCoffersUpdateCache;

        /**
         * Creates an AdminCoffersUpdateCache message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AdminCoffersUpdateCache
         */
        public static fromObject(object: { [k: string]: any }): msgProto.AdminCoffersUpdateCache;

        /**
         * Creates a plain object from an AdminCoffersUpdateCache message. Also converts values to other types if specified.
         * @param message AdminCoffersUpdateCache
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.AdminCoffersUpdateCache, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AdminCoffersUpdateCache to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AdminGuildGetCache. */
    interface IAdminGuildGetCache {
    }

    /** Represents an AdminGuildGetCache. */
    class AdminGuildGetCache implements IAdminGuildGetCache {

        /**
         * Constructs a new AdminGuildGetCache.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IAdminGuildGetCache);

        /**
         * Encodes the specified AdminGuildGetCache message. Does not implicitly {@link msgProto.AdminGuildGetCache.verify|verify} messages.
         * @param message AdminGuildGetCache message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IAdminGuildGetCache, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AdminGuildGetCache message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AdminGuildGetCache
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.AdminGuildGetCache;

        /**
         * Creates an AdminGuildGetCache message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AdminGuildGetCache
         */
        public static fromObject(object: { [k: string]: any }): msgProto.AdminGuildGetCache;

        /**
         * Creates a plain object from an AdminGuildGetCache message. Also converts values to other types if specified.
         * @param message AdminGuildGetCache
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.AdminGuildGetCache, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AdminGuildGetCache to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AdminGuildGetGuildById. */
    interface IAdminGuildGetGuildById {

        /** AdminGuildGetGuildById id */
        id?: (number|null);
    }

    /** Represents an AdminGuildGetGuildById. */
    class AdminGuildGetGuildById implements IAdminGuildGetGuildById {

        /**
         * Constructs a new AdminGuildGetGuildById.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IAdminGuildGetGuildById);

        /** AdminGuildGetGuildById id. */
        public id: number;

        /**
         * Encodes the specified AdminGuildGetGuildById message. Does not implicitly {@link msgProto.AdminGuildGetGuildById.verify|verify} messages.
         * @param message AdminGuildGetGuildById message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IAdminGuildGetGuildById, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AdminGuildGetGuildById message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AdminGuildGetGuildById
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.AdminGuildGetGuildById;

        /**
         * Creates an AdminGuildGetGuildById message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AdminGuildGetGuildById
         */
        public static fromObject(object: { [k: string]: any }): msgProto.AdminGuildGetGuildById;

        /**
         * Creates a plain object from an AdminGuildGetGuildById message. Also converts values to other types if specified.
         * @param message AdminGuildGetGuildById
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.AdminGuildGetGuildById, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AdminGuildGetGuildById to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Admin_guild_updateCache. */
    interface IAdmin_guild_updateCache {

        /** Admin_guild_updateCache id */
        id?: (number|null);

        /** Admin_guild_updateCache data */
        data?: (string|null);
    }

    /** Represents an Admin_guild_updateCache. */
    class Admin_guild_updateCache implements IAdmin_guild_updateCache {

        /**
         * Constructs a new Admin_guild_updateCache.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IAdmin_guild_updateCache);

        /** Admin_guild_updateCache id. */
        public id: number;

        /** Admin_guild_updateCache data. */
        public data: string;

        /**
         * Encodes the specified Admin_guild_updateCache message. Does not implicitly {@link msgProto.Admin_guild_updateCache.verify|verify} messages.
         * @param message Admin_guild_updateCache message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IAdmin_guild_updateCache, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an Admin_guild_updateCache message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Admin_guild_updateCache
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.Admin_guild_updateCache;

        /**
         * Creates an Admin_guild_updateCache message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Admin_guild_updateCache
         */
        public static fromObject(object: { [k: string]: any }): msgProto.Admin_guild_updateCache;

        /**
         * Creates a plain object from an Admin_guild_updateCache message. Also converts values to other types if specified.
         * @param message Admin_guild_updateCache
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.Admin_guild_updateCache, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Admin_guild_updateCache to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AdminGuildGetZombieGuild. */
    interface IAdminGuildGetZombieGuild {
    }

    /** Represents an AdminGuildGetZombieGuild. */
    class AdminGuildGetZombieGuild implements IAdminGuildGetZombieGuild {

        /**
         * Constructs a new AdminGuildGetZombieGuild.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IAdminGuildGetZombieGuild);

        /**
         * Encodes the specified AdminGuildGetZombieGuild message. Does not implicitly {@link msgProto.AdminGuildGetZombieGuild.verify|verify} messages.
         * @param message AdminGuildGetZombieGuild message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IAdminGuildGetZombieGuild, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AdminGuildGetZombieGuild message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AdminGuildGetZombieGuild
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.AdminGuildGetZombieGuild;

        /**
         * Creates an AdminGuildGetZombieGuild message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AdminGuildGetZombieGuild
         */
        public static fromObject(object: { [k: string]: any }): msgProto.AdminGuildGetZombieGuild;

        /**
         * Creates a plain object from an AdminGuildGetZombieGuild message. Also converts values to other types if specified.
         * @param message AdminGuildGetZombieGuild
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.AdminGuildGetZombieGuild, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AdminGuildGetZombieGuild to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AdminGuildClearZombieGuild. */
    interface IAdminGuildClearZombieGuild {

        /** AdminGuildClearZombieGuild id */
        id?: (number|null);

        /** AdminGuildClearZombieGuild data */
        data?: (string|null);
    }

    /** Represents an AdminGuildClearZombieGuild. */
    class AdminGuildClearZombieGuild implements IAdminGuildClearZombieGuild {

        /**
         * Constructs a new AdminGuildClearZombieGuild.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IAdminGuildClearZombieGuild);

        /** AdminGuildClearZombieGuild id. */
        public id: number;

        /** AdminGuildClearZombieGuild data. */
        public data: string;

        /**
         * Encodes the specified AdminGuildClearZombieGuild message. Does not implicitly {@link msgProto.AdminGuildClearZombieGuild.verify|verify} messages.
         * @param message AdminGuildClearZombieGuild message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IAdminGuildClearZombieGuild, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AdminGuildClearZombieGuild message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AdminGuildClearZombieGuild
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.AdminGuildClearZombieGuild;

        /**
         * Creates an AdminGuildClearZombieGuild message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AdminGuildClearZombieGuild
         */
        public static fromObject(object: { [k: string]: any }): msgProto.AdminGuildClearZombieGuild;

        /**
         * Creates a plain object from an AdminGuildClearZombieGuild message. Also converts values to other types if specified.
         * @param message AdminGuildClearZombieGuild
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.AdminGuildClearZombieGuild, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AdminGuildClearZombieGuild to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AdminGuildChairmanImpeach. */
    interface IAdminGuildChairmanImpeach {
    }

    /** Represents an AdminGuildChairmanImpeach. */
    class AdminGuildChairmanImpeach implements IAdminGuildChairmanImpeach {

        /**
         * Constructs a new AdminGuildChairmanImpeach.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IAdminGuildChairmanImpeach);

        /**
         * Encodes the specified AdminGuildChairmanImpeach message. Does not implicitly {@link msgProto.AdminGuildChairmanImpeach.verify|verify} messages.
         * @param message AdminGuildChairmanImpeach message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IAdminGuildChairmanImpeach, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AdminGuildChairmanImpeach message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AdminGuildChairmanImpeach
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.AdminGuildChairmanImpeach;

        /**
         * Creates an AdminGuildChairmanImpeach message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AdminGuildChairmanImpeach
         */
        public static fromObject(object: { [k: string]: any }): msgProto.AdminGuildChairmanImpeach;

        /**
         * Creates a plain object from an AdminGuildChairmanImpeach message. Also converts values to other types if specified.
         * @param message AdminGuildChairmanImpeach
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.AdminGuildChairmanImpeach, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AdminGuildChairmanImpeach to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AdminBossGetBossData. */
    interface IAdminBossGetBossData {

        /** AdminBossGetBossData bossId */
        bossId?: (number|null);
    }

    /** Represents an AdminBossGetBossData. */
    class AdminBossGetBossData implements IAdminBossGetBossData {

        /**
         * Constructs a new AdminBossGetBossData.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IAdminBossGetBossData);

        /** AdminBossGetBossData bossId. */
        public bossId: number;

        /**
         * Encodes the specified AdminBossGetBossData message. Does not implicitly {@link msgProto.AdminBossGetBossData.verify|verify} messages.
         * @param message AdminBossGetBossData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IAdminBossGetBossData, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AdminBossGetBossData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AdminBossGetBossData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.AdminBossGetBossData;

        /**
         * Creates an AdminBossGetBossData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AdminBossGetBossData
         */
        public static fromObject(object: { [k: string]: any }): msgProto.AdminBossGetBossData;

        /**
         * Creates a plain object from an AdminBossGetBossData message. Also converts values to other types if specified.
         * @param message AdminBossGetBossData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.AdminBossGetBossData, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AdminBossGetBossData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AdminBossGetUserCache. */
    interface IAdminBossGetUserCache {

        /** AdminBossGetUserCache bossId */
        bossId?: (number|null);
    }

    /** Represents an AdminBossGetUserCache. */
    class AdminBossGetUserCache implements IAdminBossGetUserCache {

        /**
         * Constructs a new AdminBossGetUserCache.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IAdminBossGetUserCache);

        /** AdminBossGetUserCache bossId. */
        public bossId: number;

        /**
         * Encodes the specified AdminBossGetUserCache message. Does not implicitly {@link msgProto.AdminBossGetUserCache.verify|verify} messages.
         * @param message AdminBossGetUserCache message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IAdminBossGetUserCache, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AdminBossGetUserCache message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AdminBossGetUserCache
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.AdminBossGetUserCache;

        /**
         * Creates an AdminBossGetUserCache message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AdminBossGetUserCache
         */
        public static fromObject(object: { [k: string]: any }): msgProto.AdminBossGetUserCache;

        /**
         * Creates a plain object from an AdminBossGetUserCache message. Also converts values to other types if specified.
         * @param message AdminBossGetUserCache
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.AdminBossGetUserCache, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AdminBossGetUserCache to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AdminBossGetGuildById. */
    interface IAdminBossGetGuildById {

        /** AdminBossGetGuildById id */
        id?: (number|null);
    }

    /** Represents an AdminBossGetGuildById. */
    class AdminBossGetGuildById implements IAdminBossGetGuildById {

        /**
         * Constructs a new AdminBossGetGuildById.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IAdminBossGetGuildById);

        /** AdminBossGetGuildById id. */
        public id: number;

        /**
         * Encodes the specified AdminBossGetGuildById message. Does not implicitly {@link msgProto.AdminBossGetGuildById.verify|verify} messages.
         * @param message AdminBossGetGuildById message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IAdminBossGetGuildById, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AdminBossGetGuildById message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AdminBossGetGuildById
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.AdminBossGetGuildById;

        /**
         * Creates an AdminBossGetGuildById message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AdminBossGetGuildById
         */
        public static fromObject(object: { [k: string]: any }): msgProto.AdminBossGetGuildById;

        /**
         * Creates a plain object from an AdminBossGetGuildById message. Also converts values to other types if specified.
         * @param message AdminBossGetGuildById
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.AdminBossGetGuildById, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AdminBossGetGuildById to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AdminBossUpdateBossCache. */
    interface IAdminBossUpdateBossCache {

        /** AdminBossUpdateBossCache data */
        data?: (string|null);
    }

    /** Represents an AdminBossUpdateBossCache. */
    class AdminBossUpdateBossCache implements IAdminBossUpdateBossCache {

        /**
         * Constructs a new AdminBossUpdateBossCache.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IAdminBossUpdateBossCache);

        /** AdminBossUpdateBossCache data. */
        public data: string;

        /**
         * Encodes the specified AdminBossUpdateBossCache message. Does not implicitly {@link msgProto.AdminBossUpdateBossCache.verify|verify} messages.
         * @param message AdminBossUpdateBossCache message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IAdminBossUpdateBossCache, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AdminBossUpdateBossCache message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AdminBossUpdateBossCache
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.AdminBossUpdateBossCache;

        /**
         * Creates an AdminBossUpdateBossCache message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AdminBossUpdateBossCache
         */
        public static fromObject(object: { [k: string]: any }): msgProto.AdminBossUpdateBossCache;

        /**
         * Creates a plain object from an AdminBossUpdateBossCache message. Also converts values to other types if specified.
         * @param message AdminBossUpdateBossCache
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.AdminBossUpdateBossCache, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AdminBossUpdateBossCache to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AdminBossUpdateUserCache. */
    interface IAdminBossUpdateUserCache {

        /** AdminBossUpdateUserCache id */
        id?: (number|null);

        /** AdminBossUpdateUserCache data */
        data?: (string|null);
    }

    /** Represents an AdminBossUpdateUserCache. */
    class AdminBossUpdateUserCache implements IAdminBossUpdateUserCache {

        /**
         * Constructs a new AdminBossUpdateUserCache.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IAdminBossUpdateUserCache);

        /** AdminBossUpdateUserCache id. */
        public id: number;

        /** AdminBossUpdateUserCache data. */
        public data: string;

        /**
         * Encodes the specified AdminBossUpdateUserCache message. Does not implicitly {@link msgProto.AdminBossUpdateUserCache.verify|verify} messages.
         * @param message AdminBossUpdateUserCache message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IAdminBossUpdateUserCache, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AdminBossUpdateUserCache message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AdminBossUpdateUserCache
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.AdminBossUpdateUserCache;

        /**
         * Creates an AdminBossUpdateUserCache message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AdminBossUpdateUserCache
         */
        public static fromObject(object: { [k: string]: any }): msgProto.AdminBossUpdateUserCache;

        /**
         * Creates a plain object from an AdminBossUpdateUserCache message. Also converts values to other types if specified.
         * @param message AdminBossUpdateUserCache
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.AdminBossUpdateUserCache, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AdminBossUpdateUserCache to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AdminChatServersChat. */
    interface IAdminChatServersChat {

        /** AdminChatServersChat nickName */
        nickName?: (string|null);

        /** AdminChatServersChat vip */
        vip?: (number|null);

        /** AdminChatServersChat content */
        content?: (string|null);

        /** AdminChatServersChat isGM */
        isGM?: (boolean|null);

        /** AdminChatServersChat guildName */
        guildName?: (string|null);

        /** AdminChatServersChat medalTitle */
        medalTitle?: (string|null);

        /** AdminChatServersChat isLittleHorn */
        isLittleHorn?: (boolean|null);
    }

    /** Represents an AdminChatServersChat. */
    class AdminChatServersChat implements IAdminChatServersChat {

        /**
         * Constructs a new AdminChatServersChat.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IAdminChatServersChat);

        /** AdminChatServersChat nickName. */
        public nickName: string;

        /** AdminChatServersChat vip. */
        public vip: number;

        /** AdminChatServersChat content. */
        public content: string;

        /** AdminChatServersChat isGM. */
        public isGM: boolean;

        /** AdminChatServersChat guildName. */
        public guildName: string;

        /** AdminChatServersChat medalTitle. */
        public medalTitle: string;

        /** AdminChatServersChat isLittleHorn. */
        public isLittleHorn: boolean;

        /**
         * Encodes the specified AdminChatServersChat message. Does not implicitly {@link msgProto.AdminChatServersChat.verify|verify} messages.
         * @param message AdminChatServersChat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IAdminChatServersChat, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AdminChatServersChat message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AdminChatServersChat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.AdminChatServersChat;

        /**
         * Creates an AdminChatServersChat message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AdminChatServersChat
         */
        public static fromObject(object: { [k: string]: any }): msgProto.AdminChatServersChat;

        /**
         * Creates a plain object from an AdminChatServersChat message. Also converts values to other types if specified.
         * @param message AdminChatServersChat
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.AdminChatServersChat, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AdminChatServersChat to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AdminGuildWarLootDefense. */
    interface IAdminGuildWarLootDefense {

        /** AdminGuildWarLootDefense attackData */
        attackData?: (string|null);

        /** AdminGuildWarLootDefense isWin */
        isWin?: (boolean|null);

        /** AdminGuildWarLootDefense defenceData */
        defenceData?: (string|null);
    }

    /** Represents an AdminGuildWarLootDefense. */
    class AdminGuildWarLootDefense implements IAdminGuildWarLootDefense {

        /**
         * Constructs a new AdminGuildWarLootDefense.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IAdminGuildWarLootDefense);

        /** AdminGuildWarLootDefense attackData. */
        public attackData: string;

        /** AdminGuildWarLootDefense isWin. */
        public isWin: boolean;

        /** AdminGuildWarLootDefense defenceData. */
        public defenceData: string;

        /**
         * Encodes the specified AdminGuildWarLootDefense message. Does not implicitly {@link msgProto.AdminGuildWarLootDefense.verify|verify} messages.
         * @param message AdminGuildWarLootDefense message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IAdminGuildWarLootDefense, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AdminGuildWarLootDefense message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AdminGuildWarLootDefense
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.AdminGuildWarLootDefense;

        /**
         * Creates an AdminGuildWarLootDefense message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AdminGuildWarLootDefense
         */
        public static fromObject(object: { [k: string]: any }): msgProto.AdminGuildWarLootDefense;

        /**
         * Creates a plain object from an AdminGuildWarLootDefense message. Also converts values to other types if specified.
         * @param message AdminGuildWarLootDefense
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.AdminGuildWarLootDefense, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AdminGuildWarLootDefense to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AdminGuildWarPushBeFightRecord. */
    interface IAdminGuildWarPushBeFightRecord {

        /** AdminGuildWarPushBeFightRecord guildId */
        guildId?: (number|null);

        /** AdminGuildWarPushBeFightRecord data */
        data?: (string|null);
    }

    /** Represents an AdminGuildWarPushBeFightRecord. */
    class AdminGuildWarPushBeFightRecord implements IAdminGuildWarPushBeFightRecord {

        /**
         * Constructs a new AdminGuildWarPushBeFightRecord.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IAdminGuildWarPushBeFightRecord);

        /** AdminGuildWarPushBeFightRecord guildId. */
        public guildId: number;

        /** AdminGuildWarPushBeFightRecord data. */
        public data: string;

        /**
         * Encodes the specified AdminGuildWarPushBeFightRecord message. Does not implicitly {@link msgProto.AdminGuildWarPushBeFightRecord.verify|verify} messages.
         * @param message AdminGuildWarPushBeFightRecord message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IAdminGuildWarPushBeFightRecord, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AdminGuildWarPushBeFightRecord message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AdminGuildWarPushBeFightRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.AdminGuildWarPushBeFightRecord;

        /**
         * Creates an AdminGuildWarPushBeFightRecord message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AdminGuildWarPushBeFightRecord
         */
        public static fromObject(object: { [k: string]: any }): msgProto.AdminGuildWarPushBeFightRecord;

        /**
         * Creates a plain object from an AdminGuildWarPushBeFightRecord message. Also converts values to other types if specified.
         * @param message AdminGuildWarPushBeFightRecord
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.AdminGuildWarPushBeFightRecord, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AdminGuildWarPushBeFightRecord to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AdminGuildWarGetCurServerGuildWarObj. */
    interface IAdminGuildWarGetCurServerGuildWarObj {
    }

    /** Represents an AdminGuildWarGetCurServerGuildWarObj. */
    class AdminGuildWarGetCurServerGuildWarObj implements IAdminGuildWarGetCurServerGuildWarObj {

        /**
         * Constructs a new AdminGuildWarGetCurServerGuildWarObj.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IAdminGuildWarGetCurServerGuildWarObj);

        /**
         * Encodes the specified AdminGuildWarGetCurServerGuildWarObj message. Does not implicitly {@link msgProto.AdminGuildWarGetCurServerGuildWarObj.verify|verify} messages.
         * @param message AdminGuildWarGetCurServerGuildWarObj message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IAdminGuildWarGetCurServerGuildWarObj, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AdminGuildWarGetCurServerGuildWarObj message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AdminGuildWarGetCurServerGuildWarObj
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.AdminGuildWarGetCurServerGuildWarObj;

        /**
         * Creates an AdminGuildWarGetCurServerGuildWarObj message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AdminGuildWarGetCurServerGuildWarObj
         */
        public static fromObject(object: { [k: string]: any }): msgProto.AdminGuildWarGetCurServerGuildWarObj;

        /**
         * Creates a plain object from an AdminGuildWarGetCurServerGuildWarObj message. Also converts values to other types if specified.
         * @param message AdminGuildWarGetCurServerGuildWarObj
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.AdminGuildWarGetCurServerGuildWarObj, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AdminGuildWarGetCurServerGuildWarObj to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AdminGuildWarEnter100User. */
    interface IAdminGuildWarEnter100User {
    }

    /** Represents an AdminGuildWarEnter100User. */
    class AdminGuildWarEnter100User implements IAdminGuildWarEnter100User {

        /**
         * Constructs a new AdminGuildWarEnter100User.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IAdminGuildWarEnter100User);

        /**
         * Encodes the specified AdminGuildWarEnter100User message. Does not implicitly {@link msgProto.AdminGuildWarEnter100User.verify|verify} messages.
         * @param message AdminGuildWarEnter100User message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IAdminGuildWarEnter100User, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AdminGuildWarEnter100User message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AdminGuildWarEnter100User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.AdminGuildWarEnter100User;

        /**
         * Creates an AdminGuildWarEnter100User message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AdminGuildWarEnter100User
         */
        public static fromObject(object: { [k: string]: any }): msgProto.AdminGuildWarEnter100User;

        /**
         * Creates a plain object from an AdminGuildWarEnter100User message. Also converts values to other types if specified.
         * @param message AdminGuildWarEnter100User
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.AdminGuildWarEnter100User, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AdminGuildWarEnter100User to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AdminGuildWarSyncGetSyncServer. */
    interface IAdminGuildWarSyncGetSyncServer {

        /** AdminGuildWarSyncGetSyncServer curServerData */
        curServerData?: (string|null);
    }

    /** Represents an AdminGuildWarSyncGetSyncServer. */
    class AdminGuildWarSyncGetSyncServer implements IAdminGuildWarSyncGetSyncServer {

        /**
         * Constructs a new AdminGuildWarSyncGetSyncServer.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IAdminGuildWarSyncGetSyncServer);

        /** AdminGuildWarSyncGetSyncServer curServerData. */
        public curServerData: string;

        /**
         * Encodes the specified AdminGuildWarSyncGetSyncServer message. Does not implicitly {@link msgProto.AdminGuildWarSyncGetSyncServer.verify|verify} messages.
         * @param message AdminGuildWarSyncGetSyncServer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IAdminGuildWarSyncGetSyncServer, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AdminGuildWarSyncGetSyncServer message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AdminGuildWarSyncGetSyncServer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.AdminGuildWarSyncGetSyncServer;

        /**
         * Creates an AdminGuildWarSyncGetSyncServer message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AdminGuildWarSyncGetSyncServer
         */
        public static fromObject(object: { [k: string]: any }): msgProto.AdminGuildWarSyncGetSyncServer;

        /**
         * Creates a plain object from an AdminGuildWarSyncGetSyncServer message. Also converts values to other types if specified.
         * @param message AdminGuildWarSyncGetSyncServer
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.AdminGuildWarSyncGetSyncServer, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AdminGuildWarSyncGetSyncServer to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AdminTreasureGetTreasureCash. */
    interface IAdminTreasureGetTreasureCash {
    }

    /** Represents an AdminTreasureGetTreasureCash. */
    class AdminTreasureGetTreasureCash implements IAdminTreasureGetTreasureCash {

        /**
         * Constructs a new AdminTreasureGetTreasureCash.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IAdminTreasureGetTreasureCash);

        /**
         * Encodes the specified AdminTreasureGetTreasureCash message. Does not implicitly {@link msgProto.AdminTreasureGetTreasureCash.verify|verify} messages.
         * @param message AdminTreasureGetTreasureCash message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IAdminTreasureGetTreasureCash, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AdminTreasureGetTreasureCash message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AdminTreasureGetTreasureCash
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.AdminTreasureGetTreasureCash;

        /**
         * Creates an AdminTreasureGetTreasureCash message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AdminTreasureGetTreasureCash
         */
        public static fromObject(object: { [k: string]: any }): msgProto.AdminTreasureGetTreasureCash;

        /**
         * Creates a plain object from an AdminTreasureGetTreasureCash message. Also converts values to other types if specified.
         * @param message AdminTreasureGetTreasureCash
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.AdminTreasureGetTreasureCash, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AdminTreasureGetTreasureCash to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AdminTreasureGetTreasureByUserId. */
    interface IAdminTreasureGetTreasureByUserId {
    }

    /** Represents an AdminTreasureGetTreasureByUserId. */
    class AdminTreasureGetTreasureByUserId implements IAdminTreasureGetTreasureByUserId {

        /**
         * Constructs a new AdminTreasureGetTreasureByUserId.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IAdminTreasureGetTreasureByUserId);

        /**
         * Encodes the specified AdminTreasureGetTreasureByUserId message. Does not implicitly {@link msgProto.AdminTreasureGetTreasureByUserId.verify|verify} messages.
         * @param message AdminTreasureGetTreasureByUserId message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IAdminTreasureGetTreasureByUserId, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AdminTreasureGetTreasureByUserId message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AdminTreasureGetTreasureByUserId
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.AdminTreasureGetTreasureByUserId;

        /**
         * Creates an AdminTreasureGetTreasureByUserId message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AdminTreasureGetTreasureByUserId
         */
        public static fromObject(object: { [k: string]: any }): msgProto.AdminTreasureGetTreasureByUserId;

        /**
         * Creates a plain object from an AdminTreasureGetTreasureByUserId message. Also converts values to other types if specified.
         * @param message AdminTreasureGetTreasureByUserId
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.AdminTreasureGetTreasureByUserId, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AdminTreasureGetTreasureByUserId to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AdminTreasureSetTreasureByUserId. */
    interface IAdminTreasureSetTreasureByUserId {

        /** AdminTreasureSetTreasureByUserId userId */
        userId?: (number|Long|null);
    }

    /** Represents an AdminTreasureSetTreasureByUserId. */
    class AdminTreasureSetTreasureByUserId implements IAdminTreasureSetTreasureByUserId {

        /**
         * Constructs a new AdminTreasureSetTreasureByUserId.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IAdminTreasureSetTreasureByUserId);

        /** AdminTreasureSetTreasureByUserId userId. */
        public userId: (number|Long);

        /**
         * Encodes the specified AdminTreasureSetTreasureByUserId message. Does not implicitly {@link msgProto.AdminTreasureSetTreasureByUserId.verify|verify} messages.
         * @param message AdminTreasureSetTreasureByUserId message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IAdminTreasureSetTreasureByUserId, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AdminTreasureSetTreasureByUserId message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AdminTreasureSetTreasureByUserId
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.AdminTreasureSetTreasureByUserId;

        /**
         * Creates an AdminTreasureSetTreasureByUserId message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AdminTreasureSetTreasureByUserId
         */
        public static fromObject(object: { [k: string]: any }): msgProto.AdminTreasureSetTreasureByUserId;

        /**
         * Creates a plain object from an AdminTreasureSetTreasureByUserId message. Also converts values to other types if specified.
         * @param message AdminTreasureSetTreasureByUserId
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.AdminTreasureSetTreasureByUserId, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AdminTreasureSetTreasureByUserId to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ServerInfo. */
    interface IServerInfo {

        /** ServerInfo Ip */
        Ip?: (string|null);

        /** ServerInfo Port */
        Port?: (number|null);
    }

    /** Represents a ServerInfo. */
    class ServerInfo implements IServerInfo {

        /**
         * Constructs a new ServerInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IServerInfo);

        /** ServerInfo Ip. */
        public Ip: string;

        /** ServerInfo Port. */
        public Port: number;

        /**
         * Encodes the specified ServerInfo message. Does not implicitly {@link msgProto.ServerInfo.verify|verify} messages.
         * @param message ServerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IServerInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ServerInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.ServerInfo;

        /**
         * Creates a ServerInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServerInfo
         */
        public static fromObject(object: { [k: string]: any }): msgProto.ServerInfo;

        /**
         * Creates a plain object from a ServerInfo message. Also converts values to other types if specified.
         * @param message ServerInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.ServerInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServerInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PingAck. */
    interface IPingAck {
    }

    /** Represents a PingAck. */
    class PingAck implements IPingAck {

        /**
         * Constructs a new PingAck.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IPingAck);

        /**
         * Encodes the specified PingAck message. Does not implicitly {@link msgProto.PingAck.verify|verify} messages.
         * @param message PingAck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IPingAck, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PingAck message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PingAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.PingAck;

        /**
         * Creates a PingAck message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PingAck
         */
        public static fromObject(object: { [k: string]: any }): msgProto.PingAck;

        /**
         * Creates a plain object from a PingAck message. Also converts values to other types if specified.
         * @param message PingAck
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.PingAck, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PingAck to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LoginReq. */
    interface ILoginReq {

        /** LoginReq Version */
        Version?: (string|null);

        /** LoginReq Platform */
        Platform?: (string|null);

        /** LoginReq Uid */
        Uid?: (string|null);
    }

    /** Represents a LoginReq. */
    class LoginReq implements ILoginReq {

        /**
         * Constructs a new LoginReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.ILoginReq);

        /** LoginReq Version. */
        public Version: string;

        /** LoginReq Platform. */
        public Platform: string;

        /** LoginReq Uid. */
        public Uid: string;

        /**
         * Encodes the specified LoginReq message. Does not implicitly {@link msgProto.LoginReq.verify|verify} messages.
         * @param message LoginReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.ILoginReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a LoginReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.LoginReq;

        /**
         * Creates a LoginReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginReq
         */
        public static fromObject(object: { [k: string]: any }): msgProto.LoginReq;

        /**
         * Creates a plain object from a LoginReq message. Also converts values to other types if specified.
         * @param message LoginReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.LoginReq, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LoginAck. */
    interface ILoginAck {

        /** LoginAck Result */
        Result?: (msgProto.ResultCode|null);

        /** LoginAck Server */
        Server?: (msgProto.IServerInfo|null);

        /** LoginAck GameToken */
        GameToken?: (string|null);

        /** LoginAck GameSvcId */
        GameSvcId?: (string|null);
    }

    /** Represents a LoginAck. */
    class LoginAck implements ILoginAck {

        /**
         * Constructs a new LoginAck.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.ILoginAck);

        /** LoginAck Result. */
        public Result: msgProto.ResultCode;

        /** LoginAck Server. */
        public Server?: (msgProto.IServerInfo|null);

        /** LoginAck GameToken. */
        public GameToken: string;

        /** LoginAck GameSvcId. */
        public GameSvcId: string;

        /**
         * Encodes the specified LoginAck message. Does not implicitly {@link msgProto.LoginAck.verify|verify} messages.
         * @param message LoginAck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.ILoginAck, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a LoginAck message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.LoginAck;

        /**
         * Creates a LoginAck message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginAck
         */
        public static fromObject(object: { [k: string]: any }): msgProto.LoginAck;

        /**
         * Creates a plain object from a LoginAck message. Also converts values to other types if specified.
         * @param message LoginAck
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.LoginAck, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginAck to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a VerifyReq. */
    interface IVerifyReq {

        /** VerifyReq GameToken */
        GameToken?: (string|null);

        /** VerifyReq GameSvcId */
        GameSvcId?: (string|null);

        /** VerifyReq AccountId */
        AccountId?: (number|Long|null);
    }

    /** Represents a VerifyReq. */
    class VerifyReq implements IVerifyReq {

        /**
         * Constructs a new VerifyReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IVerifyReq);

        /** VerifyReq GameToken. */
        public GameToken: string;

        /** VerifyReq GameSvcId. */
        public GameSvcId: string;

        /** VerifyReq AccountId. */
        public AccountId: (number|Long);

        /**
         * Encodes the specified VerifyReq message. Does not implicitly {@link msgProto.VerifyReq.verify|verify} messages.
         * @param message VerifyReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IVerifyReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a VerifyReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VerifyReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.VerifyReq;

        /**
         * Creates a VerifyReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VerifyReq
         */
        public static fromObject(object: { [k: string]: any }): msgProto.VerifyReq;

        /**
         * Creates a plain object from a VerifyReq message. Also converts values to other types if specified.
         * @param message VerifyReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.VerifyReq, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VerifyReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a VerifyAck. */
    interface IVerifyAck {

        /** VerifyAck Result */
        Result?: (msgProto.ResultCode|null);
    }

    /** Represents a VerifyAck. */
    class VerifyAck implements IVerifyAck {

        /**
         * Constructs a new VerifyAck.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IVerifyAck);

        /** VerifyAck Result. */
        public Result: msgProto.ResultCode;

        /**
         * Encodes the specified VerifyAck message. Does not implicitly {@link msgProto.VerifyAck.verify|verify} messages.
         * @param message VerifyAck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IVerifyAck, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a VerifyAck message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VerifyAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.VerifyAck;

        /**
         * Creates a VerifyAck message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VerifyAck
         */
        public static fromObject(object: { [k: string]: any }): msgProto.VerifyAck;

        /**
         * Creates a plain object from a VerifyAck message. Also converts values to other types if specified.
         * @param message VerifyAck
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.VerifyAck, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VerifyAck to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** ResultCode enum. */
    enum ResultCode {
        NoError = 0,
        GateNotFound = 1,
        GateAddressError = 2,
        GameNotFound = 3
    }
}
