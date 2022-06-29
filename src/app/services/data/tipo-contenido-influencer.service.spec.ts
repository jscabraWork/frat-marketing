import { TestBed } from '@angular/core/testing';

import { TipoContenidoInfluencerService } from './tipo-contenido-influencer.service';

describe('TipoContenidoInfluencerService', () => {
  let service: TipoContenidoInfluencerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoContenidoInfluencerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
