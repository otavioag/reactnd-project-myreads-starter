import React from 'react';
import { shallow } from 'enzyme';
import Book from '../components/book/Book';

describe('Book', () => {
  it('renders without crashing - with book data', () => {
    const wrapper = shallow(<Book
      book={{title: "React", authors: ["Nils Hartmann", "Oliver Zeigermann"], imageLinks: {thumbnail: "http://books.google.com/books/content?id=IOejDAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"}, shelf: 'read'}}
      handleShelfChange={jest.fn()} />
    );
    expect(wrapper).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders without crashing - without book data', () => {
    const wrapper = shallow(<Book
      book={{}}
      handleShelfChange={jest.fn()} />
    );
    expect(wrapper).toHaveLength(1);
  });
});