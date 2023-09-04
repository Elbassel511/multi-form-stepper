import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component } from '@angular/core';

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
      onlineService: new FormControl(),
      largerStorage: new FormControl(),
      customizableProfile: new FormControl(),
    }),
  });
}
