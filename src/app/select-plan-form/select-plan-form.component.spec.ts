import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPlanFormComponent } from './select-plan-form.component';

describe('SelectPlanFormComponent', () => {
  let component: SelectPlanFormComponent;
  let fixture: ComponentFixture<SelectPlanFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectPlanFormComponent]
    });
    fixture = TestBed.createComponent(SelectPlanFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
