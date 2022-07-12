import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordInfluencerComponent } from './dashbord-influencer.component';

describe('DashbordInfluencerComponent', () => {
  let component: DashbordInfluencerComponent;
  let fixture: ComponentFixture<DashbordInfluencerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashbordInfluencerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashbordInfluencerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
