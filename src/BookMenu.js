import React from 'react';

const BookMenu = (props) => (
  <div className='book-shelf-changer'>
    <select value={props.shelf} onChange={(e) => {
      e.preventDefault();
      props.handleShelfChange(props.book, e.target.value);
    }}>
      <option value='move' disabled>Move to...</option>
      <option value='currentlyReading'>Currently Reading</option>
      <option value='wantToRead'>Want to Read</option>
      <option value='read'>Read</option>
      <option value='none'>None</option>
    </select>
  </div>
);

export default BookMenu;