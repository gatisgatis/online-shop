import { User } from '../../types/user';

export const CHANGE_USER_INFO = 'CHANGE_USER_INFO';
export const USER_LOG_IN = 'USER_LOG_IN';
export const USER_LOG_OUT = 'USER_LOG_OUT';

interface ChangeUserInfoAction {
  type: typeof CHANGE_USER_INFO;
  payload: {
    key: string;
  };
}

interface UserLogInAction {
  type: typeof USER_LOG_IN;
  payload: {
    user: User;
  };
}

interface UserLogOutAction {
  type: typeof USER_LOG_OUT;
}

export type UserActions = ChangeUserInfoAction | UserLogInAction | UserLogOutAction;
