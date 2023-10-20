import { createSlice } from "@reduxjs/toolkit";
import { api } from "../../api";

const initialState = { list: [] };

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

export const { setAppointmentList, setListAppointmentsList } =
  appointmentsSlices.actions;

export default appointmentsSlices.reducer;

export const getAllAppointments = () => {
  return async function (dispatch) {
    const response = await fetch(`${api}/cita`);
    if (response) {
      const data = await response.json();
      console.log(data);
      dispatch(setListAppointmentsList(data.listaCitas));
    }
  };
};

export const fetchAddAppointment = (appointment) => {
  return async function (dispatch) {
    const response = await fetch(`${api}/cita`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(appointment),
    });
    // console.log(response, appointment);
  };
};
