export type SubjectLevel = 'fundamentos' | 'intermediario' | 'avancado' | 'expert';

export interface Subject {
  id: string;
  name: string;
  icon: string;
  description: string;
  level: SubjectLevel;
}

export interface RecentTraining {
  subjectName: string;
  accuracyPercent: number;
}

export type TrainingDifficulty = 'facil' | 'medio' | 'dificil';

export interface TrainingCostConfig {
  xpPerQuestion: number;
  costPerQuestion: number;
}