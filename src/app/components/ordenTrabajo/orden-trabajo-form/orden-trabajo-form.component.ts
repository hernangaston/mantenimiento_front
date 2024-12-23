import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrdenTrabajo } from '../../../interfaces/orden-trabajo';
import { OperarioService } from '../../../service/operario.service';
import { OrdenTrabajoService } from '../../../service/orden-trabajo.service';
import { ActivoService } from '../../../service/activo.service';
import { EdificioService } from '../../../service/edificio.service';
import { PisoService } from '../../../service/piso.service';
import { SectorService } from '../../../service/sector.service';
import { UbicacionService } from '../../../service/ubicacion.service';
import { ActivatedRoute, Router } from '@angular/router';
import { formatDate } from '@angular/common';
import { TipoTareaService } from '../../../service/tipo-tarea.service';
import { TipoTarea } from '../../../interfaces/tipo-tarea';
import { TagService } from '../../../service/tag.service';
import { DescripcionService } from '../../../service/descripcion.service';
import { Descripcion } from '../../../interfaces/descripcion';

@Component({
  selector: 'app-orden-trabajo-form',
  templateUrl: './orden-trabajo-form.component.html',
  styleUrls: ['./orden-trabajo-form.component.css']
})
export class OrdenTrabajoFormComponent implements OnInit {
  ordenTrabajoForm!: FormGroup;
  operarios: any[] = [];
  edificios: any[] = [];
  pisos: any[] = [];
  sectores: any[] = [];
  ubicaciones: any[] = [];
  activos: any[] = [];
  id_ot: any = "";
  tareas: any[] = [];
  tiposTarea: TipoTarea[] = [];
  tags:any[] = [];
  desc:Descripcion[]=[];
  ruta: any;
  titulo: any;

  constructor(
    private formBuilder: FormBuilder,
    private operarioService: OperarioService,
    private ordenTrabajoService: OrdenTrabajoService,
    private activoService: ActivoService,
    private edificioService: EdificioService,
    private pisoService: PisoService,
    private sectorService: SectorService,
    private ubicacionService: UbicacionService,
    private tipoTareaService: TipoTareaService,
    private tagService: TagService,
    private route: ActivatedRoute,
    private router: Router,
    private descService: DescripcionService
  ) {
    this.ruta = "/dashboard";
    this.titulo = "Nueva orden de trabajo";
  }

  ngOnInit():void  {
    this.ordenTrabajoForm = this.formBuilder.group({
      fecha_impresion: ['', Validators.required],
      observacion: ['', [Validators.maxLength(255)]],
      fecha_terminacion: [null, Validators.required],
      realizada: [false],
      id_op: [null],
      id_edificio: [null, Validators.required],
      id_piso: [null, Validators.required],
      id_sector: [null, Validators.required],
      id_ubicacion: [null, Validators.required],
      id_activo: [null, Validators.required],
      tiempo: [null],
      id_tarea: [[], Validators.required],
      id_tita: [[], Validators.required]
    });

    this.id_ot = this.route.snapshot.paramMap.get('id_ot');
    
    this.id_ot ? this.cargarForm() : this.cargarDatos();
    
    this.activoService.obtenerActivos().subscribe({
      next: (res) => {
        this.activos = res;
      },
      error: (err) => {
        console.log(err);
      }
    });        

    this.ordenTrabajoForm.get('id_activo')?.valueChanges.subscribe(id_tag => {
      this.activoService.obtenerTagByActivos(id_tag).subscribe({
        next: (res) => {
          this.tags = res;
        },
        error: (err) => {
          console.log(err);
        }
      });
    });

    this.ordenTrabajoForm.get('id_tita')?.valueChanges.subscribe(id_tita => {
      this.descService.obtenerDescByTipoTarea(id_tita).subscribe({
        next: (res) => {
          this.desc = res;
        },
        error: (err) => {
          console.log(err);
        }
      });
    });
  }

  cargarDatos() {
    this.operarioService.obtenerOperarios().subscribe({
      next: (res) => {
        this.operarios = res;
      },
      error: (err) => {
        console.log(err);
      }
    });    
    this.edificioService.obtenerEdificios().subscribe({
      next: (res) => {
        this.edificios = res;
      },
      error: (err) => {
        console.log(err);
      }
    });
    this.pisoService.obtenerPisos().subscribe({
      next: (res) => {
        this.pisos = res;
      },
      error: (err) => {
        console.log(err);
      }
    });
    this.sectorService.obtenerSectores().subscribe({
      next: (res) => {
        this.sectores = res;
      },
      error: (err) => {
        console.log(err);
      }
    });
    this.ubicacionService.obtenerUbicaciones().subscribe({
      next: (res) => {
        this.ubicaciones = res;
      },
      error: (err) => {
        console.log(err);
      }
    });
    this.tipoTareaService.obtenerTiposTarea().subscribe({
      next: (res) => { this.tiposTarea = res },
      error: (err) => { console.log(err) }
    });
    this.tagService.obtenerTags().subscribe({
      next:(res)=>{ this.tags = res },
      error:(err)=>{ console.log(err)}
    });
    this.descService.obtenerListaDescripcion().subscribe({
      next: (res) => { this.desc = res;},
      error: (err) => { console.log(err);}
    })
  }

  cargarForm() {
    this.ordenTrabajoService.getOrdenDetrabajo(this.id_ot).subscribe({
      next: (res) => {
        res[0].fecha_impresion = formatDate(res[0].fecha_impresion, 'yyyy-MM-dd', 'en', 'UTC');
        res[0].fecha_terminacion = formatDate(res[0].fecha_terminacion, 'yyyy-MM-dd', 'en', 'UTC');
        res[0].fecha_creacion = formatDate(res[0].fecha_creacion, 'yyyy-MM-dd', 'en', 'UTC');
        res[0].tiempo = formatDate(res[0].tiempo, 'yyyy-MM-dd', 'en', 'UTC');
        this.ordenTrabajoForm.patchValue(res[0]);
        this.cargarDatos();
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  onSubmit() {
    if (this.ordenTrabajoForm.valid) {
      if (this.id_ot) {
        const ot: OrdenTrabajo = this.ordenTrabajoForm.getRawValue();
        this.ordenTrabajoService.updateOrdenTrabajo(this.id_ot, ot).subscribe({
          next: (v) => { this.router.navigate(['/dashboard/orden/lista']); },
          error: (e) => { console.error(e); },
          complete: () => { console.info('Orden actualizada'); }
        });
      } else {
        const nuevaOrden: OrdenTrabajo = this.ordenTrabajoForm.value;
        this.ordenTrabajoService.crearOrdenTrabajo(nuevaOrden).subscribe({
          next: (res) => {            
            this.router.navigate(['/dashboard/orden/lista']);
          },
          error: (err) => {
            console.error('Error al crear la orden de trabajo:', err);
          },
          complete: () => { console.info('Orden creada'); }
        });
      }
    } else {
      console.log('Formulario no válido');
    }
  }
}
