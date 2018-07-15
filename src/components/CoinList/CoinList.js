import { connect } from 'react-redux';
import React, { Component } from "react";

import * as actions from '../../store/actions/index';
import CoinCard from '../CoinCard/CoinCard';
import icons from './CoinIcons';
import Spinner from '../UI/Spiner/Spinner';

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
                imgSrc={icons[coin.symbol]}
                title={coin.name}
                coinSymbol={coin.symbol}
                coinName={coin.name}
                coinPrice={coin.quotes.USD.price.toFixed(2)}
                moneySymbol="$"
                change_1h={coin.quotes.USD.percent_change_1h}
                change_24h={coin.quotes.USD.percent_change_24h}
                change_7d={coin.quotes.USD.percent_change_7d} />
      })
    }
    if(this.props.loading) {
      coins = <Spinner />
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
    coins: state.coins.coins,
    loading: state.coins.loading
  }
};
const mapDispatchToProps = dispatch => {
  return {
    onFetchCoinsData: () => dispatch(actions.fetchCoins())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoinList);