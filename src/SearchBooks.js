import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';

class SearchBooks extends Component {
  state = {
    query: ''
  };

  handleSearchInputChange = (event) => {
    this.setState({query: event.target.value});
    if (event.target.value !== '') {
      BooksAPI.search(event.target.value).then((books) => {
        console.log(books);
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
          <ol className='books-grid'></ol>
          {this.state.query}
        </div>
      </div>
    );
  }
}

export default SearchBooks;
