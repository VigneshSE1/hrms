import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Gamification } from '@theproindia/pro-gamification';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-competency',
  templateUrl: './compentency.component.html',
  styleUrls: ['./compentency.component.scss'],
})
export class CompetencyComponent implements OnInit {
  competencyForm!: FormGroup;
  gameConfigs = environment.gamification;

  constructor(private fb: FormBuilder, private gamification: Gamification) {}
  submitted = false;
  ngOnInit() {
    this.competencyForm = this.fb.group({
      competencies: this.fb.array([this.createCompetency()]),
    });
  }

  createCompetency(): FormGroup {
    return this.fb.group({
      courseName: ['', Validators.required],
      durationFrom: ['', Validators.required],
      durationTo: ['', Validators.required],
      certificate: [''],
    });
  }

  get competencies(): FormArray {
    return this.competencyForm.get('competencies') as FormArray;
  }

  addCompetency(): void {
    this.competencies.push(this.createCompetency());
  }

  removeCompetency(index: number): void {
    this.competencies.removeAt(index);
  }

  onSubmit() {
    this.submitted = true;
    if (this.competencyForm.valid) {
      // Implement what happens on form submission
      this.gamification.updateGameAction(
        this.gameConfigs.userId,
        this.gameConfigs.workHistorySubmissionAction,
        '',
        ''
      );
      console.log(this.competencyForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
