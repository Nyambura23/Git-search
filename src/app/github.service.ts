import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
private username ='Nyambura23'
  constructor(private http: HttpClient) { }
 
 
getUser() {
const url = `https://api.github.com/users/${this.username}`;
  return this.http.get<any>(url);
  }
}
