import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilInfluencerComponent } from './perfil-influencer.component';

describe('PerfilInfluencerComponent', () => {
  let component: PerfilInfluencerComponent;
  let fixture: ComponentFixture<PerfilInfluencerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilInfluencerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilInfluencerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
