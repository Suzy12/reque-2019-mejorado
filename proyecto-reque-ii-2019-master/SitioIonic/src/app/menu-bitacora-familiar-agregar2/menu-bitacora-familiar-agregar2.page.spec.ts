import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBitacoraFamiliarAgregar2Page } from './menu-bitacora-familiar-agregar2.page';

describe('MenuBitacoraFamiliarAgregar2Page', () => {
  let component: MenuBitacoraFamiliarAgregar2Page;
  let fixture: ComponentFixture<MenuBitacoraFamiliarAgregar2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuBitacoraFamiliarAgregar2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuBitacoraFamiliarAgregar2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
