import React from "react";

const SearchBar = () => (
  <section className="section search">
    <form className="search-form">
      <div className="form-control">
        <label htmlFor="cocktailName">Search your cocktail</label>
        <input type="text" name="cocktailName" id="name" />
      </div>
    </form>
  </section>
);

export default SearchBar;
