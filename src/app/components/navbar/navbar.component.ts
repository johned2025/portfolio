import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isDarkMode = false;
  isMenuOpen = false;         
  screenIsSmall = false; 

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    document.documentElement.classList.toggle('dark');
    const theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
  }
    toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  ngOnInit(): void {
    const stored = localStorage.getItem('theme');
    const useDark = stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches);
    if (useDark) document.documentElement.classList.add('dark');
    this.isDarkMode = useDark;
    
    this.updateScreenSize();
  }
  updateScreenSize() {
    this.screenIsSmall = window.innerWidth < 640; // Tailwind 'sm' breakpoint
    if (!this.screenIsSmall) {
      this.isMenuOpen = false; // Close menu if switching to large screen
    }
  }
  
}

