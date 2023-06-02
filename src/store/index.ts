import { configureStore } from '@reduxjs/toolkit';
import globalSlice from './modules/globalModal';
import templateSlice from './modules/templateModel';
import resumeSlice from './modules/resumeModal';
export { actions } from './actions';

export const store = configureStore({
  reducer: {
    global: globalSlice.reducer,
    template: templateSlice.reducer,
    resume: resumeSlice.reducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
