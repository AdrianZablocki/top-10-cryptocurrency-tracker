import React, { Component } from 'react';

import Layout from './containers/Layout/Layout';
import CoinCard from './components/CoinCard/CoinCard';

import './App.css';

class App extends Component {
  render() {
    return (
      <Layout >
        <div>
          <ul>
            <CoinCard 
              coinSymbol="$"
              coinName="USD"
              coinPrice="3.45"
              moneySymbol="ZŁ" />
          </ul>
        </div>
      </Layout>
    );
  }
}

export default App;
