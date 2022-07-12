import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargarMetricasComponent } from './cargar-metricas.component';

describe('CargarMetricasComponent', () => {
  let component: CargarMetricasComponent;
  let fixture: ComponentFixture<CargarMetricasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargarMetricasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargarMetricasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
