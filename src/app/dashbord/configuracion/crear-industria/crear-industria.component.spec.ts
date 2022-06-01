import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearIndustriaComponent } from './crear-industria.component';

describe('CrearIndustriaComponent', () => {
  let component: CrearIndustriaComponent;
  let fixture: ComponentFixture<CrearIndustriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearIndustriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearIndustriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
