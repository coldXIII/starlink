import React, { useState } from 'react';
import { client } from '../lib/client';
import styles from '../styles/Home.module.css';
import Intro from '../components/Intro/Intro';
import FullScreenSection from '../components/FullScreenSection/FullScreenSection';
import FullHeightSection from '../components/FullHeightSection/FullHeightSection';
import Outro from '../components/Outro/Outro';

export default function Business({ introData, businessData }) {
  const twoButtons = useState(true);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Intro data={introData[1]} />
        <FullHeightSection data={businessData[0]} style={{ direction: 'rtl' }} />
        <FullHeightSection data={businessData[3]}  />
        <FullHeightSection data={businessData[1]} style={{ direction: 'rtl' }} twoButtons={twoButtons} />
        <FullScreenSection data={businessData[2]} style={{ right: '10%' }}/>
        <Outro
          title={'Frequently Asked Questions'}
          text={
            'For more information on Starlink Business, please see our '
          }
        />
      </main>
    </div>
  );
}

export const getServerSideProps = async () => {
  const introQuery = '*[_type == "intro"]';
  const introData = await client.fetch(introQuery);

  const businessQuery = '*[_type == "business"]';
  const businessData = await client.fetch(businessQuery);

  return {
    props: {
      introData,
      businessData,
    },
  };
};
