import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperadoraListaComponent } from './operadora-lista.component';

describe('OperadoraListaComponent', () => {
  let component: OperadoraListaComponent;
  let fixture: ComponentFixture<OperadoraListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperadoraListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperadoraListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
