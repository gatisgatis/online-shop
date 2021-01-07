import { v4 } from 'uuid';
import { User } from '../types/user';

export const USERS: User[] = [
  {
    id: v4(),
    name: 'Gatis',
    password: 'admin123',
    createdAt: Date.now() -10000,
    birthDate: Date.now() - 100000,
    status: 'admin',
    money: 5000,
    image: 'https://i.ytimg.com/vi/9hUhwVVUesA/maxresdefault.jpg',
    email: 'gatis@gmail.com',
    userName: 'gatis-admin',
  },
  {
    id: v4(),
    name: 'Juris',
    password: 'juris',
    createdAt: Date.now() - 1000,
    birthDate: Date.now() - 200000,
    status: 'customer',
    money: 1200,
    image: 'https://image.freepik.com/free-vector/cute-penguin-flying-with-balloons-cartoon-vector-illustration-animal-love-concept-isolated-vector-flat-cartoon-style_138676-2016.jpg',
    email: 'juris@gmail.com',
    userName: 'juris-user',
  },
];
