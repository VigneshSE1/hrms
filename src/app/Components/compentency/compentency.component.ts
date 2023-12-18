import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Gamification } from '@theproindia/pro-gamification';
import { environment } from '../../../environments/environment';
import { Form } from '../enum/form.enum';
import { ToasterService } from '../../Services/toaster.service';

@Component({
  selector: 'app-competency',
  templateUrl: './compentency.component.html',
  styleUrls: ['./compentency.component.scss'],
})
export class CompetencyComponent implements OnInit {
  competencyForm!: FormGroup;
  gameConfigs = environment.gamification;
  competency = sessionStorage.getItem(Form.COMPETENCY_FORM);
  rewardPoints: any;
  isActivecongrats = false;
  constructor(
    private fb: FormBuilder,
    private gamification: Gamification,
    private toasterService: ToasterService
  ) {}
  submitted = false;
  ngOnInit() {
    this.competencyForm = this.fb.group({
      competencies: this.fb.array([this.createCompetency()]),
    });
    this.competency &&
      this.competencyForm.setValue(JSON.parse(this.competency || '{}'));
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

  async onSubmit() {
    this.submitted = true;
    if (this.competencyForm.valid) {
      this.rewardPoints = await this.gamification.updateGameAction(
        this.gameConfigs.userId,
        this.gameConfigs.workHistorySubmissionAction,
        '',
        ''
      );
      this.toggleContrtsPopup();
      // this.toasterService.show(this.rewardPoints.points);
      sessionStorage.setItem(
        Form.COMPETENCY_FORM,
        JSON.stringify(this.competencyForm?.value)
      );
      console.log(this.competencyForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

  toggleContrtsPopup() {
    this.isActivecongrats = !this.isActivecongrats;
  }
}
