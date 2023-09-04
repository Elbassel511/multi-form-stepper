import { FormGroup } from '@angular/forms';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'select-plan-form',
  templateUrl: './select-plan-form.component.html',
  styleUrls: ['./select-plan-form.component.css'],
})
export class SelectPlanFormComponent {
  @Input('form') form!: FormGroup;

  plans = [
    {
      name: 'Arcade',
      monthlyPrice: 9,
      yearlyPrice: 90,
      icon: 'icon-arcade.svg',
    },
    {
      name: 'Advanced',
      monthlyPrice: 12,
      yearlyPrice: 120,
      icon: 'icon-advanced.svg',
    },
    { name: 'Pro', monthlyPrice: 15, yearlyPrice: 150, icon: 'icon-pro.svg' },
  ];

  get selectedPlan() {
    return this.form.get('plan.selectedPlan');
  }

  get yearlyPeriod() {
    return this.form.get('plan.yearlyPeriod');
  }
}
