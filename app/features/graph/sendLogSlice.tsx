/* eslint-disable prettier/prettier */
/* eslint-disable import/no-cycle */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../store';

type LogState = {
  data: string;    
};
const initialState: LogState = {
  data: '',
};
const sendLogState = createSlice({
  name: 'sendLogState',
  initialState,
  reducers: {
    sendLog: (state, action: PayloadAction<string>) => {
        state.data = action.payload;
      },
  },
});
export const { sendLog } = sendLogState.actions;

export const SetNewSendLogState = (): AppThunk => {
    return (dispatch) => {
      dispatch(sendLog(''));
    };
  };

export default sendLogState.reducer;
export const getSendLogState = (state: RootState) => state.sendLogState.data;
