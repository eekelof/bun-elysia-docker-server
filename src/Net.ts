
export declare namespace Net {
    namespace C {
        interface CHAT {
            m: "chat";
            message: string,
        }
        interface PING {
            m: "ping";
        }
    }
    namespace S {
        interface CHAT_RESPONSE {
            message: string,
        }
        interface PONG {
            m: "pong";
        }
    }
    type Net_C_I = C.CHAT | C.PING;

    type Net_S_I = S.CHAT_RESPONSE | S.PONG;
}