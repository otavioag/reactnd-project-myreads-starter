import React from 'react';
import { shallow } from 'enzyme';
import BookShelf from '../components/book/BookShelf';

describe('BookShelf', () => {
  it('renders without crashing - with book data', () => {
    const wrapper = shallow(<BookShelf
      title=''
      shelf='read'
      books={[{id: 'id', shelf: 'read'}]}
      handleShelfChange={jest.fn()}/>
    );
    expect(wrapper).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });
});