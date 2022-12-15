import {createSlice } from '@reduxjs/toolkit'


const initialState = {
  value: [],
};

 export  const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    saveList: [],
    listInput:'',
    isDisabled:false
  },

  reducers: {
    changeName: (state, { payload }) => {
      state.movies = payload;
    },
    addSaveList: (state, { payload }) => {
      if (
        state.saveList.map((item) => item.imdbID).includes(payload.imdbID) ===
        false
      ) {
        state.saveList = [...state.saveList, payload];
      }
    },
    removeSaveList: (state, { payload }) => {
      state.saveList = state.saveList.filter((item) => item.imdbID !== payload);
    },
    changeDisabled:(state,{payload})=>{
      state.isDisabled=!payload
    },
    changeInput:(state,{payload})=>{
      state.listInput=payload
    }
  },
});

export const { changeName,changeDisabled,changeInput, addSaveList, removeSaveList } = movieSlice.actions;
export default movieSlice.reducer;
