import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-workhistory',
  templateUrl: './workhistory.component.html',
  styleUrls: ['./workhistory.component.scss'],
})
export class WorkhistoryComponent implements OnInit {
  workHistoryForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.workHistoryForm = this.fb.group({
      workHistoryItems: this.fb.array([this.createWorkHistory()]),
    });
  }

  createWorkHistory(): FormGroup {
    return this.fb.group({
      companyName: ['', Validators.required],
      durationFrom: ['', Validators.required],
      durationTo: ['', Validators.required],
      relievingCertificate: [''],
    });
  }

  get workHistoryItems(): FormArray {
    return this.workHistoryForm.get('workHistoryItems') as FormArray;
  }

  addWorkHistory(): void {
    this.workHistoryItems.push(this.createWorkHistory());
  }

  removeWorkHistory(index: number): void {
    this.workHistoryItems.removeAt(index);
  }

  onSubmit() {
    if (this.workHistoryForm.valid) {
      console.log(this.workHistoryForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
