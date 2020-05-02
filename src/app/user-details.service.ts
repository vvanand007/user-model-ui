import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  private userDetailUrl = "http://localhost:3000/user";

  constructor(private http: HttpClient) { }

  getUserDetail = () => {
    return this.http.get<any>(this.userDetailUrl);
  }
}
