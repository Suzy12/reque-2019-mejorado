import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaVascularPage } from './pagina-vascular.page';

describe('PaginaVascularPage', () => {
  let component: PaginaVascularPage;
  let fixture: ComponentFixture<PaginaVascularPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaVascularPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaVascularPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
