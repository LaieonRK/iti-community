import { Injectable } from '@angular/core';
import { Room, RoomType } from '../../../room.model';
import { RoomQueries } from '../../room.queries';
import { RoomLocalStorage } from './room.storage';

@Injectable()
export class LocalRoomQueries extends RoomQueries {
    private storage: RoomLocalStorage = new RoomLocalStorage();

    async getAll(): Promise<Room[]> {
        return this.storage.getValue();
    }
}