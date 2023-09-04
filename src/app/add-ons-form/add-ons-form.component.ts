import { addOns as addOnsData } from './../data/data';
import { FormGroup } from '@angular/forms';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-add-ons-form',
  templateUrl: './add-ons-form.component.html',
  styleUrls: ['./add-ons-form.component.css'],
})
export class AddOnsFormComponent {
  @Input('form') form!: FormGroup;
  addOns = addOnsData;

  get selectedAddOns() {
    let selectedAddons: string[] = [];
    this.addOns.forEach((addOn) => {
      if (this.form.get('addOns.' + addOn.id)?.value === true)
        selectedAddons.push(addOn.id);
    });
    return selectedAddons;
  }

  get yearlyPeriod() {
    return this.form.get('plan.yearlyPeriod')?.value;
  }
}
