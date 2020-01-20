import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamiliarConsultarPacientePage } from './familiar-consultar-paciente.page';

describe('FamiliarConsultarPacientePage', () => {
  let component: FamiliarConsultarPacientePage;
  let fixture: ComponentFixture<FamiliarConsultarPacientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamiliarConsultarPacientePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamiliarConsultarPacientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
