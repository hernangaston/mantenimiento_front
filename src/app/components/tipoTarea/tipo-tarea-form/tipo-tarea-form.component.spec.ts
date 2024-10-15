import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoTareaFormComponent } from './tipo-tarea-form.component';

describe('TipoTareaFormComponent', () => {
  let component: TipoTareaFormComponent;
  let fixture: ComponentFixture<TipoTareaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TipoTareaFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoTareaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
