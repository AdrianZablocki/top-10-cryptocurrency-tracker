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
    error: error
  };
};

export const fetchChartData = (id) => {
  const key = '306CF39B-7702-47C6-8C4C-6CB6601864F7';
  let limit = null;
  (window.innerWidth <= 768) ? limit = 14 : limit = 60;


  return dispatch => {
    dispatch(fetchChartStart());
    axios.get('https://rest.coinapi.io/v1/ohlcv/BITSTAMP_SPOT_' + id + '_USD/latest?period_id=1DAY&limit=' + limit + '&apikey=' + key)
      .then(response => {
        let data = response.data;      
        let chartData = {
          prices: [],
          dates: []
        };

        data.map(item => {
          let date = new Date(item.time_close);
          let day = date.getDate();
          let month = date.getMonth() + 1;
          let year = date.getFullYear();
          date = day + '.' + month + '.' + year

          chartData.prices.push(item.price_close);
          chartData.dates.push(date);
          return null;
        });
        
        chartData.dates.reverse();
        chartData.prices.reverse();

        dispatch(fetchChartSuccess(chartData));
      })
      .catch(error => {
        dispatch(fetchChartFail(error));
      });
  }
};