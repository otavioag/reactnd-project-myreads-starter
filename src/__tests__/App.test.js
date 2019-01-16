import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';
import LibraryPage from '../components/LibraryPage';

jest.mock('../BooksAPI');

describe('App', () => {
  it('renders search page route without crashing', () => {
    const wrapper = mount(<MemoryRouter initialEntries={[ '/search' ]}><App/></MemoryRouter>);
    expect(wrapper).toHaveLength(1);
  });

  it('renders library page route without crashing', () => {
    const wrapper = mount(<MemoryRouter initialEntries={[ '/' ]}><App/></MemoryRouter>);
    expect(wrapper).toHaveLength(1);
  });

  it('handle shelf change and shows notification', () => {
    const wrapper = mount(<MemoryRouter initialEntries={[ '/' ]}><App/></MemoryRouter>);

    //to test all showNotification branchs
    wrapper.find(LibraryPage).prop('handleShelfChange')({title: "Pro React", id: "4", shelf:'none'}, 'read');
    wrapper.find(LibraryPage).prop('handleShelfChange')({title: "Pro React", id: "4", shelf:'none'}, 'wantToRead');
    wrapper.find(LibraryPage).prop('handleShelfChange')({title: "Pro React", id: "4", shelf:'none'}, '');
    wrapper.find(LibraryPage).prop('handleShelfChange')({title: "Pro React", id: "4", shelf:'none'}, 'none');
    wrapper.find(LibraryPage).prop('handleShelfChange')({title: "Pro React", id: "4", shelf:'none'}, 'currentlyReading');
  });
});