import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatModule } from './chat/chat.module';
import { MainComponent } from './main.component';
import { SearchBarComponent } from './chat/searchBar/search-bar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    CommonModule,
    ChatModule,
    RouterModule.forChild([
      {path: "chat", component:MainComponent},
      {path: "chat/:id",
      component: MainComponent
    },
    ]),
  ],
  exports:[
    MainComponent
  ]
})
export class MainModule { }
