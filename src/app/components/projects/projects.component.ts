import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
   showModal = false;
  selectedMediaUrl = '';
  isImage = false;

  openModal(mediaUrl: string, type: 'image' | 'video'): void {
    this.selectedMediaUrl = mediaUrl;
    this.isImage = type === 'image';
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
    this.selectedMediaUrl = '';
  }
}
