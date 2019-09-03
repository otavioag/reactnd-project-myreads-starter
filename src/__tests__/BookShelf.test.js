import React from 'react';
import { shallow } from 'enzyme';
import BookShelf from '../components/book/BookShelf';
import Book from '../components/book/Book';

describe('BookShelf', () => {
  it('renders without crashing - with book data', () => {
    const wrapper = shallow(<BookShelf
      title=''
      books={[<Book
        key='key'
        book={{title: "React", authors: ["Nils Hartmann", "Oliver Zeigermann"], imageLinks: {thumbnail: "http://books.google.com/books/content?id=IOejDAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"}, shelf: 'read'}}
        handleShelfChange={jest.fn()} />]}/>
    );
    expect(wrapper).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });
});