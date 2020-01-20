import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerMedicinasPage } from './ver-medicinas.page';

describe('VerMedicinasPage', () => {
  let component: VerMedicinasPage;
  let fixture: ComponentFixture<VerMedicinasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerMedicinasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerMedicinasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
