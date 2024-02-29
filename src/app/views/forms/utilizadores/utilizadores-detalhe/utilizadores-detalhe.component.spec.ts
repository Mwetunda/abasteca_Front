import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilizadoresDetalheComponent } from './utilizadores-detalhe.component';

describe('UtilizadoresDetalheComponent', () => {
  let component: UtilizadoresDetalheComponent;
  let fixture: ComponentFixture<UtilizadoresDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilizadoresDetalheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtilizadoresDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
