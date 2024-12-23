import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDateInputComponent } from './form-date-input.component';

describe('FormDateInputComponent', () => {
  let component: FormDateInputComponent;
  let fixture: ComponentFixture<FormDateInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormDateInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDateInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
