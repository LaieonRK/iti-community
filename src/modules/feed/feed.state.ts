import { Post } from './post.model';

export interface FeedState {
    roomId?: string;
    posts: Post[];
}