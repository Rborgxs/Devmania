export interface AvatarAppearance {
  skinColor: string;
  faceType: string;
  expression: string;
  eyeColor: string;
  hairType: string;
  hairColor: string;
  beard: string;
  mustache: string;
  scars: string;
  facialAccessory: string;
}

export interface AppearanceOption {
  key: keyof AvatarAppearance;
  label: string;
  choices: string[];
}