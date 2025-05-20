import { createSlice, nanoid } from '@reduxjs/toolkit';

const otherCostsSlice = createSlice({
  name: 'otherCosts',
  initialState: [],
  reducers: {
    addOtherCost: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(description, cost) {
        return {
          payload: {
            id: nanoid(),
            description,
            cost: Number(cost)
          }
        };
      }
    },
    updateOtherCost(state, action) {
      const { id, description, cost } = action.payload;
      const existing = state.find(costItem => costItem.id === id);
      if (existing) {
        existing.description = description;
        existing.cost = Number(cost);
      }
    },
    deleteOtherCost(state, action) {
      return state.filter(costItem => costItem.id !== action.payload);
    }
  }
});

export const { addOtherCost, updateOtherCost, deleteOtherCost } = otherCostsSlice.actions;
export default otherCostsSlice.reducer;
