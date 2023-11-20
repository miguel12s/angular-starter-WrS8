import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaCapacidadesComponent } from './tabla-capacidades.component';

describe('TablaCapacidadesComponent', () => {
  let component: TablaCapacidadesComponent;
  let fixture: ComponentFixture<TablaCapacidadesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaCapacidadesComponent]
    });
    fixture = TestBed.createComponent(TablaCapacidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
