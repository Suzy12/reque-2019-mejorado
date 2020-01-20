import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPacientePage } from './menu-paciente.page';

describe('MenuPacientePage', () => {
  let component: MenuPacientePage;
  let fixture: ComponentFixture<MenuPacientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuPacientePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPacientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
