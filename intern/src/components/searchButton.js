import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {CloseButton} from './CloseButton';
import SearchInput from './SearchInput';
import '../styles/searchButton.css';
//This function defines a SearchField component that allows the user to toggle the display of a search input field by clicking on a search button.
function SearchField() {
  // Declare state variable to determine whether search input field is open or closed
  const [isOpen, setIsOpen] = useState(false);
  // Function to handle search button click and open search input field
  const handleSearchClick = () => {
    setIsOpen(true);
  };
  // Function to handle close button click and close search input field
  const handleCloseClick = () => {
    setIsOpen(false);
  };
  // Function to get the appropriate class name for the search button based on whether the search input field is open or closed
  const getSearchButtonClassName = () => {
    const baseClassName = 'search';
    return isOpen ? `${baseClassName} open` : baseClassName;
  };
  // Return a div containing a close button, a search button, and a search input field that is only displayed when the search button is clicked
  return (
    <div>
      <CloseButton style={{ display: isOpen ? 'block' : 'none' }} onClick={handleCloseClick} />
      <div className={getSearchButtonClassName()} onClick={handleSearchClick}>
        <FontAwesomeIcon size="2x" icon={faSearch} className="searchIcon" style={{ display: isOpen ? 'none' : '' }} />
        <SearchInput className="input" style={{ display: isOpen ? 'block' : 'none' }} />
      </div>
    </div>
  );
}

export default SearchField;
