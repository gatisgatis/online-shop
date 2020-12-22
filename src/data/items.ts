import { v4 as uuid } from 'uuid';
import { Item } from '../store/items/types';

const allItems: Item[] = [
  {
    id: uuid(),
    name: 'Skapis',
    price: 10,
    isSelected: false,
    countAvailable: 20,
    countSelected: 1,
    specs: {
      color: 'black',
      weight: 20,
      volume: 50,
    },
    discount: 20,
    images: [
      'https://www.jysk.lv/media/catalog/product/cache/image/beff4985b56e3afdbeabfc89641a4582/1/c/1c9fb51e6a2e1367594a395f623a49410d268f87___1_701-176-1029.jpg',
      'https://www.jysk.lv/media/catalog/product/cache/image/beff4985b56e3afdbeabfc89641a4582/3/8/384512a7fcb5712833c21e962f5a95052b10b073___1_701-176-1025.jpg',
    ],
  },
  {
    id: uuid(),
    name: 'Krēsls',
    price: 15,
    isSelected: false,
    countAvailable: 20,
    countSelected: 1,
    specs: {
      color: 'black',
      weight: 20,
      volume: 50,
    },
    discount: 20,
    images: ['https://www.24a.lv/img/Products/full_8e0e4f9eaa5f4bc4f005292c058e2bbe.jpg'],
  },
];
