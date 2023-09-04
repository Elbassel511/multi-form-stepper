import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOnsFormComponent } from './add-ons-form.component';

describe('AddOnsFormComponent', () => {
  let component: AddOnsFormComponent;
  let fixture: ComponentFixture<AddOnsFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddOnsFormComponent]
    });
    fixture = TestBed.createComponent(AddOnsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
