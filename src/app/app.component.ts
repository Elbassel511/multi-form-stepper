import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, ViewChild } from '@angular/core';
import { CdkStepper } from '@angular/cdk/stepper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  stepperForm = new FormGroup({
    personalInfo: new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]+'),
      ]),
    }),
    plan: new FormGroup({
      selectedPlan: new FormControl('arcade'),
      yearlyPeriod: new FormControl(false),
    }),
    addOns: new FormGroup({
      onlineService: new FormControl(false),
      largerStorage: new FormControl(false),
      customizableProfile: new FormControl(false),
    }),
  });

  @ViewChild('cdkStepper') cdkStepper: CdkStepper | undefined;

  reset() {
    this.cdkStepper?.reset();
  }
}
