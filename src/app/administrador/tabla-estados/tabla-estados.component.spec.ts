import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaEstadosComponent } from './tabla-estados.component';

describe('TablaEstadosComponent', () => {
  let component: TablaEstadosComponent;
  let fixture: ComponentFixture<TablaEstadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaEstadosComponent]
    });
    fixture = TestBed.createComponent(TablaEstadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
