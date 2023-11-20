import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaSalonesComponent } from './tabla-salones.component';

describe('TablaSalonesComponent', () => {
  let component: TablaSalonesComponent;
  let fixture: ComponentFixture<TablaSalonesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaSalonesComponent]
    });
    fixture = TestBed.createComponent(TablaSalonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
