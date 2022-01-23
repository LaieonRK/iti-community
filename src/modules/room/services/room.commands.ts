import { Room, RoomType } from '../room.model';

export abstract class RoomCommands {
    abstract create(name: string, type: RoomType): Promise<Room>;
}