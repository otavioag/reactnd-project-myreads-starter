import React from 'react';
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

export default BookShelf;
