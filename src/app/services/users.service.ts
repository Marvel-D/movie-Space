import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { user, IUser } from 'src/mock/users';
import { map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  baseUrl = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}
  users$: IUser[] = [];

  getAllUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.baseUrl + 'users').pipe(
      map((res) => {
        this.users$ = res;
        return res;
      })
    );
  }
}
