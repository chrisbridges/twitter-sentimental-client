import {SEARCH_STOCK_REQUEST, SEARCH_STOCK_SUCCESS, SEARCH_STOCK_ERROR} from '../actions/actions';

const initialState = {
  stock: null,
  sentimentScore: 0,
  tweets: []
};

export function stockReducer(state=initialState, action) {
  if (action.type === SEARCH_STOCK_REQUEST) {

  }

  if (action.type === SEARCH_STOCK_SUCCESS) {
    return Object.assign({}, state, {
      stock: action.stock,
      sentimentScore: action.sentimentScore,
      tweets: action.tweets
    });
  }

  if (action.type === SEARCH_STOCK_ERROR) {

  }
  return state;
}