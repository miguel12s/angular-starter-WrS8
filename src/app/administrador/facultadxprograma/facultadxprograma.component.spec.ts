import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultadxprogramaComponent } from './facultadxprograma.component';

describe('FacultadxprogramaComponent', () => {
  let component: FacultadxprogramaComponent;
  let fixture: ComponentFixture<FacultadxprogramaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FacultadxprogramaComponent]
    });
    fixture = TestBed.createComponent(FacultadxprogramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
