import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearParametrosInfluenceadorComponent } from './crear-parametros-influenceador.component';

describe('CrearParametrosInfluenceadorComponent', () => {
  let component: CrearParametrosInfluenceadorComponent;
  let fixture: ComponentFixture<CrearParametrosInfluenceadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearParametrosInfluenceadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearParametrosInfluenceadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
