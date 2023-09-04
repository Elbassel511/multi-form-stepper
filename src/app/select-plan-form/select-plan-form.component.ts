import { FormGroup } from '@angular/forms';
import { Component, Input } from '@angular/core';
import { plans as plansData } from '../data/data';

@Component({
  selector: 'select-plan-form',
  templateUrl: './select-plan-form.component.html',
  styleUrls: ['./select-plan-form.component.css'],
})
export class SelectPlanFormComponent {
  @Input('form') form!: FormGroup;

  plans = plansData;

  get selectedPlan() {
    return this.form.get('plan.selectedPlan');
  }

  get yearlyPeriod() {
    return this.form.get('plan.yearlyPeriod');
  }
}
