import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrdenTrabajoService } from '../../../service/orden-trabajo.service';
import { OrdenTrabajo } from '../../../interfaces/orden-trabajo';
import { Activo } from '../../../interfaces/activo';
import { Tag } from '../../../interfaces/tag';
import { ActivoService } from '../../../service/activo.service';
import { TagService } from '../../../service/tag.service';
import { Descripcion } from '../../../interfaces/descripcion';
import { DescripcionService } from '../../../service/descripcion.service';

@Component({
  selector: 'app-orden-trabajo-vista',
  templateUrl: './orden-trabajo-vista.component.html',
  styleUrl: './orden-trabajo-vista.component.css'
})
export class OrdenTrabajoVistaComponent {

  id_ot: string | null = null;
  orden?: OrdenTrabajo;
  nom_edif: string = "";
  tareas:Descripcion[] = [];


  constructor(private route: ActivatedRoute, private ordenTrabajoService:OrdenTrabajoService, private descSer:DescripcionService) { }

  ngOnInit(): void {
    this.id_ot = this.route.snapshot.paramMap.get('id_ot');
    this.ordenTrabajoService.getOrdenDetrabajo(this.id_ot).subscribe({
      next: (res) => {
        this.orden = res[0];
      },
      error: (err) => {
        console.log(err);
      }
    });

    this.descSer.obtenerDescByOrden(this.id_ot).subscribe({
      next: (res) => { this.tareas = res[0]; },
      error: (err) => { console.log(err)}
    })
  }

}
