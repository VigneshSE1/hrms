import { Component } from '@angular/core';
import { sidebarMenuLists } from '../../Constants/sidebar-menu-list';
import { MenuList } from '../../Models/sidebar-menu-list.model';
import { LayoutService } from '../../Services/layout.service';

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
