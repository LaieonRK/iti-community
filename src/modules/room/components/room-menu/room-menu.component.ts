import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FeedStore } from 'src/modules/feed/feed.store';
import { Room } from '../../room.model';
import { RoomStore } from '../../room.store';
import { RoomQueries } from '../../services/room.queries';
import { RoomService } from '../../services/room.service';
import { RoomSocketService } from '../../services/room.socket.service';
@Component({
  selector: 'app-room-menu',
  templateUrl: './room-menu.component.html',
  styleUrls: ['./room-menu.component.less']
})
export class RoomMenuComponent implements OnInit {
  roomId$: Observable<string | undefined>;

  rooms: Room[];
  router: Router;

  constructor(private feedStore: FeedStore, private queries: RoomQueries, private roomSocketService: RoomSocketService) {
    this.roomId$ = feedStore.roomId$;
    this.rooms = [];
  }

  async ngOnInit() {
    this.rooms = await this.queries.getAll();
    console.log(this.rooms[0])
    if (this.feedStore.value.roomId) {
      this.router.navigate([`app/${this.feedStore.value.roomId}`]);
    } else {
      this.router.navigate([`app/${this.rooms[0].id}`]);
    }
  }

  goToRoom(room: Room) {
    console.log(room);
    this.router.navigateByUrl(`app/${room.id}`);
  }
}
