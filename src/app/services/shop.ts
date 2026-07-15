import { Injectable, signal, computed, inject } from '@angular/core';
import { ShopItem, ShopCategory, ItemRarity, OwnershipFilter } from '../models/shop-item';
import { WalletService } from './wallet';

@Injectable({ providedIn: 'root' })
export class ShopService {
  private readonly wallet = inject(WalletService);

  activeCategory = signal<ShopCategory>('armas');
  activeRarity = signal<ItemRarity | 'todas'>('todas');
  ownershipFilter = signal<OwnershipFilter>('todos');
  maxPrice = signal(1000);

  equippedItemIds = signal<Set<string>>(new Set());
  ownedItemIds = signal<Set<string>>(new Set(['i1', 'i5']));

  items = signal<ShopItem[]>([
    { id: 'i1', name: 'Espada Flamejante', category: 'armas', subcategory: 'Espadas', rarity: 'epica', price: 450, description: 'Uma lâmina forjada nas chamas do compilador.', image: '/assets/shop/sword-fire.png' },
    { id: 'i2', name: 'Martelo do Refactor', category: 'armas', subcategory: 'Martelos', rarity: 'rara', price: 280, description: 'Esmaga código legado com um golpe.', image: '/assets/shop/hammer.png' },
    { id: 'i3', name: 'Cajado do Debugger', category: 'armas', subcategory: 'Cajados', rarity: 'lendaria', price: 900, description: 'Revela bugs ocultos no reino.', image: '/assets/shop/staff.png' },
    { id: 'i4', name: 'Arco da Precisão', category: 'armas', subcategory: 'Arcos', rarity: 'comum', price: 90, description: 'Acerta o alvo com exatidão de tipo.', image: '/assets/shop/bow.png' },
    { id: 'i5', name: 'Elmo do Arquiteto', category: 'armaduras', subcategory: 'Capacetes', rarity: 'incomum', price: 150, description: 'Protege contra más decisões de design.', image: '/assets/shop/helmet.png' },
    { id: 'i6', name: 'Armadura de Testes', category: 'armaduras', subcategory: 'Armaduras', rarity: 'rara', price: 320, description: 'Blinda contra regressões inesperadas.', image: '/assets/shop/armor.png' },
    { id: 'i7', name: 'Capa do Deploy Noturno', category: 'armaduras', subcategory: 'Capas', rarity: 'epica', price: 500, description: 'Invisível durante deploys arriscados.', image: '/assets/shop/cape.png' },
    { id: 'i8', name: 'Botas do Hot Reload', category: 'armaduras', subcategory: 'Botas', rarity: 'comum', price: 70, description: 'Move-se rápido entre arquivos.', image: '/assets/shop/boots.png' },
    { id: 'i9', name: 'Dragão Bebê', category: 'pets', subcategory: 'Dragão Bebê', rarity: 'mitica', price: 2000, description: 'Um companheiro lendário que cospe stack traces.', image: '/assets/shop/pet-dragon.png' },
    { id: 'i10', name: 'Lobo Sentinela', category: 'pets', subcategory: 'Lobo', rarity: 'rara', price: 350, description: 'Vigia seu código enquanto você dorme.', image: '/assets/shop/pet-wolf.png' },
    { id: 'i11', name: 'Raposa Ágil', category: 'pets', subcategory: 'Raposa', rarity: 'incomum', price: 200, description: 'Rápida como um algoritmo otimizado.', image: '/assets/shop/pet-fox.png' },
    { id: 'i12', name: 'Coruja Arcana', category: 'pets', subcategory: 'Coruja Arcana', rarity: 'epica', price: 600, description: 'Sábia em todas as linguagens.', image: '/assets/shop/pet-owl.png' },
    { id: 'i13', name: 'Golem de Pedra', category: 'pets', subcategory: 'Golem', rarity: 'lendaria', price: 850, description: 'Construído com blocos de código robusto.', image: '/assets/shop/pet-golem.png' },
    { id: 'i14', name: 'Manto do Mago Sênior', category: 'roupas', subcategory: 'Mantos', rarity: 'rara', price: 180, description: 'Aumenta sua sabedoria aparente em code review.', image: '/assets/shop/hat.png' },
    { id: 'i15', name: 'Túnica do Merge Tranquilo', category: 'roupas', subcategory: 'Túnicas', rarity: 'epica', price: 400, description: 'Veste-se para produção sem conflitos.', image: '/assets/shop/wings.png' },
    { id: 'i16', name: 'Colete do Deploy de Sexta', category: 'roupas', subcategory: 'Coletes', rarity: 'comum', price: 50, description: 'Para quem tem coragem questionável.', image: '/assets/shop/emote.png' },
    { id: 'i17', name: 'Vestes do Código Limpo', category: 'roupas', subcategory: 'Vestes', rarity: 'mitica', price: 1500, description: 'Um brilho que só aparece em código bem formatado.', image: '/assets/shop/aura.png' }
  ]);

  categories: { id: ShopCategory; label: string; icon: string }[] = [
    { id: 'armas', label: 'Armas', icon: '⚔️' },
    { id: 'armaduras', label: 'Armaduras', icon: '🛡️' },
    { id: 'pets', label: 'Pets', icon: '🐉' },
    { id: 'roupas', label: 'Roupas', icon: '👕' }
  ];

  rarityOptions: { id: ItemRarity | 'todas'; label: string }[] = [
    { id: 'todas', label: 'Todas' },
    { id: 'comum', label: 'Comum' },
    { id: 'incomum', label: 'Incomum' },
    { id: 'rara', label: 'Rara' },
    { id: 'epica', label: 'Épica' },
    { id: 'lendaria', label: 'Lendária' },
    { id: 'mitica', label: 'Mítica' }
  ];

  filteredItems = computed(() => {
    const category = this.activeCategory();
    const rarity = this.activeRarity();
    const ownership = this.ownershipFilter();
    const price = this.maxPrice();
    const owned = this.ownedItemIds();

    return this.items().filter(item => {
      const matchesCategory = item.category === category;
      const matchesRarity = rarity === 'todas' || item.rarity === rarity;
      const matchesPrice = item.price <= price;
      const isOwned = owned.has(item.id);
      const matchesOwnership =
        ownership === 'todos' ||
        (ownership === 'possuidos' && isOwned) ||
        (ownership === 'nao-possuidos' && !isOwned);

      return matchesCategory && matchesRarity && matchesPrice && matchesOwnership;
    });
  });

  isOwned(itemId: string): boolean {
    return this.ownedItemIds().has(itemId);
  }

  isEquipped(itemId: string): boolean {
    return this.equippedItemIds().has(itemId);
  }

  purchaseItem(item: ShopItem): void {
    if (this.isOwned(item.id) || !this.wallet.hasEnough(item.price)) {
      return;
    }
    this.wallet.spend(item.price);
    this.ownedItemIds.update(owned => new Set(owned).add(item.id));
  }

  equipItem(item: ShopItem): void {
    this.equippedItemIds.update(equipped => {
      const updated = new Set(equipped);
      const sameSubcategoryOwned = this.items().filter(i => i.category === item.category);
      sameSubcategoryOwned.forEach(i => updated.delete(i.id));
      updated.add(item.id);
      return updated;
    });
  }
}