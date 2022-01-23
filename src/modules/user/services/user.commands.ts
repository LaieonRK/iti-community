import { Injectable } from '@angular/core';
import { User } from '../user.model';

@Injectable()
export abstract class UserCommands {
    abstract register(username: string, password: string): Promise<{ id: string }>;
    abstract update(user: {
        id: string,
        username?: string,
        photo?: File
    }): Promise<User>;
}