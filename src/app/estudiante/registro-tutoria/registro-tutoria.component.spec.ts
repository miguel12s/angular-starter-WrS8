import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroTutoriaComponent } from './registro-tutoria.component';

describe('RegistroTutoriaComponent', () => {
  let component: RegistroTutoriaComponent;
  let fixture: ComponentFixture<RegistroTutoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroTutoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroTutoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
