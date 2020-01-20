import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialPacientePage } from './historial-paciente.page';

describe('HistorialPacientePage', () => {
  let component: HistorialPacientePage;
  let fixture: ComponentFixture<HistorialPacientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistorialPacientePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorialPacientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
