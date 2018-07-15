import React, { Component } from "react";
import { connect } from 'react-redux';

import CoinCard from '../CoinCard/CoinCard';
import * as actions from '../../store/actions/index';

import './CoinList.css';

class CoinList extends Component {
  componentDidMount() {
    this.props.onFetchCoinsData();
  }
  render() {
    let coins;
    if(this.props.coins) {
      coins = this.props.coins.map(coin => {
        return <CoinCard 
                key={coin.id}
                coinSymbol={coin.symbol}
                coinName={coin.name}
                coinPrice={coin.quotes.USD.price.toFixed(2)}
                moneySymbol="$" />
      })
    }

    return (
      <ul className="list-wrapper">
        {coins}
      </ul>
    )
  }
};

const mapStateToProps = state => {
  return {
    coins: state.coins.coins
  }
};
const mapDispatchToProps = dispatch => {
  return {
    onFetchCoinsData: () => dispatch(actions.fetchCoins())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoinList);