import { MainMenu, MenuList } from '../Models/sidebar-menu-list.model';

export const sidebarMenuLists: MenuList[] = [
  {
    menuId: MainMenu.Info,
    label: 'information',
    imageUrl: '../assets/images/home.svg',
    activeImageUrl: '../assets/images/home.svg',
    alt: 'Home',
    isActive: false,
    subItem: [],
  },
  {
    menuId: MainMenu.Leave,
    label: 'leaves',
    imageUrl: '../assets/images/user.svg',
    activeImageUrl: '../assets/images/user.svg',
    alt: 'onboarding',
    isActive: false,
    subItem: [],
  },
  {
    menuId: MainMenu.Leave,
    label: 'leaves',
    imageUrl: '../assets/images/time.svg',
    activeImageUrl: '../assets/images/time.svg',
    alt: 'Home',
    isActive: false,
    subItem: [],
  },
  {
    menuId: MainMenu.TimeSheet,
    label: 'User',
    imageUrl: '../assets/images/building.svg',
    activeImageUrl: '../assets/images/building.svg',
    alt: 'Home',
    isActive: false,
    subItem: [],
  },
];
