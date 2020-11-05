import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './TopMenu.css';
import {
  addNodeID,
  addNodeLabel,
  addEdgeID,
  addEdgeSource,
  addEdgeTarget,
  addEdgeWeight,
} from '../../features/graph/graphSlice';

export default function TopMenu() {
  const dispatch = useDispatch();
  function onStartClick() {
    dispatch(addNodeID('n3'));
    dispatch(addNodeLabel('Planet3'));
    dispatch(addEdgeID('e2'));
    dispatch(addEdgeSource('n1'));
    dispatch(addEdgeTarget('n3'));
    dispatch(addEdgeWeight(Math.random()));
  }
  return (
    <div className={styles.top}>
      <button type="button" className={styles.start} onClick={onStartClick}>
        &#x25B6;
      </button>
      <button type="button" className={styles.pause}>
        &#x23F8;
      </button>
      <button type="button" className={styles.dash}>
        &#x23ED;
      </button>
      <div>| Engine |</div>
    </div>
  );
}
