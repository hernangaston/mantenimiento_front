import { Component, OnInit } from '@angular/core';
import { OrdenTrabajo } from '../../../interfaces/orden-trabajo'; // Asegúrate de ajustar la ruta de tu modelo
import { OrdenTrabajoService } from '../../../service/orden-trabajo.service';

@Component({
  selector: 'app-orden-trabajo',
  templateUrl: './orden-trabajo.component.html',
  styleUrl: './orden-trabajo.component.css'
})
export class OrdenTrabajoComponent implements OnInit {

  ordenesTrabajo: OrdenTrabajo[] = [];

  constructor(private ordenTrabajoService:OrdenTrabajoService) { }

  ngOnInit(): void {
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
