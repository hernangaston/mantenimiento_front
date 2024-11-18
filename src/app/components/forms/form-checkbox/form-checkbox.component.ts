import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-checkbox',
  templateUrl: './form-checkbox.component.html',
  styleUrls: ['./form-checkbox.component.css']
})
export class FormCheckboxComponent {
  @Input() label!: string;
  @Input() controlName!: string;
  @Input() formGroup!: FormGroup;

  get control(): FormControl {
    return this.formGroup.get(this.controlName) as FormControl;
  }
}
