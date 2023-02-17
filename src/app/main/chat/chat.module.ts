import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatListComponent } from './chat-list.component';
import { SearchBarComponent } from './searchBar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    ChatListComponent,
    SearchBarComponent,
  ],
  imports: [
    SharedModule
  ],
  exports:[
    ChatListComponent,
    SearchBarComponent,
  ],
})
export class ChatModule { }
