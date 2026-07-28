import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ExperienceItem } from '../../site-content';
@Component({
  selector: 'app-experience-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './experience-card.component.html',
  styleUrl: './experience-card.component.scss',
})
export class ExperienceCardComponent {
  @Input({ required: true }) item!: ExperienceItem;
}
