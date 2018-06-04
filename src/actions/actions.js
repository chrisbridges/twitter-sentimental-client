import {API_BASE_URL} from '../config';
import openSocket from 'socket.io-client';
const socket = openSocket(API_BASE_URL);

export const SEARCH_STOCK_REQUEST = 'SEARCH_STOCK_REQUEST';
export const searchStockRequest = () => {
  type: SEARCH_STOCK_REQUEST
};

export const SEARCH_STOCK_SUCCESS = 'SEARCH_STOCK_SUCCESS';
export const searchStockSuccess = data => ({
  type: SEARCH_STOCK_SUCCESS,
  data
  // tweets: [...state.tweets, data.tweetText],
  // sentimentScore: data.sentimentScore
});

export const SEARCH_STOCK_ERROR = 'SEARCH_STOCK_ERROR';
export const searchStockError = error => ({
  type: SEARCH_STOCK_ERROR,
  error
});

export const searchStocks = stock => dispatch => {
  const socket = openSocket(API_BASE_URL);
  dispatch(searchStockRequest());

  socket.on('tweets', data => {
    dispatch(searchStockSuccess(data));
  })
    .catch(err => dispatch(searchStockError(err)));
  socket.emit('subscribeToTweets', stock);
};

// function search (stock) {
//   const socket = openSocket(API_BASE_URL);
//   socket.on('tweets', data => {
//     dispatch(searchStockSuccess(data));
//   })
//     .catch(err => {
//       dispatch(searchStockError(err));
//     });
//   socket.emit('subscribeToTweets', 'AAPL');
//   // return (
//   //   fetch(`${API_BASE_URL}/stocks/${stock}`, {
//   //     method: 'GET'
//   //   })
//   //   .then(res => {
//   //     return res;
//   //   })
//   // );
// }