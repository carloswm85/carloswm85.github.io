import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { EducationItem } from '../../site-content';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-education-card',
  standalone: true,
  imports: [NgIf, MatCardModule, MatIconModule],
  templateUrl: './education-card.component.html',
  styleUrl: './education-card.component.scss',
})
export class EducationCardComponent {
  @Input({ required: true }) item!: EducationItem;
}
