import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  name: "",
  isLoggedIn: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.isLoggedIn = true;
    },
    setLogout: (state, action) => {
      (state.id = ""), (state.name = ""), (state.isLoggedIn = false);
      sessionStorage.clear();
    },
  },
});

export const { setLogin, setLogout } = loginSlice.actions;
export default loginSlice.reducer;
