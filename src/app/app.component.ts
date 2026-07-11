import { Component, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { navItems, socialLinks } from './site-content';
import { ThemeService } from './services/theme.service';
import { ScrollspyService } from './services/scrollspy.service';
import { SectionSpyDirective } from './directives/section-spy.directive';
import { AboutComponent } from './components/about.component';
import { SectionShellComponent } from './components/section-shell.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor, SectionSpyDirective, AboutComponent, SectionShellComponent],
  template: `
    <nav class="sidebar" id="sideNav">
      <a class="brand" href="#about" aria-label="Go to top">
        <span class="brand-mobile">ASP.NET Core Developer</span>
        <img class="brand-image" src="/assets/img/profile_bg-blue.png" alt="Carlos W. Mercado profile photo">
      </a>

      <button class="toggler" type="button" (click)="toggleTheme()" [title]="themeService.isDark() ? 'Switch to light mode' : 'Switch to dark mode'">
        <span class="material-symbols-rounded">{{ themeService.isDark() ? 'dark_mode' : 'light_mode' }}</span>
      </button>

      <ul class="nav-list">
        <li *ngFor="let item of navItems">
          <a class="nav-link" [class.active]="activeSection() === item.id" [href]="'#' + item.id">
            <span class="material-symbols-rounded">{{ item.icon }}</span>
            <span>{{ item.label }}</span>
          </a>
        </li>
        <li class="copyright">
          <span class="material-symbols-rounded">copyright</span>
          <span>2026</span>
        </li>
      </ul>
    </nav>

    <main class="page">
      <app-about appSectionSpy="about"></app-about>
      <hr class="custom-hr-section">

      <app-section-shell id="experience" appSectionSpy="experience">
        <h2 class="mb-5">Experience</h2>
        <div class="card pt-2 px-4 mb-4 mt-4 d-flex flex-column flex-md-row justify-content-between mb-5">
          <div class="flex-grow-1">
            <h3 class="mb-0">Web Developer: ASP.NET Core technologies (Backend, Frontend), Flutter Android (Mobile)</h3>
            <div class="subheading mb-3">Dirección Provincial de Minería, Software Development Department, Neuquén Province Government, Argentina</div>
            <p><strong>Role:</strong> Full-Stack Developer, MVC web app with Clean Architecture. Database design (SQL Server and Oracle DB). Docker. With Flutter Android full implementation.</p>
          </div>
          <div class="flex-shrink-0">
            <span class="text-primary">June 2021 - Present</span>
          </div>
        </div>
      </app-section-shell>
      <hr class="custom-hr-section">

      <app-section-shell id="education" appSectionSpy="education">
        <h2 class="mb-5">Education</h2>
        <h3 class="mb-2">Brigham Young University, Idaho, USA</h3>
        <div class="card pt-2 px-4 mb-4 mt-4 d-flex flex-column flex-md-row justify-content-between mb-2 pt-1 border-top">
          <div class="flex-grow-1">
            <div class="subheading mb-0">Bachelor of Science in Software Development</div>
            <div>Department of Computer Information Technology</div>
            <p>GPA: 3.910 · Career credits: 121/120</p>
          </div>
          <div class="flex-shrink-0"><span class="text-primary">January 2020 - April 2026</span></div>
        </div>
        <div class="card pt-2 px-4 mb-4 mt-4 d-flex flex-column flex-md-row justify-content-between pt-1 border-top">
          <div class="flex-grow-1">
            <h3 class="mb-0">Cambridge Language English Assessment, University of Cambridge (UK)</h3>
            <div class="subheading mb-0">FCE, First Certificate in English</div>
            <p>Level B2, Score: 175</p>
          </div>
          <div class="flex-shrink-0"><span class="text-primary">November 2017</span></div>
        </div>
        <div class="card pt-2 px-4 mb-4 mt-4 d-flex flex-column flex-md-row justify-content-between pt-1 border-top">
          <div class="flex-grow-1">
            <h3 class="mb-0">Universidad Nacional del Comahue, Argentina</h3>
            <div class="subheading mb-0">Mining Technician (Técnico en plantas y análisis de menas)</div>
            <div>Faculty of Engineering</div>
            <p>GPA: 3.00 (7.0 points in local grading scale)</p>
          </div>
          <div class="flex-shrink-0"><span class="text-primary">January 2011 - October 2016</span></div>
        </div>
      </app-section-shell>
      <hr class="custom-hr-section">

      <app-section-shell id="skills" appSectionSpy="skills">
        <h2 class="mb-0">Skills</h2>
        <div class="subheading mb-1">Programming/Markup/Query/Scripting Languages</div>
        <div class="icon-grid">
          <span title="HTML 5">html</span>
          <span title="CSS 3">css</span>
          <span title="Javascript">javascript</span>
          <span title="C#">csharp</span>
          <span title="SQL Server, Oracle DB, and databases">database</span>
          <span title="Python">python</span>
          <span title="Java">java</span>
          <span title="PHP">php</span>
          <span title="Markdown">markdown</span>
        </div>

        <div class="subheading mb-1">Frameworks, Platforms and Libraries</div>
        <p class="mb-2">Experience building full-stack applications using Microsoft technologies, modern frontend frameworks, and cross-platform mobile tools.</p>
        <div class="icon-grid">
          <span title="ASP.NET Framework">web</span>
          <span title="jQuery">extension</span>
          <span title="Bootstrap">grid_3x3</span>
        </div>

        <div class="subheading mb-1">Miscellaneous Tools</div>
        <div class="icon-grid">
          <span title="Visual Studio 2019 and Visual Studio Code">terminal</span>
          <span title="SQL Server Management Studio">storage</span>
          <span title="Figma, for web design.">palette</span>
          <span title="Git, GitHub and GitLab.">folder_code</span>
          <span title="Sass">dataset</span>
          <span title="Discord">forum</span>
          <span title="Slack">chat</span>
          <span title="Stack Overflow">question_answer</span>
          <span title="Node">nodejs</span>
          <span title="Android Studio">android</span>
        </div>

        <div class="subheading mb-1">Development Practices</div>
        <ul class="fa-ul mb-4">
          <li>Clean Architecture and layered application design</li>
          <li>Web API development with ASP.NET Core Technologies</li>
          <li>Database modeling, SQL development, and Entity Framework Core</li>
          <li>Responsive and mobile-first web design</li>
          <li>Git-based workflows, Agile development, and SDLC practices</li>
          <li>Automation and scripting using PowerShell and Bash</li>
        </ul>

        <div class="subheading mb-1">Professional Skills</div>
        <ul class="fa-ul mb-1">
          <li>Problem-solving and analytical thinking</li>
          <li>Strong attention to code quality and maintainability</li>
          <li>Adaptability to new technologies and environments</li>
          <li>Team collaboration and communication</li>
          <li>Continuous learning and knowledge sharing</li>
        </ul>
      </app-section-shell>
      <hr class="custom-hr-section">

      <app-section-shell id="projects" appSectionSpy="projects">
        <h2 class="mb-5">Personal Projects</h2>
        <p>Here are some of the projects I've worked on.</p>
        <div class="card pt-2 px-4 mb-4 mt-4">
          <h3>Open Source</h3>
          <ul>
            <li>
              <strong>DotNet Template:</strong> A customizable template for ASP.NET projects, following best practices and clean architecture principles. It includes a basic structure for web applications, APIs, and libraries, with pre-configured settings for testing, logging, and deployment. Repository:
              <a href="https://github.com/carloswm85/dotnet-template-kit" target="_blank" rel="noopener noreferrer">https://github.com/carloswm85/dotnet-template-kit</a>
            </li>
          </ul>
        </div>

        <div class="card pt-2 px-4 mb-4 mt-4">
          <h3>My Links</h3>
          <ul>
            <li><a href="https://carloswm85.github.io/" target="_blank" rel="noopener noreferrer">Personal site, hosted at GitHub Pages</a></li>
            <li><a href="https://carloswm85.github.io/dotnet-links/" target="_blank" rel="noopener noreferrer">C# and .NET References</a></li>
            <li><a href="https://carloswm85.github.io/bitcoin-at/" target="_blank" rel="noopener noreferrer">Bitcoin Análisis Técnico (SPA)</a></li>
          </ul>
        </div>
      </app-section-shell>
      <hr class="custom-hr-section">

      <app-section-shell id="interests" appSectionSpy="interests">
        <h2 class="mb-5">Interests</h2>
        <div class="card pt-2 px-4 mb-4 mt-4">
          <ul>
            <li>Apart from being a .NET Developer, I enjoy most of my time with family and friends. I like to watch videos about new technology trends and especially those related to the .NET Ecosystem. I'm an avid reader/video consumer of history, science, politics, economics and other related topics.</li>
            <li>Knowledgeable about Financial Markets/Technical Analysis, Cryptocurrencies, Mining Industry/Geology and related fields and sciences.</li>
          </ul>
        </div>
      </app-section-shell>
      <hr class="custom-hr-section">

      <app-section-shell id="coming" appSectionSpy="coming">
        <h2 class="mb-3">Coming Soon</h2>
        <div class="subheading mb-1">Personal Projects Section (current state)</div>
        <ul class="fa-ul mb-4">
          <li>Personal blog (subsite).</li>
          <li>Section for personal projects (subsite).</li>
        </ul>
      </app-section-shell>
      <hr class="custom-hr-section">

      <section id="bottom">
        <p class="mt-2 text-center">Updated: <span id="updated">_date_time</span></p>
      </section>
    </main>
  `,
  styles: [`
    :host {
      display: block;
      min-height: 100vh;
    }

    .sidebar {
      position: fixed;
      top: 0;
      left: 0;
      width: 17rem;
      height: 100vh;
      display: flex;
      flex-direction: column;
      padding: 1rem;
      background: var(--accent-2);
      color: white;
      box-sizing: border-box;
      z-index: 10;
    }

    .brand {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1rem;
      text-decoration: none;
      color: inherit;
    }

    .brand-mobile { display: none; }
    .brand-image {
      max-width: 10rem;
      max-height: 10rem;
      border-radius: 50%;
      border: 0.5rem solid rgba(255, 255, 255, 0.2);
    }

    .toggler {
      align-self: center;
      margin: 0.25rem 0 1rem;
      border: 0;
      background: transparent;
      color: white;
    }

    .nav-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .nav-link {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.55rem 0;
      color: rgba(255, 255, 255, 0.88);
      text-decoration: none;
      font-family: 'Saira Extra Condensed', sans-serif;
      font-weight: 800;
      letter-spacing: 0.05rem;
      text-transform: uppercase;
    }

    .nav-link.active {
      color: white;
    }

    .copyright {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-top: 0.75rem;
      opacity: 0.8;
      font-family: 'Saira Extra Condensed', sans-serif;
      text-transform: uppercase;
    }

    .page {
      margin-left: 17rem;
      padding: 1rem 0 2rem;
    }

    .text-primary { color: var(--accent) !important; }
    .custom-hr-section { border: 0; border-top: 1px solid var(--border); opacity: 1; margin: 0; }
    .card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 1rem;
      box-shadow: var(--shadow);
      color: var(--text);
    }
    .subheading {
      font-family: 'Saira Extra Condensed', sans-serif;
      text-transform: uppercase;
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--accent);
    }
    h2, h3 {
      text-transform: uppercase;
      font-family: 'Saira Extra Condensed', sans-serif;
    }
    h2 { font-size: 2rem; }
    h3 { font-size: 1.75rem; }
    .icon-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      gap: 0.5rem;
      margin-bottom: 1rem;
    }
    .icon-grid span {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 3rem;
      padding: 0.5rem 0.75rem;
      border-radius: 0.85rem;
      background: var(--surface);
      border: 1px solid var(--border);
      box-shadow: var(--shadow);
      text-transform: lowercase;
    }
    .material-symbols-rounded { font-size: 1.25rem; }

    @media (max-width: 991.98px) {
      .sidebar {
        width: 100%;
        height: auto;
        position: sticky;
        top: 0;
      }

      .brand { justify-content: flex-start; gap: 1rem; }
      .brand-mobile { display: inline; font-family: 'Saira Extra Condensed', sans-serif; font-size: 1rem; text-transform: uppercase; }
      .brand-image { width: 3.5rem; height: 3.5rem; object-fit: cover; }
      .nav-list { display: flex; flex-wrap: wrap; gap: 0.5rem 1rem; align-items: center; }
      .nav-link { padding: 0.25rem 0; }
      .copyright { margin-top: 0; }
      .page { margin-left: 0; }
    }
  `]
})
export class AppComponent {
  private readonly scrollspy = inject(ScrollspyService);
  public readonly themeService = inject(ThemeService);
  readonly navItems = navItems;
  readonly socialLinks = socialLinks;
  readonly activeSection = this.scrollspy.activeSection;

  toggleTheme(): void {
    this.themeService.toggle();
  }
}
