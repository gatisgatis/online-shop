import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { CardCart } from '../components/card-cart/card-cart';

const Cart: FC = () => {
  const items = useSelector((state: RootState) => {
    return state.items.filter((item) => item.countSelected > 0);
  });

  const TotalSum = () => {
    return items.reduce((sum, item) => {
      const itemTotalPrice = (item.price - (item.price * item.discount) / 100) * item.countSelected;
      return sum + itemTotalPrice;
    }, 0);
  };

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <h1>GROZS</h1>
            {items.map((item) => {
              return (
                <div key={item.id} className='margin-bottom--10'>
                  <CardCart item={item} />
                </div>
              );
            })}
            <h2>Summa kopā: {TotalSum().toFixed(2)} EUR</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
