import { Component, OnInit } from '@angular/core';
import { OrdenTrabajo } from '../../../interfaces/orden-trabajo'; 
import { OrdenTrabajoService } from '../../../service/orden-trabajo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OperarioService } from '../../../service/operario.service';
import { ActivoService } from '../../../service/activo.service';
import { EdificioService } from '../../../service/edificio.service';

@Component({
  selector: 'app-orden-trabajo',
  templateUrl: './orden-trabajo.component.html',
  styleUrl: './orden-trabajo.component.css'
})
export class OrdenTrabajoComponent implements OnInit {
  ordenTrabajoForm: FormGroup | undefined;
  ordenesTrabajo: OrdenTrabajo[] = [];
  id_ot: string | null = null;
  filtros = {
    id_op: null,
    fecha_creacion: null,
    id_activo: null,
    id_edificio: null,
    realizada: null
  };
  expandedMenu: number | null = null;
  mostrarBoton: boolean = true;
  operarios: any[] = [];
  activos: any[] = [];
  edificios: any[] = [];



  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ordenTrabajoService:OrdenTrabajoService,
    private formBuilder: FormBuilder,
    private operarioService: OperarioService,
    private activoService: ActivoService,
    private edificioService: EdificioService) { 
      
    }

  ngOnInit(): void {
    this.id_ot = this.route.snapshot.paramMap.get('id_ot');
    this.ordenTrabajoForm = this.formBuilder.group({});
    
    if(this.id_ot){
      this.ordenTrabajoService.deleteOrdenTrabajo(this.id_ot).subscribe({
        next: (d) => { 
          this.router.navigate(['/dashboard/orden/lista']);
        },
        error: (e) => { console.log("Hubo un error: " + e)},
        complete: () => { console.info(`Orden ${this.id_ot} eliminada.`);}
      })
    }else{
      this.ordenTrabajoService.listaOrdenTrabajo().subscribe({
        next: (res) => {
          this.ordenesTrabajo = res;
        },
        error: (err) => {
          console.log(err);
        }
       })
    }
  }

  buscar() {
    this.ordenTrabajoService.getOrdenesTrabajo(this.filtros).subscribe((data) => {
      this.ordenesTrabajo = data;
    });
  }

  async toggleDropdown(menuNumber: number): Promise<void> {
    await this.cargarDatos();    
    this.expandedMenu = this.expandedMenu === menuNumber ? null : menuNumber;
    this.mostrarBoton = !this.mostrarBoton;
  }

  isExpanded(menuNumber: number): boolean {
    return this.expandedMenu === menuNumber;
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
    this.activoService.obtenerActivos().subscribe({
      next: (res) => {
        this.activos = res;
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
  }

  limpiarFiltros(){
    this.filtros = {
      id_op: null,
      fecha_creacion: null,
      id_activo: null,
      id_edificio: null,
      realizada: null
    };
  }
}
