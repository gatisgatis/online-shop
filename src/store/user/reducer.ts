import { v4 } from 'uuid';
import { UserActions, USER_LOG_IN, USER_LOG_OUT, CHANGE_USER_INFO } from './types';
import { User } from '../../types/user';

const defaultUser: User = {
  id: v4(),
  name: 'Guest',
  password: '',
  createdAt: Date.now(),
  birthDate: Date.now(),
  status: 'guest',
  bonusMoney: 0,
  image: 'https://i1.sndcdn.com/avatars-000324217627-ffdyh1-t500x500.jpg',
  email: '',
  userName: '',
};

export const userReducer = (state = defaultUser, action: UserActions) => {
  switch (action.type) {
    case USER_LOG_IN: {
      return action.payload.user;
    }
    case USER_LOG_OUT: {
      return defaultUser;
    }
    case CHANGE_USER_INFO: {
      return defaultUser;
    }
    default:
      return state;
  }
};
