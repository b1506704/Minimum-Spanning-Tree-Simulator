import { createSlice } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import { AppThunk, RootState } from '../../store';

const modeSelection = createSlice({
  name: 'modeSelection',
  // initial Graph state
  initialState: { value: 'null' },
  reducers: {
    // new or load Graph actions
    newG: (state) => {
      state.value = 'newG';
    },
    loadG: (state) => {
      state.value = 'loadG';
    },
  },
});

export const { newG, loadG } = modeSelection.actions;

export const isNewGSelected = (): AppThunk => {
  return (dispatch, getState) => {
    const state = getState();
    if (state.modeSelection.value === 'newG') {
      return;
    }
    dispatch(newG());
  };
};

export const isLoadGSelected = (): AppThunk => {
  return (dispatch, getState) => {
    const state = getState();
    if (state.modeSelection.value === 'loadG') {
      return;
    }
    dispatch(loadG());
  };
};

export default modeSelection.reducer;

export const selectMode = (state: RootState) => state.modeSelection.value;
