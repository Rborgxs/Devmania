import { Injectable, signal } from '@angular/core';
import { CommunityPost } from '../models/community-post';

@Injectable({ providedIn: 'root' })
export class CommunitySolutionsService {
  posts = signal<CommunityPost[]>([
    {
      id: 'p1',
      author: 'Aldric_dev',
      avatar: '/assets/avatars/avatar1.png',
      date: '09/07/2026',
      likes: 24,
      likedByUser: false,
      language: 'JavaScript',
      linesOfCount: 4,
      performanceScore: 92,
      codePreview: 'function formatName(firstName, lastName) {\n  return `${capitalize(firstName)} ${capitalize(lastName)}`;\n}',
      fullCode: 'function capitalize(str) {\n  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();\n}\n\nfunction formatName(firstName, lastName) {\n  return `${capitalize(firstName)} ${capitalize(lastName)}`;\n}',
      comments: [
        {
          id: 'c1',
          author: 'Morwenna',
          avatar: '/assets/avatars/avatar2.png',
          text: 'Solução bem limpa, gostei da separação da função capitalize.',
          date: '09/07/2026',
          replies: []
        }
      ]
    },
    {
      id: 'p2',
      author: 'Gwyneth_codes',
      avatar: '/assets/avatars/avatar2.png',
      date: '08/07/2026',
      likes: 18,
      likedByUser: false,
      language: 'TypeScript',
      linesOfCount: 6,
      performanceScore: 85,
      codePreview: 'function formatName(firstName: string, lastName: string): string {\n  const cap = (s: string) => s[0].toUpperCase() + s.slice(1).toLowerCase();\n  return `${cap(firstName)} ${cap(lastName)}`;\n}',
      fullCode: 'function formatName(firstName: string, lastName: string): string {\n  const cap = (s: string) => s[0].toUpperCase() + s.slice(1).toLowerCase();\n  return `${cap(firstName)} ${cap(lastName)}`;\n}',
      comments: []
    }
  ]);

  toggleLike(postId: string): void {
    this.posts.update(posts =>
      posts.map(p => {
        if (p.id !== postId) {
          return p;
        }
        const likedByUser = !p.likedByUser;
        return { ...p, likedByUser, likes: p.likes + (likedByUser ? 1 : -1) };
      })
    );
  }

  addComment(postId: string, text: string): void {
    this.posts.update(posts =>
      posts.map(p => {
        if (p.id !== postId) {
          return p;
        }
        return {
          ...p,
          comments: [
            ...p.comments,
            {
              id: crypto.randomUUID(),
              author: 'Você',
              avatar: '/assets/avatars/default.png',
              text,
              date: new Date().toLocaleDateString('pt-BR'),
              replies: []
            }
          ]
        };
      })
    );
  }
}