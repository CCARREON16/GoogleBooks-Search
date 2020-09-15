import React from "react";

function SearchForm(props) {
  return (
    <div id="searchContainer">
      <h3>React Book Search</h3>
      <form id="bookSearch">
        <label htmlFor="bookInput" form="bookSearch">
          Type your favorite book:
        </label>
        <br></br>
        <input
          type="text"
          name="bookInput"
          form="bookSearch"
          onChange={(evt) => props.handleFormChange(evt)}
          placeholder="Book Title"
          required
        />
        <br></br>
        <button type="submit" onClick={(evt) => props.handleSearchClick(evt)}>Search</button>
      </form>
    </div>
  );
}

export default SearchForm;