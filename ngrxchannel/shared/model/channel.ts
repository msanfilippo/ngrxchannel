export interface Channel {

    id:number;
    name:string;
    messageIds: number[];
    users: {[key:number]: number}

}
