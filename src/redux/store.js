import {
   persistStore,
   FLUSH,
   REHYDRATE,
   PAUSE,
   PERSIST,
   PURGE,
   REGISTER,
} from 'redux-persist';
import {configureStore} from '@reduxjs/toolkit';
import {userReducer} from './user';

export const store = configureStore({
   reducer: {
      user: userReducer,
   },
   middleware (getDefaultMiddleware) {
      return getDefaultMiddleware({
         serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
         },
      });
   },
});

export const persistor = persistStore(store);