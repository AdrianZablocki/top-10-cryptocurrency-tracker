import React, { Component } from "react";
import { connect } from 'react-redux';

import CoinCard from '../CoinCard/CoinCard';
import * as actions from '../../store/actions/index';

import './CoinList.css';

class CoinList extends Component {
  componentDidMount() {
    this.props.onFetchCoinsData();
    console.log(this.props.coins)
  }
  render() {
    console.log(this.props)
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