import { Injectable, } from '@angular/core';
import { User, UserRegistration } from 'src/modules/user/user.model';
import { UserCommands } from '../../user.commands';
import { UserLocalStorage } from './user.storage';
import { toBase64 } from 'src/modules/common/helpers';

@Injectable()
export class LocalUserCommands extends UserCommands {
    private storage: UserLocalStorage = new UserLocalStorage();

    async update(user: {
        id: string,
        username?: string,
        photo?: File
    }): Promise<User> {
        const users = this.storage.getValue();
        const usr = users[user.id];

        if (!usr) {
            throw new Error("User not found");
        }
        
        if (user.photo) {
            const base64Img = await toBase64(user.photo);
            users[user.id].photoUrl = `data:image/png;${base64Img}`;
        }

        if (user.username) {
            users[user.id].username = user.username;
        }

        this.storage.setValue(users);

        return users[user.id];
    }

    async register(username: string, password: string): Promise<{ id: string; }> {
        const user: UserRegistration = {
            id: Math.round(Math.random() * 10000).toString(),
            username,
            password,
        }
        const users = this.storage.getValue();
        users[user.id] = user;
        this.storage.setValue(users);

        return {
            id: user.id
        }
    }
}