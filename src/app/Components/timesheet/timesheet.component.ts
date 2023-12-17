import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { Form } from '../enum/form.enum';
import { Gamification } from '@theproindia/pro-gamification';
import { ToasterService } from 'src/app/Services/toaster.service';
@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.scss'],
})
export class TimesheetComponent implements OnInit {
  timesheetForm!: FormGroup;
  isActivecongrats = false;
  rewardPoints: any;
  gameConfigs = environment.gamification;
  projectNames = ['Project A', 'Project B', 'Project C'];
  constructor(
    private fb: FormBuilder,
    private gamification: Gamification,
    private toasterService: ToasterService
  ) {}
  ngOnInit(): void {
    this.timesheetForm = this.fb.group({
      projects: this.fb.array([this.createProject()]),
    });
    for (let i = 0; i < 4; i++) {
      this.addProject();
    }
  }

  createProject(): FormGroup {
    return this.fb.group({
      projectName: ['', Validators.required],
      responsibility: ['', Validators.required],
      monday: [''],
      tuesday: [''],
      wednesday: [''],
      thursday: [''],
      friday: [''],
    });
  }

  get projects(): FormArray {
    return this.timesheetForm.get('projects') as FormArray;
  }

  addProject(): void {
    this.projects.push(this.createProject());
  }

  removeProject(index: number): void {
    this.projects.removeAt(index);
  }

  async onSubmit() {
    this.rewardPoints = await this.gamification.updateGameAction(
      this.gameConfigs.userId,
      this.gameConfigs.timeSheetSubmission,
      '',
      ''
    );

    this.toggleContrtsPopup();

    this.toasterService.show(this.rewardPoints.points);
  }

  toggleContrtsPopup() {
    this.isActivecongrats = !this.isActivecongrats;
  }
}
