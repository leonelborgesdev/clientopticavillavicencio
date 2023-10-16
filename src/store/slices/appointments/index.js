import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const appointmentsSlices = createSlice({
  name: "appointments",
  initialState,
  reducers: {
    setAppointmentList: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { setAppointmentList } = appointmentsSlices.actions;

export default appointmentsSlices.reducer;
