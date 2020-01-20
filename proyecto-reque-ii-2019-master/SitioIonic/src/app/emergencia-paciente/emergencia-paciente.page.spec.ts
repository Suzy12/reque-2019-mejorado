import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergenciaPacientePage } from './emergencia-paciente.page';

describe('EmergenciaPacientePage', () => {
  let component: EmergenciaPacientePage;
  let fixture: ComponentFixture<EmergenciaPacientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmergenciaPacientePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmergenciaPacientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
