import {createSlice} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
   apiLogIn,
   apiLogOut,
   apiRefreshUser,
   apiRegister,
} from '../../api';

const initialState = {
   user: {
      id: null,
      name: null,
      email: null,
      avatar: null,
      middle_name: null,
      surname: null,
   },
   token: null,
   isLoggedIn: false,
   isRefreshing: false,
   type: null,
};

export const userSlice = createSlice({
   name: 'user',
   initialState,
   extraReducers: {
      [apiLogIn.fulfilled] (state, action) {
         state.user.email = action.payload.data.email;
         state.token = action.payload.token;
         state.isLoggedIn = true;
      },
      [apiLogIn.rejected] (state) {
         state.isRefreshing = false;
         state.isLoggedIn = false;
      },

      [apiRegister.fulfilled] (state, action) {
         // state.user = action.payload.user;
         state.token = action.payload.token;
         state.isLoggedIn = true;
      },

      [apiLogOut.fulfilled] (state) {
         state.user = {name: null, email: null};
         state.token = null;
         state.isLoggedIn = false;
         state.isRefreshing = false;
      },

      [apiRefreshUser.pending] (state) {
         state.isRefreshing = true;
      },
      [apiRefreshUser.fulfilled] (state, action) {
         state.user.id = action.payload.id;
         state.user.name = action.payload.name;
         state.user.email = action.payload.email;
         state.user.avatar = action.payload.avatar;
         state.user.middle_name = action.payload.middle_name;
         state.user.surname = action.payload.surname;
         state.type = action.payload.type;
         state.isLoggedIn = true;
         state.isRefreshing = false;
      },
      [apiRefreshUser.rejected] (state) {
         state.isRefreshing = false;
         state.token = null;
         state.isLoggedIn = false;
      },
   },
});

const userConfig = {
   key: 'user',
   storage,
   whitelist: ['token', 'isLoggedIn'],
};

export const userReducer = persistReducer(
   userConfig,
   userSlice.reducer,
);
