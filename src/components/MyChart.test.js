import React from 'react';
import ReactDOM from 'react-dom';
import MyChart from './MyChart';
import {shallow} from "enzyme";
import configure from "../setupTests"
import store from "../store";
import {Provider} from "react-redux";

describe("MyChart", () => {
  it("Renders without crashing", () => {
    shallow(
    <Provider store={store}>
      <MyChart />
    </Provider>
    )
  })
});