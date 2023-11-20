import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaTipoDocumentosComponent } from './tabla-tipo-documentos.component';

describe('TablaTipoDocumentosComponent', () => {
  let component: TablaTipoDocumentosComponent;
  let fixture: ComponentFixture<TablaTipoDocumentosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaTipoDocumentosComponent]
    });
    fixture = TestBed.createComponent(TablaTipoDocumentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
