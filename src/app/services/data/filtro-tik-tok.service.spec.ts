import { TestBed } from '@angular/core/testing';

import { FiltroTikTokService } from './filtro-tik-tok.service';

describe('FiltroTikTokService', () => {
  let service: FiltroTikTokService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FiltroTikTokService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
