import { Component, OnInit } from '@angular/core';
import { ChatInterface } from 'src/app/models/chatInterface';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit{
  chatList: ChatInterface[] | undefined;

  constructor(private chatService: ChatService){}

  ngOnInit(): void {
   this.chatService.getChats().subscribe((chats: ChatInterface[]) =>{
      this.chatList = chats;
   });
  }

}
