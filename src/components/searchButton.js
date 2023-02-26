import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '../styles/searchButton.css';
import UseMaterial from './searchInput';
import { CloseButton } from './closeButton';

function SearchField() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSearchClick = () => {
    setIsOpen(true);
  };

  const handleCloseClick = () => {
    setIsOpen(false);
  };
//enables any other developer to add more classes to button if he wish to do so.
  const getSearchButtonClassName = () => {
    const baseClassName = 'search';
    if (isOpen) {
      return `${baseClassName} open`;
    }
    return baseClassName;
  };

  return (
    <div>
      <CloseButton style={{ display: isOpen ? 'block' : 'none' }} onClick={handleCloseClick} />
      <div className={getSearchButtonClassName()} onClick={handleSearchClick}>
        <FontAwesomeIcon size="2x" icon={faSearch} className="searchIcon" style={{ display: isOpen ? 'none' : '' }} />
 
        <UseMaterial className="input" style={{ display: isOpen ? 'block' : 'none' }} />

      
      </div>
    </div>
  );
}

export default SearchField;
