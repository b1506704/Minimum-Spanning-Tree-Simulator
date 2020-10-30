import React from 'react';
import CytoscapeComponent from 'react-cytoscapejs';
import styles from './Graph.css';

export default function Graph() {
  const stylesheet = [
    {
      selector: 'node',
      style: {
        content: 'data(label)',
        'background-color': 'rgba(60, 225, 231, 0.671)',
        'border-style': 'double',
        'border-width': '2',
        'border-color': 'rgba(60, 225, 231, 1)',
        'text-margin-y': '-10',
        'text-halign': 'center',
        // 'text-valign': 'top',
        'font-family': 'Outerspace',
        'font-size': '20',
        color: 'green',
        height: '35',
        width: '35',
      },
    },
  ];
  const layout = {
    name: 'breadthfirst',
  };
  const elements = [
    {
      data: { id: 'one', label: 'Earth' },
      position: { x: 0, y: 0 },
    },
    {
      data: { id: 'two', label: 'Mars' },
      position: { x: 0, y: 0 },
    },
    {
      data: { id: 'three', label: 'Venus' },
      position: { x: 0, y: 0 },
    },
    {
      data: { id: 'four', label: 'Mercury' },
      position: { x: 0, y: 0 },
    },
    {
      data: { id: 'five', label: 'Jubiter' },
      position: { x: 0, y: 0 },
    },
    {
      data: { id: 'six', label: 'Saturn' },
      position: { x: 0, y: 0 },
    },
    {
      data: { id: 'seven', label: 'Uranus' },
      position: { x: 0, y: 0 },
    },
    {
      data: { id: 'eight', label: 'Neptune' },
      position: { x: 0, y: 0 },
    },
    {
      data: { id: 'nine', label: 'Sun' },
      position: { x: 0, y: 0 },
    },
    {
      data: {
        source: 'one',
        target: 'two',
        label: 'Edge from Node1 to Node2',
        id: 'edge1',
      },
    },
    {
      data: {
        source: 'two',
        target: 'three',
        label: 'Edge from Node1 to Node2',
        id: 'edge2',
      },
    },
    {
      data: {
        source: 'two',
        target: 'four',
        label: 'Edge from Node1 to Node2',
        id: 'edge3',
      },
    },
    {
      data: {
        source: 'two',
        target: 'five',
        label: 'Edge from Node1 to Node2',
        id: 'edge4',
      },
    },
    {
      data: {
        source: 'three',
        target: 'five',
        label: 'Edge from Node1 to Node2',
        id: 'edge5',
      },
    },
    {
      data: {
        source: 'five',
        target: 'six',
        label: 'Edge from Node1 to Node2',
        id: 'edge6',
      },
    },
    {
      data: {
        source: 'six',
        target: 'two',
        label: 'Edge from Node1 to Node2',
        id: 'edge7',
      },
    },
    {
      data: {
        source: 'one',
        target: 'three',
        label: 'Edge from Node1 to Node2',
        id: 'edge8',
      },
    },
    {
      data: {
        source: 'three',
        target: 'seven',
        label: 'Edge from Node1 to Node2',
        id: 'edge9',
      },
    },
    {
      data: {
        source: 'two',
        target: 'eight',
        label: 'Edge from Node1 to Node2',
        id: 'edge10',
      },
    },
    {
      data: {
        source: 'four',
        target: 'nine',
        label: 'Edge from Node1 to Node2',
        id: 'edge11',
      },
    },
    {
      data: {
        source: 'five',
        target: 'nine',
        label: 'Edge from Node1 to Node2',
        id: 'edge12',
      },
    },
    {
      data: {
        source: 'one',
        target: 'nine',
        label: 'Edge from Node1 to Node2',
        id: 'edge13',
      },
    },
  ];
  return (
    <div className={styles.galaxy}>
      <div className={styles.stars} />
      <div className={styles.twinkling} />
      <CytoscapeComponent
        elements={elements}
        layout={layout}
        className={styles.graph}
        stylesheet={stylesheet}
        minZoom={0.5}
        maxZoom={2}
        zoom={1}
        wheelSensitivity={0.1}
      >
        {' '}
      </CytoscapeComponent>
    </div>
  );
}
