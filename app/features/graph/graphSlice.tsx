/* eslint-disable import/no-cycle */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../store';

interface ElementState {
  n_id: string;
  n_label: string;
  e_id: string;
  e_source: string;
  e_target: string;
  e_weight: number;
}
const initialState: ElementState = {
  n_id: 'n1',
  n_label: 'Planet1',
  e_id: 'e1',
  e_source: 'n1',
  e_target: 'five',
  e_weight: 30,
};
const newEle = createSlice({
  name: 'addEle',
  // initial Graph state
  initialState,
  reducers: {
    // new or load Graph actions
    addNodeID: (state, action: PayloadAction<string>) => {
      state.n_id = action.payload;
    },
    addNodeLabel: (state, action: PayloadAction<string>) => {
      state.n_label = action.payload;
    },
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
  addNodeID,
  addNodeLabel,
  addEdgeID,
  addEdgeSource,
  addEdgeTarget,
  addEdgeWeight,
} = newEle.actions;

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

export default newEle.reducer;

export const getNodeID = (state: RootState) => state.newNode.n_id;
export const getNodeLabel = (state: RootState) => state.newNode.n_label;
export const getEdgeID = (state: RootState) => state.newNode.e_id;
export const getEdgeSource = (state: RootState) => state.newNode.e_source;
export const getEdgeTarget = (state: RootState) => state.newNode.e_target;
export const getEdgeWeight = (state: RootState) => state.newNode.e_weight;
