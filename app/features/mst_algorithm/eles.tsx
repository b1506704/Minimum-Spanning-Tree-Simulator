/* eslint-disable @typescript-eslint/no-unused-vars */
export default function Eles() {
  return 0;
}
// -----------------------------Styles-------------//
const stylesheet = [
  {
    selector: 'node',
    style: {
      content: 'data(label)',
      'background-color': 'rgba(88, 197, 240, 0.603)',
      'border-style': 'dotted',
      'border-width': '2',
      'border-color': 'blue',
      'font-family': 'Outerspace',
      'font-size': '35',
      'overlay-color': 'transparent',
      ghost: 'yes',
      'ghost-offset-x': '6',
      'ghost-offset-y': '3',
      'ghost-opacity': '0.4',
      'transition-property': 'height width color background-color font-size',
      'transition-timing-function': 'ease-in-out',
      'transition-duration': '0.1s',
      color: 'pink',
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
      'line-color': 'mapData(weight, 0, 50, white, red)',
      'line-style': 'dashed',
      'font-size': '45',
      'font-family': 'Subtitle',
      // width: '5',
      width: 'mapData(weight, 0, 100, 0, 50)',
      // height: 'mapData(weight, 0, 75, 0, 75)',
      color: 'yellow',
      'transition-property':
        'width color font-size line-color line-style text-outline-width',
      'transition-timing-function': 'ease-in-out',
      'transition-duration': '0.25s',
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
];

// -----------------------------Layout-------------//

const cose = {
  name: 'cose',

  // Called on `layoutready`
  ready() {},

  // Called on `layoutstop`
  stop() {},

  // Whether to animate while running the layout
  // true : Animate continuously as the layout is running
  // false : Just show the end result
  // 'end' : Animate with the end result, from the initial positions to the end positions
  animate: 'end',

  // Easing of the animation for animate:'end'
  animationEasing: 'ease-in-out',

  // The duration of the animation for animate:'end'
  animationDuration: 1000,

  // A function that determines whether the node should be animated
  // All nodes animated by default on animate enabled
  // Non-animated nodes are positioned immediately when the layout starts
  animateFilter(node, i) {
    return true;
  },

  // The layout animates only after this many milliseconds for animate:true
  // (prevents flashing on fast runs)
  animationThreshold: 1000,

  // Number of iterations between consecutive screen positions update
  refresh: 20,

  // Whether to fit the network view after when done
  fit: true,

  // Padding on fit
  padding: 30,

  // Constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
  boundingBox: undefined,

  // Excludes the label when calculating node bounding boxes for the layout algorithm
  nodeDimensionsIncludeLabels: true,

  // Randomize the initial positions of the nodes (true) or use existing positions (false)
  randomize: true,

  // Extra spacing between components in non-compound graphs
  componentSpacing: 200,

  // Node repulsion (non overlapping) multiplier
  nodeRepulsion(node) {
    return 2048;
  },

  // Node repulsion (overlapping) multiplier
  nodeOverlap: 4,

  // Ideal edge (non nested) length
  idealEdgeLength(edge) {
    return 32;
  },

  // Divisor to compute edge forces
  edgeElasticity(edge) {
    return 32;
  },

  // Nesting factor (multiplier) to compute ideal edge length for nested edges
  nestingFactor: 1.2,

  // Gravity force (constant)
  gravity: 1,

  // Maximum number of iterations to perform
  numIter: 1000,

  // Initial temperature (maximum node displacement)
  initialTemp: 1000,

  // Cooling factor (how the temperature is reduced between consecutive iterations
  coolingFactor: 0.99,

  // Lower temperature threshold (below this point the layout will end)
  minTemp: 1.0,
};

const circle = {
  name: 'circle',
  fit: true,
  padding: 30, // padding on fit
  animate: true, // whether to transition the node positions
  animationDuration: 1000, // duration of animation in ms if enabled
  animationEasing: 'ease-in-out', // easing of animation if enabled
  boundingBox: undefined, // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
  avoidOverlap: true, // prevents node overlap, may overflow boundingBox and radius if not enough space
  nodeDimensionsIncludeLabels: false, // Excludes the label when calculating node bounding boxes for the layout algorithm
  spacingFactor: 1, // Applies a multiplicative factor (>0) to expand or compress the overall area that the nodes take up
  // radius: 600, // the radius of the circle
  startAngle: (0 / 2) * Math.PI, // where nodes start in radians
  sweep: undefined, // how many radians should be between the first and last node (defaults to full circle)
  clockwise: true, // whether the layout should go clockwise (true) or counterclockwise/anticlockwise (false)
  sort: undefined, // a sorting function to order the nodes; e.g. function(a, b){ return a.data('weight') - b.data('weight') }
};
const layout = cose;

// -----------------------------Elements-------------//

const elements = [
  {
    data: { id: 'one', label: 'Earth' },
  },
  {
    data: { id: 'two', label: 'Mars' },
  },
  {
    data: { id: 'three', label: 'Venus' },
  },
  {
    data: { id: 'four', label: 'Mercury' },
  },
  {
    data: { id: 'five', label: 'Jubiter' },
  },
  {
    data: { id: 'six', label: 'Saturn' },
  },
  {
    data: { id: 'seven', label: 'Uranus' },
  },
  {
    data: { id: 'eight', label: 'Neptune' },
  },
  {
    data: { id: 'nine', label: 'Sun' },
  },
  {
    data: {
      source: 'one',
      target: 'two',
      id: 'edge1',
      weight: 30,
    },
  },
  {
    data: {
      source: 'two',
      target: 'three',
      id: 'edge2',
      weight: 15,
    },
  },
  {
    data: {
      source: 'two',
      target: 'four',
      id: 'edge3',
      weight: 44,
    },
  },
  {
    data: {
      source: 'two',
      target: 'five',
      id: 'edge4',
      weight: 36,
    },
  },
  {
    data: {
      source: 'three',
      target: 'five',
      id: 'edge5',
      weight: 10,
    },
  },
  {
    data: {
      source: 'five',
      target: 'six',
      id: 'edge6',
      weight: 7,
    },
  },
  {
    data: {
      source: 'six',
      target: 'two',
      id: 'edge7',
      weight: 28,
    },
  },
  {
    data: {
      source: 'one',
      target: 'three',
      id: 'edge8',
      weight: 15.5,
    },
  },
  {
    data: {
      source: 'three',
      target: 'seven',
      id: 'edge9',
      weight: 22,
    },
  },
  {
    data: {
      source: 'two',
      target: 'eight',
      id: 'edge10',
      weight: 34,
    },
  },
  {
    data: {
      source: 'four',
      target: 'nine',
      label: '3',
      weight: 18,
    },
  },
  {
    data: {
      source: 'five',
      target: 'nine',
      id: 'edge2',
      weight: 5,
    },
  },
  {
    data: {
      source: 'one',
      target: 'nine',
      id: 'edge13',
      weight: 15.9,
    },
  },
  {
    data: {
      source: 'six',
      target: 'five',
      id: 'edge14',
      weight: 50,
    },
  },
];
export { layout, stylesheet, elements };
