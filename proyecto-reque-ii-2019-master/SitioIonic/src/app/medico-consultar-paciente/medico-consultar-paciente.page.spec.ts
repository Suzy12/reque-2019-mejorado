import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoConsultarPacientePage } from './medico-consultar-paciente.page';

describe('MedicoConsultarPacientePage', () => {
  let component: MedicoConsultarPacientePage;
  let fixture: ComponentFixture<MedicoConsultarPacientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicoConsultarPacientePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicoConsultarPacientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
