import { TestBed } from '@angular/core/testing';

import { FiltroInstagramService } from './filtro-instagram.service';

describe('FiltroInstagramService', () => {
  let service: FiltroInstagramService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FiltroInstagramService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
