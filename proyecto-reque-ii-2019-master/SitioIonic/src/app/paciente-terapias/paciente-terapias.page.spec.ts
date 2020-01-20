import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteTerapiasPage } from './paciente-terapias.page';

describe('PacienteTerapiasPage', () => {
  let component: PacienteTerapiasPage;
  let fixture: ComponentFixture<PacienteTerapiasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacienteTerapiasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacienteTerapiasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
