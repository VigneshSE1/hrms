import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-personalinfo',
  templateUrl: './personalinfo.component.html',
  styleUrls: ['./personalinfo.component.css'],
})
export class PersonalinfoComponent implements OnInit {
  myForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      fullName: ['', Validators.required],
      // Define other form controls here following the same pattern
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      // Implement what happens on form submission
      console.log(this.myForm.value); // Example: Log form values
    } else {
      // Handle invalid form
      console.log('Form is invalid');
    }
  }
}
