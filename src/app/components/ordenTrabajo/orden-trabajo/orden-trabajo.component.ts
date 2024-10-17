import { Component, OnInit } from '@angular/core';
import { OrdenTrabajo } from '../../../interfaces/orden-trabajo'; // Asegúrate de ajustar la ruta de tu modelo

@Component({
  selector: 'app-orden-trabajo',
  templateUrl: './orden-trabajo.component.html',
  styleUrl: './orden-trabajo.component.css'
})
export class OrdenTrabajoComponent implements OnInit {

  ordenes: OrdenTrabajo[] = [
    {
      id_ot: 1,
      fecha_impresion: new Date('2024-10-01'),
      observacion: 'Reparación de equipo A',
      fecha_terminacion: new Date('2024-10-03'),
      realizada: true,
      id_operario: 101,
      tiempo: '3 horas',
      id_edificio: 2,
      id_piso: 5,
      id_sector: 12,
      id_ubicacion: 20,
      id_activo: 30,
      fecha_creacion: new Date('2024-09-28')
    },
    {
      id_ot: 2,
      fecha_impresion: new Date('2024-10-02'),
      observacion: 'Mantenimiento preventivo B',
      fecha_terminacion: new Date('2024-10-05'),
      realizada: true,
      id_operario: 102,
      tiempo: '5 horas',
      id_edificio: 3,
      id_piso: 2,
      id_sector: 15,
      id_ubicacion: 25,
      id_activo: 35,
      fecha_creacion: new Date('2024-09-29')
    }
    // Agrega más datos según sea necesario
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
