import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerMedicamentosMedicoPage } from './ver-medicamentos-medico.page';

describe('VerMedicamentosMedicoPage', () => {
  let component: VerMedicamentosMedicoPage;
  let fixture: ComponentFixture<VerMedicamentosMedicoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerMedicamentosMedicoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerMedicamentosMedicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
