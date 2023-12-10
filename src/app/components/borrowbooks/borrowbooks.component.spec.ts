import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowbooksComponent } from './borrowbooks.component';

describe('BorrowbooksComponent', () => {
  let component: BorrowbooksComponent;
  let fixture: ComponentFixture<BorrowbooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BorrowbooksComponent]
    });
    fixture = TestBed.createComponent(BorrowbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
