// src/app/components/ubicacion-form/ubicacion-form.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ubicacion } from '../../../interfaces/ubicacion';
import { UbicacionService } from '../../../service/ubicacion.service';

@Component({
  selector: 'app-ubicacion-form',
  templateUrl: './ubicacion-form.component.html',
  styleUrls: ['./ubicacion-form.component.css']
})
export class UbicacionFormComponent implements OnInit {
  ubicacionForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private ubicacionService: UbicacionService 
  ) {
    this.ubicacionForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.maxLength(255)]],
      labelTag: [null],
      fecha_creacion: [null]
    });
  }

  ngOnInit(): void {}

  // Método para enviar el formulario
  onSubmit() {
    if (this.ubicacionForm.valid) {
      const nuevaUbicacion: Ubicacion = this.ubicacionForm.value;

      this.ubicacionService.crearUbicacion(nuevaUbicacion).subscribe({
        next: (res) => {
          console.log('Ubicación creada con éxito:', res);
          this.ubicacionForm.reset();  // Limpiar el formulario tras éxito
        },
        error: (err) => {
          console.error('Error al crear la ubicación:', err);
        }
      });
    } else {
      console.log('Formulario no válido');
    }
  }
}
