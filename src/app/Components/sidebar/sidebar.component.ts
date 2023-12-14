import { Component } from '@angular/core';
import { sidebarMenuLists } from '../../Constants/sidebar-menu-list';
import { MenuList } from '../../Models/sidebar-menu-list.model';
import { LayoutService } from '../../Services/layout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  constructor(public layoutService: LayoutService, public router: Router) {}

  menuList: MenuList[] = sidebarMenuLists as MenuList[];
  activeMenu!: MenuList;

  ngOnInit() {
    this.layoutService.activeMainMenu$.subscribe((activeMenu: MenuList) => {
      this.activeMenu = activeMenu;
    });
  }
  navigateToPage(routerlink: MenuList, path: string) {
    this.layoutService.activeMainMenu$.next(routerlink);
    this.router.navigateByUrl(path);
  }
}
