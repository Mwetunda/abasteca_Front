import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombustiveisListaComponent } from './combustiveis-lista.component';

describe('CombustiveisListaComponent', () => {
  let component: CombustiveisListaComponent;
  let fixture: ComponentFixture<CombustiveisListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombustiveisListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CombustiveisListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
