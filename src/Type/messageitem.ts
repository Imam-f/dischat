import { IMessageEvent } from "websocket";

export class messageitem {
    type : string;
    [payload : string] : any;

    constructor(type : string) {
        this.type = type
    }
}

export function messageType(e : IMessageEvent) : string {
    return e.toString();
}