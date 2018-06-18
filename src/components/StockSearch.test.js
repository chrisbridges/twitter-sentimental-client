import React from 'react';
import {shallow} from 'enzyme';
import StockSearch from './StockSearch';
import {Provider} from 'react-redux';
import store from '../store';


it('renders without crashing', () => {
  shallow(<Provider store={store}><StockSearch /></Provider>);
});

// it('should not submit an empty input', () => {

// });

// it('should update the state with the searched-for stock', () => {

// });

// it('should return to default state upon second search', () => {

// });