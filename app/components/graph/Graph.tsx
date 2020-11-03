import React, { useEffect } from 'react';
import CytoscapeComponent from 'react-cytoscapejs';
import styles from './Graph.css';
// import mst from '../../features/mst_algorithm/mst';
import * as eles from '../../features/mst_algorithm/eles';

export default function Graph() {
  const { layout } = eles;
  const { elements } = eles;
  const { stylesheet } = eles;
  let cyCallBack: cytoscape.Core;
  const nodeID = 'n1';
  const preNodeID = 'n0';
  const W = 0;
  function onNodeClickHandler() {
    // W += 10;
    cyCallBack.add([
      { group: 'nodes', data: { id: preNodeID, label: preNodeID } },
      { group: 'nodes', data: { id: nodeID, label: nodeID } },
      {
        group: 'edges',
        data: {
          id: 'ei',
          source: preNodeID,
          target: nodeID,
          weight: W + 10,
          label: nodeID,
        },
      },
      {
        group: 'edges',
        data: {
          id: 'e1',
          source: preNodeID,
          target: 'three',
          weight: W + 20,
          label: nodeID,
        },
      },
    ]);
    cyCallBack.layout(layout).run();
    cyCallBack.filter('edge[id = "edge9"]').select();
  }
  function onEdgeClickHandler() {
    cyCallBack.getElementById('nine').remove();
    cyCallBack.layout(layout).run();
  }
  useEffect(() => {
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
        // wheelSensitivity={0.05}
      >
        {' '}
      </CytoscapeComponent>
    </div>
  );
}
