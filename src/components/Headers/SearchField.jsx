import React from "react";
import "./SearchField.css";

const SearchField = ({ setSearchState }) => {
  return (
    <div className="search_container">
      <input
        type="search"
        placeholder="What do you want to watch?"
        onChange={(e) =>
          setSearchState((prev) => ({
            ...prev,
            active: true,
            loading: false,
            value: e.target.value,
          }))
        }
      />
      <i className="fa fa-search" aria-hidden="true"></i>
    </div>
  );
};

export default SearchField;
