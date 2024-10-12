// src/app/components/orden-trabajo-form/orden-trabajo-form.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrdenTrabajo } from '../../../models/orden-trabajo';
import { OperarioService } from '../../../service/operario.service';
import { OrdenTrabajoService } from '../../../service/orden-trabajo.service';

@Component({
  selector: 'app-orden-trabajo-form',
  templateUrl: './orden-trabajo-form.component.html',
  styleUrls: ['./orden-trabajo-form.component.css']
})
export class OrdenTrabajoFormComponent implements OnInit {
  ordenTrabajoForm: FormGroup;
  operarios: any[] = [];
  edificios: any[] = [];
  pisos: any[] = [];
  sectores: any[] = [];
  ubicaciones: any[] = [];
  activos: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private operarioService: OperarioService,
    private ordenTrabajoService: OrdenTrabajoService
  ) {
    this.ordenTrabajoForm = this.formBuilder.group({
      fecha_impresion: [null, Validators.required],
      observacion: ['', [Validators.maxLength(255)]],
      fecha_terminacion: [null],
      realizada: [false],
      id_operario: [null, Validators.required],
      id_edificio: [null, Validators.required],
      id_piso: [null, Validators.required],
      id_sector: [null, Validators.required],
      id_ubicacion: [null, Validators.required],
      id_activo: [null, Validators.required],
      tiempo: [null],
      fecha_creacion: [null]
    });
  }

  ngOnInit() {
    this.cargarDatos();
  }

  cargarDatos() {

    this.operarioService.obtenerOperarios().subscribe((data) => {
      this.operarios = data;
    });
    // otros servicios similares para cargar edificios, pisos, etc.
    // Ejemplo:
    // this.edificioService.obtenerEdificios().subscribe((data) => { this.edificios = data });
  }

  onSubmit() {
    if (this.ordenTrabajoForm.valid) {
      const nuevaOrden: OrdenTrabajo = this.ordenTrabajoForm.value;

      this.ordenTrabajoService.crearOrdenTrabajo(nuevaOrden).subscribe({
        next: (res) => {
          console.log('Orden creada con éxito:', res);
          this.ordenTrabajoForm.reset();
        },
        error: (err) => {
          console.error('Error al crear la orden de trabajo:', err);
        }
      });
    } else {
      console.log('Formulario no válido');
    }
  }
}
