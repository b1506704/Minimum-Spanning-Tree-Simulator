/* eslint-disable no-alert */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';
import CytoscapeComponent from 'react-cytoscapejs';
import { useSelector, useDispatch } from 'react-redux';
// import cytoscape from 'cytoscape';
import { saveAs } from 'file-saver';
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
  getNodeDeleteState,
  getNodeEditState,
  getEdgeDeleteState,
  getEdgeEditState,
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
  editNode,
  deleteNode,
  editEdge,
  deleteEdge,
} from '../../components/float_menu/floatConfigureSlice';
import { logClick } from '../../components/float_menu/floatLogSlice';
import {
  setExportGraph,
  getExportGraphState,
  setGraph,
  getRefreshGraphState,
  setRefreshGraph,
} from './graphSlice';

export default function Graph() {
  const dispatch = useDispatch();
  const { layout } = eles;
  const { elements } = eles;
  const { style } = eles;
  function handleException(_error: string) {
    dispatch(sendLog(`${_error}\n`));
  }
  let cyCallBack: cytoscape.Core;
  // graph function state
  const isStartPrim = useSelector(getButtonState);
  const isCheckConnection = useSelector(getSwitchState);
  const isExport = useSelector(getExportGraphState);
  const isRefresh = useSelector(getRefreshGraphState);
  // add edge state
  const newNodeID = useSelector(getNodeID);
  const newNodeLabel = useSelector(getNodeLabel);
  const newEdgeSource = useSelector(getEdgeSource);
  const newEdgeTarget = useSelector(getEdgeTarget);
  const newEdgeWeight = useSelector(getEdgeWeight);
  const isNodeSubmit = useSelector(getNodeSubmitState);
  const isEdgeSubmit = useSelector(getEdgeSubmitState);
  // edit elements state
  const isNodeDelete = useSelector(getNodeDeleteState);
  const isNodeEdit = useSelector(getNodeEditState);
  const isEdgeDelete = useSelector(getEdgeDeleteState);
  const isEdgeEdit = useSelector(getEdgeEditState);
  const onChangeNodeID = useSelector(getNodeIDState);
  const onChangeNodeLabel = useSelector(getNodeLabelState);
  const onChangeEdgeID = useSelector(getEdgeIdState);
  const onChangeEdgeSource = useSelector(getSourceState);
  const onChangeEdgeTarget = useSelector(getTargetState);
  const onChangeEdgeWeight = useSelector(getWeightState);
  // render on data changes function
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
    if (isNodeDelete === true) {
      currentElements.$id(onChangeNodeID).remove();
      dispatch(deleteNode(!isNodeDelete));
    }
    if (isNodeEdit === true) {
      currentElements.$id(onChangeNodeID).data('label', onChangeNodeLabel);
      dispatch(editNode(!isNodeEdit));
    }
    if (isEdgeDelete === true) {
      currentElements.$id(onChangeEdgeID).remove();
      dispatch(deleteEdge(!isEdgeDelete));
    }
    if (isEdgeEdit === true) {
      mst.MoveEdge(
        cyCallBack,
        onChangeEdgeID,
        onChangeEdgeSource,
        onChangeEdgeTarget
      );
      currentElements.$id(onChangeEdgeID).data('weight', onChangeEdgeWeight);
      dispatch(editEdge(!isEdgeEdit));
    }
    if (isExport === true) {
      const jsonString = JSON.stringify(
        cyCallBack.elements().jsons(),
        ['data', 'id', 'label', 'source', 'target', 'weight'],
        2
      );
      setTimeout(() => {
        dispatch(setGraph(jsonString));
        dispatch(sendLog(jsonString));
        saveAs(cyCallBack.jpeg({ full: true, bg: 'black' }), 'Graph.jpg');
        dispatch(setExportGraph(!isExport));
      }, 5000);
      // window.focus();
    }
    if (isRefresh === true) {
      cyCallBack.layout(layout).run();
      dispatch(setRefreshGraph(!isRefresh));
    }
  }
  // render on graph functions
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
      <div className={styles.twinkling} />
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
