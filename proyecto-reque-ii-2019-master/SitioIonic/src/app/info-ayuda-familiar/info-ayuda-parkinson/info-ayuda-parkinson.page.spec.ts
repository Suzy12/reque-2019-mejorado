import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAyudaParkinsonPage } from './info-ayuda-parkinson.page';

describe('InfoAyudaParkinsonPage', () => {
  let component: InfoAyudaParkinsonPage;
  let fixture: ComponentFixture<InfoAyudaParkinsonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoAyudaParkinsonPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoAyudaParkinsonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
