/* eslint-disable prettier/prettier */
/* eslint-disable import/no-cycle */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../store';

type SubmitState = {
  isNodeSubmit: boolean;
  isEdgeSubmit: boolean;
};
const initialState: SubmitState = {
  isNodeSubmit: false,
  isEdgeSubmit: false,
};
const submitState = createSlice({
  name: 'submitState',
  initialState,
  reducers: {
    submitNode: (state, action: PayloadAction<boolean>) => {
      state.isNodeSubmit = action.payload;
    },
    submitEdge: (state, action: PayloadAction<boolean>) => {
      state.isEdgeSubmit = action.payload;
    },
  },
});
export const { submitNode, submitEdge } = submitState.actions;

export const SetNewNodeSubmitState = (): AppThunk => {
  return (dispatch) => {
    dispatch(submitNode(false));
  };
};
export const SetNewEdgeSubmitState = (): AppThunk => {
  return (dispatch) => {
    dispatch(submitEdge(false));
  };
};

export default submitState.reducer;
export const getNodeSubmitState = (state: RootState) => state.submitState.isNodeSubmit;
export const getEdgeSubmitState = (state: RootState) => state.submitState.isEdgeSubmit;
