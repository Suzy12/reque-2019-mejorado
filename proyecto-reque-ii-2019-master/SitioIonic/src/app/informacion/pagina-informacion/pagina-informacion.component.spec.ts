import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaInformacionComponent } from './pagina-informacion.component';

describe('PaginaInformacionComponent', () => {
  let component: PaginaInformacionComponent;
  let fixture: ComponentFixture<PaginaInformacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaInformacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaInformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
