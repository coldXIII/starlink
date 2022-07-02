import React, { useState } from 'react';
import { client } from '../lib/client';
import styles from '../styles/Home.module.css';
import Intro from '../components/Intro/Intro';
import FullScreenSection from '../components/FullScreenSection/FullScreenSection';
import HalfHeightSection from '../components/HalfHeightSection/HalfHeightSection';
import Outro from '../components/Outro/Outro';

export default function Home({ introData, residentialData }) {
  const twoButtons = useState(true);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Intro data={introData[2]} />
        <FullScreenSection data={residentialData[1]} style={{ right: '10%' }} />
        <HalfHeightSection
          data={residentialData[2]}
          twoButtons={twoButtons}
          style={{ heigth: '100%' }}
        />
        <HalfHeightSection
          data={residentialData[4]}
          style={{ direction: 'rtl' }}
        />
        <FullScreenSection data={residentialData[5]} style={{ left: '10%' }} />
        <HalfHeightSection
          data={residentialData[3]}
          style={{ direction: 'rtl' }}
        />
        <HalfHeightSection data={residentialData[0]} />
        <Outro
          title={'view open positions'}
          text={
            'Want to be part of the Starlink team? View open positions below. '
          }
        />
      </main>
    </div>
  );
}

export const getServerSideProps = async () => {
  const introQuery = '*[_type == "intro"]';
  const introData = await client.fetch(introQuery);

  const residentialQuery = '*[_type == "residential"]';
  const residentialData = await client.fetch(residentialQuery);

  return {
    props: {
      introData,
      residentialData,
    },
  };
};
