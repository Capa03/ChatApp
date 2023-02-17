import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatModule } from './chat/chat.module';
import { MainComponent } from './main.component';
import { SearchBarComponent } from './chat/searchBar/search-bar.component';



@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    CommonModule,
    ChatModule,
  ],
  exports:[
    MainComponent
  ]
})
export class MainModule { }
