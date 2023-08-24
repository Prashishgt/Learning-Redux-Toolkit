import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Prashish G.T." },
  { id: "1", name: "Subhashish Jung Shah" },
  { id: "2", name: "Aayush Khatiwada" },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default userSlice.reducer;
