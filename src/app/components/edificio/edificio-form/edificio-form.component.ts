import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Edificio } from '../../../models/edificio';
import { PisoService } from '../../../service/piso.service';
import { EdificioService } from '../../../service/edificio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edificio-form',
  templateUrl: './edificio-form.component.html',
  styleUrls: ['./edificio-form.component.css']
})
export class EdificioFormComponent implements OnInit {
  edificioForm: FormGroup;
  pisos: any[] = [];

  constructor(private formBuilder: FormBuilder, private pisoService: PisoService, private edificioService: EdificioService, private router: Router ) {
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
    this.pisoService.obtenerPisos().subscribe({
      next: (res)=>{
        this.pisos = res;
      },
      error: (err) => {
        console.error('Error al cargar los pisos:', err);
      }
    });
  }

  onSubmit() {
    if (this.edificioForm.valid) {
      const nuevoEdificio: Edificio = this.edificioForm.value;      
      this.edificioService.crearEdificio(nuevoEdificio).subscribe({
        next: (response) => {
          console.log('Edificio creado con éxito:', response);
          this.edificioForm.reset();  // Reinicia el formulario tras el éxito
        },
        error: (error) => { console.error('Error al crear el edificio:', error); },
        complete: () => { this.router.navigate(['/dashboard']); }
      });
    } else {
      console.log('Formulario no válido');
    }
  }
}