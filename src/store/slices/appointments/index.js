import { createSlice } from "@reduxjs/toolkit";
import { api } from "../../api";

const initialState = [];

export const appointmentsSlices = createSlice({
  name: "appointments",
  initialState,
  reducers: {
    setAppointmentList: (state, action) => {
      state.push(action.payload);
    },
    setListAppointmentsList: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setAppointmentList } = appointmentsSlices.actions;

export default appointmentsSlices.reducer;

export const fetchAddAppointment = (appointment) => {
  return async function (dispatch) {
    const response = await fetch(`${api}/cita`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(appointment),
    });
    console.log(response, appointment);
  };
};
