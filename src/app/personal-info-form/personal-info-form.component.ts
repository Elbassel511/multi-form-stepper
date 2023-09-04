import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'personal-info-form',
  templateUrl: './personal-info-form.component.html',
  styleUrls: ['./personal-info-form.component.css'],
})
export class PersonalInfoFormComponent {
  @Input('form') form!: FormGroup;

  // form = new FormGroup({
  //   name: new FormControl('', Validators.required),
  //   email: new FormControl('', [Validators.required, Validators.email]),
  //   phone: new FormControl('', [
  //     Validators.required,
  //     Validators.pattern('[0-9]+'),
  //   ]),
  // });

  get name() {
    return this.form.get('personalInfo.name');
  }

  get email() {
    return this.form.get('personalInfo.email');
  }
  get phone() {
    return this.form.get('personalInfo.phone');
  }
}
