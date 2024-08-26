import React, { useState } from "react";
import { useDispatch } from "react-redux";
import './SearchBox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync, faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBox = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch({
      type: "SEARCH_CONTACT",
      payload: { searchKeyword },
    });
    setSearchKeyword("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleShowAll = () => {
    dispatch({
      type: "SHOW_ALL_CONTACTS",
    });
  };

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="You can search Contact Information"
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
        onKeyDown={handleKeyDown} 
      />
      <button onClick={handleSearch} className="search-button">
      <FontAwesomeIcon icon={faSearch} />
      </button>
      <button className="show-all-button" onClick={handleShowAll}>
      <FontAwesomeIcon icon={faSync} />
      </button>
    </div>
  );
};

export default SearchBox;
