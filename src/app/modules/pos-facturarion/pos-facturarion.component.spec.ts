import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosFacturarionComponent } from './pos-facturarion.component';

describe('PosFacturarionComponent', () => {
  let component: PosFacturarionComponent;
  let fixture: ComponentFixture<PosFacturarionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosFacturarionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PosFacturarionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
