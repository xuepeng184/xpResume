import globalSlice from './modules/globalModal';
import templateSlice from './modules/templateModel';
import resumeSlice from './modules/resumeModal';

export const actions = {
  globalSetting: globalSlice.actions,
  templateSetting: templateSlice.actions,
  resumeSetting: resumeSlice.actions
};
