import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  host: { id: 'header' },
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  coins = signal(0);
  streak = signal(0);
}