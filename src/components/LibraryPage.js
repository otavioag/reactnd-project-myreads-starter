import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Spin } from 'antd';
import BookShelf from './book/BookShelf';

const LibraryPage = (props) => (
  <div className='list-books'>
    <div className='list-books-title'>
      <h1>MyReads</h1>
    </div>
    <Spin spinning={props.loading} size='large' tip='Loading...' >
      <div className='list-books-content'>
        <BookShelf
          title='Currently Reading'
          shelf='currentlyReading'
          books={props.booksInShelf}
          handleShelfChange={props.handleShelfChange}
        />
        <BookShelf
          title='Want to Read'
          shelf='wantToRead'
          books={props.booksInShelf}
          handleShelfChange={props.handleShelfChange}
        />
        <BookShelf
          title='Read'
          shelf='read'
          books={props.booksInShelf}
          handleShelfChange={props.handleShelfChange}
        />
      </div>
    </Spin>
    <div className='open-search'>
      <Link to='/search'
        className='search-book' >
        <button>Add a book</button>
      </Link>
    </div>
  </div>
);

LibraryPage.propTypes = {
  booksInShelf: PropTypes.array.isRequired,
  handleShelfChange: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
};

export default LibraryPage;