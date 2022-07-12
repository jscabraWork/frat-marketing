import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequerimientosInfluencerComponent } from './requerimientos-influencer.component';

describe('RequerimientosInfluencerComponent', () => {
  let component: RequerimientosInfluencerComponent;
  let fixture: ComponentFixture<RequerimientosInfluencerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequerimientosInfluencerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequerimientosInfluencerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
