import { configureStore } from '@reduxjs/toolkit'
import {baseApi} from './api/baseApi'
import authReducer from './features/auth/authSlice'
import supplyReducer from './features/supply/supplySlice'
import donationReducer from './features/donations/donationSlice'
import opinionReducer from './features/opinions/opinionSlice'
import storage from 'redux-persist/lib/storage'
import { 
  persistReducer, 
  persistStore, 
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist'

const persistConfig = {
  key: 'auth',
  storage,
}

const persistedAuthReducer = persistReducer(persistConfig, authReducer)

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath] : baseApi.reducer,
    auth: persistedAuthReducer,
    supplies: supplyReducer,
    donations: donationReducer,
    opinions: opinionReducer
  },
  middleware : (getDefaultMiddlewares) => getDefaultMiddlewares({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(baseApi.middleware)
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


export const persistor = persistStore(store)