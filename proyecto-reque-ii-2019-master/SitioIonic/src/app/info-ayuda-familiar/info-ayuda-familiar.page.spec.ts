import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAyudaFamiliarPage } from './info-ayuda-familiar.page';

describe('InfoAyudaFamiliarPage', () => {
  let component: InfoAyudaFamiliarPage;
  let fixture: ComponentFixture<InfoAyudaFamiliarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoAyudaFamiliarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoAyudaFamiliarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
