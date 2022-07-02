import React from 'react';
import Button from '../Button/Button';
import styles from './Outro.module.scss'

const Outro = ({title,text}) => {
  return (
    <section className={styles.Outro}>
      <div className={styles.Outro__line}></div>
      <p>
       {text}
        <a href="sales@spacex.com">sales@spacex.com</a>
      </p>
      <div className={styles.Outro__buttons}>
        <Button>{title}</Button>
      </div>
    </section>
  );
};

export default Outro;
