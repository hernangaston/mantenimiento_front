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

  constructor(private fb: FormBuilder, private service: UsersService, private router: Router) { 
   
    this.formData = this.fb.group({
      email: ['', [Validators.required, Validators.email]],  // Campo de email con validación de formato y requerido
      password: ['', [Validators.required, Validators.minLength(6)]],  // Campo de password con mínimo de 6 caracteres
      confirmPassword: ['', [Validators.required]]  // Campo de confirmación de contraseña
    }, { validator: this.checkPasswords });  // Validador personalizado para contraseñas
  }

  checkPasswords(group: AbstractControl): { [key: string]: boolean } | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { notSame: true };
  }

  registro(data: any) {
    if (data.password === data.confirmPassword) {
      this.service.register({ email: data.email, password: data.password }).subscribe({
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
      console.log('Formulario válido:', this.formData.value);
      this.registro(this.formData.value);
    } else {
      console.log('Formulario no válido');
    }
  }
}
