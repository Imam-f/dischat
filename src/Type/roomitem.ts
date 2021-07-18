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