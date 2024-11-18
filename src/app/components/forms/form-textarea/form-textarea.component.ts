import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-textarea',
  templateUrl: './form-textarea.component.html',
  styleUrls: ['./form-textarea.component.css']
})
export class FormTextareaComponent {
  @Input() label!: string;
  @Input() controlName!: string;
  @Input() formGroup!: FormGroup;
  @Input() maxLength: number = 255;
  @Input() errorMessage: string = 'Máximo 255 caracteres.';

  get control(): FormControl {
    return this.formGroup.get(this.controlName) as FormControl;
  }
}
