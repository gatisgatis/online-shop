import { User } from '../../types/user';
import { UserActions, USER_LOG_IN, USER_LOG_OUT, CHANGE_USER_INFO } from './types';

export const userLogIn = (user: User): UserActions => {
  return {
    type: USER_LOG_IN,
    payload: {
      user,
    },
  };
};

export const userLogOut = (): UserActions => {
  return {
    type: USER_LOG_OUT,
  };
};

export const changeUserInfo = (key: string): UserActions => {
  return {
    type: CHANGE_USER_INFO,
    payload: {
      key,
    },
  };
};
