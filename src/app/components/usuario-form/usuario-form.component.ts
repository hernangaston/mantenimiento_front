// usuario-form.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../service/users.service';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {
  usuarioForm!: FormGroup;
  ruta: string = "";
  titulo: string = "";

  constructor(private formBuilder: FormBuilder, private usuarioService: UsersService) {}

  ngOnInit(): void {
    this.usuarioForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rol: ['usuario', Validators.required]
    });
    this.ruta = "/dashboard";
    this.titulo = "Nuevo usuario";
  }

  onSubmit(): void {
    if (this.usuarioForm.valid) {
      const usuarioData = this.usuarioForm.value;
      console.log('Datos del formulario:', usuarioData);

      // Llama al servicio para enviar los datos a la API
      this.usuarioService.register(usuarioData).subscribe({
        next: (res) => {
          console.log("Usuario creado", res.message);
        },
        error: (err) => { console.log("Errror: ", err)}
      })
    }
  }
}
