/* eslint-disable prettier/prettier */
/* eslint-disable import/no-cycle */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../store';

type SwitchState = {
  isCheck: boolean;
};
const initialState: SwitchState = {
  isCheck: false,
};
const switchState = createSlice({
  name: 'switchState',
  initialState,
  reducers: {
    switchCheck: (state, action: PayloadAction<boolean>) => {
      state.isCheck = action.payload;
    },
  },
});
export const { switchCheck } = switchState.actions;

export const SetNewSwitchState = (): AppThunk => {
  return (dispatch) => {
    dispatch(switchCheck(false));
  };
};

export default switchState.reducer;
export const getSwitchState = (state: RootState) => state.switchState;
