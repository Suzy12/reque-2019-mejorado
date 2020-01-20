import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaBinswangerPage } from './pagina-binswanger.page';

describe('PaginaBinswangerPage', () => {
  let component: PaginaBinswangerPage;
  let fixture: ComponentFixture<PaginaBinswangerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaBinswangerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaBinswangerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
