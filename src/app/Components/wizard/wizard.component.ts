import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss'],
})
export class WizardComponent {
  currentRoute!: string;
  constructor(private router: Router) {}
  ngOnInit() {
    this.currentRoute = this.router.url;
    console.log(this.currentRoute);
  }
}
