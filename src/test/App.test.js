import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import { shallow, mount } from 'enzyme'
import { expect } from 'chai'

//input, button, clicking,methods,img, texts, 

describe('<App/>', function () {

  it('should have divs', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div')).to.have.length(2);
    //should have classNames....
  });

  it('should have h2', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('h2')).to.have.length(1);
    //should contain texts
  });

  it('should have Form', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Form')).to.have.length(1);
    expect(wrapper.props().handleSubmit).to.be.defined;
    expect(wrapper.props().horizontal).to.be.defined;
    //form tag should have props, this.handlesubmit,horiszontal
  });

  it('should have FormGroup', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('FormGroup')).to.have.length(1);
    expect(wrapper.props().bsSize).to.be.defined;
    //should have props bsSize
  });

  it('should have FormControl', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('FormControl')).to.have.length(1);
    expect(wrapper.props().handleChange).to.be.defined;

    //type="text" placeholder="Search for books" o
  });

  it('should have a Button', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find('Button')).to.have.length(1);
    expect(wrapper.props().bsStyle).to.be.defined;
  });

  //test for methods showBooks, handleSubmit, handleChange
  //test for states
});