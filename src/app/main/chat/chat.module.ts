import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatListComponent } from './chat-list.component';
import { SearchBarComponent } from './searchBar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ChatListComponent,
    SearchBarComponent,
  ],
  imports: [
    SharedModule,
    RouterModule
  ],
  exports:[
    ChatListComponent,
    SearchBarComponent,
  ],
})
export class ChatModule { }
