import { FormGroup } from '@angular/forms';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-add-ons-form',
  templateUrl: './add-ons-form.component.html',
  styleUrls: ['./add-ons-form.component.css'],
})
export class AddOnsFormComponent {
  @Input('form') form!: FormGroup;

  addOns = [
    {
      id: 'onlineService',
      name: 'Online service',
      monthlyPrice: 1,
      yearlyPrice: 10,
      extra: 'Access to multiplayer games',
    },
    {
      id: 'largerStorage',
      name: 'Larger storage',
      monthlyPrice: 2,
      yearlyPrice: 20,
      extra: 'Extra 1TB of cloud save',
    },
    {
      id: 'customizableProfile',
      name: 'Customizable profile',
      monthlyPrice: 2,
      yearlyPrice: 20,
      extra: 'Custom theme on your profile',
    },
  ];

  get selectedAddOns() {
    let selectedAddons: string[] = [];
    this.addOns.forEach((addOn) => {
      if (this.form.get('addOns.' + addOn.id)?.value === true)
        selectedAddons.push(addOn.id);
    });
    return selectedAddons;
  }
}
