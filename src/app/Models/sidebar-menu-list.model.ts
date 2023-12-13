export interface MenuList {
  menuId: MainMenu;
  label: string;
  imageUrl: string;
  activeImageUrl: string;
  alt: string;
  isActive?: boolean;
  subItem: SubMenuList[];
}

export interface SubMenuList {
  label?: string;
  link?: string;
  isActive?: boolean;
  enableExport?: boolean;
  headerMenu?: HeaderMenu[];
}

interface HeaderMenu {
  label?: string;
  link?: string;
  isActive?: boolean;
}

export enum MainMenu {
  Home = 1,
  DAS = 2,
  STB = 3,
  User = 4,
  Customers = 5,
  Products = 6,
  Channels = 7,
  Speaker = 8,
  Report = 9,
  TRAI = 10,
  Settings = 11,
}
