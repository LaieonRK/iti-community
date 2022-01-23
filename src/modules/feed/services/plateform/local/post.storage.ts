import { TypedLocalStorage } from 'src/modules/common/TypedLocalStorage';
import { PostData } from 'src/modules/feed/post.model';

interface PostStorageData {
    [id: string]: PostData[];
}

export class PostLocalStorage extends TypedLocalStorage<PostStorageData> {
    private static StorageKey = "iti.posts";
    constructor() {
        super(PostLocalStorage.StorageKey, {
            "default": []
        });
    }
}