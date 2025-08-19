import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';
@Component({
  selector: 'app-projects',
  imports: [CommonModule, ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
   showModal = false;
  selectedMediaUrl = '';
  isImage = false;
  projects = [
    {
      title: 'MovieMate - Movie Recommendation Web App',
      description: 'A movie manager that allows users to track their favorite movies and explore trending titles.',
      repoLink: 'https://github.com/johned2025/Movie-Mate',
      mediaPath: 'videos/movieMate.mp4',
      mediaType: 'video' as 'video'
    }
  ];

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
