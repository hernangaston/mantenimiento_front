import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Sector } from '../../../models/sector';
import { ActivoService } from '../../../service/activo.service';
import { SectorService } from '../../../service/sector.service';
import { UbicacionService } from '../../../service/ubicacion.service';
import { Activo } from '../../../models/activo';

@Component({
  selector: 'app-sector-form',
  templateUrl: './sector-form.component.html',
  styleUrls: ['./sector-form.component.css']
})
export class SectorFormComponent implements OnInit {
  sectorForm: FormGroup;
  activos: Activo[] = [];
  ubicaciones: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private activoService: ActivoService,
    private ubicacionService: UbicacionService,
    private sectorService: SectorService
  ) {
    this.sectorForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.maxLength(255)]],
      labelTag: [null],
      id_activo: [null, Validators.required],
      id_ubicacion: [null, Validators.required],
      fecha_creacion: [null]
    });
  }

  ngOnInit() {
    this.cargarDatos();
  }

  cargarDatos() {
    
    this.activoService.obtenerActivos().subscribe(
      {
        next: (res) => {
          this.activos = res;
        },
        error: (e) => {
          console.error('Error al cargar los activos:', e);
        }
      });

    
    this.ubicacionService.obtenerUbicaciones().subscribe(
      {
        next: (res) => {
          this.ubicaciones = res;
        },
        error: (err) => {
          console.error('Error al cargar las ubicaciones:', err);
        }
      });
  }

  // Método para enviar el formulario
  onSubmit() {
    if (this.sectorForm.valid) {
      const nuevoSector: Sector = this.sectorForm.value;
      this.sectorService.crearSector(nuevoSector).subscribe(
        {
          next: (response) => {
            console.log('Sector creado con éxito:', response);
            this.sectorForm.reset();
          },
          error: (error) => {
            console.error('Error al crear el sector:', error);
          }
        }
      );
    } else {
      console.log('Formulario no válido');
    }
  }
}
