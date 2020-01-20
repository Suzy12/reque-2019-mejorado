import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoayudaPage } from './infoayuda.page';

describe('InfoayudaPage', () => {
  let component: InfoayudaPage;
  let fixture: ComponentFixture<InfoayudaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoayudaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoayudaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
