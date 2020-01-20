import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IcapPage } from './icap.page';

describe('IcapPage', () => {
  let component: IcapPage;
  let fixture: ComponentFixture<IcapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcapPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IcapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
