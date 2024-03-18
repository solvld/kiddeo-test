import { createSlice } from '@reduxjs/toolkit'

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    oneSelect: [],
    multiSelect: [],
    range: {},
    price: '',
  },
  reducers: {
    setOneSelect: (state, action) => {
      state.oneSelect = action.payload
    },
    setMultiSelect: (state, action) => {
      state.multiSelect = action.payload
    },
    setRange: (state, action) => {
      state.range = action.payload
    },
    setPrice: (state, action) => {
      state.price = action.payload
    }
  },
})

export const { setOneSelect, setMultiSelect, setRange, setPrice } = filtersSlice.actions

export default filtersSlice.reducer
