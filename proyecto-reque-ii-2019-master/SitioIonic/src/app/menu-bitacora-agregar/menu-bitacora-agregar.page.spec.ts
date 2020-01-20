import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBitacoraAgregarPage } from './menu-bitacora-agregar.page';

describe('MenuBitacoraAgregarPage', () => {
  let component: MenuBitacoraAgregarPage;
  let fixture: ComponentFixture<MenuBitacoraAgregarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuBitacoraAgregarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuBitacoraAgregarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
