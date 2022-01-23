import { Component, OnInit } from '@angular/core';
import { FeedStore } from 'src/modules/feed/feed.store';
import { PostMapper } from 'src/modules/feed/services/post.mapper';
import { PostService } from 'src/modules/feed/services/post.service';
import { MessageSentEventPayload } from 'src/modules/input/input.model';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.less']
})
export class RoomComponent implements OnInit {
  constructor(private postService: PostService, private mapper: PostMapper, private store: FeedStore) {

  }

  ngOnInit(): void {
  }

  async onMessage(payload: MessageSentEventPayload) {
    if (!this.store.value.roomId) {
      return;
    }
    const post = await this.postService.create(this.store.value.roomId, payload.message, payload.file);
    this.store.appendPost(this.mapper.map(post));
  }
}
