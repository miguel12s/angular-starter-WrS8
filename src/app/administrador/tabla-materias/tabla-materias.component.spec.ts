import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaMateriasComponent } from './tabla-materias.component';

describe('TablaMateriasComponent', () => {
  let component: TablaMateriasComponent;
  let fixture: ComponentFixture<TablaMateriasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaMateriasComponent]
    });
    fixture = TestBed.createComponent(TablaMateriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
