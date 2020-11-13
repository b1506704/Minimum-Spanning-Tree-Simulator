/* eslint-disable no-alert */
function showLog(
  sourceN: cytoscape.NodeSingular,
  minE: cytoscape.EdgeSingular,
  connectedE: cytoscape.EdgeCollection,
  totalMinW: number
) {
  if (sourceN.data('mark') === 'false') {
    alert(`Node ${JSON.stringify(sourceN.json(), ['data', 'id', 'mark'], 2)}`);
  } else {
    alert(`Min edge connected to ${JSON.stringify(
      sourceN.json(),
      ['data', 'id', 'mark'],
      2
    )}: ${JSON.stringify(
      minE.json(),
      ['data', 'source', 'target', 'weight', 'mark', 'id'],
      2
    )} ${JSON.stringify(
      connectedE.jsons(),
      ['data', 'source', 'target', 'weight', 'mark', 'id'],
      2
    )}
      Total min weight of the graph: ${totalMinW}`);
  }
}
function RemoveElement(_cyCallBack: cytoscape.Core, _e_id: string) {
  if (_cyCallBack.getElementById(_e_id).inside()) {
    _cyCallBack.getElementById(_e_id).remove();
  }
}
function AddNode(_cyCallBack: cytoscape.Core, _id: string, _label: string) {
  if (_id !== 'test' && _id.trim() !== null) {
    _cyCallBack.add([{ group: 'nodes', data: { id: _id, label: _label } }]);
  }
}
function AddEdge(
  _cyCallBack: cytoscape.Core,
  _source: string,
  _target: string,
  _weight: number
) {
  _cyCallBack.add([
    {
      group: 'edges',
      data: {
        id: _source + _target,
        source: _source,
        target: _target,
        weight: _weight,
      },
    },
  ]);
  // _cyCallBack.add([
  //   {
  //     group: 'edges',
  //     data: {
  //       id: _target + _source,
  //       source: _target,
  //       target: _source,
  //       weight: _weight,
  //     },
  //   },
  // ]);
}
function MoveEdge(
  _cyCallBack: cytoscape.Core,
  _edgeID: string,
  _source: string,
  _target: string
) {
  if (_cyCallBack.edges().getElementById(_edgeID).inside()) {
    _cyCallBack.edges().getElementById(_edgeID).move({
      source: _source,
      target: _target,
    });
  }
}
function RemoveLoop(_cyCallBack: cytoscape.Core) {
  _cyCallBack.edges().forEach((e) => {
    if (e.isLoop()) {
      e.remove();
    }
  });
}
function GetMinEdge(edge: cytoscape.EdgeCollection) {
  let minE: cytoscape.EdgeSingular = edge[0];
  edge.forEach((e) => {
    if (e.data('weight') < minE.data('weight')) {
      minE = e;
    }
  });
  return minE;
}
export default function MST(
  _cyCallBack: cytoscape.Core,
  _startNode: cytoscape.NodeSingular
) {
  RemoveLoop(_cyCallBack);
  let mstCollection = _cyCallBack.collection();
  const nodeCollection: cytoscape.NodeCollection = _cyCallBack.nodes();
  let totalMinW = 0;
  nodeCollection.$id(_startNode.id()).data('mark', 'true');
  // for each node check if the
  // connectedEdges of the source node
  // target node is min edges
  nodeCollection.forEach((n) => {
    if (n.data('mark') === 'true') {
      const connectedE = n.neighborhood().edges(':unselected');
      if (connectedE.length !== 0) {
        let minE = GetMinEdge(connectedE);
        let minW = minE.data('weight');
        // to keep 2nd run remain mst
        // if (connectedE.length === 1) {
        //   mstCollection = mstCollection.union(minE);
        // }
        let currentMinEdges: cytoscape.EdgeCollection = _cyCallBack.collection();
        connectedE.forEach((e) => {
          const currentE = e;
          const currentW = e.data('weight');
          // check same min weight not removed
          if (currentW <= minW) {
            minE = currentE;
            minW = currentW;
            e.select();
            e.source().data('mark', 'true');
            e.target().data('mark', 'true');
            currentMinEdges = currentMinEdges.union(minE);
          } else if (e.target().indegree(false) >= 2) {
            // e.target().data('toVisit', 'true');
            e.remove();
          }
        });
        minE = currentMinEdges.first();
        minW = minE.data('weight');
        totalMinW += minW;
        mstCollection = mstCollection.union(minE);
        showLog(n, minE, connectedE, totalMinW);
      }
    } else {
      showLog(n, n.connectedEdges().first(), n.connectedEdges(), -1);
    }
    n.data('toVisit', 'false');
    //
    // n.unselect();
    // go back to prenode if no outedge is found
    // PrimAll(_cyCallBack);
  });
  if (nodeCollection.last().data('mark') === false) {
    //
  }
  // _cyCallBack.edges(':unselected').remove();
  _cyCallBack.add(mstCollection);
}
function FindConnectedComponent(_cyCallBack: cytoscape.Core) {
  const connectedComponents = _cyCallBack.elements().tarjanStronglyConnected();
  connectedComponents.components.forEach((e) => {
    e.select();
  });
}
function PrimAll(_cyCallBack: cytoscape.Core) {
  RemoveLoop(_cyCallBack);
  let mstCollection = _cyCallBack.collection();
  const nodeCollection: cytoscape.NodeCollection = _cyCallBack.nodes();
  let totalMinW = 0;
  nodeCollection.first().data('mark', 'true');
  nodeCollection.forEach((n) => {
    if (n.data('mark') === 'true') {
      const connectedE = n.connectedEdges(':unselected');
      if (connectedE.length >= 0) {
        let minE = GetMinEdge(connectedE);
        let minW = minE.data('weight');
        // to keep 2nd run remain mst
        // if (connectedE.length === 1) {
        //   mstCollection = mstCollection.union(minE);
        // }
        let currentMinEdges: cytoscape.EdgeCollection = _cyCallBack.collection();
        connectedE.forEach((e) => {
          const currentE = e;
          const currentW = e.data('weight');
          // check same min weight not removed
          if (currentW <= minW) {
            minE = currentE;
            minW = currentW;
            e.select();
            e.target().data('mark', 'true');
            currentMinEdges = currentMinEdges.union(minE);
          }
        });
        minE = currentMinEdges.last();
        minW = minE.data('weight');
        totalMinW += minW;
        mstCollection = mstCollection.union(minE);
        showLog(n, minE, connectedE, totalMinW);
      }
    } else if (n.data('mark') === 'false') {
      showLog(n, n.connectedEdges().first(), n.connectedEdges(), -1);
      // n.unselect();
      // go back to prenode if no outedge is found
    }
  });
  // _cyCallBack.edges(':unselected').remove();
  _cyCallBack.add(mstCollection);
}

export {
  MoveEdge,
  AddEdge,
  AddNode,
  RemoveElement,
  RemoveLoop,
  PrimAll,
  FindConnectedComponent,
  showLog,
};
