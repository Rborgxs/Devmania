export type ExerciseStatus = 'pendente' | 'concluido';
export type ExerciseDifficulty = 'facil' | 'medio' | 'dificil';

export interface StudyMaterial {
  type: 'documentacao' | 'artigo' | 'video';
  label: string;
  url: string;
}

export interface Exercise {
  id: string;
  title: string;
  difficulty: ExerciseDifficulty;
  coinReward: number;
  status: ExerciseStatus;
}

export interface Lesson {
  id: string;
  moduleId: string;
  title: string;
  explanation: string;
  examples: { input: string; output: string }[];
  materials: StudyMaterial[];
  exercises: Exercise[];
}

export interface ModuleInfo {
  id: string;
  name: string;
  description: string;
  lessons: { id: string; title: string; completed: boolean }[];
}