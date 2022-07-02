import React from 'react';
import Button from '../Button/Button';
import { urlFor } from '../../lib/client';
import styles from './FullScreenSection.module.scss';

const FullScreenSection = ({ data, style }) => {
  const image = urlFor(data.image[0]);
  return (
    <div
      className={styles.FullScreenSection}
      style={{
        background: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className={styles.content} style={style}>
        <h2> {data.title}</h2>
        <p> {data.text}</p>
        <Button>learn more</Button>
      </div>
    </div>
  );
};

export default FullScreenSection;
