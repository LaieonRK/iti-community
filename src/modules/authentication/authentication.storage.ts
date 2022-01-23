import { Injectable } from '@angular/core';
import { TypedLocalStorage } from '../common/TypedLocalStorage';
import { AuthenticationState } from './authentication.state';

/**
 * Persist the {@link AuthenticationState} in the localStorage
 */
@Injectable()
export class AuthenticationStorage extends TypedLocalStorage<AuthenticationState | null> {
    public static readonly STORAGE_KEY = "iti.authentication";

    constructor() {
        super(AuthenticationStorage.STORAGE_KEY, null);
    }
}