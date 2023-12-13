import { Component } from '@angular/core';
import { sidebarMenuLists } from 'src/app/Constants/sidebar-menu-list';
import { MenuList } from 'src/app/Models/sidebar-menu-list.model';
import { LayoutService } from 'src/app/Services/layout.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  constructor(public layoutService: LayoutService) {}

  menuList: MenuList[] = sidebarMenuLists as MenuList[];
  activeMenu!: MenuList;

  ngOnInit() {
    this.layoutService.activeMainMenu$.subscribe((activeMenu: MenuList) => {
      this.activeMenu = activeMenu;
    });
  }
}
