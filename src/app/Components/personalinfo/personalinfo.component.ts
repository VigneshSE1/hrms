import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
 
@Component({
  selector: 'app-personalinfo',
  templateUrl: './personalinfo.component.html',
  styleUrls: ['./personalinfo.component.scss'],
})
export class PersonalinfoComponent {
  myForm!: FormGroup;
 
  constructor(private fb: FormBuilder) {}
 
  ngOnInit() {
    this.myForm = this.fb.group({
      fullName: ['', Validators.required],
      // Define other form controls here following the same pattern
    });
  }
 
  onSubmit() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
 