import React from 'react';
import styles from './TopMenu.css';

export default function TopMenu() {
  return (
    <div className={styles.top}>
      <div>| Engine |</div>
      <button type="button" className={styles.start}>
        Start
      </button>
      <button type="button" className={styles.pause}>
        Pause
      </button>
      <button type="button" className={styles.dash}>
        Dash
      </button>
    </div>
  );
}
