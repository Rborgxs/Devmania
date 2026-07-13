import { Injectable, signal } from '@angular/core';
import { AvatarAppearance, AppearanceOption } from '../models/avatar';

const DEFAULT_APPEARANCE: AvatarAppearance = {
  skinColor: 'Clara',
  faceType: 'Redondo',
  expression: 'Neutra',
  eyeColor: 'Castanho',
  hairType: 'Curto',
  hairColor: 'Preto',
  beard: 'Nenhuma',
  mustache: 'Nenhum',
  scars: 'Nenhuma',
  facialAccessory: 'Nenhum'
};

@Injectable({ providedIn: 'root' })
export class AvatarService {
  currentSpriteUrl = signal('/assets/avatars/current-avatar.png');

  appearance = signal<AvatarAppearance>({ ...DEFAULT_APPEARANCE });

  appearanceOptions: AppearanceOption[] = [
    { key: 'skinColor', label: 'Cor da Pele', choices: ['Clara', 'Morena', 'Escura', 'Pálida'] },
    { key: 'faceType', label: 'Tipo de Rosto', choices: ['Redondo', 'Oval', 'Quadrado', 'Anguloso'] },
    { key: 'expression', label: 'Expressão Facial', choices: ['Neutra', 'Sorridente', 'Séria', 'Determinada'] },
    { key: 'eyeColor', label: 'Cor dos Olhos', choices: ['Castanho', 'Azul', 'Verde', 'Âmbar', 'Cinza'] },
    { key: 'hairType', label: 'Tipo de Cabelo', choices: ['Curto', 'Longo', 'Careca', 'Moicano', 'Trançado'] },
    { key: 'hairColor', label: 'Cor do Cabelo', choices: ['Preto', 'Castanho', 'Loiro', 'Ruivo', 'Grisalho', 'Branco'] },
    { key: 'beard', label: 'Barba', choices: ['Nenhuma', 'Curta', 'Longa', 'Cavanhaque'] },
    { key: 'mustache', label: 'Bigode', choices: ['Nenhum', 'Fino', 'Grosso', 'Enrolado'] },
    { key: 'scars', label: 'Cicatrizes', choices: ['Nenhuma', 'Olho', 'Bochecha', 'Testa'] },
    { key: 'facialAccessory', label: 'Acessórios Faciais', choices: ['Nenhum', 'Óculos', 'Tapa-olho', 'Pintura de Guerra'] }
  ];

  private draftAppearance: AvatarAppearance = { ...DEFAULT_APPEARANCE };

  updateOption(key: keyof AvatarAppearance, value: string): void {
    this.draftAppearance = { ...this.draftAppearance, [key]: value };
    this.appearance.set({ ...this.draftAppearance });
  }

  saveChanges(): void {
    console.log('aparência salva', this.appearance());
  }

  restoreDefault(): void {
    this.draftAppearance = { ...DEFAULT_APPEARANCE };
    this.appearance.set({ ...DEFAULT_APPEARANCE });
  }
}