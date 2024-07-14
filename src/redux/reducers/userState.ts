import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  token: null,
  authUser: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      return {
        ...state,
        authUser: action.payload
      };
    },
    setAuthToken: (state, action) => {
      return {...state, token: action.payload};
    },
  },
});

// Action creators are generated for each case reducer function
export const {
    setUserInfo,
    setAuthToken
} = userSlice.actions;
export default userSlice.reducer;
