export interface DATA {
  id: number;
  price: number;
  title: string;
  category: string;
  description: string;
  image: string;
  rating: { count: number; rate: number };
}

export interface iDATA extends DATA {
  QTY?: number;
  delivered?: boolean;
}
