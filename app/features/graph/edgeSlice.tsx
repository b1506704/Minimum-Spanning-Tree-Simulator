/* eslint-disable import/no-cycle */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../store';

type EdgeState = {
  e_id: string;
  e_source: string;
  e_target: string;
  e_weight: number;
};

const initialState: EdgeState = {
  e_id: 'test',
  e_source: 'test',
  e_target: 'test',
  e_weight: 0,
};

const newEdge = createSlice({
  name: 'newEdge',
  initialState,
  reducers: {
    addEdgeID: (state, action: PayloadAction<string>) => {
      state.e_id = action.payload;
    },
    addEdgeSource: (state, action: PayloadAction<string>) => {
      state.e_source = action.payload;
    },
    addEdgeTarget: (state, action: PayloadAction<string>) => {
      state.e_target = action.payload;
    },
    addEdgeWeight: (state, action: PayloadAction<number>) => {
      state.e_weight = action.payload;
    },
  },
});
export const {
  addEdgeID,
  addEdgeSource,
  addEdgeTarget,
  addEdgeWeight,
} = newEdge.actions;

export const SetNewEdgeID = (): AppThunk => {
  return (dispatch) => {
    dispatch(addEdgeID(''));
  };
};
export const SetNewEdgeSource = (): AppThunk => {
  return (dispatch) => {
    dispatch(addEdgeSource(''));
  };
};
export const SetNewEdgeTarget = (): AppThunk => {
  return (dispatch) => {
    dispatch(addEdgeTarget(''));
  };
};
export const SetNewEdgeWeight = (): AppThunk => {
  return (dispatch) => {
    dispatch(addEdgeWeight(0));
  };
};

export default newEdge.reducer;

export const getEdgeID = (state: RootState) => state.newEdge.e_id;
export const getEdgeSource = (state: RootState) => state.newEdge.e_source;
export const getEdgeTarget = (state: RootState) => state.newEdge.e_target;
export const getEdgeWeight = (state: RootState) => state.newEdge.e_weight;
