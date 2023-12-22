import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostoAbastecimentoComponent } from './posto-abastecimento.component';

describe('PostoAbastecimentoComponent', () => {
  let component: PostoAbastecimentoComponent;
  let fixture: ComponentFixture<PostoAbastecimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostoAbastecimentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostoAbastecimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
