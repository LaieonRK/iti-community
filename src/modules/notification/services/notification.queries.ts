import { AnyNotification } from "../notification.model";

export abstract class NotificationQueries {
    abstract getNotifications(): Promise<AnyNotification[]>;
}