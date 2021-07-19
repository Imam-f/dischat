import { IMessageEvent } from "websocket";

export class messageitem {
    type : string;
    messageList : string[];

    constructor(type : string, messageList : string[]) {
        this.type = type;
        this.messageList = messageList;
    }
}

export function messageType(e : IMessageEvent) : string {
    return e.toString();
}