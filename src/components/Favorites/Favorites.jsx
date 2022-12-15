import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeInput, removeSaveList } from "../../store/movieSlice";
import {changeDisabled} from '../../store/movieSlice'
import List from '../List/List'
import "./Favorites.css";

const Favorites = () => {
  const saveList = useSelector(state => state.movieSlice.saveList);
  const input = useSelector(state => state.movieSlice.listInput);
  const [active,setActive]=useState(1);
  const disabled=useSelector(state=>state.movieSlice.isDisabled)
  const dispatch = useDispatch();

  const handleButton = () => {
    let a = document.querySelector('.favorites a')
    a.style.display = "block"
    let button = document.querySelector('.favorites__save')
    button.style.display = 'none'
    localStorage.setItem('movies', JSON.stringify(saveList))
    setActive(!active)
    dispatch(changeDisabled(disabled))
  };
  return (
    <div className="favorites">
      <input placeholder="New Searching" className="favorites__name" onChange={(e)=>dispatch(changeInput(e.target.value))} disabled={!active}/>
      <ul className="favorites__list">
        {saveList.map((item) => {
          return (
            <li key={item.imdbID}>
              {item.Title} ({item.Year})
              <button onClick={()=>dispatch(removeSaveList(item.imdbID))} disabled={!active} type="button">X</button>
            </li>
          );
        })}
      </ul>
      
     { 
        saveList.length && input ? 
     <button type="button" className="favorites__save" onClick={handleButton}>
        Save
      </button> :
      <button type="button" className="favorites__save" onClick={handleButton} disabled>
      Save
    </button>
      }
    </div>
  );
};

export default Favorites;
