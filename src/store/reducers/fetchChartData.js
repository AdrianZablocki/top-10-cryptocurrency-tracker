import { updateObject } from '../utility';
import * as actionTypes from '../actions/actionTypes';

const initialstate = {
  chart: null,
  loading: null,
  error: null
};

const fetchChartStart = (state) => {
  return updateObject(state, {
    loading: true
  });
};

const fetchChartSuccess = (state, action) => {
  return updateObject(state, {
    chart: action.chart,
    loading: false,
  });
};

const fetchChartFail = (state) => {
  return updateObject(state, {
    chart: null,
    loading: false,
    error: true,
  });
};


const reducer = (state = initialstate, action) => {
  switch(action.type) {
    case actionTypes.FETCHING_CHART_DATA_START: return fetchChartStart(state, action);
    case actionTypes.FETCHING_CHART_DATA_SUCCESS: return fetchChartSuccess(state, action);
    case actionTypes.FETCHING_CHART_DATA_FAIL: return fetchChartFail(state, action);
    default: return state
  }
};

export default reducer;