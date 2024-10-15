import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TipoTarea } from '../../../interfaces/tipo-tarea';
import { TipoTareaService } from '../../../service/tipo-tarea.service';

@Component({
  selector: 'app-tipo-tarea-form',
  templateUrl: './tipo-tarea-form.component.html',
  styleUrls: ['./tipo-tarea-form.component.css']
})
export class TipoTareaFormComponent implements OnInit {
  tipoTareaForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private tipoTareaService: TipoTareaService
  ) {
    this.tipoTareaForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.maxLength(255)]],
      descripcion: ['', Validators.maxLength(255)],
    });
  }

  ngOnInit(): void {}

  // Método para enviar el formulario
  onSubmit() {
    if (this.tipoTareaForm.valid) {
      const nuevoTipoTarea: TipoTarea = this.tipoTareaForm.value;

      this.tipoTareaService.crearTipoTarea(nuevoTipoTarea).subscribe({
        next: (res) => {
          console.log('Tipo de Tarea creado con éxito:', res);
          this.tipoTareaForm.reset();
        },
        error: (err) => {
          console.error('Error al crear el tipo de tarea:', err);
        }
      });
    } else {
      console.log('Formulario no válido');
    }
  }
}
