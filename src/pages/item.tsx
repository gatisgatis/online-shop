import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Button } from '../components/common/button/button';
import { ImageViewer } from '../components/image-viewer/image-viewer';
import { RootState } from '../store';
import { changeItemCount } from '../store/items/actions';

const ItemPage: FC = () => {
  const { id: paramsId } = useParams<{ id: string }>();

  const dispatch = useDispatch();

  const item = useSelector((state: RootState) => {
    return state.items.find((it) => {
      return it.id === paramsId;
    });
  });

  if (!item) {
    return <h3>Item not found</h3>;
  }

  const clickOnBasketButtonHandler = () => {
    if (item.countSelected > 0) {
      dispatch(changeItemCount(item.id, 0));
    } else {
      dispatch(changeItemCount(item.id, 1));
    }
  };

  return (
    <section>
      <div className="container">
        <div className="row center-xs margin-bottom--24">
          <div className="col-xs-6">
            <ImageViewer images={item.images} />
          </div>
          <div className="col-xs-6">
            <h1>{item.name}</h1>
            <h3>{item.price} EURO/GB</h3>
            <p>{item.description}</p>
            <h5>{item.specs.color}</h5>
            <h5>{item.specs.volume} litri</h5>
            <h5>{item.specs.weight} kg</h5>
            <Button onClick={clickOnBasketButtonHandler} color="primary">
              {item.countSelected > 0 ? 'Izņemt no groza' : 'Pievienot grozam'}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItemPage;
