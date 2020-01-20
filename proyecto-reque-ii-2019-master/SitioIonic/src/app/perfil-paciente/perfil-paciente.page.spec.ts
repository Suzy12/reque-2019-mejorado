import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilPacientePage } from './perfil-paciente.page';

describe('PerfilPacientePage', () => {
  let component: PerfilPacientePage;
  let fixture: ComponentFixture<PerfilPacientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilPacientePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilPacientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
