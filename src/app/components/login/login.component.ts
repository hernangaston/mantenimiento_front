import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  email: string = "manuelizagoyen@gmail.com"; 
  password: string = "elmaspicante"; 

  constructor(public router: Router) {}

  login() {
    const user = { email: this.email, password: this.password };    
  }
}