import * as actionTypes from './actionTypes';
import axios from 'axios';

export const fetchChartStart = () => {
  return {
    type: actionTypes.FETCHING_CHART_DATA_START
  };
};

export const fetchChartSuccess = (data) => {
  return {
    type: actionTypes.FETCHING_CHART_DATA_SUCCESS,
    chart: data,
  };
};

export const fetchChartFail = (error) => {
  return {
    type: actionTypes.FETCHING_CHART_DATA_FAIL,
    chart: error
  };
};

export const fetchChartData = (id) => {
  const key = '306CF39B-7702-47C6-8C4C-6CB6601864F7';
  return dispatch => {
    dispatch(fetchChartStart());
    axios.get('https://rest.coinapi.io/v1/ohlcv/BITSTAMP_SPOT_' + id + '_USD/latest?period_id=1DAY&limit=100&apikey=' + key)
      .then(response => {
        console.log(response);
        let data = response.data;
        dispatch(fetchChartSuccess(data));
      })
      .catch(error => {
        dispatch(fetchChartFail(error));
      });
  }
};