import {API_BASE_URL} from '../config';

export const SEARCH_STOCK_REQUEST = 'SEARCH_STOCK_REQUEST';
export const searchStockRequest = stock => dispatch => {
  type: SEARCH_STOCK_REQUEST
};

export const SEARCH_STOCK_SUCCESS = 'SEARCH_STOCK_SUCCESS';
export const searchStockSuccess = data => ({
  type: SEARCH_STOCK_SUCCESS,
  data
});

export const SEARCH_STOCK_ERROR = 'SEARCH_STOCK_ERROR';
export const searchStockError = error => ({
  type: SEARCH_STOCK_ERROR,
  error
});

// export const searchStocks = stock => dispatch => {
//   dispatch(searchStockRequest());
//   search(stock)
//     .then(data => {
//       console.log(data);
//       dispatch(searchStockSuccess(data));
//     })
//     .catch(err => dispatch(searchStockError(err)));
// };

// function search (stock) {
//   return (
//     fetch(`${API_BASE_URL}/stocks/${stock}`, {
//       method: 'GET'
//     })
//     .then(res => {
//       return res;
//     })
//   );
// }

// var socket = io.connect();

// socket.on('tweet', function (data) {
//   console.log(data);
// });