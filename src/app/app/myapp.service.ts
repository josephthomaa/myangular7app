import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Login } from './login';


@Injectable({
  providedIn: 'root'
})
export class MyappService {
  baseUrl = 'http://localhost:8079/myangularapp/myangular7app/api';
  login: Login[];
  constructor(private http: HttpClient) { 

  }
  loginCheck(loginData: Login): Observable<Login[]> {
    return this.http.post(`${this.baseUrl}/login`, { data: loginData })
      .pipe(map((res) => {
          return res['data'];
      }),
      catchError(this.handleError));
}
private handleError(error: HttpErrorResponse) {
  console.log(error);
 
  // return an observable with a user friendly message
  return throwError(error);
}
}
