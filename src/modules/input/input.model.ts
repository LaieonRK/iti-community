export interface MessageSentEventPayload {
    date: Date;
    message: string;
    file?: File;
}