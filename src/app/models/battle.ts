export type Difficulty = 'facil' | 'medio' | 'dificil';

export interface TestCase {
  id: string;
  input: string;
  expectedOutput: string;
  actualOutput?: string;
  passed?: boolean;
}

export interface GitInstructions {
  hasExistingRepo: boolean;
  commands: string[];
}

export interface Challenge {
  id: string;
  title: string;
  difficulty: Difficulty;
  description: string;
  rules: string[];
  restrictions: string[];
  examples: { input: string; output: string; explanation?: string }[];
  gitInstructions: GitInstructions;
  publicTests: TestCase[];
  functionSignature: string;
}

export interface ExecutionLogEntry {
  id: string;
  time: string;
  label: string;
  passed: boolean;
  message?: string;
  durationMs: number;
}

export interface FileNode {
  id: string;
  name: string;
  type: 'file' | 'folder';
  children?: FileNode[];
}

export interface KnownBug {
  id: string;
  description: string;
  resolved: boolean;
}