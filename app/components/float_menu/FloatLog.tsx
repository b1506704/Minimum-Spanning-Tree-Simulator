import React from 'react';
import Draggable from 'react-draggable';
import styles from './FloatLog.css';

export default function FloatLog() {
  return (
    <Draggable bounds="html">
      <div id="menu" className={styles.container_menu}>
        {}
      </div>
    </Draggable>
  );
}
