import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { sidebarMenuLists } from '../Constants/sidebar-menu-list';
import { MenuList, SubMenuList } from '../Models/sidebar-menu-list.model';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  activeMainMenu$ = new BehaviorSubject<MenuList>(sidebarMenuLists[0]);
  activeSubMenu$ = new BehaviorSubject<SubMenuList>({} as SubMenuList);
  constructor() {}
}
