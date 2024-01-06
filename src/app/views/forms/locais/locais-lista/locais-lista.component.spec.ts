import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocaisListaComponent } from './locais-lista.component';

describe('LocaisListaComponent', () => {
  let component: LocaisListaComponent;
  let fixture: ComponentFixture<LocaisListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocaisListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocaisListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
