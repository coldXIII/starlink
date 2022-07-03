import React, { useState } from 'react';
import { client } from '../lib/client';
import styles from '../styles/Home.module.css';
import Intro from '../components/Intro/Intro';
import FullScreenSection from '../components/FullScreenSection/FullScreenSection';
import FullHeightSection from '../components/FullHeightSection/FullHeightSection';
import Outro from '../components/Outro/Outro';

export default function Rv({ introData, rvData }) {
  const link = useState('https://www.starlink.com/map?source=rv');
  const twoButtons = useState(true);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Intro data={introData[0]} />
        <FullHeightSection
          data={rvData[2]}
          style={{ direction: 'rtl' }}
          link={link}
        />
        <FullScreenSection data={rvData[1]}  />
        <FullHeightSection
          data={rvData[0]}
          style={{ direction: 'rtl' }}
          twoButtons={twoButtons}
        />
        <Outro
          title={'order now'}
          text={
            'Try Starlink for RVs for up to 30 days. If not satisfied, return for a full refund of the hardware costs. '
          }
        />
      </main>
    </div>
  );
}

export const getServerSideProps = async () => {
  const introQuery = '*[_type == "intro"]';
  const introData = await client.fetch(introQuery);

  const rvQuery = '*[_type == "rv"]';
  const rvData = await client.fetch(rvQuery);

  return {
    props: {
      introData,
      rvData,
    },
  };
};
