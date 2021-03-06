import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = environment.apiUrl + '/api/users';
  loginUrl = environment.apiUrl + '/login';
  constructor(public http: HttpClient) {
  }
  public register(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

  public login(user: User) {
    return this.http.post(this.loginUrl, user, {responseType: 'text'}).pipe();
  }
  public currentUser(): Observable<User> {
    return this.http.post<User>(this.apiUrl + '/current', {});
  }
  public validate(login: string): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/validate', login).pipe(
    );
  }
  public updatePassword(user: User): Observable<any> {
    return this.http.post<User>(this.apiUrl + '/updatePassword', user);
  }

  public getAllUsersByRoleUser(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl + '/getAllUsersByRoleUser');
  }

}
