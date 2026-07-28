import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule, MatNavList } from '@angular/material/list';
import { navItems } from '../../site-content';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgFor, MatDividerModule, MatIconModule, MatListModule, MatNavList],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  host: {
    '(click)': 'onSidebarClick($event)',
  },
})
export class SidebarComponent {
  @Input({ required: true }) activeSection = '';
  @Output() readonly navigationSelect = new EventEmitter<void>();
  @Output() readonly sidebarDismiss = new EventEmitter<void>();
  readonly navItems = navItems;

  onNavigationClick(event: MouseEvent): void {
    event.stopPropagation();
    this.navigationSelect.emit();
  }

  onSidebarClick(event: MouseEvent): void {
    const target = event.target as HTMLElement | null;

    if (target?.closest('nav a')) {
      return;
    }

    this.sidebarDismiss.emit();
  }
}
