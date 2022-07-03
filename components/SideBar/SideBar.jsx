import React from 'react';
import Link from 'next/link';
import styles from './SideBar.module.scss';

const SideBar = ({setShowSideBar}) => {
  return (
    <div className={styles.SideBar}>
      <ul>
        <li onClick={()=>setShowSideBar(false)}>
          <Link href="/">residential</Link>
        </li>
        <li onClick={()=>setShowSideBar(false)}>
          <Link href="/business" >business</Link>
        </li>
        <li onClick={()=>setShowSideBar(false)}>
          <Link href="/rv">rv</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
