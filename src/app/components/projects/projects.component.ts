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
      mediaType: 'video' as 'video',
      stack:'JavaScript, HTML, CSS, PHP, MySQL',
      siteLink:''
    },
    {
      title: 'MovieMate - Movie Recommendation Web App',
      description: 'A movie manager that allows users to track their favorite movies and explore trending titles.',
      repoLink: 'https://github.com/johned2025/Movie-Mate',
      mediaPath: 'videos/movieMate.mp4',
      mediaType: 'video' as 'video',
      stack:'JavaScript, HTML, CSS, Java(JSP + Servlets), MySQL',
      siteLink:''
    },
    {
      title: 'IEEE Student Branch Website (WordPress)',
      description: 'Co-developed and maintained a public-facing website for a student group using WordPress, managing content, layout, and plugin integration.',
      siteLink: 'https://studentbranches.ieee.org/ca-oc/',
      repoLink: 'https://github.com/johned2025/Movie-Mate',
      mediaPath: 'images/IEEEpj.JPG',
      mediaType: 'image' as 'image',
      stack: 'WordPress, CSS'
    },
    {
      title: 'Angular Fitness Tracker App',
      description: 'A personal health and fitness tracking application built with Angular, featuring goal setting, workout logs, and activity history (details coming soon).',
      repoLink: 'https://github.com/johned2025/FitnessApp',
      mediaPath: 'videos/fitnessApp.webm',
      mediaType: 'video' as 'video',
      stack: 'Angular, TypeScript, HTML, CSS'
    },
    {
      title: 'StarterWebs – My freelance services landing page',
      description: 'Built with React, designed for scalability, and intended as a foundation for small business web solutions. project in progress.',
      repoLink: '',
      mediaPath: 'imagess/starterwebs.JPG',
      mediaType: 'image' as 'image',
      stack:'React, tailwindCSS' ,
      siteLink:'https://starterwebs.dev'
    },
    {
      title: 'Reseau – Customer Conversation Platform',
      description: 'Development-phase customer communication feature for a car dealership app, involving Twilio conversations API,FastAPI backend services, JWT authentication, webhook integration, and frontend–backend wiring.',
      repoLink: 'https://github.com/varunteja369963/reseau-demo',
      mediaPath: 'images/reseau.JPG',
      mediaType: 'image' as 'image',
      stack:'FastAPI, JWT, Webhooks, Kubernetes, Frontend–Backend Integration' ,
      siteLink:''
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
