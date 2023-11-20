import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDescripcionComponent } from './modal-descripcion.component';

describe('ModalDescripcionComponent', () => {
  let component: ModalDescripcionComponent;
  let fixture: ComponentFixture<ModalDescripcionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalDescripcionComponent]
    });
    fixture = TestBed.createComponent(ModalDescripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
