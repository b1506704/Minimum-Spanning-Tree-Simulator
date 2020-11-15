import React from 'react';
import Draggable from 'react-draggable';
import styles from './FloatInfo.css';

export default function FloatInfo() {
  const isOn = document.getElementById('menu') as HTMLElement;
  isOn.style.visibility = 'visible';
  return (
    <Draggable bounds="html">
      <div id="menu" className={styles.container_menu}>
        {}
      </div>
    </Draggable>
  );
}
