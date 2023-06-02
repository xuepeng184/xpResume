import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  appName: '简历制作平台'
};

const globalSlice = createSlice({
  name: 'globalReducer',
  initialState,
  reducers: {
    clear: () => {
      return initialState;
    }
  }
});

export default globalSlice;
