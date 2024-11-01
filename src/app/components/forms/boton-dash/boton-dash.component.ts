import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-boton-dash',
  templateUrl: './boton-dash.component.html',
  styleUrl: './boton-dash.component.css'
})
export class BotonDashComponent {
  @Input() ruta: any|string;
  @Input() titulo: any|string;
}
