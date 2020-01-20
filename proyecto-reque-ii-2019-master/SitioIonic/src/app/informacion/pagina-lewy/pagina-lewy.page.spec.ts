import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaLewyPage } from './pagina-lewy.page';

describe('PaginaLewyPage', () => {
  let component: PaginaLewyPage;
  let fixture: ComponentFixture<PaginaLewyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaLewyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaLewyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
