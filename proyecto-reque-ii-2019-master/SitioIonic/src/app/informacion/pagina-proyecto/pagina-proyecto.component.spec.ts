import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaProyectoComponent } from './pagina-proyecto.component';

describe('PaginaProyectoComponent', () => {
  let component: PaginaProyectoComponent;
  let fixture: ComponentFixture<PaginaProyectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaProyectoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
