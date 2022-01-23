export enum RoomType {
    Text = "text"
}

export interface Room {
    id: string;
    name: string;
    type: RoomType;
}