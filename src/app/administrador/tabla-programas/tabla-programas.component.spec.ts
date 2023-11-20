import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaProgramasComponent } from './tabla-programas.component';

describe('TablaProgramasComponent', () => {
  let component: TablaProgramasComponent;
  let fixture: ComponentFixture<TablaProgramasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaProgramasComponent]
    });
    fixture = TestBed.createComponent(TablaProgramasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
