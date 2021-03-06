import { v4 as uuid } from 'uuid';
import { Item } from '../types/item';

export const allItems: Item[] = [
  {
    id: uuid(),
    name: 'Skapis',
    price: 100,
    countAvailable: 5,
    countSelected: 0,
    specs: {
      color: 'black',
      weight: 40,
      volume: 50,
    },
    discount: 10,
    images: [
      'https://www.jysk.lv/media/catalog/product/cache/image/beff4985b56e3afdbeabfc89641a4582/1/c/1c9fb51e6a2e1367594a395f623a49410d268f87___1_701-176-1029.jpg',
      'https://www.jysk.lv/media/catalog/product/cache/image/beff4985b56e3afdbeabfc89641a4582/3/8/384512a7fcb5712833c21e962f5a95052b10b073___1_701-176-1025.jpg',
    ],
    category: 'Skapis',
    likes: 6,
    addedDate: 421512,
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo debitis recusandae ab sequi unde vitae doloremque dolore iure. Amet obcaecati odio molestias id quaerat accusantium vitae nihil excepturi a ipsa',
  },
  {
    id: uuid(),
    name: 'Krēsls',
    price: 15,
    countAvailable: 20,
    countSelected: 0,
    specs: {
      color: 'black',
      weight: 20,
      volume: 50,
    },
    discount: 20,
    images: [
      'https://www.24a.lv/img/Products/full_8e0e4f9eaa5f4bc4f005292c058e2bbe.jpg',
      'https://wallpaperaccess.com/full/721192.jpg',
    ],
    category: 'Krēsls',
    likes: 2,
    addedDate: 42151242,
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo debitis recusandae ab sequi unde vitae doloremque dolore iure. Amet obcaecati odio molestias id quaer',
  },
  {
    id: uuid(),
    name: 'Atpūtas krēsls ĒRTAIS Jaukums',
    price: 60,
    countAvailable: 20,
    countSelected: 0,
    specs: {
      color: 'black',
      weight: 20,
      volume: 50,
    },
    discount: 0,
    images: [
      'https://www.jysk.lv/media/catalog/product/cache/image/beff4985b56e3afdbeabfc89641a4582/3/2/322ad002a0b95dbe0a8ac9123b340a358663ef12___1_718-196-1040.jpg',
      'https://naktsmebeles.lv/wp-content/uploads/2019/08/harry_kresls_sanskats.jpg',
      'https://www.24a.lv/img/Products/full_8e0e4f9eaa5f4bc4f005292c058e2bbe.jpg',
      'https://www.jysk.lv/media/catalog/product/cache/image/beff4985b56e3afdbeabfc89641a4582/3/2/322ad002a0b95dbe0a8ac9123b340a358663ef12___1_718-196-1040.jpg',
      'https://naktsmebeles.lv/wp-content/uploads/2019/08/harry_kresls_sanskats.jpg',
      'https://www.24a.lv/img/Products/full_8e0e4f9eaa5f4bc4f005292c058e2bbe.jpg',
      'https://www.jysk.lv/media/catalog/product/cache/image/beff4985b56e3afdbeabfc89641a4582/2/9/29816b70679771c711bc6f5103ed395b31b6d6bd___1_708-186-1020.jpg',
    ],
    category: 'Krēsls',
    likes: 42,
    addedDate: 4211512,
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo debitis recusandae ab sequi unde vitae doloremque dolore iure. Amet obcaecati odio molestias id quaerat accusantium vitae nihil excepturi a ipsam?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo debitis recusandae ab sequi unde vitae doloremque dolore iure. Amet obcaecati odio molestias id quaerat accusantium vitae nihil excepturi a ipsam?',
  },
  {
    id: uuid(),
    name: 'Televizors',
    price: 120,
    countAvailable: 20,
    countSelected: 0,
    specs: {
      color: 'black',
      weight: 20,
      volume: 50,
    },
    discount: 40,
    images: [
      'https://images.samsung.com/is/image/samsung/africa-en-fhdtv-n5300-global-ua49n5300arxxa-frontblack-153239974?$720_576_PNG$',
    ],
    category: 'TV',
    likes: 11,
    addedDate: 5421512,
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo debitis recusandae ab sequi unde vitae doloremque dolore iure. Amet obcaecati odio molestias id quaerat accusantium vitae nihil excepturi a ipsam',
  },
  {
    id: uuid(),
    name: 'Iphone 13 pro',
    price: 1800,
    countAvailable: 20,
    countSelected: 1,
    specs: {
      color: 'red',
      weight: 20,
      volume: 50,
    },
    discount: 5,
    images: [],
    category: 'Sūds',
    likes: 0,
    addedDate: 7421512,
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo debitis recusandae ab sequi unde vitae doloremque dolore iure. Amet obcaecati odio molestias id quaerat accusantium vitae nihil excepturi a ipsam?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo debitis recusandae ab sequi unde vitae doloremque dolore iure. Amet obcaecati odio molestias id quaerat accusantium vitae nihil excepturi a ipsam?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo debitis recusandae ab sequi unde vitae doloremque dolore iure. Amet obcaecati odio molestias id quaerat accusantium vitae nihil excepturi a ipsam?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo debitis recusandae ab sequi unde vitae doloremque dolore iure. Amet obcaecati odio molestias id quaerat accusantium vitae nihil excepturi a ipsam?',
  },
];
