import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private myAppUrl = "http://localhost:8080/";
  private myApiUrl = "users/";

  constructor(private http: HttpClient) { }

  getListUsers(): Observable<any> {
    return this.http.get(this.myAppUrl + this.myApiUrl);
  }

  getUser(id: number): Observable<any> {
    return this.http.get(this.myAppUrl + this.myApiUrl + id);
  }

  saveUser(user: User): Observable<any> {
    return this.http.post((this.myAppUrl + this.myApiUrl), user);
  }

  updateUser(id: number, user: User): Observable<any> {
    return this.http.put((this.myAppUrl + this.myApiUrl + id), user);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(this.myAppUrl + this.myApiUrl + id);
  }
}
