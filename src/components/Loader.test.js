import React from 'react';
import ReactDOM from 'react-dom';
import Loader from './Loader';
import {shallow} from "enzyme";
import configure from "../setupTests"
import store from "../store";
import {Provider} from "react-redux";

describe("Loader", () => {
  it("Renders without crashing", () => {
    shallow(
    <Provider store={store}>
      <Loader />
    </Provider>
    )
  })
});