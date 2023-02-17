import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { User } from './User';
import { Observable, catchError, tap, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user:User[] = [];
constructor(private http: HttpClient) { }
private api = "../login/user.json"

getUser(): User[]{
  return this.user = [
    {
      "username": "David",
      "password": "123456"
    }
  ]

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
