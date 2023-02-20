import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MessageListComponent } from './message-list.component';



@NgModule({
  declarations: [
    MessageListComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    MessageListComponent
  ]
})
export class MessageModule { }
