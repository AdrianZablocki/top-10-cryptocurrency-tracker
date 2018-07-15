import React, { Component } from "react";

import CoinCard from '../CoinCard/CoinCard';

import './CoinList.css';

class CoinList extends Component {
  state = { 

  }
  render() {
    return (
      <ul className="list-wrapper">
        <CoinCard 
          coinSymbol="$"
          coinName="USD"
          coinPrice="3.45"
          moneySymbol="ZŁ" />
      </ul>
    )
  }
}

export default CoinList;