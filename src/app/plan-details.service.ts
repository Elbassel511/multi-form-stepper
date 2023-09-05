import { FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import {
  AddOn,
  addOns as addOnsData,
  Plan,
  plans as plansData,
} from './data/data';

@Injectable({
  providedIn: 'root',
})
export class PlanDetailsService {
  constructor() {}

  selectedPeriod(form: FormGroup): 'yearly' | 'monthly' {
    return form.get('plan.yearlyPeriod')?.value === true ? 'yearly' : 'monthly';
  }

  plan(form: FormGroup): Plan {
    let chosenPlan = form.get('plan.selectedPlan')?.value;
    let planDetail = plansData.find(
      (plan: Plan) => plan.name.toLowerCase() == chosenPlan.toLowerCase()
    );
    return planDetail as Plan;
  }

  selectedAddOns(form: FormGroup): AddOn[] {
    let addOnsFormObject: {} = form.get('addOns')?.value;
    let chosenAddOnsNames: string[] = [];

    Object.entries(addOnsFormObject).map((A) => {
      if (A[1] === true) chosenAddOnsNames.push(A[0]);
    });

    let addOnsArray: AddOn[] = [];

    chosenAddOnsNames.forEach((a) => {
      let x = addOnsData.find((add: AddOn) => add.id === a) as AddOn;
      addOnsArray.push(x);
    });
    return addOnsArray as unknown as AddOn[];
  }

  getAllAddons() {
    return addOnsData;
  }

  totalPrice(form: FormGroup): number {
    let selectedPeriod = this.selectedPeriod(form);
    let selectedPlan = this.plan(form);
    let selectedAddOns = this.selectedAddOns(form);
    let selectedAddOnsPrice: number = 0;
    let totalPrice: number;

    selectedAddOns.forEach((add) => {
      selectedAddOnsPrice += add[(selectedPeriod + 'Price') as 'yearlyPrice'];
    });

    console.log(selectedAddOnsPrice);

    totalPrice =
      selectedPlan[(selectedPeriod + 'Price') as 'yearlyPrice'] +
      selectedAddOnsPrice;
    return totalPrice;
  }
}
