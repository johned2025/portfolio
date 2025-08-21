import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TechnologiesComponent } from "./components/technologies/technologies.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { FooterComponent } from "./components/footer/footer.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { ScrollToTopComponent } from "./components/scroll-to-top/scroll-to-top.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TechnologiesComponent, ProjectsComponent, ProfileComponent, FooterComponent, NavbarComponent, ScrollToTopComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-portfolio';
}
