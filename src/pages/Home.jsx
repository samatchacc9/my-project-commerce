import React from 'react';
import Card from '../components/Card/Card';
// import Searchbar from '../components/Searchbar/Searchbar';
import Topic from '../components/Topic/Topic';

function Home() {
  return (
    <>
      {/* <Searchbar /> */}
      <Topic title={'Products'} />
      <Card />
    </>
  );
}

export default Home;
