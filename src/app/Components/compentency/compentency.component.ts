import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-competency',
  templateUrl: './compentency.component.html',
  styleUrls: ['./compentency.component.scss'],
})
export class CompetencyComponent implements OnInit {
  competencyForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

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
    if (this.competencyForm.valid) {
      // Implement what happens on form submission
      console.log(this.competencyForm.value); // Example: Log form values
    } else {
      // Handle invalid form
      console.log('Form is invalid');
    }
  }
}
