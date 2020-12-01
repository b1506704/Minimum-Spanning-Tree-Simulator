/* eslint-disable prettier/prettier */
/* eslint-disable import/no-cycle */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../store';

type ConfigureState = {
  isActive: boolean;
  isNodeDelete: boolean;
  isEdgeDelete: boolean;
  isEditNode: boolean;
  isEditEdge: boolean;
  n_id: string;
  n_label: string;
  e_id: string;
  eSource: string;
  eTarget: string;
  eWeight: number,
};
const initialState: ConfigureState = {
  isActive: false,
  isNodeDelete: false,
  isEdgeDelete: false,
  isEditNode: false,
  isEditEdge: false,
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
    editNode: (state, action: PayloadAction<boolean>) => {
      state.isEditNode = action.payload;
    },
    editEdge: (state, action: PayloadAction<boolean>) => {
      state.isEditEdge = action.payload;
    },
    deleteNode: (state, action: PayloadAction<boolean>) => {
      state.isNodeDelete = action.payload;
    },
    deleteEdge: (state, action: PayloadAction<boolean>) => {
      state.isEdgeDelete = action.payload;
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
export const { configureClick, editNode, editEdge, deleteNode, deleteEdge, sendEdgeID, sendSource, sendTarget, sendNodeID, sendNodeLabel, sendWeight } = configureState.actions;

export const SetNewConfigureState = (): AppThunk => {
  return (dispatch) => {
    dispatch(configureClick(false));
  };
};
export const SetNewNodeEditState = (): AppThunk => {
  return (dispatch) => {
    dispatch(editNode(false));
  };
};
export const SetNewEdgeEditState = (): AppThunk => {
  return (dispatch) => {
    dispatch(editEdge(false));
  };
};
export const SetNewNodeDeleteState = (): AppThunk => {
  return (dispatch) => {
    dispatch(deleteNode(false));
  };
};
export const SetNewEdgeDeleteState = (): AppThunk => {
  return (dispatch) => {
    dispatch(deleteEdge(false));
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
export const getNodeEditState = (state: RootState) => state.configureState.isEditNode;
export const getNodeDeleteState = (state: RootState) => state.configureState.isNodeDelete;
export const getEdgeEditState = (state: RootState) => state.configureState.isEditEdge;
export const getEdgeDeleteState = (state: RootState) => state.configureState.isEdgeDelete;
export const getEdgeIdState = (state: RootState) => state.configureState.e_id;
export const getSourceState = (state: RootState) => state.configureState.eSource;
export const getTargetState = (state: RootState) => state.configureState.eTarget;
export const getWeightState = (state: RootState) => state.configureState.eWeight;
export const getNodeIDState = (state: RootState) => state.configureState.n_id;
export const getNodeLabelState = (state: RootState) => state.configureState.n_label;
