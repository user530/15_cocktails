import React from "react";
import { useAppContext } from "../context";

const SearchBar = () => {
  const { setSearchTerm } = useAppContext();
  const searchValue = React.useRef(null);

  const handleSubmit = (e) => e.preventDefault();

  const findCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="cocktailName">Search your cocktail</label>
          <input
            type="text"
            name="cocktailName"
            id="name"
            ref={searchValue}
            onChange={findCocktail}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchBar;
