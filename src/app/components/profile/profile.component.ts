import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import lottie from 'lottie-web';

@Component({
  selector: 'app-profile',
  template: `<div #lottieContainer class="w-48 h-48"></div>`,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  @ViewChild('lottieContainer', { static: true }) lottieContainer!: ElementRef;

  ngOnInit() {
    lottie.loadAnimation({
      container: this.lottieContainer.nativeElement,
      path: 'images/rocket-hero.json',
      renderer: 'svg',
      loop: true,
      autoplay: true,
    });
  }
}
