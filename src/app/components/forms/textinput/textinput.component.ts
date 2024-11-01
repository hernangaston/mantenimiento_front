import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-textinput',
  templateUrl: './textinput.component.html',
  styleUrl: './textinput.component.css'
})
export class TextinputComponent {
  @Input() label: string = '';
  @Input() id: string = '';
  @Input() control: FormControl = new FormControl();
  @Input() type: string = '';
  @Input() errorMessage: string = 'Este campo es obligatorio.';
}
