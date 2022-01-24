import { Room } from "../room/room.model";
import { User } from "../user/user.model";

export interface PostBase {
    id: string;
    likes: number;
    liked: boolean;
    roomId: string,
    createdAt: string;
    createdBy: User;
    attachementUrl?: string;
}

/**
 * Post data model returned by the server
 */
export interface PostData extends PostBase {
    message: string;
}

export interface Post extends PostBase {
    message: PostMessage;
}

export interface PostMessage {
    text: MessageTextElement;
    attachements: MessageElement[];
}

export interface MessageTextElement {
    type: 'text';
    content: string;
}

export interface MessageYoutubeElement {
    type: 'youtube';
    videoId: string;
}

export interface MessageLinkElement {
    type: 'link';
    title: string;
    image: string;
    description: string;
}

export interface MessageMediaElement<T extends string> {
    type: T;
    url: string;
}

export interface MessageImageElement extends MessageMediaElement<'image'> {
    type: 'image';
    url: string;
}

export interface MessageVideoElement extends MessageMediaElement<'video'> {
    type: 'video';
    url: string;
}

export interface MessageAudioElement extends MessageMediaElement<'audio'> {
    type: 'audio';
    url: string;
}

export type MessageElement =
    MessageTextElement |
    MessageYoutubeElement |
    MessageImageElement |
    MessageVideoElement |
    MessageAudioElement;
