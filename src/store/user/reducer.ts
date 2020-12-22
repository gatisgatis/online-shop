import { User, USER_LOG_IN, UserActions, USER_LOG_OUT, CHANGE_USER_INFO } from './types';

const defaultUser: User = {
  id: '1',
  name: 'Guest',
  password: '',
  createdAt: Date.now(),
  birthDate: Date.now(),
  status: 'guest',
  money: 0,
  image: '',
};

export const getUsersFromDataBase = () => {
  const userString = localStorage.getItem('users');
  let users: User[] = [];
  if (userString) {
    users = JSON.parse(userString);
  }
  return users;
};

export const userReducer = (state = defaultUser, action: UserActions) => {
  switch (action.type) {
    case USER_LOG_IN: {
      const users = getUsersFromDataBase();
      const userLoggedIn = users.find((user) => {
        // @ts-ignore
        return user.name === action.payload.name && user.password === action.payload.password;
      });
      if (!userLoggedIn) {
        return state;
      }
      return userLoggedIn;
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
