import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { UsersService } from "../../service/users.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CookieService } from "ngx-cookie-service";
import { Usuario } from "../../interfaces/usuario";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  formData: FormGroup;

  constructor(private fb: FormBuilder, public router: Router, private userService: UsersService, private cookie: CookieService) {
    this.formData = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.formData.valid) {
      this.login(this.formData.value);
    } else {
      console.log('Formulario no válido');
    }
  }

  login(user:Usuario) {
    this.userService.login(user).subscribe({
      next: (response) => {
        if (response && response.token) {
          this.userService.setToken(response.token);
          this.userService.setRol(response.user.rol);          
        }else{
          console.log('no hay response');
        }
      },
      error: (err) => {
        console.log("Error de servidor: " + err.message);
      },
      complete: () => {
        this.router.navigate(['dashboard']);
      }

    });
  }
}