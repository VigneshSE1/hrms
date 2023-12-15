import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-leaves',
  templateUrl: './leaves.component.html',
  styleUrls: ['./leaves.component.scss'],
})
export class LeavesComponent implements OnInit {
  leaveApprovalForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.leaveApprovalForm = this.formBuilder.group({
      leaveType: ['', Validators.required],
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required],
      firstHalf: [false],
      secondHalf: [false],
      reason: ['', Validators.required],
    });
  }

  onSubmit() {
    this.submitted = true;

    // Stop here if the form is invalid
    if (this.leaveApprovalForm.invalid) {
      return;
    }

    // Process the form data further (e.g., submit to server)
    console.log('Form submitted:', this.leaveApprovalForm.value);
  }
}
