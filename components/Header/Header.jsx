import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import image from '../../public/spacex_logo.png';
import styles from './Header.module.scss';
import SideBar from '../SideBar/SideBar';

const Header = () => {
  const { asPath } = useRouter();
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
        <li activeClassName={styles.active}>
          <Link href="/">
            <a className={asPath === '/' ? styles.active : ''}>residentials</a>
          </Link>
        </li>
        <li>
          <Link href="/business">
            <a className={asPath === '/business' ? styles.active : ''}>
              business
            </a>
          </Link>
        </li>
        <li>
          <Link href="/rv">
            <a className={asPath === '/rv' ? styles.active : ''}>rv</a>
          </Link>
        </li>
      </ul>
      <div className={styles.bars} onClick={toggleSideBar}>
        {!showSidebar ? <FaBars /> : <FaTimes />}
      </div>
      {showSidebar && <SideBar setShowSideBar={setShowSideBar} />}
    </div>
  );
};

export default Header;
