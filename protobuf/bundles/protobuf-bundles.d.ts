type Long = protobuf.Long;

/** Namespace msgProto. */
declare namespace msgProto {

    /** Properties of a ChatReq. */
    interface IChatReq {

        /** ChatReq content */
        content?: (string|null);
    }

    /** Represents a ChatReq. */
    class ChatReq implements IChatReq {

        /**
         * Constructs a new ChatReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IChatReq);

        /** ChatReq content. */
        public content: string;

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

        /** ChatAck content */
        content?: (string|null);
    }

    /** Represents a ChatAck. */
    class ChatAck implements IChatAck {

        /**
         * Constructs a new ChatAck.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IChatAck);

        /** ChatAck content. */
        public content: string;

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

        /** TestAck dummy */
        dummy?: (string|null);
    }

    /** Represents a TestAck. */
    class TestAck implements ITestAck {

        /**
         * Constructs a new TestAck.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.ITestAck);

        /** TestAck dummy. */
        public dummy: string;

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

        /** ContentReq msg */
        msg?: (string|null);

        /** ContentReq value */
        value?: (number|null);
    }

    /** Represents a ContentReq. */
    class ContentReq implements IContentReq {

        /**
         * Constructs a new ContentReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IContentReq);

        /** ContentReq msg. */
        public msg: string;

        /** ContentReq value. */
        public value: number;

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

        /** ContentAck msg */
        msg?: (string|null);

        /** ContentAck value */
        value?: (number|null);
    }

    /** Represents a ContentAck. */
    class ContentAck implements IContentAck {

        /**
         * Constructs a new ContentAck.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IContentAck);

        /** ContentAck msg. */
        public msg: string;

        /** ContentAck value. */
        public value: number;

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

        /** LoginResponse email */
        email?: (string|null);

        /** LoginResponse deviceId */
        deviceId?: (string|null);

        /** LoginResponse status */
        status?: (number|null);

        /** LoginResponse sdkData */
        sdkData?: (string|null);

        /** LoginResponse exData */
        exData?: (string|null);

        /** LoginResponse loginCount */
        loginCount?: (number|null);

        /** LoginResponse loginKey */
        loginKey?: (string|null);

        /** LoginResponse userServers */
        userServers?: (string|null);

        /** LoginResponse rechargeCom */
        rechargeCom?: (string|null);

        /** LoginResponse sdkChannelId */
        sdkChannelId?: (string|null);

        /** LoginResponse bendExpireAt */
        bendExpireAt?: (number|Long|null);

        /** LoginResponse bendType */
        bendType?: (number|null);
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

        /** LoginResponse email. */
        public email: string;

        /** LoginResponse deviceId. */
        public deviceId: string;

        /** LoginResponse status. */
        public status: number;

        /** LoginResponse sdkData. */
        public sdkData: string;

        /** LoginResponse exData. */
        public exData: string;

        /** LoginResponse loginCount. */
        public loginCount: number;

        /** LoginResponse loginKey. */
        public loginKey: string;

        /** LoginResponse userServers. */
        public userServers: string;

        /** LoginResponse rechargeCom. */
        public rechargeCom: string;

        /** LoginResponse sdkChannelId. */
        public sdkChannelId: string;

        /** LoginResponse bendExpireAt. */
        public bendExpireAt: (number|Long);

        /** LoginResponse bendType. */
        public bendType: number;

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

        /** PbSvrInfo id */
        id?: (number|null);

        /** PbSvrInfo name */
        name?: (string|null);

        /** 服务器名称 * */
        mergerName?: (string|null);

        /** PbSvrInfo area */
        area?: (string|null);

        /** PbSvrInfo host */
        host?: (string|null);

        /** PbSvrInfo port */
        port?: (string|null);

        /** PbSvrInfo isNew */
        isNew?: (number|null);

        /** PbSvrInfo status */
        status?: (number|null);

        /** PbSvrInfo sort */
        sort?: (number|null);

        /** PbSvrInfo appId */
        appId?: (string|null);

        /** PbSvrInfo serverId */
        serverId?: (number|null);

        /** PbSvrInfo indexId */
        indexId?: (number|null);

        /** PbSvrInfo isClose */
        isClose?: (number|null);

        /** 是否维护 * */
        closeExplain?: (string|null);

        /** 维护说明 * */
        serverDate?: (number|Long|null);
    }

    /** Represents a PbSvrInfo. */
    class PbSvrInfo implements IPbSvrInfo {

        /**
         * Constructs a new PbSvrInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IPbSvrInfo);

        /** PbSvrInfo id. */
        public id: number;

        /** PbSvrInfo name. */
        public name: string;

        /** 服务器名称 * */
        public mergerName: string;

        /** PbSvrInfo area. */
        public area: string;

        /** PbSvrInfo host. */
        public host: string;

        /** PbSvrInfo port. */
        public port: string;

        /** PbSvrInfo isNew. */
        public isNew: number;

        /** PbSvrInfo status. */
        public status: number;

        /** PbSvrInfo sort. */
        public sort: number;

        /** PbSvrInfo appId. */
        public appId: string;

        /** PbSvrInfo serverId. */
        public serverId: number;

        /** PbSvrInfo indexId. */
        public indexId: number;

        /** PbSvrInfo isClose. */
        public isClose: number;

        /** 是否维护 * */
        public closeExplain: string;

        /** 维护说明 * */
        public serverDate: (number|Long);

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

    /** Properties of a TestNetLatency. */
    interface ITestNetLatency {

        /** TestNetLatency time */
        time?: (number|Long|null);
    }

    /** Represents a TestNetLatency. */
    class TestNetLatency implements ITestNetLatency {

        /**
         * Constructs a new TestNetLatency.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.ITestNetLatency);

        /** TestNetLatency time. */
        public time: (number|Long);

        /**
         * Encodes the specified TestNetLatency message. Does not implicitly {@link msgProto.TestNetLatency.verify|verify} messages.
         * @param message TestNetLatency message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.ITestNetLatency, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a TestNetLatency message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TestNetLatency
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.TestNetLatency;

        /**
         * Creates a TestNetLatency message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TestNetLatency
         */
        public static fromObject(object: { [k: string]: any }): msgProto.TestNetLatency;

        /**
         * Creates a plain object from a TestNetLatency message. Also converts values to other types if specified.
         * @param message TestNetLatency
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.TestNetLatency, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TestNetLatency to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ExchangeOptData. */
    interface IExchangeOptData {

        /** ExchangeOptData optData */
        optData?: (string|null);
    }

    /** Represents an ExchangeOptData. */
    class ExchangeOptData implements IExchangeOptData {

        /**
         * Constructs a new ExchangeOptData.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IExchangeOptData);

        /** ExchangeOptData optData. */
        public optData: string;

        /**
         * Encodes the specified ExchangeOptData message. Does not implicitly {@link msgProto.ExchangeOptData.verify|verify} messages.
         * @param message ExchangeOptData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgProto.IExchangeOptData, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ExchangeOptData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ExchangeOptData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msgProto.ExchangeOptData;

        /**
         * Creates an ExchangeOptData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ExchangeOptData
         */
        public static fromObject(object: { [k: string]: any }): msgProto.ExchangeOptData;

        /**
         * Creates a plain object from an ExchangeOptData message. Also converts values to other types if specified.
         * @param message ExchangeOptData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgProto.ExchangeOptData, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ExchangeOptData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ServerInfo. */
    interface IServerInfo {

        /** ServerInfo ip */
        ip?: (string|null);

        /** ServerInfo port */
        port?: (number|null);
    }

    /** Represents a ServerInfo. */
    class ServerInfo implements IServerInfo {

        /**
         * Constructs a new ServerInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IServerInfo);

        /** ServerInfo ip. */
        public ip: string;

        /** ServerInfo port. */
        public port: number;

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

        /** LoginReq version */
        version?: (string|null);

        /** LoginReq platform */
        platform?: (string|null);

        /** LoginReq uid */
        uid?: (string|null);
    }

    /** Represents a LoginReq. */
    class LoginReq implements ILoginReq {

        /**
         * Constructs a new LoginReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.ILoginReq);

        /** LoginReq version. */
        public version: string;

        /** LoginReq platform. */
        public platform: string;

        /** LoginReq uid. */
        public uid: string;

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

        /** LoginAck result */
        result?: (msgProto.ResultCode|null);

        /** LoginAck server */
        server?: (msgProto.IServerInfo|null);

        /** LoginAck gameToken */
        gameToken?: (string|null);

        /** LoginAck gameSvcId */
        gameSvcId?: (string|null);
    }

    /** Represents a LoginAck. */
    class LoginAck implements ILoginAck {

        /**
         * Constructs a new LoginAck.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.ILoginAck);

        /** LoginAck result. */
        public result: msgProto.ResultCode;

        /** LoginAck server. */
        public server?: (msgProto.IServerInfo|null);

        /** LoginAck gameToken. */
        public gameToken: string;

        /** LoginAck gameSvcId. */
        public gameSvcId: string;

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

        /** VerifyReq gameToken */
        gameToken?: (string|null);

        /** VerifyReq gameSvcId */
        gameSvcId?: (string|null);

        /** VerifyReq accountId */
        accountId?: (number|Long|null);
    }

    /** Represents a VerifyReq. */
    class VerifyReq implements IVerifyReq {

        /**
         * Constructs a new VerifyReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IVerifyReq);

        /** VerifyReq gameToken. */
        public gameToken: string;

        /** VerifyReq gameSvcId. */
        public gameSvcId: string;

        /** VerifyReq accountId. */
        public accountId: (number|Long);

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

        /** VerifyAck result */
        result?: (msgProto.ResultCode|null);
    }

    /** Represents a VerifyAck. */
    class VerifyAck implements IVerifyAck {

        /**
         * Constructs a new VerifyAck.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgProto.IVerifyAck);

        /** VerifyAck result. */
        public result: msgProto.ResultCode;

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
        noError = 0,
        gateNotFound = 1,
        gateAddressError = 2,
        gameNotFound = 3
    }
}
