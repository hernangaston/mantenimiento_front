import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { UsersService } from "../../service/users.service";
import { FormBuilder, FormGroup } from "@angular/forms";
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  formData: FormGroup;

  constructor(private fb: FormBuilder, public router: Router, private service: UsersService, private cookie: CookieService) {
    this.formData = this.fb.group({
      email: ['', /*[Validators.required, Validators.email]*/],  // Email field with validation
      password: ['', /*[Validators.required, Validators.minLength(6)]*/],  // Password field with validation
    });
  }

  login() {
    const user = { email: this.formData.value.email, password: this.formData.value.password };
    this.service.login(user).subscribe({
      next: (response) =>{
        this.router.navigate(['dashboard'])},
      error: () => { 
        console.log("there was an error");
      }
    });
  }
}