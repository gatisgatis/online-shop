import { User, USER_LOG_IN, UserActions, USER_LOG_OUT, CHANGE_USER_INFO } from './types';

export const userLogIn = (name: string, password: string): UserActions => {
  return {
    type: USER_LOG_IN,
    payload: {
      name,
      password,
    },
  };
};

export const userLogOut = (): UserActions => {
  return {
    type: USER_LOG_OUT,
  };
};

export const changeUserInfo = (user: User): UserActions => {
  return {
    type: CHANGE_USER_INFO,
    payload: user,
  };
};
