import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaRolesComponent } from './tabla-roles.component';

describe('TablaRolesComponent', () => {
  let component: TablaRolesComponent;
  let fixture: ComponentFixture<TablaRolesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaRolesComponent]
    });
    fixture = TestBed.createComponent(TablaRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
