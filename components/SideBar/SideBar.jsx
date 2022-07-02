import React from 'react';
import Link from 'next/link';
import styles from './SideBar.module.scss';

const SideBar = () => {
  return (
    <div className={styles.SideBar}>
      <ul>
        <li>
          <Link href="/">residential</Link>
        </li>
        <li>
          <Link href="/business">business</Link>
        </li>
        <li>
          <Link href="/rv">rv</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
