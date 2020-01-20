import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarMedicinasPage } from './insertar-medicinas.page';

describe('InsertarMedicinasPage', () => {
  let component: InsertarMedicinasPage;
  let fixture: ComponentFixture<InsertarMedicinasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertarMedicinasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertarMedicinasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
