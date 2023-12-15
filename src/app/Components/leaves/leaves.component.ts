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
  showLeaveApply = false;
  constructor(private formBuilder: FormBuilder) {}
  isActivecongrats = false;
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
    console.log('form submitred sucessfully');
    this.toggleContrtsPopup();

    console.log(this.isActivecongrats , "test");
    // if (this.leaveApprovalForm.invalid) {
    //   return;
    // }
  }

  toggleContrtsPopup() {
    this.isActivecongrats = !this.isActivecongrats;
  }
  toggleLeaveApply() {
    this.showLeaveApply = !this.showLeaveApply;
  }
}
