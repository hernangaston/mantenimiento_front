import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent {
  @Input() label!: string;
  @Input() type: string = 'text';
  @Input() controlName!: string;
  @Input() formGroup!: FormGroup;

  get control(): FormControl {
    return this.formGroup.get(this.controlName) as FormControl;
  }
}
