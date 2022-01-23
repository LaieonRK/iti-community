import { Injectable } from '@angular/core';
import { RoomType, Room } from 'src/modules/room/room.model';
import { RoomCommands } from '../../room.commands';
import { RoomLocalStorage } from './room.storage';

@Injectable()
export class LocalRoomCommands extends RoomCommands {
    private storage: RoomLocalStorage = new RoomLocalStorage();

    async create(name: string, type: RoomType): Promise<Room> {
        const room = {
            id: (Math.random() * 1000).toString(),
            name,
            type
        };
        const rooms = this.storage.getValue();
        rooms.push(room);
        this.storage.setValue(rooms);
        return room;
    }
}