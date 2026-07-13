import { Component, inject } from '@angular/core';
import { AvatarService } from '../../../../../../../services/avatar';
import { AvatarAppearance } from '../../../../../../../models/avatar';

@Component({
  selector: 'app-appearance-options',
  standalone: true,
  imports: [],
  host: { id: 'appearance-options' },
  templateUrl: './appearance-options.html',
  styleUrl: './appearance-options.css'
})
export class AppearanceOptions {
  avatarService = inject(AvatarService);

  onOptionChange(key: keyof AvatarAppearance, event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    this.avatarService.updateOption(key, value);
  }
}