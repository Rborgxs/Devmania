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
      title: 'Ninja',
      description: 'Um jovem hábil e veloz em eliminar bugs e frio em suas execuções.',
      imageUrl: 'assets/characters/caua_default.png',
      traits: [{ icon: '', label: 'Calmo' }, { icon: '', label: 'Direto' }, { icon: '', label: 'Detalhista' }]
    },
    {
      id: 'gabi',
      name: 'Gabi',
      title: 'Mago',
      description: 'Possui um vasto conhecimento em codificação e costuma frequentar lugares públicos para falar sobre imersões',
      imageUrl: 'assets/characters/gabi_default.png',
      traits: [{ icon: '', label: 'Prestativo' }, { icon: '', label: 'Apoiador' }, { icon: '', label: 'Simpático' }]
    },
    {
      id: 'kelly',
      name: 'Kelly',
      title: 'Valquíria',
      description: 'Não se engane. O que ela tem de tamanho, ela tem de poder. Não a irrite!',
      imageUrl: 'assets/characters/kelly_default.png',
      traits: [{ icon: '', label: 'Otimista' }, { icon: '', label: 'Divertida' }, { icon: '', label: 'Ombro-amigo' }]
    },
    {
      id: 'luiz',
      name: 'Luiz',
      title: 'Monge',
      description: 'Mente fria, coração quente... Esse cara sabe como encarar erros de código sem dar um chute no PC',
      imageUrl: 'assets/characters/luiz_default.png',
      traits: [{ icon: '', label: 'Calmo' }, { icon: '', label: 'Investigativo' }, { icon: '', label: 'Criativo' }]
    },
    {
      id: 'marcelle',
      name: 'Marcelle',
      title: 'Arqueira',
      description: 'Tão dócil! Tem uma ótima precisão nos códigos e um bom papo caso queria conversar do seu projeto.',
      imageUrl: 'assets/characters/marcelle_default.png',
      traits: [{ icon: '', label: 'Ombro-amigo' }, { icon: '', label: 'Otimista' }, { icon: '', label: 'Empolgada' }]
    },
    {
      id: 'marcelo',
      name: 'Marcelo',
      title: 'Elfo Mágico',
      description: 'Um grande mestre que já guiou vários grandes aventureiros em suas jornadas. Pode ser a sua vez!',
      imageUrl: 'assets/characters/marcelo_default.png',
      traits: [{ icon: '', label: 'Sério' }, { icon: '', label: 'Prestativo' }, { icon: '', label: 'Investigativo' }]
    },
    {
      id: 'ronald',
      name: 'Ronald',
      title: 'Cavaleiro Real',
      description: '"A seu serviço!", com certeza será um companheiro leal em sua jornada.',
      imageUrl: 'assets/characters/ronald_default.png',
      traits: [{ icon: '', label: 'Divertido' }, { icon: '', label: 'Simpático' }, { icon: '', label: 'Otimista' }]
    },
    {
      id: 'tchan',
      name: 'Tchan',
      title: 'Bárbaro',
      description: 'Durante muitos anos viajou por vastas terras, possuiu muitos reinos, travou muitas batalhas e adquiriu o nome "Tchan" como nome de guerra',
      imageUrl: 'assets/characters/tchan_default.png',
      traits: [{ icon: '', label: 'Divertido' }, { icon: '', label: 'Apoiador' }, { icon: '', label: 'Empolgado' }]
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