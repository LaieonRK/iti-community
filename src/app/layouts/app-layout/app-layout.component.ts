import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { element } from 'protractor';
import { Observable, Subscription } from 'rxjs';
import { AuthenticationStore } from 'src/modules/authentication/authentication.store';
import { WebsocketConnection } from 'src/modules/common/WebsocketConnection';
import { AnyNotification } from 'src/modules/notification/notification.model';
import { NotificationStore } from 'src/modules/notification/notification.store'

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.less']
})
export class AppLayoutComponent implements OnInit, OnDestroy {
  sub?: Subscription;
  notifications$ : Observable<AnyNotification[]>;
  showDrawer: boolean = false;
  constructor(private socket: WebsocketConnection, private authStore: AuthenticationStore, private notificationStore : NotificationStore) {
  }

  async ngOnInit() {
    this.sub = this.authStore.accessToken$.subscribe(accessToken => {
      if (accessToken) {
        this.socket.connect(accessToken);
      } else {
        this.socket.disconnect();
      }
    });
    this.notifications$ = this.notificationStore.get(s => s.notifications);
    this.notifications$.subscribe({
      next : element => {
        console.log("Nouvelle notification détectée");
        element.forEach(notif =>
            console.log(notif.payload.user.username + " added a room")
          )
      }
    })
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
  onToggleNotifications() {
      this.showDrawer = !this.showDrawer;
  }
}
