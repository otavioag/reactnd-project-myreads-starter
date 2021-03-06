import React from 'react';
import PropTypes from 'prop-types';
import BookMenu from './BookMenu';

const Book = (props) => (
  <li>
    <div className='book'>
      <div className='book-top'>
        <div
          className='book-cover'
          style={{
            width: 128,
            height: 193,
            backgroundImage: 'url('+(props.book.imageLinks ? props.book.imageLinks.thumbnail.replace('http', 'https') : '')+')'
          }}
        />
        <BookMenu
          book={props.book}
          shelf={props.book.shelf ? props.book.shelf : 'none'}
          handleShelfChange={props.handleShelfChange}
        />
      </div>
      <div className='book-title'>{props.book.title}</div>
      {props.book.authors ? props.book.authors.map(author => (
        <div key={author} className='book-authors'>{author}</div>
      )) : ''}
    </div>
  </li>
);

Book.propTypes = {
  book: PropTypes.object.isRequired,
  handleShelfChange: PropTypes.func.isRequired
};

export default Book;