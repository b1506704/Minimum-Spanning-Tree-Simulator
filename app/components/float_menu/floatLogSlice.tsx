/* eslint-disable prettier/prettier */
/* eslint-disable import/no-cycle */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../store';

type LogState = {
  isClick: boolean;
};
const initialState: LogState = {
  isClick: false,
};
const logState = createSlice({
  name: 'buttonState',
  initialState,
  reducers: {
    logClick: (state, action: PayloadAction<boolean>) => {
      state.isClick = action.payload;
    },
  },
});
export const { logClick } = logState.actions;

export const SetNewButtonState = (): AppThunk => {
  return (dispatch) => {
    dispatch(logClick(false));
  };
};

export default logState.reducer;
export const getLogState = (state: RootState) => state.logState.isClick;
