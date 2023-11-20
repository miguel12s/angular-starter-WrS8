import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaSedesComponent } from './tabla-sedes.component';

describe('TablaSedesComponent', () => {
  let component: TablaSedesComponent;
  let fixture: ComponentFixture<TablaSedesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaSedesComponent]
    });
    fixture = TestBed.createComponent(TablaSedesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
