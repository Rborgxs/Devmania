export type ShopCategory = 'armas' | 'armaduras' | 'pets' | 'roupas';
export type ItemRarity = 'comum' | 'incomum' | 'rara' | 'epica' | 'lendaria' | 'mitica';
export type OwnershipFilter = 'todos' | 'possuidos' | 'nao-possuidos';

export interface ShopItem {
  id: string;
  name: string;
  category: ShopCategory;
  subcategory: string;
  rarity: ItemRarity;
  price: number;
  description: string;
  image: string;
}