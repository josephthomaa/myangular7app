import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Login,Register,Myprofile } from './mycard';

@Injectable({
  providedIn: 'root'
})
export class MycardserviceService {
  baseUrl = 'http://localhost:8079/learnang7/api';
  login: Login[];
  register:Register[];
  myprofile:Myprofile[];

  constructor(private http: HttpClient) { }

  loginCheck(loginData: Login): Observable<Login[]> {
    return this.http.post(`${this.baseUrl}/login`, { data: loginData })
      .pipe(map((res) => {
          return res['data'];
      }),
      catchError(this.handleError));
  }

  newRegistration(regData: Register): Observable<Register[]> {
    return this.http.post(`${this.baseUrl}/registration.php`, { data: regData })
      .pipe(map((res) => {
        return res['data'];
      }),
      catchError(this.handleError));
    }
  saveUserData(profData: Myprofile): Observable<Myprofile[]> {
      return this.http.post(`${this.baseUrl}/registration.php`, { data: profData })
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
