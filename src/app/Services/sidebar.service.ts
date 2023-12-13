import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { sidebarMenuLists } from '../Constants/sidebar-menu-list';
import { MainMenu, MenuList } from '../models/sidebar-menu-list.model';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  sidebarVisible$ = new BehaviorSubject<boolean>(true);

  getSideBarMenu(menuId: MainMenu): MenuList {
    return (
      sidebarMenuLists.find((item: MenuList) => item.menuId === menuId) ||
      sidebarMenuLists[0]
    );
  }

  toggleSidebar() {
    this.sidebarVisible$.next(!this.sidebarVisible$.value);
  }
}
