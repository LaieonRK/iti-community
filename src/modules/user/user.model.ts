
export interface User {
    id: string;
    username: string;
    photoUrl?: string;
}

/**
 * Local only
 */
export interface UserRegistration extends User {
    password: string;
}