import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombustiveisComponent } from './combustiveis.component';

describe('CombustiveisComponent', () => {
  let component: CombustiveisComponent;
  let fixture: ComponentFixture<CombustiveisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombustiveisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CombustiveisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
