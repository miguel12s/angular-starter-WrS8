import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultadxmateriaComponent } from './facultadxmateria.component';

describe('FacultadxmateriaComponent', () => {
  let component: FacultadxmateriaComponent;
  let fixture: ComponentFixture<FacultadxmateriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FacultadxmateriaComponent]
    });
    fixture = TestBed.createComponent(FacultadxmateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
