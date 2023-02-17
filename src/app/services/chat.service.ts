import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, tap, throwError } from "rxjs";
import { ChatInterface } from "../models/chatInterface";

@Injectable({
    providedIn:"root"
})
export class ChatService{

    private chatUrl: string = "api/chats/chats.json";

    constructor(private http: HttpClient){}

    getChats(): Observable<ChatInterface[]>{
        return this.http.get<ChatInterface[]>(this.chatUrl).pipe(
            tap(data => console.log('All: ', JSON.stringify(data))),
            catchError(this.handleError)
          );
    }

    private handleError(err: HttpErrorResponse): Observable<never> {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          errorMessage = `An error occurred: ${err.error.message}`;
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(() => errorMessage);
      }

      getTempList(): ChatInterface[]{
        return [
          {
            "chatId": 1,
            "chatName": "This is the chat 1",
            "imgLink": "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/man-person-icon.png",
            "lastMessageContent": "This is a test message",
            "lastMessageUnixTime": 1676632604
        },
        {
          "chatId": 2,
          "chatName": "This is the chat 2",
          "imgLink": "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/man-person-icon.png",
          "lastMessageContent": "This is a test message",
          "lastMessageUnixTime": 1674632504
        },
        {
          "chatId":3 ,
          "chatName": "This is the chat 3",
          "imgLink": "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/man-person-icon.png",
          "lastMessageContent": "This is a test message",
          "lastMessageUnixTime": 1636631359
        },
        {
          "chatId": 4,
          "chatName": "This is the chat 4",
          "imgLink": "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/man-person-icon.png",
          "lastMessageContent": "This is a test message",
          "lastMessageUnixTime": 1676622959
        },
        {
          "chatId": 5,
          "chatName": "This is the chat 5",
          "imgLink": "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/man-person-icon.png",
          "lastMessageContent": "This is a test message",
          "lastMessageUnixTime": 1676626089
        },
        {
          "chatId": 6,
          "chatName": "This is the chat 6",
          "imgLink": "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/man-person-icon.png",
          "lastMessageContent": "This is a test message",
          "lastMessageUnixTime": 1676630009
        },
        {
          "chatId": 1,
          "chatName": "This is the chat 1",
          "imgLink": "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/man-person-icon.png",
          "lastMessageContent": "This is a test message",
          "lastMessageUnixTime": 1676631959
        },
        {
        "chatId": 2,
        "chatName": "This is the chat 2",
        "imgLink": "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/man-person-icon.png",
        "lastMessageContent": "This is a test message",
        "lastMessageUnixTime": 1676621959
        },
        {
        "chatId":3 ,
        "chatName": "This is the chat 3",
        "imgLink": "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/man-person-icon.png",
        "lastMessageContent": "This is a test message",
        "lastMessageUnixTime": 1676631359
        },
        {
        "chatId": 4,
        "chatName": "This is the chat 4",
        "imgLink": "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/man-person-icon.png",
        "lastMessageContent": "This is a test message",
        "lastMessageUnixTime": 1676622959
        },
        {
        "chatId": 5,
        "chatName": "This is the chat 5",
        "imgLink": "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/man-person-icon.png",
        "lastMessageContent": "This is a test message",
        "lastMessageUnixTime": 1676626089
        },
        {
        "chatId": 6,
        "chatName": "This is the chat 6",
        "imgLink": "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/man-person-icon.png",
        "lastMessageContent": "This is a test message",
        "lastMessageUnixTime": 1676630009
        }
        ]
      }
}
