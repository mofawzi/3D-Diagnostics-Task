import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  constructor(private http: HttpClient) { }

  // Get single user --> API
  getSingleUser(): Observable<any> {
    return this.http.get(
      'https://dummyjson.com/users/1'
    );
  }

  // Get Users --> API
  getUsers(): Observable<any> {
    return this.http.get(
      'https://dummyjson.com/users'
    );
  }
}

