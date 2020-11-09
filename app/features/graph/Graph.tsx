/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';
import CytoscapeComponent from 'react-cytoscapejs';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Graph.css';
import {
  buttonClick,
  getButtonState,
} from '../../components/top_menu/buttonSlice';
import * as mst from '../mst_algorithm/mst';
import * as eles from '../mst_algorithm/eles';
// import { getNodeID, getNodeLabel } from './nodeSlice';
// import { getButtonState } from '../../components/top_menu/buttonSlice';
import {
  getEdgeID,
  getEdgeSource,
  getEdgeTarget,
  getEdgeWeight,
} from './edgeSlice';

export default function Graph() {
  const dispatch = useDispatch();
  const { layout } = eles;
  const { elements } = eles;
  const { stylesheet } = eles;
  function handleException(_error: string) {
    return _error;
  }
  let cyCallBack: cytoscape.Core;
  const isStartPrim = useSelector(getButtonState);
  // const newNodeID = useSelector(getNodeID);
  // const newNodeLabel = useSelector(getNodeLabel);
  const newEdgeID = useSelector(getEdgeID);
  const newEdgeSource = useSelector(getEdgeSource);
  const newEdgeTarget = useSelector(getEdgeTarget);
  const newEdgeWeight = useSelector(getEdgeWeight);
  function FetchData() {
    try {
      // mst.AddNode(cyCallBack, newNodeID, newNodeLabel);
      mst.AddEdge(
        cyCallBack,
        newEdgeID,
        newEdgeSource,
        newEdgeTarget,
        newEdgeWeight
      );
    } catch (error) {
      handleException(error);
    }
  }
  function onLayoutReady() {
    if (isStartPrim.isClick === true) {
      mst.PrimAll(cyCallBack);
      dispatch(buttonClick(!isStartPrim.isClick));
      cyCallBack.layout(layout).run();
    }
  }
  function refreshGraph() {
    try {
      cyCallBack.layout(layout).run();
    } catch (error) {
      handleException(error);
    }
  }
  function nodeTap() {
    cyCallBack.layout(layout).run();
  }
  // useMemo(()=> {
  //   FetchData();
  // })
  useEffect(() => {
    onLayoutReady();
    FetchData();
    cyCallBack.on('tap', 'node', nodeTap);
    cyCallBack.one('add', 'edge', refreshGraph);
    cyCallBack.one('remove', 'edge', refreshGraph);
  });
  return (
    <div className={styles.galaxy}>
      <div className={styles.stars} />
      <div className={styles.twinkling} />
      <CytoscapeComponent
        elements={elements}
        layout={layout}
        className={styles.graph}
        stylesheet={stylesheet}
        minZoom={0.5}
        maxZoom={2}
        zoom={0.5}
        // eslint-disable-next-line no-return-assign
        cy={(cy) => (cyCallBack = cy)}
      />
    </div>
  );
}
