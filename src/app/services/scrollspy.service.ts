import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScrollspyService {
  readonly activeSection = signal('about');

  setActiveSection(sectionId: string): void {
    this.activeSection.set(sectionId);
  }
}
