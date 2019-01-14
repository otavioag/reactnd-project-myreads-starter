import React from 'react';
import PropTypes from 'prop-types';

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

BookMenu.propTypes = {
  book: PropTypes.object.isRequired,
  shelf: PropTypes.string.isRequired,
  handleShelfChange: PropTypes.func.isRequired
};

export default BookMenu;