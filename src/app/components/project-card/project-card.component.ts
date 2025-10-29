import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-project-card',
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() repoLink?: string;
  @Input() mediaPath?: string;   
  @Input() mediaType?: 'video' | 'image';
  @Input() stack?: string;

  @Output() openModal = new EventEmitter<{ path: string, type: 'video'|'image' }>();
  
  handleClick() {
    if (this.mediaPath && this.mediaType) {
      this.openModal.emit({ path: this.mediaPath, type: this.mediaType });
    }
  }
  onMouseOver(event: MouseEvent): void {
    const target = event.currentTarget as HTMLElement | null;
    if (target) {
      target.style.boxShadow = 'var(--shadow-hover)';
    }
  }

  onMouseOut(event: MouseEvent): void {
    const target = event.currentTarget as HTMLElement | null;
    if (target) {
      target.style.boxShadow = 'var(--shadow-default)';
    }
  }
}
