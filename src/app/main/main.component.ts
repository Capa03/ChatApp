import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ChatInterface } from '../models/chatInterface';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{
  chatObservable: Observable<ChatInterface> | undefined;

  constructor(private route: ActivatedRoute, private chatService: ChatService) { }


  ngOnInit(): void {
    this.chatObservable = this.chatService.getSubject();
  }

}
