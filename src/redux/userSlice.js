import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userContext: {
    name: "",
    email: "",
  },
  cart: [
    {
      id: 0,
      title: "",
      description: "",
      status: true,
      price: 0.0,
    },
  ],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addCurrentUser: (state, action) => {
      const { name, email } = action.payload;

      console.log(email)

      state.userContext.email = email;
      state.userContext.name = name;
    },
    addCart: (state, action) => {
      const data = action.payload;

      state.cart.push(data);
    },
  },
});

export const { addCurrentUser, addCart } = userSlice.actions;
export default userSlice.reducer;
