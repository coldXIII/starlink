/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { urlFor } from '../../lib/client';
import styles from './HalfHeightSection.module.scss';
import Button from '../Button/Button';

const HalfHeightSection = ({ data, style, twoButtons }) => {
  const image = urlFor(data.image[0]);
  console.log(image);
  return (
    <div className={styles.HalfHeightSection} style={style}>
      <div className={styles.info}>
        <h2>{data.title}</h2>
        <p>{data.text}</p>
        {twoButtons ? (
          <div className={styles.buttons}>
            <Button>download for ios</Button>
            <Button>download for android</Button>{' '}
          </div>
        ) : (
          <Button>learn more</Button>
        )}
      </div>
      <div className={styles.image}>
        <img src={image} alt="starlink" />
      </div>
    </div>
  );
};

export default HalfHeightSection;
