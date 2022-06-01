import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearParametrosComponent } from './crear-parametros.component';

describe('CrearParametrosComponent', () => {
  let component: CrearParametrosComponent;
  let fixture: ComponentFixture<CrearParametrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearParametrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearParametrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
