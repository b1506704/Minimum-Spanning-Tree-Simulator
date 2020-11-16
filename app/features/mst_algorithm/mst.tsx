import cytoscape from 'cytoscape';

/* eslint-disable no-alert */
function showLog(
  loop: number,
  sourceN: cytoscape.NodeSingular,
  minE: cytoscape.EdgeSingular,
  connectedE: cytoscape.EdgeCollection,
  mstCollection: cytoscape.Collection,
  totalMinW: number
) {
  if (sourceN.data('mark') === 'false') {
    return `Node ${JSON.stringify(sourceN.json(), ['data', 'id', 'mark'], 2)}`;
  }
  return `
    ------------------Loop ${loop}---------------

    Min edge connected to ${JSON.stringify(
      sourceN.json(),
      ['data', 'id', 'mark'],
      2
    )}: ${JSON.stringify(
    minE.json(),
    ['data', 'id', 'source', 'target', 'weight', 'mark'],
    2
  )} 

  Neighbor: ${JSON.stringify(
    connectedE.jsons(),
    ['data', 'id', 'source', 'target', 'weight', 'mark'],
    2
  )}

  MST Collection: ${JSON.stringify(
    mstCollection.jsons(),
    ['data', 'id', 'source', 'target'],
    2
  )}

  Total min weight = ${totalMinW}`;
}
function RemoveElement(_cyCallBack: cytoscape.Core, _e_id: string) {
  if (_cyCallBack.getElementById(_e_id).inside()) {
    _cyCallBack.getElementById(_e_id).remove();
  }
}
function AddNode(_cyCallBack: cytoscape.Core, _id: string, _label: string) {
  if (_id !== 'test' && _id.trim() !== '') {
    _cyCallBack.add([
      { group: 'nodes', data: { id: _id.trim(), label: _label.trim() } },
    ]);
  }
}
function AddEdge(
  _cyCallBack: cytoscape.Core,
  _source: string,
  _target: string,
  _weight: number
) {
  if (_source.trim() !== '' && _target.trim() !== '') {
    if (
      _cyCallBack.nodes().$id(_source).inside() &&
      _cyCallBack.nodes().$id(_target).inside()
    ) {
      _cyCallBack.add([
        {
          group: 'edges',
          data: {
            id: _source.trim() + _target.trim(),
            source: _source.trim(),
            target: _target.trim(),
            weight: _weight,
          },
        },
      ]);
    }
  }
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
function EditEdge(_cyCallBack: cytoscape.Core, weight: number) {
  let selectedEdge: cytoscape.EdgeSingular;
  _cyCallBack.edges().on('click', (e) => {
    selectedEdge = e.target;
    selectedEdge.data('weight', weight);
  });
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
const cy = cytoscape({});
let mstCollection: cytoscape.Collection = cy.collection();
let jsonString = '';
let loop = 0;
let totalMinW = 0;
export default function MST(_cyCallBack: cytoscape.Core) {
  jsonString = '';
  totalMinW = 0;
  loop = 0;
  RemoveLoop(_cyCallBack);
  const nodeCollection: cytoscape.NodeCollection = _cyCallBack.nodes();
  nodeCollection.forEach((n) => {
    loop += 1;
    const sourceConnectedE = n.connectedEdges(':unselected');
    if (sourceConnectedE.length !== 0) {
      let minE = GetMinEdge(sourceConnectedE);
      let minW = minE.data('weight');
      // to keep 2nd run remain mst
      // if (connectedE.length === 1) {
      //   mstCollection = mstCollection.union(minE);
      // }
      let currentMinEdges: cytoscape.EdgeCollection = _cyCallBack.collection();
      sourceConnectedE.forEach((e) => {
        const currentE = e;
        const currentW = e.data('weight');
        // check same min weight not removed
        if (currentW <= minW) {
          minE = currentE;
          minW = currentW;
          currentMinEdges = currentMinEdges.union(minE);
          minE = currentMinEdges.first();
          minW = minE.data('weight');
        } else {
          e.remove();
        }
      });
      minE.select();
      minE.data('mark', 'true');
      minE.target().data('mark', 'true');
      minE.source().data('mark', 'true');
      mstCollection = mstCollection.union(minE);
      totalMinW += minW;
      _cyCallBack.add(mstCollection);
      jsonString += `\n${showLog(
        loop,
        n,
        minE,
        sourceConnectedE,
        mstCollection,
        totalMinW
      )}`;
    }
  });
  return jsonString;
}
function PrimAll(_cyCallBack: cytoscape.Core) {
  RemoveLoop(_cyCallBack);
  const nodeCollection: cytoscape.NodeCollection = _cyCallBack.nodes();
  nodeCollection.forEach((n) => {
    n.data('mark', 'false');
  });
  //
}
function FindConnectedComponent(_cyCallBack: cytoscape.Core) {
  let connectedComponent = '\nStrongly connected components: ';
  const connectedComponents = _cyCallBack.elements().tarjanStronglyConnected();
  connectedComponents.components.forEach((e) => {
    e.select();
    connectedComponent += `\n ${JSON.stringify(
      e.jsons(),
      ['data', 'source', 'target', 'weight'],
      2
    )}`;
  });
  return connectedComponent;
}
export {
  MoveEdge,
  AddEdge,
  AddNode,
  RemoveElement,
  RemoveLoop,
  FindConnectedComponent,
  PrimAll,
  showLog,
  EditEdge,
};
