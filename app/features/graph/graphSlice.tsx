/* eslint-disable import/no-cycle */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../store';

type GraphState = {
  elements: string;
  isExport: boolean;
  isImport: boolean;
  isRefresh: boolean;
};
const initialState: GraphState = {
  elements: '',
  isExport: false,
  isImport: false,
  isRefresh: false,
};

const newGraph = createSlice({
  name: 'newGraph',
  initialState,
  reducers: {
    setGraph: (state, action: PayloadAction<string>) => {
      state.elements = action.payload;
    },
    setImportGraph: (state, action: PayloadAction<boolean>) => {
      state.isImport = action.payload;
    },
    setExportGraph: (state, action: PayloadAction<boolean>) => {
      state.isExport = action.payload;
    },
    setRefreshGraph: (state, action: PayloadAction<boolean>) => {
      state.isRefresh = action.payload;
    },
  },
});
export const {
  setGraph,
  setImportGraph,
  setExportGraph,
  setRefreshGraph,
} = newGraph.actions;

export const SetNewGraph = (): AppThunk => {
  return (dispatch) => {
    dispatch(setGraph(''));
  };
};
export const SetIsImportGraph = (): AppThunk => {
  return (dispatch) => {
    dispatch(setImportGraph(false));
  };
};
export const SetIsExportGraph = (): AppThunk => {
  return (dispatch) => {
    dispatch(setExportGraph(false));
  };
};
export const SetIsRefreshGraph = (): AppThunk => {
  return (dispatch) => {
    dispatch(setRefreshGraph(false));
  };
};

export default newGraph.reducer;

export const getGraph = (state: RootState) => state.graphState.elements;
export const getImportGraphState = (state: RootState) =>
  state.graphState.isImport;
export const getExportGraphState = (state: RootState) =>
  state.graphState.isExport;
export const getRefreshGraphState = (state: RootState) =>
  state.graphState.isRefresh;
