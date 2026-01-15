import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-technologies',
  imports: [CommonModule],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.css'
})
export class TechnologiesComponent {
   technologies = [
    { name: 'Angular', icon: 'devicon-angularjs-plain colored' },
    { name: 'React', icon: 'devicon-react-original colored' },
    { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
    { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
    { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
    { name: 'PHP', icon: 'devicon-php-plain colored' },
    { name: 'SQL', icon: 'devicon-mysql-original colored' },
    { name: 'WordPress', icon: 'devicon-wordpress-plain colored' },
    { name: 'Linux', icon: 'devicon-linux-plain colored' },
    { name: 'Git', icon: 'devicon-git-plain colored' },
    { name: 'GitHub', icon: 'devicon-github-plain colored' },
    { name: 'Java', icon: 'devicon-java-plain colored' },
    { name: 'FastAPI', icon: 'devicon-fastapi-plain colored' },
    { name: 'n8n', icon: '/icons/n8n.svg', svg: true }
  ];

}
