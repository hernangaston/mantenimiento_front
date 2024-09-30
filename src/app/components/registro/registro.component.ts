import { Component } from '@angular/core';
import { UsersService } from '../../service/users.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})

export class RegistroComponent {
  formData: FormGroup;  

  constructor(private fb: FormBuilder, private service: UsersService, private router: Router) { 
   
    this.formData = this.fb.group({
      email: ['', /*[Validators.required, Validators.email]*/],  
      password: ['', /*[Validators.required, Validators.minLength(6)]*/], 
      confirmPassword:['']
    });
  }

  registro() {
    if (this.formData.value.password === this.formData.value.confirmPassword) {
      this.service.register({ email: this.formData.value.email, password: this.formData.value.password }).subscribe({
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
}
