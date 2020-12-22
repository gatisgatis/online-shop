/* eslint-disable react/jsx-curly-newline */
/* eslint-disable react/jsx-tag-spacing */
import React, { FC, useState } from 'react';
import { v4 as uuid } from 'uuid';
import useTextInput from '../hooks/useTextInput';
import { UserStatus, User } from '../store/user/types';

const allUsers: User[] = [];

const Home: FC = () => {
  const [registerPassword, bindRegisterPassword, resetRegisterPassowrd] = useTextInput('');
  const [registerUsername, bindRegisterUsername, resetRegisterUsername] = useTextInput('');
  const [registerUserImages, bindRegisterUserImages, resetRegisterUserImages] = useTextInput('');
  // const [registerUserStatus, setRegisterUserStatus] = useState('user');


  const logIn = () => {
    console.log(allUsers);
  };

  const logOut = () => {};

  const register = (
    event: React.FormEvent<HTMLFormElement>,
    name: string,
    pw: string,
    imgs: string,
    stat: UserStatus
  ) => {
    event.preventDefault();
    const newUser: User = {
      name,
      password: pw,
      image: imgs,
      status: stat,
      money: 5000,
      birthDate: Date.now() - 10000,
      createdAt: Date.now(),
      id: uuid(),
    };
    allUsers.push(newUser);
    resetRegisterUserImages();
    resetRegisterPassowrd();
    resetRegisterUsername();
  };



  return (
    <section>
      <div className="container">
        <div className="row center-xs margin-bottom--24">
          <div className="col-xs-12">
            <h1>HOME</h1>
            <button type="button" onClick={logIn}>
              LOG IN as Admin
            </button>
            <br />
            <button type="button" onClick={logOut}>
              LOG Out
            </button>
            <br />
            <div>
              <h3>REGISTER FORM</h3>
              <form
                action="submit"
                onSubmit={(event) =>
                  register(
                    event,
                    registerUsername,
                    registerPassword,
                    registerUserImages,
                    'customer'
                  )
                }
              >
                <span>USERNAME:</span>
                <input type="text" {...bindRegisterUsername} />
                <br />
                <span>PASSWORD:</span>
                <input type="text" {...bindRegisterPassword} />
                <br />
                <span>IMAGES:</span>
                <input type="text" {...bindRegisterUserImages} />
                <br />
                <button type="submit">Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
