import React, { FC } from 'react';
import useTextInput from '../../hooks/useTextInput';
import { Button } from '../common/button/button';
import Input from '../common/input/input';

export const LogInForm: FC = () => {
  const [username, bindUsername, resetUsername] = useTextInput('');
  const [password, bindPassword, resetPassword] = useTextInput('');

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // aizsūtam datus uz serveri un sagaidām atbildi
    // šajā gadījumā paņemam no localStorage visus userus, atrodam match un ja ir, tad logIn
  };

  return (
    <section>
      <div className="container">
        <div className="row center-xs">
          <div className="col-xs-12 col-md-4">
            <h1>Log In</h1>
            <form onSubmit={submitHandler}>
              <h5>Lietotājvārds</h5>
              <Input type="text" {...bindUsername} placeholder="Lietotājvārds" />
              <h5>Parole</h5>
              <Input type="password" {...bindPassword} placeholder="Parole" />
              <br />
              <br />
              <Button>Ielogoties</Button>
              <Button
                onClick={() => {
                  resetPassword();
                  resetUsername();
                }}
              >
                Clear
              </Button>
              <h6>
                {username}{password}
              </h6>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
