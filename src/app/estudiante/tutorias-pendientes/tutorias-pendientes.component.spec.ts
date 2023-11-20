import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutoriasPendientesComponent } from './tutorias-pendientes.component';

describe('TutoriasPendientesComponent', () => {
  let component: TutoriasPendientesComponent;
  let fixture: ComponentFixture<TutoriasPendientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutoriasPendientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutoriasPendientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
