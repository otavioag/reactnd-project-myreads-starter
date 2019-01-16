import React from 'react';
import { shallow } from 'enzyme';
import BookMenu from '../components/book/BookMenu';

describe('BookMenu', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<BookMenu
      book={{}}
      handleShelfChange={jest.fn()}
      shelf={'none'}/>
    );
    expect(wrapper).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });

  it('onChange works', () => {
    const handleChange = jest.fn();
    const wrapper = shallow(<BookMenu
      book={{}}
      handleShelfChange={handleChange}
      shelf={'none'}/>
    );
    wrapper.find('select').simulate('change', {target: { value : 'hello'}, preventDefault: () => (null)});
    expect(handleChange).toHaveBeenCalled();
  });
});