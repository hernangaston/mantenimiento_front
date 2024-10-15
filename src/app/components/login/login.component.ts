import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { UsersService } from "../../service/users.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
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
      email: ['', [Validators.required, Validators.email]],  // Campo de email con validación de email y requerido
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.formData.valid) {
      console.log('Formulario válido:', this.formData.value);      
      this.login(this.formData.value);
    } else {
      console.log('Formulario no válido');
    }
  }

  login(user: {}) {
    this.service.login(user).subscribe({
      next: (response) => {
        this.router.navigate(['dashboard'])
      },
      error: () => {
        console.log("there was an error");
      }
    });
  }
}