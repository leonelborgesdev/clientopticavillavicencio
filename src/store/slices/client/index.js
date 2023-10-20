import { createSlice } from "@reduxjs/toolkit";
import { api } from "../../api";

const initialState = { obj: {} };

export const clientSlice = createSlice({
  name: "client",
  initialState,
  reducers: {
    setClientObj: (state, action) => {
      state.obj = action.payload;
      console.log(action.payload);
    },
  },
});

export const { setClientObj } = clientSlice.actions;

export const fetchAddClient = (client) => {
  return async function (dispatch) {
    const response = await fetch(`${api}/cliente`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(client),
    });
    if (response) {
      dispatch(setClientObj(client));
    }
  };
};

export default clientSlice.reducer;
