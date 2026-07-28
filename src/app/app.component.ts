import { Component, inject, signal } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BreakpointObserver } from '@angular/cdk/layout';
import { experienceItems, educationItems, projectItems, skillGroups } from './site-content';
import { ScrollspyService } from './services/scrollspy.service';
import { SectionSpyDirective } from './directives/section-spy.directive';
import { AboutComponent } from './features/about/about.component';
import { SectionShellComponent } from './features/section-shell/section-shell.component';
import { SidebarComponent } from './features/sidebar/sidebar.component';
import { ThemeToggleComponent } from './features/theme-toggle/theme-toggle.component';
import { SocialLinksComponent } from './features/social-links/social-links.component';
import { ExperienceCardComponent } from './features/experience-card/experience-card.component';
import { EducationCardComponent } from './features/education-card/education-card.component';
import { ProjectCardComponent } from './features/project-card/project-card.component';
import { SkillGroupComponent } from './features/skill-group/skill-group.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    NgFor,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    SectionSpyDirective,
    AboutComponent,
    SectionShellComponent,
    SidebarComponent,
    ThemeToggleComponent,
    SocialLinksComponent,
    ExperienceCardComponent,
    EducationCardComponent,
    ProjectCardComponent,
    SkillGroupComponent,
  ]
  
})
export class AppComponent {
  private readonly scrollspy = inject(ScrollspyService);
  private readonly breakpointObserver = inject(BreakpointObserver);
  readonly isSidebarOpen = signal(false);
  readonly experienceItems = experienceItems;
  readonly educationItems = educationItems;
  readonly projectItems = projectItems;
  readonly skillGroups = skillGroups;
  readonly activeSection = this.scrollspy.activeSection;

  toggleSidebar(): void {
    this.isSidebarOpen.update((isOpen) => !isOpen);
  }

  closeSidebar(): void {
    this.isSidebarOpen.set(false);
  }

  onNavigationSelect(): void {
    if (this.breakpointObserver.isMatched('(max-width: 767px)')) {
      this.closeSidebar();
    }
  }
}
