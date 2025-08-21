import { Component,HostListener,ElementRef, ViewChild  } from '@angular/core';
import { CommonModule } from '@angular/common';
import lottie, { AnimationItem } from 'lottie-web';

@Component({
  selector: 'app-scroll-to-top',
  imports: [CommonModule],
  templateUrl: './scroll-to-top.component.html',
  styleUrl: './scroll-to-top.component.css'
})
export class ScrollToTopComponent {
   isVisible = false;
   launching = false;
   private animation!: AnimationItem;
   @ViewChild('lottieContainer', { static: true }) lottieContainer!: ElementRef;
  
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isVisible = window.scrollY > 300;
  }

  scrollToTop() {
    
    window.scrollTo({ top: 0 });
  }
  launchRocket() {
    this.animation.loop = false;
    this.animation.playSegments([38, 100], true);
    setTimeout(() => {this.scrollToTop(); }, 800);
        
    const onComplete = () => {
      this.animation.removeEventListener('complete', onComplete); 
      this.animation.loop = true; 
      this.animation.playSegments([30, 33], true);
      
    };
    this.animation.addEventListener('complete', onComplete);
  }
  ngOnInit() {
    this.animation = lottie.loadAnimation({
      container: this.lottieContainer.nativeElement,
      renderer: 'svg',
      loop: true,
      autoplay: false,
      path: 'images/rocket-footer.json' 
    });
    this.animation.addEventListener('DOMLoaded', () => {
      this.animation.playSegments([30, 33], true);
    });
    
  }

}
