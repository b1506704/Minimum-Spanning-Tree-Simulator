import React from 'react';
import styles from './LazyLoad.css';

export default function LazyLoad(): JSX.Element {
  function transition() {
    // const topOverlay = document.getElementById('top_overlay');
    // const bottomOverlay = document.getElementById('bottom_overlay');
    // access deep nest value
    // if (bottomOverlay) bottomOverlay.style.zIndex = '999';
    // if (topOverlay) topOverlay.style.zIndex = '999';
  }
  return (
    <div className={styles.container} id="container" onMouseEnter={transition}>
      <div className={styles.top_overlay} id="top_overlay" />
      <div className={styles.loading_icon}> </div>
      <div className={styles.bottom_overlay} id="bottom_overlay" />
    </div>
  );
}
