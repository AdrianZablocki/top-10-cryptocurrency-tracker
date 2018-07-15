import React, { Component } from 'react';

import Layout from './containers/Layout/Layout';
import CoinList from './components/CoinList/CoinList';

import './App.css';

class App extends Component {
  render() {
    return (
      <Layout >
        <CoinList />
      </Layout>
    );
  }
};

export default App;
