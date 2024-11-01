import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonDashComponent } from './boton-dash.component';

describe('BotonDashComponent', () => {
  let component: BotonDashComponent;
  let fixture: ComponentFixture<BotonDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BotonDashComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
