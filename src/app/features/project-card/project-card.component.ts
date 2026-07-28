import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ProjectItem } from '../../site-content';
@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [NgFor, NgIf, MatButtonModule, MatCardModule, MatIconModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent {
  @Input({ required: true }) item!: ProjectItem;
}
