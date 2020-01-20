import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuMedicinasMedicoPage } from './menu-medicinas-medico.page';

describe('MenuMedicinasMedicoPage', () => {
  let component: MenuMedicinasMedicoPage;
  let fixture: ComponentFixture<MenuMedicinasMedicoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuMedicinasMedicoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuMedicinasMedicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
