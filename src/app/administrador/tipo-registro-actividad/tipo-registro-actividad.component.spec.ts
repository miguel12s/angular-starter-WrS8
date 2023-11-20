import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoRegistroActividadComponent } from './tipo-registro-actividad.component';

describe('TipoRegistroActividadComponent', () => {
  let component: TipoRegistroActividadComponent;
  let fixture: ComponentFixture<TipoRegistroActividadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TipoRegistroActividadComponent]
    });
    fixture = TestBed.createComponent(TipoRegistroActividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
