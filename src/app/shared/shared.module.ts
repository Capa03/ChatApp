import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UnixToTimestampPipe } from './unix-to-timestamp.pipe';



@NgModule({
  declarations: [


    UnixToTimestampPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CommonModule,
    FormsModule,
    UnixToTimestampPipe,
  ]
})
export class SharedModule { }
