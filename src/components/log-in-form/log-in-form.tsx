import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { userLogIn } from '../../store/user/actions';

export const LogInForm: FC = () => {
  const { register, handleSubmit, errors, watch } = useForm();

  const dispatch = useDispatch();

  interface LogInData {
    username: string;
    password: string;
  }

  const onSubmitHandler = (data: LogInData) => {
    // dispatch(userLogIn());
    console.log('USERRRR');
  };

  return (
    <div>
      FORMA
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <input type="text" placeholder="Username" name="username" ref={register} />
        <input type="text" placeholder="Password" name="password" ref={register} />
        <input type="submit" />
      </form>
    </div>
  );
};
