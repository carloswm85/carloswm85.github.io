import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-shell',
  standalone: true,
  template: `
    <section class="resume-section" [id]="id">
      <div class="resume-section-content">
        <ng-content></ng-content>
      </div>
    </section>
  `,
  styles: [`
    .resume-section {
      display: flex;
      align-items: center;
      max-width: 75rem;
      padding: 5rem 1rem;
      margin: 0 auto;
    }

    .resume-section-content {
      width: 100%;
    }

    @media (min-width: 992px) {
      .resume-section {
        padding: 5rem 3rem;
      }
    }
  `]
})
export class SectionShellComponent {
  @Input({ required: true }) id = '';
}

