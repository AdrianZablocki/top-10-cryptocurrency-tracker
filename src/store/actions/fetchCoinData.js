import * as actionTypes from './actionTypes';
import axios from '../../axios';

export const fetchCoinsStart = () => {
  return {
    type: actionTypes.FETCHING_COIN_DATA_START
  };
};

export const fetchCoinsSuccess = (data) => {
  return {
    type: actionTypes.FETCHING_COIN_DATA_SUCCESS,
    coins: data,
  };
};

export const fetchCoinsFail = (error) => {
  return {
    type: actionTypes.FETCHING_COIN_DATA_FAIL,
    coins: error
  };
};

export const fetchCoins = () => {
  return dispatch => {
    dispatch(fetchCoinsStart());
    axios.get('/v2/ticker/?limit=10')
      .then(response => {
        let data = response.data.data;
        data = Object.keys(data).map(coin => data[coin]);
        data.sort((a, b) => {
          return  b.quotes.USD.market_cap -a.quotes.USD.market_cap;
        })
        dispatch(fetchCoinsSuccess(data));
      })
      .catch(error => {
        dispatch(fetchCoinsFail(error));
      });
  }
};