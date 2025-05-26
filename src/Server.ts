import cors from '@elysiajs/cors';
import { Elysia } from 'elysia';
import { Net } from './Net';

export default class Server {
    static init() {
        console.log('Server initialized, Secret from ENV: ', Bun.env.SECRET);
        new Elysia()
            .use(cors())
            .post('/', ({ body }) => JSON.stringify(Server.onEvent(body)))
            .listen(3000, () => console.log('Listening on port 3000'));
    } static onEvent(body: any) {
        switch ((body as Net.Net_C_I).m) {
            case "ping":
                return Server.#ping();
            case "chat":
                return Server.#chat(body);
            default:
                return false;
        }
    }
    static #chat(body: Net.C.CHAT): Net.S.CHAT_RESPONSE {
        console.log("Chat message received: ", body.message);
        return {
            message: "response to chat"
        };
    }
    static #ping(): Net.S.PONG {
        return {
            m: "pong"
        };
    }
}