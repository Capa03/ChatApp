import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, BehaviorSubject , Subscription, tap, throwError } from "rxjs";
import { ChatInterface } from "../models/chatInterface";

@Injectable({
    providedIn:"root"
})
export class ChatService{

    private chatUrl: string = "/api/chats/chats.json";
    private subject: BehaviorSubject <any> = new BehaviorSubject<any>(null);
    private chatList: ChatInterface[] | undefined;
    chat: ChatInterface | undefined;

    setSubject(chatId: number): void {
      this.chat = this.chatList?.find(chat => chat.chatId == chatId);
      if(this.chat){
        this.subject.next(this.chat);
      }
    }

    getSubject(): Observable<any>{
      return this.subject;
    }

    constructor(private http: HttpClient){}

    getChats(): Observable<ChatInterface[]>{
        return this.http.get<ChatInterface[]>(this.chatUrl).pipe(
            tap((chatList: ChatInterface[]) => this.chatList = chatList),
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


}
