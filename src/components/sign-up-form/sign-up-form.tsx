import React, { FC } from 'react';
import { useForm } from 'react-hook-form';

export const LogInForm: FC = () => {
  const { register, handleSubmit, errors, watch } = useForm();

  interface SignUpData {
    username: string;
    password: string;
    
  }

  const onSubmitHandler = (data: SignUpData) => {
    console.log(data);
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
