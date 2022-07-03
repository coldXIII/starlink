/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { urlFor } from '../../lib/client';
import styles from './FullHeightSection.module.scss';
import Button from '../Button/Button';

const FullHeightSection = ({ data, style, height, twoButtons,link }) => {
  const image = urlFor(data.image[0]);
  return (
    <div className={styles.FullHeightSection} style={style}>
      <div className={styles.info}>
        <h2>{data.title}</h2>
        <p>{data.text}</p>
        {twoButtons ? (
          <div className={styles.buttons}>
            <Button>download for ios</Button>
            <Button>download for android</Button>{' '}
          </div>
        ) : (
          <Button link={link}>learn more</Button>
        )}
      </div>
      <div className={styles.image}>
        <img src={image} alt="starlink" />
      </div>
    </div>
  );
};

export default FullHeightSection;
