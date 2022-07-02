import { client } from '../lib/client';

export const getServerSideProps = async () => {
    const introQuery = '*[_type == "intro"]';
    const introData = await client.fetch(introQuery);
  
    const contentQuery = '*[_type == "content"]';
    const contentData = await client.fetch(contentQuery);
  
    return {
      props: {
        introData,
        contentData,
      },
    };
  };