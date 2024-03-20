// aiDataSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AiData } from '../../types';

interface AiDataState {
  data: AiData | null;
}

const initialState: AiDataState = {
  data: null,
};

const aiDataSlice = createSlice({
  name: 'aiData',
  initialState,
  reducers: {
    setAiData(state, action: PayloadAction<AiData>) {
      state.data = action.payload;
    },
  },
});

export const { setAiData } = aiDataSlice.actions;

export default aiDataSlice.reducer;


