import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landscape',
  standalone: true,
  imports: [RouterLink],
  host: { 'id': 'landscape' },
  templateUrl: './landscape.html',
  styleUrl: './landscape.css'
})
export class Landscape {}