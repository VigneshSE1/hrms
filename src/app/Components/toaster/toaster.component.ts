import { Component, OnInit } from '@angular/core';
import { ToasterService } from '../../Services/toaster.service';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.scss'],
})
export class ToasterComponent implements OnInit {
  isActive = false;
  points = 0;
  constructor(private toasterService: ToasterService) {}

  ngOnInit(): void {
    this.toasterService.toast$.subscribe((points: number) => {
      if (points) {
        this.points = points;
        this.isActive = true;
        setTimeout(() => {
          this.isActive = false;
          this.points = 0;
        }, 4000);
      }
    });
  }
}
