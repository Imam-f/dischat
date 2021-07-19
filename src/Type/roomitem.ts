export class roomitem {
    id: number;
    name: string;
    creator: string;
    code: string;
    
    constructor(id: number, name: string, creator: string, code: string) {
        this.id = id;
        this.name = name;
        this.creator = creator;
        this.code = code;
    }
};


export class roomitemcomponent {
    items: roomitem;
    join: any;
    constructor(items:roomitem) {
        this.items = items;
    }
}

export class roomlist {
    rooms: string[];
    constructor(rooms: string[]) {
        this.rooms = rooms;
    }
}