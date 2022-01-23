import { Injectable } from '@angular/core';
import { PageModel, PageResult } from 'src/modules/common/Pagination';
import { PostData } from '../../../post.model';
import { PostQueries } from '../../post.queries';
import { PostLocalStorage } from './post.storage';

@Injectable()
export class LocalPostQueries extends PostQueries {
    private storage: PostLocalStorage = new PostLocalStorage();

    async getLast(roomId: string, page: PageModel): Promise<PageResult<PostData>> {
        return {
            ...page,
            data: this.storage.getValue()[roomId] || []
        }
    }
}