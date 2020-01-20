import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBitacoraPage } from './menu-bitacora.page';

describe('MenuBitacoraPage', () => {
  let component: MenuBitacoraPage;
  let fixture: ComponentFixture<MenuBitacoraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuBitacoraPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuBitacoraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
