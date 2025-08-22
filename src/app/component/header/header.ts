// header.component.ts
import { Component } from '@angular/core';
import { Button } from '../button/button';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
  imports: [Button]
})
export class Header {
  
  navItems = [
    { label: 'Menu', link: '/menu' },
    { label: 'Gallery', link: '/gallery' },
    { label: 'Events', link: '/events' },
    { label: 'About', link: '/about' },
    { label: 'Contact', link: '/contact' }
  ];

  showMobileMenu = false;

  toggleMobileMenu() {
    // Only toggle on mobile screens
    if (window.innerWidth < 768) {
      this.showMobileMenu = !this.showMobileMenu;
    }
  }

  onNavClick(item: any) {
    console.log('Navigating to:', item.label);

  }

  onBookTableClick() {
    console.log('Book Table button clicked');
  }
} 