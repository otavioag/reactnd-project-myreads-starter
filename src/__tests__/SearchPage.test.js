import React from 'react';
import { shallow } from 'enzyme';
import SearchPage from '../components/SearchPage';

jest.mock('../BooksAPI');

describe('SearchPage', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<SearchPage
      booksInShelf={[]}
      handleShelfChange={jest.fn()}
      loading={true}/>
    );
    expect(wrapper).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });

  it('onChange works - with a book in library', () => {
    const wrapper = shallow(<SearchPage
      booksInShelf={[{title: "Pro React", id: "PKpPCwAAQBAJ", shelf: 'read'}]}
      handleShelfChange={jest.fn()}
      loading={true}/>
    );
    wrapper.find('input').simulate('change', {target: { value : 'react'}});
    expect(wrapper).toHaveLength(1);;
  });

  it('onChange works - with a book in library and state change', () => {
    const wrapper = shallow(<SearchPage
      booksInShelf={[{title: "Pro React", id: "PKpPCwAAQBAJ", shelf: 'read'}]}
      handleShelfChange={jest.fn()}
      loading={true}/>
    );
    wrapper.find('input').simulate('change', {target: { value : 'react'}});
    wrapper.setState({query: '', books:[], searching:true});
    expect(wrapper).toHaveLength(1);
  });

  it('onChange works - with empty query', () => {
    const wrapper = shallow(<SearchPage
      booksInShelf={[]}
      handleShelfChange={jest.fn()}
      loading={true}/>
    );
    wrapper.find('input').simulate('change', {target: { value : ''}});
    expect(wrapper).toHaveLength(1);
  });

  it('onChange works - query with no result', () => {
    const wrapper = shallow(<SearchPage
      booksInShelf={[]}
      handleShelfChange={jest.fn()}
      loading={true}/>
    );
    wrapper.find('input').simulate('change', {target: { value : 'asdfg'}});
    expect(wrapper).toHaveLength(1);
  });

  it('onChange works - query with no result and with state change', () => {
    const wrapper = shallow(<SearchPage
      booksInShelf={[]}
      handleShelfChange={jest.fn()}
      loading={true}/>);
    wrapper.find('input').simulate('change', {target: { value : 'asdfg'}});
    wrapper.setState({query: '', books:[], searching:true});
    expect(wrapper).toHaveLength(1);
  });
});