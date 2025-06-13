import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
  // main.ts or a dark-mode.service.ts (run this before bootstrap)
const stored = localStorage.getItem('theme');
const useDark = stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches);
if (useDark) document.documentElement.classList.add('dark');

