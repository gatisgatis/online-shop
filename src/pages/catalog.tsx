import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card } from '../components/card/card';
import { RootState } from '../store/index';

const Catalog: FC = () => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  console.log(user);

  return (
    <section>
      <div className="container">
        <div className="row center-xs margin-bottom--24">
          <div className="col-xs-12">
            <h1>Catalog</h1>
            <Card title="Prece1" />
            <Card />
            <h1>{user.name}</h1>
            <h1>{user.password}</h1>
            <h1>{user.birthDate}</h1>
            <h1>{user.status}</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
