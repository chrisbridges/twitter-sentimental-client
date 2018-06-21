import React from 'react';
import ReactDOM from 'react-dom';
import SentimentScore from './SentimentScore';
import {shallow} from "enzyme";
import configure from "../setupTests"
import store from "../store";
import {Provider} from "react-redux";

describe("SentimentScore", () => {
  it("Renders without crashing", () => {
    shallow(
    <Provider store={store}>
      <SentimentScore />
    </Provider>
    )
  })
});