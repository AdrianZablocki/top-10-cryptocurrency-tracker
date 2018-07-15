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
        const data = response;
        dispatch(fetchCoinsSuccess(data));
      })
      .catch(error => {
        dispatch(fetchCoinsFail(error));
      })
  }
};