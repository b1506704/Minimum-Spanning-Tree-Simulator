/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';
import CytoscapeComponent from 'react-cytoscapejs';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Graph.css';
import {
  buttonClick,
  getButtonState,
} from '../../components/top_menu/buttonSlice';
import { getSwitchState } from '../../components/bottom_menu/switchSlice';
import * as mst from '../mst_algorithm/mst';
import * as eles from '../mst_algorithm/eles';
import { getNodeID, getNodeLabel } from './nodeSlice';
import { getEdgeSource, getEdgeTarget, getEdgeWeight } from './edgeSlice';

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
  const isCheckConnection = useSelector(getSwitchState);
  const newNodeID = useSelector(getNodeID);
  const newNodeLabel = useSelector(getNodeLabel);
  const newEdgeSource = useSelector(getEdgeSource);
  const newEdgeTarget = useSelector(getEdgeTarget);
  const newEdgeWeight = useSelector(getEdgeWeight);
  function FetchData() {
    try {
      mst.AddNode(cyCallBack, newNodeID, newNodeLabel);
      mst.AddEdge(cyCallBack, newEdgeSource, newEdgeTarget, newEdgeWeight);
    } catch (error) {
      handleException(error);
    }
  }
  function onLayoutReady() {
    if (isStartPrim.isClick === true) {
      // mst.PrimAll(cyCallBack);
      // mst.default(cyCallBack, cyCallBack.nodes().$id('d'));
      dispatch(buttonClick(!isStartPrim.isClick));
      cyCallBack.layout(layout).run();
    }
    if (isCheckConnection.isCheck === true) {
      mst.FindConnectedComponent(cyCallBack);
      cyCallBack.elements().unselectify();
    } else {
      cyCallBack.elements().selectify();
      cyCallBack.elements().unselect();
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
    cyCallBack.one('add', refreshGraph);
    cyCallBack.one('remove', refreshGraph);
  });
  return (
    <div className={styles.galaxy}>
      <div className={styles.stars} />
      {/* <div className={styles.twinkling} /> */}
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
