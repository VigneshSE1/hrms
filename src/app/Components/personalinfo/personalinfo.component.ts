import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-personalinfo',
  templateUrl: './personalinfo.component.html',
  styleUrls: ['./personalinfo.component.scss'],
})
export class PersonalinfoComponent {
  myForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      fullName: ['', Validators.required],
      dob: ['', Validators.required],
      fathersName: ['', Validators.required],
      bloodGroup: [''],
      personalEmail: ['', [Validators.required, Validators.email]],
      personalMobileNumber: [
        '',
        [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')],
      ],
      contactAddress: ['', Validators.required],
      state: ['', Validators.required],
      pincode: [
        '',
        [Validators.required, Validators.pattern('^[1-9][0-9]{5}$')],
      ],
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      console.log(this.myForm.value); // Example: Log form values
    } else {
      console.log('Form is invalid');
    }
  }
}
