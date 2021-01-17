export interface Item {
  id: string;
  name: string;
  price: number;
  countAvailable: number;
  countSelected: number;
  specs: {
    color: string;
    weight: number;
    volume: number;
  };
  discount: number;
  images: string[];
  category: string;
  likes: number;
  addedDate: number;
  description: string;
}

