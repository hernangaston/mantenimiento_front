// src/app/components/tag-form/tag-form.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Tag } from '../../../models/tag';
import { TagService } from '../../../service/tag.service';

@Component({
  selector: 'app-tag-form',
  templateUrl: './tag-form.component.html',
  styleUrls: ['./tag-form.component.css']
})
export class TagFormComponent implements OnInit {
  tagForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private tagService: TagService
  ) {
    this.tagForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.maxLength(255)]],
      tag_deminutivo: ['', Validators.maxLength(255)],
      fecha_creacion: [null]
    });
  }

  ngOnInit(): void {
    /*const tags = this.tagService.obtenerTags().subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log("Error: " + err);
      }
    });*/
  }

  onSubmit() {
    if (this.tagForm.valid) {
      const nuevoTag: Tag = this.tagForm.value;
      this.tagService.crearTag(nuevoTag).subscribe({
        next: (res) => {
          console.log('Tag creado con éxito:', res);
          this.tagForm.reset();
        },
        error: (err) => {
          console.error('Error al crear el tag:', err);
        }
      });
    } else {
      console.log('Formulario no válido');
    }
  }
}
