import {SEARCH_STOCK_REQUEST, SEARCH_STOCK_SUCCESS, SEARCH_STOCK_ERROR} from '../actions/actions';

const initialState = {
  stock: null,
  sentimentScore: 0,
  tweets: [],
  positiveWords: {},
  negativeWords: {},
  loading: false,
  error: null
};

export function stockReducer(state=initialState, action) {
  if (action.type === SEARCH_STOCK_REQUEST) {
    return Object.assign({}, state, {
      stock: action.stock,
      loading: true,
      error: null
    });
  }

  if (action.type === SEARCH_STOCK_SUCCESS) {
    return Object.assign({}, state, {
      sentimentScore: state.sentimentScore + action.data.sentimentScore,
      tweets: [action.data.tweet, ...state.tweets],
      loading: false,
      error: null,
      positiveWords: addWords(state.positiveWords),
      negativeWords: addWords(state.negativeWords)
    });
  }

  if (action.type === SEARCH_STOCK_ERROR) {
    return Object.assign({}, state, {
      stock: null,
      error: action.error,
      loading: false
    });
  }
  return state;
}

function addWords (wordObj, newWords) {
  if (newWords.length === 0) {
    return wordObj;
  }
  newWords.forEach(word => {
    wordObj[word] = (wordObj[word] || 0) + 1;
  });
  return wordObj;
}