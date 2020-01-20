import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBitacoraVerPacientePage } from './menu-bitacora-ver-paciente.page';

describe('MenuBitacoraVerPacientePage', () => {
  let component: MenuBitacoraVerPacientePage;
  let fixture: ComponentFixture<MenuBitacoraVerPacientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuBitacoraVerPacientePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuBitacoraVerPacientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
