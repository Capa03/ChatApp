import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UnixToTimestampPipe } from './unix-to-timestamp.pipe';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    UnixToTimestampPipe
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports:[
    CommonModule,
    FormsModule,
    UnixToTimestampPipe,
    MatIconModule
  ]
})
export class SharedModule { }
