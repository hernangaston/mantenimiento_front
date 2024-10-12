// src/app/components/piso-form/piso-form.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Piso } from '../../../models/piso';
import { PisoService } from '../../../service/piso.service';
import { SectorService } from '../../../service/sector.service';

@Component({
  selector: 'app-piso-form',
  templateUrl: './piso-form.component.html',
  styleUrls: ['./piso-form.component.css']
})
export class PisoFormComponent implements OnInit {
  pisoForm: FormGroup;
  sectores: any[] = []; 

  constructor(
    private formBuilder: FormBuilder,
    private sectorService: SectorService,
    private pisoService: PisoService
  ) {
    this.pisoForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.maxLength(255)]],
      labelTag: [null], 
      id_sector: [null, Validators.required],
      fecha_creacion: [null]
    });
  }

  ngOnInit() {
    this.cargarSectores();
  }

  cargarSectores() {

    this.sectorService.obtenerSectores().subscribe({
      next: (res) => {
        this.sectores = res;
      },
      error: (err) => {
        console.error('Error al cargar los sectores:', err);
      }
    });
  }

  onSubmit() {
    if (this.pisoForm.valid) {
      const nuevoPiso: Piso = this.pisoForm.value;
      this.pisoService.crearPiso(nuevoPiso).subscribe({
        next: (res)=>{
          console.log('Piso creado con éxito:', res);
          this.pisoForm.reset();
        },
        error: (err) => {
          console.error('Error al crear el piso:', err);
        }
      });
    } else {
      console.log('Formulario no válido');
    }
  }
}
