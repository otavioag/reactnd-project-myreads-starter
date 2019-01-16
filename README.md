# MyReads Project

This project was developed for Udacity's React Developer Nanodegree Program, based on the starter template provided.


## TL;DR

* install all project dependencies with `npm install`
* start the development server with `npm start`
* run tests with `npm run test` or `npm run test:coverage`

## MyReads

The MyReads application is composed of 2 pages, a LibraryPage `/` and a SearchPage `/search`.

### LibraryPage

In the LibraryPage there are 3 shelfs, with zero or more books in each.

* Currently Reading
* Want to Read
* Read

It's also possible to go to the SearchPage by clicking on the lower right + button.

### SearchPage

In the SearchPage, there's a search field, that calls the provided API and retrieves the books, that appears under the search field.
There is a button to go back to the LibraryPage on the left of the search field.

### Book

Each book (in any page) has a button that opens a dropdown menu, showing the current shelf, where it's possible to change the shelf of a book, or remove the book from shelf (none).

### Extras

* Uses Ant Design
* Loading spinners while searching and changing a book shelf
* Notification when a book is removed from shelf, or moved to another shelf
* Tests with Jest and Enzyme

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.