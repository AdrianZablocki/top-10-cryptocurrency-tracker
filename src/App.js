import React, { Component } from 'react';

import Layout from './containers/Layout/Layout';

import './App.css';

class App extends Component {
  render() {
    return (
      <Layout >
        <div>
        <ul>
          <li>List of cryptocurrencies</li>
        </ul>
      </div>
    </Layout>
    );
  }
}

export default App;
