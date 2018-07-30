import React from 'react';

import Button from '../UI/Button/Button';
import PriceChange from './PriceChange/PriceChange';
import CoinLogo from './CoinLogo/CoinLogo';
import Price from './Price/Price';
import './CoinCard.css';

const coinCard = (props) => (
  <div className="card-wrapper">

    <div className="card">
      <CoinLogo img={props.imgSrc} alt={props.title} symbol={props.coinSymbol}/>
      <Price symbol={props.moneySymbol} price={props.coinPrice} name={props.coinName} />
      <Button btnStyle="button button-more" text="more" />
    </div>
    
    <div className="card-change__wrapper">
      <span className="card-price card-price__changed">Change:</span> 
      <PriceChange changeClass={props.change_1h} text="1H" change={props.change_1h}/>
      <PriceChange changeClass={props.change_24h} text="24H" change={props.change_24h}/>
      <PriceChange changeClass={props.change_7d} text="7D" change={props.change_7d}/>
    </div>

  </div>
);

export default coinCard;