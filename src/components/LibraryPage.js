import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Spin } from 'antd';
import BookShelf from './book/BookShelf';
import Book from './book/Book';

class LibraryPage extends React.Component {

  filterBookShelf = (shelf) => (
    this.props.booksInShelf.filter(book => book.shelf === shelf).map(book => (
      <Book
        key={book.id}
        book={book}
        handleShelfChange={this.props.handleShelfChange}
      />
    ))
  );

  render() {
    return (
      <div className='list-books'>
        <div className='list-books-title'>
          <h1>MyReads</h1>
        </div>
        <Spin spinning={this.props.loading} size='large' tip='Loading...' >
          <div className='list-books-content'>
            <BookShelf
              title='Currently Reading'
              books={this.filterBookShelf('currentlyReading')}
            />
            <BookShelf
              title='Want to Read'
              books={this.filterBookShelf('wantToRead')}
            />
            <BookShelf
              title='Read'
              books={this.filterBookShelf('read')}
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
  }
}

LibraryPage.propTypes = {
  booksInShelf: PropTypes.array.isRequired,
  handleShelfChange: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
};

export default LibraryPage;