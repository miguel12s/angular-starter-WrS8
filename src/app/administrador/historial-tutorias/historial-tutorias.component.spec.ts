import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialTutoriasComponent } from './historial-tutorias.component';

describe('HistorialTutoriasComponent', () => {
  let component: HistorialTutoriasComponent;
  let fixture: ComponentFixture<HistorialTutoriasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistorialTutoriasComponent]
    });
    fixture = TestBed.createComponent(HistorialTutoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
