import { AfterViewInit, Directive, ElementRef, Input, OnDestroy, inject } from '@angular/core';
import { ScrollspyService } from '../services/scrollspy.service';

@Directive({
  selector: '[appSectionSpy]',
  standalone: true
})
export class SectionSpyDirective implements AfterViewInit, OnDestroy {
  @Input('appSectionSpy') sectionId = '';

  private readonly elementRef = inject(ElementRef<HTMLElement>);
  private readonly scrollspy = inject(ScrollspyService);
  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible && this.sectionId) {
          this.scrollspy.setActiveSection(this.sectionId);
        }
      },
      {
        root: null,
        threshold: [0.2, 0.35, 0.5, 0.65],
        rootMargin: '-20% 0px -55% 0px'
      }
    );

    this.observer.observe(this.elementRef.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}

