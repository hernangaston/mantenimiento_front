import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject, Observable, BehaviorSubject } from "rxjs";
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  private apiUrl = 'http://localhost:3000';

  private authStatusListener = new Subject<boolean>();
  private currentUser = new BehaviorSubject<string | null>(null);

  constructor(private cookie: CookieService, private http: HttpClient) { 
    const storedUser = this.cookie.get('currentUser');
    if (storedUser) {
      this.currentUser.next(storedUser);
    }
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  login(user:any): Observable<any> {
    this.cookie.set('currentUser', user.email);
    this.currentUser.next(user.email);
    this.authStatusListener.next(true);
    return this.http.post(`${this.apiUrl}/login`, user);
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
 
  setToken(token: string): void {
    this.cookie.set('auth-token', token);
  }

  getToken(): string {
    return this.cookie.get('auth-token');
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  logout(): void {
    this.cookie.delete('currentUser');
    this.currentUser.next(null);
    this.authStatusListener.next(false);
    this.cookie.delete('auth-token');
  }

  getCurrentUser() {
    return this.currentUser.asObservable();
  }
}
