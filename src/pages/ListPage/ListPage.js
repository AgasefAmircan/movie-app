import React from "react";
import "./ListPage.css";
import { useSelector } from "react-redux";

const ListPage = () => {
  const inputTitle = useSelector((state) => state.movieSlice.listInput);
  const save_list = useSelector((state) => state.movieSlice.saveList);
  const savedList = JSON.parse(localStorage.getItem("movies"));
  const link = "https://www.imdb.com/title/";
  const listTitle = JSON.parse(localStorage.getItem("listTitle"));
  if (savedList.length > 0) {
    return (
      <div className="list-page">
        <h1 className="list-page__title">{listTitle}</h1>
        <ul>
          {savedList.map((item) => {
            return (
              <li key={item.imdbID}>
                <a href={link + item.imdbID} target="_blank">
                  {item.Title} ({item.Year})
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
  return (
    <div className="list-page">
      <h1 className="list-page__title">{listTitle}</h1>
      <ul>
        {save_list.map((item) => {
          return (
            <li key={item.imdbID}>
              <a href={link + item.imdbID} target="_blank">
                {item.Title} ({item.Year})
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListPage;
