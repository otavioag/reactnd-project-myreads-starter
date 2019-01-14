import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Spin, notification } from 'antd';
import SearchBooks from './SearchBooks';
import BookShelf from './BookShelf';
import * as BooksAPI from './BooksAPI'
import 'antd/dist/antd.css';
import './App.css';

class BooksApp extends React.Component {

  state = {
    booksInShelf: [],
    loading: false
  }

  handleShelfChange = (book, shelf) => {
    this.setState((curState) => ({...curState, loading: true}), () => {
      BooksAPI.update(book, shelf).then(() => {
        let books = this.state.booksInShelf;
        const index = books.findIndex(e => e.id === book.id);
        if (index === -1) {
          book.shelf = shelf;
          books = [...books, book];
        } else {
          books[index].shelf = shelf;
        }
        this.setState((curState) => ({...curState, loading:false, booksInShelf: books}));
        if (shelf === 'none') {
          notification.open({message: book.title + ' removed from library' });
        } else {
          let sh;
          switch (shelf) {
            case 'currentlyReading':
              sh = 'Currently Reading';
              break;
            case 'wantToRead':
              sh = 'Want to Read';
              break;
            case 'read':
              sh = 'Read';
              break;
          }
          notification.open({message: book.title + ' moved to ' + sh, style: {top: 55}});
        }
      });
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
          <SearchBooks
            booksInShelf={this.state.booksInShelf}
            handleShelfChange={this.handleShelfChange}
            loading={this.state.loading}
          />
        )} />
        <Route exact path='/' render={() => (
          <div className='list-books'>
            <div className='list-books-title'>
              <h1>MyReads</h1>
            </div>
            <Spin spinning={this.state.loading} size='large' tip='Loading...' >
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
            </Spin>
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
