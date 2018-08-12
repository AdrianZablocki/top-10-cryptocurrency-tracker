import { connect } from 'react-redux';
import React, { Component } from 'react';

import * as actions from '../../store/actions/index';
import Button from '../UI/Button/Button';
import Chart from '../Chart/Chart';
import CoinLogo from './CoinLogo/CoinLogo';
import Modal from '../UI/Modal/Modal';
import Price from './Price/Price';
import PriceChange from './PriceChange/PriceChange';

import './CoinCard.css';

class CoinCard extends Component {
  state = {
    showModal: false,
    // prices: null,
    // labels: null
  }

  closeModalHandler = () => {
    this.setState({ showModal: false })
  }

  openModalHandler = (event) => {
    this.props.onFetchChartData(event.target.id);

    this.setState({ 
      showModal: true,
      chartHeight: (window.innerWidth <= 768) ? 200 : 150
    });
  }

  render() {
    
    return (
      <div className="card-wrapper">
        <div className="card">
          <CoinLogo img={this.props.imgSrc} alt={this.props.title} symbol={this.props.coinSymbol}/>
          <Price symbol={this.props.moneySymbol} price={this.props.coinPrice} name={this.props.coinName} />
          <Button btnStyle="button button-more" text="more" id={this.props.id} clicked={this.openModalHandler} />
        </div>
        <div className="card-change__wrapper">
          <span className="card-price card-price__changed">Change:</span> 
          <PriceChange changeClass={this.props.change_1h} text="1H" change={this.props.change_1h}/>
          <PriceChange changeClass={this.props.change_24h} text="24H" change={this.props.change_24h}/>
          <PriceChange changeClass={this.props.change_7d} text="7D" change={this.props.change_7d}/>
        </div>

        <Modal show={this.state.showModal} modalClose={this.closeModalHandler} > 
          {
            this.props.loading === false ?
            <Chart 
              height={this.state.chartHeight}
              id={ this.props.chart ? this.props.chart.id : null } 
              prices={ this.props.chart ? this.props.chart.prices : null } 
              labels={ this.props.chart ? this.props.chart.dates : null }
            /> : null
          }
          <Button btnStyle="button button-more" text="close"  clicked={this.closeModalHandler} />
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    chart: state.chart.chart,
    loading: state.chart.loading
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchChartData: (id) => dispatch(actions.fetchChartData(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoinCard);