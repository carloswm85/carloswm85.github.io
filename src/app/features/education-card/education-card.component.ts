import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { EducationItem } from '../../site-content';
@Component({
  selector: 'app-education-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './education-card.component.html',
  styleUrl: './education-card.component.scss',
})
export class EducationCardComponent {
  @Input({ required: true }) item!: EducationItem;
}
