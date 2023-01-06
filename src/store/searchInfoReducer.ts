import { createSlice } from '@reduxjs/toolkit';
import { ConInfo } from '../types';

const initialize = () => {
  const curD = new Date();
    const defVal: ConInfo = {
      from: '',
      to: '',
      date: curD,
      // day: curD.getDate(),
      // month: curD.getMonth() + 1,
      // year: curD.getFullYear(),
      // hour: curD.getHours(),
      // minute: curD.getMinutes(),
    };
    return defVal;
}

export const searchInfoSlice = createSlice({
  name: 'searchInfo',
  initialState: initialize(),
  reducers: {
    setSearchInfo: (state: any, action) => {
      state.searchInfo = action.payload;
    },
    setFrom: (state: any, action) => {
      return { ...state, from: action.payload };
    },
    setTo: (state: any, action) => {
      return { ...state, to: action.payload };
    },
  },
});
//export const { setSearchInfo } =  searchInfoSlice.actions;

export const { setSearchInfo, setFrom, setTo } = searchInfoSlice.actions;

export default searchInfoSlice.reducer;
