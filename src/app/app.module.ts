import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { StepperComponent } from './stepper/stepper-component/stepper-component.component';
import { PersonalInfoFormComponent } from './personal-info-form/personal-info-form.component';
import { SelectPlanFormComponent } from './select-plan-form/select-plan-form.component';
import { AddOnsFormComponent } from './add-ons-form/add-ons-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SummaryComponent } from './summary/summary.component';
import { PlanDetailsService } from './plan-details.service';

@NgModule({
  declarations: [
    AppComponent,
    StepperComponent,
    PersonalInfoFormComponent,
    SelectPlanFormComponent,
    AddOnsFormComponent,
    SummaryComponent,
  ],
  imports: [BrowserModule, CdkStepperModule, FormsModule, ReactiveFormsModule],
  providers: [PlanDetailsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
