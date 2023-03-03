import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {CloseButton} from './CloseButton';
import SearchInput from './SearchInput';
import '../styles/searchButton.css';

function SearchField() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSearchClick = () => {
    setIsOpen(true);
  };

  const handleCloseClick = () => {
    setIsOpen(false);
  };

  const getSearchButtonClassName = () => {
    const baseClassName = 'search';
    return isOpen ? `${baseClassName} open` : baseClassName;
  };

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
