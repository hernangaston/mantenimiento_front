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

  dashboard(user: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/dashboard`);
  }


  deleteToken(): void {
    this.cookie.delete('auth-token', '/');
  }
 
  isAuthenticated(): boolean {
    this.http.get(`${this.apiUrl}/protected`);
    return this.cookie.check('auth-token');
  }

  logout(): void {
    this.deleteToken();
    this.authStatusListener.next(false);
  }
}
