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
    this.rewardPoints = 0;

    if (this.leaveApprovalForm.valid) {
      if (this.leaveApprovalForm.value.leaveType === 'casual') {
        this.rewardPoints = await this.gamification.updateGameAction(
          this.gameConfigs.userId,
          this.gameConfigs.casualLeaveAction,
          '',
          ''
        );
        this.toggleContrtsPopup();
      } else if (this.leaveApprovalForm.value.leaveType === 'earned') {
        this.rewardPoints = await this.gamification.updateGameAction(
          this.gameConfigs.userId,
          this.gameConfigs.earnedLeaveAction,
          '',
          ''
        );
        this.toggleContrtsPopup();
      }

      // this.rewardPoints && this.toasterService.show(this.rewardPoints.points);
    }
  }

  toggleContrtsPopup() {
    this.isActivecongrats = !this.isActivecongrats;
  }
  toggleLeaveApply() {
    this.showLeaveApply = !this.showLeaveApply;
  }
}
