import React from 'react';
import styles from './Intro.module.scss';
import { urlFor } from '../../lib/client';
import OrderForm from '../OrderForm/OrderForm';

const Intro = ({ data }) => {
  const image = urlFor(data.image[0]);
  return (
    <section
      className={styles.Intro}
      style={{
        background: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className={styles.wrapper}>
        <h1>{data.title}</h1>
        <p>{data.text}</p>
      </div>
      <div className={styles.form}>
        <OrderForm />
      </div>
    </section>
  );
};

export default Intro;
