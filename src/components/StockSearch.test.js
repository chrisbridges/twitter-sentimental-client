import React from 'react';
import ReactDOM from 'react-dom';
import StockSearch from './StockSearch';
import {shallow} from "enzyme";
import configure from "../setupTests"
import store from "../store";
import {Provider} from "react-redux";

describe("StockSearch", () => {
  it("Renders without crashing", () => {
    shallow(
    <Provider store={store}>
      <StockSearch />
    </Provider>
    )
  })
});