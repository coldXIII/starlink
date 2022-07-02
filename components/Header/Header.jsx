import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';
import image from '../../public/spacex_logo.png';
import styles from './Header.module.scss';
import SideBar from '../SideBar/SideBar';

const Header = () => {
  const [showSidebar, setShowSideBar] = useState(false);

  const toggleSideBar = () => {
    setShowSideBar(!showSidebar);
  };

  return (
    <div className={styles.Header}>
      <Image
        src={image}
        alt="logo"
        width={150}
        height={150}
        style={{ marginRight: '3.5rem', zIndex: '9999' }}
      />
      <ul className={styles.linkList}>
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
      <div className={styles.bars} onClick={toggleSideBar}>
        <FaBars />
      </div>
      {showSidebar &&  <SideBar />}
       
    </div>
  );
};

export default Header;
