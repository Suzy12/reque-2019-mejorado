import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaParkinsonPage } from './pagina-parkinson.page';

describe('PaginaParkinsonPage', () => {
  let component: PaginaParkinsonPage;
  let fixture: ComponentFixture<PaginaParkinsonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaParkinsonPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaParkinsonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
