import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import counterReducer from './slices/counterSlice'

const rootReducer = combineReducers({
  counter: counterReducer
})

export const store = configureStore({ reducer: rootReducer })
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
