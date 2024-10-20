import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenTrabajoVistaComponent } from './orden-trabajo-vista.component';

describe('OrdenTrabajoVistaComponent', () => {
  let component: OrdenTrabajoVistaComponent;
  let fixture: ComponentFixture<OrdenTrabajoVistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrdenTrabajoVistaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdenTrabajoVistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
