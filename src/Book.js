import React from 'react';
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
            backgroundImage: 'url('+(props.book.imageLinks ? props.book.imageLinks.thumbnail : '')+')'
          }}
        />
        <BookMenu book={props.book} shelf={props.book.shelf ? props.book.shelf : 'none'} handleShelfChange={props.handleShelfChange} />
      </div>
      <div className='book-title'>{props.book.title}</div>
      {props.book.authors ? props.book.authors.map(author => (
        <div key={author} className='book-authors'>{author}</div>
      )) : ''}
    </div>
  </li>
);

export default Book;