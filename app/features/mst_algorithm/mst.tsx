export default function MST() {
  //
}
function showLog(
  sourceN: cytoscape.NodeSingular,
  minE: cytoscape.EdgeSingular,
  connectedE: cytoscape.EdgeCollection
) {
  return `Min edge connected to ${sourceN[0].id()}: ${JSON.stringify(
    minE.json(),
    ['data', 'source', 'target', 'weight', 'id'],
    2
  )} ${JSON.stringify(
    connectedE.jsons(),
    ['data', 'source', 'target', 'weight', 'id'],
    2
  )}`;
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
function PrimAll(_cyCallBack: cytoscape.Core) {
  RemoveLoop(_cyCallBack);
  let mstCollection = _cyCallBack.collection();
  _cyCallBack.nodes().forEach((e) => {
    const connectedE = e.connectedEdges();
    if (connectedE.length !== 0) {
      let minE = GetMinEdge(connectedE);
      let minW = minE.data('weight');
      // to keep 2nd run remain mst
      if (connectedE.length === 1) {
        mstCollection = mstCollection.union(minE);
      }
      connectedE.forEach((edge) => {
        if (edge.data('weight') <= minW) {
          minE = edge;
          minW = edge.data('weight');
          mstCollection = mstCollection.union(minE);
        }
      });
      showLog(e, minE, connectedE);
    }
  });
  _cyCallBack.edges().remove();
  _cyCallBack.add(mstCollection);
}
function RemoveElement(_cyCallBack: cytoscape.Core, _e_id: string) {
  if (_cyCallBack.getElementById(_e_id).inside()) {
    _cyCallBack.getElementById(_e_id).remove();
  }
}
function AddNode(_cyCallBack: cytoscape.Core, _id: string, _label: string) {
  if (_id !== 'test') {
    _cyCallBack.add([{ group: 'nodes', data: { id: _id, label: _label } }]);
  }
}
function AddEdge(
  _cyCallBack: cytoscape.Core,
  _id: string,
  _source: string,
  _target: string,
  _weight: number
) {
  if (_id !== 'test') {
    _cyCallBack.add([
      {
        group: 'edges',
        data: {
          id: _id,
          source: _source,
          target: _target,
          weight: _weight,
        },
      },
    ]);
  }
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
export {
  MoveEdge,
  AddEdge,
  AddNode,
  RemoveElement,
  RemoveLoop,
  PrimAll,
  showLog,
};
