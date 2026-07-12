import { Injectable, signal, computed } from '@angular/core';
import { JourneyModule, JourneyPosition } from '../models/hero-journey';

@Injectable({ providedIn: 'root' })
export class HeroJourneyService {
  currentModuleName = signal('Estruturas de Dados');
  currentModuleIndex = signal(0);

  modules = signal<JourneyModule[]>([
    { id: 'm1', type: 'module', name: 'Arrays I', icon: '/assets/icons/journey/arrays.png', progressPercent: 100, route: '/academia/modulo/m1' },
    { id: 'm2', type: 'module', name: 'Arrays II', icon: '/assets/icons/journey/arrays.png', progressPercent: 40, route: '/academia/modulo/m2' },
    { id: 'm3', type: 'module', name: 'Matrizes', icon: '/assets/icons/journey/matrix.png', progressPercent: 0, route: '/academia/modulo/m3' },
    { id: 'm4', type: 'module', name: 'Stack', icon: '/assets/icons/journey/stack.png', progressPercent: 0, route: '/academia/modulo/m4' },
    { id: 'm5', type: 'module', name: 'Queue', icon: '/assets/icons/journey/queue.png', progressPercent: 0, route: '/academia/modulo/m5' },
    { id: 'c1', type: 'chest', name: 'Baú de Recompensa', icon: '/assets/icons/chest/chest-closed.png' },
    { id: 'm6', type: 'module', name: 'Linked List', icon: '/assets/icons/journey/linked-list.png', progressPercent: 0, route: '/academia/modulo/m6' }
  ]);

  positionedNodes = computed<JourneyPosition[]>(() => {
    const nodes = this.modules();
    const currentIdx = this.currentModuleIndex();

    const xPattern = [140, 70, 0, 70, 140];
    const ySpacing = 110;

    return nodes.map((node, index) => {
      const moduleIndexAmongModules = nodes.slice(0, index + 1).filter(n => n.type === 'module').length - 1;

      let status: JourneyPosition['status'] = 'locked';
      if (node.type === 'module') {
        if (moduleIndexAmongModules < currentIdx) {
          status = 'completed';
        } else if (moduleIndexAmongModules === currentIdx) {
          status = 'current';
        } else {
          status = 'locked';
        }
      } else {
        status = moduleIndexAmongModules <= currentIdx ? 'completed' : 'locked';
      }

      return {
        ...node,
        status,
        x: xPattern[index % xPattern.length],
        y: index * ySpacing + 40
      };
    });
  });
}