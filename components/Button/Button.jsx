import React from 'react';
import styles from './Button.module.scss';

const Button = ({ children,link }) => {
  return <a href={link} target="_blank" rel="noreferrer" className={styles.Button}>{children}</a>;
};

export default Button;
