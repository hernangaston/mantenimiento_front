import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-date-input',
  templateUrl: './form-date-input.component.html',
  styleUrls: ['./form-date-input.component.css']
})
export class FormDateInputComponent {
  @Input() label!: string;
  @Input() controlName!: string;
  @Input() formGroup!: FormGroup;
  @Input() errorMessage: string = 'Este campo es obligatorio.';

  get control(): FormControl {
    return this.formGroup.get(this.controlName) as FormControl;
  }
}
