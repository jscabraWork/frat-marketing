import { TestBed } from '@angular/core/testing';

import { GustosService } from './gustos.service';

describe('GustosService', () => {
  let service: GustosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GustosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
