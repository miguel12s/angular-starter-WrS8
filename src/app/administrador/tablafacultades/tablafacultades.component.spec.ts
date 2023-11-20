import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablafacultadesComponent } from './tablafacultades.component';

describe('TablafacultadesComponent', () => {
  let component: TablafacultadesComponent;
  let fixture: ComponentFixture<TablafacultadesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablafacultadesComponent]
    });
    fixture = TestBed.createComponent(TablafacultadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
