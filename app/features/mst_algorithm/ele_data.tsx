/* eslint-disable prettier/prettier */
export default function ElesData() {
  return 0;
}
const elements = [
  {
    data: { id: 'a', label: 'Earth' },
  },
  {
    data: { id: 'b', label: 'Mars' },
  },
  {
    data: { id: 'c', label: 'Venus' },
  },
  {
    data: { id: 'd', label: 'Mercury' },
  },
  {
    data: { id: 'e', label: 'Jubiter' },
  },
  {
    data: { id: 'f', label: 'Saturn' },
  },
  {
    data: { id: 'g', label: 'Uranus' },
  },
  {
    data: { id: 'h', label: 'Neptune' },
  },
  {
    data: { id: 'i', label: 'Sun' },
  },
  {
    data: {
      source: 'a',
      target: 'b',
      id: 'ab',
      weight: 7,
      mark: 'false',
    },
  },
  {
    data: {
      source: 'b',
      target: 'c',
      id: 'bc',
      weight: 8,
      mark: 'false',
    },
  },

  {
    data: {
      source: 'a',
      target: 'd',
      id: 'ad',
      weight: 5,
      mark: 'false',
    },
  },

  {
    data: {
      source: 'b',
      target: 'd',
      id: 'bd',
      weight: 9,
      mark: 'false',
    },
  },

  {
    data: {
      source: 'd',
      target: 'f',
      id: 'df',
      weight: 6,
      mark: 'false',
    },
  },

  {
    data: {
      source: 'f',
      target: 'g',
      id: 'fg',
      weight: 11,
      mark: 'false',
    },
  },

  {
    data: {
      source: 'd',
      target: 'e',
      id: 'de',
      weight: 15,
      mark: 'false',
    },
  },

  {
    data: {
      source: 'b',
      target: 'e',
      id: 'be',
      weight: 7,
      mark: 'false',
    },
  },

  {
    data: {
      source: 'c',
      target: 'e',
      id: 'ce',
      weight: 5,
      mark: 'false',
    },
  },

  {
    data: {
      source: 'e',
      target: 'g',
      id: 'eg',
      weight: 9,
      mark: 'false',
    },
  },

  {
    data: {
      source: 'e',
      target: 'f',
      id: 'ef',
      weight: 8,
      mark: 'false',
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
];
export { elements };
