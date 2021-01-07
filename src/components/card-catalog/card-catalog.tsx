/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { FC, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-modal';
import { HiThumbUp } from 'react-icons/hi';
import { useHistory } from 'react-router-dom';
import { ImageSlider } from '../image-slider/image-slider';
import { changeItemCount } from '../../store/items/actions';
import { Item } from '../../types/item';
import { Button } from '../common/button/button';
import styles from './card-catalog.module.scss';

type Props = {
  item: Item;
};

export const CardCatalog: FC<Props> = ({ item }) => {
  const {
    id,
    name,
    price,
    discount,
    category,
    images,
    likes,
    countAvailable,
    countSelected,
  } = item;

  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  const dispatch = useDispatch();

  const history = useHistory();

  const clickOnImageHandler = () => {
    setIsImageModalOpen(true);
  };

  const clickOnBasketButtonHandler = () => {
    if (item.countSelected > 0) {
      dispatch(changeItemCount(id, 0));
    } else {
      dispatch(changeItemCount(id, 1));
    }
  };

  const goToItemPage = () => {
    history.push(`/item/${id}`);
  };

  const createPricesAsStrings = (price_: number, discount_: number): string[] => {
    let discountPrice = `\u20AC${price_.toFixed(2)}`;
    let fullPrice = '';
    if (discount_ > 0) {
      discountPrice = `\u20AC${(price_ - (price_ * discount_) / 100).toFixed(2)}`;
      fullPrice = `\u20AC${price_.toFixed(2)}`;
    }
    return [fullPrice, discountPrice];
  };

  const [fullPrice, disCountPrice] = createPricesAsStrings(price, discount);

  return (
    <div className={styles.wrapper}>
      <Modal
        isOpen={isImageModalOpen}
        onRequestClose={() => setIsImageModalOpen(false)}
        style={{ overlay: { zIndex: 3 } }}
      >
        <ImageSlider images={images} imageFitCover={false} />
      </Modal>

      {countAvailable < 0 && <div className={styles.soldOut}>Izpārdots</div>}

      <div className={styles.imgWrapper}>
        <img src={images[0]} alt={name} className={styles.image} onClick={clickOnImageHandler} />
      </div>
      <div className={styles.contentWrapper}>
        <h3 onClick={goToItemPage} className={styles.title}>
          {name}
        </h3>
        <h5>{category}</h5>
        <div className={styles.prices}>
          <span className={styles.fullPrice}>{fullPrice}</span>{' '}
          <span className={styles.discountPrice}>{disCountPrice}</span>
        </div>
        <div className={styles.btnWrapper}>
          <Button onClick={clickOnBasketButtonHandler} color='primary'>
            {countSelected > 0 ? 'Izņemt no groza' : 'Pievienot grozam'}
          </Button>
        </div>
        <div className={styles.footer}>
          <div className={styles.reviews}>
            <HiThumbUp /> {likes}
          </div>
          <div onClick={goToItemPage} className={styles.readMore}>
            Vairāk Info
          </div>
        </div>
      </div>
    </div>
  );
};
