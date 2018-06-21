import React from 'react';
import ReactDOM from 'react-dom';
import TypedStocks from './TypedStocks';
import {shallow} from "enzyme";
import configure from "../setupTests"
import store from "../store";
import {Provider} from "react-redux";

describe("TypedStocks", () => {
  it("Renders without crashing", () => {
    shallow(
    <Provider store={store}>
      <TypedStocks />
    </Provider>
    )
  })
});