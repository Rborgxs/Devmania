import { Component } from '@angular/core';
import { AvatarPreview } from './avatar-preview/avatar-preview';
import { AppearanceOptions } from './appearance-options/appearance-options';

@Component({
  selector: 'app-avatar-editor',
  standalone: true,
  imports: [AvatarPreview, AppearanceOptions],
  host: { id: 'avatar-editor' },
  templateUrl: './avatar-editor.html',
  styleUrl: './avatar-editor.css'
})
export class AvatarEditor {}