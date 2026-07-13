import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-accordion-section',
  standalone: true,
  imports: [],
  templateUrl: './accordion-section.html',
  styleUrl: './accordion-section.css'
})
export class AccordionSection {
  icon = input.required<string>();
  title = input.required<string>();
  startOpen = input(false);

  isOpen = signal(false);

  ngOnInit(): void {
    this.isOpen.set(this.startOpen());
  }

  toggle(): void {
    this.isOpen.update(v => !v);
  }
}