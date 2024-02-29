import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilizadoresListaComponent } from './utilizadores-lista.component';

describe('UtilizadoresListaComponent', () => {
  let component: UtilizadoresListaComponent;
  let fixture: ComponentFixture<UtilizadoresListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilizadoresListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtilizadoresListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
