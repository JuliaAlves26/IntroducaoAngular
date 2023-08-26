import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiacoesComponent } from './premiacoes.component';

describe('PremiacoesComponent', () => {
  let component: PremiacoesComponent;
  let fixture: ComponentFixture<PremiacoesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PremiacoesComponent]
    });
    fixture = TestBed.createComponent(PremiacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
