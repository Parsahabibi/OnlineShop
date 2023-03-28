import { configureStore } from '@reduxjs/toolkit'
import ShoppingAction from './slice/Shopping.Reducer'
export const store = configureStore({
  reducer: {
    Shopping : ShoppingAction
  },
})