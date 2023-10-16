import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginaViajePage } from './pagina-viaje.page';

describe('PaginaViajePage', () => {
  let component: PaginaViajePage;
  let fixture: ComponentFixture<PaginaViajePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PaginaViajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
