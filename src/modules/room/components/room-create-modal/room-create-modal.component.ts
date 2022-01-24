import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Room, RoomType } from '../../room.model';
import { RoomService } from '../../services/room.service';
import {AppNotification} from 'src/modules/notification/notification.model';
import {User} from 'src/modules/user/user.model';
import { NotificationStore } from 'src/modules/notification/notification.store';

class RoomAddedNotif {
  user : User;
  room : Room;
}

export class CreateRoomFormModel {
  name: string = "";
  type: RoomType = RoomType.Text;
}

@Component({
  selector: 'app-room-create-modal',
  templateUrl: './room-create-modal.component.html',
  styleUrls: ['./room-create-modal.component.less']
})
export class RoomCreateModalComponent implements OnInit {
  @ViewChild("f")
  form: NgForm;

  isVisible: boolean = false;
  model = new CreateRoomFormModel();

  constructor(private roomService: RoomService, private notificationStore : NotificationStore) {

  }

  ngOnInit(): void {
  }

  async onOk() {
    if (this.form.form.valid) {
      let room = await this.roomService.create(this.model.name, this.model.type);
      let user : User = {
        id : "",
        username : ""
      }
      let roomNotif : RoomAddedNotif = {
        user,
        room,
      }
      let roomAddedNotification : AppNotification<'room_added', RoomAddedNotif> = {
        id : "room added",
        timestamp : 0,
        subject : 'room_added',
        payload : roomNotif
      }

      this.notificationStore.appendNotification(roomAddedNotification)
      this.close();
    }
  }

  onCancel() {
    this.close();
  }

  open() {
    this.form.resetForm(new CreateRoomFormModel());
    this.isVisible = true;
  }

  close() {
    this.isVisible = false;
  }
}
