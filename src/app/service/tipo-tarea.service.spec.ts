import { TestBed } from '@angular/core/testing';

import { TipoTareaService } from './tipo-tarea.service';

describe('TipoTareaService', () => {
  let service: TipoTareaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoTareaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
