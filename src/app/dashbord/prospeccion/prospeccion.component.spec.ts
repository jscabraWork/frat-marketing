import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProspeccionComponent } from './prospeccion.component';

describe('ProspeccionComponent', () => {
  let component: ProspeccionComponent;
  let fixture: ComponentFixture<ProspeccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProspeccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProspeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
