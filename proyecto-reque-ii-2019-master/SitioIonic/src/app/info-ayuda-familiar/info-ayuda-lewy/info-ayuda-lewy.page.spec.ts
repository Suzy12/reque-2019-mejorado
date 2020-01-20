import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAyudaLewyPage } from './info-ayuda-lewy.page';

describe('InfoAyudaLewyPage', () => {
  let component: InfoAyudaLewyPage;
  let fixture: ComponentFixture<InfoAyudaLewyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoAyudaLewyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoAyudaLewyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
