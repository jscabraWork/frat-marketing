import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaniasEmpresaComponent } from './campanias-empresa.component';

describe('CampaniasEmpresaComponent', () => {
  let component: CampaniasEmpresaComponent;
  let fixture: ComponentFixture<CampaniasEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampaniasEmpresaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaniasEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
