import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { ChatInterface } from '../models/chatInterface';
import { MessageInterface } from '../models/messageInterface';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit, OnChanges{



  @Input() chat: ChatInterface | null = null;
  messageList: MessageInterface[] | undefined;

  constructor(private messageService: MessageService){}


ngOnInit(): void {

}

ngOnChanges(changes: SimpleChanges): void {
  if(changes['chat']){
    this.messageService.getMessages().subscribe(messageList =>{
      this.messageList = messageList.filter(message => message.chatId == this.chat?.chatId);
    })
  }
}





}
