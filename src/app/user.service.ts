import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    "Authorization":environment.githubApiToken
  })
}
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getUserInfo(userName: string): Observable<any> {
      const url = `https://api.github.com/users/${userName}`;
      return this.http.get<any>(url, httpOptions);
    }
    getRepo(userName: string): Observable<any> {
      const url = `https://api.github.com/users/${userName}/repos`;
      return this.http.get<any>(url, httpOptions);
    }

  }

