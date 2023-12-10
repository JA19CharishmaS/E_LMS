import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindbooksComponent } from './findbooks.component';

describe('FindbooksComponent', () => {
  let component: FindbooksComponent;
  let fixture: ComponentFixture<FindbooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FindbooksComponent]
    });
    fixture = TestBed.createComponent(FindbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
