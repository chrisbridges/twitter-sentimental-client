import {SEARCH_STOCK_REQUEST, SEARCH_STOCK_SUCCESS, SEARCH_STOCK_ERROR} from '../actions/actions';

const initialState = {
  stock: null,
  sentimentScore: 0,
  tweets: [],
  loading: false,
  error: null
};

export function stockReducer(state=initialState, action) {
  if (action.type === SEARCH_STOCK_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: null
    });
  }

  if (action.type === SEARCH_STOCK_SUCCESS) {
    return Object.assign({}, state, {
      sentimentScore: state.sentimentScore + action.data.sentimentScore,
      tweets: [...state.tweets, action.data.tweetText]
    });
  }

  if (action.type === SEARCH_STOCK_ERROR) {
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    });
  }
  return state;
}