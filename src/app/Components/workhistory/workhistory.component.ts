import { environment } from '.././../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Gamification } from '@theproindia/pro-gamification';
import { Form } from '../enum/form.enum';

@Component({
  selector: 'app-workhistory',
  templateUrl: './workhistory.component.html',
  styleUrls: ['./workhistory.component.scss'],
})
export class WorkhistoryComponent implements OnInit {
  workHistoryForm!: FormGroup;
  isActive = false;
  gameConfigs = environment.gamification;
  workHistory = sessionStorage.getItem(Form.WORK_HISTORY);

  constructor(private fb: FormBuilder, private gamification: Gamification) {}

  ngOnInit() {
    this.workHistoryForm = this.fb.group({
      workHistoryItems: this.fb.array([this.createWorkHistory()]),
    });
    this.workHistory &&
      this.workHistoryForm.setValue(JSON.parse(this.workHistory || '{}'));
  }

  createWorkHistory(): FormGroup {
    return this.fb.group({
      companyName: ['', Validators.required],
      durationFrom: ['', Validators.required],
      durationTo: ['', Validators.required],
      relievingCertificate: [''],
    });
  }

  togglePopup() {
    this.isActive = !this.isActive;
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
    console.log(this.workHistoryForm);

    if (this.workHistoryForm.valid) {
      console.log(this.workHistoryForm.value);
      this.gamification.updateGameAction(
        this.gameConfigs.userId,
        this.gameConfigs.workHistorySubmissionAction,
        '',
        ''
      );
      sessionStorage.setItem(
        Form.WORK_HISTORY,
        JSON.stringify(this.workHistoryForm?.value)
      );
    } else {
      console.log('Form is invalid');
    }
  }
}
