import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState:{
    user:null,
  },

  reducers: {
    increment: (state,action) => {
      state.user=action.payload;
    },
    logout:(state)=>{
      state.user=null
    },
  },
});

export const {login,logout } = userSlice.actions;

export const selectUse = (state) => state.user.value;

export default userSlice.reducer;
  