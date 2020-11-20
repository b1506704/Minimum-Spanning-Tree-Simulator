/* eslint-disable no-alert */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';
import CytoscapeComponent from 'react-cytoscapejs';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Graph.css';
import {
  buttonClick,
  getButtonState,
} from '../../components/top_menu/buttonSlice';
import {
  getSwitchState,
  switchCheck,
} from '../../components/bottom_menu/switchSlice';
import {
  submitNode,
  submitEdge,
  getNodeSubmitState,
  getEdgeSubmitState,
} from '../../components/bottom_menu/submitSlice';
import * as mst from '../mst_algorithm/mst';
import * as eles from '../mst_algorithm/eles';
import { getNodeID, getNodeLabel } from './nodeSlice';
import { getEdgeSource, getEdgeTarget, getEdgeWeight } from './edgeSlice';
import { sendLog } from './sendLogSlice';
import {
  configureClick,
  // getConfigureState,
  getDeleteState,
  getEditState,
  getNodeLabelState,
  getNodeIDState,
  getEdgeIdState,
  getSourceState,
  getTargetState,
  getWeightState,
  sendEdgeID,
  sendSource,
  sendTarget,
  sendWeight,
  sendNodeID,
  sendNodeLabel,
  editClick,
  deleteClick,
} from '../../components/float_menu/floatConfigureSlice';
import { logClick } from '../../components/float_menu/floatLogSlice';

export default function Graph() {
  const dispatch = useDispatch();
  const { layout } = eles;
  const { elements } = eles;
  const { style } = eles;
  function handleException(_error: string) {
    dispatch(sendLog(`${_error}\n`));
  }
  let cyCallBack: cytoscape.Core;
  const isStartPrim = useSelector(getButtonState);
  const isCheckConnection = useSelector(getSwitchState);
  const isNodeSubmit = useSelector(getNodeSubmitState);
  const isEdgeSubmit = useSelector(getEdgeSubmitState);
  // const isConfigureShow = useSelector(getConfigureState);
  const isDelete = useSelector(getDeleteState);
  const isEdit = useSelector(getEditState);
  const onChangeNodeID = useSelector(getNodeIDState);
  const onChangeNodeLabel = useSelector(getNodeLabelState);
  const onChangeEdgeID = useSelector(getEdgeIdState);
  const newNodeID = useSelector(getNodeID);
  const newNodeLabel = useSelector(getNodeLabel);
  const newEdgeSource = useSelector(getEdgeSource);
  const newEdgeTarget = useSelector(getEdgeTarget);
  const newEdgeWeight = useSelector(getEdgeWeight);
  function FetchData() {
    const currentElements = cyCallBack.elements();
    if (isNodeSubmit === true) {
      mst.AddNode(cyCallBack, newNodeID, newNodeLabel);
      dispatch(submitNode(!isNodeSubmit));
    }
    if (isEdgeSubmit === true) {
      mst.AddEdge(cyCallBack, newEdgeSource, newEdgeTarget, newEdgeWeight);
      dispatch(submitEdge(!isEdgeSubmit));
    }
    if (isDelete === true) {
      currentElements.$id(onChangeNodeID).remove();
      currentElements.$id(onChangeEdgeID).remove();
      dispatch(deleteClick(!isDelete));
    }
    if (isEdit === true) {
      // tapNode.data('label', useSelector(getNodeLabel));
    }
  }
  function onLayoutReady() {
    if (isStartPrim.isClick === true) {
      const logValue = mst.Kruskal(cyCallBack);
      dispatch(sendLog(logValue));
      dispatch(buttonClick(!isStartPrim.isClick));
      dispatch(logClick(true));
    }
    if (isCheckConnection.isCheck === true) {
      const logValue = mst.FindConnectedComponent(cyCallBack);
      dispatch(sendLog(logValue));
      dispatch(logClick(true));
      cyCallBack.elements().unselectify();
      setTimeout(() => {
        dispatch(switchCheck(!isCheckConnection.isCheck));
      }, 3000);
    } else {
      cyCallBack.elements().selectify();
      cyCallBack.elements().unselect();
    }
    // mst.EditEdge(cyCallBack, 25);
  }
  function refreshGraph() {
    cyCallBack.layout(layout).run();
  }
  function onNodeTap() {
    cyCallBack.nodes().on('click', (n) => {
      const tapNode: cytoscape.NodeSingular = n.target;
      dispatch(configureClick(true));
      dispatch(sendNodeID(tapNode.id()));
      dispatch(sendNodeLabel(tapNode.data('label')));
    });
  }
  function onEdgeTap() {
    cyCallBack.edges().on('click', (n) => {
      const tapEdge: cytoscape.EdgeSingular = n.target;
      dispatch(configureClick(true));
      dispatch(sendEdgeID(tapEdge.id()));
      dispatch(sendSource(tapEdge.source().id()));
      dispatch(sendTarget(tapEdge.target().id()));
      dispatch(sendWeight(tapEdge.data('weight')));
    });
  }
  function onEdgeHover() {
    let hoveredEdge: cytoscape.EdgeSingular;
    cyCallBack.edges().on('mouseover', (e) => {
      hoveredEdge = e.target;
      hoveredEdge.select();
    });
    cyCallBack.edges().on('mouseout', (e) => {
      hoveredEdge = e.target;
      hoveredEdge.unselect();
    });
  }
  function onNodeHover() {
    let hoveredNode: cytoscape.EdgeSingular;
    cyCallBack.nodes().on('mouseover', (n) => {
      hoveredNode = n.target;
      hoveredNode.select();
    });
    cyCallBack.nodes().on('mouseout', (n) => {
      hoveredNode = n.target;
      hoveredNode.unselect();
    });
  }
  useEffect(() => {
    try {
      onLayoutReady();
      FetchData();
      onNodeHover();
      onEdgeHover();
      onNodeTap();
      onEdgeTap();
      cyCallBack.one('add', refreshGraph);
      cyCallBack.one('remove', refreshGraph);
    } catch (error) {
      handleException(error);
    }
  });
  return (
    <div className={styles.galaxy}>
      <div className={styles.stars} />
      {/* <div className={styles.twinkling} /> */}
      <CytoscapeComponent
        elements={elements}
        layout={layout}
        className={styles.graph}
        stylesheet={style}
        minZoom={0.5}
        maxZoom={2}
        zoom={0.5}
        // eslint-disable-next-line no-return-assign
        cy={(cy) => (cyCallBack = cy)}
      />
    </div>
  );
}
