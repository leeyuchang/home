import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  baseUrl = 'https://powerful-sierra-61218.herokuapp.com/api/user';

  getUsers() {
    return this.http.get<User[]>(this.baseUrl);
  }

  getUserById(id: string) {
    return this.http.get<User>(this.baseUrl + '/' + id);
  }

  createUser(user: User) {
    return this.http.post(this.baseUrl, user);
  }

  updateUser(user: User) {
    return this.http.put(this.baseUrl + '/' + user.id, user);
  }

  deleteUser(id: string) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}

