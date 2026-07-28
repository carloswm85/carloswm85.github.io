import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { socialLinks } from '../../site-content';
@Component({
  selector: 'app-social-links',
  standalone: true,
  imports: [NgFor, MatButtonModule, MatIconModule, MatTooltipModule],
  templateUrl: './social-links.component.html',
  styleUrl: './social-links.component.scss',
})
export class SocialLinksComponent {
  @Input() bordered = false;
  readonly links = socialLinks;
}
