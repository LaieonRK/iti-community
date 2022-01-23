import { TypedLocalStorage } from 'src/modules/common/TypedLocalStorage';
import { Room, RoomType } from 'src/modules/room/room.model';

export class RoomLocalStorage extends TypedLocalStorage<Room[]> {
    private static StorageKey = "ity.room";

    constructor() {
        super(RoomLocalStorage.StorageKey, [{
            id: "default",
            name: "Général",
            type: RoomType.Text
        }]);
    }
}