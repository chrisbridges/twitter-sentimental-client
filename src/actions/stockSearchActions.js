import {API_BASE_URL} from '../config';
import openSocket from 'socket.io-client';
const socket = openSocket(API_BASE_URL);

export const SEARCH_STOCK_REQUEST = 'SEARCH_STOCK_REQUEST';
export const searchStockRequest = stock => ({
  type: SEARCH_STOCK_REQUEST,
  stock
});

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

export const subscribeToStock = stock => dispatch => {
  // const socket = openSocket(API_BASE_URL);
  // console.log(socket.id);
  dispatch(searchStockRequest(stock));
  //TODO: disconnect any previous stock inquiries, on new search - maybe don't need?
  // socket.emit(`unsubscribe`);
  socket.emit('request-symbol', stock);
  socket.on(`symbol-${stock}`, data => {
    dispatch(searchStockSuccess(data));
  });
};


// Chris <-> Server
// Lykaio <-> Server

export const RETURN_TO_DEFAULT_STATE = 'RETURN_TO_DEFAULT_STATE';
export const returnToDefaultState = () => ({
  type: RETURN_TO_DEFAULT_STATE
});