import { TestBed } from '@angular/core/testing';

import { IndustriasService } from './industrias.service';

describe('IndustriasService', () => {
  let service: IndustriasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndustriasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
