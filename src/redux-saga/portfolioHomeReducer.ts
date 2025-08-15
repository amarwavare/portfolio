const { createSlice } = require("@reduxjs/toolkit");
import { portfolioHomeReducer } from "@/global/constants";

const initialState = {
  toggleMenu: false,
};
export const portfolioHomeSlice = createSlice({
  name: portfolioHomeReducer,
  initialState: initialState,
  reducers: {
    fetchUserAction: (state: typeof initialState, action: any) => {
      state.toggleMenu = action.payload.toggleMenu;
    },
  },
});

export const { fetchUserAction } = portfolioHomeSlice.actions;

export default portfolioHomeSlice.reducer;
