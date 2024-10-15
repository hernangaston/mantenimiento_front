import { Component } from '@angular/core';
import { UsersService } from '../../service/users.service';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})

export class RegistroComponent {
  formData: FormGroup;  

  constructor(private formBuilder: FormBuilder, private service: UsersService, private router: Router) { 
   
    this.formData = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],  // Formato de email válido
      password: ['', [Validators.required, Validators.minLength(6)]], 
      confirmPassword:['', [Validators.required]] 
    }, {
      validator: this.passwordMatchValidator 
    });
  }

  passwordMatchValidator(formGroup: AbstractControl): { [key: string]: boolean } | null {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;

    if (password !== confirmPassword) {
      return { notSame: true };
    }
    return null;
  }

  registro(nuevo: any) {
    if (nuevo.password === nuevo.confirmPassword) {
      this.service.register({ email: nuevo.email, password: nuevo.password }).subscribe({
        next: (response) => {
          console.log(response.message);
        },
        error: (error) => { console.error('Error al registrar usuario:', error); },
        complete: () => { this.router.navigate(['/login']); }
      });
    } else {
      alert("passwords don't match");
    }
  }

  onSubmit() {
    if (this.formData.valid) {
      const nuevo = this.formData.value;
      this.registro(nuevo);
    } else {
      console.log("Formulario inválido");
    }
  }
}
