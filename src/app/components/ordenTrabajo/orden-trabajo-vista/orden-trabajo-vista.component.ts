import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-orden-trabajo-vista',
  templateUrl: './orden-trabajo-vista.component.html',
  styleUrl: './orden-trabajo-vista.component.css'
})
export class OrdenTrabajoVistaComponent {

  id_ot: string | null = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Obtener el parámetro id_ot de la ruta
    this.id_ot = this.route.snapshot.paramMap.get('id_ot');
    console.log('ID de la orden:', this.id_ot);
    
    // Aquí puedes llamar a un servicio para obtener los detalles de la orden
    // usando el id_ot obtenido
  }
}
