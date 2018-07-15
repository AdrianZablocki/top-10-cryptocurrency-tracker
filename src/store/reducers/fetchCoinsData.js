import { updateObject } from '../utility';
import * as actionTypes from '../actions/actionTypes';

const initialstate = {
  coins: null,
  loading: null,
  error: null
};

const fetchCoinsStart = (state) => {
  return updateObject(state, {loading: true})
};

const fetchCoinsSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    coins: action.coins
  });
};

const fetchCoinsFail = (state) => {
  return updateObject(state, {
    loading: false,
    error: true
  });
};


const reducer = (state = initialstate, action) => {
  switch(action.type) {
    case actionTypes.FETCHING_COIN_DATA_START: return fetchCoinsStart(state, action);
    case actionTypes.FETCHING_COIN_DATA_SUCCESS: return fetchCoinsSuccess(state, action);
    case actionTypes.FETCHING_COIN_DATA_FAIL: return fetchCoinsFail(state, action);
    default: return state
  }
};

export default reducer;