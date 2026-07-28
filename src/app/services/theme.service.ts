import { Injectable, computed, signal } from '@angular/core';

const STORAGE_KEY = 'theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly themeSignal = signal<'dark' | 'light'>(
    (localStorage.getItem(STORAGE_KEY) as 'dark' | 'light' | null) ?? 'dark'
  );

  readonly theme = computed(() => this.themeSignal());
  readonly isDark = computed(() => this.themeSignal() === 'dark');

  constructor() {
    this.apply(this.themeSignal());
  }

  toggle(): void {
    this.setTheme(this.themeSignal() === 'dark' ? 'light' : 'dark');
  }

  setTheme(theme: 'dark' | 'light'): void {
    this.themeSignal.set(theme);
    this.apply(theme);
  }

  private apply(theme: 'dark' | 'light'): void {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }
}
