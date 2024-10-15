// src/app/components/activo-form/activo-form.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivoService } from '../../../service/activo.service';
import { Activo } from '../../../interfaces/activo';

@Component({
  selector: 'app-activo-form',
  templateUrl: './activoform.component.html',
  styleUrls: ['./activoform.component.css']
})
export class ActivoFormComponent {
  activoForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private activoService: ActivoService) {
    this.activoForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      id_tag: [null, [Validators.required, Validators.min(1)]],
      Disponibilidad: [false, Validators.required],
      labelTag: [null, [Validators.required, Validators.min(1)]],
      numero_existencia: [null, [Validators.required, Validators.min(1)]],
      numero_real: [null, [Validators.required, Validators.min(1)]]
    });
  }

  // Método para enviar el formulario
  onSubmit() {
    if (this.activoForm.valid) {
      const nuevoActivo: Activo = this.activoForm.value;
      this.activoService.crearActivo(nuevoActivo).subscribe({
        next: (response: any) => {
          console.log('Activo registrado:', response);
          this.activoForm.reset();  // Limpiar el formulario tras el éxito
        },
        error: (error: any) => {
          console.error('Error al registrar activo:', error);
        }
      });
    } else {
      console.log("Formulario inválido");
    }
  }
}
