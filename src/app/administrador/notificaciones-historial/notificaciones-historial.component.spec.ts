import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificacionesHistorialComponent } from './notificaciones-historial.component';

describe('NotificacionesHistorialComponent', () => {
  let component: NotificacionesHistorialComponent;
  let fixture: ComponentFixture<NotificacionesHistorialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotificacionesHistorialComponent]
    });
    fixture = TestBed.createComponent(NotificacionesHistorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
