import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { SectionShellComponent } from '../section-shell/section-shell.component';
import { SocialLinksComponent } from '../social-links/social-links.component';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    SectionShellComponent,
    SocialLinksComponent,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {}
