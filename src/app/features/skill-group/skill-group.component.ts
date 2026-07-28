import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { SkillGroup } from '../../site-content';
@Component({
  selector: 'app-skill-group',
  standalone: true,
  imports: [NgFor],
  templateUrl: './skill-group.component.html',
  styleUrl: './skill-group.component.scss',
})
export class SkillGroupComponent {
  @Input({ required: true }) group!: SkillGroup;
}
