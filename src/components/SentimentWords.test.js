import React from 'react';
import ReactDOM from 'react-dom';
import SentimentWords from './SentimentWords';
import {shallow} from "enzyme";
import configure from "../setupTests"
import store from "../store";
import {Provider} from "react-redux";

describe("SentimentWords", () => {
  it("Renders without crashing", () => {
    shallow(
    <Provider store={store}>
      <SentimentWords />
    </Provider>
    )
  })
});