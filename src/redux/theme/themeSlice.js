import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 'light',
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
        state.value = state.value === 'light' ? 'dark' : 'light'
    }
  },
})

// Action creators are generated for each case reducer function
export const { toggleTheme } = themeSlice.actions

export default themeSlice.reducer