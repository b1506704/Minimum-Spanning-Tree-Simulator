/* eslint-disable prettier/prettier */
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
      'border-width': '4',
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
      'transition-duration': 250,
      color: 'transparent',
      height: '75',
      width: '75',
    },
  },
  {
    selector: 'node:selected',
    style: {
      content: 'data(label)',
        'background-color': 'rgba(88, 197, 240, 1)',
        'border-style': 'solid',
        'border-width': '8',
        'border-color': 'green',
        'font-size': '40',
        'text-outline-color': 'blue',
        'text-outline-width': '5',
        color: 'white',
        height: '100',
        width: '100',
    },
  },
  {
    selector: 'edge',
    style: {
      content: 'data(weight)',
      'curve-style': 'unbundled-bezier',
      'text-outline-color': 'red',
      'text-outline-width': '3',
      'line-color': 'mapData(weight, 0, 50, yellow, red)',
      'line-style': 'dashed',
      'font-size': '45',
      'font-family': 'Subtitle',
      width: 15,
      color: 'white',
      'transition-property':
        'width color font-size line-color line-style text-outline-width',
      'transition-timing-function': 'ease-in-out',
      'transition-duration': 250,
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
      width: 25,
      color: 'blue',
    },
  },
];
export { style };
