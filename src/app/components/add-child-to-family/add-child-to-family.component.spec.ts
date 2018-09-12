import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChildToFamilyComponent } from './add-child-to-family.component';

describe('AddChildToFamilyComponent', () => {
  let component: AddChildToFamilyComponent;
  let fixture: ComponentFixture<AddChildToFamilyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddChildToFamilyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddChildToFamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
