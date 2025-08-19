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
      title: 'Budget Tracker',
      description: 'A secure, customizable web app to help users manage expenses, visualize spending trends, and gain financial insight.',
      repoLink: 'https://github.com/johned2025/BudgetTracker',
      mediaPath: 'videos/budgetTracker.mp4',
      mediaType: 'video' as 'video'
    },
    {
      title: 'MovieMate - Movie Recommendation Web App',
      description: 'A movie manager that allows users to track their favorite movies and explore trending titles.',
      repoLink: 'https://github.com/johned2025/Movie-Mate',
      mediaPath: 'videos/movieMate.mp4',
      mediaType: 'video' as 'video'
    },
    {
      title: 'IEEE Student Branch Website (WordPress)',
      description: 'Co-developed and maintained a public-facing website for a student group using WordPress, managing content, layout, and plugin integration.',
      repoLink: 'https://studentbranches.ieee.org/ca-oc/',
      mediaPath: 'images/IEEEpj.JPG',
      mediaType: 'image' as 'image'
    },
    {
      title: 'Angular Fitness Tracker App',
      description: 'A personal health and fitness tracking application built with Angular, featuring goal setting, workout logs, and activity history (details coming soon).',
      repoLink: 'https://github.com/johned2025/FitnessApp',
      mediaPath: 'videos/fitnessApp.webm',
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
