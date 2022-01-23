import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationStore } from './authentication.store';
import { AuthenticationStorage } from './authentication.storage';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { AuthenticationCommands } from './services/authentication.commands';
import { LocalAuthenticationCommands } from './services/plateform/local/LocalAuthenticationCommands';
import { NzMessageModule } from "ng-zorro-antd/message";
import { AuthenticationService } from './services/authentication.service';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpAuthenticationCommands } from './services/plateform/http/authentication.commands.http';
import { AuthenticationInterceptor } from './authentication.interceptor';

@NgModule({
  declarations: [LoginComponent],
  exports: [LoginComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true
    },
    {
      provide: AuthenticationCommands,
      useClass: LocalAuthenticationCommands
    },
    AuthenticationService,
    AuthenticationStore,
    AuthenticationStorage,
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    NzFormModule,
    NzButtonModule,
    NzMessageModule
  ]
})
export class AuthenticationModule { }
