import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreartutoriaComponent } from './modal-creartutoria.component';

describe('ModalCreartutoriaComponent', () => {
  let component: ModalCreartutoriaComponent;
  let fixture: ComponentFixture<ModalCreartutoriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalCreartutoriaComponent]
    });
    fixture = TestBed.createComponent(ModalCreartutoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
