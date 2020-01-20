import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionAlzheimerPage } from './informacion-alzheimer.page';

describe('InformacionAlzheimerPage', () => {
  let component: InformacionAlzheimerPage;
  let fixture: ComponentFixture<InformacionAlzheimerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacionAlzheimerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionAlzheimerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
