/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { changeItemCount } from '../../store/items/actions';
import { Item } from '../../types/item';
import styles from './card-cart.module.scss';

type Props = {
  item: Item;
};

export const CardCart: FC<Props> = ({ item }) => {
  const { id, name, price, discount, images, countAvailable, countSelected } = item;

  const dispatch = useDispatch();

  const discountPrice = price - (discount * price) / 100;

  const clickPlusButton = () => {
    dispatch(changeItemCount(id, countSelected + 1));
  };

  const clickMinusButton = () => {
    dispatch(changeItemCount(id, countSelected - 1));
  };

  const removeItemFromCart = () => {
    dispatch(changeItemCount(id, 0));
  };

  return (
    <div className={styles.wrapper}>
      <div onClick={removeItemFromCart}>X</div>
      <div className={styles.imgWrapper}>
        <img className={styles.img} src={images[0]} alt={name} />
      </div>
      <div>
        <h3>{name}</h3>
        <h6>({id})</h6>
      </div>
      <div>
        <h3>{price.toFixed(2)} EUR</h3>
        <h3>{discountPrice.toFixed(2)} EUR</h3>
      </div>
      <div>
        <div>
          <button type="button" onClick={clickMinusButton} disabled={countSelected <= 1}>
            -
          </button>
          <h3>{countSelected}</h3>
          <button
            type="button"
            onClick={clickPlusButton}
            disabled={countSelected >= countAvailable}
          >
            +
          </button>
        </div>
        <div>Pieejams: {countAvailable}</div>
      </div>
      <h3>{(discountPrice * countSelected).toFixed(2)} EUR</h3>
    </div>
  );
};
