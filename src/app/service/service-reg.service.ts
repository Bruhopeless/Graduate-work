import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceRegService {

  constructor(private http: HttpClient ) { }

  urlDb = 'http://localhost:3000/users';

  addUsers(user: userModel ): Observable<any[]> {
    return this.http.post<any[]>(this.urlDb, user)
  }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.urlDb);
  }

  swapRole(user: userModel): Observable<any[]> {
    return this.http.put<any[]>(`${this.urlDb}/${user.id}`, user);
  }
}

export class userModel {
  firstName: string;
  lastName: string;
  email: string;
  pass: string;
  role: string;
  id: number;
}
