import React from 'react';

import Button from '../UI/Button/Button';
import './CoinCard.css';

const coinCard = (props) => (
  <div className="card-wrapper">

    <div className="card">
      <div>
        <img className="card-img" src={props.imgSrc} alt={props.title} />
        <div className="card-symbol">{props.coinSymbol}</div>   
      </div>
      <div className="card-name__wrapper">
        <h2 className="card-name">{props.coinName}</h2> 
        <span className="card-price">{props.coinPrice}</span>  
        <span className="card-price card-price__symbol">{props.moneySymbol}</span>  
      </div>
      <Button btnStyle="button button-more" text="more" />
    </div>
    
    <div className="card-change__wrapper">
      <span className="card-price card-price__changed">Change:</span> 
      <span className={props.change_1h > 0 ? 
        "card-price card-price__changed card-price__changed-plus" : 
        "card-price card-price__changed card-price__changed-minus"}>
        <span className="card-price card-price__changed">1H</span>{props.change_1h}%
      </span>

      <span className={props.change_24h > 0 ? 
        "card-price card-price__changed card-price__changed-plus" : 
        "card-price card-price__changed card-price__changed-minus"}>
        <span className="card-price card-price__changed">24H</span>{props.change_24h}%
      </span>

      <span className={props.change_7d > 0 ? 
        "card-price card-price__changed card-price__changed-plus" : 
        "card-price card-price__changed card-price__changed-minus"}>
        <span className="card-price card-price__changed">7D</span>{props.change_7d}%
      </span>
    </div>

  </div>
);

export default coinCard;