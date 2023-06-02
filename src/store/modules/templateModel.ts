import { createSlice } from '@reduxjs/toolkit';

interface TemplateState {
  resumeToolbarKeys: any[];
}

const initialState: TemplateState = {
  resumeToolbarKeys: []
};

const templateSlice = createSlice({
  name: 'templateReducer',
  initialState,
  reducers: {
    setToolbarKeys: (state, action) => {
      console.log(action);
      state.resumeToolbarKeys = [...action.payload];
    }
  }
});

export default templateSlice;
