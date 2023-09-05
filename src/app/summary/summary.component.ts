import { FormGroup } from '@angular/forms';
import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { PlanDetailsService } from '../plan-details.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
})
export class SummaryComponent {
  @Input('form') form!: FormGroup;
  @Output('resetStepper') reset = new EventEmitter();
  planService = inject(PlanDetailsService);

  get selectedPeriod() {
    return this.planService.selectedPeriod(this.form);
  }

  get plan() {
    return this.planService.plan(this.form);
  }

  get addOnsData() {
    return this.planService.selectedAddOns(this.form);
  }

  get totalPrice() {
    return this.planService.totalPrice(this.form);
  }

  resetForm() {
    this.reset.emit();
  }
}
