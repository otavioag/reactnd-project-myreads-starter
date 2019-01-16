import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const BookShelf = (props) => (
  <div className='bookshelf'>
    <h2 className='bookshelf-title'>{props.title}</h2>
    <div className='bookshelf-books'>
      <ol className='books-grid'>
        {props.books.filter(book => book.shelf === props.shelf).map(book => (
          <Book
            key={book.id}
            book={book}
            handleShelfChange={props.handleShelfChange}
          />
        ))}
      </ol>
    </div>
  </div>
);

BookShelf.propTypes = {
  title: PropTypes.string.isRequired,
  shelf: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  handleShelfChange: PropTypes.func.isRequired
};

export default BookShelf;