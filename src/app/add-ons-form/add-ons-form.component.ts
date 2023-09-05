import { FormGroup } from '@angular/forms';
import { Component, Input } from '@angular/core';
import { inject } from '@angular/core';
import { PlanDetailsService } from '../plan-details.service';

@Component({
  selector: 'app-add-ons-form',
  templateUrl: './add-ons-form.component.html',
  styleUrls: ['./add-ons-form.component.css'],
})
export class AddOnsFormComponent {
  @Input('form') form!: FormGroup;
  planService = inject(PlanDetailsService);

  get addOns() {
    return this.planService.getAllAddons();
  }

  get selectedPeriod() {
    return this.planService.selectedPeriod(this.form);
  }

  get selectedAddOnsIds() {
    return this.planService.selectedAddOns(this.form).map((a) => a.id);
  }
}
