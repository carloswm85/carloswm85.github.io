import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-section-shell',
  standalone: true,
  templateUrl: './section-shell.component.html',
  styleUrl: './section-shell.component.scss',
})
export class SectionShellComponent {
  @Input({ required: true }) id = '';
}
