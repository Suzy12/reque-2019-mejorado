import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicamentosFamiliarVerPage } from './medicamentos-familiar-ver.page';

describe('MedicamentosFamiliarVerPage', () => {
  let component: MedicamentosFamiliarVerPage;
  let fixture: ComponentFixture<MedicamentosFamiliarVerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicamentosFamiliarVerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicamentosFamiliarVerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
