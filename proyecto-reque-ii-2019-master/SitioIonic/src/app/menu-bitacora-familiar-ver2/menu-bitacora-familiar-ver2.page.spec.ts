import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBitacoraFamiliarVer2Page } from './menu-bitacora-familiar-ver2.page';

describe('MenuBitacoraFamiliarVer2Page', () => {
  let component: MenuBitacoraFamiliarVer2Page;
  let fixture: ComponentFixture<MenuBitacoraFamiliarVer2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuBitacoraFamiliarVer2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuBitacoraFamiliarVer2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
