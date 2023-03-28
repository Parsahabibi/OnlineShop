import { createSlice } from '@reduxjs/toolkit'

const initialState = { count: 1 }
export const ShoppingAction = createSlice({
  name: 'Shopping',
  initialState,
  reducers: {
    deleteContact: (state, action) => {
      //action => {payload:pass arg}
      const { payload } = action
      const index = state.findIndex(state => state.id === payload)
      state.splice(index, 1)
    },
  },
})

// Action creators are generated for each case reducer function
export const { deleteContact, increment, decrement } = ShoppingAction.actions

export default ShoppingAction.reducer