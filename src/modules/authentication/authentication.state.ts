export interface AuthenticationState {
    /**
     * The authenticated user ID
     */
    userId: string;

    /**
     * Bearer access token use for authorization
     */
    accessToken: string;

    /**
     * Expiration time in milliseconds
     */
    expiresAt: number;
}
