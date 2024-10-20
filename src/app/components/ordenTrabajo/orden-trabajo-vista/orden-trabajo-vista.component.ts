import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrdenTrabajoService } from '../../../service/orden-trabajo.service';
import { OrdenTrabajo } from '../../../interfaces/orden-trabajo';

@Component({
  selector: 'app-orden-trabajo-vista',
  templateUrl: './orden-trabajo-vista.component.html',
  styleUrl: './orden-trabajo-vista.component.css'
})
export class OrdenTrabajoVistaComponent {

  id_ot: string | null = null;
  orden?: OrdenTrabajo;
  nom_edif: string = "";
  constructor(private route: ActivatedRoute, private ordenTrabajoService:OrdenTrabajoService) { }

  ngOnInit(): void {
    this.id_ot = this.route.snapshot.paramMap.get('id_ot');
    this.ordenTrabajoService.getOrdenDetrabajo(this.id_ot).subscribe({
      next: (res) => {
        this.orden = res[0];
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
