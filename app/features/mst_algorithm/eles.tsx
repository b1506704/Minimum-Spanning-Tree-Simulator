/* eslint-disable @typescript-eslint/no-unused-vars */
export default function Eles() {
  return 0;
}
// -----------------------------Styles-------------//
const stylesheet: cytoscape.Stylesheet[] = [
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
  animationDuration: 1200,

  // A function that determines whether the node should be animated
  // All nodes animated by default on animate enabled
  // Non-animated nodes are positioned immediately when the layout starts
  // animateFilter(node, i) {
  //   return true;
  // },

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
  // nodeRepulsion(node) {
  //   return 2048;
  // },

  // Node repulsion (overlapping) multiplier
  nodeOverlap: 4,

  // Ideal edge (non nested) length
  // idealEdgeLength(edge) {
  //   return 32;
  // },

  // Divisor to compute edge forces
  // edgeElasticity(edge) {
  //   return 32;
  // },

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

// const circle = {
//   name: 'circle',
//   fit: true,
//   padding: 30, // padding on fit
//   animate: true, // whether to transition the node positions
//   animationDuration: 1000, // duration of animation in ms if enabled
//   animationEasing: 'ease-in-out', // easing of animation if enabled
//   boundingBox: undefined, // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
//   avoidOverlap: true, // prevents node overlap, may overflow boundingBox and radius if not enough space
//   nodeDimensionsIncludeLabels: false, // Excludes the label when calculating node bounding boxes for the layout algorithm
//   spacingFactor: 1, // Applies a multiplicative factor (>0) to expand or compress the overall area that the nodes take up
//   // radius: 600, // the radius of the circle
//   startAngle: (0 / 2) * Math.PI, // where nodes start in radians
//   sweep: undefined, // how many radians should be between the first and last node (defaults to full circle)
//   clockwise: true, // whether the layout should go clockwise (true) or counterclockwise/anticlockwise (false)
//   sort: undefined, // a sorting function to order the nodes; e.g. function(a, b){ return a.data('weight') - b.data('weight') }
// };
const layout = cose;

// -----------------------------Elements-------------//

const elements = [
  {
    data: { id: 'a', label: 'Earth', mark: 'false', toVisit: 'false' },
  },
  {
    data: { id: 'b', label: 'Mars', mark: 'false', toVisit: 'false' },
  },
  {
    data: { id: 'c', label: 'Venus', mark: 'false', toVisit: 'false' },
  },
  {
    data: { id: 'd', label: 'Mercury', mark: 'false', toVisit: 'false' },
  },
  {
    data: { id: 'e', label: 'Jubiter', mark: 'false', toVisit: 'false' },
  },
  {
    data: { id: 'f', label: 'Saturn', mark: 'false', toVisit: 'false' },
  },
  {
    data: { id: 'g', label: 'Uranus', mark: 'false', toVisit: 'false' },
  },
  {
    data: { id: 'h', label: 'Neptune', mark: 'false', toVisit: 'false' },
  },
  {
    data: { id: 'i', label: 'Sun', mark: 'false' },
  },
  {
    data: {
      source: 'a',
      target: 'b',
      id: 'ab',
      weight: 7,
    },
  },
  {
    data: {
      source: 'b',
      target: 'c',
      id: 'bc',
      weight: 8,
    },
  },

  {
    data: {
      source: 'a',
      target: 'd',
      id: 'ad',
      weight: 5,
    },
  },

  {
    data: {
      source: 'b',
      target: 'd',
      id: 'bd',
      weight: 9,
    },
  },

  {
    data: {
      source: 'd',
      target: 'f',
      id: 'df',
      weight: 6,
    },
  },

  // {
  //   data: {
  //     source: 'f',
  //     target: 'g',
  //     id: 'fg',
  //     weight: 11,
  //   },
  // },

  {
    data: {
      source: 'd',
      target: 'e',
      id: 'de',
      weight: 15,
    },
  },

  {
    data: {
      source: 'b',
      target: 'e',
      id: 'be',
      weight: 7,
    },
  },

  {
    data: {
      source: 'c',
      target: 'e',
      id: 'ce',
      weight: 5,
    },
  },

  // {
  //   data: {
  //     source: 'e',
  //     target: 'g',
  //     id: 'eg',
  //     weight: 9,
  //   },
  // },

  {
    data: {
      source: 'e',
      target: 'f',
      id: 'ef',
      weight: 8,
    },
  },
  {
    data: {
      source: 'g',
      target: 'h',
      id: 'gh',
      weight: 8,
    },
  },
  {
    data: {
      source: 'h',
      target: 'i',
      id: 'hi',
      weight: 8,
    },
  },
  {
    data: {
      source: 'i',
      target: 'g',
      id: 'ig',
      weight: 8,
    },
  },

  // {
  //   data: {
  //     source: 'g',
  //     target: 'h',
  //     id: 'gh',
  //     weight: 8,
  //   },
  // },
  // {
  //   data: {
  //     source: 'b',
  //     target: 'a',
  //     id: 'ba',
  //     weight: 7,
  //   },
  // },
  // {
  //   data: {
  //     source: 'c',
  //     target: 'b',
  //     id: 'cb',
  //     weight: 8,
  //   },
  // },
  // {
  //   data: {
  //     source: 'd',
  //     target: 'a',
  //     id: 'da',
  //     weight: 5,
  //   },
  // },
  // {
  //   data: {
  //     source: 'd',
  //     target: 'b',
  //     id: 'db',
  //     weight: 9,
  //   },
  // },
  // {
  //   data: {
  //     source: 'f',
  //     target: 'd',
  //     id: 'fd',
  //     weight: 6,
  //   },
  // },
  // {
  //   data: {
  //     source: 'g',
  //     target: 'f',
  //     id: 'gf',
  //     weight: 11,
  //   },
  // },
  // {
  //   data: {
  //     source: 'e',
  //     target: 'd',
  //     id: 'ed',
  //     weight: 15,
  //   },
  // },
  // {
  //   data: {
  //     source: 'e',
  //     target: 'b',
  //     id: 'eb',
  //     weight: 7,
  //   },
  // },
  // {
  //   data: {
  //     source: 'e',
  //     target: 'c',
  //     id: 'ec',
  //     weight: 5,
  //   },
  // },
  // {
  //   data: {
  //     source: 'g',
  //     target: 'e',
  //     id: 'ge',
  //     weight: 9,
  //   },
  // },
  // {
  //   data: {
  //     source: 'f',
  //     target: 'e',
  //     id: 'fe',
  //     weight: 8,
  //   },
  // },
  // {
  //   data: {
  //     source: 'h',
  //     target: 'g',
  //     id: 'hg',
  //     weight: 8,
  //   },
  // },
];
export { layout, stylesheet, elements };
