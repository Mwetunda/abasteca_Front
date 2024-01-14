import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashCardTeTotalComponent } from './dash-card-te-total.component';

describe('DashCardTeTotalComponent', () => {
  let component: DashCardTeTotalComponent;
  let fixture: ComponentFixture<DashCardTeTotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashCardTeTotalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashCardTeTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
