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
  selectedVideoUrl = '';

  openModal(videoUrl: string): void {
    this.selectedVideoUrl = videoUrl;
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
    this.selectedVideoUrl = '';
  }
}
