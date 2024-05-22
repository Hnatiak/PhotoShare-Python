import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

import { authReducer } from './auth/authSlice';

const persistConfig = {
  key: 'root',
  storage,
  // whitelist: ['auth'],
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    auth: authReducer,
  })
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;



// import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import {
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist/es/constants';
// import { authReducer } from './auth/authSlice';

// const persistConfig = {
//   key: 'root',
//   storage,
//   // whitelist: ['auth'],
// };

// const persistedReducer = persistReducer(
//   persistConfig,
//   combineReducers({
//     auth: authReducer,
//   })
// );

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);

// export default store;