import { Component, inject } from '@angular/core';
import { AcademiaService } from '../../../../../../services/academia';

@Component({
  selector: 'app-search-filters',
  standalone: true,
  imports: [],
  host: { id: 'search-filters' },
  templateUrl: './search-filters.html',
  styleUrl: './search-filters.css'
})
export class SearchFilters {
  academiaService = inject(AcademiaService);

  onSearchInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.academiaService.searchTerm.set(value);
  }
}