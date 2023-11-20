import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaEstadosTutoriasComponent } from './tabla-estados-tutorias.component';

describe('TablaEstadosTutoriasComponent', () => {
  let component: TablaEstadosTutoriasComponent;
  let fixture: ComponentFixture<TablaEstadosTutoriasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaEstadosTutoriasComponent]
    });
    fixture = TestBed.createComponent(TablaEstadosTutoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
