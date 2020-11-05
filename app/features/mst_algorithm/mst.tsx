/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-alert */
export default function MST(_cyCallBack: cytoscape.Core) {
  //
}
function Prim(_cyCallBack: cytoscape.Core) {
  //
}
function RemoveElement(_cyCallBack: cytoscape.Core, _e_id: string) {
  _cyCallBack.$(`#${_e_id}`).remove();
}
function AddNode(_cyCallBack: cytoscape.Core, _id: string, _label: string) {
  _cyCallBack.add([{ group: 'nodes', data: { id: _id, label: _label } }]);
}
function AddEdge(
  _cyCallBack: cytoscape.Core,
  _id: string,
  _source: string,
  _target: string,
  _weight: number
) {
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
function MoveEdge(
  _cyCallBack: cytoscape.Core,
  _edgeID: string,
  _source: string,
  _target: string
) {
  _cyCallBack.$(`#${_edgeID}`).move({
    source: _source,
    target: _target,
  });
}
// cyCallBack.getElementById('nine').remove();
// cyCallBack.filter('edge[id = "edge9"]').select();
export { Prim, MoveEdge, AddEdge, AddNode, RemoveElement };
