import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAyudaBinswangerPage } from './info-ayuda-binswanger.page';

describe('InfoAyudaBinswangerPage', () => {
  let component: InfoAyudaBinswangerPage;
  let fixture: ComponentFixture<InfoAyudaBinswangerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoAyudaBinswangerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoAyudaBinswangerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
