import React from 'react';
import ReactDOM from 'react-dom';
import Tweets from './Tweets';
import {shallow} from "enzyme";
import configure from "../setupTests"
import store from "../store";
import {Provider} from "react-redux";

describe("Tweets", () => {
  it("Renders without crashing", () => {
    shallow(
    <Provider store={store}>
      <Tweets />
    </Provider>
    )
  })
});