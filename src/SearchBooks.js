import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI';
import Book from './Book';

class SearchBooks extends Component {
  state = {
    books:[]
  };

  handleSearchInputChange = (event) => {
    if (event.target.value !== '') {
      BooksAPI.search(event.target.value).then((books) => {
        if (Array.isArray(books)) {
          this.setState({books: books});
        } else {
          this.setState({books: []});
        }
      });
    }
  };

  render() {
    return (
      <div className='search-books'>
        <div className='search-books-bar'>
          <Link to='/'>
            <button className='close-search'>Close</button>
          </Link>
          <div className='search-books-input-wrapper'>
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input onChange={this.handleSearchInputChange} type='text' placeholder='Search by title or author'/>
          </div>
        </div>
        <div className='search-books-results'>
          <ol className='books-grid'>
            {this.state.books.map((book) => {
              const bk = this.props.booksInShelf.find(b => b.id === book.id);
              return (
                <Book
                  key={book.id}
                  book={bk ? bk : book}
                  handleShelfChange={this.props.handleShelfChange}
                />
              );
            })}
          </ol>
        </div>
      </div>
    );
  }
}

SearchBooks.propTypes = {
  booksInShelf: PropTypes.array.isRequired,
  handleShelfChange: PropTypes.func.isRequired
};

export default SearchBooks;
