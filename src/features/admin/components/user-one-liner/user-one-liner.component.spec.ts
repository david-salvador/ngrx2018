import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOneLinerComponent } from './user-one-liner.component';

describe('UserOneLinerComponent', () => {
  let component: UserOneLinerComponent;
  let fixture: ComponentFixture<UserOneLinerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserOneLinerComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOneLinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
