import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (s) => { s.value += 1 },
    decrement: (s) => { s.value -= 1 }
  }
})

export const { increment, decrement } = slice.actions
export default slice.reducer
