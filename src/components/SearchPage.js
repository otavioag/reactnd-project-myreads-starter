import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Spin } from 'antd';
import PropTypes from 'prop-types';
import * as BooksAPI from '../BooksAPI';
import Book from './book/Book';

class SearchPage extends Component {
  state = {
    query: '',
    books:[],
    searching: false
  };

  handleSearchInputChange = (event) => {
    const q = event.target.value;
    this.setState((curState) => ({...curState, searching: q !== '', query: q, books: []}), () => {
      if (q !== '') {
        BooksAPI.search(q).then((books) => {
          this.setState((curState) => {
            if (curState.query === q) {
              return {
                ...curState,
                searching: false,
                books: Array.isArray(books)
                    ? books.map((book) => {
                      const bk = this.props.booksInShelf.find(b => b.id === book.id);
                      return (
                        <Book
                          key={book.id}
                          book={bk ? bk : book}
                          handleShelfChange={this.props.handleShelfChange}
                        />
                      );
                    })
                    : []
              };
            } else {
              return curState;
            }
          });
        });
      }
    });
  };

  render() {
    return (
      <Spin
        spinning={this.state.searching || this.props.loading}
        size='large'
        tip={this.state.searching ? 'Searching...' : 'Loading...'}
      >
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
              {this.state.books}
            </ol>
          </div>
        </div>
      </Spin>
    );
  }
}

SearchPage.propTypes = {
  booksInShelf: PropTypes.array.isRequired,
  handleShelfChange: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
};

export default SearchPage;
