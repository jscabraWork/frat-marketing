import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCampaniasComponent } from './crear-campanias.component';

describe('CrearCampaniasComponent', () => {
  let component: CrearCampaniasComponent;
  let fixture: ComponentFixture<CrearCampaniasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearCampaniasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearCampaniasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
