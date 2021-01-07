export interface User {
  id: string;
  name: string;
  userName: string;
  email: string;
  password: string;
  birthDate: number;
  createdAt: number;
  status: UserStatus;
  bonusMoney: number;
  image: string;
}

export type UserStatus = 'admin' | 'customer' | 'guest';
