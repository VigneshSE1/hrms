import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { Gamification } from '@theproindia/pro-gamification';
import { environment } from '../../../environments/environment';
import { Form } from '../enum/form.enum';
import { ToasterService } from '../../Services/toaster.service';

@Component({
  selector: 'app-personalinfo',
  templateUrl: './personalinfo.component.html',
  styleUrls: ['./personalinfo.component.scss'],
})
export class PersonalinfoComponent {
  myForm!: FormGroup;
  isActive = false;
  rewardPoints: any;
  constructor(
    private fb: FormBuilder,
    private gamification: Gamification,
    private toasterService: ToasterService
  ) {}
  submitted = false;
  gameConfigs = environment.gamification;
  personalInfo = sessionStorage.getItem(Form.PERSONAL_INFO_FORM);
  ngOnInit() {
    this.myForm = this.fb.group({
      fullName: ['', Validators.required],
      dob: ['', Validators.required],
      fathersName: ['', Validators.required],
      bloodGroup: ['', Validators.required],
      personalEmail: ['', [Validators.required, Validators.email]],
      personalMobileNumber: [
        '',
        [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')],
      ],
      contactAddress: ['', Validators.required],
      state: ['', Validators.required],
      pincode: [
        '',
        [Validators.required, Validators.pattern('^[1-9][0-9]{5}$')],
      ],
    });
    !this.personalInfo && (this.isActive = true);
    this.personalInfo &&
      this.myForm.setValue(JSON.parse(this.personalInfo || '{}'));
  }
  get formControls(): { [key: string]: AbstractControl } {
    return this.myForm.controls;
  }

  async onSubmit() {
    this.submitted = true;
    if (this.myForm.invalid) {
      return;
    }
    this.rewardPoints = await this.gamification.updateGameAction(
      this.gameConfigs.userId,
      this.gameConfigs.profileSubmissionAction,
      '',
      ''
    );
    sessionStorage.setItem(
      Form.PERSONAL_INFO_FORM,
      JSON.stringify(this.myForm?.value)
    );
    this.toasterService.show(this.rewardPoints.points);
    console.log(this.myForm?.value);
  }

  hidePopup() {
    this.isActive = false;
  }
}
