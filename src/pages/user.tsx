import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const UserPage: FC = () => {
  const user = useSelector((state: RootState) => {
    return state.user;
  });

  return (
    <section>
      <div className="container">
        <div className="row center-xs">
          <div className="col-xs-12">
            <h3>{user.name}</h3>
            <h2>{user.userName}</h2>
            <h3>{user.status}</h3>
            <img src={user.image} alt="" width="200px" height="200px" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserPage;
