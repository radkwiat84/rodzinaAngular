import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChildDecisionComponent } from './add-child-decision.component';

describe('AddChildDecisionComponent', () => {
  let component: AddChildDecisionComponent;
  let fixture: ComponentFixture<AddChildDecisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddChildDecisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddChildDecisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
