import React from 'react';
import Draggable from 'react-draggable';
import { useSelector, useDispatch } from 'react-redux';
import {
  configureClick,
  deleteNode,
  editNode,
  deleteEdge,
  editEdge,
  getConfigureState,
  getNodeDeleteState,
  getNodeEditState,
  getEdgeEditState,
  getEdgeDeleteState,
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
  const isNodeEdit = useSelector(getNodeEditState);
  const isNodeDelete = useSelector(getNodeDeleteState);
  const isEdgeEdit = useSelector(getEdgeEditState);
  const isEdgeDelete = useSelector(getEdgeDeleteState);
  const eID = useSelector(getEdgeIdState);
  const eSource = useSelector(getSourceState);
  const eTarget = useSelector(getTargetState);
  const eWeight = useSelector(getWeightState);
  const nID = useSelector(getNodeIDState);
  const nLabel = useSelector(getNodeLabelState);
  function onClear() {
    dispatch(sendEdgeID(''));
    dispatch(sendSource(''));
    dispatch(sendTarget(''));
    dispatch(sendWeight(0));
    dispatch(sendNodeID(''));
    dispatch(sendNodeLabel(''));
  }
  function onDeleteEdge() {
    dispatch(sendEdgeID(eID));
    dispatch(deleteEdge(!isEdgeDelete));
  }
  function onDeleteNode() {
    dispatch(sendNodeID(nID));
    dispatch(deleteNode(!isNodeDelete));
  }
  function onEditEdge() {
    dispatch(sendEdgeID(eID));
    dispatch(sendSource(eSource));
    dispatch(sendTarget(eTarget));
    dispatch(sendWeight(eWeight));
    dispatch(editEdge(!isEdgeEdit));
  }
  function onEditNode() {
    dispatch(sendNodeID(nID));
    dispatch(sendNodeLabel(nLabel));
    dispatch(editNode(!isNodeEdit));
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
            &#x1F5AB;
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
            &#x1F5AB;
          </button>
        </div>
      </div>
    </Draggable>
  );
}
