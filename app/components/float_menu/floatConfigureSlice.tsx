/* eslint-disable prettier/prettier */
/* eslint-disable import/no-cycle */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../store';

type ConfigureState = {
  isActive: boolean;
  isDelete: boolean;
  isEdit: boolean;
  n_id: string;
  n_label: string;
  e_id: string;
  eSource: string;
  eTarget: string;
  eWeight: number,
};
const initialState: ConfigureState = {
  isActive: false,
  isDelete: false,
  isEdit: false,
  n_id: '',
  n_label: '',
  e_id: '',
  eSource: '',
  eTarget: '',
  eWeight: 0,
};
const configureState = createSlice({
  name: 'configureState',
  initialState,
  reducers: {
    configureClick: (state, action: PayloadAction<boolean>) => {
      state.isActive = action.payload;
    },
    editClick: (state, action: PayloadAction<boolean>) => {
      state.isEdit = action.payload;
    },
    deleteClick: (state, action: PayloadAction<boolean>) => {
      state.isDelete = action.payload;
    },
    sendNodeID: (state, action: PayloadAction<string>) => {
      state.n_id = action.payload;
    },
    sendNodeLabel: (state, action: PayloadAction<string>) => {
      state.n_label = action.payload;
    },
    sendEdgeID: (state, action: PayloadAction<string>) => {
      state.e_id = action.payload;
    },
    sendSource: (state, action: PayloadAction<string>) => {
      state.eSource = action.payload;
    },
    sendTarget: (state, action: PayloadAction<string>) => {
      state.eTarget = action.payload;
    },
    sendWeight: (state, action: PayloadAction<number>) => {
      state.eWeight = action.payload;
    },
  },
});
export const { configureClick, editClick, deleteClick, sendEdgeID, sendSource, sendTarget, sendNodeID, sendNodeLabel, sendWeight } = configureState.actions;

export const SetNewConfigureState = (): AppThunk => {
  return (dispatch) => {
    dispatch(configureClick(false));
  };
};
export const SetNewEditState = (): AppThunk => {
  return (dispatch) => {
    dispatch(editClick(false));
  };
};
export const SetNewDeleteState = (): AppThunk => {
  return (dispatch) => {
    dispatch(deleteClick(false));
  };
};
export const SetNewEdgeIDState = (): AppThunk => {
  return (dispatch) => {
    dispatch(sendEdgeID(''));
  };
};
export const SetNewSourceState = (): AppThunk => {
  return (dispatch) => {
    dispatch(sendSource(''));
  };
};
export const SetNewTargetState = (): AppThunk => {
  return (dispatch) => {
    dispatch(sendTarget(''));
  };
};
export const SetNewWeightState = (): AppThunk => {
  return (dispatch) => {
    dispatch(sendWeight(0));
  };
};
export const SetNewNodeIDState = (): AppThunk => {
  return (dispatch) => {
    dispatch(sendNodeID(''));
  };
};
export const SetNewNodeLabelState = (): AppThunk => {
  return (dispatch) => {
    dispatch(sendNodeLabel(''));
  };
};

export default configureState.reducer;
export const getConfigureState = (state: RootState) => state.configureState.isActive;
export const getEditState = (state: RootState) => state.configureState.isEdit;
export const getDeleteState = (state: RootState) => state.configureState.isDelete;
export const getEdgeIdState = (state: RootState) => state.configureState.e_id;
export const getSourceState = (state: RootState) => state.configureState.eSource;
export const getTargetState = (state: RootState) => state.configureState.eTarget;
export const getWeightState = (state: RootState) => state.configureState.eWeight;
export const getNodeIDState = (state: RootState) => state.configureState.n_id;
export const getNodeLabelState = (state: RootState) => state.configureState.n_label;
