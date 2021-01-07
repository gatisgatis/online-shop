import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../store';

const ItemPage: FC = () => {
  const { id: paramsId } = useParams<{ id: string }>();

  const item = useSelector((state: RootState) => {
    return state.items.find((it) => {
      return it.id === paramsId;
    });
  });

  return (
    <section>
      <div className="container">
        <div className="row center-xs margin-bottom--24">
          <div className="col-xs-12">{JSON.stringify(item, null, 5)}</div>
        </div>
      </div>
    </section>
  );
};

export default ItemPage;
