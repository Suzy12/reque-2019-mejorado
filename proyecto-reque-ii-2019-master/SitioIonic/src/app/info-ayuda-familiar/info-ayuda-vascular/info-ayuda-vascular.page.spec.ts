import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAyudaVascularPage } from './info-ayuda-vascular.page';

describe('InfoAyudaVascularPage', () => {
  let component: InfoAyudaVascularPage;
  let fixture: ComponentFixture<InfoAyudaVascularPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoAyudaVascularPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoAyudaVascularPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
