import { MainMenu, MenuList } from '../models/sidebar-menu-list.model';

export const sidebarMenuLists: MenuList[] = [
  {
    menuId: MainMenu.Home,
    label: 'Home',
    imageUrl: '../assets/images/home.svg',
    activeImageUrl: '../assets/images/home-active.svg',
    alt: 'home',
    isActive: false,
    subItem: [
      {
        label: '',
        link: '',
        isActive: false,
      },
      {
        label: '',
        link: '',
        isActive: false,
      },
    ],
  },
  {
    menuId: MainMenu.DAS,
    label: 'DAS',
    imageUrl: '../assets/images/das.svg',
    activeImageUrl: '../assets/images/das-active.svg',
    alt: 'DAS',
    isActive: false,
    subItem: [
      {
        label: 'STB Management',
        link: '',
        isActive: false,
      },
      {
        label: 'STB Messaging',
        link: '',
        isActive: false,
      },
      {
        label: 'STB Black Listing',
        link: '',
        isActive: false,
      },
      {
        label: 'Global Fingerprint',
        link: '',
        isActive: false,
      },
      {
        label: 'Service Center',
        link: '',
        isActive: false,
      },
      {
        label: 'Migrate/Upgrate Services',
        link: '',
        isActive: false,
      },
    ],
  },
  {
    menuId: MainMenu.STB,
    label: 'STB',
    imageUrl: '../assets/images/stb.svg',
    activeImageUrl: '../assets/images/stb-active.svg',
    alt: 'STB menu',
    isActive: false,
    subItem: [
      {
        label: 'STB List',
        link: '',
        isActive: false,
      },
      {
        label: 'Activation / Deactivation',
        link: '',
        isActive: false,
      },
      {
        label: 'Pairing / Unpairing',
        link: '',
        isActive: false,
      },
      {
        label: 'Blocking / Unblocking',
        link: '',
        isActive: false,
      },
      {
        label: 'Replace STB',
        link: '',
        isActive: false,
      },
    ],
  },
  {
    menuId: MainMenu.User,
    label: 'User',
    imageUrl: '../assets/images/user.svg',
    activeImageUrl: '../assets/images/user-active.svg',
    alt: 'user',
    isActive: false,
    subItem: [],
  },
  {
    menuId: MainMenu.Customers,
    label: 'Customers',
    imageUrl: '../assets/images/customer.svg',
    activeImageUrl: '../assets/images/customer-active.svg',
    alt: 'customer',
    isActive: false,
    subItem: [
      {
        label: 'Create Customer',
        link: '',
        isActive: false,
      },
      {
        label: 'Bill Payment',
        link: '',
        isActive: false,
      },
      {
        label: 'Bulk Customer Edit',
        link: '',
        isActive: false,
      },
      {
        label: 'Bulk customer Upload',
        link: '',
        isActive: false,
      },
      {
        label: 'Payment Verification',
        link: '',
        isActive: false,
      },
      {
        label: 'Service Extension',
        link: '',
        isActive: false,
      },
      {
        label: 'Partial Intra LCO',
        link: '',
        isActive: false,
      },
      {
        label: 'Bulk Payment Upload',
        link: '',
        isActive: false,
      },
      {
        label: 'Customer/LCO Waiver',
        link: '',
        isActive: false,
      },
    ],
  },
  {
    menuId: MainMenu.Products,
    label: 'Products',
    imageUrl: '../assets/images/product.svg',
    activeImageUrl: '../assets/images/product-active.svg',
    alt: 'product',
    isActive: false,
    subItem: [
      {
        label: 'Create Product',
        link: 'product',
        isActive: true,
        headerMenu: [
          {
            label: 'Individual',
            link: 'product',
            isActive: true,
          },
          {
            label: 'Bulk',
            link: 'bulkproduct',
            isActive: false,
          },
        ],
      },
      {
        label: 'Products List',
        link: 'view',
        isActive: false,
        enableExport: true,
      },
      {
        label: 'Add & Manage Discounts',
        link: 'discounts',
        isActive: false,
      },
    ],
  },
  {
    menuId: MainMenu.Channels,
    label: 'Channels',
    imageUrl: '../assets/images/channel.svg',
    activeImageUrl: '../assets/images/channel-active.svg',
    alt: 'channels',
    isActive: true,
    subItem: [
      {
        label: 'Broadcaster List',
        link: 'broadcasters',
        isActive: true,
        enableExport: true,
      },
      {
        label: 'Channel List',
        link: 'list',
        isActive: false,
        enableExport: true,
      },
      {
        label: 'Channel Info',
        link: 'info',
        isActive: false,
      },
    ],
  },
  {
    menuId: MainMenu.Speaker,
    label: 'Speaker',
    imageUrl: '../assets/images/speaker.svg',
    activeImageUrl: '../assets/images/speaker-active.svg',
    alt: 'speaker',
    isActive: false,
    subItem: [],
  },
  {
    menuId: MainMenu.Report,
    label: 'Report',
    imageUrl: '../assets/images/report.svg',
    activeImageUrl: '../assets/images/report-active.svg',
    alt: 'report',
    isActive: false,
    subItem: [
      {
        label: '',
        link: '',
        isActive: false,
      },
      {
        label: '',
        link: '',
        isActive: false,
      },
    ],
  },
  {
    menuId: MainMenu.TRAI,
    label: 'TRAI',
    imageUrl: '../assets/images/trai.svg',
    activeImageUrl: '../assets/images/trai-active.svg',
    alt: 'TRAI',
    isActive: false,
    subItem: [
      {
        label: '',
        link: '',
        isActive: false,
      },
      {
        label: '',
        link: '',
        isActive: false,
      },
    ],
  },
  {
    menuId: MainMenu.Settings,
    label: 'Setting',
    imageUrl: '../assets/images/setting.svg',
    activeImageUrl: '../assets/images/setting-active.svg',
    alt: 'setting',
    isActive: false,
    subItem: [
      {
        label: '',
        link: '',
        isActive: false,
      },
      {
        label: '',
        link: '',
        isActive: false,
      },
    ],
  },
];
