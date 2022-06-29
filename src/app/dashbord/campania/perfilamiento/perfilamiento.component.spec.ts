import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilamientoComponent } from './perfilamiento.component';

describe('PerfilamientoComponent', () => {
  let component: PerfilamientoComponent;
  let fixture: ComponentFixture<PerfilamientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilamientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
