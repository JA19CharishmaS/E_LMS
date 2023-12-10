import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllMembersComponent } from './get-all-members.component';

describe('GetAllMembersComponent', () => {
  let component: GetAllMembersComponent;
  let fixture: ComponentFixture<GetAllMembersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetAllMembersComponent]
    });
    fixture = TestBed.createComponent(GetAllMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
