import React from 'react';
import Draggable from 'react-draggable';
import { useSelector, useDispatch } from 'react-redux';
import {
  configureClick,
  deleteClick,
  editClick,
  getConfigureState,
  getDeleteState,
  getEditState,
  getEdgeIdState,
  getNodeIDState,
  getNodeLabelState,
  getSourceState,
  getTargetState,
  getWeightState,
  sendEdgeID,
  sendSource,
  sendTarget,
  sendWeight,
  sendNodeID,
  sendNodeLabel,
} from './floatConfigureSlice';
import styles from './FloatConfigure.css';

export default function FloatConfigure() {
  const dispatch = useDispatch();
  const isConfigureShow = useSelector(getConfigureState);
  const isEdit = useSelector(getEditState);
  const isDelete = useSelector(getDeleteState);
  const eID = useSelector(getEdgeIdState);
  const eSource = useSelector(getSourceState);
  const eTarget = useSelector(getTargetState);
  const eWeight = useSelector(getWeightState);
  const nID = useSelector(getNodeIDState);
  const nLabel = useSelector(getNodeLabelState);
  function onClear() {
    //
  }
  function onDeleteEdge() {
    dispatch(sendEdgeID(eID));
    dispatch(deleteClick(!isDelete));
  }
  function onDeleteNode() {
    dispatch(sendNodeID(nID));
    dispatch(deleteClick(!isDelete));
  }
  function onEditEdge() {
    dispatch(sendEdgeID(eID));
    dispatch(sendSource(eSource));
    dispatch(sendTarget(eTarget));
    dispatch(sendWeight(eWeight));
    dispatch(editClick(!isEdit));
  }
  function onEditNode() {
    dispatch(sendNodeID(nID));
    dispatch(sendNodeLabel(nLabel));
    dispatch(editClick(!isEdit));
  }
  function onShowConfigure() {
    dispatch(configureClick(!isConfigureShow));
  }
  return (
    <Draggable bounds="html">
      <div id="menu" className={styles.container_menu}>
        <div className={styles.title_bar}>
          <button type="button" className={styles.clear_btn} onFocus={onClear}>
            &#x2326;
          </button>
          Editor
          <button
            type="button"
            className={styles.exit_btn}
            onFocus={onShowConfigure}
          >
            &#x2716;
          </button>
        </div>
        <div className={styles.edge_panel}>
          <span> EdgeID </span>
          <input type="text" value={eID} readOnly />
          <span> Source </span>
          <input
            type="text"
            value={eSource}
            onChange={(e) => {
              dispatch(sendSource(e.target.value));
            }}
          />
          <span> Target </span>
          <input
            type="text"
            value={eTarget}
            onChange={(e) => {
              dispatch(sendTarget(e.target.value));
            }}
          />
          <span> Weight </span>
          <input
            type="text"
            value={eWeight}
            onChange={(e) => {
              dispatch(sendWeight(Number(e.target.value)));
            }}
          />
          <button type="button" onFocus={onDeleteEdge}>
            &#x2716;
          </button>
          <button type="button" onFocus={onEditEdge}>
            &#x2716;
          </button>
        </div>
        <div className={styles.node_panel}>
          <span> NodeID </span>
          <input type="text" value={nID} readOnly />
          <span> NodeLabel </span>
          <input
            type="text"
            value={nLabel}
            onChange={(e) => {
              dispatch(sendNodeLabel(e.target.value));
            }}
          />
          <button type="button" onFocus={onDeleteNode}>
            &#x2716;
          </button>
          <button type="button" onFocus={onEditNode}>
            &#x2716;
          </button>
        </div>
      </div>
    </Draggable>
  );
}
