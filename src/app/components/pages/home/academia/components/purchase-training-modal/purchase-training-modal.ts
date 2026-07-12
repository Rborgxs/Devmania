import { Component, input, output, signal, computed, inject } from '@angular/core';
import { Subject, TrainingDifficulty, TrainingCostConfig } from '../../../../../../models/subject';
import { WalletService } from '../../../../../../services/wallet';

const DIFFICULTY_CONFIG: Record<TrainingDifficulty, TrainingCostConfig> = {
  facil: { xpPerQuestion: 10, costPerQuestion: 12 },
  medio: { xpPerQuestion: 20, costPerQuestion: 20 },
  dificil: { xpPerQuestion: 40, costPerQuestion: 35 }
};

@Component({
  selector: 'app-purchase-training-modal',
  standalone: true,
  imports: [],
  host: { id: 'purchase-training-modal' },
  templateUrl: './purchase-training-modal.html',
  styleUrl: './purchase-training-modal.css'
})
export class PurchaseTrainingModal {
  subject = input.required<Subject>();
  close = output<void>();
  confirm = output<{ subject: Subject; difficulty: TrainingDifficulty; quantity: number }>();

  private readonly wallet = inject(WalletService);

  difficultyOptions: { id: TrainingDifficulty; label: string }[] = [
    { id: 'facil', label: 'Fácil' },
    { id: 'medio', label: 'Médio' },
    { id: 'dificil', label: 'Difícil' }
  ];

  quickQuantities = [3, 5, 10, 15];

  selectedDifficulty = signal<TrainingDifficulty>('facil');
  quantity = signal(5);

  config = computed(() => DIFFICULTY_CONFIG[this.selectedDifficulty()]);

  totalXp = computed(() => this.config().xpPerQuestion * this.quantity());
  totalCost = computed(() => this.config().costPerQuestion * this.quantity());

  hasEnoughCoins = computed(() => this.wallet.hasEnough(this.totalCost()));

  playerCoins = computed(() => this.wallet.coins());

  selectDifficulty(difficulty: TrainingDifficulty): void {
    this.selectedDifficulty.set(difficulty);
  }

  setQuantity(value: number): void {
    if (value >= 1 && value <= 50) {
      this.quantity.set(value);
    }
  }

  onQuantityInput(event: Event): void {
    const value = Number((event.target as HTMLInputElement).value);
    if (!Number.isNaN(value)) {
      this.setQuantity(value);
    }
  }

  startTraining(): void {
    if (!this.hasEnoughCoins()) {
      return;
    }
    this.wallet.spend(this.totalCost());
    this.confirm.emit({ subject: this.subject(), difficulty: this.selectedDifficulty(), quantity: this.quantity() });
  }
}