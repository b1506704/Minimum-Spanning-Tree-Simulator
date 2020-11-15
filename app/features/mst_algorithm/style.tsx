export default function Style() {
  return 0;
}
const style: cytoscape.Stylesheet[] = [
  {
    selector: 'node',
    style: {
      content: 'data(id)',
      'background-color': 'rgba(88, 197, 240, 0.603)',
      'border-style': 'dotted',
      'border-width': '2',
      'border-color': 'blue',
      'font-family': 'Outerspace',
      'font-size': '35',
      'text-outline-color': 'white',
      'text-outline-width': '3',
      'overlay-color': 'transparent',
      ghost: 'yes',
      'ghost-offset-x': 6,
      'ghost-offset-y': 3,
      'ghost-opacity': 0.4,
      'transition-property': 'height width color background-color font-size',
      'transition-timing-function': 'ease-in-out',
      'transition-duration': 1.5,
      color: 'transparent',
      height: '75',
      width: '75',
    },
  },
  {
    selector: 'node:active',
    style: {
      content: 'data(label)',
      'background-color': 'rgba(255, 197, 240, 1)',
      height: '50',
      width: '50',
      color: 'yellow',
      'font-size': '15',
    },
  },
  {
    selector: 'edge',
    style: {
      content: 'data(weight)',
      // label: 'data(label)',
      'curve-style': 'unbundled-bezier',
      // 'curve-style': 'straight',
      'target-arrow-shape': 'triangle',
      'source-arrow-shape': 'circle',
      'source-arrow-fill': 'filled',
      'target-arrow-fill': 'filled',
      'source-arrow-color': 'white',
      'target-arrow-color': 'blue',
      'arrow-scale': 0.5,
      'text-outline-color': 'white',
      'text-outline-width': '3',
      'line-color': 'mapData(weight, 0, 50, yellow, red)',
      'line-style': 'dashed',
      'font-size': '45',
      'font-family': 'Subtitle',
      width: 15,
      color: 'red',
      'transition-property':
        'width color font-size line-color line-style text-outline-width',
      'transition-timing-function': 'ease-in-out',
      'transition-duration': 1.5,
    },
  },
  {
    selector: 'edge:selected',
    style: {
      content: 'data(weight)',
      'curve-style': 'unbundled-bezier',
      'line-color': 'rgba(240, 255, 146, 1)',
      'line-style': 'solid',
      'font-size': '65',
      'text-outline-color': 'white',
      'text-outline-width': '3',
      width: '10',
      color: 'blue',
    },
  },
  {
    selector: 'core',
    style: {
      'active-bg-color': 'white',
      'active-bg-opacity': 0,
      'active-bg-size': 20,
      'selection-box-color': 'green',
      'selection-box-opacity': 0,
      'selection-box-border-color': 'green',
      'selection-box-border-width': 20,
      'outside-texture-bg-color': 'white',
      'outside-texture-bg-opacity': 1,
    },
  },
];
export { style };
