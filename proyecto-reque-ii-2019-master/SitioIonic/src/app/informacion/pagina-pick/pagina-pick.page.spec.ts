import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaPickPage } from './pagina-pick.page';

describe('PaginaPickPage', () => {
  let component: PaginaPickPage;
  let fixture: ComponentFixture<PaginaPickPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaPickPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaPickPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
