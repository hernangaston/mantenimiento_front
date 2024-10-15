// src/app/components/tarea-form/tarea-form.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Tarea } from '../../../models/tarea';
import { TareaService } from '../../../service/tarea.service';
import { TipoTareaService } from '../../../service/tipo-tarea.service';


@Component({
  selector: 'app-tarea-form',
  templateUrl: './tarea-form.component.html',
  styleUrls: ['./tarea-form.component.css']
})
export class TareaFormComponent implements OnInit {
  tareaForm: FormGroup;
  tiposTarea: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private tipoTareaService: TipoTareaService,
    private tareaService: TareaService
  ) {
    this.tareaForm = this.formBuilder.group({
      id_tita: [null, Validators.required],
      tiempo_estimado: [null, [Validators.required, Validators.min(0), Validators.pattern(/^\d+(\.\d{1,2})?$/)]],  // Expresion regular para obtener Decimal con 2 decimales
      fecha_creacion: [null]
    });
  }

  ngOnInit() {
    this.cargarTiposTarea();
  }

  cargarTiposTarea() {
    // Cargar los tipos de tarea desde el servicio
    this.tipoTareaService.obtenerTiposTarea().subscribe({
      next: (res) => {
        this.tiposTarea = res;
      },
      error: (err) => {
        console.error('Error al cargar los tipos de tarea:', err);
      }
    });
  }

  // Método para enviar el formulario
  onSubmit() {
    if (this.tareaForm.valid) {
      const nuevaTarea: Tarea = this.tareaForm.value;

      this.tareaService.crearTarea(nuevaTarea).subscribe({
        next: (res) => {
          console.log('Tarea creada con éxito:', res);
          this.tareaForm.reset();  // Limpiar el formulario tras éxito
        },
        error: (err) => {
          console.error('Error al crear la tarea:', err);
        }
      });
    } else {
      console.log('Formulario no válido');
    }
  }
}
