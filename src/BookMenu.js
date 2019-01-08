import React from 'react';

const BookMenu = (props) => (
  <div className='book-shelf-changer'>
    <select>
      <option value='move' disabled>Move to...</option>
      <option value='currentlyReading'>Currently Reading</option>
      <option value='wantToRead'>Want to Read</option>
      <option value='read'>Read</option>
      <option value='none'>None</option>
      <option value='shelf'>{props.shelf}</option>
    </select>
  </div>
);

export default BookMenu;