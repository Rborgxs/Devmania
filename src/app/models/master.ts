export interface MasterTrait {
  icon: string;
  label: string;
}

export interface Master {
  id: string;
  name: string;
  title: string;
  description: string;
  imageUrl: string;
  traits: MasterTrait[];
}