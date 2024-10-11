// src/app/components/edificio-form/edificio-form.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Edificio } from '../../../models/edificio';
import { PisoService } from '../../../service/piso.service';

@Component({
  selector: 'app-edificio-form',
  templateUrl: './edificio-form.component.html',
  styleUrls: ['./edificio-form.component.css']
})
export class EdificioFormComponent implements OnInit {
  edificioForm: FormGroup;
  pisos: any[] = [];

  constructor(private formBuilder: FormBuilder, private pisoService: PisoService) {
    this.edificioForm = this.formBuilder.group({
      Nombre: ['', [Validators.required, Validators.maxLength(255)]],
      Direccion: ['', [Validators.required, Validators.maxLength(255)]],
      labelTag: [null],
      id_piso: [null, Validators.required],
      fecha_creacion: [null]
    });
  }

  ngOnInit() {
    this.cargarPisos();
  }

  cargarPisos() {
    this.pisoService.obtenerPisos().subscribe((data) => {
      this.pisos = data;
    }, (error) => {
      console.error('Error al cargar los pisos:', error);
    });
  }
  onSubmit() {
    if (this.edificioForm.valid) {
      const nuevoEdificio: Edificio = this.edificioForm.value;
      console.log('Formulario válido, datos del edificio:', nuevoEdificio);
      // Aquí puedes realizar una solicitud HTTP para enviar los datos al backend
    } else {
      console.log('Formulario no válido');
    }
  }
}
