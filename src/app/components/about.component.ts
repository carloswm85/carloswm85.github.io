import { Component } from '@angular/core';
import { SectionShellComponent } from './section-shell.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SectionShellComponent],
  template: `
    <app-section-shell id="about">
      <h1 class="mb-0">
        Carlos W.
        <span class="text-primary">Mercado</span>
      </h1>
      <div class="subheading mb-3">
        <a href="https://www.google.com/search?q=zapala+neuquen+argentina" target="_blank" rel="noopener noreferrer" class="text-primary">Zapala - Neuquén - Argentina</a>
        <span class="separator">•</span>
        <a href="https://api.whatsapp.com/send/?phone=5492942415110" target="_blank" rel="noopener noreferrer" class="text-primary">(+54) 9 2942 64-415110</a>
        <span class="separator">•</span>
        <a href="mailto:carlos.washington.mercado@gmail.com" target="_blank" rel="noopener noreferrer" class="text-primary">carlos.washington.mercado@gmail.com</a>
      </div>

      <div class="lead mb-5">
        <div class="card pt-2 px-4 mb-4 mt-4">
          <h3>Summary</h3>
          <p>
            Full-Stack .NET Developer with experience building web applications, REST APIs, database-driven systems, and responsive user interfaces. Focused on Clean Architecture, maintainable code, and practical software solutions using modern Microsoft technologies (DevOps and cloud). Also knowledgeable in frontend development, cross-platform mobile apps, and various development tools and practices. Including Angular, NodeJS and Flutter.
          </p>
        </div>

        <div class="card pt-2 px-4 mb-2 mt-4">
          <h3>Profile</h3>
          <ul class="mb-3">
            <li>ASP.NET Framework 4.7.2 and ASP.NET Core 6-10</li>
            <li>ASP.NET MVC, Web API, Razor Pages, and Angular</li>
            <li>SQL Server, Entity Framework Core, and database design</li>
            <li>Frontend development with Bootstrap, JavaScript, and responsive UI</li>
            <li>Flutter Android applications</li>
            <li>Clean Architecture, SDLC, Git, Linux, and scripting workflows. Docker.</li>
            <li>DevOps practices, CI/CD pipelines (GitLab, GitHub Actions), and cloud deployment (Azure, AWS)</li>
          </ul>
        </div>
      </div>

      <div class="social-icons d-flex justify-content-center">
        <a class="social-icon" href="https://www.linkedin.com/in/carlos-washington-mercado/" target="_blank" rel="noopener noreferrer" title="My LinkedIn profile"><span class="material-symbols-rounded">linked_in</span></a>
        <a class="social-icon" href="https://github.com/carloswm85" target="_blank" rel="noopener noreferrer" title="My GitHub profile and repositories"><span class="material-symbols-rounded">code</span></a>
        <a class="social-icon" href="https://stackoverflow.com/users/7389293/carloswm85" target="_blank" rel="noopener noreferrer" title="My StackOverflow profile"><span class="material-symbols-rounded">forum</span></a>
        <a class="social-icon" href="/documents/resumes/resume-v3/carlos_mercado-ENG_v3_hf.pdf" target="_blank" title="My resume in English"><span class="material-symbols-rounded">picture_as_pdf</span></a>
        <a class="social-icon" href="/documents/resumes/resume-v3/carlos_mercado-SPA_v3_ats.pdf" target="_blank" title="My résumé in Spanish (ESPAÑOL)"><span class="material-symbols-rounded">picture_as_pdf</span></a>
        <a class="social-icon" href="mailto:carloswashingtonmercado@gmail.com" target="_blank" title="My personal email"><span class="material-symbols-rounded">mail</span></a>
        <a class="social-icon" href="https://api.whatsapp.com/send/?phone=5492942415110" target="_blank" rel="noopener noreferrer" title="My WhatsApp number"><span class="material-symbols-rounded">brand</span></a>
      </div>
    </app-section-shell>
  `,
  styles: [`
    :host { display: block; }
    .mb-0, .mb-2, .mb-3, .mb-4, .mb-5, p, ul { margin-bottom: 1rem; }
    .text-primary { color: var(--accent) !important; }
    h1, h2, h3 { text-transform: uppercase; font-family: 'Saira Extra Condensed', sans-serif; letter-spacing: 0.02em; }
    h1 { font-size: clamp(2.5rem, 6vw, 5rem); line-height: 1; }
    h3 { font-size: 1.75rem; }
    .subheading { font-family: 'Saira Extra Condensed', sans-serif; text-transform: uppercase; font-size: clamp(1rem, 2vw, 1.5rem); font-weight: 700; }
    .separator { padding: 0 0.5rem; }
    .lead { font-size: 1.15rem; font-weight: 400; }
    .card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 1rem;
      box-shadow: var(--shadow);
      color: var(--text);
    }
    .social-icons { display: flex; flex-wrap: wrap; gap: 0.75rem; }
    .social-icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 3.5rem;
      height: 3.5rem;
      border-radius: 999px;
      background: #495057;
      color: #fff;
      text-decoration: none;
    }
    .social-icon:hover { background: var(--accent-2); }
    .material-symbols-rounded { font-size: 1.6rem; }
    @media (max-width: 575.98px) {
      .separator { display: block; padding: 0.2rem 0; }
      .social-icon { width: 2.75rem; height: 2.75rem; }
      .material-symbols-rounded { font-size: 1.25rem; }
    }
  `]
})
export class AboutComponent {}
