import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    cil_od_lejos: "2",
    cil_oi_lejos: "5",
    doctor: "Dalma",
    eje_od_lejos: "3",
    eje_oi_lejos: "6",
    esf_od_lejos: "1",
    esf_oi_lejos: "4",
    fecha: "01/01/2023",
    id_client: 3,
  },
  {
    id: 2,
    cil_od_lejos: "8",
    cil_oi_lejos: "11",
    doctor: "Angela",
    eje_od_lejos: "9",
    eje_oi_lejos: "12",
    esf_od_lejos: "7",
    esf_oi_lejos: "10",
    fecha: "05/05/2023",
    id_client: 3,
  },
  {
    id: 3,
    cil_od_lejos: "20",
    cil_oi_lejos: "21",
    doctor: "Dalma",
    eje_od_lejos: "22",
    eje_oi_lejos: "23",
    esf_od_lejos: "24",
    esf_oi_lejos: "25",
    fecha: "02/02/2023",
    id_client: 1,
  },
];

export const recipesSlices = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    setRecipeList: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { setRecipeList } = recipesSlices.actions;

export default recipesSlices.reducer;
