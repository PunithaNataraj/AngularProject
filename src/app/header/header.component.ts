import { Component, OnInit } from '@angular/core';
import { CartItemsService } from '../cart-items.service';
import { DataAccessService } from '../data-access.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isLightTheme = true;

  onThemeSwitchChange() {
    this.isLightTheme = !this.isLightTheme;

    document.body.setAttribute(
      'data-theme',
      this.isLightTheme ? 'light' : 'dark'
    );
  }

  isMenuOpen = false;

  constructor(public dataService: DataAccessService, public cartService: CartItemsService) {
  }
  ngOnInit() {

  }
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}

