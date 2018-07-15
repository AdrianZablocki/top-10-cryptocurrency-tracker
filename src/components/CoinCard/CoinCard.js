import React from 'react';

import './CoinCard.css';

const coinCard = (props) => (
  <div className="card-wrapper">
    <div>
      <img src={props.imgSrc} alt={props.title} />
      <span>{props.coinSymbol}</span>    
      <span>{props.coinName}</span> 
      <div>
        <span>{props.coinPrice}</span>  
        <span>{props.moneySymbol}</span>  
      </div>
    </div>
  </div>
);

export default coinCard;
