import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBitacoraFamiliar2Page } from './menu-bitacora-familiar2.page';

describe('MenuBitacoraFamiliar2Page', () => {
  let component: MenuBitacoraFamiliar2Page;
  let fixture: ComponentFixture<MenuBitacoraFamiliar2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuBitacoraFamiliar2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuBitacoraFamiliar2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
