import React from 'react';
import { Route, Link } from 'react-router-dom';
import SearchBooks from './SearchBooks';
import * as BooksAPI from './BooksAPI'
import './App.css';
import BookShelf from './BookShelf';

class BooksApp extends React.Component {

  state = {
    booksInShelf: []
  }

  handleShelfChange = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      let books = this.state.booksInShelf;
      const index = books.findIndex(e => e.id === book.id);
      if (index === -1) {
        books = [...books, book];
      } else {
        books[index].shelf = shelf;
      }
      this.setState({booksInShelf: books});
    });
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({booksInShelf: books.filter(book => book.shelf !== 'none')});
    });
  }

  render() {
    return (
      <div className='app'>
        <Route path='/search' render={() => (
          <SearchBooks booksInShelf={this.state.booksInShelf} handleShelfChange={this.handleShelfChange} />
        )} />
        <Route exact path='/' render={() => (
          <div className='list-books'>
            <div className='list-books-title'>
              <h1>MyReads</h1>
            </div>
            <div className='list-books-content'>
              <BookShelf
                title='Currently Reading'
                shelf='currentlyReading'
                books={this.state.booksInShelf}
                handleShelfChange={this.handleShelfChange}
              />
              <BookShelf
                title='Want to Read'
                shelf='wantToRead'
                books={this.state.booksInShelf}
                handleShelfChange={this.handleShelfChange}
              />
              <BookShelf
                title='Read'
                shelf='read'
                books={this.state.booksInShelf}
                handleShelfChange={this.handleShelfChange}
              />
            </div>
            <div className='open-search'>
              <Link to='/search'
                className='search-book' >
                <button>Add a book</button>
              </Link>
            </div>
          </div>
        )} />
      </div>
    );
  }
}

export default BooksApp;
