import { IMessageEvent } from "websocket";

export class messageitem {
    sender : string;
    date: string;
    load : string;

    constructor(sender : string, date: string, load: string) {
        this.sender = sender;
        this.date = date;
        this.load = load;
    }
}

export function messageType(e : IMessageEvent) : string {
    return e.toString();
}