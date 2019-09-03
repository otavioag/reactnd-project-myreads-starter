import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { notification } from 'antd';
import SearchPage from './components/SearchPage';
import LibraryPage from './components/LibraryPage';
import * as BooksAPI from './BooksAPI';
import _ from 'lodash';
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
        book.shelf = shelf;
        const books = this.state.booksInShelf.filter(b => b.id !== book.id).concat(book);
        this.setState((curState) => ({...curState, loading: false, booksInShelf: books}));
        this.showNotification(book.title, shelf);
      });
    });
  };

  showNotification = (title, shelf) => {
    const msg = (shelf === 'none') ? ' removed from library' : ' moved to ' + _.startCase(shelf);

    notification.open({
      message: title + msg,
      style: { top: 55 },
    });
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({booksInShelf: books.filter(book => book.shelf !== 'none')});
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className='app'>
          <Route path='/search' render={() => (
            <SearchPage
              booksInShelf={this.state.booksInShelf}
              handleShelfChange={this.handleShelfChange}
              loading={this.state.loading}
            />
          )} />
          <Route exact path='/' render={() => (
            <LibraryPage 
              booksInShelf={this.state.booksInShelf}
              handleShelfChange={this.handleShelfChange}
              loading={this.state.loading}
            />
          )} />
        </div>
      </BrowserRouter>
    );
  }
}

export default BooksApp;