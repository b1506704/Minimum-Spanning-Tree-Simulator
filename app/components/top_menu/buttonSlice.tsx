/* eslint-disable prettier/prettier */
/* eslint-disable import/no-cycle */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../store';

type ButtonState = {
  isClick: boolean;
};
const initialState: ButtonState = {
  isClick: false,
};
const buttonState = createSlice({
  name: 'buttonState',
  initialState,
  reducers: {
    buttonClick: (state, action: PayloadAction<boolean>) => {
      state.isClick = action.payload;
    },
  },
});
export const { buttonClick } = buttonState.actions;

export const SetNewButtonState = (): AppThunk => {
  return (dispatch) => {
    dispatch(buttonClick(false));
  };
};

export default buttonState.reducer;
export const getButtonState = (state: RootState) => state.buttonState;
