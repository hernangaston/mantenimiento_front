import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject, Observable } from "rxjs";
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  private apiUrl = 'http://localhost:3000';
  private authStatusListener = new Subject<boolean>();

  constructor(private cookie: CookieService, private http: HttpClient) { }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  login(user: any): Observable<any> {
    this.authStatusListener.next(true);
    return this.http.post(`${this.apiUrl}/login`, user, { withCredentials: true });
  }

  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/registro`, user);
  }

  setToken(token: string): void  {
    this.cookie.set('token', token, { path: '/', secure: true, sameSite: 'Strict' });
  }

  getToken() {
    return this.cookie.get("token");
  }

  getUser() {
    return this.http.get(`${this.apiUrl}/users/2`);
  }

  deleteToken(): void {
    this.cookie.delete('token', '/');
  }
 
  isAuthenticated(): boolean {
    return this.cookie.check('token');
  }

  logout(): void {
    this.deleteToken();
    this.authStatusListener.next(false);
  }
}
