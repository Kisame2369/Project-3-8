import { createSlice } from "@reduxjs/toolkit"

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    changeFilters: (state, action) => {
      state.name = action.payload
    },
  },
})

export const { changeFilters } = filtersSlice.actions

export default filtersSlice.reducer