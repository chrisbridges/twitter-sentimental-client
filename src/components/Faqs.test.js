import React from 'react';
import ReactDOM from 'react-dom';
import Faqs from './Faqs';
import {shallow} from "enzyme";
import configure from "../setupTests"
import store from "../store";
import {Provider} from "react-redux";

describe("Faqs", () => {
  it("Renders without crashing", () => {
    shallow(
    <Provider store={store}>
      <Faqs />
    </Provider>
    )
  })
});

