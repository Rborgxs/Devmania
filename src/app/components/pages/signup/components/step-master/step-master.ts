import { Component, signal, inject } from '@angular/core';
import { SignupService } from '../../../../../services/signup';
import { Master } from '../../../../../models/master';

@Component({
  selector: 'app-step-master',
  standalone: true,
  templateUrl: './step-master.html',
  styleUrl: './step-master.css'
})
export class StepMaster {
  private readonly signupService = inject(SignupService);

  readonly activeIndex = signal(0);
  readonly slideDirection = signal<'left' | 'right'>('right');

  readonly masters: Master[] = [
    {
      id: 'caua',
      name: 'Cauã',
      title: 'Mestre a definir',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      imageUrl: 'assets/characters/caua_default.png',
      traits: [{ icon: '', label: 'Traço 1' }, { icon: '', label: 'Traço 2' }, { icon: '', label: 'Traço 3' }]
    },
    {
      id: 'gabi',
      name: 'Gabi',
      title: 'Mestre a definir',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      imageUrl: 'assets/characters/gabi_default.png',
      traits: [{ icon: '', label: 'Traço 1' }, { icon: '', label: 'Traço 2' }, { icon: '', label: 'Traço 3' }]
    },
    {
      id: 'kelly',
      name: 'Kelly',
      title: 'Mestre a definir',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      imageUrl: 'assets/characters/kelly_default.png',
      traits: [{ icon: '', label: 'Traço 1' }, { icon: '', label: 'Traço 2' }, { icon: '', label: 'Traço 3' }]
    },
    {
      id: 'luiz',
      name: 'Luiz',
      title: 'Mestre a definir',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      imageUrl: 'assets/characters/luiz_default.png',
      traits: [{ icon: '', label: 'Traço 1' }, { icon: '', label: 'Traço 2' }, { icon: '', label: 'Traço 3' }]
    },
    {
      id: 'marcelle',
      name: 'Marcelle',
      title: 'Mestre a definir',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      imageUrl: 'assets/characters/marcelle_default.png',
      traits: [{ icon: '', label: 'Traço 1' }, { icon: '', label: 'Traço 2' }, { icon: '', label: 'Traço 3' }]
    },
    {
      id: 'marcelo',
      name: 'Marcelo',
      title: 'Mestre a definir',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      imageUrl: 'assets/characters/marcelo_default.png',
      traits: [{ icon: '', label: 'Traço 1' }, { icon: '', label: 'Traço 2' }, { icon: '', label: 'Traço 3' }]
    },
    {
      id: 'ronald',
      name: 'Ronald',
      title: 'Mestre a definir',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      imageUrl: 'assets/characters/ronald_default.png',
      traits: [{ icon: '', label: 'Traço 1' }, { icon: '', label: 'Traço 2' }, { icon: '', label: 'Traço 3' }]
    },
    {
      id: 'tchan',
      name: 'Tchan',
      title: 'Mestre a definir',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      imageUrl: 'assets/characters/tchan_default.png',
      traits: [{ icon: '', label: 'Traço 1' }, { icon: '', label: 'Traço 2' }, { icon: '', label: 'Traço 3' }]
    }
  ];

  get currentMaster(): Master {
    return this.masters[this.activeIndex()];
  }

  previousMaster(): void {
    this.slideDirection.set('left');
    const prev = (this.activeIndex() - 1 + this.masters.length) % this.masters.length;
    this.activeIndex.set(prev);
  }

  nextMaster(): void {
    this.slideDirection.set('right');
    const next = (this.activeIndex() + 1) % this.masters.length;
    this.activeIndex.set(next);
  }

  chooseMaster(): void {
    this.signupService.updateData({ masterId: this.currentMaster.id });
    this.signupService.goToNextStep();
  }
}