import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearInfluencerComponent } from './crear-influencer.component';

describe('CrearInfluencerComponent', () => {
  let component: CrearInfluencerComponent;
  let fixture: ComponentFixture<CrearInfluencerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearInfluencerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearInfluencerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
