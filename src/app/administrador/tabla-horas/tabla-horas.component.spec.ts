import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaHorasComponent } from './tabla-horas.component';

describe('TablaHorasComponent', () => {
  let component: TablaHorasComponent;
  let fixture: ComponentFixture<TablaHorasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaHorasComponent]
    });
    fixture = TestBed.createComponent(TablaHorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
