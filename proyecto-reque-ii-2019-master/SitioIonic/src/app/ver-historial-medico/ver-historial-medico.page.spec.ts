import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerHistorialMedicoPage } from './ver-historial-medico.page';

describe('VerHistorialMedicoPage', () => {
  let component: VerHistorialMedicoPage;
  let fixture: ComponentFixture<VerHistorialMedicoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerHistorialMedicoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerHistorialMedicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
