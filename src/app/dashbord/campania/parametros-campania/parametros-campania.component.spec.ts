import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametrosCampaniaComponent } from './parametros-campania.component';

describe('ParametrosCampaniaComponent', () => {
  let component: ParametrosCampaniaComponent;
  let fixture: ComponentFixture<ParametrosCampaniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParametrosCampaniaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametrosCampaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
