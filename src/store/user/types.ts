export const CHANGE_USER_INFO = 'CHANGE_USER_INFO';
export const USER_LOG_IN = 'USER_LOG_IN';
// export const REGISTER_NEW_USER = 'REGISTER_NEW_USER';
export const USER_LOG_OUT = 'USER_LOG_OUT';

export interface User {
  id: string;
  name: string;
  password: string;
  birthDate: number;
  createdAt: number;
  status: UserStatus;
  money: number;
  image: string;
}

export type UserStatus = 'admin' | 'customer' | 'guest';

interface ChangeUserInfoAction {
  type: string;
  payload: User;
}

interface UserLogInAction {
  type: string;
  payload: {
    name: string;
    password: string;
  };
}

interface UserLogOutAction {
  type: string;
}

// interface RegisterNewUserAction {
//   type: string;
//   payload: {
//     name: string;
//     password: string;
//     image: string;
//     birthDate: number;
//     status: UserStatus;
//   };
// }

export type UserActions = ChangeUserInfoAction | UserLogInAction | UserLogOutAction;