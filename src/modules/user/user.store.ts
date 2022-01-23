import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '../common/Store';
import { User } from './user.model';
import { UserState } from './user.state';

@Injectable()
export class UserStore extends Store<UserState> {
    user$: Observable<User | undefined>;
    
    constructor() {
        super({});
        this.user$ = this.get(s => s.user);
    }
}
