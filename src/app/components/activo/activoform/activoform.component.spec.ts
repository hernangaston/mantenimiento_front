import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivoformComponent } from './activoform.component';

describe('ActivoformComponent', () => {
  let component: ActivoformComponent;
  let fixture: ComponentFixture<ActivoformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActivoformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivoformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
