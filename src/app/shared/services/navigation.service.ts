import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface IMenuItem {
  type: 'link' | 'dropDown' | 'icon' | 'separator' | 'extLink';
  name?: string; // Used as display text for item and title for separator type
  state?: string; // Router state
  icon?: string; // Material icon name
  svgIcon?: string; // UI Lib icon name
  tooltip?: string; // Tooltip text
  disabled?: boolean; // If true, item will not be appeared in sidenav.
  sub?: IChildItem[]; // Dropdown items
  badges?: IBadge[];
}
interface IChildItem {
  type?: string;
  name: string; // Display text
  state?: string; // Router state
  icon?: string;  // Material icon name
  svgIcon?: string; // UI Lib icon name
  sub?: IChildItem[];
}

interface IBadge {
  color: string; // primary/accent/warn/hex color codes(#fff000)
  value: string; // Display text
}

@Injectable()
export class NavigationService {
  iconMenu: IMenuItem[] = [
    {
      name: 'DASHBOARD',
      state: 'dashboard/analytics',
      type: 'link',
      icon: 'dashboard',
    },
    {
      name: 'Contas',
      state: 'forms/contas',
      //state: 'forms/basic',
      type: 'link',
      icon: 'account_circle',
    },
    {
      name: 'Postos Abastecimento',
      state: 'forms/postos',
      type: 'link',
      icon: 'local_gas_station',
    },
    {
      name: 'Operadores',
      state: 'forms/operadores',
      type: 'link',
      icon: 'supervisor_account',
    },
    {
      name: 'Configurações',
      type: 'dropDown',
      tooltip: 'Others',
      icon: 'settings',
      sub: [
        {
          name: 'Operadoras',
          state: 'forms/configuracoes/operadoras'
          //state: 'others/gallery' 
        },
        {
          name: 'Combustíveis',
          state: 'forms/configuracoes/combustiveis'
          //state: 'others/pricing' 
        },
        {
          name: 'Locais',
          state: 'forms/configuracoes/locais'
          //state: 'others/users' 
        },
      ]
    },

  ];

  iconTypeMenuTitle = 'Frequently Accessed';
  // sets iconMenu as default;
  menuItems = new BehaviorSubject<IMenuItem[]>(this.iconMenu);
  // navigation component has subscribed to this Observable
  menuItems$ = this.menuItems.asObservable();
  constructor() { }

  // Customizer component uses this method to change menu.
  // You can remove this method and customizer component.
  // Or you can customize this method to supply different menu for
  // different user type.
  publishNavigationChange(menuType: string) {
    // switch (menuType) {
    //   case 'separator-menu':
    //     this.menuItems.next(this.separatorMenu);
    //     break;
    //   case 'icon-menu':
    //     this.menuItems.next(this.iconMenu);
    //     break;
    //   default:
    //     this.menuItems.next(this.plainMenu);
    // }
  }
}
