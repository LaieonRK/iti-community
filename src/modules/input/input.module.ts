import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { UserModule } from '../user/user.module';
import { FeedInputComponent } from './components/feed-input/feed-input.component';

@NgModule({
  declarations: [FeedInputComponent],
  exports: [FeedInputComponent],
  imports: [
    CommonModule,
    FormsModule,
    UserModule,
    NzButtonModule,
    NzIconModule,
    NzUploadModule,
    NzInputModule,
    NzPopoverModule,
    NzTagModule
  ]
})
export class InputModule { }
