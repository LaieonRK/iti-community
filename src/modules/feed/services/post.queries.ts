import { Injectable } from '@angular/core';
import { PageModel, PageResult } from 'src/modules/common/Pagination';
import { PostData } from '../post.model';

@Injectable()
export abstract class PostQueries {
    abstract getLast(roomId: string, page: PageModel): Promise<PageResult<PostData>>;
}