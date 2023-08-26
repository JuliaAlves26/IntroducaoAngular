import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamososComponent } from './famosos.component';

describe('FamososComponent', () => {
  let component: FamososComponent;
  let fixture: ComponentFixture<FamososComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FamososComponent]
    });
    fixture = TestBed.createComponent(FamososComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
