import { createSlice, nanoid } from '@reduxjs/toolkit';

const itemsSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    addItem: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, cost) {
        return {
          payload: {
            id: nanoid(),
            name,
            cost: Number(cost)
          }
        };
      }
    },
    updateItem(state, action) {
      const { id, name, cost } = action.payload;
      const existing = state.find(item => item.id === id);
      if (existing) {
        existing.name = name;
        existing.cost = Number(cost);
      }
    },
    deleteItem(state, action) {
      return state.filter(item => item.id !== action.payload);
    }
  }
});

export const { addItem, updateItem, deleteItem } = itemsSlice.actions;
export default itemsSlice.reducer;
