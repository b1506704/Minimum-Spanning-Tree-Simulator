import cytoscape from 'cytoscape';
import { saveAs } from 'file-saver';
/* eslint-disable no-alert */
function RemoveElement(_cyCallBack: cytoscape.Core, _e_id: string) {
  if (_cyCallBack.getElementById(_e_id).inside()) {
    _cyCallBack.getElementById(_e_id).remove();
  }
}
function AddNode(_cyCallBack: cytoscape.Core, _id: string, _label: string) {
  if (_id !== 'test' && _id.trim() !== '') {
    _cyCallBack.add([{ data: { id: _id.trim(), label: _label.trim() } }]);
  }
}
function ExportGraph(_cyCallBack: cytoscape.Core) {
  saveAs(_cyCallBack.png(), 'Graph.png');
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
          // group: 'edges',
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
function FindConnectedComponent(_cyCallBack: cytoscape.Core) {
  let connectedComponent = `
  ---Connected components--- `;
  let loop = 0;
  const connectedComponents = _cyCallBack
    .elements()
    .hopcroftTarjanBiconnected();
  connectedComponents.components.forEach((e) => {
    loop += 1;
    e.select();
    connectedComponent += `
    ----Component ${loop}------- 
    ${JSON.stringify(e.jsons(), ['data', 'source', 'target', 'weight'], 2)}
  -------------------------
    `;
  });
  return connectedComponent;
}
function Kruskal(_cyCallBack: cytoscape.Core) {
  let jsonString = '';
  RemoveLoop(_cyCallBack);
  const k = _cyCallBack.elements().kruskal(function getMineE(edge) {
    return edge[0].data('weight');
  });
  _cyCallBack.elements().remove();
  _cyCallBack.add(k);
  let totalMinW = 0;
  k.edges().forEach((e) => {
    totalMinW += e.data('weight');
  });
  jsonString += `
  Minimum Spanning Tree
  Total min weight: ${totalMinW}
  Data
  -----------------------------------
  ${JSON.stringify(
    k.jsons(),
    ['data', 'id', 'label', 'source', 'target', 'weight'],
    2
  )}
------------------------------------`;
  return jsonString;
}

export default function MST() {
  return 0;
}
export {
  MoveEdge,
  AddEdge,
  AddNode,
  RemoveElement,
  RemoveLoop,
  FindConnectedComponent,
  GetMinEdge,
  Kruskal,
  ExportGraph,
};
