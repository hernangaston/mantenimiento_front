import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
//import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  setToken: any;
  constructor(private http: HttpClient) {}

  login(user: any): Observable<any> {
    return this.http.post("https://reqres.in/api/login", user);
  }
  register(user: any): Observable<any> {
    return this.http.post("https://reqres.in/api/register", user);
  }
  //setToken(token: String) {
  //  this.cookies.set("token", token);
  //}
  //getToken() {
  //  return this.cookies.get("token");
  //}
  getUser() {
    return this.http.get("https://reqres.in/api/users/2");
  }
}
