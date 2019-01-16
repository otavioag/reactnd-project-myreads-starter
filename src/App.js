import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { notification } from 'antd';
import SearchPage from './components/SearchPage';
import LibraryPage from './components/LibraryPage';
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
        this.showNotification(book.title, shelf);
      });
    });
  };

  showNotification = (title, shelf) => {
    if (shelf === 'none') {
      notification.open({message: title + ' removed from library', style: {top: 55}});
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
        default:
          break;
      }
      notification.open({message: title + ' moved to ' + sh, style: {top: 55}});
    }
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