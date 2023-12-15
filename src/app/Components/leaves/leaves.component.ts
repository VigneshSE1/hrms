import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Gamification } from '@theproindia/pro-gamification';
import { ToasterService } from '../../Services/toaster.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-leaves',
  templateUrl: './leaves.component.html',
  styleUrls: ['./leaves.component.scss'],
})
export class LeavesComponent implements OnInit {
  leaveApprovalForm!: FormGroup;
  submitted = false;
  showLeaveApply = false;
  rewardPoints: any;
  gameConfigs = environment.gamification;
  constructor(
    private formBuilder: FormBuilder,
    private gamification: Gamification,
    private toasterService: ToasterService
  ) {}
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

  async onSubmit() {
    if (this.leaveApprovalForm.valid) {
      this.toggleContrtsPopup();
      this.rewardPoints = await this.gamification.updateGameAction(
        this.gameConfigs.userId,
        this.gameConfigs.workHistorySubmissionAction,
        '',
        ''
      );
      this.toasterService.show(this.rewardPoints.points);
    }
  }

  toggleContrtsPopup() {
    this.isActivecongrats = !this.isActivecongrats;
  }
  toggleLeaveApply() {
    this.showLeaveApply = !this.showLeaveApply;
  }
}
