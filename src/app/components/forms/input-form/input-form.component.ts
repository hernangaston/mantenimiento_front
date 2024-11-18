import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrl: './input-form.component.css'
})
export class InputFormComponent implements OnInit {
  @Input() label!: string; // Etiqueta del campo
  @Input() controlName!: string; // Nombre del FormControl
  @Input() formGroup!: FormGroup; // FormGroup al que pertenece el control
  @Input() errorMessage: string = 'Este campo es obligatorio.'; // Mensaje de error

  control!: AbstractControl | null; // Control asociado

  ngOnInit() {
    this.control = this.formGroup.get(this.controlName);
    
    if (this.control) {
      console.error(`No se encontró el control '${this.controlName}' en el FormGroup.`);
    }
  }
}