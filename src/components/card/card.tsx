import React, { FC } from 'react';
import styles from './card.module.scss';

type Props = {
  title?: string;
  price?: string;
};

export const Card: FC<Props> = ({ title='Prece', price = '10 EUR' }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imgWrapper}>
        <img src="https://picsum.photos/400" alt="dasd" />
      </div>
      <div className={styles.contentWrapper}>
        <h3 className={styles.title}>Nosaukums</h3>
        <h4 className={styles.price}>Cena</h4>
        <button type="button" className={styles.button}>Pievienot Grozam</button>
        <div className={styles.footer}>
          <span className={styles.reviews}>Atsauksmes</span>
          <span className={styles.readMore}>Vairāk Info</span>
        </div>
      </div>
    </div>
  );
};
