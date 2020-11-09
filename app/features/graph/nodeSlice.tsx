/* eslint-disable import/no-cycle */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../store';

type NodeState = {
  n_id: string;
  n_label: string;
};

const initialState: NodeState = {
  n_id: 'test',
  n_label: 'Test',
};

const newNode = createSlice({
  name: 'newNode',
  initialState,
  reducers: {
    addNodeID: (state, action: PayloadAction<string>) => {
      state.n_id = action.payload;
    },
    addNodeLabel: (state, action: PayloadAction<string>) => {
      state.n_label = action.payload;
    },
  },
});

export const { addNodeID, addNodeLabel } = newNode.actions;

export const SetNewNodeID = (): AppThunk => {
  return (dispatch) => {
    dispatch(addNodeID(''));
  };
};
export const SetNewNodeLabel = (): AppThunk => {
  return (dispatch) => {
    dispatch(addNodeLabel(''));
  };
};

export default newNode.reducer;

export const getNodeID = (state: RootState) => state.newNode.n_id;
export const getNodeLabel = (state: RootState) => state.newNode.n_label;
