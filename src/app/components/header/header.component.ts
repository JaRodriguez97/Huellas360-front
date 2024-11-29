import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isMenuOpen: boolean = false;
  listLinks = [
    {
      name: 'Hogar',
      url: '#main',
    },
    {
      name: 'Huellitas',
      url: '#huellitas',
    },
    {
      name: 'Sumate',
      url: '#sumate',
    },
    {
      name: 'Familias',
      url: '#familias',
    },
    {
      name: 'Contacta',
      url: '#contacto',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  isActive(url: string): boolean {
    return this.router.url.includes(url);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
