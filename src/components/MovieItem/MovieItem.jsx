import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { addSaveList } from "../../store/movieSlice";
import "./MovieItem.css";

const MovieItem = (props) => {
  const dispatch=useDispatch()
  const { Title, Year, Poster } = props;
  return (
    <article className="movie-item">
      <img className="movie-item__poster" src={Poster} alt={Title} />
      <div className="movie-item__info">
        <h3 className="movie-item__title">
          {Title}&nbsp;({Year})
        </h3>
        <button type="button" className="movie-item__add-button">
          Add to save
        </button>
      </div>
    </article>
  );
};

export default MovieItem;
