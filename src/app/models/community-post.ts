export interface Comment {
  id: string;
  author: string;
  avatar: string;
  text: string;
  date: string;
  replies: Comment[];
}

export interface CommunityPost {
  id: string;
  author: string;
  avatar: string;
  date: string;
  likes: number;
  likedByUser: boolean;
  language: string;
  linesOfCount: number;
  performanceScore: number;
  codePreview: string;
  fullCode: string;
  comments: Comment[];
}

export type SolutionFilter = 'curtidas' | 'recentes' | 'linhas' | 'desempenho';