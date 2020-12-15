import { shallow } from "enzyme";
import React from "react";
import App from "../App";

describe("App", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  it("should render properly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
