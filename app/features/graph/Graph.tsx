/* eslint-disable no-alert */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';
import CytoscapeComponent from 'react-cytoscapejs';
import { useSelector, shallowEqual } from 'react-redux';
import styles from './Graph.css';
import * as mst from '../mst_algorithm/mst';
import * as eles from '../mst_algorithm/eles';
import {
  getNodeID,
  getNodeLabel,
  getEdgeID,
  getEdgeSource,
  getEdgeTarget,
  getEdgeWeight,
} from './graphSlice';

export default function Graph() {
  const newNodeID = useSelector(getNodeID, shallowEqual);
  const newNodeLabel = useSelector(getNodeLabel, shallowEqual);
  const newEdgeID = useSelector(getEdgeID, shallowEqual);
  const newEdgeSource = useSelector(getEdgeSource, shallowEqual);
  const newEdgeTarget = useSelector(getEdgeTarget, shallowEqual);
  const newEdgeWeight = useSelector(getEdgeWeight, shallowEqual);
  const { layout } = eles;
  const { elements } = eles;
  const { stylesheet } = eles;
  function handleException(_error: string) {
    alert(_error + newNodeID + newNodeLabel);
  }
  let cyCallBack: cytoscape.Core;
  function CustomRender() {
    mst.AddNode(cyCallBack, newNodeID, newNodeLabel);
    // check for random id remove
    mst.RemoveElement(cyCallBack, newEdgeID);
    mst.AddNode(cyCallBack, newNodeID, newNodeLabel);
    mst.AddEdge(
      cyCallBack,
      newEdgeID,
      newEdgeSource,
      newEdgeTarget,
      newEdgeWeight
    );
    cyCallBack.layout(layout).run();
  }
  function onNodeClickHandler() {
    // try {
    //   mst.AddNode(cyCallBack, newNodeID, newNodeLabel);
    //   mst.AddEdge(
    //     cyCallBack,
    //     newEdgeID,
    //     newEdgeSource,
    //     newEdgeTarget,
    //     newEdgeWeight
    //   );
    //   cyCallBack.layout(layout).run();
    // } catch (error) {
    //   handleException(error);
    // }
    // mst.default(cyCallBack);
  }
  function onEdgeClickHandler() {
    try {
      // mst.MoveEdge(cyCallBack, newEdgeID, newNodeID, 'seven');
      mst.RemoveElement(cyCallBack, newEdgeID);
      cyCallBack.layout(layout).run();
    } catch (error) {
      handleException(error);
    }
  }
  useEffect(() => {
    // render on change
    CustomRender();
    cyCallBack.on('tap', 'node', onNodeClickHandler);
    cyCallBack.on('tap', 'edge', onEdgeClickHandler);
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
