import React from 'react';
import { shallow } from 'enzyme';
import LibraryPage from '../components/LibraryPage';


describe('LibraryPage', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<LibraryPage
      booksInShelf={[]}
      handleShelfChange={jest.fn()}
      loading={true}/>
    );
    expect(wrapper).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });
});