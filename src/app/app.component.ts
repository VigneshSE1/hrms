import { Component } from '@angular/core';
import { SidebarService } from './Services/sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'hrms';

  constructor(public sidebarService: SidebarService) {}

  sidebarVisible: boolean = false;

  ngOnInit() {
    this.sidebarService.sidebarVisible$.subscribe((items) => {
      this.sidebarVisible = items;
    });
  }
}
