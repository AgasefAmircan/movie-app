import React, { useState } from "react";
import { changeName } from "../../store/movieSlice";
import { useDispatch } from "react-redux";
import "./SearchBox.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const searchHandler = (e) => {
    setSearch(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
  };
  const buttonHandler = () => {
    fetch(`https://www.omdbapi.com/?apikey=cfdcf37f&s=${search}`)
      .then((response) => response.json())
      .then((res) => {
        if (res?.Search?.length) {
          dispatch(changeName(res.Search));
        }
      });
  };

  return (
    <div className="search-box">
      <form className="search-box__form" onSubmit={submitHandler}>
        <label className="search-box__form-label">
          Search movie by title:
          <input
            value={search}
            type="text"
            className="search-box__form-input"
            placeholder="For example, Shawshank Redemption"
            onChange={searchHandler}
          />
        </label>
        <button
          type="submit"
          className="search-box__form-submit"
          disabled={!search}
          onClick={buttonHandler}
        >
          Search...
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
