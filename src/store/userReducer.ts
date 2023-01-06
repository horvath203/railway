import { createSlice } from '@reduxjs/toolkit';
import { UserData } from '../types';
import userData from '../mock-data/user.json';

const initialState = userData;

export const userSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    // @ts-ignore
    setName: (state: UserData | null, action) => {
      return {
        ...state,
        passengerInformation: state?.passengerInformation?.map((u) =>
          u.id === action.payload.id ? { ...u, name: action.payload.name } : u,
        ),
      };
    },
    // @ts-ignore
    setSurname: (state: UserData | null, action) => {
      return {
        ...state,
        passengerInformation: state?.passengerInformation?.map((u) =>
          u.id === action.payload.id
            ? { ...u, surname: action.payload.surname }
            : u,
        ),
      };
    },
    // @ts-ignore
    setGroupAge: (state: UserData | null, action) => {
      return {
        ...state,
        passengerInformation: state?.passengerInformation?.map((u) =>
          u.id === action.payload.id
            ? { ...u, passengerGroup: action.payload.groupAge }
            : u,
        ),
      };
    },
    // @ts-ignore
    setDiscount: (state: UserData | null, action) => {
      return {
        ...state,
        passengerInformation: state?.passengerInformation?.map((u) =>
          u.id === action.payload.id
            ? { ...u, discount: action.payload.discount }
            : u,
        ),
      };
    },
    // @ts-ignore
    setEmail: (state: UserData | null, action) => {
      return { ...state, email: action.payload };
    },
    // @ts-ignore
    setRegistrationNumber: (state: UserData | null, action) => {
      return {
        ...state,
        passengerInformation: state?.passengerInformation?.map((u) =>
          u.id === action.payload.id
            ? { ...u, registrationNumber: action.payload.number }
            : u,
        ),
      };
    },
    // @ts-ignore
    addPassenger: (state: UserData, action) => {
      state.passengerInformation.push(action.payload);
    },
    // @ts-ignore
    removePassenger: (state: UserData, action) => {
      state.passengerInformation = state.passengerInformation.filter(
        (passenger) => passenger.id !== action.payload,
      );
    },
  },
});

export const {
  setName,
  setSurname,
  setGroupAge,
  setDiscount,
  setEmail,
  setRegistrationNumber,
  addPassenger,
  removePassenger,
} = userSlice.actions;

export default userSlice.reducer;
