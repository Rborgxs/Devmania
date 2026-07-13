import { Component, inject } from '@angular/core';
import { AvatarService } from '../../../../../../../services/avatar';

@Component({
  selector: 'app-avatar-preview',
  standalone: true,
  imports: [],
  host: { id: 'avatar-preview' },
  templateUrl: './avatar-preview.html',
  styleUrl: './avatar-preview.css'
})
export class AvatarPreview {
  avatarService = inject(AvatarService);
}