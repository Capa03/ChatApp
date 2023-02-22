import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, tap, throwError } from "rxjs";
import { MessageInterface } from "../models/messageInterface";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private messageUrl: string = "/api/messages/messages.json";
  private messageList: MessageInterface[] | undefined;

  constructor(private http: HttpClient){}

  getMessages(): Observable<MessageInterface[]>{
    return this.http.get<MessageInterface[]>(this.messageUrl).pipe(
        tap((messageList: MessageInterface[]) => this.messageList = messageList),
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
