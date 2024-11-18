import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-multiselect',
  templateUrl: './form-multiselect.component.html',
  styleUrls: ['./form-multiselect.component.css']
})
export class FormMultiselectComponent {
  @Input() label!: string;
  @Input() controlName!: string;
  @Input() options!: any[];
  @Input() displayProperty!: string;
  @Input() valueProperty!: string;
  @Input() formGroup!: FormGroup;
  @Input() errorMessage: string = 'Este campo es obligatorio.';

  get control(): FormControl {
    return this.formGroup.get(this.controlName) as FormControl;
  }
}
