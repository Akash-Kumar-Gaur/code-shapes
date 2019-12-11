import React from 'react';

import Header from '../../components/Header';
import Banner from '../../components/Banner';

import './index.scss';

function HomeScene() {
  return (
    <div className='homeWrapper'>
      <Header />
      <Banner />
    </div>
  );
}

export default HomeScene;