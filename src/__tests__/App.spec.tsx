import { shallow, configure } from "enzyme";
import React from "react";
import App from "../App";
import Adapter from 'enzyme-adapter-react-16';

//define mock for moment lib
const diff = jest.fn();
const momentObj = () => ({
  diff
})
jest.mock('moment', () => momentObj)

configure({ adapter: new Adapter() });

describe("App", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  it("should render properly", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should have calculate button disabled, if date is not selected', () => {
    const calcButton = wrapper.find('button').at(0);
    expect(calcButton.prop('disabled')).toBe(true);
  });
  it('should have calculate button enabled after date is selected', () => {
    const picker = wrapper.find('input').at(0);
    picker.prop('onChange')({
      target: {
        value: '1990-10-02'
      }
    });
    const calcButton = wrapper.find('button').at(0);
    expect(calcButton.prop('disabled')).toBe(false);
  });
  it('should execute moment method to calculate age on button click', () => {
    const moment = require('moment');
    const picker = wrapper.find('input').at(0);
    picker.prop('onChange')({
      target: {
        value: '1990-10-02'
      }
    });
    const calcButton = wrapper.find('button').at(0);
    calcButton.prop('onClick')();
    expect(diff).toHaveBeenCalled();
  })
});
