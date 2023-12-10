import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewuseraccountComponent } from './viewuseraccount.component';

describe('ViewuseraccountComponent', () => {
  let component: ViewuseraccountComponent;
  let fixture: ComponentFixture<ViewuseraccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewuseraccountComponent]
    });
    fixture = TestBed.createComponent(ViewuseraccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
