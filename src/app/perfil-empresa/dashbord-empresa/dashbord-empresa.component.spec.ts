import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordEmpresaComponent } from './dashbord-empresa.component';

describe('DashbordEmpresaComponent', () => {
  let component: DashbordEmpresaComponent;
  let fixture: ComponentFixture<DashbordEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashbordEmpresaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashbordEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
